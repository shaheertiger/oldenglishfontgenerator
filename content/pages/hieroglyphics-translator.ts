import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL: Bing ranked it for "hieroglyphics
// translator" and related queries until the Nov 1 removal.
const page: PageContent = {
  slug: "hieroglyphics-translator",
  title: "Hieroglyphics Translator – Free English to Egyptian Signs",
  description:
    "Hieroglyphics translator: each English letter becomes one of 23 Egyptian sound signs. Type a name, tap Copy, paste it anywhere. Free, A–Z key included.",
  h1: "Hieroglyphics Translator",
  crumb: "Hieroglyphics Translator",
  intro:
    "This hieroglyphics translator replaces each English letter with the Egyptian hieroglyph that stood for a similar sound, giving you real Unicode signs to copy and paste. It works like an Egyptian hieroglyphics translator for names and short phrases, not for full sentences: going from English to Egyptian hieroglyphs this way spells your words sound by sound with the scribes' one-consonant signs, the same small set Egyptologists call the uniliteral alphabet. Type below, then pick plain signs, a royal cartouche, or dotted word breaks.",
  tool: {
    styles: ["hieroglyphs", "hieroglyphs-cartouche", "hieroglyphs-dotted", "cuneiform", "cuneiform-tablet", "phoenician", "gothic-wulfila"],
    sample: "Cleopatra",
    placeholder: "Type a name or a few words in English…",
    presets: ["Cleopatra", "Ptolemy", "Nefertiti", "Your Name"],
  },
  stylesHeading: "English to Egyptian Hieroglyphs",
  howTo: {
    heading: "How to turn a name into hieroglyphs",
    steps: [
      ["Spell it by sound", "Type the name as it is pronounced. Egyptian signs stood for sounds, so Kris and Chris give different, equally valid results."],
      ["Choose a layout", "Plain signs keep word gaps, the cartouche wraps everything in an oval like a pharaoh's name, and the dotted version puts a middle dot between words."],
      ["Copy the signs", "Press Copy and paste the result. The key below shows which sign each letter became if you want to check it or draw it by hand."],
    ],
  },
  sections: [
    {
      h2: "Hieroglyph alphabet A–Z: the sign key this translator uses",
      blocks: [
        { p: "Every letter maps to one fixed sign. Tap a sign to copy it on its own. The Gardiner number is the catalogue code Egyptologists use for each sign; the sound column gives the Egyptian value it really had, which is why some English letters share a sign (C and K are both the basket, U, O and W are all the quail chick)." },
        {
          table: {
            head: ["Letter", "Sign", "What it depicts", "Gardiner no.", "Egyptian sound"],
            glyphCols: [1],
            rows: [
              ["A", "𓄿", "Egyptian vulture", "G1", "ꜣ (a glottal sound, often read as a)"],
              ["B", "𓃀", "Foot and lower leg", "D58", "b"],
              ["C", "𓎡", "Basket with a handle", "V31", "k"],
              ["D", "𓂧", "Hand", "D46", "d"],
              ["E", "𓇋", "Flowering reed", "M17", "i (also used for e)"],
              ["F", "𓆑", "Horned viper", "I9", "f"],
              ["G", "𓎼", "Jar stand", "W11", "g"],
              ["H", "𓉔", "Reed shelter", "O4", "h"],
              ["I", "𓇋", "Flowering reed", "M17", "i"],
              ["J", "𓆓", "Cobra", "I10", "ḏ (dj)"],
              ["K", "𓎡", "Basket with a handle", "V31", "k"],
              ["L", "𓃭", "Recumbent lion", "E23", "rw; used for l in Greek-era names"],
              ["M", "𓅓", "Owl", "G17", "m"],
              ["N", "𓈖", "Ripple of water", "N35", "n"],
              ["O", "𓅱", "Quail chick", "G43", "w (also stands in for o and u)"],
              ["P", "𓊪", "Stool", "Q3", "p"],
              ["Q", "𓈎", "Hill slope", "N29", "q"],
              ["R", "𓂋", "Mouth", "D21", "r"],
              ["S", "𓋴", "Folded cloth", "S29", "s"],
              ["T", "𓏏", "Bread loaf", "X1", "t"],
              ["U", "𓅱", "Quail chick", "G43", "w (also u)"],
              ["V", "𓆑", "Horned viper", "I9", "f (closest sound to v)"],
              ["W", "𓅱", "Quail chick", "G43", "w"],
              ["X", "𓎡𓋴", "Basket + folded cloth", "V31 + S29", "k + s"],
              ["Y", "𓇌", "Two reeds", "M17A", "y"],
              ["Z", "𓊃", "Door bolt", "O34", "z"],
              ["SH", "𓈙", "Pool of water", "N37", "š (sh)"],
              ["CH", "𓍿", "Tethering rope", "V13", "ṯ (tj, close to ch)"],
              ["KH", "𓐍", "Placenta (some read it as a sieve)", "Aa1", "ḫ (kh, as in Scottish loch)"],
            ],
          },
        },
        { p: "The pairs sh, ch and kh are checked before single letters, so Shakira starts with the pool sign 𓈙 rather than folded cloth plus reed shelter. Unicode's own chart of these signs is the [Egyptian Hieroglyphs code chart](https://www.unicode.org/charts/PDF/U13000.pdf)." },
      ],
    },
    {
      h2: "1. How do I convert English letters to hieroglyphs?",
      blocks: [
        { p: "Type the word in the box at the top; the conversion runs as you type. Behind it is a lookup: lowercase the text, strip accents, check for sh, ch and kh, then swap each remaining letter for its sign from the key above. Digits and punctuation pass through unchanged, because Egyptian numerals were a separate system of strokes, heel bones and coils of rope that this key does not cover." },
        {
          table: {
            head: ["English", "Hieroglyphs", "Note"],
            glyphCols: [1],
            rows: [
              ["Ptolemy", "𓊪𓏏𓅱𓃭𓇋𓅓𓇌", "The lion for L matches how scribes spelled this Greek name"],
              ["Cleopatra", "𓎡𓃭𓇋𓅱𓊪𓄿𓏏𓂋𓄿", "A popular choice because her name survives in real cartouches"],
              ["Nefertiti", "𓈖𓇋𓆑𓇋𓂋𓏏𓇋𓏏𓇋", "Every vowel becomes the reed, so the word looks long"],
              ["Tutankhamun", "𓏏𓅱𓏏𓄿𓈖𓐍𓄿𓅓𓅱𓈖", "kh becomes the single placenta sign 𓐍"],
              ["Sarah", "𓋴𓄿𓂋𓄿𓉔", "A short name fits neatly inside a cartouche"],
              ["Michael", "𓅓𓇋𓍿𓄿𓇋𓃭", "ch becomes the tethering rope"],
            ],
          },
        },
      ],
    },
    {
      h2: "2. Can English to Egyptian hieroglyphics translation be exact?",
      blocks: [
        { p: "No tool can do it exactly, and it helps to know why before you use the output for anything permanent. Egyptian writing mixed three kinds of signs: sound signs for one, two or three consonants, word pictures, and silent determinatives that showed the category of a word (a seated man after a man's name, for example). Scribes rarely wrote vowels at all. So the real name of the goddess Isis, Aset, was written with a throne sign, not the four letters this page gives you." },
        { p: "What the translator gives you is a transliteration: English sounds spelled with the 20-odd one-consonant signs, plus y and the lion for l. That is the same trick Egyptian scribes used for foreign names in the Greek and Roman period, which is why Ptolemy and Cleopatra come out close to the ancient spellings. For any other word, treat the result as decoration, and ask an Egyptologist for a spelling that a specialist would recognize." },
      ],
    },
    {
      h2: "3. How do I write my name in a cartouche?",
      blocks: [
        { p: "A cartouche is the oval loop with a bar at one end that Egyptians drew around royal names. It marked the name as a king's or queen's, and it is the reason the Rosetta Stone could be cracked: the cartouches showed scholars where the name Ptolemy sat in the Egyptian text. Pick the cartouche result in the tool and your name is wrapped between 𓍹 and 𓍺, with the word gaps removed so the name reads as one unit." },
        { p: "Unicode draws the cartouche as two end pieces rather than a full oval, so the shape you see depends on the font. For a drawn oval around a vertical name, as on jewelry or a tattoo stencil, copy the signs and have them set inside a hand-drawn ring. The [cuneiform translator](/cuneiform-translator) does the same letter-for-sign job with Mesopotamian wedge signs if you want to compare two ancient scripts side by side." },
      ],
    },
  ],
  built:
    "Signs come from the Unicode Egyptian Hieroglyphs block (U+13000–U+1342F), added in Unicode 5.2; the cartouche ends are V11A and V11B (U+13379, U+1337A). Each letter or sh/ch/kh pair maps to one fixed uniliteral sign, so the output is a sound-based spelling, not a translation of meaning.",
  related: {
    heading: "More ancient scripts",
    hrefs: ["/cuneiform-translator", "/ancient-font-generator", "/runic-translator", "/symbols", "/illuminated-letters"],
  },
  faq: [
    { q: "Is this hieroglyphics translator accurate?", a: "It is accurate as a sound-for-sign key: each sign really did stand for the sound listed. It is not a translation of meaning, and Egyptian scribes would have added word signs and determinatives that no letter-by-letter tool can supply." },
    { q: "How do you write your name in Egyptian hieroglyphics?", a: "Spell the name as it sounds, type it into the box and copy the cartouche version. Drop silent letters first; Egyptian writing recorded consonants, not English spelling." },
    { q: "Can it translate hieroglyphics to English?", a: "Only for text made with this same key. Read the signs back with the A–Z table; for real ancient inscriptions you need an Egyptian dictionary and a sign list such as Gardiner's." },
    { q: "Why are there no hieroglyphs for vowels?", a: "Egyptian writing left most vowels out, much as Hebrew and Arabic often do. The vulture, reed and quail chick were consonant-like sounds that later scholars borrowed for a, i and u." },
    { q: "How do I copy and paste hieroglyphics?", a: "Press Copy on the result you want, or tap a single sign in the A–Z table. It is plain Unicode text, so you can paste it anywhere you can type; whether a sign shows depends on the fonts on the reader's device." },
    { q: "Why do I see boxes instead of hieroglyphs?", a: "The device reading the text has no font with Egyptian hieroglyphs. The characters are still there and will appear on a device that has such a font, such as Noto Sans Egyptian Hieroglyphs." },
    { q: "What is the hieroglyph for love?", a: "There is no love sign in this key. The Egyptian verb for love began with a hoe-shaped sign read mr, so spelling the English word letter by letter gives a different result from the ancient one." },
    { q: "Is there a hieroglyphics font generator for other ancient scripts?", a: "Yes. The tool above also shows cuneiform, Phoenician and the Gothic alphabet of Wulfila, and the [ancient font generator](/ancient-font-generator) has more." },
  ],
};

export default page;
