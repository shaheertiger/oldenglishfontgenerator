import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL, which ranked in Bing before 00a2b7f.
// The retired /old-english-font-instagram page now 301s here. Its bio
// templates are merged below; every platform claim (field rules, character
// limits) was removed because we have not tested them.
const page: PageContent = {
  slug: "font-generator/old-english-ig",
  file: "font-generator-old-english-ig",
  title: "Instagram Old English Font: 12 Bio and Name Styles",
  description:
    "Instagram Old English font: 12 blackletter styles plus bio and name layouts to copy. Type your line, tap Copy, paste it. Free, no sign-up.",
  h1: "Instagram Old English Font",
  crumb: "Old English for IG",
  intro:
    "An Instagram Old English font is blackletter text you paste into a profile instead of choosing from a font menu, and this page gives you 12 styles plus ready-made bio and name layouts. Anyone searching for an old english font for IG or ig old english text usually wants a striking profile rather than a page of gothic writing, so the ideas below lean on mixing a little blackletter with a lot of plain words. Every result is plain Unicode text, so you can paste it anywhere you can type; whether a character shows depends on the fonts on the reader's device.",
  tool: {
    styles: [
      "fraktur", "bold-fraktur", "fraktur-plain-lower", "illuminated", "oe-cursive", "deco-stars",
      "deco-heart", "frame-chevron", "gothic-framed", "word-dots", "deco-rose", "monogram-ampersand",
    ],
    sample: "Stay wild, stay gold",
    placeholder: "Write your name or a bio line…",
    presets: ["Stay wild, stay gold", "Tattoo artist • Bookings open", "Est. 2001 | Chicago", "Dark academia enthusiast", "Sofia & Mateo"],
  },
  stylesHeading: "Profile styles",
  howTo: {
    heading: "How to style a profile in Old English",
    steps: [
      ["Write the plain version first", "Decide what your name line and bio need to say before you style anything."],
      ["Style one part", "Convert just your name, a first line or a single word. Copy that style and leave the rest plain."],
      ["Preview as a visitor", "Paste it, save, then look at your profile from another account or device to see how it reads."],
    ],
  },
  sections: [
    {
      h2: "1. Old English bio ideas you can copy",
      blocks: [
        { p: "Each layout below keeps something in ordinary letters. Visitors take a second or two to scan a profile, and readable words still do most of the work; the blackletter is there to set the mood." },
        {
          ul: [
            "𝔑𝔞𝔪𝔢 • what you do • where you are",
            "𝕺𝖜𝖓𝖊𝖗 of Your Shop ✦ bookings via link",
            "« a line you live by » then a plain contact line",
            "𝔈𝔰𝔱. 1998 | city | one hobby",
            "✧･ﾟ 𝔇𝔞𝔯𝔨 𝔞𝔠𝔞𝔡𝔢𝔪𝔦𝔞 ﾟ･✧ books, tea, candles",
          ],
        },
        { p: "To use one, type your own words into the generator, copy the matching style (Fraktur, Bold Fraktur, Guillemet Frame or Starlit Gothic) and add the plain parts yourself." },
      ],
    },
    {
      h2: "2. Which layouts suit a name?",
      blocks: [
        {
          table: {
            head: ["Layout", "Example", "Why it works visually"],
            glyphCols: [1],
            rows: [
              ["Gothic capital, plain rest", "𝔐aria 𝔏opez", "Most readable; the capital gives a hint of blackletter"],
              ["Illuminated initials", "𝕸𝔞𝔯𝔦𝔞 𝕷𝔬𝔭𝔢𝔷", "A bold first letter per word, like a manuscript"],
              ["Old English cursive", "𝔐𝒶𝓇𝒾𝒶", "Softer and more romantic"],
              ["Couple monogram", "𝔖 & 𝔐", "Short initials for a shared or wedding account"],
            ],
          },
        },
        { p: "Screen readers may announce styled letters as mathematical symbols or skip them, so the plain-letter layouts are kinder to visitors who listen rather than look. Keeping your real name in ordinary letters somewhere also makes it easier for people who know you to recognize the profile." },
      ],
    },
    {
      h2: "3. Old English letters for your profile",
      blocks: [
        { p: "Every capital and small letter in Fraktur and in the Old English cursive mix, for building a name one letter at a time. Tap a cell to copy it." },
        { chart: { styles: ["fraktur", "oe-cursive"], sets: ["upper", "lower"] } },
        { p: "Each styled letter takes up more storage than a plain one: most Fraktur characters are stored as two text units instead of one. If a box you are pasting into has a length limit, styled text reaches it sooner, so style only the part that matters." },
      ],
    },
  ],
  built:
    "Profile styles use Mathematical Fraktur (U+1D504–U+1D537), Bold Fraktur and Mathematical Script. Letters outside the Basic Multilingual Plane, which includes all of these except the five Letterlike capitals, are stored as two UTF-16 code units each.",
  related: {
    heading: "More Old English for profiles",
    hrefs: ["/font-generator/instagram", "/old-english-name-generator", "/font-generator/old-cursive", "/font-generator/old-english-letters", "/coquette"],
  },
  faq: [
    { q: "How do I get an Old English font on Instagram?", a: "You paste styled characters rather than changing a font. Type your text here, press Copy on a style and paste it where you edit your profile." },
    { q: "What does IG Old English mean?", a: "It is shorthand for blackletter-style text used on an Instagram profile, usually in a name or bio." },
    { q: "Should I style my whole bio?", a: "Usually not. A fully styled bio is slow to read; one styled name or first line with plain text underneath tends to look cleaner." },
    { q: "Why does my bio look different on a friend's phone?", a: "Every device draws these characters with its own fonts, so shapes and spacing vary a little between phones." },
    { q: "Why does styled text use up length faster?", a: "Most Fraktur letters are stored as two text units, so a box that counts units fills up roughly twice as fast with styled letters." },
    { q: "Can I use Old English for just my initials?", a: "Yes. Type your name and copy the Couple Monogram or Illuminated Initials style, or tap single letters in the chart." },
    { q: "Are these the same letters as an Old English font in an editing app?", a: "No. Editing apps draw text with an installed font and export a picture; this page gives you characters you can paste as text." },
  ],
};

export default page;
