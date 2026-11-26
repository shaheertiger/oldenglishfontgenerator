# Every URL that existed before 00a2b7f: before and after

Source: research/bing/2026-11-26/phase0_urls.csv (Bing `GetPageStats` weekly buckets Jun 5–Nov 20, split at Nov 5; "now" = live site on Nov 26; "after" = this branch built locally). Copilot citations are attributed from grounding queries (no per-page figure exists in Bing), over Aug 26–Nov 24.

Decision: **restore** = had a Bing click, 50+ impressions or Copilot citations before Nov 5 and was not 200; **live** = already 200; **leave** = none of those, stays 410/301.

| URL | Bing clicks before Nov 5 | Impressions | Position | Copilot citations | Now | After this PR | Decision |
|---|---|---|---|---|---|---|---|
| /font-generator/medieval | 549 | 6027 | 5.8 | 848 | 200 | 200 | live |
| /font-generator/old-english | 521 | 8965 | 5.6 | 898 | 200 | 200 | live |
| /font-generator/handwriting | 122 | 2315 | 5.8 | 315 | 200 | 200 | live |
| /font-generator/gothic-letters | 80 | 3897 | 6.0 | 929 | 200 | 200 | live |
| /font-generator/old-english-letters | 70 | 2972 | 5.7 |  | 301 → /old-english-letters | 200 | restore |
| /cuneiform-translator | 43 | 1516 | 7.1 | 46 | 200 | 200 | live |
| /font-generator/angelic | 35 | 201 | 5.0 |  | 410 | 200 | restore |
| /font-generator/thank-you | 32 | 998 | 5.1 | 429 | 410 | 200 | restore |
| /es | 32 | 282 | 4.0 |  | 301 → / | 200 | restore |
| /font-generator/2000s | 31 | 401 | 6.3 |  | 410 | 200 | restore |
| /font-generator/old-cursive | 29 | 604 | 6.3 | 23 | 301 → /old-english-cursive | 200 | restore |
| /font-generator/calligraphy | 26 | 824 | 7.8 |  | 301 → /old-english-cursive | 200 | restore |
| /font-generator/ransom-note | 25 | 636 | 6.8 |  | 410 | 200 | restore |
| /hieroglyphics-translator | 21 | 2981 | 8.3 | 46 | 410 | 200 | restore |
| /font-generator/old-english-tattoo | 16 | 355 | 4.4 |  | 301 → /old-english-tattoo-font | 200 | restore |
| /font-generator/signature | 13 | 471 | 6.3 | 178 | 410 | 200 | restore |
| /font-generator/italic | 8 | 810 | 8.2 |  | 410 | 200 | restore |
| /font-generator/1940s | 8 | 40 | 8.0 |  | 410 | 200 | restore |
| /font-generator/fancy-letters | 7 | 1060 | 7.4 | 2567 | 410 | 200 | restore |
| /font-generator/fancy-writing | 6 | 425 | 6.3 | 174 | 410 | 200 | restore |
| /font-generator/calligraphy-capital-letters | 6 | 369 | 6.1 |  | 410 | 200 | restore |
| /font-generator/cool-letters | 6 | 257 | 6.6 |  | 410 | 301 → /font-generator/fancy-letters | restore (merged: merged into the "fancy letters" owner (one owner per family)) |
| /font-generator/scratchy | 6 | 47 | 5.4 |  | 410 | 200 | restore |
| /font-generator/cursive | 6 | 39 | 5.4 |  | 301 → /old-english-cursive | 301 → /font-generator/handwriting | restore (merged: merged into /font-generator/handwriting (cursive family owner)) |
| /font-generator/old-english-numbers | 5 | 70 | 3.9 |  | 301 → /old-english-numbers | 301 → /old-english-alphabet | restore (merged: numbers family is a section on /old-english-alphabet (<50 Bing impressions a month)) |
| /font-generator/reverse | 5 | 42 | 6.5 |  | 410 | 200 | restore |
| /symbols/alchemy | 5 | 21 | 6.4 |  | 410 | 200 | restore |
| /symbols/greek | 4 | 261 | 8.0 |  | 410 | 200 | restore |
| /font-generator/distorted-text | 4 | 156 | 7.5 |  | 410 | 200 | restore |
| /font-generator/fraktur | 4 | 125 | 6.6 |  | 301 → /fraktur-generator | 200 | restore |
| /different-fonts/7 | 4 | 7 | 3.7 |  | 301 → /old-english-numbers | 200 | restore |
| /runic-translator | 3 | 448 | 8.4 |  | 301 → /viking-font-generator | 200 | restore |
| /font-generator/old-english-copy-paste | 3 | 119 | 6.7 |  | 301 → / | 301 → /font-generator/old-english | restore (merged: merged into /font-generator/old-english (owner of "old english font copy paste")) |
| /different-fonts/g | 3 | 66 | 6.1 | 18 | 301 → /old-english-alphabet | 200 | restore |
| /font-generator/graffiti | 3 | 33 | 7.7 |  | 410 | 200 | restore |
| /font-generator/fortnite | 3 | 27 | 8.2 |  | 410 | 200 | restore |
| /pirate-translator | 3 | 16 | 7.9 |  | 410 | 200 | restore |
| /font-generator/mamma-mia | 3 | 15 | 3.7 |  | 410 | 301 → /font-generator/fun | restore (merged: movie font: now a "Mamma Mia-style" section on /font-generator/fun) |
| /font-generator/slasher | 3 | 10 | 4.1 |  | 410 | 200 | restore |
| /different-fonts/q | 3 | 9 | 7.1 |  | 301 → /old-english-alphabet | 200 | restore |
| /font-generator/ye-old-english | 3 | 8 | 6.5 |  | 301 → / | 200 | restore |
| /font-generator/blackletter | 2 | 44 | 5.1 |  | 301 → /blackletter-generator | 200 | restore |
| /es/font-generator | 2 | 25 | 6.2 |  | 410 | 200 | restore |
| /font-generator/princess | 2 | 24 | 6.1 |  | 410 | 200 | restore |
| /font-generator/monster | 2 | 23 | 7.1 |  | 410 | 200 | restore |
| /font-generator/modern-calligraphy | 2 | 12 | 5.8 |  | 410 | 200 | restore |
| /font-generator/final-fantasy | 2 | 11 | 4.9 |  | 410 | 301 → /font-generator/fun | restore (merged: game font: now a "Final Fantasy-style" section on /font-generator/fun) |
| /font-generator/font-converter | 2 | 10 | 8.8 |  | 410 | 200 | restore |
| /font-generator/monopoly | 2 | 8 | 6.8 |  | 410 | 301 → /font-generator/fun | restore (merged: game font: now a "Monopoly-style" section on /font-generator/fun) |
| /different-fonts/9 | 2 | 5 | 5.0 |  | 301 → /old-english-numbers | 200 | restore |
| /font-generator/wavy | 2 | 3 | 4.0 |  | 410 | 200 | restore |
| /font-generator/italianate | 2 | 1 | 3.0 |  | 410 | 200 | restore |
| /symbols/numbers | 1 | 57 | 6.9 |  | 410 | 200 | restore |
| /medieval-translator | 1 | 54 | 7.8 |  | 301 → /font-generator/medieval | 200 | restore |
| /font-generator/gangster | 1 | 24 | 6.0 |  | 410 | 200 | restore |
| /es/cool-symbols/hearts | 1 | 23 | 7.2 |  | 410 | 200 | restore |
| /different-fonts/k | 1 | 17 | 6.5 | 91 | 301 → /old-english-alphabet | 200 | restore |
| /es/font-generator/old-english | 1 | 14 | 5.4 |  | 301 → / | 200 | restore |
| /font-generator/small-gothic | 1 | 14 | 2.0 |  | 301 → /gothic-font-generator | 200 | restore |
| /coquette | 1 | 13 | 6.7 |  | 410 | 200 | restore |
| /font-generator/satanic | 1 | 13 | 6.2 |  | 301 → /gothic-font-generator | 200 | restore |
| /symbols/brackets | 1 | 10 | 6.7 |  | 410 | 200 | restore |
| /different-fonts/x | 1 | 6 | 6.7 |  | 301 → /old-english-alphabet | 200 | restore |
| /font-generator/fun | 1 | 6 | 8.2 |  | 410 | 200 | restore |
| /different-fonts/w | 1 | 5 | 6.2 |  | 301 → /old-english-alphabet | 200 | restore |
| /symbols/down-arrow | 1 | 5 | 5.0 |  | 410 | 200 | restore |
| /font-generator/instagram | 1 | 4 | 4.0 |  | 301 → /old-english-font-instagram | 200 | restore |
| /font-generator/minecraft | 1 | 4 | 5.0 |  | 410 | 200 | restore |
| /font-generator/old-english-ig | 1 | 2 | 4.5 |  | 301 → /old-english-font-instagram | 200 | restore |
| /font-generator/strikethrough | 1 | 2 | 1.0 |  | 410 | 200 | restore |
| /font-generator/animalistic | 1 | 1 | 1.0 |  | 410 | 200 | restore |
| /font-generator/mocking-text | 0 | 75 | 8.6 |  | 410 | 200 | restore |
| /font-generator/hacked | 0 | 46 | 8.2 |  | 410 | 410 | leave |
| / | 0 | 39 | 8.1 |  | 200 | 200 | live |
| /different-fonts/j | 0 | 34 | 7.4 |  | 301 → /old-english-alphabet | 200 | leave |
| /blog/how-to-bold-text-instagram | 0 | 29 | 7.8 |  | 410 | 410 | leave |
| /different-fonts/e | 0 | 24 | 6.2 | 155 | 301 → /old-english-alphabet | 200 | restore |
| /font-generator/tattoo | 0 | 24 | 6.7 |  | 301 → /old-english-tattoo-font | 301 → /font-generator/old-english-tattoo | leave |
| /different-fonts/i | 0 | 22 | 5.6 | 30 | 301 → /old-english-alphabet | 200 | restore |
| /different-fonts/s | 0 | 22 | 7.5 | 11 | 301 → /old-english-alphabet | 200 | restore |
| /different-fonts/a | 0 | 21 | 6.7 | 12 | 301 → /old-english-alphabet | 200 | restore |
| /font-generator/handwriting-styles | 0 | 20 | 7.3 |  | 410 | 410 | leave |
| /font-generator/1920s | 0 | 19 | 6.3 |  | 410 | 410 | leave |
| /font-generator/gothic | 0 | 19 | 7.2 |  | 301 → /gothic-font-generator | 301 → /font-generator/gothic-letters | leave |
| /es/font-generator/cursive | 0 | 18 | 6.3 |  | 410 | 410 | leave |
| /preppy | 0 | 17 | 7.9 |  | 410 | 410 | leave |
| /es/font-generator/fancy | 0 | 13 | 6.9 |  | 410 | 410 | leave |
| /font-generator/food | 0 | 13 | 5.4 |  | 410 | 410 | leave |
| /font-generator/pulp-fiction | 0 | 13 | 4.3 |  | 410 | 410 | leave |
| /stacked-text-generator | 0 | 12 | 7.4 |  | 410 | 410 | leave |
| /blog/blackletter-gothic-fraktur-difference | 0 | 8 | 5.1 |  | 200 | 200 | live |
| /different-fonts/l | 0 | 8 | 7.5 | 77 | 301 → /old-english-alphabet | 200 | restore |
| /roman-numeral-converter | 0 | 8 | 5.8 |  | 301 → /old-english-numbers | 301 → /old-english-alphabet | leave |
| /different-fonts/y | 0 | 7 | 7.1 | 132 | 301 → /old-english-alphabet | 200 | restore |
| /font-generator/dog | 0 | 7 | 6.0 |  | 410 | 410 | leave |
| /different-fonts/h | 0 | 6 | 7.0 | 88 | 301 → /old-english-alphabet | 200 | restore |
| /different-fonts/m | 0 | 6 | 5.8 |  | 301 → /old-english-alphabet | 200 | leave |
| /font-generator/old-english-word | 0 | 6 | 7.5 |  | 301 → / | 301 → /font-generator/old-english | leave |
| /font-generator/rock-and-roll | 0 | 6 | 8.0 |  | 410 | 410 | leave |
| /font-generator/sweaty-fortnite | 0 | 6 | 8.8 |  | 410 | 410 | leave |
| /font-generator/freaky | 0 | 5 | 5.6 |  | 410 | 410 | leave |
| /font-generator/gothic-printing | 0 | 5 | 6.0 |  | 301 → /gothic-font-generator | 301 → /font-generator/gothic-letters | leave |
| /symbols/hands | 0 | 5 | 6.4 |  | 410 | 410 | leave |
| /tools | 0 | 5 | 6.0 |  | 410 | 410 | leave |
| /different-fonts/6 | 0 | 4 | 2.5 | 34 | 301 → /old-english-numbers | 200 | restore |
| /different-fonts/f | 0 | 4 | 4.5 |  | 301 → /old-english-alphabet | 200 | leave |
| /font-generator/discord | 0 | 4 | 4.0 |  | 301 → /old-english-font-discord | 410 | leave |
| /font-generator/gaming | 0 | 4 | 13.5 |  | 410 | 410 | leave |
| /symbols/bullet | 0 | 4 | 9.0 |  | 410 | 410 | leave |
| /symbols/sun | 0 | 4 | 8.0 |  | 410 | 410 | leave |
| /binary-code-translator | 0 | 3 | 7.3 |  | 410 | 410 | leave |
| /different-fonts/1 | 0 | 3 | 5.0 | 10 | 301 → /old-english-numbers | 200 | restore |
| /different-fonts/c | 0 | 3 | 5.0 | 80 | 301 → /old-english-alphabet | 200 | restore |
| /es/font-generator/bold | 0 | 3 | 10.0 |  | 410 | 410 | leave |
| /font-generator/biology | 0 | 3 | 8.0 |  | 410 | 410 | leave |
| /font-generator/new-romance | 0 | 3 | 10.0 |  | 410 | 410 | leave |
| /subscript-generator | 0 | 3 | 6.7 |  | 410 | 410 | leave |
| /symbols/infinity | 0 | 3 | 9.3 |  | 410 | 410 | leave |
| /symbols/left-arrow | 0 | 3 | 6.7 |  | 410 | 410 | leave |
| /different-fonts/0 | 0 | 2 | 8.0 |  | 301 → /old-english-numbers | 200 | leave |
| /different-fonts/8 | 0 | 2 | 7.5 |  | 301 → /old-english-numbers | 200 | leave |
| /font-generator/bold-italic | 0 | 2 | 8.5 |  | 410 | 410 | leave |
| /font-generator/creepy | 0 | 2 | 8.0 |  | 410 | 410 | leave |
| /font-generator/cursed | 0 | 2 | 8.5 |  | 410 | 410 | leave |
| /font-generator/facebook | 0 | 2 | 6.5 |  | 410 | 410 | leave |
| /font-generator/font-changer | 0 | 2 | 9.0 |  | 410 | 410 | leave |
| /font-generator/japanese | 0 | 2 | 8.0 |  | 410 | 410 | leave |
| /font-generator/leet | 0 | 2 | 6.0 |  | 410 | 410 | leave |
| /font-generator/linkedin | 0 | 2 | 8.5 |  | 410 | 410 | leave |
| /font-generator/playlist | 0 | 2 | 8.0 |  | 410 | 410 | leave |
| /font-generator/small-caps | 0 | 2 | 10.0 |  | 410 | 410 | leave |
| /font-generator/squid-game | 0 | 2 | 7.5 |  | 410 | 410 | leave |
| /font-generator/tiny-text | 0 | 2 | 8.0 |  | 410 | 410 | leave |
| /font-generator/vaporwave | 0 | 2 | 2.0 |  | 410 | 410 | leave |
| /invisible-text-generator | 0 | 2 | 8.0 |  | 410 | 410 | leave |
| /symbols/crown | 0 | 2 | 7.0 |  | 410 | 410 | leave |
| /symbols/currency | 0 | 2 | 6.0 |  | 410 | 410 | leave |
| /symbols/right-arrow | 0 | 2 | 9.5 |  | 410 | 410 | leave |
| /symbols/triangle | 0 | 2 | 5.0 |  | 410 | 410 | leave |
| /symbols/up-arrow | 0 | 2 | 8.0 | 111 | 410 | 200 | restore |
| /blog/fancy-text-whatsapp | 0 | 1 | 4.0 |  | 410 | 410 | leave |
| /different-fonts/5 | 0 | 1 | 6.0 | 30 | 301 → /old-english-numbers | 200 | restore |
| /different-fonts/z | 0 | 1 | 10.0 |  | 301 → /old-english-alphabet | 200 | leave |
| /emoticons/love | 0 | 1 | 7.0 |  | 410 | 410 | leave |
| /emoticons/shrug | 0 | 1 | 9.0 | 6 | 410 | 200 | restore |
| /emoticons/uwu | 0 | 1 | 10.0 |  | 410 | 410 | leave |
| /font-generator | 0 | 1 | 9.0 |  | 301 → / | 301 → / | leave |
| /font-generator/blackletter-copy-paste | 0 | 1 | 10.0 |  | 301 → /blackletter-generator | 301 → /font-generator/blackletter | leave |
| /font-generator/bold-text-generator | 0 | 1 | 8.0 |  | 410 | 410 | leave |
| /font-generator/cool | 0 | 1 | 4.0 |  | 410 | 410 | leave |
| /font-generator/hunger-games | 0 | 1 | 4.0 |  | 410 | 410 | leave |
| /font-generator/ig-font | 0 | 1 | 3.0 |  | 301 → /old-english-font-instagram | 301 → /font-generator/instagram | leave |
| /font-generator/square | 0 | 1 | 6.0 |  | 410 | 410 | leave |
| /font-generator/weird | 0 | 1 | 9.0 |  | 410 | 410 | leave |
| /font-generator/zalgo | 0 | 1 | 2.0 |  | 410 | 410 | leave |
| /symbols/check-mark | 0 | 1 | 10.0 |  | 410 | 410 | leave |
| /about | 0 | 0 |  |  | 200 | 200 | live |
| /ascii-generator | 0 | 0 |  |  | 410 | 410 | leave |
| /auto-font-styler | 0 | 0 |  |  | 410 | 410 | leave |
| /blog | 0 | 0 |  |  | 200 | 200 | live |
| /blog/adapt-one-caption-for-every-platform | 0 | 0 |  |  | 410 | 410 | leave |
| /blog/aesthetic-fonts-tiktok-bio | 0 | 0 |  |  | 410 | 410 | leave |
| /blog/aesthetic-symbols-instagram-bio | 0 | 0 |  |  | 410 | 410 | leave |
| /blog/batch-social-media-posts-one-afternoon | 0 | 0 |  |  | 410 | 410 | leave |
| /blog/best-old-english-fonts-for-discord | 0 | 0 |  |  | 200 | 200 | live |
| /blog/bubble-letters-generator-guide | 0 | 0 |  |  | 410 | 410 | leave |
| /blog/change-instagram-bio-font | 0 | 0 |  |  | 301 → /blog/old-english-fonts-instagram-bio | 301 → /blog/old-english-fonts-instagram-bio | leave |
| /blog/character-limits-styled-text-social-platforms | 0 | 0 |  |  | 410 | 410 | leave |
| /blog/cool-discord-username-ideas | 0 | 0 |  |  | 301 → /blog/best-old-english-fonts-for-discord | 301 → /blog/best-old-english-fonts-for-discord | leave |
| /blog/cursive-text-generator-guide | 0 | 0 |  |  | 410 | 410 | leave |
| /blog/fancy-text-copy-paste-iphone-android | 0 | 0 |  |  | 410 | 410 | leave |
| /blog/how-unicode-fonts-actually-work | 0 | 0 |  |  | 200 | 200 | live |
| /blog/invisible-character-copy-paste | 0 | 0 |  |  | 410 | 410 | leave |
| /blog/old-english-fonts-instagram-bio | 0 | 0 |  |  | 200 | 200 | live |
| /blog/old-english-fonts-tattoo-guide | 0 | 0 |  |  | 200 | 200 | live |
| /blog/schedule-posts-with-fancy-fonts | 0 | 0 |  |  | 410 | 410 | leave |
| /blog/small-text-superscript-generator | 0 | 0 |  |  | 410 | 410 | leave |
| /blog/social-media-content-calendar-small-business | 0 | 0 |  |  | 410 | 410 | leave |
| /blog/strikethrough-text-copy-paste | 0 | 0 |  |  | 410 | 410 | leave |
| /blog/upside-down-text-generator-guide | 0 | 0 |  |  | 410 | 410 | leave |
| /blog/vaporwave-text-generator-guide | 0 | 0 |  |  | 410 | 410 | leave |
| /blog/what-are-unicode-fonts | 0 | 0 |  |  | 301 → /blog/how-unicode-fonts-actually-work | 301 → /blog/how-unicode-fonts-actually-work | leave |
| /case-converter | 0 | 0 |  |  | 410 | 410 | leave |
| /contact | 0 | 0 |  |  | 200 | 200 | live |
| /different-fonts | 0 | 0 |  |  | 301 → /old-english-alphabet | 200 | leave |
| /different-fonts/2 | 0 | 0 |  |  | 301 → /old-english-numbers | 200 | leave |
| /different-fonts/3 | 0 | 0 |  | 12 | 301 → /old-english-numbers | 200 | restore |
| /different-fonts/4 | 0 | 0 |  | 16 | 301 → /old-english-numbers | 200 | restore |
| /different-fonts/b | 0 | 0 |  | 28 | 301 → /old-english-alphabet | 200 | restore |
| /different-fonts/d | 0 | 0 |  |  | 301 → /old-english-alphabet | 200 | leave |
| /different-fonts/n | 0 | 0 |  | 138 | 301 → /old-english-alphabet | 200 | restore |
| /different-fonts/o | 0 | 0 |  |  | 301 → /old-english-alphabet | 200 | leave |
| /different-fonts/p | 0 | 0 |  |  | 301 → /old-english-alphabet | 200 | leave |
| /different-fonts/r | 0 | 0 |  |  | 301 → /old-english-alphabet | 200 | leave |
| /different-fonts/t | 0 | 0 |  | 129 | 301 → /old-english-alphabet | 200 | restore |
| /different-fonts/u | 0 | 0 |  | 97 | 301 → /old-english-alphabet | 200 | restore |
| /different-fonts/v | 0 | 0 |  |  | 301 → /old-english-alphabet | 200 | leave |
| /emoticons | 0 | 0 |  |  | 410 | 410 | leave |
| /emoticons/angry | 0 | 0 |  |  | 410 | 410 | leave |
| /emoticons/bear | 0 | 0 |  |  | 410 | 410 | leave |
| /emoticons/blushing | 0 | 0 |  |  | 410 | 410 | leave |
| /emoticons/cat | 0 | 0 |  |  | 410 | 410 | leave |
| /emoticons/crying | 0 | 0 |  |  | 410 | 410 | leave |
| /emoticons/dance | 0 | 0 |  |  | 410 | 410 | leave |
| /emoticons/happy | 0 | 0 |  |  | 410 | 410 | leave |
| /emoticons/sad | 0 | 0 |  |  | 410 | 410 | leave |
| /emoticons/table-flip | 0 | 0 |  |  | 410 | 410 | leave |
| /es/font-generator/instagram | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/aesthetic | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/anime | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/big | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/bold | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/brat | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/bubble | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/cloud | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/cookie | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/cool-text | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/cute | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/cybernetic | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/discord-font | 0 | 0 |  |  | 301 → /old-english-font-discord | 410 | leave |
| /font-generator/facebook-bold-text | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/fancy | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/fonts-copy-and-paste | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/glitch | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/linkedin-bold-text | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/logotype | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/love | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/mirror | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/modern-gothic | 0 | 0 |  |  | 301 → /gothic-font-generator | 301 → /font-generator/gothic-letters | leave |
| /font-generator/newborn | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/roblox | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/sign | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/small | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/stylish | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/superscript | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/tiktok | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/twitter | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/types-of-bold | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/typewriter | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/underline | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/upside-down | 0 | 0 |  |  | 410 | 410 | leave |
| /font-generator/varsity | 0 | 0 |  |  | 410 | 410 | leave |
| /font-mixer | 0 | 0 |  |  | 410 | 410 | leave |
| /headcanon-generator | 0 | 0 |  |  | 410 | 410 | leave |
| /image-to-ascii | 0 | 0 |  |  | 410 | 410 | leave |
| /morse-code-translator | 0 | 0 |  |  | 410 | 410 | leave |
| /name-generator | 0 | 0 |  |  | 410 | 410 | leave |
| /name-generator/aesthetic-names | 0 | 0 |  |  | 410 | 410 | leave |
| /name-generator/cute-names | 0 | 0 |  |  | 410 | 410 | leave |
| /name-generator/discord-names | 0 | 0 |  |  | 410 | 410 | leave |
| /name-generator/minecraft-names | 0 | 0 |  |  | 410 | 410 | leave |
| /name-generator/roblox-names | 0 | 0 |  |  | 410 | 410 | leave |
| /name-generator/twitter-names | 0 | 0 |  |  | 410 | 410 | leave |
| /pig-latin-translator | 0 | 0 |  |  | 410 | 410 | leave |
| /privacy | 0 | 0 |  |  | 200 | 200 | live |
| /story-generator | 0 | 0 |  |  | 410 | 410 | leave |
| /symbols | 0 | 0 |  | 279 | 410 | 200 | restore |
| /symbols/cross | 0 | 0 |  |  | 410 | 410 | leave |
| /symbols/heart | 0 | 0 |  |  | 410 | 410 | leave |
| /symbols/moon | 0 | 0 |  |  | 410 | 410 | leave |
| /symbols/music | 0 | 0 |  |  | 410 | 410 | leave |
| /symbols/smiley-faces | 0 | 0 |  |  | 410 | 410 | leave |
| /symbols/star | 0 | 0 |  |  | 410 | 410 | leave |
| /terms | 0 | 0 |  |  | 200 | 200 | live |
| /username-generator | 0 | 0 |  |  | 410 | 410 | leave |
| /uuid-generator | 0 | 0 |  |  | 410 | 410 | leave |
