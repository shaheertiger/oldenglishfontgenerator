#!/usr/bin/env node
// Content checks on the page source files (no build needed). Fails (exit 1) on:
//  - two indexable pages sharing more than 30% of their prose (5-word shingles,
//    % of the smaller page) after masking each page's own name (H1/slug words)
//  - title > 60 chars, meta description > 160 chars, duplicate title/description
//  - links to external sites outside ALLOWED_HOSTS (no links to our other sites)
//  - unverified platform claims ("works on Instagram") without a dated test
// Run: node --experimental-strip-types scripts/check-content.mjs [--verbose]
import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { isServed } from "../lib/redirects.mjs";

const OVERLAP_MAX = 30;
// Reference sources only. Never add a site we own or run.
export const ALLOWED_HOSTS = [
  "unicode.org", "www.unicode.org", "en.wikipedia.org", "fonts.google.com", "github.com",
  "www.loc.gov", "www.bl.uk", "www.metmuseum.org", "www.britannica.com", "scripts.sil.org",
  "openfontlicense.org", "www.gutenberg.org", "support.microsoft.com", "support.google.com",
];
const PLATFORM = /\b(instagram|tiktok|discord|roblox|youtube|snapchat|twitch|facebook|whatsapp|twitter|iphone|android|fortnite|minecraft|word|google docs|pinterest)\b/i;
const CLAIM = /\b(works?|working|supported|supports|shows? up|displays?|renders?|accepts?|allowed|won't show|doesn't (work|show|display))\b/i;
const TESTED = /\btested\b.*\b20\d\d\b|\b20\d\d-\d\d-\d\d\b/i;

const root = resolve(import.meta.dirname, "..");
const dirs = ["content/pages"];
const pages = [];
for (const d of dirs) {
  for (const f of readdirSync(resolve(root, d))) {
    if (!f.endsWith(".ts") || ["types.ts", "index.ts"].includes(f)) continue;
    // Retired pages keep their source file (we never delete) but are not served.
    if (readFileSync(resolve(root, d, f), "utf8").includes("@retired")) continue;
    const mod = await import(pathToFileURL(resolve(root, d, f)).href);
    const p = mod.default;
    if (p && typeof p === "object" && "title" in p) pages.push({ ...p, file: `${d}/${f}`, path: `/${p.slug}` });
  }
}
// Extra page sets register themselves here (letters, symbols, es, ...).
for (const f of ["lib/check-sources.ts"]) {
  try {
    const mod = await import(pathToFileURL(resolve(root, f)).href);
    for (const p of mod.CHECK_PAGES ?? []) pages.push(p);
  } catch (e) {
    if (e.code !== "ERR_MODULE_NOT_FOUND") throw e;
  }
}

const strip = (s) => String(s ?? "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
function prose(p) {
  const out = [p.intro, p.stylesHeading, p.howTo?.heading, ...(p.howTo?.steps ?? []).flat(), p.built, p.answer, ...(p.extraProse ?? [])];
  for (const s of p.sections ?? []) {
    out.push(s.h2);
    for (const b of s.blocks) {
      if (b.p) out.push(b.p);
      if (b.ul) out.push(...b.ul);
      if (b.cards) out.push(...b.cards.flatMap((c) => [c.h, c.p]));
      if (b.table) for (const r of b.table.rows) out.push(...r.filter((_, j) => !b.table.glyphCols?.includes(j)));
    }
  }
  for (const f of p.faq ?? []) out.push(f.q, f.a);
  return out.filter(Boolean).map(strip).join(" ");
}
function links(p) {
  return [...JSON.stringify(p).matchAll(/\]\((https?:\/\/[^)\s]+)\)|href=\\?"(https?:\/\/[^"\\]+)/g)].map((m) => m[1] ?? m[2]);
}
function maskWords(p) {
  const src = `${p.h1} ${p.crumb ?? ""} ${p.slug.replace(/[/-]/g, " ")} ${(p.mask ?? []).join(" ")}`.toLowerCase();
  return new Set(src.split(/[^a-z0-9]+/).filter((w) => w.length > 0));
}
function shingles(p) {
  const mask = maskWords(p);
  const words = prose(p).toLowerCase().split(/\s+/).map((w) => w.replace(/[^a-z0-9']/g, "")).filter(Boolean).map((w) => (mask.has(w) ? "#" : w));
  const set = new Set();
  for (let i = 0; i + 5 <= words.length; i++) set.add(words.slice(i, i + 5).join(" "));
  return set;
}

const errors = [];
const warnings = [];
const seen = { title: new Map(), description: new Map() };
for (const p of pages) {
  if (p.noindex) continue;
  if (p.title.length > 60) errors.push(`${p.path}: title ${p.title.length} chars > 60 ("${p.title}")`);
  if (p.description.length > 160) errors.push(`${p.path}: description ${p.description.length} chars > 160`);
  for (const k of ["title", "description"]) {
    const other = seen[k].get(p[k]);
    if (other) errors.push(`${p.path}: duplicate ${k} with ${other}`);
    seen[k].set(p[k], p.path);
  }
  for (const u of links(p)) {
    const host = new URL(u).host;
    if (!ALLOWED_HOSTS.includes(host)) errors.push(`${p.path}: external link to ${host} (not an allowed reference host)`);
  }
  const internal = [...JSON.stringify(p).matchAll(/\]\((\/[^)\s#]*)/g)].map((m) => m[1]);
  for (const h of [...internal, ...(p.related?.hrefs ?? [])]) {
    if (!isServed(h)) errors.push(`${p.path}: links to ${h}, which is redirected or 410 (link the final URL)`);
  }
  for (const sentence of prose(p).split(/(?<=[.!?])\s+/)) {
    if (PLATFORM.test(sentence) && CLAIM.test(sentence) && !TESTED.test(sentence))
      (p.strictClaims ? errors : warnings).push(`${p.path}: untested platform claim: "${sentence.slice(0, 140)}"`);
  }
}

const idx = pages.filter((p) => !p.noindex).map((p) => ({ path: p.path, sh: shingles(p) }));
const pairs = [];
for (let i = 0; i < idx.length; i++)
  for (let j = i + 1; j < idx.length; j++) {
    const a = idx[i].sh, b = idx[j].sh;
    let inter = 0;
    for (const s of a) if (b.has(s)) inter++;
    const pct = (100 * inter) / Math.max(1, Math.min(a.size, b.size));
    pairs.push([pct, idx[i].path, idx[j].path, Math.min(a.size, b.size)]);
  }
pairs.sort((x, y) => y[0] - x[0]);
for (const [pct, a, b] of pairs) if (pct > OVERLAP_MAX) errors.push(`overlap ${pct.toFixed(1)}% between ${a} and ${b}`);

const verbose = process.argv.includes("--verbose");
console.log(`check-content: ${pages.length} pages`);
console.log("Highest prose overlap (masked, % of smaller page):");
for (const [pct, a, b, n] of pairs.slice(0, verbose ? 30 : 8)) console.log(`  ${pct.toFixed(1).padStart(5)}%  ${a}  ~  ${b}  (${n} shingles)`);
if (warnings.length) console.log(`\n${warnings.length} warnings${verbose ? ":\n  " + warnings.join("\n  ") : " (--verbose to list)"}`);
if (errors.length) {
  console.error(`\nFAIL (${errors.length}):\n  ` + errors.join("\n  "));
  process.exit(1);
}
console.log("\nPASS");
