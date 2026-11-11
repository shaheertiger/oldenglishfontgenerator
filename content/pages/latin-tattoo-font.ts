import type { PageContent } from "./types";

// Letter counts in the phrase table were computed (letters only, no spaces
// or commas), as was the inscription form (U→V, J→I, words joined by ·).
const page: PageContent = {
  slug: "latin-tattoo-font",
  title: "Latin Tattoo Fonts — 12 Phrases, Meanings & Letter Counts",
  description:
    "Latin tattoo fonts: preview memento mori, carpe diem and 10 more phrases in 12 lettering styles, with literal meanings and letter counts. Free.",
  h1: "Latin Tattoo Fonts",
  crumb: "Latin Tattoo Font",
  intro:
    "Latin tattoos come down to two choices: the phrase (12 favourites are listed below with their literal meanings) and the letters, usually heavy blackletter or Roman inscription capitals. Type your phrase to compare 12 styles at once, including one that spells it the way a stonecutter in ancient Rome would have, with V for U and dots between words.",
  tool: {
    styles: [
      "bold-fraktur", "roman-inscription", "fraktur", "script", "oe-cursive", "typewriter",
      "illuminated", "bold-serif", "interpunct", "vertical", "fraktur-small-caps", "deco-fleuron",
    ],
    sample: "Memento mori",
    placeholder: "Type a Latin phrase…",
    presets: ["Memento mori", "Carpe diem", "Amor fati", "Per aspera ad astra", "Veni, vidi, vici", "Dum spiro spero"],
  },
  stylesHeading: "Latin lettering styles",
  howTo: {
    heading: "How to choose lettering for a Latin tattoo",
    steps: [
      ["Check the Latin first", "Copy a phrase from the table or confirm yours with a teacher, a classicist or a good dictionary. Online translators often get Latin grammar wrong."],
      ["Decide on period", "Roman Inscription capitals feel ancient and monumental; blackletter feels medieval and churchly. Both are historically linked to Latin."],
      ["Count the letters", "Longer phrases need more room. Use the letter counts below to judge whether it fits a wrist, forearm or collarbone."],
    ],
  },
  sections: [
    {
      h2: "What do the most popular Latin tattoo phrases mean?",
      blocks: [
        {
          table: {
            head: ["Phrase", "Literal meaning", "Letters", "Words", "Inscription form"],
            rows: [
              ["Memento mori", "Remember that you will die", "11", "2", "MEMENTO·MORI"],
              ["Carpe diem", "Seize the day", "9", "2", "CARPE·DIEM"],
              ["Amor fati", "Love of fate", "8", "2", "AMOR·FATI"],
              ["Veni, vidi, vici", "I came, I saw, I conquered", "12", "3", "VENI·VIDI·VICI"],
              ["Per aspera ad astra", "Through hardships to the stars", "16", "4", "PER·ASPERA·AD·ASTRA"],
              ["Alis volat propriis", "She flies with her own wings", "17", "3", "ALIS·VOLAT·PROPRIIS"],
              ["Vincit qui patitur", "He who endures conquers", "16", "3", "VINCIT·QVI·PATITVR"],
              ["Fortes fortuna adiuvat", "Fortune favours the brave", "20", "3", "FORTES·FORTVNA·ADIVVAT"],
              ["Dum spiro spero", "While I breathe, I hope", "13", "3", "DVM·SPIRO·SPERO"],
              ["Omnia vincit amor", "Love conquers all", "15", "3", "OMNIA·VINCIT·AMOR"],
              ["Non ducor, duco", "I am not led, I lead", "12", "3", "NON·DVCOR·DVCO"],
              ["Ad astra", "To the stars", "7", "2", "AD·ASTRA"],
            ],
          },
        },
        { p: "Letters means letters only, without spaces or commas. Short phrases of under ten letters, such as Amor fati and Ad astra, are the usual choice for small placements like the inner wrist." },
      ],
    },
    {
      h2: "Why does Roman lettering write U as V?",
      blocks: [
        { p: "Classical Latin had no separate letters for U and J. Carved inscriptions used V for both the vowel and the consonant, and I where we would now write J. That's why monuments read SENATVS and IVLIVS. The Roman Inscription style follows the same rule, turns digits into Roman numerals, and separates words with a raised dot (an interpunct), as many Roman stonecutters did." },
        { p: "Whether you want that spelling is a style choice. Fortes fortuna adiuvat becomes FORTES·FORTVNA·ADIVVAT, which looks authentic but is harder for modern readers. Blackletter and script styles keep normal spelling." },
      ],
    },
    {
      h2: "Blackletter or Roman capitals: which suits Latin better?",
      blocks: [
        {
          cards: [
            { h: "Blackletter", p: "Medieval monks and early printers wrote Latin in blackletter for centuries, so Bold Fraktur reads as scholarly or religious. It needs size: aim for letters your artist is happy to make larger." },
            { h: "Roman capitals", p: "Clean, wide and monumental, like a column or a coin. Easier to read small and ages well, but plainer." },
            { h: "Script", p: "A modern, personal feel. Works for flowing phrases like Omnia vincit amor; less so for a stark Memento mori." },
          ],
        },
        { p: "For a phrase with religious meaning, the [Bible verse font](/bible-verse-font) page has more on blackletter in scripture. To see the letter shapes as a real font for a stencil reference, try [Texturina or UnifrakturMaguntia](/fonts/calligraphy) in the image export." },
      ],
    },
  ],
  built:
    "The Roman Inscription row uses Mathematical Bold capitals (U+1D400–U+1D419) with U→V and J→I swaps, digits converted to Roman numerals and · (U+00B7) between words. The blackletter rows use Mathematical Fraktur and Bold Fraktur; the script row uses Mathematical Script.",
  related: {
    heading: "More tattoo lettering tools",
    hrefs: ["/tattoo-font-generator", "/old-english-tattoo-font", "/bible-verse-font", "/old-english-numbers", "/medieval-font-generator", "/old-english-text-to-image"],
  },
  faq: [
    { q: "What font is best for a Latin tattoo?", a: "Bold blackletter and Roman inscription capitals are the two classic choices, because both were used to write Latin historically. Blackletter feels medieval; Roman capitals feel ancient." },
    { q: "What does memento mori mean?", a: "Remember that you will die. It's a reminder to live deliberately, not a morbid wish." },
    { q: "Is it amor fati or amor fatum?", a: "Amor fati is correct: fati is the genitive, so it means love of fate." },
    { q: "Why do some Latin tattoos use V instead of U?", a: "Classical Latin inscriptions had one letter, V, for both sounds. Writing PER·ASPERA·AD·ASTRA with dots and V is a deliberate ancient-Roman look." },
    { q: "How do I write a year in Latin style?", a: "Type it as digits and use the Roman Inscription style, which converts 2024 to MMXXIV automatically." },
    { q: "Can I trust online Latin translators?", a: "Not for a tattoo. Latin word endings change with grammar, and machine translation often picks the wrong form. Use an established phrase or ask someone who reads Latin." },
    { q: "How long can a Latin phrase be on a wrist?", a: "Ask your artist, but most wrist pieces stay under about 12 letters so each one can be large enough to read as the ink settles." },
  ],
};

export default page;
