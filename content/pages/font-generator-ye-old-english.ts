import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL, which ranked in Bing before 00a2b7f.
// Angle: "Ye Olde" spelling (thorn, long s, interpunct), not the plain
// blackletter generator at /font-generator/old-english.
const page: PageContent = {
  slug: "font-generator/ye-old-english",
  file: "font-generator-ye-old-english",
  title: "Ye Old English Text Generator: 11 Olde Styles, Free",
  description:
    "Ye Old English text generator: 11 olde styles with thorn þ, long s ſ and scribe's dots, for tavern signs and shoppe names. Tap Copy to paste. Free.",
  h1: "Ye Old English Text Generator",
  crumb: "Ye Olde English",
  intro:
    "A ye old English text generator makes words look like a tavern sign or a mock-antique shop front, and this one gives you 11 styles that go further than blackletter letters: real thorn (þ) for \"th\", the long s (ſ), raised dots between letters and Roman-capital inscriptions. Whether you call it ye olde English, olde English font or old-timey text, the trick is the same, and the note below explains where the famous \"ye\" came from. Results are plain Unicode text, so you can paste them anywhere you can type; whether a character shows depends on the fonts on the reader's device.",
  tool: {
    styles: [
      "thorn", "long-s", "interpunct", "u-ye-olde", "medieval-speech-fraktur", "medieval-speech-scroll",
      "deco-candle", "roman-inscription", "fraktur", "u-old-english-spaced", "deco-crown",
    ],
    sample: "Ye Olde Shoppe of the Three Crowns",
    placeholder: "Name your tavern, shoppe or quest…",
    presets: ["Ye Olde Shoppe of the Three Crowns", "The Thirsty Knight", "Ye Olde Sweet Shoppe", "Hear ye, hear ye", "Est. 1648"],
  },
  stylesHeading: "Ye olde styles",
  howTo: {
    heading: "How to write in ye olde English",
    steps: [
      ["Write it the modern way", "Type \"the\", not \"ye\". The Thorn style swaps every \"th\" for þ, which is what the old \"ye\" really was."],
      ["Add period spelling if you like", "Olde, shoppe and towne are later mock-archaic spellings. They are fun on a sign but were not how medieval writers spelled those words."],
      ["Pick a finish", "Long S, Interpunct and Scroll styles add the details that make a sign look hand-lettered. Copy the one you like."],
    ],
  },
  sections: [
    {
      h2: "1. Why is \"the\" written as \"ye\" in old English signs?",
      blocks: [
        { p: "The \"ye\" in \"Ye Olde Shoppe\" was never meant to be said with a y sound. It is \"the\". Old and Middle English had a letter called thorn (þ) for the th sound. In some late medieval handwriting thorn came to look much like a y, and early printers, whose type was cast for continental alphabets without a thorn, often used a y in its place. Readers of the time still said \"the\"." },
        { p: "Centuries later, the spelling was revived as a joke-antique flourish on inns, shops and fairs, and the extra e on olde and shoppe was added for the same effect. So \"Ye Olde Shoppe\" is really \"The Old Shop\" in costume. Try the Thorn style with \"The Old Shop\" and you will get þe, the form a scribe would have recognized." },
      ],
    },
    {
      h2: "2. Old letters you can copy",
      blocks: [
        { p: "These are real letters and marks from older English and European writing. Tap a glyph to select it, or let the styles above insert them for you." },
        {
          table: {
            head: ["Character", "Name", "Used for"],
            glyphCols: [0],
            rows: [
              ["þ Þ", "Thorn", "The th sound; the source of the y in \"ye\"."],
              ["ð Ð", "Eth", "Also th; used alongside thorn in Old English."],
              ["ſ", "Long s", "An s at the start or middle of a word, common in print until about 1800."],
              ["æ Æ", "Ash", "A vowel between a and e, still used in Danish, Norwegian and Icelandic."],
              ["ƿ Ƿ", "Wynn", "The w sound in Old English, later replaced by w."],
              ["ȝ Ȝ", "Yogh", "A throaty gh or y sound in Middle English."],
              ["·", "Interpunct", "A raised dot that separated words in some inscriptions and manuscripts."],
            ],
          },
        },
        { p: "If you want the language itself rather than the look, [how to write Old English](/how-to-write-old-english) explains these letters in context, and the [medieval translator](/medieval-translator) rewrites modern sentences with thee, thou and hath." },
      ],
    },
    {
      h2: "3. Ye olde alphabet chart",
      blocks: [
        { p: "Light Fraktur letters, then the spaced and underlined Ye Olde version used on painted signboards. Tap any cell to copy one letter." },
        { chart: { styles: ["fraktur", "u-ye-olde"], sets: ["upper", "lower"] } },
      ],
    },
  ],
  built:
    "Letters are Mathematical Fraktur (U+1D504–U+1D537). Thorn þ (U+00FE) and Æ/æ come from Latin-1 Supplement, the long s ſ is U+017F, the interpunct is U+00B7, and the Ye Olde style adds the combining low line U+0332 under each spaced letter. The Thorn style only replaces th and ae; it does not change spelling or grammar.",
  related: {
    heading: "More old-time lettering",
    hrefs: ["/medieval-translator", "/how-to-write-old-english", "/font-generator/medieval", "/pirate-translator", "/font-generator/blackletter", "/illuminated-letters"],
  },
  faq: [
    { q: "Is \"ye\" in \"Ye Olde\" pronounced \"the\"?", a: "Yes. The y stands in for the old letter thorn, which was pronounced th, so \"ye\" here is simply \"the\"." },
    { q: "Is \"ye olde\" real Old English?", a: "No. It is a later mock-antique spelling. Real Old English looks very different and needs translation for modern readers." },
    { q: "How do I type the thorn letter þ?", a: "Copy it from the table above, or type \"th\" in the generator and use the Thorn style, which converts it for you." },
    { q: "What is the long s that looks like an f?", a: "It is ſ, an older form of s used at the start or in the middle of words. It has no crossbar on the right side, which is how you tell it from f." },
    { q: "Is \"ye\" meaning \"you\" the same word?", a: "No. \"Ye\" as in \"hear ye\" is a real old plural of you, spelled with a true y. The \"ye\" in shop signs is \"the\" written with a stand-in letter." },
    { q: "Can I use this for a fantasy tavern or game sign?", a: "Yes, that is what it is best at. Type the name, pick the Scroll or Thorn style and copy it." },
    { q: "Why do some old letters show as boxes?", a: "Thorn, eth and long s are widely supported, but wynn and yogh are rarer. If the reader's device lacks a font that includes them, a box appears instead." },
  ],
};

export default page;
