# Growth plan, Month 1 (started 2026-11-26)

Goal: top-3 Bing results and the most-cited Copilot source for Old English, gothic, medieval and "letters in different fonts" searches. Targets: 20–30 Bing clicks a day 4 weeks after the fix (#37), 40+ a day and 400+ Copilot citations a day at 3 months.

Started on the day the fix (#37) went live, at the owner's request, instead of two weeks later. That means the 14-day comparisons in `docs/bing-experiments.md` measure the fix and Month 1 together; the weekly report separates them by date.

## Step 1: one owner per query family

Done in #37: `docs/bing-query-map.md` (regenerate with `npm run query-map`). The top 16 owners are in `scripts/owner-pages.mjs`; their definitions and anchor queries in `lib/owners.ts`.

## Step 2: match the words

On all 16 owner pages:
- Title ≤ 60 characters and starting with the top query; H1 = the top query (unchanged on the protected medieval page).
- The intro's first 100 words now contain the top query and the next two variants (checked by script; fixed on handwriting, fancy-letters, hieroglyphics, symbols, signature, death-note, old-english, old-english-alphabet, cuneiform and the homepage).
- Meta descriptions give the answer, a number and the action.
- Internal links: every page now carries a "Related styles" strip linking 5 other owners, with anchor text rotating between each owner's top 3 queries (`relatedOwners` in `lib/owners.ts`), so links vary per source page and are never "click here".

## Step 3: be the answer Copilot cites

On each owner page:
- **Definition block** (2–3 standalone sentences naming the entity), right after the tool. Text in `lib/owners.ts`.
- **Full copyable table**: A–Z, a–z, 0–9 and symbols for every letter style on the page (up to 8, deduplicated); every cell is a tap-to-copy button with the character as plain text in the HTML. It replaces the smaller per-page charts on these pages.
- **How it works**: a table of the Unicode blocks the page's styles actually use, each linked to its chart on unicode.org, plus the Letterlike Symbols note where it applies. Blackletter pages link Wikipedia's Blackletter article for the history.
  - Still open: the plan asks for a museum or library source. The Met's essay pages rate-limited every automated request (429), Britannica blocks them (403), and the British Library/Library of Congress URLs tried were wrong or unavailable, so nothing could be verified and nothing unverified was cited. Add one by hand (for example the Met's "The Art of the Book in the Middle Ages" essay) after checking it opens.
- **Tested compatibility table: not added.** It must contain only real tests (style × Instagram bio, TikTok, Discord, Roblox, YouTube, iPhone, Android, Word, Google Docs, with date and device). None of those can be tested from the build container, and a test on its Linux fonts would mislead (it has no hieroglyph or cuneiform font). Protocol for the owner: paste the first 6 styles of each owner page into each target, mark works / partly / doesn't, note date and device, and add the results to a data file; the page template can render it.
- **About / method page** (`/about`, linked from every footer): now says what the site covers, how pages are written and checked (Unicode charts as sources, no untested platform claims, translators described as letter/word swaps, dates move only when content does) and how to report a problem. Still open: the owner's real name, which only the owner can add.

## Step 4: make people stay

- First screen on a 360×740 phone: input plus 6–8 styles visible without scrolling on all 16 owner pages (before: 0 on 15 of them; the input itself was below the fold on 4). The intro shows two lines with a "More" toggle (full text stays in the HTML before the tool), the header is one row, style rows are compact, and presets and the "Updated" line moved below the results. Measured with `npm run fold` (results in `research/perf/2026-11-26-above-fold-*.json`). CLS 0 on all.
- Output updates as you type and Copy shows "Copied" (unchanged). New: a **Copy all** button and a **profile preview mock-up** (bio and display-name layouts, drawn with the visitor's own fonts and labelled as a mock-up, no app logos).
- Related styles below each result (see Step 2).
- No popups or interstitials; the site runs no ads (only analytics).
- FAQ answers on owner pages are 1–3 sentences; the content check fails the build otherwise.

## Step 5: speed and crawl

- Lighthouse mobile on the 16 owner pages: see `docs/performance.md` (`npm run perf`).
- Static HTML: every owner page is prerendered; JavaScript only adds typing, copying and the mock-up.
- Sitemap lists only indexable 200 URLs with real lastmod (checked by the build since #37).
- IndexNow with only changed URLs: `node scripts/changed-urls.mjs <previous deploy sha> > /tmp/changed.txt && npm run indexnow -- --file /tmp/changed.txt`.
- Bing Site Scan: run monthly in Bing Webmaster Tools (no API).

## Step 6 and 7 (monthly, owner)

- Freshness: re-run compatibility tests once they exist; update dates only where content changed.
- Earned mentions (2–4 a month): these need a person posting under their own name, so they are not automated. Good targets: questions about blackletter or "Old English" lettering on calligraphy and typography forums and Q&A sites, tattoo-lettering threads, and typography resource lists. Answer directly and link only where the tool helps. No paid links, exchanges or links between our own sites.

## Baselines

Bing (research/bing/2026-11-26): 7.1 clicks a day and 141 Copilot citations a day (Nov 5–24 averages). Per-query baselines in `docs/bing-experiments.md`.
