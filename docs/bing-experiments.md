# Bing experiments log

One row per page change. Max 3 pages a week. After 14 days, compare position and CTR against the baseline (`npm run bing -- --url <path>` and the weekly report), then write "kept" or "reverted" in the last column. Baselines below are Bing data from research/bing/2026-11-26 (weekly buckets up to Nov 20).

| Start | Page | Change | Baseline (query: impressions, position, CTR) | Result after 14 days |
|---|---|---|---|---|
| 2026-11-26 (starts at deploy) | /font-generator/old-english | Title/H1/meta/intro to "Old English Font Generator"; numbered H2s; 8 FAQs; untested table removed | old english font: 1201 impr, #9.3, CTR 0.08%; old english font generator: 466 impr, #3.8, CTR 15.67%; old english copy paste: 19 impr, #5.1, CTR 5.26%; old english font converter: 21 impr, #4.1, CTR 9.52% | |
| 2026-11-26 (starts at deploy) | /font-generator/gothic-letters | Title/meta/intro; numbered H2s; dark-symbols section merged from /gothic-font-generator; 10 FAQs | gothic letters: 438 impr, #4.8, CTR 1.83%; gothic letter: 28 impr, #3.7, CTR 3.5700000000000003%; goth letters: 14 impr, #2.6, CTR 14.290000000000001%; gothic font copy and paste: 44 impr, #8.0, CTR 2.27% | |
| 2026-11-26 (starts at deploy) | /font-generator/italic | Restored (410 since Nov 1) with "Italics Generator" title | italics generator: 354 impr, #8.3, CTR 0%; italic text generator: 24 impr, #9.5, CTR 4.17% | |
| 2026-11-26 (starts at deploy) | /hieroglyphics-translator | Restored (410 since Nov 1) | hieroglyphics translator: 299 impr, #9.3, CTR 0%; egyptian hieroglyphics translator: 48 impr, #8.2, CTR 0% | |
| 2026-11-26 (starts at deploy) | /cuneiform-translator | Title/meta/intro; numbered H2s; 2 FAQs | cuneiform translator: 163 impr, #7.9, CTR 2.45% | |
| 2026-11-26 (starts at deploy) | /font-generator/old-english-letters | Restored; owner of old english font alphabet/letters | old english font alphabet: 130 impr, #3.9, CTR 4.62%; old english letters: 136 impr, #8.2, CTR 0.74%; old english alphabet font: 57 impr, #3.7, CTR 3.5100000000000002% | |
| 2026-11-26 (starts at deploy) | /old-english-alphabet | Hub: numbers section merged in; title/meta/intro | old english alphabet: 63 impr, #8.4, CTR 0%; old english font numbers: 6 impr, #3.8, CTR 16.67% | |
| 2026-11-26 (starts at deploy) | /font-generator/medieval | Protected: 6 FAQs only | medieval font: 266 impr, #8.6, CTR 0%; medieval font generator: 160 impr, #3.3, CTR 28.12%; medieval font copy and paste: 50 impr, #1.6, CTR 82% | |
| 2026-11-26 (starts at deploy) | / | Retitled to "Blackletter Text Generator"; links to owners with exact anchors | old english font generator: 466 impr, #3.8, CTR 15.67% | |
| 2026-11-26 (Month 1, starts at deploy) | 16 owner pages (scripts/owner-pages.mjs) | Growth plan Month 1: definition block, full A–Z/a–z/0–9/symbol table, Unicode "how it works" table, related-styles links with rotating exact-query anchors, compact mobile first screen (input + 6–8 styles above the fold at 360×740), Copy all, profile preview mock-up; intros now contain the top 3 query variants | Same baselines as the rows above; weekly report from 2026-11-26 | |
