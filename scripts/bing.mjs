#!/usr/bin/env node
// Weekly Bing routine. Saves raw Bing Webmaster data to research/bing/<date>/
// and writes the weekly report (research/bing/<date>/report.md, appended to
// docs/bing-weekly.md).
//
//   npm run bing                      pull + report
//   npm run bing -- --no-pull         report from the newest saved pull
//   npm run bing -- --url /path       a URL's Bing clicks/impressions/position and
//                                     Copilot citations (run before ANY prune,
//                                     redirect or merge)
//
// Bing key: env `apikey` (or BING_WEBMASTER_API_KEY). Never printed or saved.
// Copilot: Bing's API has no AI-performance method (checked 2026-11-26), so
// export "AI Performance" > grounding queries and overview from Bing Webmaster
// Tools and drop both CSVs in research/bing/<date>/ before running; the report
// attributes citations to pages with scripts/lib/citations.mjs.
//
// Routine (docs/fix-2026-11.md): fix at most 3 pages a week (title, meta,
// first sentence, one H2 or FAQ, one internal link), log each change in
// docs/bing-experiments.md, ping IndexNow with only those URLs, and compare
// after 14 days. Monthly: Bing Site Scan (in the Bing UI), refresh years and
// test dates. Never prune/redirect/merge without --url first.
import { mkdirSync, writeFileSync, readFileSync, readdirSync, existsSync, appendFileSync } from "node:fs";
import { resolve } from "node:path";
import { citationsByPage, readCitationCsv, ownerOf } from "./lib/citations.mjs";

const ROOT = resolve(import.meta.dirname, "..");
const KEY = process.env.apikey || process.env.BING_WEBMASTER_API_KEY;
const SITE = "https://oldenglishfontgenerator.com/"; // the verified Bing property (it reports www URLs)
const API = "https://ssl.bing.com/webmaster/api.svc/json";
const METHODS = ["GetQueryStats", "GetPageStats", "GetRankAndTrafficStats", "GetCrawlStats", "GetCrawlIssues", "GetFeeds", "GetLinkCounts", "GetUrlSubmissionQuota"];
const args = process.argv.slice(2);
const today = new Date().toISOString().slice(0, 10);
const dir = (d) => resolve(ROOT, "research/bing", d);

const dateOf = (s) => new Date(+String(s).match(/-?\d+/)[0]).toISOString().slice(0, 10);
const pathOf = (u) => { try { return new URL(u).pathname.replace(/\/$/, "") || "/"; } catch { return u; } };

async function pull() {
  if (!KEY) throw new Error("Bing key not set (env apikey or BING_WEBMASTER_API_KEY)");
  mkdirSync(dir(today), { recursive: true });
  for (const m of METHODS) {
    const r = await fetch(`${API}/${m}?siteUrl=${encodeURIComponent(SITE)}&apikey=${KEY}`);
    const text = await r.text();
    if (!r.ok || text.includes(KEY)) { console.error(`${m}: ${r.status}`); continue; }
    writeFileSync(resolve(dir(today), `${m}.json`), text);
  }
  return today;
}

function newestPull() {
  return readdirSync(resolve(ROOT, "research/bing")).filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d) && existsSync(resolve(dir(d), "GetQueryStats.json"))).sort().pop();
}

const load = (d, m) => JSON.parse(readFileSync(resolve(dir(d), `${m}.json`), "utf8")).d ?? [];

/** Weekly buckets keyed by row key -> {date -> {clicks, impr, posw}} */
function buckets(rows, keyFn) {
  const out = new Map();
  for (const r of rows) {
    const k = keyFn(r.Query);
    const d = dateOf(r.Date);
    const e = out.get(k) ?? new Map();
    const b = e.get(d) ?? { clicks: 0, impr: 0, posw: 0 };
    b.clicks += r.Clicks; b.impr += r.Impressions; b.posw += r.AvgImpressionPosition * r.Impressions;
    e.set(d, b); out.set(k, e);
  }
  return out;
}
const sum = (m, dates) => {
  const t = { clicks: 0, impr: 0, posw: 0 };
  for (const d of dates) { const b = m.get(d); if (b) { t.clicks += b.clicks; t.impr += b.impr; t.posw += b.posw; } }
  return { ...t, pos: t.impr ? t.posw / t.impr : null, ctr: t.impr ? t.clicks / t.impr : 0 };
};

function citations(d) {
  const f = existsSync(dir(d)) ? readdirSync(dir(d)).find((x) => x.includes("AISearchQueriesReport")) : null;
  return f ? citationsByPage(readCitationCsv(resolve(dir(d), f))) : null;
}

function urlCheck(path, d) {
  const pages = buckets(load(d, "GetPageStats"), pathOf).get(path);
  const all = pages ? sum(pages, [...pages.keys()]) : { clicks: 0, impr: 0, pos: null };
  const before = pages ? sum(pages, [...pages.keys()].filter((x) => x < "2026-11-05")) : all;
  const cit = citations(d)?.find(([p]) => p === path);
  console.log(`${path} (Bing data ${d})`);
  console.log(`  all weeks: ${all.clicks} clicks, ${all.impr} impressions, position ${all.pos?.toFixed(1) ?? "-"}`);
  console.log(`  before 2026-11-05: ${before.clicks} clicks, ${before.impr} impressions`);
  console.log(`  Copilot citations (attributed): ${cit ? cit[1].citations : 0}${cit ? ` from ${cit[1].queries.length} grounding queries` : ""}`);
  const keep = all.clicks > 0 || all.impr >= 50 || (cit && cit[1].citations > 0);
  console.log(keep ? "  => KEEP: has Bing clicks, 50+ impressions or citations. Don't prune, redirect or merge without a written reason." : "  => no Bing demand recorded");
}

function report(d) {
  const q = buckets(load(d, "GetQueryStats"), (x) => x);
  const dates = [...new Set([...q.values()].flatMap((m) => [...m.keys()]))].sort();
  const [prev, last] = dates.slice(-2);
  const L = [];
  L.push(`## Bing weekly report ${today} (week of ${last}, compared with ${prev})`, "");
  const rows = [...q].map(([query, m]) => ({ query, now: sum(m, [last]), before: sum(m, [prev]), all: sum(m, dates) }));

  const top3 = (r) => r.pos != null && r.pos <= 3;
  const entering = rows.filter((r) => top3(r.now) && !top3(r.before) && r.now.impr >= 3);
  const leaving = rows.filter((r) => !top3(r.now) && top3(r.before) && r.before.impr >= 3);
  L.push("### Queries entering the top 3", "", ...(entering.length ? entering.map((r) => `- ${r.query}: #${r.before.pos?.toFixed(1) ?? "-"} → #${r.now.pos.toFixed(1)} (${r.now.impr} impressions)`) : ["- none"]), "");
  L.push("### Queries leaving the top 3", "", ...(leaving.length ? leaving.map((r) => `- ${r.query}: #${r.before.pos.toFixed(1)} → #${r.now.pos?.toFixed(1) ?? "not shown"}`) : ["- none"]), "");

  const mid = rows.filter((r) => r.now.pos != null && r.now.pos > 3 && r.now.pos <= 10).sort((a, b) => b.now.impr - a.now.impr).slice(0, 20);
  L.push("### Positions 4–10 by impressions (this week)", "", "| Query | Impressions | Clicks | Position | Owner page |", "|---|---|---|---|---|",
    ...mid.map((r) => `| ${r.query} | ${r.now.impr} | ${r.now.clicks} | ${r.now.pos.toFixed(1)} | ${ownerOf(r.query)} |`), "");

  const lowCtr = rows.filter((r) => r.all.pos != null && r.all.pos <= 5 && r.all.impr >= 20 && r.all.ctr < 0.1).sort((a, b) => b.all.impr - a.all.impr).slice(0, 15);
  L.push("### Top-5 queries under 10% CTR (all saved weeks, 20+ impressions)", "", "| Query | Impressions | CTR | Position | Owner page |", "|---|---|---|---|---|",
    ...lowCtr.map((r) => `| ${r.query} | ${r.all.impr} | ${(r.all.ctr * 100).toFixed(1)}% | ${r.all.pos.toFixed(1)} | ${ownerOf(r.query)} |`), "");

  const seenBefore = new Set(rows.filter((r) => dates.slice(0, -1).some((x) => q.get(r.query).has(x))).map((r) => r.query));
  const fresh = rows.filter((r) => r.query.split(/\s+/).length >= 4 && !seenBefore.has(r.query) && r.now.impr > 0).sort((a, b) => b.now.impr - a.now.impr).slice(0, 20);
  L.push("### New 4+ word queries this week", "", ...(fresh.length ? fresh.map((r) => `- ${r.query} (${r.now.impr} impressions, #${r.now.pos.toFixed(1)}) → ${ownerOf(r.query)}`) : ["- none"]), "");

  const traffic = load(d, "GetRankAndTrafficStats").map((r) => ({ d: dateOf(r.Date), c: r.Clicks, i: r.Impressions })).sort((a, b) => a.d.localeCompare(b.d));
  const w = (k) => traffic.slice(-7 * (k + 1), traffic.length - 7 * k);
  const avg = (a) => (a.length ? a.reduce((s, x) => s + x.c, 0) / a.length : 0);
  L.push("### Clicks per day", "", `- last 7 days: ${avg(w(0)).toFixed(1)}/day (${w(0)[0]?.d}–${w(0).at(-1)?.d})`, `- previous 7 days: ${avg(w(1)).toFixed(1)}/day`, `- targets: 20–30/day 4 weeks after the fix; 40+/day at 3 months`, "");

  const cit = citations(d);
  L.push("### Copilot citations by page (attributed from grounding queries)", "");
  if (cit) L.push("| Page | Citations | Top grounding query |", "|---|---|---|", ...cit.slice(0, 20).map(([p, e]) => `| ${p} | ${e.citations} | ${e.queries.sort((a, b) => b.citations - a.citations)[0].query} |`));
  else L.push(`- No AISearchQueriesReport CSV in research/bing/${d}/. Export it from Bing Webmaster Tools > AI Performance and re-run with --no-pull.`);
  L.push("");

  // Experiments due for their 14-day review.
  const exp = resolve(ROOT, "docs/bing-experiments.md");
  if (existsSync(exp)) {
    const due = readFileSync(exp, "utf8").split("\n").filter((l) => /^\| \d{4}-\d{2}-\d{2}/.test(l)).filter((l) => {
      const start = l.slice(2, 12);
      return Date.parse(today) - Date.parse(start) >= 14 * 864e5 && !/kept|reverted/i.test(l);
    });
    L.push("### Experiments due for review (14+ days)", "", ...(due.length ? due : ["- none"]), "");
  }
  L.push("### This week's actions (max 3 pages)", "", "1. Pick from the 4–10 list and low-CTR list above; fix title, meta, first sentence, one H2/FAQ or one internal link.", "2. Log each change with its baseline in docs/bing-experiments.md.", "3. After deploy: `npm run indexnow -- --urls <changed paths>`.", "4. Monthly: Bing Site Scan, refresh years and test dates.", "");

  const text = L.join("\n");
  writeFileSync(resolve(dir(d), "report.md"), text + "\n");
  appendFileSync(resolve(ROOT, "docs/bing-weekly.md"), "\n" + text + "\n");
  console.log(text);
}

const urlArg = args.includes("--url") ? args[args.indexOf("--url") + 1] : null;
const d = args.includes("--no-pull") || urlArg ? newestPull() : await pull();
if (urlArg) urlCheck(urlArg.replace(/\/$/, "") || "/", d);
else report(d);
