#!/usr/bin/env node
// Engagement check (growth plan step 4): on a 360×740 phone viewport, is the
// input box visible without scrolling, and how many style rows are fully
// visible above the fold? Target: input + 6 styles. Also reports layout shift.
//   node scripts/above-fold.mjs [baseUrl] [--json out.json]
import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright");
import { writeFileSync } from "node:fs";
import { OWNER_PAGES } from "./owner-pages.mjs";

const base = process.argv[2]?.startsWith("http") ? process.argv[2] : "http://localhost:3000";
const out = process.argv.includes("--json") ? process.argv[process.argv.indexOf("--json") + 1] : null;
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 360, height: 740 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
const rows = [];
for (const path of OWNER_PAGES) {
  const page = await ctx.newPage();
  await page.addInitScript(() => {
    window.__cls = 0;
    new PerformanceObserver((l) => { for (const e of l.getEntries()) if (!e.hadRecentInput) window.__cls += e.value; }).observe({ type: "layout-shift", buffered: true });
  });
  await page.goto(base + path, { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  const r = await page.evaluate(() => {
    const vh = window.innerHeight;
    const input = document.querySelector(".gen textarea, .gen input");
    const ib = input?.getBoundingClientRect();
    const cards = [...document.querySelectorAll(".results .style-card")].filter((c) => { const b = c.getBoundingClientRect(); return b.top >= 0 && b.bottom <= vh; }).length;
    return { inputVisible: !!ib && ib.bottom <= vh && ib.top >= 0, inputBottom: ib ? Math.round(ib.bottom) : null, stylesAboveFold: cards, cls: +window.__cls.toFixed(3) };
  });
  rows.push({ path, ...r, pass: r.inputVisible && r.stylesAboveFold >= 6 && r.cls < 0.1 });
  await page.close();
}
await browser.close();
for (const r of rows) console.log(`${r.pass ? "PASS" : "FAIL"}  ${r.path.padEnd(38)} input ${r.inputVisible ? "visible" : "below fold"} (bottom ${r.inputBottom}px), ${r.stylesAboveFold} styles above fold, CLS ${r.cls}`);
if (out) writeFileSync(out, JSON.stringify({ at: new Date().toISOString(), viewport: "360x740", rows }, null, 1));
process.exit(rows.every((r) => r.pass) ? 0 : 1);
