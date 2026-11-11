import type { PageContent } from "./types";

const page: PageContent = {
  slug: "old-english-cursive",
  title: "Old English Cursive Font — Blackletter Script Hybrids",
  description:
    "Old English cursive font: blackletter capitals joined to flowing script lowercase. Copy and paste hybrid styles for names, bios and captions.",
  h1: "Old English Cursive Font",
  crumb: "Old English Cursive",
  intro:
    "An Old English cursive font sounds like a contradiction: blackletter is upright and angular, cursive is round and flowing. Lettering artists combine them anyway, because a sharp gothic capital followed by soft script letters gives a name presence without the heaviness of full blackletter. These hybrids do the same thing with copy-paste text.",
  tool: {
    styles: ["oe-cursive", "bold-cursive", "chicano", "fraktur-small-caps", "bold-fraktur-small-caps", "illuminated", "fraktur-plain-lower", "alternating", "deco-heart", "deco-stars", "frame-chevron", "fraktur"],
    sample: "Isabella",
    placeholder: "Type a name to see it in cursive blackletter…",
    presets: ["Isabella", "Valentina", "Daniel", "Forever Yours", "Mi Amor"],
  },
  stylesHeading: "Cursive hybrid styles",
  howTo: {
    heading: "How to choose a cursive hybrid",
    steps: [
      ["Start with a capital", "Hybrids only show their effect when the word starts with a capital letter, so type names in title case."],
      ["Compare light and bold", "Old English Cursive pairs regular Fraktur with thin script; the bold version pairs Bold Fraktur with bold script."],
      ["Check it at phone size", "Script lowercase becomes thin at small sizes. Paste it into a draft post to see how it reads."],
    ],
  },
  sections: [
    {
      h2: "Why mixing blackletter and script works",
      blocks: [
        { p: "Historically, scribes used formal blackletter for books and a quicker, joined hand for letters and records, a family known as bastarda or cursiva. Bastarda kept the pointed, broken look but let the pen move faster, so letters leaned and connected. Our hybrids aren't a faithful revival of those hands, but they borrow the same idea: a formal capital with a looser body." },
        { p: "In practice, the contrast gives a name a clear starting point. The eye lands on the dense capital, then reads the rest easily. That is why this mix is common in jewellery engraving, signature-style tattoos and wedding stationery." },
      ],
    },
    {
      h2: "Hybrid styles at a glance",
      blocks: [
        {
          table: {
            head: ["Style", "Capitals", "Lowercase", "Feels like"],
            glyphCols: [1, 2],
            rows: [
              ["Old English Cursive", "𝔐", "𝒶𝓇𝒾𝒶", "Delicate, wedding-card"],
              ["Bold Old English Cursive", "𝕸", "𝓪𝓻𝓲𝓪", "Confident, signage"],
              ["Fraktur + Small Caps", "𝔐", "ᴀʀɪᴀ", "Neat, bookish"],
              ["Fraktur Capitals, Plain Lowercase", "𝔐", "aria", "Subtle, most readable"],
            ],
          },
        },
      ],
    },
    {
      h2: "Where cursive blackletter fits best",
      blocks: [
        { ul: ["Names in an Instagram Name field, where a single styled word stands out.", "Couple names and dates on save-the-date drafts.", "Signature-style tattoo ideas, especially a name in a parent's or child's honour.", "Captions that need a romantic or vintage tone without looking heavy."] },
      ],
    },
  ],
  built:
    "Capitals come from Mathematical Fraktur or Bold Fraktur. The lowercase letters come from the Mathematical Script block (U+1D4B6–U+1D4CF) or Bold Script (U+1D4EA–U+1D503). Script e, g and o live in Letterlike Symbols as ℯ, ℊ and ℴ, which is why they sometimes look slightly different.",
  related: {
    heading: "More Old English styles",
    hrefs: ["/chicano-font-generator", "/old-english-name-generator", "/old-english-tattoo-font", "/old-english-font-instagram", "/medieval-font-generator", "/old-english-letters", "/gangster-font-generator"],
  },
  faq: [
    { q: "Is there a true Old English cursive font?", a: "Historical cursive blackletter hands existed, such as bastarda and cursiva, and there are real typefaces based on them. Unicode has no dedicated characters for them, so copy-paste versions combine Fraktur capitals with script letters." },
    { q: "Why does nothing change when I type in lowercase?", a: "The hybrids style capitals differently from the rest. If your text has no capitals, every letter becomes script. Start words with a capital to see the contrast." },
    { q: "Which hybrid is easiest to read?", a: "Fraktur Capitals, Plain Lowercase. Only the first letter of each word is styled, so the name stays readable at any size." },
    { q: "Can I use these in an Instagram name?", a: "Yes. The Name field accepts these characters. Your @username does not." },
    { q: "Will the script letters connect like handwriting?", a: "No. Each character is separate, so the letters sit next to each other rather than joining. For truly connected lettering, export an image with a real typeface or ask an artist." },
  ],
};

export default page;
