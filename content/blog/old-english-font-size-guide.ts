import type { BlogPost } from "@/lib/blog";

const post: BlogPost = {
  slug: "old-english-font-size-guide",
  title: "Old English Font Size Guide: Minimum Sizes for 6 Uses",
  description:
    "Old English font size guide: practical minimum sizes for blackletter in print headings, web, signs, tattoos and embroidery, and why it needs more room.",
  date: "2026-11-11",
  readingTime: "4 min read",
  excerpt:
    "Blackletter needs more size than a normal font to stay readable. A table of practical starting points for print, screens, signs, skin and stitching.",
  related: ["long-s-explained", "fraktur-letters-showing-as-boxes", "best-fonts-for-signs-blackletter"],
  body: [
    { type: "p", text: "As a rule of thumb, set Old English lettering about one and a half times larger than you would a plain font doing the same job. In print that means headings from roughly 18 pt upwards, on screens headings from about 28 px, and in embroidery letters at least about 1/4 inch (6 mm) tall. For tattoos, many artists won't go much below 1 cm per letter, but that number belongs to your artist, not to a chart." },
    { type: "p", text: "The figures below are starting points we've collected from common print, sign and embroidery practice, not standards. Always test at real size before committing." },

    { type: "h2", text: "What is the smallest readable size for blackletter?" },
    { type: "table", head: ["Use", "Practical minimum", "Comfortable size", "Notes"], rows: [
      ["Running text (paragraphs)", "Avoid", "Avoid", "Modern readers slow down noticeably; keep paragraphs in a plain serif or sans"],
      ["Print headings and titles", "About 18 pt", "24–48 pt", "Certificates and diplomas often use 28 pt or more for the institution name"],
      ["Web and app headings", "About 28 px", "36–64 px", "Use a real web font such as UnifrakturMaguntia, not Unicode characters"],
      ["Signs and storefronts", "Bigger than plain lettering at the same distance", "Test from the reading distance", "See our [sign fonts guide](/blog/best-fonts-for-signs-blackletter)"],
      ["Tattoo lettering", "Often around 1 cm per letter", "Larger for dense styles", "Ask your artist; ink spreads over the years"],
      ["Embroidery", "About 1/4 in (6 mm) letter height", "1/2 in (12 mm) and up", "Thin hairlines may be dropped by the digitiser below this"],
    ] },

    { type: "h2", text: "Why does Old English need to be bigger than other fonts?" },
    { type: "p", text: "Three features of blackletter eat into legibility at small sizes." },
    { type: "ul", items: [
      "**Small, closed counters.** The insides of a, e, o and d are narrow slits. At small sizes, or when ink or thread spreads, they fill in and letters turn into dark blocks.",
      "**Similar vertical strokes.** In textura-style letters, n, u, m and i are built from almost identical upright strokes, so words like \"minimum\" become a picket fence.",
      "**Ornate capitals.** The capitals carry curls and spurs that need space to read as letters rather than decoration.",
    ] },
    { type: "p", text: "Fonts also differ in x-height, the height of lowercase letters such as x relative to the capitals. Two fonts both set at 24 pt can look very different in size. Pirata One and Texturina have relatively open shapes, so they survive smaller sizes better than UnifrakturCook, whose heavy strokes are best kept large. You can compare them with your own words in the [free Old English fonts](/fonts/old-english) directory." },

    { type: "h2", text: "How big should Old English text be on a website?" },
    { type: "p", text: "Use blackletter for a site name, a section heading or a pull quote, set with a real font file via CSS. Around 28 px is the floor where most blackletter still reads on a phone; 36 px or more feels comfortable. Copy-paste Unicode \"fonts\" are a poor choice for web headings: screen readers spell them out character by character, search engines may not treat them as normal words, and the shapes depend on whatever font the visitor's device has." },

    { type: "h2", text: "What size works for tattoos?" },
    { type: "p", text: "There is no universal minimum, and anyone giving you an exact number without seeing your skin and the design is guessing. Fine-needle artists can hold detail smaller than traditional shops, and placement matters too: fingers and hands blur faster than a forearm. As a starting conversation, around 1 cm per letter is a common floor for heavy blackletter, and lighter Fraktur styles can sometimes go slightly smaller. Plan the layout with the [tattoo font preview](/old-english-tattoo-font), then let your artist set the final size." },

    { type: "h2", text: "How small can embroidered blackletter go?" },
    { type: "p", text: "Embroidery shops commonly quote about 1/4 inch (6 mm) as the smallest letter height they'll stitch cleanly, and blackletter usually needs more than a plain block font because of its hairlines. If your design is small, such as a cap side or a chest logo, pick a heavy, simple face like UnifrakturCook or Pirata One, and ask the digitiser for a sample sew-out. More advice is in [blackletter fonts for embroidery](/blog/best-fonts-for-embroidery-blackletter)." },

    { type: "h2", text: "How do I test a size before printing?" },
    { type: "ol", items: [
      "Print the word at the planned size on plain paper, or view it on the actual device.",
      "Step back to the real reading distance: arm's length for a card, across the room for a poster.",
      "Squint. If the word becomes a dark bar, go bigger or switch to a lighter, more open font.",
      "Check the hardest word in your text, usually one with lots of m, n, u or i.",
    ] },

    { type: "faq", items: [
      { q: "What point size should an Old English heading be?", a: "Start around 18 pt for print headings and 24–48 pt for titles. Go larger for heavy fonts like UnifrakturCook." },
      { q: "Can I write a whole paragraph in Old English?", a: "You can, but it slows readers down. Keep blackletter for headings, names and short phrases, and set body text in a plain font." },
      { q: "What is the minimum size for an Old English tattoo?", a: "It depends on your artist, skin and placement. Many artists work from about 1 cm per letter for heavy blackletter, but follow their advice." },
      { q: "Why does my blackletter look smaller than other fonts at the same size?", a: "Many blackletter fonts have a small x-height, so the lowercase letters sit lower than in a typical sans-serif at the same point size." },
      { q: "Which free Old English font is most readable small?", a: "Pirata One and Texturina have more open shapes than classic Fraktur, so they hold up better at smaller sizes." },
    ] },
    { type: "cta", text: "Test your wording at real size with open-licence fonts in the", href: "/old-english-text-to-image", label: "Old English text to image tool" },
  ],
};

export default post;
