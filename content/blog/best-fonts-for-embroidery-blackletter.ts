import type { BlogPost } from "@/lib/blog";

const post: BlogPost = {
  slug: "best-fonts-for-embroidery-blackletter",
  title: "Best Fonts for Embroidery: 7 That Stitch Old English Cleanly",
  description:
    "Best fonts for embroidery when you want Old English or cursive names: 7 free picks, minimum letter heights, satin vs fill stitches and digitizing tips.",
  date: "2026-11-11",
  readingTime: "4 min read",
  excerpt:
    "Blackletter and script look great in thread only if the letters are big and simple enough. Seven free fonts, size limits and what to ask your embroiderer.",
  related: ["best-engraving-fonts", "best-monogram-fonts-blackletter", "block-vs-script-font"],
  body: [
    { type: "p", text: "The best fonts for embroidery are heavy and simple, because needle and thread can't reproduce hairlines. For Old English lettering, **Pirata One** and **Germania One** stitch most cleanly at small sizes; **UnifrakturCook** gives the classic look on chest and back pieces; for cursive names, **Kaushan Script** and **Great Vibes** hold up better than thin signature scripts. As a rough guide, many embroiderers won't go below about 1/4 inch (6 mm) letter height for plain text, and ornate blackletter needs noticeably more." },
    { type: "h2", text: "Why do some fonts embroider badly?" },
    { type: "p", text: "A machine stitches lines of thread, and each stitch has a minimum length and the thread has a real width. Three font features cause trouble:" },
    { type: "ul", items: [
      "**Hairlines.** Fine connecting strokes in script and Fraktur are thinner than a satin column can be, so they get thickened, dropped or turned into a single running stitch.",
      "**Small counters.** The enclosed space in e, a or o fills with thread on dense fonts and the letter turns into a blob.",
      "**Sharp, tiny details.** Blackletter's diamond-shaped feet and spurs need room; at small sizes they round off.",
    ]},
    { type: "h2", text: "Which 7 free fonts work best for embroidery?" },
    { type: "table", head: ["Font", "Type", "Use it for", "Rough minimum size (ask your embroiderer)"], rows: [
      ["[Pirata One](/fonts/pirata-one)", "Simplified blackletter", "Left-chest names, caps, small Old English text", "Smallest of the blackletter picks"],
      ["Germania One", "Condensed blackletter", "Sleeve text, narrow panels, patches", "Small to medium"],
      ["[UnifrakturCook](/fonts/unifrakturcook)", "Heavy Fraktur", "Back pieces, jacket panels, big chest logos", "Large; avoid tiny sizes"],
      ["Grenze Gotisch (bold weights)", "Modern blackletter", "Logos that need a bold and a lighter line", "Medium"],
      ["Graduate", "Varsity slab", "Team names, collegiate patches", "Small"],
      ["Kaushan Script", "Brush script", "Cursive names and taglines", "Medium"],
      ["Great Vibes", "Formal script", "Wedding, baby and gift names", "Medium to large"],
    ]},
    { type: "p", text: "Sizes are relative because thread, fabric, stitch type and the digitizer's skill all change the limit. A cap front and a fleece back behave very differently. Ask for a stitch-out sample before a large order." },
    { type: "h2", text: "Satin or fill stitch for Old English letters?" },
    { type: "p", text: "Most lettering is stitched in **satin columns**: zigzag stitches that run across each stroke and give a glossy, raised look. They suit the narrow strokes of most fonts. Very wide strokes, such as the thick verticals of a large UnifrakturCook word, may be switched to a **fill stitch** (rows of short stitches) so long satin stitches don't snag. Fine connecting lines may become a **running stitch**. A good digitizer mixes all three within one word, which is why the same font can look crisp from one shop and messy from another." },
    { type: "h2", text: "Can I use any TTF font on an embroidery machine?" },
    { type: "p", text: "Not directly. Embroidery software works with stitch files, so a TrueType font has to be **digitized**: converted into stitch paths with direction, density and underlay. Some software can auto-convert installed fonts, but automatic conversion of blackletter and thin scripts often looks rough. Your options:" },
    { type: "ol", items: [
      "Use a pre-digitized embroidery font (an \"embroidery alphabet\") built into your machine software, if it has a blackletter style.",
      "Have an embroiderer digitize your text by hand from the font. Send them the lettering as a vector file with text converted to outlines.",
      "Auto-convert a TTF yourself, then edit the result. Heavy fonts like those above convert more cleanly than delicate ones.",
    ]},
    { type: "p", text: "All seven fonts in the table are under the SIL Open Font License, so digitizing them and selling the embroidered products is allowed. For more garment-focused picks, see [clothing brand fonts](/fonts/clothing-brand); for cursive name ideas, see [tattoo fonts](/fonts/tattoo), which share many of the same scripts." },
    { type: "h2", text: "What about cursive names on towels, hats and baby blankets?" },
    { type: "p", text: "Pick a script with a strong, consistent stroke and moderate loops. Signature-style scripts with long, thin swashes look elegant on screen and thin in thread. Keep names on one line where possible and avoid all-capital script, which is hard to read in any medium. Preview the wording first with the [Old English cursive](/old-english-cursive) styles, then choose the font file." },
    { type: "faq", items: [
      { q: "What is the best Old English font for embroidery?", a: "Pirata One for small text and UnifrakturCook for large pieces. Both are free for commercial use." },
      { q: "How small can embroidered letters be?", a: "Many embroiderers set a floor of about 1/4 inch (6 mm) for simple fonts. Blackletter and script need more; ask for a sample stitch-out." },
      { q: "What is the best cursive font for embroidering names?", a: "A script with even, fairly heavy strokes such as Kaushan Script or Great Vibes. Very thin signature scripts lose their hairlines in thread." },
      { q: "Do I need to digitize a font before embroidering it?", a: "Yes. Machines need stitch files, so fonts are digitized, either automatically by software or by hand, which gives better results for ornate letters." },
      { q: "Can I sell embroidered items made with these fonts?", a: "Yes. The SIL Open Font License allows commercial products. Trademarks on names or logos are a separate question." },
    ]},
    { type: "cta", text: "Preview Old English wording before it goes to the digitizer with the", href: "/old-english-text-to-image", label: "text to image tool" },
  ],
};

export default post;
