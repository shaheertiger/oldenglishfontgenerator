import type { PageContent } from "./types";

const page: PageContent = {
  slug: "old-english-numbers",
  title: "Old English Numbers — Blackletter Digits & Roman Dates",
  description:
    "Old English numbers explained: why Unicode has no blackletter digits, plus bold serif digits and Roman numeral dates you can copy. Free.",
  h1: "Old English Numbers",
  crumb: "Old English Numbers",
  intro:
    "If you have looked for Old English numbers to copy and paste, you may have noticed something odd: the digits never change. That isn't a bug in any one tool. Unicode simply doesn't contain Fraktur digits, so every generator has to substitute something. This page shows the best substitutes and converts dates into Roman numerals for you.",
  tool: {
    styles: ["roman-date", "roman-date-light", "bold-fraktur", "fraktur", "fraktur-outline-digits", "frame-banner", "gothic-framed", "tattoo", "deco-cross"],
    sample: "Est. 1998",
    placeholder: "Type a date or number, e.g. 07 04 2015…",
    presets: ["Est. 1998", "07.04.2015", "1989", "Since 2012", "XIII"],
  },
  stylesHeading: "Number and date styles",
  howTo: {
    heading: "How to turn a date into Old English style",
    steps: [
      ["Type the date in digits", "Separate day, month and year with dots, spaces or slashes. Each group is converted on its own."],
      ["Compare digits and numerals", "The top styles turn digits into Roman numerals written in Fraktur; the others keep digits in bold serif form."],
      ["Copy the one that fits", "Roman numerals suit tattoos and formal headings; bold digits are easier to read in a bio."],
    ],
  },
  sections: [
    {
      h2: "Why blackletter digits don't exist in Unicode",
      blocks: [
        { p: "The Fraktur letters in Unicode were added for mathematicians, who use them as variable names. Mathematicians never needed Fraktur-style numbers, so none were encoded. Historical printers did have their own figure shapes, but those exist only inside real font files, not as separate characters you can paste." },
        { p: "That leaves three practical options, all shown below: bold serif digits, outline digits, and Roman numerals." },
        { widget: "numbers" },
      ],
    },
    {
      h2: "Which substitute to choose",
      blocks: [
        {
          table: {
            head: ["Option", "Looks like", "Best for"],
            glyphCols: [1],
            rows: [
              ["Bold serif digits", "𝟏𝟗𝟗𝟖", "Bios and captions where the number must be read instantly."],
              ["Outline digits", "𝟙𝟡𝟡𝟠", "Decorative headings, with a lighter look next to regular Fraktur."],
              ["Roman numerals in Fraktur", "𝕸𝕮𝕸𝖃𝕮𝖁𝕴𝕴𝕴", "Tattoo dates, anniversaries and anything formal."],
              ["Unicode Roman numeral signs", "Ⅰ Ⅱ Ⅲ Ⅳ", "Single small numbers, such as chapter or volume markers."],
            ],
          },
        },
      ],
    },
    {
      h2: "Roman numerals, quickly",
      blocks: [
        { p: "Roman numerals add up symbols: I is 1, V is 5, X is 10, L is 50, C is 100, D is 500 and M is 1000. A smaller symbol before a bigger one is subtracted, so IV is 4 and XC is 90. The year 1998 therefore becomes MCMXCVIII: one thousand, nine hundred (CM), ninety (XC) and eight (VIII). The converter handles any number from 1 to 3999 and leaves larger numbers as digits." },
        { p: "For a date, convert each part separately. 07.04.2015 becomes VII.IV.MMXV. Double-check the order of day and month before anything gets printed or inked." },
      ],
    },
  ],
  built:
    "Bold digits come from Mathematical Bold Digits (U+1D7CE–U+1D7D7) and outline digits from the Double-Struck digits (U+1D7D8–U+1D7E1). The Roman numeral styles first convert numbers to the letters I, V, X, L, C, D and M, then map those letters into Fraktur or Bold Fraktur. The single numeral tiles use the Number Forms block (U+2160 onwards).",
  related: {
    heading: "Other Old English tools",
    hrefs: ["/old-english-tattoo-font", "/old-english-alphabet", "/old-english-name-generator", "/old-english-letters", "/old-english-text-to-image", "/blackletter-generator"],
  },
  faq: [
    { q: "Are there real Old English numbers I can copy?", a: "No. Unicode includes Fraktur letters but no Fraktur digits. Any site offering them is substituting other characters, such as bold serif digits." },
    { q: "How do I write my birth year in Roman numerals?", a: "Type the year into the box and copy the Roman Numeral Date style. For example, 1989 becomes MCMLXXXIX." },
    { q: "Can it convert numbers above 3999?", a: "Standard Roman numerals stop at 3999 without special overline marks, so larger numbers are left as digits." },
    { q: "Why do my digits stay plain in some styles?", a: "Some decorative styles only change letters. Choose a style marked bold or outline if you want the digits restyled as well." },
    { q: "Will Roman numeral dates work in a tattoo?", a: "They are a common choice. Use this to check the length and look, and confirm the conversion with your artist before the session." },
    { q: "What about the digit zero?", a: "Romans had no symbol for zero. A zero inside a larger number, such as 2015, converts normally; a lone 0 stays as a digit." },
  ],
};

export default page;
