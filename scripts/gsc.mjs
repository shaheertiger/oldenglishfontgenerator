#!/usr/bin/env node
// Search Console query report: which queries already earn impressions, and
// whether a page targets them. "Double down on what works": queries with
// impressions but no targeting page (or only the homepage) are the best next
// pages; targeted pages with many impressions but low CTR need better titles.
//
//   npm run gsc                 # gaps: untargeted queries, by impressions
//   npm run gsc -- --pages      # impressions and clicks per targeting page
//   npm run gsc -- --all        # every query with its page
//
// Reads every research/gsc/*.csv (Search Console "Queries" export:
// Keyword/Query, Impressions, Clicks, CTR, Position). Files for the same date
// are summed; drop new exports in research/gsc/ named queries_<date>_*.csv.

import { readFileSync, readdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dir = resolve(root, "research/gsc");
const targeted = JSON.parse(readFileSync(resolve(root, "research/targeted.json"), "utf8"));
const patterns = Object.entries(targeted.pages).flatMap(([page, res]) => res.map((r) => [page, new RegExp(r, "i")]));
const skip = (targeted.skip ?? []).map((r) => new RegExp(r, "i"));

const files = readdirSync(dir).filter((f) => f.endsWith(".csv")).sort();
const latestDate = files.map((f) => f.match(/\d{4}-\d{2}-\d{2}/)?.[0]).filter(Boolean).sort().pop();
const use = files.filter((f) => !latestDate || f.includes(latestDate));

// Exports quote every field but don't escape quotes inside a query
// ("old english font "t""), so split on the "," between fields instead.
const parseLine = (l) => l.trim().replace(/^"|"$/g, "").split('","');
const rows = new Map();
for (const f of use) {
  const lines = readFileSync(resolve(dir, f), "utf8").replace(/^﻿/, "").trim().split(/\r?\n/);
  for (const l of lines.slice(1)) {
    const [k, imp, clk, , pos] = parseLine(l);
    if (!k) continue;
    const r = rows.get(k) ?? { imp: 0, clk: 0, posw: 0 };
    r.imp += +imp; r.clk += +clk; r.posw += +pos * +imp;
    rows.set(k, r);
  }
}

const out = [...rows].map(([k, r]) => ({
  query: k.replace(/&amp;/g, "&"),
  imp: r.imp,
  clicks: r.clk,
  pos: r.imp ? +(r.posw / r.imp).toFixed(1) : 0,
  page: patterns.find(([, re]) => re.test(k))?.[0] ?? "",
})).sort((a, b) => b.imp - a.imp);

const arg = process.argv.slice(2);
console.log(`# Search Console queries (${use.join(", ")})\n`);
if (arg.includes("--pages")) {
  const g = {};
  for (const o of out) { const p = o.page || "(no page)"; g[p] ??= { imp: 0, clicks: 0, queries: 0 }; g[p].imp += o.imp; g[p].clicks += o.clicks; g[p].queries++; }
  console.log("| Page | Impressions | Clicks | Queries |\n|---|---|---|---|");
  for (const [p, v] of Object.entries(g).sort((a, b) => b[1].imp - a[1].imp)) console.log(`| ${p} | ${v.imp} | ${v.clicks} | ${v.queries} |`);
} else {
  const list = arg.includes("--all") ? out : out.filter((o) => (!o.page || o.page === "/") && !skip.some((re) => re.test(o.query)));
  console.log("| Query | Impressions | Clicks | Avg pos | Page |\n|---|---|---|---|---|");
  for (const o of list.slice(0, +(arg[arg.indexOf("--limit") + 1]) || 60)) console.log(`| ${o.query} | ${o.imp} | ${o.clicks} | ${o.pos} | ${o.page || "—"} |`);
}
