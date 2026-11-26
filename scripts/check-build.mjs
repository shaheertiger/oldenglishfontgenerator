#!/usr/bin/env node
// Post-build checks against the real server output. Runs as `postbuild`, so a
// failure fails the build (and the Vercel deploy). Starts `next start` itself
// unless a base URL is given:  node scripts/check-build.mjs [http://localhost:3100]
//
// Fails when:
//  1. a restored URL (LIVE list + the Phase 0 "restore" list) doesn't return 200
//     or has no tool (generator, copy grid or copyable table) in the server HTML
//  2. any page links to an external host outside the reference allowlist
//     (never to another site of ours)
//  3. a redirect isn't one hop to a 200 page (www and apex host)
//  4. a URL that had Bing clicks before 2026-11-05 returns 404/410 and isn't in
//     research/bing/allowed-gone.json with a reason
//  5. sitemap lastmod values are all the same date, or the sitemap lists a URL
//     that doesn't return 200
//  6. two indexable pages share > 30% of their prose after masking each page's
//     own name (5-word shingles of the main copy, tool output removed)
import { spawn } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import { REDIRECTS, LIVE } from "../lib/redirects.mjs";

const ROOT = new URL("..", import.meta.url).pathname;
const SITE = "https://www.oldenglishfontgenerator.com";
const ALLOWED_HOSTS = new Set([
  "www.oldenglishfontgenerator.com", "unicode.org", "www.unicode.org", "en.wikipedia.org", "fonts.google.com",
  "github.com", "www.loc.gov", "www.bl.uk", "www.metmuseum.org", "www.britannica.com", "scripts.sil.org",
  "openfontlicense.org", "www.gutenberg.org", "support.microsoft.com", "support.google.com",
  "www.googletagmanager.com", "vercel.com",
  // Third-party policy links on /privacy (required for ads/analytics); not our sites.
  "www.google.com", "policies.google.com", "www.aboutads.info",
]);
const OVERLAP_MAX = 30;

let base = process.argv[2];
let server;
if (!base) {
  const port = 3000 + Math.floor(Math.random() * 900) + 50;
  base = `http://localhost:${port}`;
  server = spawn("npx", ["next", "start", "-p", String(port)], { cwd: ROOT, stdio: "ignore" });
  for (let i = 0; i < 60; i++) {
    try { await fetch(base); break; } catch { await new Promise((r) => setTimeout(r, 1000)); }
  }
}

const errors = [];
const get = (path, opts = {}) => fetch(base + path, { redirect: "manual", ...opts });

async function pool(items, n, fn) {
  const out = [];
  let i = 0;
  await Promise.all(Array.from({ length: n }, async () => { while (i < items.length) { const k = i++; out[k] = await fn(items[k]); } }));
  return out;
}

// ---------- 1. restored URLs ----------
const phase0 = (() => {
  const f = `${ROOT}research/bing/2026-11-26/phase0_urls.csv`;
  if (!existsSync(f)) return [];
  const [head, ...rows] = readFileSync(f, "utf8").trim().split("\n");
  const cols = head.split(",");
  return rows.map((r) => Object.fromEntries(r.split(",").map((v, i) => [cols[i], v])));
})();
const redirectSources = new Set(REDIRECTS.map((r) => r.source));
const restored = [...new Set([...LIVE, ...phase0.filter((r) => r.decision === "restore").map((r) => r.url)])].filter((u) => !redirectSources.has(u));
const TOOL = /class="gen"|class="letter-grid"|class="table-wrap"/;
await pool(restored, 8, async (u) => {
  const r = await get(u);
  if (r.status !== 200) return errors.push(`restored ${u} returns ${r.status}`);
  const html = await r.text();
  if (!TOOL.test(html)) errors.push(`restored ${u} has no tool in the server HTML`);
});

// ---------- 5. sitemap ----------
const sm = await (await get("/sitemap.xml")).text();
const urls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(SITE, ""));
const lastmods = [...sm.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1].slice(0, 10));
if (new Set(lastmods).size < 2) errors.push(`sitemap: all ${lastmods.length} lastmod values are the same date`);

// ---------- 2 + 6. every indexable page ----------
const decode = (s) => s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&nbsp;/g, " ");
const strip = (h) => decode(h.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
const internalLinks = new Set();
const pages = await pool(urls, 8, async (u) => {
  const r = await get(u || "/");
  if (r.status !== 200) { errors.push(`sitemap lists ${u || "/"} but it returns ${r.status}`); return null; }
  const html = await r.text();
  for (const m of html.matchAll(/<a [^>]*href="(\/[^"#?]*)/g)) internalLinks.add(m[1] || "/");
  for (const m of html.matchAll(/<a [^>]*href="(https?:\/\/[^"]+)"/g)) {
    const host = new URL(m[1]).host;
    if (!ALLOWED_HOSTS.has(host)) errors.push(`${u || "/"} links to external host ${host}`);
  }
  const main = (html.match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? "")
    .replace(/<ul class="results">[\s\S]*?<\/ul>/g, " ")
    .replace(/<ul class="letter-grid">[\s\S]*?<\/ul>/g, " ")
    .replace(/<div class="grid-label">[\s\S]*?<\/div>/g, " ")
    .replace(/<div class="presets"[\s\S]*?<\/div>/g, " ")
    .replace(/<p class="sr-only"[\s\S]*?<\/p>/g, " ")
    .replace(/<p class="updated"[\s\S]*?<\/p>/g, " ")
    .replace(/<nav class="breadcrumb"[\s\S]*?<\/nav>/g, " ")
    .replace(/<td class="glyph">[\s\S]*?<\/td>/g, " ")
    .replace(/<div class="table-wrap stats">[\s\S]*?<\/table>/g, " ");
  const h1 = strip(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "").toLowerCase();
  const mask = new Set([...h1.split(/[^a-z0-9]+/), ...(u || "").toLowerCase().split(/[^a-z0-9]+/)].filter(Boolean));
  const words = strip(main).toLowerCase().split(/\s+/).map((w) => w.replace(/[^a-z0-9']/g, "")).filter(Boolean).map((w) => (mask.has(w) ? "#" : w));
  const sh = new Set();
  for (let i = 0; i + 5 <= words.length; i++) sh.add(words.slice(i, i + 5).join(" "));
  return { path: u || "/", sh, es: u.startsWith("/es") };
});
const idx = pages.filter(Boolean);
let worst = [0, "", ""];
for (let i = 0; i < idx.length; i++)
  for (let j = i + 1; j < idx.length; j++) {
    const a = idx[i].sh, b = idx[j].sh;
    let inter = 0;
    for (const s of a) if (b.has(s)) inter++;
    const pct = (100 * inter) / Math.max(1, Math.min(a.size, b.size));
    if (pct > worst[0]) worst = [pct, idx[i].path, idx[j].path];
    if (pct > OVERLAP_MAX) errors.push(`overlap ${pct.toFixed(1)}% between ${idx[i].path} and ${idx[j].path}`);
  }

// Internal links must point straight at a 200 page (no redirect, no 404/410).
await pool([...internalLinks], 8, async (h) => {
  const s = (await get(h)).status;
  if (s !== 200) errors.push(`internal link ${h} returns ${s}`);
});

// ---------- 3. redirects: one hop to a 200 (www + apex) ----------
await pool(REDIRECTS, 8, async ({ source, destination }) => {
  for (const host of [null, "oldenglishfontgenerator.com"]) {
    const r = await get(source, host ? { headers: { host } } : {});
    const loc = r.headers.get("location") ?? "";
    if (![301, 308].includes(r.status)) { errors.push(`${host ?? "www"} ${source}: expected 301, got ${r.status}`); continue; }
    const path = loc.replace(/^https?:\/\/[^/]+/, "");
    if (path !== destination) errors.push(`${host ?? "www"} ${source} -> ${loc}, expected ${destination}`);
    const d = await get(path);
    if (d.status !== 200) errors.push(`redirect chain: ${source} -> ${path} returns ${d.status}`);
  }
});

// ---------- 4. URLs with Bing clicks before Nov 5 ----------
const allowedGone = existsSync(`${ROOT}research/bing/allowed-gone.json`) ? JSON.parse(readFileSync(`${ROOT}research/bing/allowed-gone.json`, "utf8")) : {};
await pool(phase0.filter((r) => +r.bing_clicks_before > 0), 8, async (r) => {
  const s = (await get(r.url)).status;
  if ((s === 404 || s === 410) && !allowedGone[r.url]) errors.push(`${r.url} had ${r.bing_clicks_before} Bing clicks before Nov 5 but returns ${s} (add it to research/bing/allowed-gone.json with a reason, or restore it)`);
});

server?.kill();
console.log(`check-build: ${restored.length} restored URLs, ${urls.length} sitemap URLs, ${REDIRECTS.length} redirects, ${phase0.length} pre-Nov-1 URLs`);
console.log(`highest rendered prose overlap: ${worst[0].toFixed(1)}% (${worst[1]} ~ ${worst[2]}); ${new Set(lastmods).size} distinct lastmod dates`);
if (errors.length) {
  console.error(`FAIL (${errors.length}):\n  ` + [...new Set(errors)].join("\n  "));
  process.exit(1);
}
console.log("PASS");
