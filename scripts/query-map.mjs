#!/usr/bin/env node
// Writes docs/bing-query-map.md: every query in the newest Bing keyword report
// and Copilot grounding-query report, grouped by its one owning URL
// (scripts/lib/citations.mjs ownerOf). Run after changing the owner rules:
//   node scripts/query-map.mjs [research/bing/<date>]
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { ownerOf, readCitationCsv } from "./lib/citations.mjs";

const D = (process.argv[2] ?? "research/bing/2026-11-26").replace(/\/$/, "") + "/";
const pick = (part) => readdirSync(D).find((f) => f.includes(part));
const kw = readFileSync(D + pick("KeywordReport"), "utf8").replace(/^﻿/, "").trim().split(/\r?\n/).slice(1)
  .map((l) => l.replace(/^"|"$/g, "").split('","')).map(([q, i, c]) => ({ q, i: +i, c: +c }));
const cit = readCitationCsv(D + pick("AISearchQueriesReport"));

const fam = new Map();
const get = (o) => fam.get(o) ?? fam.set(o, { i: 0, c: 0, cit: 0, q: [], cq: [] }).get(o);
for (const k of kw) { const f = get(ownerOf(k.q)); f.i += k.i; f.c += k.c; f.q.push(k); }
for (const r of cit) { const f = get(ownerOf(r.query)); f.cit += r.citations; f.cq.push(r); }

const L = [
  "# Bing query map: one owner per query family",
  "",
  `Every query in the Bing keyword report and the Copilot grounding-query report (${D}) is assigned to exactly one owning URL by \`ownerOf\` in scripts/lib/citations.mjs. The weekly report (\`npm run bing\`) uses the same rules. Change the rules there and regenerate this file with \`node scripts/query-map.mjs\`.`,
  "",
  "Owners that differ from the first draft of the plan, because the Bing data says so:",
  "",
  "- **old english font / generator / copy and paste** → `/font-generator/old-english`, not the homepage. Bing ranks that URL (79 clicks on \"old english font generator\" at #4.7, 1,137 impressions on \"old english font\") and gives the homepage 0 clicks. The homepage is now the broad blackletter tool and links to the owner with the anchor \"Old English font\".",
  "- **old english font alphabet / old english letters** → `/font-generator/old-english-letters` (#3.5 on \"old english font alphabet\" before Nov 1). `/old-english-alphabet` keeps \"old english alphabet\", the letter index and the numbers section.",
  "- **old english numbers** → the numbers section on `/old-english-alphabet`. Both numbers pages had under 50 Bing impressions a month, so they were merged and 301.",
  "- **death note** keeps `/death-note-font` (14 Bing clicks since Nov 5, the best post-rebuild page), written as \"Death Note-style\" text. Mamma Mia, Final Fantasy and Monopoly are sections of `/font-generator/fun`.",
  "",
  "| Owner | Bing impressions | Bing clicks | Copilot citations | Top queries (impressions) | Top grounding queries (citations) |",
  "|---|---|---|---|---|---|",
];
for (const [o, f] of [...fam].sort((a, b) => b[1].i + b[1].cit - (a[1].i + a[1].cit))) {
  L.push(`| ${o} | ${f.i} | ${f.c} | ${f.cit} | ${f.q.sort((a, b) => b.i - a.i).slice(0, 4).map((k) => `${k.q} (${k.i})`).join("; ")} | ${f.cq.sort((a, b) => b.citations - a.citations).slice(0, 3).map((k) => `${k.query} (${k.citations})`).join("; ")} |`);
}
L.push("", "\"(unattributed)\" is mostly misspellings, other languages and tools the site doesn't have.");
writeFileSync("docs/bing-query-map.md", L.join("\n") + "\n");
console.log(`docs/bing-query-map.md: ${fam.size} owners, ${kw.length} keyword rows, ${cit.length} grounding queries`);
