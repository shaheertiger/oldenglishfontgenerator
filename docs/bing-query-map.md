# Bing query map: one owner per query family

Every query in the Bing keyword report and the Copilot grounding-query report (research/bing/2026-11-26/) is assigned to exactly one owning URL by `ownerOf` in scripts/lib/citations.mjs. The weekly report (`npm run bing`) uses the same rules. Change the rules there and regenerate this file with `node scripts/query-map.mjs`.

Owners that differ from the first draft of the plan, because the Bing data says so:

- **old english font / generator / copy and paste** → `/font-generator/old-english`, not the homepage. Bing ranks that URL (79 clicks on "old english font generator" at #4.7, 1,137 impressions on "old english font") and gives the homepage 0 clicks. The homepage is now the broad blackletter tool and links to the owner with the anchor "Old English font".
- **old english font alphabet / old english letters** → `/font-generator/old-english-letters` (#3.5 on "old english font alphabet" before Nov 1). `/old-english-alphabet` keeps "old english alphabet", the letter index and the numbers section.
- **old english numbers** → the numbers section on `/old-english-alphabet`. Both numbers pages had under 50 Bing impressions a month, so they were merged and 301.
- **death note** keeps `/death-note-font` (14 Bing clicks since Nov 5, the best post-rebuild page), written as "Death Note-style" text. Mamma Mia, Final Fantasy and Monopoly are sections of `/font-generator/fun`.

| Owner | Bing impressions | Bing clicks | Copilot citations | Top queries (impressions) | Top grounding queries (citations) |
|---|---|---|---|---|---|
| /font-generator/old-english | 2603 | 289 | 857 | old english font (1201); old english font generator (466); old english generator (85); old english font copy and paste (41) | old english font copy paste (446); old english generator (124); old english font copy and paste (117) |
| /font-generator/fancy-letters | 378 | 36 | 2567 | alphabet letters a to z copy and paste (11); english letters..txt (remade) (10); cool  letters. com (9); free copy paste font (9) | fancy letters alphabet (522); fancy alphabet letters (470); copy paste letters (211) |
| /font-generator/gothic-letters | 764 | 47 | 929 | gothic letters (438); gothic font copy and paste (44); gothic letter (28); gothic font copy paste (25) | gothic letters (577); goth letters (136); goth letter text (85) |
| /font-generator/medieval | 822 | 193 | 848 | medieval font (266); medieval font generator (160); medieval text generator (76); medieval font copy and paste (50) | medieval font copy and paste (425); medieval font generator (179); medieval text generator (89) |
| /font-generator/old-english-letters | 535 | 42 | 765 | old english letters (136); old english font alphabet (130); old english alphabet font (57); old english lettering (33) | old english font alphabet (526); old english alphabet font (165); old english letters font (60) |
| /font-generator/handwriting | 359 | 59 | 338 | handwriting font generator (95); handwritten font generator (43); old english font generator and cursive generator (10); old handwriting font generator (10) | handwriting font copy and paste (165); nice handwriting to copy (35); nice writing (34) |
| /old-english-alphabet | 137 | 9 | 388 | old english alphabet (63); old english font numbers tattoo (19); old english gothic alphabet (9); old english number font (7) | old english font numbers (260); old english numbers font (100); alphabet old english style writing (12) |
| /font-generator/thank-you | 31 | 7 | 429 | thank you font (14); thank you font style (3); i want to write thank you pookie in script font (3); thank you fro cruising with us good desing and font (2) | thank you font (192); thank you font style (90); thank you written in style (90) |
| /hieroglyphics-translator | 412 | 14 | 46 | hieroglyphics translator (299); egyptian hieroglyphics translator (48); convert english letters to hieroglyphs (7); english to egyptian hieroglyphs (6) | egyptian translator hieroglyphics (35); hyreoglyphics font generator (11) |
| (unattributed) | 447 | 55 | 5 | custom food text (10); hunger games font generator (8); old time text generator (6); stacked text (6) | what font is it (5) |
| /font-generator/italic | 400 | 3 | 0 | italics generator (354); italic text generator (24); bold italic font generator (6); bold italic unicode text generator (2) |  |
| /symbols | 46 | 2 | 279 | gothic symbols (26); gothic symbols copy and paste (12); gothic symbols to copy (4); goth symbol generator (2) | gothic symbols copy and paste (279) |
| /cuneiform-translator | 227 | 13 | 46 | cuneiform translator (163); english to  cuneiform converter (10); english to cuneiform (9); how to write "an eye for an eye in cuniform (5) | english to cuneiform translator (25); cuneiform copy and paste (16); cuneiform copy paste (5) |
| /font-generator/signature | 44 | 8 | 178 | signature font copy paste (14); signature font generator copy paste (9); signature font generator copy and paste (3); copy and paste signature font (2) | signature font copy and paste (97); signature copy and paste font (28); signature font copy paste (22) |
| /font-generator/fancy-writing | 37 | 1 | 174 | fancy writing (11); magtig...fancy writing (3); stories fancy writing (2); alphabet fancy writing (2) | fancy writing alphabet (96); fancy writing (68); fancey writing (10) |
| /death-note-font | 126 | 12 | 55 | death note font (86); death note title font copy paste (7); what font does l use in death note and  how do i use it on google docs (3); deathnote font generator (3) | death note font copy and paste (55) |
| /different-fonts/e | 17 | 1 | 155 | capital e font (15); capital e in different fonts (2) | e in different fonts (95); e  font (56); weird letter e (4) |
| /different-fonts/n | 0 | 0 | 138 |  | n in different fonts (108); capital n font (20); n font (10) |
| /different-fonts/y | 1 | 0 | 132 | y in different fonts (1) | y in different fonts (132) |
| /different-fonts/t | 1 | 0 | 129 | capital t in different fonts (1) | t font styles (111); t in different fonts (18) |
| /symbols/up-arrow | 6 | 0 | 111 | up arrow block (2); up arrow stockscopy paste (1); font arrow up (1); right arrow font (1) | up arrow copy and paste (111) |
| /font-generator/calligraphy | 38 | 5 | 68 | calligraphy generator copy and paste free (6); calligraphy font generator free copy paste (4); calligraphy generator copy and paste (3); copy paste calligraphy generator (3) | old english calligraphy alphabet (68) |
| /different-fonts/u | 0 | 0 | 97 |  | capital u font (52); u in different fonts (45) |
| /different-fonts/k | 4 | 0 | 91 | k in different font (4) | k in different font (91) |
| /fonts/old-english-text-mt | 28 | 6 | 64 | old english mt font generator (4); old english text mt font maker image (4); (old english text mt) escribir (2); font like microsoft old english text mt (2) | old english mt font (36); old english text mt font (28) |
| /different-fonts/h | 0 | 0 | 88 |  | h in different fonts (42); h font style (40); fancy letter h (6) |
| /font-generator/blackletter | 42 | 12 | 41 | blackletter font generator (7); black letter font (4); black letter copy and paste (3); blackletter (2) | black letter alphabet (25); blackletter font copy and paste (16) |
| /different-fonts/c | 0 | 0 | 80 |  | fancy letter c (56); fancy c letter (24) |
| /different-fonts/l | 2 | 0 | 77 | l in different fonts (2) | capital l font (49); l in different fonts (28) |
| /font-generator/fraktur | 60 | 3 | 0 | fraktur font generator (27); fraktur gothic (4); fraktur text (3); instagram bio blackletter font unicode generator fraktur text copy paste (2) |  |
| /font-generator/ransom-note | 39 | 6 | 0 | ransom note font generator (14); ransom note generator font (13); fonts cut out ransom note generator (3); convert text to newspaper cut outs like ransom notes (2) |  |
| /different-fonts/i | 8 | 2 | 30 | capital i font (4); capital i in different fonts (4) | letter i in diffirent style (30) |
| /runic-translator | 34 | 2 | 0 | ᚺᛖᛚᛚᛟ (28); ancient runes copy and paste (2); anglo saxon rune copy and paste examples (1); runic translator font (1) |  |
| /font-generator/2000s | 34 | 9 | 0 | 2000s font generator (3); font generator 2000s (2); 2000s text generator (2); early 2000s font (2) |  |
| /different-fonts/6 | 0 | 0 | 34 |  | 6 font (34) |
| /different-fonts/5 | 0 | 0 | 30 |  | 5 in different fonts (20); 5 font (10) |
| /font-generator/fun | 29 | 10 | 0 | pulp fiction font generator (9); monopoly font generator (3); font from pulp fiction poster (2); pulp fiction font (2) |  |
| /different-fonts/b | 0 | 0 | 28 |  | capital b font (28) |
| /font-generator/angelic | 27 | 9 | 0 | angelic font (13); font generator angelic (3); angelic font copy (2); angelic text (1) |  |
| /font-generator/gangster | 26 | 5 | 0 | write 'ra ta dia' in old gangster font (6); gangster fonts copy paste (4); lettering gangster style old version (2); gangster letters font generator (2) |  |
| /font-generator/scratchy | 20 | 10 | 0 | scratchy text (5); scratchy text copy paste (3); give me an artist who uses scratchy text (2); scratched text generator (2) |  |
| /different-fonts/a | 7 | 0 | 12 | fancy a (7) | letter a in different fonts (12) |
| /different-fonts/g | 1 | 0 | 18 | g font (1) | fancy letter g (18) |
| /font-generator/distorted-text | 17 | 1 | 0 | distorted text generator (4); diacritics glitched n glitched to be very tall (3); distorted font copy and paste (2); distorted text copy and paste (2) |  |
| /different-fonts/4 | 1 | 1 | 16 | 4 in different fonts (1) | 4 in different fonts (16) |
| /font-generator/princess | 13 | 1 | 0 | princess font generator (6); generate princess font (4); generate princesses font (2); font generatore princess (1) |  |
| /font-generator/1940s | 12 | 6 | 0 | font 1940s (6); 1940s font (1); cinema text generator 1940s style (1); 1940s old hollywood font copy and paste (1) |  |
| /font-generator/monster | 12 | 1 | 0 | monster font style copy paste (4); text style monsters (3); how to write a font monster-like (2); monster text generator (1) |  |
| /different-fonts/3 | 0 | 0 | 12 |  | 3 in different fonts (12) |
| /different-fonts/s | 0 | 0 | 11 |  | s in different fonts (11) |
| /font-generator/reverse | 10 | 3 | 0 | backwards b text (3); backwards b copy and paste (2); unicode for backwards b (1); the letter b backwards copy and paste (1) |  |
| /different-fonts/1 | 0 | 0 | 10 |  | 1 in different fonts (10) |
| /font-generator/calligraphy-capital-letters | 9 | 1 | 0 | calligraphy capital letters (8); free calligraphy capital letters (1) |  |
| /viking-font-generator | 9 | 4 | 0 | viking font generator (3); dad in viking norse font (2); old norse rune-like font generator (1); ragnar in vikings font (1) |  |
| /font-generator/fortnite | 9 | 3 | 0 | crea font tryharder fortnite (2); best tryhard fortnite fonts (2); gothic fonts for fortnite (2); fortnite tryhad font name (1) |  |
| /symbols/greek | 9 | 2 | 0 | greek letters copy paste font (1); copy paste greek letters (1); greek alphabet copy paste (1); uppercase and lowercase greek letters docs (1) |  |
| /emoticons/shrug | 1 | 0 | 6 | shrug emoji old school (1) | shrug emoticon (6) |
| /different-fonts/f | 5 | 0 | 0 | capital f style (5) |  |
| /pirate-translator | 4 | 3 | 0 | pirate talk with ooohhy (4) |  |
| /font-generator/graffiti | 4 | 2 | 0 | graffiti font copy and paste (2); graffiti style unicode text generator copy paste (1); graffiti font copy paste (1) |  |
| /symbols/down-arrow | 4 | 1 | 0 | down arrow gen copy n paste (2); decorative down arrow unicode (1); down arrow bold.gen copy n paste (1) |  |
| /different-fonts/x | 3 | 1 | 0 | font capital x (3) |  |
| /font-generator/italianate | 3 | 1 | 0 | elegant italian writing (3) |  |
| /different-fonts/7 | 3 | 1 | 0 | 7 in different fonts (3) |  |
| /font-generator/animalistic | 3 | 3 | 0 | animalistic font copy and paste (2); feral text (1) |  |
| /font-generator/modern-calligraphy | 3 | 1 | 0 | modern calligraphy font generator (1); modern calligraphy script generatore (1); modern calligraphy generator (1) |  |
| /font-generator/slasher | 2 | 1 | 0 | slasher font generatore (2) |  |
| /font-generator/minecraft | 2 | 0 | 0 | old minecraft font generator (1); minecraft text generator copy paste (1) |  |
| /coquette | 1 | 1 | 0 | find me afont with coquette ribbon florishes (1) |  |
| /different-fonts/w | 1 | 0 | 0 | w in different fonts (1) |  |
| /font-generator/wavy | 1 | 0 | 0 | distorted font generator wavy (1) |  |
| /different-fonts/r | 1 | 0 | 0 | capital r font (1) |  |
| /different-fonts/j | 1 | 0 | 0 | capital j font (1) |  |

"(unattributed)" is mostly misspellings, other languages and tools the site doesn't have.
