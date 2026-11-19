# Keyword research

Saved Semrush exports and the map of which keywords each page targets, so new page ideas come from data, not guesses.

| File | What it is |
|---|---|
| `semrush/*.csv` | Raw Semrush keyword exports (Keyword, Intent, Volume, Keyword Difficulty, CPC, SERP Features). Add new exports here; name them with the date so newer files win. |
| `targeted.json` | `pages`: page → regexes of the keywords it already targets (first match wins, so specific pages sit above broad ones). `skip`: regexes never to suggest again. |
| `backlog.csv` | Generated. Every on-topic keyword with its cluster, status (`targeted` / `backlog`) and page. Open it in a spreadsheet. |
| `daily/<date>.md` | Generated with `--save`. That day's picks. |
| `gsc/queries_<date>_*.csv` | Search Console query exports (Query, Impressions, Clicks, CTR, Position). Files with the newest date are summed. |

## Daily routine

Double down on what already works: start from queries that earn impressions, then fill the rest of the day from Semrush.

```bash
npm run gsc               # queries with impressions but no targeting page
npm run gsc -- --pages    # which pages earn impressions and clicks
npm run keywords -- --save
```

0. In `npm run gsc`, a cluster of related queries with impressions and no page (or only the homepage) is the strongest next page. A page with many impressions, a position of 5–15 and almost no clicks needs its title and intro rewritten to match the query (2026-11-19: "old english letters" → `/old-english-letters` retitled for A–Z). Strip any query containing a private person's name or profile before committing an export.
1. Read the top picks. Skip anything off-topic for an Old English / blackletter site (the filter is a regex, not judgement).
2. Check no existing page already answers it. If one nearly does, add an FAQ or section there instead of a new page.
3. Build the page (one page per real search, answer and number in the title, see NEXT-STEPS.md).
4. Claim the keywords so they drop out of tomorrow's picks:

```bash
npm run keywords -- --use /new-page "keyword one" "keyword (two|2)"
```

5. Hide picks that don't fit (branded commercial fonts, off-topic meanings) so they never come back:

```bash
npm run keywords -- --skip "sign painter" "christian dior"
```

Options: `--limit 25`, `--min-volume 100`, `--max-kd 20`.

After the deploy finishes, tell Bing and other IndexNow engines about the new and changed pages:

```bash
npm run indexnow -- --live --days 2
```

## Refreshing the data

Export again from Semrush (Keyword Magic Tool or Organic Research → Export CSV), drop the file in `semrush/`, run `npm run keywords`. Duplicate keywords take the newest file's numbers.
