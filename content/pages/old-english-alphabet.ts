import type { PageContent } from "./types";

const page: PageContent = {
  slug: "old-english-alphabet",
  title: "Old English Alphabet: A–Z and Numbers to Copy and Paste",
  description:
    "The Old English alphabet A–Z and a–z in 2 weights, plus Old English numbers 0–9 and Roman dates. Tap any letter to copy, or print the chart. Free.",
  h1: "Old English Alphabet",
  crumb: "Old English Alphabet",
  intro:
    "The Old English alphabet is the 26 letters A–Z drawn in blackletter, and here they all are in two weights, capitals and lowercase, with Old English numbers 0–9 below. Tap one letter to copy it, or type in the box to turn a whole word into Old English alphabet letters. Use it for an initial, to check how a capital looks, or print the chart for hand-lettering practice. Every letter also has its own page in 40+ styles.",
  tool: {
    styles: ["fraktur", "bold-fraktur", "fraktur-caps", "bold-fraktur-caps", "fraktur-lower", "wide", "wide-bold", "interpunct", "fraktur-small-caps", "gothic-framed", "circled", "boxed", "roman-date", "fraktur-outline-digits"],
    sample: "Aa Bb Cc Dd Ee Ff Gg",
    placeholder: "Type letters to see them in Old English…",
    presets: ["ABCDEFGHIJKLM", "NOPQRSTUVWXYZ", "abcdefghijklm", "nopqrstuvwxyz", "0123456789", "Est. 1998"],
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
      h2: "1. What are the Old English alphabet letters, A to Z?",
      blocks: [{ widget: "alphabet-full" }],
    },
    {
      h2: "2. Is there a page for each Old English letter?",
      blocks: [
        { p: "Yes. Each letter has its own page showing it in 40+ copy-paste styles, Old English first, with notes on how it is built, where it came from and which letters it gets confused with." },
        { widget: "letter-index" },
      ],
    },
    {
      h2: "3. Are there Old English numbers?",
      blocks: [
        { p: "Not as real blackletter digits. The Fraktur letters in Unicode were added for mathematicians, who use them as variable names and never needed Fraktur numbers, so none were encoded. Historical printers had their own figure shapes, but those live only inside font files. That leaves three practical Old English font numbers, all copyable below: bold serif digits, outline digits and Roman numerals. Type a year in the box above and the Roman Numeral Date row converts it (1998 becomes 𝕸𝕮𝕸𝖃𝕮𝖁𝕴𝕴𝕴)." },
        { widget: "numbers" },
        {
          table: {
            head: ["Option", "Looks like", "Best for"],
            glyphCols: [1],
            rows: [
              ["Bold serif digits", "𝟏𝟗𝟗𝟖", "Bios and captions where the number must be read instantly"],
              ["Outline digits", "𝟙𝟡𝟡𝟠", "Decorative headings, lighter next to regular Fraktur"],
              ["Roman numerals in Fraktur", "𝕸𝕮𝕸𝖃𝕮𝖁𝕴𝕴𝕴", "Tattoo dates, anniversaries, anything formal"],
              ["Unicode Roman numeral signs", "Ⅰ Ⅱ Ⅲ Ⅳ", "Single small numbers such as chapters"],
            ],
          },
        },
        { p: "Roman numerals add up: I is 1, V 5, X 10, L 50, C 100, D 500, M 1000, and a smaller one before a bigger one is subtracted (IV is 4, XC is 90). For a date, convert each part separately: 07.04.2015 becomes VII.IV.MMXV. Check the day and month order before anything is printed or inked. Each digit 0–9 also has its own page, for example [7 in different fonts](/different-fonts/7)." },
      ],
    },
    {
      h2: "4. Which Old English letters look alike?",
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
      h2: "5. Can I print the Old English alphabet?",
      blocks: [
        { p: "If you're learning to write blackletter with a broad-edge pen, the printed chart works as a shape reference, though the proportions are digital rather than historical. Calligraphy teachers usually start students on lowercase minims, the short vertical strokes that make up i, m, n and u, before any capitals. Treat the decorative capitals as a later step." },
      ],
    },
  ],
  built:
    "Lowercase letters and 21 capitals come straight from the Mathematical Fraktur block (U+1D51E–U+1D537 for a–z). The capitals C, H, I, R and Z are the older Letterlike Symbols characters U+212D, U+210C, U+2111, U+211C and U+2128. The bold set is complete in its own range, U+1D56C–U+1D59F, with no exceptions.",
  related: {
    heading: "Related Old English pages",
    hrefs: ["/font-generator/old-english-letters", "/font-generator/old-english", "/different-fonts", "/font-generator/fraktur", "/font-generator/blackletter", "/old-english-text-to-image", "/font-generator/old-english-tattoo", "/font-generator/gothic-letters"],
  },
  faq: [
    { q: "How many letters are in the Old English alphabet here?", a: "Twenty-six capitals and twenty-six lowercase letters in each weight, matching the modern English alphabet. Historical scripts had extra letters such as thorn (þ) and the long s (ſ), which you can try in the medieval font generator." },
    { q: "Why does the capital I look out of place?", a: "It belongs to the Letterlike Symbols block rather than the Fraktur block, so many phones draw it from a different font. The same applies to C, H, R and Z." },
    { q: "Can I copy the whole alphabet at once?", a: "Yes. Tap one of the preset buttons above the style list and press Copy on the row you want; you'll get A–M or N–Z in that style." },
    { q: "Does the print version include the colours and menus?", a: "No. The print layout hides the header, footer and generator so only the letter grids go on paper." },
    { q: "Is there an Old English alphabet with numbers?", a: "Unicode has no blackletter digits, so this page gives the closest Old English numbers: bold serif digits, outline digits and Roman numerals." },
    { q: "What are Old English font numbers?", a: "Bold serif digits such as 𝟏𝟗𝟗𝟖 are the closest match to Bold Fraktur; for a more medieval look, write the number in Roman numerals." },
    { q: "How do I write my birth year in Old English numbers?", a: "Type the year in the box and copy the Roman Numeral Date row. For example, 1989 becomes MCMLXXXIX in Fraktur." },
    { q: "What is the Old English alphabet called?", a: "As a lettering style it is blackletter, and its German form is Fraktur. The language Old English was written in a different, rounder insular script." },
  ],
};

export default page;
