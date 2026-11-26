import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL. Kept distinct from
// viking-font-generator: this page is the letter-to-rune key with rune names,
// that one is about Norse-themed lettering. Mappings match ELDER in lib/fonts.ts.
const page: PageContent = {
  slug: "runic-translator",
  title: "Runic Translator – English to Runes, Free Copy and Paste",
  description:
    "Runic translator: English letters to 24 Elder Futhark runes, with Younger Futhark and Anglo-Saxon options. Type, tap Copy, paste. Free A–Z rune key.",
  h1: "Runic Translator",
  crumb: "Runic Translator",
  intro:
    "A runic translator swaps each letter of your English text for the rune that stood for the same sound, so Freya becomes ᚠᚱᛖᛃᚨ in Elder Futhark. Treat it as an English to runes converter for names, mottos and short inscriptions: it changes the alphabet, not the language, and it handles the pairs th and ng as single runes the way the old rune carvers did. Below the tool, the rune key lists every letter with the rune's traditional name, so you can check the output or carve it by hand. Results come in five rune styles plus Ogham and Gothic for comparison.",
  tool: {
    styles: ["runes-elder", "runes-elder-spaced", "runes-framed", "runes-younger", "runes-futhorc", "ogham", "gothic-wulfila"],
    sample: "Freya",
    placeholder: "Type a name or short phrase…",
    presets: ["Freya", "Sigrid", "Courage and honor", "Your Name"],
  },
  stylesHeading: "English to Runes",
  howTo: {
    heading: "How to translate English into runes",
    steps: [
      ["Rewrite it by sound", "Drop silent letters and spell the way you speak: Kristofer instead of Christopher gives ᚲᚱᛁᛊᛏᛟᚠᛖᚱ instead of a rune for every silent h."],
      ["Pick dots or spaces", "The first result joins words with the runic divider ᛫; the second keeps normal spaces; the third adds a runic cross ᛭ at each end."],
      ["Copy and check", "Copy the runes, then read them back with the key below to make sure every letter landed where you expected."],
    ],
  },
  sections: [
    {
      h2: "Rune key A–Z with rune names",
      blocks: [
        { p: "This is the Elder Futhark key the translator uses. Tap a rune to copy it. The names are scholarly reconstructions in Proto-Germanic, worked out mainly from later Old English, Norwegian and Icelandic rune poems, and the meanings of a few are still debated." },
        {
          table: {
            head: ["Letter", "Rune", "Rune name", "Name usually means"],
            glyphCols: [1],
            rows: [
              ["A", "ᚨ", "ansuz", "a god"],
              ["B", "ᛒ", "berkanan", "birch"],
              ["C", "ᚲ", "kaunan (kenaz)", "uncertain; the Old English name cēn means torch"],
              ["D", "ᛞ", "dagaz", "day"],
              ["E", "ᛖ", "ehwaz", "horse"],
              ["F", "ᚠ", "fehu", "cattle, wealth"],
              ["G", "ᚷ", "gebō", "gift"],
              ["H", "ᚺ", "hagalaz", "hail"],
              ["I", "ᛁ", "īsaz", "ice"],
              ["J", "ᛃ", "jēra", "year, harvest"],
              ["K", "ᚲ", "kaunan (kenaz)", "same rune as C"],
              ["L", "ᛚ", "laguz", "water, lake"],
              ["M", "ᛗ", "mannaz", "man, person"],
              ["N", "ᚾ", "naudiz", "need"],
              ["O", "ᛟ", "ōþalan", "inherited land"],
              ["P", "ᛈ", "perþ", "unknown"],
              ["Q", "ᚲ", "kaunan (kenaz)", "no Q rune; uses the k sound"],
              ["R", "ᚱ", "raidō", "ride, journey"],
              ["S", "ᛊ", "sōwilō", "sun"],
              ["T", "ᛏ", "tīwaz", "the god Tyr"],
              ["U", "ᚢ", "ūruz", "aurochs (wild ox)"],
              ["V", "ᚹ", "wunjō", "joy; no separate V rune"],
              ["W", "ᚹ", "wunjō", "joy"],
              ["X", "ᚲᛊ", "kaunan + sōwilō", "k + s, as X sounds"],
              ["Y", "ᛃ", "jēra", "same rune as J"],
              ["Z", "ᛉ", "algiz", "uncertain; often glossed as elk"],
              ["TH", "ᚦ", "þurisaz", "giant"],
              ["NG", "ᛜ", "ingwaz", "the god Ing"],
            ],
          },
        },
        { p: "Only one rune of the 24 is never produced: ᛇ (eihwaz, yew), whose sound has no clear English letter. For the Unicode names and code points of every rune, see the [Runic code chart](https://www.unicode.org/charts/PDF/U16A0.pdf)." },
      ],
    },
    {
      h2: "1. Can a runic translator turn English into Old Norse?",
      blocks: [
        { p: "No. This tool, like nearly every English to runes converter, transliterates: it writes English words with rune letters. Courage and honor comes out as ᚲᛟᚢᚱᚨᚷᛖ᛫ᚨᚾᛞ᛫ᚺᛟᚾᛟᚱ, which is still English, spelled in runes. A Viking would have used Old Norse words and the 16-rune Younger Futhark, and a runologist would expect both." },
        { p: "If you want a phrase in Old Norse, find the wording first from a dictionary or a person who reads the language, then type that wording here and choose the Younger Futhark result. That two-step order matters: translation fixes the words, transliteration only changes the letters." },
      ],
    },
    {
      h2: "2. How do I write my name in runes correctly?",
      blocks: [
        {
          table: {
            head: ["Name as typed", "Elder Futhark", "Why it looks that way"],
            glyphCols: [1],
            rows: [
              ["Thor", "ᚦᛟᚱ", "th is one rune, ᚦ"],
              ["Sigrid", "ᛊᛁᚷᚱᛁᛞ", "one rune per sound, no changes needed"],
              ["Bjorn", "ᛒᛃᛟᚱᚾ", "j is the jēra rune ᛃ, read like English y"],
              ["Christopher", "ᚲᚺᚱᛁᛊᛏᛟᛈᚺᛖᚱ", "silent h and ph spelled out letter by letter"],
              ["Kristofer", "ᚲᚱᛁᛊᛏᛟᚠᛖᚱ", "same name respelled by sound: shorter and closer to how runes worked"],
              ["Wolf", "ᚹᛟᛚᚠ", "w is wunjō, ᚹ"],
            ],
          },
        },
        { p: "The Christopher and Kristofer rows show the main rule: runes record sounds, so English spellings full of silent letters come out long and odd. Double letters are kept as typed, though carvers often wrote a doubled sound once. If you need runes for something permanent, settle on one rune row and have the result checked by someone who reads them." },
      ],
    },
    {
      h2: "3. What do the ᛫ and ᛭ marks between runes mean?",
      blocks: [
        { p: "Rune carvers had no space bar. Many inscriptions separate words with one, two or several dots, and some run the words together. The translator uses ᛫ (runic single punctuation) between words in its standard output; the framed version adds ᛭, the runic cross punctuation mark, at the start and end, which suits a name on a sign or a sign-off. If you would rather have ordinary gaps, the spaced result keeps them. Runes that look Viking but need a whole set of themed lettering are on the [Viking font generator](/viking-font-generator)." },
      ],
    },
  ],
  built:
    "Each letter maps to one rune from the Unicode Runic block (U+16A0–U+16FF); th and ng are matched first and become ᚦ and ᛜ, x becomes two runes, and accents are stripped. Words are joined with ᛫ (U+16EB) or a space; the frame uses ᛭ (U+16ED). Ogham and Gothic results use the Ogham (U+1680–U+169F) and Gothic (U+10330–U+1034F) blocks.",
  related: {
    heading: "More ancient alphabets",
    hrefs: ["/viking-font-generator", "/ancient-font-generator", "/hieroglyphics-translator", "/cuneiform-translator", "/medieval-translator"],
  },
  faq: [
    { q: "How do I translate English to runes?", a: "Type your text in the box and copy the Elder Futhark result. For a closer match to how runes were used, respell the words by sound first." },
    { q: "Which runic alphabet does this translator use?", a: "Mainly the 24-rune Elder Futhark. The tool also gives the Viking Age Younger Futhark and the Anglo-Saxon futhorc for the same text." },
    { q: "Is there a rune for every English letter?", a: "Not one each. C, K and Q share ᚲ, V and W share ᚹ, J and Y share ᛃ, and X is written as two runes, ᚲᛊ." },
    { q: "Can runes translate back to English?", a: "Yes for text made with this key: read each rune with the A–Z table. Real inscriptions are in old Germanic languages, so reading them needs those languages, not just the key." },
    { q: "What does the runic translator do with numbers?", a: "It leaves them as ordinary digits. Runic inscriptions had no standard set of number signs, so there is nothing reliable to swap them for." },
    { q: "Are the rune names on this page the original names?", a: "They are reconstructions. No early source lists all the Elder Futhark names, so scholars rebuild them from later rune poems and related languages." },
    { q: "How do I copy and paste runes?", a: "Press Copy on a result, or tap one rune in the table. It is plain Unicode text, so you can paste it anywhere you can type; whether runes show depends on the fonts on the reader's device." },
    { q: "Why do my runes show as squares?", a: "The device has no font covering the Runic block. The text is intact and appears normally where such a font is installed, for example Noto Sans Runic." },
  ],
};

export default page;
