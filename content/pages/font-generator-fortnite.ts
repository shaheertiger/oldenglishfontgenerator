import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL, which ranked in Bing before the
// rebuild removed it. Fortnite-style text only: not affiliated, no logo font.
const page: PageContent = {
  slug: "font-generator/fortnite",
  file: "font-generator-fortnite",
  title: "Tryhard Fortnite Fonts – 13 Sweaty Name Styles, Copy & Paste",
  description:
    "Tryhard Fortnite fonts: 13 sweaty, Fortnite-style name styles – small caps, tiny text, bracket tags, gothic. Type a name, tap Copy. Free, unofficial.",
  h1: "Tryhard Fortnite Fonts",
  crumb: "Fortnite-Style Fonts",
  intro:
    "Tryhard Fortnite fonts are the stylized letters players use to make a gamer name look \"sweaty\", and this page turns any name into 13 Fortnite-style text styles you can copy. The sweaty font name for Fortnite look is usually small caps, tiny superscript letters, a bracket tag or a ツ, rather than anything flashy; gothic fonts for Fortnite names are the other popular route. This is fan-made Fortnite-style text: it is not the game's official logo font, and we are not affiliated with Epic Games.",
  tool: {
    styles: [
      "u-small-caps", "u-superscript", "u-tiny-spaced", "fraktur-small-caps", "bold-fraktur-small-caps",
      "frame-corner", "frame-lenticular", "gothic-framed", "deco-swords", "u-sans-bold-italic",
      "u-small-caps-spaced", "u-monospace", "u-bold-italic-serif",
    ],
    sample: "Ghost",
    placeholder: "Type your gamer name…",
    presets: ["Ghost", "Nova", "Clix", "Viper", "Zen"],
  },
  stylesHeading: "Sweaty name styles",
  howTo: {
    heading: "How to make a sweaty name",
    steps: [
      ["Pick a short base", "Sweaty names are usually one short word: a noun, a nickname, or a word plus a number."],
      ["Style it lightly", "Small Caps or Tiny text is the classic tryhard look. Gothic or bracket styles are louder."],
      ["Add one symbol", "Copy the result, then add one mark from the symbol table, such as ツ or 乂. One is plenty."],
    ],
  },
  sections: [
    {
      h2: "Sweaty letters to copy: gothic small caps, tiny and bold italic",
      blocks: [
        { p: "Three alphabets behind most tryhard names. Fraktur + Small Caps gives a gothic capital and small-cap lowercase, so a name like 𝔊ʜᴏsᴛ takes one tap per letter. Tiny letters are superscript forms; there is no superscript q in Unicode, so a similar-looking character stands in for it. Sans Bold Italic is the fast, sporty option." },
        { chart: { styles: ["fraktur-small-caps", "u-superscript", "u-sans-bold-italic"], sets: ["upper", "lower"] } },
      ],
    },
    {
      h2: "1. What makes a font name look sweaty or tryhard?",
      blocks: [
        { p: "In gaming slang, a sweaty or tryhard player is someone who takes casual matches very seriously, and their names tend to share a look: short, lowercase or small caps, and decorated with one or two symbols. The style signals effort without being hard to read. A few patterns you'll recognize:" },
        { ul: [
          "Small caps with a symbol: ɢʜᴏsᴛ ツ",
          "Tiny text after a normal word: Nova ᵛᵗ",
          "A bracketed tag: 『Viper』 or 〖Zen〗",
          "A gothic first letter: 𝔊ʜᴏsᴛ",
          "Mirrored symbols around the name: 乂 Clix 乂",
        ] },
      ],
    },
    {
      h2: "2. Symbols for tryhard names",
      blocks: [
        { p: "Paste one of these before or after your styled name. They are standard characters, so select one in the table to copy it." },
        {
          table: {
            head: ["Symbol", "Name", "How players use it"],
            glyphCols: [0],
            rows: [
              ["ツ", "Katakana tsu", "Looks like a smiley; the most common tryhard mark"],
              ["乂", "CJK character", "Looks like an X; often placed on both sides"],
              ["彡", "CJK character", "Three slashes, like a speed streak"],
              ["メ", "Katakana me", "A small cross mark"],
              ["⚔", "Crossed swords", "Fighter or clan theme"],
              ["✦", "Four-pointed star", "Clean accent after a name"],
              ["ᴾᴿᴼ", "Superscript PRO", "Tiny tag after a name"],
            ],
          },
        },
        { p: "There are more arrows, stars and brackets on the [symbols](/symbols) page and in the [brackets](/symbols/brackets) set." },
      ],
    },
    {
      h2: "3. Can I copy the Fortnite logo font here?",
      blocks: [
        { p: "No. The game's logo is official branding, and this page doesn't reproduce it, any official typeface or any logo. What you get here is Fortnite-style text made from Unicode characters: the decorated-name look players share, not the official artwork. Each service sets its own rules for names, so check yours in the place you plan to use it before you settle on it; this tool only changes the characters." },
      ],
    },
  ],
  built:
    "Small caps come from IPA and phonetic letters (ᴀ ʙ ᴄ), tiny text from superscript and modifier letters (ᵃ ᵇ ᶜ), gothic capitals from Mathematical Fraktur, and the brackets 『』 〖〗 【】 are CJK punctuation from the U+3000 block.",
  related: {
    heading: "More name styles",
    hrefs: ["/font-generator/minecraft", "/font-generator/small-gothic", "/symbols", "/symbols/brackets", "/font-generator/gangster", "/font-generator/fancy-letters"],
  },
  faq: [
    { q: "What are the best tryhard Fortnite fonts?", a: "Small Caps, Tiny text and Fraktur + Small Caps are the classic sweaty looks. Add one symbol such as ツ and stop there." },
    { q: "Is this the official Fortnite font?", a: "No. This is unofficial Fortnite-style text built from Unicode characters. We are not affiliated with Epic Games and don't provide the logo font." },
    { q: "How do I make a sweaty name?", a: "Type a short name, copy the Small Caps or Tiny style, then add one symbol from the table, for example ɴᴏᴠᴀ ツ." },
    { q: "What does ツ mean in names?", a: "It's the Japanese katakana character tsu. Players use it because it looks like a little smiling face." },
    { q: "What are gothic fonts for gamer names?", a: "Fraktur blackletter letters. Try Fraktur + Small Caps for one gothic capital, or Gothic Framed for a fully gothic tag." },
    { q: "Why does my name show boxes on a friend's screen?", a: "Their device doesn't have a font with that character. It is plain Unicode text, so you can paste it anywhere you can type; whether a character shows depends on the fonts on the reader's device." },
    { q: "Can I get small caps without the gothic letter?", a: "Yes. The plain Small Caps style converts every letter, and Small Caps Spaced adds gaps for a wider look." },
  ],
};

export default page;
