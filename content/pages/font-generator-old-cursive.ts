import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL, which ranked in Bing before 00a2b7f.
// The retired /old-english-cursive page now 301s here; its bastarda notes and
// hybrid-style comparison are merged below.
const page: PageContent = {
  slug: "font-generator/old-cursive",
  file: "font-generator-old-cursive",
  title: "Old Cursive Font Generator: 13 Vintage Script Styles",
  description:
    "Old cursive font generator: 13 vintage script and Old English cursive styles. Type a name, tap Copy, paste it as text. Free, no sign-up.",
  h1: "Old Cursive Font Generator",
  crumb: "Old Cursive",
  intro:
    "An old cursive font generator turns ordinary typing into old-fashioned script, and this one gives you 13 styles to copy, from copperplate-like pen lettering to Old English cursive with a blackletter capital at the start of each word. Searches for an old cursive font usually mean one of two looks: the looping penmanship of 18th- and 19th-century letters, or old english cursive, a blend of gothic capitals and flowing small letters. Both are below, and both paste as plain Unicode text rather than a font.",
  tool: {
    styles: [
      "oe-cursive", "bold-cursive", "fraktur-plain-lower", "u-medieval-script", "u-medieval-bold-script", "script-spaced",
      "italic-serif", "bold-italic-serif", "u-cursive-underline", "roman-initial-italic", "deco-fleuron", "bold-script", "script",
    ],
    sample: "Isabella Grace",
    placeholder: "Type a name or a short line…",
    presets: ["Isabella Grace", "Yours Faithfully", "Forever Yours", "Dear Diary", "Mi Amor"],
  },
  stylesHeading: "Old cursive styles",
  howTo: {
    heading: "How to get an old-fashioned cursive look",
    steps: [
      ["Use capitals", "Type names in title case. The Old English cursive hybrids only show their gothic capital where your text has a capital letter."],
      ["Choose a period", "Medieval Script and Fine Line Spaced Script lean toward copperplate penmanship; the two Old English Cursive styles lean toward blackletter."],
      ["Copy and read it small", "Thin script strokes fade at small sizes, so paste a draft and look at it at the size people will actually see."],
    ],
  },
  sections: [
    {
      h2: "1. How do I put text into old style cursive?",
      blocks: [
        { p: "Type in the box and pick a row. The styles split into two families, and the right one depends on whether you want a pen-and-ink letter or a gothic manuscript feel. This table compares the hybrids that mix both:" },
        {
          table: {
            head: ["Style", "Capital", "Small letters", "Feels like"],
            glyphCols: [1, 2],
            rows: [
              ["Old English Cursive", "𝔐", "𝒶𝓇𝒾𝒶", "Delicate, wedding-card"],
              ["Bold Old English Cursive", "𝕸", "𝓪𝓻𝓲𝓪", "Confident, shop sign"],
              ["Fraktur Capitals, Plain Lowercase", "𝔐", "aria", "Subtle and easiest to read"],
              ["Medieval Script", "ℳ", "𝒶𝓇𝒾𝒶", "Copperplate letter, no blackletter at all"],
            ],
          },
        },
        { p: "If you only need modern, everyday script, the [handwriting font generator](/font-generator/handwriting) is simpler. For signed names, see the [signature font generator](/font-generator/signature)." },
      ],
    },
    {
      h2: "2. What is Old English cursive?",
      blocks: [
        { p: "Medieval scribes did not write everything in the stiff, upright book hand people now call Old English. For letters, accounts and legal records they used quicker joined hands, a family historians call cursiva, and a hybrid called bastarda that kept blackletter's pointed look while letting the pen lean and connect. Bastarda was later cast as printing type too." },
        { p: "The Old English Cursive styles here are not a faithful revival of those hands. They borrow the same idea: a formal, dense capital followed by a looser body. The eye lands on the dark first letter and then reads the rest without effort, which is why the pairing turns up so often in engraving, name tattoos and stationery." },
      ],
    },
    {
      h2: "3. Old cursive alphabet to copy",
      blocks: [
        { p: "Every capital and small letter in the light and bold Old English cursive styles. Capitals are Fraktur; the small letters are Unicode script. Tap a cell to copy that letter." },
        { chart: { styles: ["oe-cursive", "bold-cursive"], sets: ["upper", "lower"] } },
        { p: "Script e, g and o (ℯ ℊ ℴ) were encoded earlier than the rest of the script alphabet, so on some devices they come from a different font and look a touch out of line." },
      ],
    },
  ],
  built:
    "Script letters come from Mathematical Script (U+1D49C–U+1D4CF) and Mathematical Bold Script (U+1D4D0–U+1D503), with older Letterlike Symbols such as ℬ ℰ ℱ ℋ ℐ ℒ ℳ ℛ ℯ ℊ ℴ filling the gaps. The Old English cursive hybrids take their capitals from Mathematical Fraktur or Bold Fraktur instead.",
  related: {
    heading: "More script and blackletter",
    hrefs: ["/font-generator/handwriting", "/font-generator/calligraphy", "/font-generator/italianate", "/font-generator/old-english-letters", "/chicano-font-generator", "/font-generator/signature"],
  },
  faq: [
    { q: "What is the old cursive font called?", a: "There is no single font by that name. People usually mean copperplate or Spencerian-style script, or a blackletter-and-script hybrid sold as Old English cursive." },
    { q: "Is there a true Old English cursive font?", a: "Historical cursive blackletter hands such as bastarda existed and there are real typefaces based on them. Unicode has no characters for them, so copy-paste versions pair Fraktur capitals with script letters." },
    { q: "Why does nothing look gothic when I type in lowercase?", a: "The hybrids style capitals differently from the rest. With no capitals in your text, every letter comes out as script, so start each word with a capital." },
    { q: "Which old cursive style is easiest to read?", a: "Fraktur Capitals, Plain Lowercase. Only the first letter of each word changes, so long names stay legible." },
    { q: "Will the letters join up like real handwriting?", a: "No. Each character is separate, so letters sit side by side rather than connecting. For truly joined lettering you need an installed script typeface or a hand-drawn piece." },
    { q: "What is the difference between old cursive and modern cursive?", a: "Modern script is clean and even. Old cursive leans harder, has more contrast between thick and thin strokes and often opens with an ornate capital." },
    { q: "Can I convert normal text to old cursive in one step?", a: "Yes. Paste or type the text and every style converts it at once; copy the row you like." },
  ],
};

export default page;
