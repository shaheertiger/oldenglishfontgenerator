import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL. Bing queries: distorted text
// generator, distorted text copy and paste, distorted font generator,
// distorted font copy and paste, how to type distorted text, plus zalgo /
// "glitched to be very tall" diacritics searches.
const page: PageContent = {
  slug: "font-generator/distorted-text",
  file: "font-generator-distorted-text",
  title: "Distorted Text Generator – 10 Glitch Styles, Copy and Paste",
  description:
    "Distorted text generator: 10 glitch, zalgo and warped styles from light static to fully cursed. Type, tap Copy, paste anywhere. Free, no sign-up.",
  h1: "Distorted Text Generator",
  crumb: "Distorted Text",
  intro:
    "A distorted text generator buries ordinary letters under stacks of accent marks, mixes them with odd look-alikes or flips them, so the line looks glitched, corrupted or melting; this one has 10 styles, from light static to a fully cursed wall of marks. Each result is distorted text you can copy and paste, because the damage is made of real characters rather than an image or filter. It also works as a distorted font generator for short names and titles, though the heavier the style, the harder it is to read. The styles are grouped below by how much they warp, so you can pick the least that still looks broken.",
  tool: {
    styles: [
      "u-zalgo-soft", "u-zalgo", "u-zalgo-extreme", "u-gothic-glitch", "u-cursed-gothic",
      "u-script-zalgo", "u-sans-zalgo", "u-weird", "u-fraktur-flipped", "u-bent",
    ],
    sample: "signal lost",
    placeholder: "Type text to corrupt…",
    presets: ["signal lost", "it is watching", "ERROR 404", "do not open"],
  },
  stylesHeading: "Distorted and Glitch Text Styles",
  howTo: {
    heading: "How to type distorted text",
    steps: [
      ["Keep it short", "Type one to four words. Every letter gains many marks, so long lines turn into a smear nobody can read."],
      ["Choose a strength", "Glitch (soft) adds 7 marks per letter, Zalgo adds 19, and Cursed adds 28. The Gothic, Script and Sans versions apply the marks to styled letters."],
      ["Copy, then check the height", "Tap Copy. Tall marks can overlap the lines above and below where you paste, so preview it before posting."],
    ],
  },
  sections: [
    {
      h2: "1. How do you type distorted text?",
      blocks: [
        { p: "You cannot type it on a normal keyboard, because the effect comes from combining marks: accents, tildes, dots and strokes from the Combining Diacritical Marks block (U+0300–U+036F) that attach to the letter before them. A generator adds dozens of them at once, picking from marks that sit above the letter, through the middle, and below it. The letter underneath is unchanged, which is why the text can still be selected and copied like any other text." },
        {
          table: {
            head: ["Strength", "Styles", "Marks per letter"],
            rows: [
              ["Light static", "Glitch (soft), Gothic Glitch", "7"],
              ["Medium", "Cursed Gothic, Glitch Script, Glitch Sans", "9"],
              ["Stacked zalgo", "Zalgo", "19"],
              ["Fully cursed", "Cursed", "28"],
              ["Warped, no marks", "Weird Mix, Fraktur Upside Down, Bent", "0"],
            ],
          },
        },
      ],
    },
    {
      h2: "2. Why are glitched diacritics so tall?",
      blocks: [
        { p: "Each mark is drawn relative to the one before it, so 12 marks above a letter are stacked 12 high. The text line itself does not grow, which means the marks spill into the lines above and below. Unicode's [Stream-Safe Text Format](https://unicode.org/reports/tr15/) suggests no more than 30 combining marks in a row; the Cursed style here stays just below that, at 28 per letter, but many text boxes and fonts draw such stacks unevenly." },
        { p: "Screen readers may read some of the marks aloud or skip the word, so do not use distorted text for anything a reader must understand, such as a date or a warning." },
      ],
    },
    {
      h2: "Glitch alphabet to copy",
      blocks: [
        { p: "Each cell is one letter with its marks already attached. Tap to copy a single glitched character." },
        { chart: { styles: ["u-zalgo-soft", "u-zalgo"], sets: ["upper", "lower"] } },
      ],
    },
  ],
  built:
    "The glitch styles add marks from Combining Diacritical Marks (U+0300–U+036F) above, through and below each letter, picked in a fixed order so the result is the same each time. Weird Mix swaps letters between Fraktur, Script, Double-Struck, circled, squared and fullwidth forms.",
  related: {
    heading: "More text effects",
    hrefs: ["/font-generator/scratchy", "/font-generator/wavy", "/font-generator/reverse", "/horror-font-generator", "/font-generator/slasher"],
  },
  faq: [
    { q: "What is distorted text called?", a: "It is often called zalgo, glitch or cursed text. All of them rely on stacked combining marks." },
    { q: "How do I copy and paste distorted text?", a: "Type your words in the box, then tap Copy on the style you want. The marks come along with the letters." },
    { q: "Is distorted text the same as a distorted font?", a: "Not quite. A font changes how letters are drawn; this adds extra characters around unchanged letters, so it can go anywhere you can paste text." },
    { q: "How do I remove zalgo from text?", a: "Retype the words, or paste them into a tool that strips combining marks." },
    { q: "Why does my glitch text overlap other lines?", a: "The marks stack above and below the letter and are not given extra line space. Use Glitch (soft) for less height." },
    { q: "Is distorted text the same every time?", a: "Yes. The marks are chosen in a fixed sequence, so the same input gives the same output." },
    { q: "Can I make distorted text without marks?", a: "Yes. Weird Mix, Fraktur Upside Down and Bent warp the letters by swapping or flipping them instead." },
  ],
};

export default page;
