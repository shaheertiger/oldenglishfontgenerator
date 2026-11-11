#!/usr/bin/env node
// Daily keyword picks from saved Semrush exports.
//
//   npm run keywords                       today's top 10 unclaimed on-topic clusters
//   npm run keywords -- --limit 25         more picks
//   npm run keywords -- --max-kd 20 --min-volume 100
//   npm run keywords -- --save             also write research/daily/<date>.md
//   npm run keywords -- --use /page "regex" ["regex" ...]
//                                          mark keywords as targeted by a page
//
// Inputs:  research/semrush/*.csv  (any Semrush keyword export; newer files win)
//          research/targeted.json  (page -> regexes of keywords it already targets)
// Output:  research/backlog.csv     (every on-topic keyword, its cluster and status)

import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const DIR = path.join(ROOT, "research");
const args = process.argv.slice(2);
const opt = (name, def) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : def;
};
const flag = (name) => args.includes(`--${name}`);

// ---------- topic filter ----------
// On-topic: blackletter, Old English and the uses this site serves.
const TOPIC = new RegExp(
  [
    "old english", "\\bolde?\\b", "gothic", "black ?letter", "fraktur", "medieval", "textura", "uncial", "cloister",
    "old london", "unifraktur", "pirata", "germania", "metal mania", "medieval ?sharp", "grenze", "fruktur", "jacquard",
    "tattoo", "chicano", "cholo", "gangst", "lowrider", "biker", "calligraph",
    "metal", "horror", "scary", "spooky", "creepy", "vampire", "halloween", "death ?note", "witch",
    "bible", "christian", "catholic", "latin", "diploma", "certificate", "masthead", "newspaper",
    "celtic", "viking", "fantasy", "knight", "wizard", "ancient", "renaissance", "victorian",
    "monogram", "drop cap", "illuminat", "embroider", "engrav", "\\bsigns?\\b", "signage", "wedding", "invitation",
    "shirt", "hoodie", "clothing", "streetwear", "album cover",
    "letter [a-z]\\b", "\\b[a-z] letter", "alphabet",
    "discord", "instagram", "\\big\\b", "tiktok", "facebook", "twitter", "youtube", "snapchat", "roblox",
    "cricut", "canva", "procreate", "powerpoint", "photoshop", "inkscape", "google docs", "google slides", "\\bword\\b",
  ].join("|"),
  "i"
);
// Off-topic look-alikes: sans-serif "gothic" families, other meanings, unrelated how-tos.
const DENY = new RegExp(
  [
    "century gothic", "trade ?gothic", "franklin gothic", "news gothic", "ms (ui )?gothic", "gothic a1", "malgun",
    "dela gothic", "zarame", "mb101", "bank gothic", "engravers gothic", "highway gothic", "garage ?gothic", "kozuka",
    "didact", "avant garde", "alternate gothic", "benton gothic", "letter gothic", "gothic one", "dotgothic",
    "holy water", "baptismal", "crossword", "wordpress", "excel", "\\bmla\\b", "\\bapa\\b", "resume", "cover letter",
    "double spaced", "\\brug\\b", "king bed", "css", "html", "react", "lucide", "font awesome", "wick editor",
    "golden ratio", "squarespace", "penpot", "metallic", "golden", "sex", "word count", "words is", "pages is",
    "celtics", "vikings font", "mn vikings", "font size", "alphabet lore", "fog city", "benguiat", "aachen",
  ].join("|"),
  "i"
);

// ---------- load exports ----------
function parseCsv(text) {
  const rows = [];
  let row = [], cell = "", q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (c === '"') q = false;
      else cell += c;
    } else if (c === '"') q = true;
    else if (c === ",") { row.push(cell); cell = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(cell); rows.push(row); row = []; cell = "";
    } else cell += c;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  return rows.filter((r) => r.length > 1);
}

const files = readdirSync(path.join(DIR, "semrush")).filter((f) => f.endsWith(".csv")).sort(); // date in name → newest last
const kws = new Map();
for (const f of files) {
  const [head, ...rows] = parseCsv(readFileSync(path.join(DIR, "semrush", f), "utf8"));
  const col = (name) => head.findIndex((h) => h.trim().toLowerCase() === name);
  const iK = col("keyword"), iV = col("volume"), iD = col("keyword difficulty"), iC = col("cpc (usd)"), iI = col("intent");
  for (const r of rows) {
    const k = r[iK]?.trim().toLowerCase();
    if (!k) continue;
    kws.set(k, { keyword: k, volume: +r[iV] || 0, kd: +r[iD] || 0, cpc: +r[iC] || 0, intent: r[iI] ?? "", source: f });
  }
}

// ---------- claimed keywords ----------
const targetedPath = path.join(DIR, "targeted.json");
const targeted = JSON.parse(readFileSync(targetedPath, "utf8"));

if (flag("use")) {
  const i = args.indexOf("--use");
  const page = args[i + 1];
  const patterns = args.slice(i + 2).filter((a) => !a.startsWith("--"));
  if (!page?.startsWith("/") || !patterns.length) {
    console.error('Usage: npm run keywords -- --use /page "regex" ["regex" ...]');
    process.exit(1);
  }
  // New pages go first so their specific patterns win over broad older ones.
  targeted.pages = { [page]: [...new Set([...(targeted.pages[page] ?? []), ...patterns])], ...targeted.pages };
  writeFileSync(targetedPath, JSON.stringify(targeted, null, 2) + "\n");
  console.log(`Marked ${patterns.length} pattern(s) as targeted by ${page}.`);
}

const claims = Object.entries(targeted.pages).map(([page, pats]) => ({ page, re: new RegExp(pats.join("|"), "i") }));
const claimOf = (k) => claims.find((c) => c.re.test(k))?.page ?? "";

// ---------- cluster ----------
const STOP = new Set(["font", "fonts", "generator", "copy", "and", "paste", "free", "download", "the", "for", "a", "of", "in", "to", "style", "styles", "text", "best", "what", "is", "on", "with", "fonte"]);
const clusterKey = (k) =>
  k.split(/[^a-z0-9]+/).filter((w) => w && !STOP.has(w)).map((w) => w.replace(/s$/, "")).sort().join(" ") || k;

const onTopic = [...kws.values()].filter((k) => TOPIC.test(k.keyword) && !DENY.test(k.keyword));
for (const k of onTopic) {
  k.cluster = clusterKey(k.keyword);
  k.page = claimOf(k.keyword);
}

const minVol = +opt("min-volume", 50);
const maxKd = +opt("max-kd", 100);
const clusters = new Map();
for (const k of onTopic.filter((k) => !k.page && k.volume >= minVol && k.kd <= maxKd)) {
  const c = clusters.get(k.cluster) ?? { key: k.cluster, volume: 0, kws: [] };
  c.volume += k.volume;
  c.kws.push(k);
  clusters.set(k.cluster, c);
}
const ranked = [...clusters.values()]
  .map((c) => ({ ...c, kws: c.kws.sort((a, b) => b.volume - a.volume), kd: Math.min(...c.kws.map((k) => k.kd)) }))
  .sort((a, b) => b.volume - a.volume);

// ---------- output ----------
const csvCell = (v) => (/[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v));
const backlog = [["keyword", "volume", "kd", "cpc", "intent", "cluster", "status", "page", "source"].join(",")];
for (const k of onTopic.sort((a, b) => b.volume - a.volume))
  backlog.push([k.keyword, k.volume, k.kd, k.cpc, k.intent, k.cluster, k.page ? "targeted" : "backlog", k.page, k.source].map(csvCell).join(","));
writeFileSync(path.join(DIR, "backlog.csv"), backlog.join("\n") + "\n");

const claimedVol = onTopic.filter((k) => k.page).reduce((s, k) => s + k.volume, 0);
const backlogVol = onTopic.filter((k) => !k.page).reduce((s, k) => s + k.volume, 0);
const limit = +opt("limit", 10);
const today = new Date().toISOString().slice(0, 10);

const lines = [
  `# Keyword picks — ${today}`,
  "",
  `Sources: ${files.join(", ")}. ${kws.size} keywords loaded, ${onTopic.length} on-topic.`,
  `Already targeted: ${onTopic.filter((k) => k.page).length} keywords (${claimedVol.toLocaleString("en-US")} searches/mo). Backlog: ${onTopic.filter((k) => !k.page).length} (${backlogVol.toLocaleString("en-US")}/mo).`,
  `Filters: volume ≥ ${minVol}, KD ≤ ${maxKd}.`,
  "",
  "| # | Cluster | Total vol | Min KD | Top keywords |",
  "|---|---|---|---|---|",
  ...ranked.slice(0, limit).map((c, i) =>
    `| ${i + 1} | ${c.kws[0].keyword} | ${c.volume} | ${c.kd} | ${c.kws.slice(0, 5).map((k) => `${k.keyword} (${k.volume})`).join("; ")} |`
  ),
  "",
  "Next step for each pick: check it fits the site (blackletter / Old English and its uses), check no existing page answers it,",
  'then build the page or add an FAQ/section, and claim it: npm run keywords -- --use /page "regex".',
];
console.log(lines.join("\n"));

if (flag("save")) {
  mkdirSync(path.join(DIR, "daily"), { recursive: true });
  writeFileSync(path.join(DIR, "daily", `${today}.md`), lines.join("\n") + "\n");
  console.log(`\nSaved research/daily/${today}.md`);
}
