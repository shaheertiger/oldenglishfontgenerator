import type { PageContent } from "./types";

const page: PageContent = {
  slug: "ancient-font-generator",
  title: "Ancient Font Generator — Hieroglyphs, Runes & 8 More",
  description:
    "Ancient font generator: write any name in Egyptian hieroglyphs, Phoenician, Ogham, runes or the Gothic alphabet, then copy and paste it. Free, no download.",
  h1: "Ancient Font Generator",
  crumb: "Ancient Font Generator",
  intro:
    "Type a name and see it in 10 ancient styles at once: Egyptian hieroglyphs, Phoenician (the alphabet ours descends from), Irish Ogham, two rune rows, the 4th-century Gothic alphabet, Roman capitals and medieval scribal letters. These are real Unicode characters, not pictures, so you can copy them into a bio, a game, a school project or a tattoo sketch. The tables below show exactly which sign each letter becomes.",
  tool: {
    styles: [
      "hieroglyphs", "phoenician", "ogham", "runes-elder", "runes-futhorc", "gothic-wulfila",
      "roman-inscription", "thorn", "illuminated", "deco-fleuron",
    ],
    sample: "Cleopatra",
    placeholder: "Type a name or a short word…",
    presets: ["Cleopatra", "Alexander", "Your Name", "Ramses", "Brigid", "Aurelius"],
  },
  stylesHeading: "Ancient scripts and lettering",
  howTo: {
    heading: "How to write your name in an ancient script",
    steps: [
      ["Spell it by sound", "Ancient scripts recorded sounds. Kathy works better as Kathi, and Phil as Fil, because there's no sign for a silent letter."],
      ["Compare the scripts", "Hieroglyphs and Phoenician look the oldest; Ogham and runes suit Celtic or Norse themes; the Gothic alphabet looks Greek."],
      ["Copy and check the display", "Paste where you'll use it. Empty boxes mean the device lacks a font for that script, not that the text is wrong."],
    ],
  },
  sections: [
    {
      h2: "Which ancient scripts can you copy and paste?",
      blocks: [
        { p: "Only scripts that are in the Unicode standard can be copied as text. All six below are, which is why they paste anywhere a modern font supports them. Dates are approximate; scholars still debate the earliest examples." },
        {
          table: {
            head: ["Script", "Sample", "Roughly when", "Where", "In Unicode since"],
            glyphCols: [1],
            rows: [
              ["Egyptian hieroglyphs", "𓄿𓃀𓎡", "from about 3200 BC", "Egypt", "5.2 (2009)"],
              ["Phoenician", "𐤀𐤁𐤂", "from about 1050 BC", "Eastern Mediterranean coast", "5.0 (2006)"],
              ["Elder Futhark runes", "ᚨᛒᚲ", "about 2nd to 8th century AD", "Germanic Europe and Scandinavia", "3.0 (1999)"],
              ["Gothic alphabet", "𐌰𐌱𐌲", "4th century AD", "The Goths, around the Danube", "3.1 (2001)"],
              ["Ogham", "ᚐᚁᚉ", "about 4th to 6th century AD on stones", "Ireland and western Britain", "3.0 (1999)"],
              ["Anglo-Saxon futhorc", "ᚪᛒᚳ", "about 5th to 11th century AD", "England and Frisia", "3.0 (1999)"],
            ],
          },
        },
      ],
    },
    {
      h2: "The hieroglyph alphabet: which sign is each letter?",
      blocks: [
        { p: "Egyptian writing had several hundred signs, but about two dozen stood for a single sound. Egyptologists use those \"uniliteral\" signs to spell modern names, and the hieroglyph style does the same. Egyptian scribes would not have spelled a word this way: they mixed sound signs with picture signs, and wrote no vowels. Think of it as a cartouche for fun, not a translation." },
        {
          table: {
            head: ["Letter", "Sign", "What it shows", "Letter", "Sign", "What it shows"],
            glyphCols: [1, 4],
            rows: [
              ["A", "𓄿", "Egyptian vulture", "N", "𓈖", "Water ripple"],
              ["B", "𓃀", "Foot", "O, U, W", "𓅱", "Quail chick"],
              ["C, K", "𓎡", "Basket with handle", "P", "𓊪", "Stool"],
              ["D", "𓂧", "Hand", "Q", "𓈎", "Hill slope"],
              ["E, I", "𓇋", "Flowering reed", "R", "𓂋", "Mouth"],
              ["F, V", "𓆑", "Horned viper", "S", "𓋴", "Folded cloth"],
              ["G", "𓎼", "Jar stand", "T", "𓏏", "Bread loaf"],
              ["H", "𓉔", "Reed shelter", "X", "𓎡𓋴", "Basket + cloth (k + s)"],
              ["J", "𓆓", "Cobra", "Y", "𓇌", "Two reeds"],
              ["L", "𓃭", "Lion", "Z", "𓊃", "Door bolt"],
              ["M", "𓅓", "Owl", "SH / CH / KH", "𓈙 𓍿 𓐍", "Pool / tethering rope / placenta"],
            ],
          },
        },
        { p: "Egyptian had no L sound, so the lion stands in for it, a convention Egyptologists borrowed from Ptolemaic spellings of Greek names such as Cleopatra and Ptolemy." },
      ],
    },
    {
      h2: "Phoenician: the oldest alphabet you can paste",
      blocks: [
        { p: "Phoenician had 22 letters, all consonants. The Greeks adapted it around the 8th century BC, adding vowels, and the Romans took their letters from a Greek alphabet by way of the Etruscans. So most Latin letters have a Phoenician ancestor, and that is the mapping the generator uses: A comes from 𐤀 (alf, an ox head), B from 𐤁 (bet, a house), O from 𐤏 (ain, an eye). F, U, V, W and Y all descend from a single letter, 𐤅 (wau), so they all become it." },
        { p: "Phoenician runs right to left. Paste a word and your app shows it in that direction automatically, because the characters carry their own direction. Words are separated with 𐤟, the Phoenician word divider." },
      ],
    },
    {
      h2: "Ogham, runes and the Gothic alphabet",
      blocks: [
        { p: "**Ogham** was carved as notches along the edge of a standing stone and read from the bottom up. Each letter is a group of one to five strokes, and the marks ᚛ and ᚜ open and close a text, which is why the Ogham style wraps your words in them. It suits Irish and Celtic names: Brigid becomes ᚛ᚁᚏᚔᚌᚔᚇ᚜." },
        { p: "**Runes** are covered in depth, with a full letter table, on the [Viking font generator](/viking-font-generator). **The Gothic alphabet** was created by the bishop Wulfila to write the Bible in Gothic; its 27 letters and their names are on the [gothic letters](/gothic-letters) page, alongside the blackletter that borrowed the word \"gothic\" much later." },
      ],
    },
    {
      h2: "Is there a cuneiform translator?",
      blocks: [
        { p: "Not an honest one. Sumerian and Akkadian cuneiform used hundreds of signs for words and syllables, and never had an alphabet, so a converter that swaps each English letter for one wedge sign is inventing the mapping. The exception is Ugaritic, a 30-letter alphabet written in cuneiform wedges around the 14th century BC, which is in Unicode but rarely supported by phone fonts. For a name, use hieroglyphs or Phoenician, which at least follow real sound values." },
      ],
    },
  ],
  built:
    "Each style replaces letters one by one, after handling pairs such as th, sh, ch and ng. Characters come from Unicode's Egyptian Hieroglyphs (U+13000–U+1342F), Phoenician (U+10900–U+1091F), Ogham (U+1680–U+169F), Runic (U+16A0–U+16FF) and Gothic (U+10330–U+1034F) blocks. Google's free Noto Sans fonts cover all five; recent phones show most of them without extra fonts, while older Windows and Android versions may show boxes.",
  related: {
    heading: "More old and historical lettering",
    hrefs: ["/viking-font-generator", "/gothic-letters", "/medieval-font-generator", "/illuminated-letters", "/latin-tattoo-font", "/old-english-text-to-image"],
  },
  faq: [
    { q: "Is this a real hieroglyph translator?", a: "No. It spells your word sound by sound with the single-sound signs Egyptologists use for modern names. Translating English into ancient Egyptian would need the Egyptian language itself, which a letter swap can't provide." },
    { q: "What is the oldest alphabet I can copy and paste?", a: "Phoenician, from about 1050 BC, is the oldest alphabet with good Unicode support, and nearly every European alphabet descends from it. Earlier Proto-Sinaitic inscriptions exist but have no standard Unicode encoding." },
    { q: "Why do I see boxes instead of hieroglyphs?", a: "Your device doesn't have a font with those characters. The text is still correct: paste it on a newer phone, install Noto Sans Egyptian Hieroglyphs, or export it as an image." },
    { q: "Can I use ancient letters in a tattoo?", a: "Yes, but check the spelling with someone who reads the script and give your artist an image, not copied text, so the shapes don't change between devices. Remember these are letter swaps, not translations." },
    { q: "Do ancient scripts work in Instagram or Discord names?", a: "Usually, in display names and bios, since they are standard Unicode. Whether your followers see the signs depends on their device fonts. Usernames and handles will reject them." },
    { q: "Why does my Phoenician text appear backwards?", a: "Phoenician is written right to left, and its Unicode characters tell apps to display them that way. The first letter you typed appears on the right." },
  ],
};

export default page;
