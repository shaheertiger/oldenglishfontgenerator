import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL. Bing queries: "angelic font",
// "angelic font copy (and paste)", "angel font generator", "font generator
// angelic", "angel art of text design to copy". Angle: soft, airy letters
// plus the small symbols (stars, clouds, wings) that make text read heavenly.
const page: PageContent = {
  slug: "font-generator/angelic",
  file: "font-generator-angelic",
  title: "Angelic Font – 9 Soft Heavenly Styles to Copy and Paste",
  description:
    "Angelic font in 9 soft styles: airy script, tiny letters, spaced small caps, plus ✧ ☁ 𓆩♡𓆪 symbols. Type your words, copy, paste. Free.",
  h1: "Angelic Font",
  crumb: "Angelic Font",
  intro:
    "An angelic font is a light, airy text style, usually thin script or tiny spaced letters framed by stars, clouds or wings, and this page gives you 9 of them to copy. For angelic font copy and paste, type a word or a short line, tap Copy on the softest-looking row and paste it. As an angel font generator it pairs each style with a set of symbols below, so you can wrap your text in ✧, ☁ or 𓆩♡𓆪 to finish the look. Keep it short: one or two words in an angelic style carry the mood better than a paragraph.",
  tool: {
    styles: [
      "script", "script-spaced", "u-tiny-spaced", "u-superscript", "u-small-caps-spaced",
      "u-outline-spaced", "u-italic-spaced", "deco-stars", "u-bubble",
    ],
    sample: "angel",
    placeholder: "Type a name or a soft word…",
    presets: ["angel", "heaven sent", "i love you", "halo"],
  },
  stylesHeading: "Angelic Text Styles",
  howTo: {
    heading: "How to make angelic text",
    steps: [
      ["Keep it light", "Type a short word or name in lowercase. Lowercase looks softer and suits the tiny and spaced rows."],
      ["Pick an airy row", "Fine Line Spaced Script, Tiny Spaced and Small Caps Spaced have the most open, weightless feel."],
      ["Add a symbol", "Copy a symbol frame from the table below and paste your text in the middle."],
    ],
  },
  sections: [
    {
      h2: "Angelic symbols to copy",
      blocks: [
        { p: "These are the characters people use to make text look heavenly. Copy one, or a matched pair to go either side of your word." },
        {
          table: {
            head: ["Symbol", "What it is", "Try it like this"],
            glyphCols: [0, 2],
            rows: [
              ["✧ ✦", "Four-pointed stars (U+2727, U+2726)", "✧ 𝒶𝓃ℊℯ𝓁 ✧"],
              ["⋆ ˚ ₊ ⊹", "Star operator, ring, subscript plus, small cross", "⋆˚₊ ᵃ ⁿ ᵍ ᵉ ˡ ₊˚⋆"],
              ["☁", "Cloud (U+2601)", "☁ 𝒽ℯ𝒶𝓋ℯ𝓃 𝓈ℯ𝓃𝓉 ☁"],
              ["𓆩 𓆪", "Egyptian hieroglyphs U+131A9 and U+131AA, used as wings", "𓆩♡𓆪 ᴀ ɴ ɢ ᴇ ʟ 𓆩♡𓆪"],
              ["♡", "White heart suit (U+2661)", "♡ 𝒽 𝒶 𝓁 ℴ ♡"],
              ["☽ ☾", "Quarter moons (U+263D, U+263E)", "☽ 𝓅𝓊𝓇ℯ 𝓈ℴ𝓊𝓁 ☾"],
              ["ଘ(੭ˊᵕˋ)੭", "Angel kaomoji; the first sign is an Oriya letter standing in for wings", "ଘ(੭ˊᵕˋ)੭ ʰᵉᵃᵛᵉⁿ ˢᵉⁿᵗ"],
            ],
          },
        },
      ],
    },
    {
      h2: "1. How do I make angel text art to copy?",
      blocks: [
        {
          ul: [
            "Start with the word in a thin style. Tattoo Script and Fine Line Spaced Script are the most delicate; Tiny turns it into small raised letters.",
            "Add the same symbol on both sides, or mirror a pair such as 𓆩 and 𓆪 so the wings face the word.",
            "Leave a space between the symbol and the text. Without it the frame can crowd the first letter.",
            "Avoid heavy rows next to each other. One bold symbol line above a light word reads as a halo; two bold lines just look busy.",
          ],
        },
        { p: "If a character shows as an empty box, the reader's device has no font for it; the hieroglyph wings are the most likely to be missing, so keep ✧ or ☁ as a fallback. For softer pink and bow styles see [coquette text](/coquette), and for more stars and shapes, the [symbols](/symbols) page." },
      ],
    },
    {
      h2: "Light letters, one at a time",
      blocks: [
        { p: "Building a name letter by letter? The chart has every script, tiny and small capital letter. The Tiny row has no true superscript q, so it uses a lookalike digit." },
        { chart: { styles: ["script", "u-superscript", "u-small-caps"], sets: ["lower"] } },
      ],
    },
  ],
  built:
    "The airy rows use Mathematical Script (U+1D49C–U+1D4CF), superscript modifier letters such as ᵃ and ⁿ from the Spacing Modifier and Phonetic Extensions blocks, small capitals such as ᴀ and ɴ, and double-struck letters for Outline Spaced. Starlit Gothic wraps Fraktur letters in ✧･ﾟ; the wing symbols 𓆩 𓆪 are borrowed from the Egyptian Hieroglyphs block.",
  related: {
    heading: "More soft and decorative text",
    hrefs: ["/coquette", "/symbols", "/font-generator/princess", "/font-generator/fancy-writing", "/font-generator/calligraphy"],
  },
  faq: [
    { q: "What is an angelic font?", a: "A soft, light lettering style, usually thin script or tiny spaced letters, often framed with stars, clouds or wing symbols." },
    { q: "How do I copy and paste an angelic font?", a: "Type your text, tap Copy next to the row you like and paste it. Add a symbol pair from the table if you want a frame." },
    { q: "How do I type \"i love you\" in an angelic font?", a: "Type i love you in the box and copy Fine Line Spaced Script or Tiny Spaced, then add ♡ on each side." },
    { q: "What are the wing symbols 𓆩 𓆪?", a: "They are two Egyptian hieroglyphs (U+131A9 and U+131AA) that happen to look like a pair of wings, so people use them to frame words." },
    { q: "Which angel font generator style is the softest?", a: "Tiny Spaced and Fine Line Spaced Script. Both are small, open and weightless on the page." },
    { q: "Why do the angelic symbols show as boxes?", a: "The reader's device has no font containing that character. Swap in a more common symbol such as ✧, ♡ or ☁." },
    { q: "Can I use angelic text as a name?", a: "It is plain Unicode text, so you can paste it anywhere you can type; whether each character shows depends on the fonts on the reader's device." },
  ],
};

export default page;
