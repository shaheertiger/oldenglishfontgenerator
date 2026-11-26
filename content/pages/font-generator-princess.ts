import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL. Bing queries: "princess font
// generator", "generate princess font", "generate princesses font".
// Angle: royal and elegant: crowns, fleur-de-lis, Fraktur capitals and script.
const page: PageContent = {
  slug: "font-generator/princess",
  file: "font-generator-princess",
  title: "Princess Font Generator – 10 Royal Text Styles, Copy & Paste",
  description:
    "Princess font generator: 10 royal styles with crowns ♛, fleur-de-lis ⚜, script and Fraktur capitals. Type a name, tap Copy, paste. Free.",
  h1: "Princess Font Generator",
  crumb: "Princess Font",
  intro:
    "A princess font generator dresses a name in royal lettering, either soft fairytale script or stately Gothic capitals under a crown, and this one offers 10 styles you can copy as text. To generate a princess font, type the name (\"Princess Amelia\", \"Birthday Girl\", \"Queen\") and pick between the graceful script rows and the regal Fraktur rows with ♛, ⚜ or ༺ ༻ around them. The princess font copy and paste result is ordinary Unicode, so a party invite message, a game nickname or a caption can carry the crown with it.",
  tool: {
    styles: [
      "deco-crown", "script", "bold-script", "oe-cursive", "bold-cursive",
      "fraktur-plain-lower", "frame-tibetan", "deco-fleur", "u-royal-gothic", "deco-heart",
    ],
    sample: "Princess Amelia",
    placeholder: "Type a name or a title…",
    presets: ["Princess Amelia", "Birthday Girl", "Queen", "Royal Highness"],
  },
  stylesHeading: "Princess and Royal Styles",
  howTo: {
    heading: "How to make a princess name",
    steps: [
      ["Type the name with capitals", "Capital letters are where the royal look lives, so write Princess Amelia, not princess amelia."],
      ["Choose fairytale or regal", "Script rows feel like a storybook; Crowned Gothic, Fleur-de-lis and Ornate Tibetan Frame feel like a coat of arms."],
      ["Copy and crown it", "Tap Copy. To add a different crown, paste one from the symbol table in front of the name."],
    ],
  },
  sections: [
    {
      h2: "Two princess looks",
      blocks: [
        {
          table: {
            head: ["Look", "Example", "Rows"],
            glyphCols: [1],
            rows: [
              ["Fairytale script", "𝒫𝓇𝒾𝓃𝒸ℯ𝓈𝓈 𝒜𝓂ℯ𝓁𝒾𝒶", "Tattoo Script, Bold Tattoo Script, Gothic Heart ♡"],
              ["Storybook mixed", "𝔓𝓇𝒾𝓃𝒸ℯ𝓈𝓈 𝔄𝓂ℯ𝓁𝒾𝒶", "Old English Cursive, Bold Old English Cursive"],
              ["Royal decree", "♛ 𝕻𝖗𝖎𝖓𝖈𝖊𝖘𝖘 𝕬𝖒𝖊𝖑𝖎𝖆 ♛", "Crowned Gothic, Royal Gothic, Ornate Tibetan Frame"],
              ["Heraldic", "⚜ 𝔓𝔯𝔦𝔫𝔠𝔢𝔰𝔰 𝔄𝔪𝔢𝔩𝔦𝔞 ⚜", "Fleur-de-lis, Fraktur Capitals with Plain Lowercase"],
            ],
          },
        },
        { p: "Fraktur Capitals, Plain Lowercase is the subtlest option: only the first letter of each word turns Gothic, so the name stays easy to read while still looking like a title." },
      ],
    },
    {
      h2: "Crowns and royal symbols to copy",
      blocks: [
        {
          table: {
            head: ["Symbol", "Name", "Note"],
            glyphCols: [0],
            rows: [
              ["♛ ♕", "Black and white chess queen", "Used as a crown in front of a name"],
              ["♚ ♔", "Black and white chess king", "A taller, plainer crown"],
              ["👑", "Crown emoji", "An emoji, so it is usually drawn in color"],
              ["⚜", "Fleur-de-lis", "The lily emblem of French royal heraldry"],
              ["༺ ༻", "Tibetan ornament marks", "Make a curly frame around a name"],
              ["꧁ ꧂", "Javanese ornaments", "A grander frame for one short word"],
              ["✿ ❀", "Florettes", "For a softer, garden-party princess"],
            ],
          },
        },
        { p: "Paste the symbol with a space on each side of the name. For heart and bow styles, [coquette](/coquette) has more; for soft clouds and stars, see the [angelic font](/font-generator/angelic) page." },
      ],
    },
    {
      h2: "1. How do I generate a princess font letter by letter?",
      blocks: [
        { p: "Use the chart when you only need one fancy capital, for example the initial on a birthday banner caption or a single crowned letter like ♛𝕬. Fraktur gives the Gothic, royal capitals; Bold Tattoo Script gives the looping storybook ones." },
        { chart: { styles: ["fraktur", "bold-script"], sets: ["upper", "lower"] } },
      ],
    },
  ],
  built:
    "Royal rows use Mathematical Fraktur and Bold Fraktur (U+1D504–U+1D59F, with ℭ ℌ ℑ ℜ ℨ from Letterlike Symbols); fairytale rows use Mathematical Script and Bold Script (U+1D49C–U+1D503). The crown is the chess queen ♛ U+265B, the fleur-de-lis is U+269C and the curly frame is ༺ ༻ (U+0F3A, U+0F3B) from the Tibetan block.",
  related: {
    heading: "More elegant text",
    hrefs: ["/font-generator/angelic", "/coquette", "/font-generator/fancy-writing", "/happy-birthday-font", "/font-generator/old-english"],
  },
  faq: [
    { q: "What is a princess font?", a: "Any lettering that reads as royal or fairytale: looping script, Gothic capitals, or either one framed with a crown or fleur-de-lis." },
    { q: "How do I generate a princess font for a name?", a: "Type the name in the box with capital letters and copy a row. Crowned Gothic adds ♛ automatically." },
    { q: "How do I add a crown to my name?", a: "Copy ♛, ♕ or 👑 from the symbol table and paste it before or around the name." },
    { q: "Which princess style is easiest to read?", a: "Tattoo Script or Fraktur Capitals, Plain Lowercase. Full Fraktur words are the hardest to read quickly." },
    { q: "Can I use princess text on a birthday invite?", a: "Yes, for a message or digital invite. For a printed card, install a real script or blackletter font for crisp printing." },
    { q: "Why is the crown a chess piece?", a: "The chess queen ♛ has a crown-shaped outline and is an ordinary text symbol, so it matches the letters instead of appearing as a colored emoji like 👑." },
  ],
};

export default page;
