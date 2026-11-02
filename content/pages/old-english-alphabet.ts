import type { PageContent } from "./types";

const page: PageContent = {
  slug: "old-english-alphabet",
  title: "Old English Alphabet — A–Z Blackletter Letters to Copy",
  description:
    "Old English alphabet A–Z and a–z in Fraktur and Bold Fraktur. Copy any single letter with one tap or print the full blackletter chart. Free.",
  h1: "Old English Alphabet",
  crumb: "Old English Alphabet",
  intro:
    "Here is the complete Old English alphabet in two weights, capitals and lowercase, laid out so you can copy one letter at a time. It is handy when you only need an initial, when you're checking how a particular capital looks, or when you want a printed reference sheet for hand-lettering practice.",
  tool: {
    styles: ["fraktur", "bold-fraktur", "fraktur-caps", "bold-fraktur-caps", "fraktur-lower", "wide", "wide-bold", "interpunct", "fraktur-small-caps", "gothic-framed", "circled", "boxed"],
    sample: "Aa Bb Cc Dd Ee Ff Gg",
    placeholder: "Type letters to see them in Old English…",
    presets: ["ABCDEFGHIJKLM", "NOPQRSTUVWXYZ", "abcdefghijklm", "nopqrstuvwxyz"],
  },
  stylesHeading: "Alphabet styles",
  howTo: {
    heading: "How to use the alphabet chart",
    steps: [
      ["Find your letter", "Capitals are listed first, then lowercase, for both the regular and the bold weight."],
      ["Tap to copy", "Each tile copies only that character, so you can build a word one letter at a time or grab a single initial."],
      ["Print if you need paper", "The print button produces a clean sheet without menus, useful for tracing practice or a reference on your desk."],
    ],
  },
  sections: [
    {
      h2: "The full A–Z chart",
      blocks: [{ widget: "alphabet-full" }],
    },
    {
      h2: "Letters that trip people up",
      blocks: [
        { p: "Blackletter capitals were designed for scribes, not for modern readers, and a few of them are easy to confuse:" },
        {
          table: {
            head: ["Pair", "Regular", "Bold", "How to tell them apart"],
            glyphCols: [1, 2],
            rows: [
              ["B and V", "𝔅 𝔙", "𝕭 𝖁", "B has a closed lower bowl; V is open at the bottom."],
              ["I and J", "ℑ 𝔍", "𝕴 𝕵", "J drops below the line. The I is a separate Letterlike Symbols character, so it can look a little different."],
              ["U, N and V", "𝔘 𝔑 𝔙", "𝖀 𝕹 𝖁", "Watch the top: U is open, N joins at the upper left, V has a pointed base."],
              ["Lowercase f and s", "𝔣 𝔰", "𝖋 𝖘", "The f has a crossbar; the s curves back on itself."],
              ["Lowercase r and x", "𝔯 𝔵", "𝖗 𝖝", "The x in Fraktur has a long tail that can look like an r with a hook."],
            ],
          },
        },
      ],
    },
    {
      h2: "Printing and practice",
      blocks: [
        { p: "If you're learning to write blackletter with a broad-edge pen, the printed chart works as a shape reference, though the proportions are digital rather than historical. Calligraphy teachers usually start students on lowercase minims, the short vertical strokes that make up i, m, n and u, before any capitals. Treat the decorative capitals as a later step." },
      ],
    },
  ],
  built:
    "Lowercase letters and 21 capitals come straight from the Mathematical Fraktur block (U+1D51E–U+1D537 for a–z). The capitals C, H, I, R and Z are the older Letterlike Symbols characters U+212D, U+210C, U+2111, U+211C and U+2128. The bold set is complete in its own range, U+1D56C–U+1D59F, with no exceptions.",
  related: {
    heading: "Related Old English pages",
    hrefs: ["/old-english-letters", "/old-english-numbers", "/fraktur-generator", "/blackletter-generator", "/old-english-text-to-image", "/old-english-tattoo-font"],
  },
  faq: [
    { q: "How many letters are in the Old English alphabet here?", a: "Twenty-six capitals and twenty-six lowercase letters in each weight, matching the modern English alphabet. Historical scripts had extra letters such as thorn (þ) and the long s (ſ), which you can try in the medieval font generator." },
    { q: "Why does the capital I look out of place?", a: "It belongs to the Letterlike Symbols block rather than the Fraktur block, so many phones draw it from a different font. The same applies to C, H, R and Z." },
    { q: "Can I copy the whole alphabet at once?", a: "Yes. Tap one of the preset buttons above the style list and press Copy on the row you want; you'll get A–M or N–Z in that style." },
    { q: "Does the print version include the colours and menus?", a: "No. The print layout hides the header, footer and generator so only the letter grids go on paper." },
    { q: "Is there an Old English alphabet with numbers?", a: "Unicode has no blackletter digits. The numbers page explains the closest substitutes, including bold serif digits and Roman numerals." },
  ],
};

export default page;
