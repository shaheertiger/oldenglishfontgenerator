import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL (old keyword: "font converter").
// Bing's "old english font converter" queries belong to the homepage, so this
// page links there and stays the general, many-style converter.
const page: PageContent = {
  slug: "font-generator/font-converter",
  file: "font-generator-font-converter",
  title: "Font Converter – Convert Text Into 22 Unicode Styles, Free",
  description:
    "Font converter: type once and get your text in 22 Unicode styles, from bold and italic to script, outline and bubble. Tap Copy, paste anywhere.",
  h1: "Font Converter",
  crumb: "Font Converter",
  intro:
    "A font converter turns the text you type into look-alike Unicode characters (bold, italic, script, outline, bubble and more) so the style stays when you copy and paste it; this one converts into 22 styles at once. It is a text font converter, not a file converter: it does not change, install or convert font files such as TTF or OTF, and it cannot change the font a website or app uses. What it does is swap each letter for a different character that happens to look styled, which is why the result can be pasted into places that offer no font menu. Think of it as a Unicode font converter, and the limits below make sense. If you were after an Old English font converter, the [Old English font generator](/) has 60+ blackletter styles.",
  tool: {
    styles: [
      "u-bold-serif", "u-italic-serif", "u-bold-italic-serif",
      "u-sans-bold", "u-sans-italic", "u-sans-bold-italic",
      "u-script", "u-script-bold", "u-fraktur", "u-fraktur-bold",
      "u-double-struck", "u-monospace", "u-small-caps", "u-superscript",
      "u-bubble", "u-bubble-filled", "u-squared", "u-fullwidth",
      "u-strikethrough", "u-underline", "u-upside-down", "u-mirrored",
    ],
    sample: "Convert my text",
    placeholder: "Type or paste text to convert…",
    presets: ["Convert my text", "Jordan 2026", "New post", "Name Surname"],
  },
  stylesHeading: "Converted Text in 22 Styles",
  howTo: {
    heading: "How to use the font converter",
    steps: [
      ["Paste your text", "Type it or paste it. Every style below converts it at the same time, so you can compare them side by side."],
      ["Check numbers and symbols", "Not every style has digits or punctuation. Look at the result before copying if your text has a date or a price."],
      ["Copy the one you want", "Tap Copy next to it. To convert back to normal, retype the text; the converter cannot undo a style once it is pasted elsewhere."],
    ],
  },
  sections: [
    {
      h2: "1. What a Unicode font converter can and can't do",
      blocks: [
        {
          cards: [
            { h: "It can", p: "Swap A–Z, a–z and sometimes 0–9 for styled characters that Unicode already defines; give you the same style wherever you can paste plain text; mix styles in one line by copying parts separately." },
            { h: "It can't", p: "Change a font file, install a font, or pick the font a page is drawn in; change size or color; style letters Unicode has no styled version of (accented letters like é, most punctuation, non-Latin scripts); guarantee every reader has a font with the characters." },
            { h: "Side effects", p: "Converted text is no longer ordinary letters. Search boxes may not find it, spell checkers flag it, and a screen reader may read each character by its Unicode name or skip it. Keep names, links and anything important in normal text." },
          ],
        },
      ],
    },
    {
      h2: "2. Which styles convert numbers?",
      blocks: [
        { p: "Unicode added styled letters for mathematics, and digits only in some of those alphabets. That is why a date or a price converts in some styles and stays plain in others." },
        {
          table: {
            head: ["Style group", "Letters", "Digits 0–9"],
            rows: [
              ["Bold Serif, Sans Bold, Outline, Monospace", "Upper and lower", "Yes"],
              ["Italic, Bold Italic, Sans Italic, Sans Bold Italic", "Upper and lower", "No, stay plain"],
              ["Cursive Script, Cursive Bold, Old English, Old English Bold", "Upper and lower", "No, stay plain"],
              ["Bubble, Big (Full Width)", "Upper and lower", "Yes"],
              ["Bubble Filled, Squared", "Capitals only", "Bubble Filled yes, Squared no"],
              ["Small Caps, Tiny", "Small forms only", "Tiny yes, Small Caps no"],
              ["Strikethrough, Underline", "Anything", "Yes (a mark is added)"],
            ],
          },
        },
      ],
    },
    {
      h2: "Converted alphabets and digits to copy",
      blocks: [
        { p: "Four of the most-used converted alphabets, one character per cell. Tap a cell to copy it." },
        { chart: { styles: ["u-bold-serif", "u-script", "u-fraktur", "u-double-struck"], sets: ["upper", "lower", "digits"] } },
      ],
    },
  ],
  built:
    "Most styles map letters to the Mathematical Alphanumeric Symbols block (U+1D400–U+1D7FF), with gaps filled from Letterlike Symbols, such as ℎ (U+210E, the Planck constant) for italic h and ℬ for script B. Bubble, Squared and Big use Enclosed Alphanumerics, the Enclosed Alphanumeric Supplement and Fullwidth Forms.",
  related: {
    heading: "Other converters and generators",
    hrefs: ["/", "/font-generator/fancy-letters", "/font-generator/italic", "/font-generator/fun", "/different-fonts", "/font-generator/strikethrough"],
  },
  faq: [
    { q: "What is a font converter?", a: "Here, it is a tool that converts typed text into styled Unicode characters you can copy and paste. It does not convert font files." },
    { q: "Can I convert a TTF font to OTF here?", a: "No. This page only converts text into characters. Converting font files needs font-editing software." },
    { q: "How do I convert text to bold without a bold button?", a: "Type it in the box and copy Bold Serif or Sans Bold. The letters themselves are bold characters." },
    { q: "Why didn't my numbers convert?", a: "Unicode has no italic, script or Fraktur digits, so those styles leave numbers plain. Use Bold Serif, Outline or Monospace for numbers." },
    { q: "Why are accented letters like é not converted?", a: "The styled alphabets only cover basic A–Z, so letters with accents stay as they are." },
    { q: "Can I convert styled text back to normal?", a: "Retype it, or paste it into a tool that normalizes Unicode (NFKC), which maps most styled letters back to plain ones." },
    { q: "Is converted text a real font?", a: "No. It is a sequence of Unicode characters. The reader's own device fonts draw them." },
    { q: "Is the font converter free?", a: "Yes, with no sign-up and no limit on how often you convert." },
  ],
};

export default page;
