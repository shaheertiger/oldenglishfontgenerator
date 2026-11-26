# Performance (growth plan step 5)

Target on every owner page: Lighthouse mobile performance ≥ 90 and CLS < 0.1. Measured with `node scripts/lighthouse.mjs` (Lighthouse 12.2.1, mobile emulation, local production build; real-world numbers on Vercel can differ). Above-the-fold check: `node scripts/above-fold.mjs`.

## 2026-11-26, first Month 1 build, before the speed fixes (local production build)

| Page | Performance | CLS | LCP (ms) | TBT (ms) | DOM nodes |
|---|---|---|---|---|---|
| / | 85 | 0 | 2433 | 526 | 1930 |
| /font-generator/old-english | 84 | 0 | 2534 | 515 | 1793 |
| /font-generator/fancy-letters | 83 | 0 | 2149 | 615 | 1756 |
| /font-generator/gothic-letters | 85 | 0 | 2487 | 490 | 1978 |
| /font-generator/medieval | 86 | 0 | 2484 | 478 | 1757 |
| /font-generator/old-english-letters | 85 | 0 | 2492 | 493 | 1728 |
| /font-generator/handwriting | 87 | 0 | 1806 | 495 | 1652 |
| /old-english-alphabet | 82 | 0 | 2510 | 609 | 1962 |
| /font-generator/thank-you | 85 | 0 | 2489 | 514 | 1780 |
| /hieroglyphics-translator | 84 | 0 | 2486 | 532 | 1388 |
| /font-generator/italic | 84 | 0 | 2498 | 540 | 1688 |
| /symbols | 81 | 0 | 1851 | 747 | 1204 |
| /cuneiform-translator | 84 | 0 | 2522 | 511 | 1276 |
| /font-generator/signature | 82 | 0 | 2514 | 617 | 1695 |
| /different-fonts | 88 | 0 | 2487 | 398 | 1025 |
| /death-note-font | 85 | 0 | 1855 | 590 | 1734 |

## 2026-11-26 (local production build)

| Page | Performance | CLS | LCP (ms) | TBT (ms) | DOM nodes |
|---|---|---|---|---|---|
| / | 90 | 0 | 2583 | 322 | 1216 |
| /font-generator/old-english | 92 | 0 | 2571 | 248 | 1131 |
| /font-generator/fancy-letters | 91 | 0 | 2554 | 287 | 1091 |
| /font-generator/gothic-letters | 93 | 0 | 1867 | 295 | 1313 |
| /font-generator/medieval | 94 | 0 | 1851 | 286 | 1092 |
| /font-generator/old-english-letters | 95 | 0 | 1848 | 247 | 1066 |
| /font-generator/handwriting | 92 | 0 | 2590 | 252 | 1014 |
| /old-english-alphabet | 95 | 0 | 1860 | 234 | 1300 |
| /font-generator/thank-you | 92 | 0 | 2527 | 257 | 1122 |
| /hieroglyphics-translator | 94 | 0 | 1884 | 266 | 1232 |
| /font-generator/italic | 96 | 0 | 1855 | 206 | 1050 |
| /symbols | 95 | 0 | 1870 | 253 | 1151 |
| /cuneiform-translator | 96 | 0 | 1859 | 224 | 1121 |
| /font-generator/signature | 94 | 0 | 2502 | 201 | 1037 |
| /different-fonts | 97 | 0 | 2441 | 96 | 1001 |
| /death-note-font | 97 | 0 | 1846 | 183 | 1070 |

## 2026-11-26 (https://www.oldenglishfontgenerator.com)

| Page | Performance | CLS | LCP (ms) | TBT (ms) | DOM nodes |
|---|---|---|---|---|---|
| / | 92 | 0 | 1170 | 340 | 1216 |
| /font-generator/old-english | 97 | 0 | 1698 | 175 | 1131 |
| /font-generator/fancy-letters | 98 | 0 | 1735 | 163 | 1091 |
| /font-generator/gothic-letters | 96 | 0 | 1535 | 216 | 1313 |
| /font-generator/medieval | 95 | 0 | 1882 | 231 | 1092 |
| /font-generator/old-english-letters | 99 | 0 | 1885 | 119 | 1066 |
| /font-generator/handwriting | 97 | 0 | 1382 | 195 | 1014 |
| /old-english-alphabet | 92 | 0 | 2013 | 322 | 1300 |
| /font-generator/thank-you | 96 | 0 | 1576 | 228 | 1122 |
| /hieroglyphics-translator | 91 | 0 | 1540 | 390 | 1232 |
| /font-generator/italic | 98 | 0 | 1836 | 158 | 1050 |
| /symbols | 94 | 0 | 1665 | 268 | 1151 |
| /cuneiform-translator | 96 | 0 | 1436 | 214 | 1121 |
| /font-generator/signature | 95 | 0 | 1437 | 262 | 1037 |
| /different-fonts | 95 | 0 | 1875 | 245 | 1001 |
| /death-note-font | 93 | 0 | 1387 | 321 | 1070 |
