// Copilot citations by page. Bing's AI Performance export ("AISearchQueriesReport")
// lists grounding queries with citation counts but no page column, so each query
// is attributed to the page that owns it (docs/bing-query-map.md). Inferred, not
// a Bing per-page figure. Keep in step with the query map.
import { readFileSync } from "node:fs";

const RULES = [
  [/^([a-z0-9]) +in different fonts?$|^letter ([a-z]) in di/, (m) => `/different-fonts/${m[1] ?? m[2]}`],
  [/^old english font ([a-z])$/, () => "/old-english-alphabet"],
  [/^capital ([a-z]) font$|^capital ([a-z]) style$|^font capital ([a-z])$|^([a-z0-9]) +font$|^([a-z]) font styles?$|^fancy (?:letter )?([a-z])(?: letter)?$|^weird letter ([a-z])$/, (m) => `/different-fonts/${m.slice(1).find(Boolean)}`],
  [/hiero|hyreo/, "/hieroglyphics-translator"],
  [/cune?iform|cuniform/, "/cuneiform-translator"],
  [/gothic symbol|goth symbol/, "/symbols"],
  [/arrow/, (m, q) => (/down/.test(q) ? "/symbols/down-arrow" : "/symbols/up-arrow")],
  [/shrug/, "/emoticons/shrug"],
  [/^capital ([a-z0-9]) in different fonts?$/, (m) => `/different-fonts/${m[1]}`],
  [/egyptian/, "/hieroglyphics-translator"],
  [/[\u16a0-\u16ff]|\brun(e|ic)|viking|norse/, (m, q) => (/viking|norse/.test(q) ? "/viking-font-generator" : "/runic-translator")],
  [/pirate/, "/pirate-translator"],
  [/ransome? ?note/, "/font-generator/ransom-note"],
  [/fraktur/, "/font-generator/fraktur"],
  [/angelic/, "/font-generator/angelic"],
  [/princess/, "/font-generator/princess"],
  [/2000s|y2k/, "/font-generator/2000s"],
  [/1940s|wartime/, "/font-generator/1940s"],
  [/scratch/, "/font-generator/scratchy"],
  [/slasher/, "/font-generator/slasher"],
  [/feral|animalistic/, "/font-generator/animalistic"],
  [/fortnite|tryhard|sweaty/, "/font-generator/fortnite"],
  [/minecraft/, "/font-generator/minecraft"],
  [/final fantasy|monopoly|mamma mia|pulp fiction/, "/font-generator/fun"],
  [/gangst/, "/font-generator/gangster"],
  [/greek/, "/symbols/greek"],
  [/italian/, "/font-generator/italianate"],
  [/coquette/, "/coquette"],
  [/backwards|reverse/, "/font-generator/reverse"],
  [/mocking|spongebob/, "/font-generator/mocking-text"],
  [/strikethrough|crossed out/, "/font-generator/strikethrough"],
  [/wavy/, "/font-generator/wavy"],
  [/distort|glitch|zalgo/, "/font-generator/distorted-text"],
  [/graffiti/, "/font-generator/graffiti"],
  [/monster/, "/font-generator/monster"],
  [/calligraphy capital/, "/font-generator/calligraphy-capital-letters"],
  [/modern calligraphy/, "/font-generator/modern-calligraphy"],
  [/calligraphy/, "/font-generator/calligraphy"],
  [/mi?e?d[ie]?e?v[ia]+l|mideval|mediveal/, "/font-generator/medieval"],
  [/thank you/, "/font-generator/thank-you"],
  [/signature/, "/font-generator/signature"],
  [/handwrit|nice writing|cursive(?!.*old)/, "/font-generator/handwriting"],
  [/death ?note|\bl font\b/, "/death-note-font"],
  [/medieval|medevil|medival/, "/font-generator/medieval"],
  [/old english.*number|number.*old english/, "/old-english-alphabet"],
  [/^old english (gothic )?alphabet$|old english calligraphy alphabet|alphabet old english/, "/old-english-alphabet"],
  [/old english (font )?(alphabet|letters)|old english alphabet (font|letters)|old english letter/, "/font-generator/old-english-letters"],
  [/old english cursive|old cursive/, "/font-generator/old-cursive"],
  [/old english (text )?mt/, "/fonts/old-english-text-mt"],
  [/\bol+d? ?e?n+g+l?[a-z]*s+h|old british|olden|12th century/, "/font-generator/old-english"],
  [/old english|old text|olde english/, "/font-generator/old-english"],
  [/black ?letter/, "/font-generator/blackletter"],
  [/goth/, "/font-generator/gothic-letters"],
  [/fancy writing|fancey writing/, "/font-generator/fancy-writing"],
  [/italic/, "/font-generator/italic"],
  [/fancy|fansy|special|specil|speciel|nice letters|cool alphabet|cool letters|funky/, "/font-generator/fancy-letters"],
  [/letter|alphabet|copy/, "/font-generator/fancy-letters"],
];

export function ownerOf(query) {
  const q = query.toLowerCase().trim().replace(/\s+/g, " ");
  for (const [re, tgt] of RULES) {
    const m = q.match(re);
    if (m) return typeof tgt === "function" ? tgt(m, q) : tgt;
  }
  return "(unattributed)";
}

/** Parse a Bing "AISearchQueriesReport" CSV export. */
export function readCitationCsv(file) {
  const lines = readFileSync(file, "utf8").replace(/^﻿/, "").trim().split(/\r?\n/);
  const head = lines.shift().split('","').map((h) => h.replace(/"/g, ""));
  const qi = head.indexOf("Grounding Query"), ci = head.indexOf("Citations");
  return lines.map((l) => l.replace(/^"|"$/g, "").split('","')).map((c) => ({ query: c[qi], citations: +c[ci] || 0 }));
}

export function citationsByPage(rows) {
  const pages = new Map();
  for (const r of rows) {
    const p = ownerOf(r.query);
    const e = pages.get(p) ?? { citations: 0, queries: [] };
    e.citations += r.citations;
    e.queries.push(r);
    pages.set(p, e);
  }
  return [...pages].sort((a, b) => b[1].citations - a[1].citations);
}
