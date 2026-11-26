import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL (old keyword: "wavy fonts"). Bing
// also showed it for "distorted font generator wavy" and "wave tall vapor".
const page: PageContent = {
  slug: "font-generator/wavy",
  file: "font-generator-wavy",
  title: "Wavy Font Generator – 12 Wavy & Stretched Text Styles, Free",
  description:
    "Wavy font generator with 12 styles: bobbing up-down letters, tilde waves, wide vaporwave and stretched script. Tap Copy, paste anywhere. Free.",
  h1: "Wavy Font Generator",
  crumb: "Wavy Text",
  intro:
    "A wavy font generator turns a line of text into letters that bob up and down, carry a small wave mark, or stretch out wide, and this one gives you 12 such wavy text styles to copy. Plain text cannot bend along a curve, so every style here fakes the motion with real characters: the Bent style alternates raised and lowered letters (ʷₐᵛy), the tilde style hangs a ripple under each letter, and the wide and spaced styles give the slow, stretched look that people call vaporwave or \"wave tall\" text. If you came for a wavy distorted look with heavy glitching, the [distorted text generator](/font-generator/distorted-text) goes further.",
  tool: {
    styles: [
      "u-bent", "wavy", "u-fullwidth", "u-spaced",
      "u-fullwidth-underline", "u-tiny-spaced", "u-cursive-spaced", "u-cursive-bold-spaced",
      "script-spaced", "u-script", "u-italic-spaced", "u-outline-spaced",
    ],
    sample: "good vibes only",
    placeholder: "Type something to make wavy…",
    presets: ["good vibes only", "ocean breeze", "summer", "slow down"],
  },
  stylesHeading: "Wavy and Stretched Text Styles",
  howTo: {
    heading: "How to make wavy text",
    steps: [
      ["Use lowercase for the bobbing style", "Bent works on lowercase letter shapes. Only about two thirds of the alphabet has a lowered (subscript) form, so a few letters stay level."],
      ["Stretch it if you want slow and wide", "The fullwidth and spaced styles add air between letters. They suit two to four words, not a paragraph."],
      ["Copy one line", "Tap Copy. If the wave looks flat where you paste it, try the tilde style, which needs no subscript letters."],
    ],
  },
  sections: [
    {
      h2: "1. How do you make text go up and down like a wave?",
      blocks: [
        { p: "The Bent style takes each letter in turn and swaps it for a superscript form, then a subscript form, then superscript again. Your eye reads the high-low-high pattern as a wave. Unicode only has subscript versions of a, e, h, i, j, k, l, m, n, o, p, r, s, t, u, v and x, so letters such as b, c, d, f, g, q, w, y and z cannot drop down and are shown at normal height when it is their turn to go low." },
        {
          table: {
            head: ["Kind of wave", "Style", "Looks like"],
            glyphCols: [2],
            rows: [
              ["Letters bobbing up and down", "Bent", "ᵍₒᵒd ᵛᵢᵇₑˢ"],
              ["A ripple under every letter", "Wavy Accent Gothic", "𝔤̰𝔬̰𝔬̰𝔡̰ 𝔳̰𝔦̰𝔟̰𝔢̰𝔰̰"],
              ["Wide and slow", "Big (Full Width)", "ｇｏｏｄ ｖｉｂｅｓ"],
              ["Loose, flowing script", "Cursive Spaced", "ℊ ℴ ℴ 𝒹   𝓋 𝒾 𝒷 ℯ 𝓈"],
            ],
          },
        },
      ],
    },
    {
      h2: "2. Stretched text: fullwidth vs. spaced",
      blocks: [
        { p: "Fullwidth letters exist for compatibility with older East Asian character sets, in which Latin letters were drawn as wide as a Chinese or Japanese character. Each one is a separate code point, which is why the text looks stretched sideways without any spaces. Spaced styles keep normal-width letters and put a space between them. A spaced line can wrap in the middle of a word, so keep spaced text to a few words." },
      ],
    },
    {
      h2: "Wavy and fullwidth alphabet to copy",
      blocks: [
        { p: "Tap any cell to copy one character. The top group has the tilde-below ripple already attached to each Fraktur letter." },
        { chart: { styles: ["wavy", "u-fullwidth"], sets: ["upper", "lower", "digits"] } },
      ],
    },
  ],
  built:
    "Bent alternates Modifier Letters (superscripts such as ᵃ ᵇ) with Latin subscript letters from the Superscripts and Subscripts block (ₐ ₑ ₒ). The ripple is U+0330 COMBINING TILDE BELOW, the stretched letters are Halfwidth and Fullwidth Forms (U+FF01–U+FF5E), and the script styles use Mathematical Script.",
  related: {
    heading: "More text effects",
    hrefs: ["/font-generator/distorted-text", "/font-generator/fun", "/font-generator/2000s", "/font-generator/handwriting", "/font-generator/font-converter"],
  },
  faq: [
    { q: "How do I make wavy text?", a: "Type your words in the box and copy the Bent style for an up-and-down wave, or the tilde style for a ripple under each letter." },
    { q: "Why are some letters in my wavy text not lowered?", a: "Unicode has no subscript form for letters like b, d, g, w and y, so they stay at normal height in the Bent style." },
    { q: "What is the stretched aesthetic text called?", a: "It is usually called fullwidth, wide or vaporwave text. The letters come from Unicode's Fullwidth Forms." },
    { q: "Can I make a sentence follow a curve?", a: "Not as text. A curve needs an image or a design app; plain characters always sit on a straight line." },
    { q: "Does wavy text change the font?", a: "No. Each style swaps in different characters. The reader's device still chooses the font used to draw them." },
    { q: "Which wavy style is easiest to read?", a: "Cursive Spaced and Big (Full Width). Bent is the most wave-like but the hardest to read in long lines." },
  ],
};

export default page;
