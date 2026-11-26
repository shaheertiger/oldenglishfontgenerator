#!/usr/bin/env node
// Lighthouse mobile performance for the owner pages (growth plan step 5:
// performance >= 90, CLS < 0.1). Results go to research/perf/<date>-lighthouse.json
// and a table is appended to docs/performance.md.
//   node scripts/lighthouse.mjs [baseUrl]     (default http://localhost:3000)
// Uses the pre-installed Chromium (CHROME_PATH or /opt/pw-browsers/chromium).
import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, appendFileSync, mkdirSync, existsSync } from "node:fs";
import { OWNER_PAGES } from "./owner-pages.mjs";

const base = process.argv[2] ?? "http://localhost:3000";
const chrome = process.env.CHROME_PATH || "/opt/pw-browsers/chromium";
const day = new Date().toISOString().slice(0, 10);
mkdirSync("research/perf", { recursive: true });
const rows = [];
for (const path of OWNER_PAGES) {
  const out = `/tmp/lh-${path.replace(/\W+/g, "_") || "home"}.json`;
  try {
    execFileSync("npx", ["-y", "lighthouse@12.2.1", base + path, `--chrome-path=${chrome}`, "--chrome-flags=--headless --no-sandbox",
      "--only-categories=performance", "--form-factor=mobile", "--output=json", `--output-path=${out}`, "--quiet"], { stdio: "ignore", timeout: 180000 });
    const d = JSON.parse(readFileSync(out, "utf8"));
    const a = d.audits;
    rows.push({ path, score: Math.round(d.categories.performance.score * 100), cls: +a["cumulative-layout-shift"].numericValue.toFixed(3),
      lcp: Math.round(a["largest-contentful-paint"].numericValue), tbt: Math.round(a["total-blocking-time"].numericValue), dom: a["dom-size"].numericValue });
  } catch (e) {
    rows.push({ path, error: String(e.message).slice(0, 120) });
  }
  const r = rows.at(-1);
  console.log(r.error ? `ERR   ${path} ${r.error}` : `${r.score >= 90 && r.cls < 0.1 ? "PASS" : "FAIL"}  ${path.padEnd(38)} perf ${r.score}  CLS ${r.cls}  LCP ${r.lcp}ms  TBT ${r.tbt}ms  DOM ${r.dom}`);
}
writeFileSync(`research/perf/${day}-lighthouse.json`, JSON.stringify({ at: new Date().toISOString(), base, rows }, null, 1));
if (!existsSync("docs/performance.md"))
  writeFileSync("docs/performance.md", "# Performance (growth plan step 5)\n\nTarget on every owner page: Lighthouse mobile performance ≥ 90 and CLS < 0.1. Measured with `node scripts/lighthouse.mjs` (Lighthouse 12.2.1, mobile emulation, local production build; real-world numbers on Vercel can differ). Above-the-fold check: `node scripts/above-fold.mjs`.\n");
appendFileSync("docs/performance.md", `\n## ${day} (${base.includes("localhost") ? "local production build" : base})\n\n| Page | Performance | CLS | LCP (ms) | TBT (ms) | DOM nodes |\n|---|---|---|---|---|---|\n${rows.map((r) => (r.error ? `| ${r.path} | error | | | | |` : `| ${r.path} | ${r.score} | ${r.cls} | ${r.lcp} | ${r.tbt} | ${r.dom} |`)).join("\n")}\n`);
process.exit(rows.every((r) => !r.error && r.score >= 90 && r.cls < 0.1) ? 0 : 1);
