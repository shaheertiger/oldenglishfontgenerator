import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL. Bing queries: "modern calligraphy
// font generator", "modern calligraphy generator", "flourished modern script
// calligraphy fonts text generator". Angle: brush-script-plus-clean-pairing
// look used on wedding signs and small-shop branding; not traditional hands.
const page: PageContent = {
  slug: "font-generator/modern-calligraphy",
  file: "font-generator-modern-calligraphy",
  title: "Modern Calligraphy Generator – 9 Brush Script Styles, Free",
  description:
    "Modern calligraphy generator: 9 brush-script and pairing styles for shop names, wedding signs and captions. Type, copy a line, mix two. Free.",
  h1: "Modern Calligraphy Generator",
  crumb: "Modern Calligraphy",
  intro:
    "A modern calligraphy generator gives you the relaxed, brush-pen script you see on wedding welcome boards and handmade-shop labels, as text you can copy. There are 9 rows here: heavy and light script, plus the tidy companions that modern lettering is almost always paired with, such as spaced small capitals, tiny letters and a typewriter face. Treat it as a modern calligraphy font generator for headings and names, and use the pairing rows for the smaller second line underneath. Looking for a modern calligraphy alphabet to copy letter by letter? It is in the chart further down.",
  tool: {
    styles: [
      "bold-script", "script", "u-cursive-bold-spaced", "u-sans-italic", "u-sans-bold-italic",
      "u-alternating", "u-small-caps-spaced", "u-tiny-spaced", "typewriter",
    ],
    sample: "Little Fern Studio",
    placeholder: "Type a shop name, couple's names or a sign…",
    presets: ["Little Fern Studio", "Welcome", "Mr & Mrs", "Handmade with love"],
  },
  stylesHeading: "Modern Calligraphy Styles",
  howTo: {
    heading: "How to build a modern calligraphy layout",
    steps: [
      ["Make the main word", "Type the name or greeting and copy Bold Tattoo Script, the closest match to a brush pen's heavy downstrokes."],
      ["Add a quiet second line", "Type the supporting words and copy Small Caps Spaced, Tiny Spaced or Typewriter."],
      ["Stack the lines", "Paste the script line first and the small line under it. The contrast between the two is what reads as modern lettering."],
    ],
  },
  sections: [
    {
      h2: "Modern vs. traditional calligraphy",
      blocks: [
        { p: "Traditional pointed-pen work follows strict rules: a fixed slant, letters sitting on one baseline, and even spacing. Modern calligraphy, the style that spread through hand-lettered signs and stationery, breaks those rules on purpose. Letters bounce above and below the line, loops get oversized, slant is loose, and the script is set beside a plain sans or small caps instead of more script." },
        { p: "Unicode text cannot bounce or change size letter by letter, so the generator gets you the script shapes and the pairing, and leaves the bounce to real lettering. If you want the formal hands instead, the [calligraphy generator](/font-generator/calligraphy) covers copperplate, italic and blackletter." },
      ],
    },
    {
      h2: "Ready-made pairings",
      blocks: [
        {
          table: {
            head: ["Use", "Main line", "Second line"],
            glyphCols: [1, 2],
            rows: [
              ["Wedding welcome sign", "𝓦𝓮𝓵𝓬𝓸𝓶𝓮", "ᴛ ᴏ   ᴏ ᴜ ʀ   ᴡ ᴇ ᴅ ᴅ ɪ ɴ ɢ"],
              ["Small-shop label", "𝓛𝓲𝓽𝓽𝓵𝓮 𝓕𝓮𝓻𝓷", "𝚜𝚝𝚞𝚍𝚒𝚘"],
              ["Product tagline", "ℋ𝒶𝓃𝒹𝓂𝒶𝒹ℯ 𝓌𝒾𝓉𝒽 𝓁ℴ𝓋ℯ", "ᶜ ᵃ ⁿ ᵈ ˡ ᵉ ˢ   ᵃ ⁿ ᵈ   ᵍ ⁱ ᶠ ᵗ ˢ"],
              ["Bakery menu heading", "𝓢 𝔀 𝓮 𝓮 𝓽   𝓽 𝓻 𝓮 𝓪 𝓽 𝓼", "ꜰ ʀ ᴇ s ʜ   ᴅ ᴀ ɪ ʟ ʏ"],
            ],
          },
        },
      ],
    },
    {
      h2: "1. Can a text generator make flourished modern script?",
      blocks: [
        { p: "Partly. The script capitals in Unicode already carry an entry loop, so a name that starts with a capital such as ℋ, ℒ or 𝓜 looks flourished on its own. What text cannot do is add a long tail to the last letter or a swash under the word, because those are drawn shapes, not characters. A common workaround is to end the line with a simple ornament like ~ or ♡. Every script letter is below; copy the ones you need to build a monogram or fix a single character." },
        { chart: { styles: ["bold-script", "script"], sets: ["lower", "upper"] } },
      ],
    },
  ],
  built:
    "Brush-like rows use Mathematical Bold Script (U+1D4D0–U+1D503) and Script (U+1D49C–U+1D4CF). The pairing rows use small-capital letters from the IPA and Phonetic Extensions blocks, superscript modifier letters for Tiny Spaced, and Mathematical Monospace (U+1D670–U+1D6A3) for Typewriter.",
  related: {
    heading: "More lettering pages",
    hrefs: ["/font-generator/calligraphy", "/font-generator/calligraphy-capital-letters", "/font-generator/handwriting", "/coquette", "/happy-birthday-font"],
  },
  faq: [
    { q: "What is modern calligraphy?", a: "A looser, more playful take on pointed-pen script: bouncing letters, big loops and loose slant, usually paired with a plain typeface." },
    { q: "Is this a modern calligraphy font generator I can use for free?", a: "Yes. It is free, needs no sign-up and outputs text you can copy as often as you like." },
    { q: "Can I copy the modern calligraphy alphabet one letter at a time?", a: "Yes. The chart on this page lists every bold and regular script letter; tap a cell to copy it." },
    { q: "Why does the text not bounce like real brush lettering?", a: "Unicode letters all sit on the same baseline. For bouncy lettering on a printed sign, use a modern calligraphy font in a design app or letter it by hand." },
    { q: "What should I pair with modern calligraphy?", a: "Something plain: Small Caps Spaced, Tiny Spaced or Typewriter. Two scripts next to each other compete and look busy." },
    { q: "Can I use these styles for an online shop name?", a: "You can paste the text into a shop banner or description. Keep a plain-text version of the name too, since search tools match ordinary letters." },
  ],
};

export default page;
