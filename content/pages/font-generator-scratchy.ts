import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL. Bing queries: scratchy text,
// scratchy text copy paste, scratched text generator, scratchy font
// generator, scratched font generator, scratched copy paste, text scratched font.
const page: PageContent = {
  slug: "font-generator/scratchy",
  file: "font-generator-scratchy",
  title: "Scratchy Text Copy and Paste – 9 Scratched Styles, Free",
  description:
    "Scratchy text in 9 styles: scraped Gothic, slashed letters, worn-print marks and light grunge. Type, tap Copy, paste anywhere. Free, no sign-up.",
  h1: "Scratchy Text Copy and Paste",
  crumb: "Scratchy Text",
  intro:
    "Scratchy text is lettering that looks scraped, nicked or worn, made by laying small strokes, dots and ticks over each letter, and the 9 styles below let you copy it straight into a bio, caption or title. If you were looking for a scratched text generator or a scratchy font generator, this is that, with one difference from an installed font: the scratches are extra Unicode characters attached to each letter, so they come with the text when you paste it. Scratchy is lighter than glitch text. Most styles add one to three marks per letter and keep them close to the letter, so a word still reads at a glance.",
  tool: {
    styles: [
      "distressed", "cursed", "slashed", "u-slash-through", "u-stacked-bold-strike",
      "dotted", "u-decorative-gothic", "u-zalgo-soft", "u-sans-zalgo",
    ],
    sample: "static",
    placeholder: "Type a word to scratch up…",
    presets: ["static", "no signal", "Rust & Bone", "worn out"],
  },
  stylesHeading: "Scratchy and Scratched Text Styles",
  howTo: {
    heading: "How to get a scratched look",
    steps: [
      ["Type a short word or name", "Scratches read best on one to three words. A whole sentence just looks noisy."],
      ["Pick how worn it is", "Distressed Gothic is lightly scuffed, Cursed Gothic is scraped three times per letter, and Slashed cuts one diagonal through every letter."],
      ["Copy it", "Tap Copy. Every letter keeps its own marks, so you can delete or add letters later without losing the effect on the rest."],
    ],
  },
  sections: [
    {
      h2: "1. How do I make scratchy text to copy and paste?",
      blocks: [
        { p: "Type in the box and copy any style; nothing else is needed. Under the hood, each style adds one or more combining marks after every letter. The two Gothic wear styles cycle through six marks so that neighboring letters get different damage, which is what makes them look scratched by hand rather than printed with a pattern." },
        {
          table: {
            head: ["Mark", "Code point", "What it adds"],
            rows: [
              ["Tilde overlay", "U+0334", "A rough squiggle through the letter"],
              ["Short solidus overlay", "U+0337", "A short diagonal scratch"],
              ["Dot below", "U+0323", "A speck under the letter"],
              ["Tilde below", "U+0330", "A ragged line underneath"],
              ["Asterisk below", "U+0359", "A small splatter"],
              ["Equals sign below", "U+0347", "Two scrape lines"],
            ],
          },
        },
      ],
    },
    {
      h2: "2. Scratchy, distressed or glitched?",
      blocks: [
        { ul: [
          "Scratched: one stroke through each letter (Slashed, Bold Slash). Clean and readable.",
          "Distressed: a mix of specks and scuffs, like a worn stamp or old poster (Distressed Gothic, Cursed Gothic, Dotted Underline Gothic).",
          "Grunge: a few marks above and below as well (Decorative Gothic, Glitch soft, Glitch Sans). Starts to look broken.",
        ] },
        { p: "For a fully corrupted, melting look, use the [distorted text generator](/font-generator/distorted-text) instead. For a heavier, dripping horror title, the [horror font generator](/horror-font-generator) has styles built for that." },
      ],
    },
    {
      h2: "Scratched Gothic alphabet to copy",
      blocks: [
        { p: "Tap any cell to copy one scratched letter. The same letter always gets the same marks in this chart." },
        { chart: { styles: ["distressed", "cursed", "slashed"], sets: ["upper", "lower"] } },
      ],
    },
  ],
  built:
    "The letters are Mathematical Fraktur and Bold Fraktur (and Bold Serif or Sans Bold in two styles). The scratches are combining marks from U+0300–U+036F, chiefly U+0334, U+0337, U+0338, U+0323, U+0330, U+0359 and U+0347, attached after each letter.",
  related: {
    heading: "More rough and dark text",
    hrefs: ["/font-generator/distorted-text", "/font-generator/strikethrough", "/horror-font-generator", "/metal-font-generator", "/font-generator/slasher"],
  },
  faq: [
    { q: "What is scratchy text?", a: "Text with small strokes and specks added to each letter so it looks scraped or worn. Here it is made with Unicode combining marks." },
    { q: "How do I copy scratchy text?", a: "Type in the box and tap Copy next to a style. The scratches are characters, so they paste along with the letters." },
    { q: "Is there a scratchy font I can install instead?", a: "Yes, many distressed display fonts exist for design software. Use one of those for print; use this page when you need the look as plain text." },
    { q: "Why do the scratches look different on another device?", a: "Each font draws combining marks in its own position and size, so a scratch can sit higher, lower or thinner on another screen." },
    { q: "Can I make lowercase scratchy text?", a: "Yes. Type in lowercase and every style keeps it; the chart above shows both cases." },
    { q: "Does scratchy text work with numbers?", a: "The marks attach to digits too, though most Gothic styles here show digits as bold serif numbers because Fraktur has none." },
  ],
};

export default page;
