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
