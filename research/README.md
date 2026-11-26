# Keyword research

Saved Semrush exports and the map of which keywords each page targets, so new page ideas come from data, not guesses.

| File | What it is |
|---|---|
| `semrush/*.csv` | Raw Semrush keyword exports (Keyword, Intent, Volume, Keyword Difficulty, CPC, SERP Features). Add new exports here; name them with the date so newer files win. |
| `targeted.json` | `pages`: page → regexes of the keywords it already targets (first match wins, so specific pages sit above broad ones). `skip`: regexes never to suggest again. |
| `backlog.csv` | Generated. Every on-topic keyword with its cluster, status (`targeted` / `backlog`) and page. Open it in a spreadsheet. |
| `daily/<date>.md` | Generated with `--save`. That day's picks. |
| `gsc/queries_<date>_*.csv` | Search Console query exports (Query, Impressions, Clicks, CTR, Position). Files with the newest date are summed. |

## Daily batches: off for good (2026-11-26)

The Nov 2–19 page batches earned no Bing impressions and are the pattern Google treats as scaled content, so they are switched off permanently (`npm run keywords -- --save/--use` now refuses). See `docs/fix-2026-11.md`.

## Weekly Bing routine

```bash
npm run bing                 # pull Bing data to research/bing/<date>/ and write the weekly report
npm run bing -- --url /path  # clicks, impressions and Copilot citations for one URL (before any prune/redirect/merge)
```

- Export Bing Webmaster > AI Performance (grounding queries + overview) into `research/bing/<date>/` first for the citation section.
- Fix at most 3 pages a week (title, meta, first sentence, one H2 or FAQ, one internal link). Log each in `docs/bing-experiments.md`, then after the deploy: `npm run indexnow -- --urls <those paths>`.
- After 14 days compare against the logged baseline; keep or revert.
- Monthly: Bing Site Scan, refresh years and test dates where the content changed.
- A new page only when a query has 50+ Bing impressions a month, no owner (`docs/bing-query-map.md`) and a genuinely different output; at most 2 a month.

The Semrush/keyword files below are kept for reference.
