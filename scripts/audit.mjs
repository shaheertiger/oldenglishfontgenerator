#!/usr/bin/env node
// SEO audit against a running server (npm run build && npx next start -p 3100).
//   node scripts/audit.mjs [baseUrl]
// Reports per-URL title/description length, H1, copy word count, internal
// links, JSON-LD types and Fraktur characters in the raw HTML; then checks
// duplicate titles/descriptions and 5-word shingle overlap between pages.

const BASE = process.argv[2] ?? "http://localhost:3100";
const SITE = "https://www.oldenglishfontgenerator.com";

const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&nbsp;/g, " ");
const strip = (html) => decode(html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

const sitemap = await (await fetch(`${BASE}/sitemap.xml`)).text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(SITE, BASE));

const rows = [];
const shingles = new Map();
for (const url of urls) {
  const html = await (await fetch(url)).text();
  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "");
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1] ?? "";
  const h1 = strip(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "");
  const main = html.match(/<main>([\s\S]*?)<\/main>/)?.[1] ?? "";
  // Copy only: drop tool output (style rows, letter grids, tables of glyphs).
  const copyHtml = main
    .replace(/<ul class="results">[\s\S]*?<\/ul>/g, " ")
    .replace(/<ul class="letter-grid">[\s\S]*?<\/ul>/g, " ")
    .replace(/<div class="presets"[\s\S]*?<\/div>/g, " ")
    .replace(/<p class="sr-only"[\s\S]*?<\/p>/g, " ");
  const copy = strip(copyHtml);
  const words = copy.split(/\s+/).filter((w) => /[A-Za-z]/.test(w));
  const links = [...html.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => m[1]).filter((h) => h.startsWith("/") || h.startsWith(SITE));
  const types = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1])["@type"]);
  const frak = (html.match(/[\u{1D504}-\u{1D59F}ℭℌℑℜℨ]/gu) ?? []).length;
  rows.push({
    path: url.replace(BASE, "") || "/",
    titleLen: title.length,
    descLen: desc.length,
    h1,
    words: words.length,
    links: links.length,
    schema: types.join("+"),
    frakturChars: frak,
    canonicalOk: canonical === url.replace(BASE, SITE) || ((canonical === `${SITE}/` || canonical === SITE) && url === `${BASE}/`),
    title,
    desc,
  });
  const norm = words.map((w) => w.toLowerCase().replace(/[^a-z0-9']/g, "")).filter(Boolean);
  const set = new Set();
  for (let i = 0; i + 5 <= norm.length; i++) set.add(norm.slice(i, i + 5).join(" "));
  shingles.set(url.replace(BASE, "") || "/", set);
}

console.log(`\nIndexable URLs in sitemap: ${urls.length}\n`);
console.table(rows.map(({ title, desc, ...r }) => r));

const dupe = (k) => {
  const seen = new Map();
  for (const r of rows) seen.set(r[k], [...(seen.get(r[k]) ?? []), r.path]);
  return [...seen.entries()].filter(([, v]) => v.length > 1);
};
console.log("Duplicate titles:", dupe("title").length ? dupe("title") : "none");
console.log("Duplicate descriptions:", dupe("desc").length ? dupe("desc") : "none");

const paths = [...shingles.keys()];
const pairs = [];
for (let i = 0; i < paths.length; i++)
  for (let j = i + 1; j < paths.length; j++) {
    const a = shingles.get(paths[i]);
    const b = shingles.get(paths[j]);
    let inter = 0;
    for (const s of a) if (b.has(s)) inter++;
    const ratio = inter / Math.max(1, Math.min(a.size, b.size));
    pairs.push({ a: paths[i], b: paths[j], overlap: +(ratio * 100).toFixed(1) });
  }
pairs.sort((x, y) => y.overlap - x.overlap);
console.log("\nHighest 5-word shingle overlap between pages (main copy, % of smaller page):");
console.table(pairs.slice(0, 8));
const bad = pairs.filter((p) => p.overlap > 15);
console.log(bad.length ? `FAIL: ${bad.length} pairs above 15%` : "PASS: no pair above 15%");
