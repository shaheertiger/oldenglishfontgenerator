import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL, which ranked in Bing before the
// rebuild removed it.
const page: PageContent = {
  slug: "font-generator/2000s",
  file: "font-generator-2000s",
  title: "2000s Font Generator – 14 Y2K Text Styles to Copy and Paste",
  description:
    "2000s font generator: 14 Y2K text styles – ｗｉｄｅ text, l33t, bubble, squared and soft glitch. Type a screen name, tap Copy, paste. Free.",
  h1: "2000s Font Generator",
  crumb: "2000s Font Generator",
  intro:
    "This 2000s font generator turns your words into 14 styles of early-internet text, the kind people used for screen names, away messages and profile headers around Y2K. If you searched for a font generator 2000s style or a y2k text generator copy and paste, everything here is plain Unicode: wide fullwidth letters, leetspeak, squared and bubble letters, mirrored text and a light glitch, ready to paste into a retro post or an edit.",
  tool: {
    styles: [
      "u-fullwidth", "u-leet", "u-bubble-filled", "u-squared", "u-zalgo-soft", "u-japanese-style",
      "u-love-parens", "u-weird", "u-tiny-spaced", "u-mirrored", "u-fullwidth-underline",
      "u-squared-spaced", "u-alternating", "u-bubble-underline",
    ],
    sample: "xoxo gossip",
    placeholder: "Type a screen name or away message…",
    presets: ["xoxo gossip", "brb", "luv u 4ever", "away message", "sk8er", "y2k"],
  },
  stylesHeading: "Y2K and 2000s text styles",
  howTo: {
    heading: "How to make 2000s-style text",
    steps: [
      ["Write it like it's 2004", "Short and lowercase reads most era-correct: a nickname, an initial pair, a three-word away message."],
      ["Match the style to the mood", "Fullwidth for a dreamy aesthetic header, Leet for a gamer handle, Love Parenthesis for a crush post."],
      ["Copy and decorate", "Copy the result, then add the symbols from the cheat sheet below around it."],
    ],
  },
  sections: [
    {
      h2: "Y2K alphabet chart: fullwidth, katakana-style and bubble",
      blocks: [
        { p: "Three of the most recognizable throwback alphabets, every cell a tap to copy. Fullwidth letters are the wide ones that look spaced out even without spaces. The Japanese Style row borrows CJK and katakana shapes that resemble Latin letters, so 乇 stands in for E and 尺 for R. Filled Bubble puts each capital in a black circle." },
        { chart: { styles: ["u-fullwidth", "u-japanese-style", "u-bubble-filled"], sets: ["upper", "lower"] } },
      ],
    },
    {
      h2: "1. What did 2000s style text look like?",
      blocks: [
        { p: "Early-2000s profile text came from people working around plain text boxes. Nobody could pick a font for a screen name, so they used what the keyboard and character map offered. A few habits defined the look:" },
        { ul: [
          "Leetspeak: numbers in place of letters, like 3 for E and 4 for A. It began on bulletin boards and spread through gaming handles.",
          "Alternating capitals and xX...Xx wrappers around a name.",
          "Kaomoji such as (｡♥‿♥｡) and ^_^, often borrowed from Japanese message boards.",
          "Wide fullwidth letters, which later became the 'ａｅｓｔｈｅｔｉｃ' vaporwave look.",
          "Tildes, stars and hearts strung around a message: ~*~ like this ~*~.",
        ] },
      ],
    },
    {
      h2: "2. 2000s symbol cheat sheet to copy",
      blocks: [
        { p: "Pair any style above with a wrapper. These are ordinary characters, so you can select and copy them straight from the table." },
        {
          table: {
            head: ["Wrapper", "Example", "Era feel"],
            glyphCols: [0, 1],
            rows: [
              ["xX Xx", "xX ｎｉｋｋｉ Xx", "Gamer tag, emo profile"],
              ["~*~ ~*~", "~*~ ʰᵉˡˡᵒ ~*~", "Sparkly away message"],
              ["☆彡 ミ☆", "☆彡 🅢🅣🅐🅡 ミ☆", "Anime fan page"],
              ["(｡♥‿♥｡)", "(l)(u)(v) (｡♥‿♥｡)", "Crush post"],
              ["<3", "4ever <3", "Text-message sign-off"],
              ["★·.·´¯`·.·★", "★·.·´¯`·.·★ 乃尺ﾑ卄 ★·.·´¯`·.·★", "Decorated header"],
            ],
          },
        },
      ],
    },
    {
      h2: "3. How do I make glitter or bling 2000s text?",
      blocks: [
        { p: "The animated glitter text of that period was an image, usually a GIF, so plain text can't sparkle. What you can do is suggest it: wrap a Fullwidth or Filled Bubble name in stars and dots, or use the soft Glitch style for a scratchy CD-burn look. If you need the real thing on a graphic, set your text in a bold display font in an image editor and add a glitter texture there. For a downloadable picture of styled text, try the [text to image](/old-english-text-to-image) tool." },
      ],
    },
  ],
  built:
    "Fullwidth letters come from Unicode's Halfwidth and Fullwidth Forms block (U+FF01–U+FF5E); bubble and squared styles use Enclosed Alphanumerics and Enclosed Alphanumeric Supplement; Japanese Style swaps letters for CJK and katakana characters that look similar, and Leet replaces some letters with digits.",
  related: {
    heading: "More throwback and fun text",
    hrefs: ["/font-generator/fun", "/font-generator/mocking-text", "/font-generator/wavy", "/font-generator/distorted-text", "/font-generator/reverse", "/coquette"],
  },
  faq: [
    { q: "What font did people use in the 2000s for usernames?", a: "Mostly the default font of whatever site they were on, decorated with leetspeak, xX wrappers, symbols and alternating caps. Styled Unicode letters like these became common later." },
    { q: "Is there a Y2K text generator copy and paste?", a: "Yes, this page. Type in the box, then tap Copy next to a Y2K style such as Fullwidth or Leet." },
    { q: "What is the 'aesthetic' wide text called?", a: "Fullwidth text. The letters come from a Unicode block kept for compatibility with East Asian character sets, where Latin letters take the same width as Chinese and Japanese characters." },
    { q: "How do I write in leetspeak?", a: "Replace letters with similar-looking digits: 4 for A, 3 for E, 1 for L or I, 0 for O, 5 for S, 7 for T. The Leet style here does it automatically." },
    { q: "Can I get early 2000s fonts as real fonts?", a: "This tool makes text, not font files. For design work, look for open-licence pixel and bubble display fonts and install them." },
    { q: "Why does the same letter glitch differently in two places?", a: "The soft Glitch style stacks combining marks on each letter and picks them by position in the line, so two identical letters rarely get the same marks." },
    { q: "Do these letters need an app?", a: "No. Everything converts in your browser and the result is ordinary text you can paste." },
  ],
};

export default page;
