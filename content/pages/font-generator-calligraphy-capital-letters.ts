import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL. Bing queries: "calligraphy capital
// letters", "calligraphy alphabet capital letters", "free calligraphy capital
// letters", "calligraphic capital", "calligraphy capital letters for a map".
// The A–Z chart is the core of this page; the tool is secondary.
const page: PageContent = {
  slug: "font-generator/calligraphy-capital-letters",
  file: "font-generator-calligraphy-capital-letters",
  title: "Calligraphy Capital Letters – A–Z in 10 Styles to Copy",
  description:
    "Calligraphy capital letters A–Z in script, bold script, Fraktur and outline. Tap any capital to copy it for a monogram, drop cap or initial. Free.",
  h1: "Calligraphy Capital Letters",
  crumb: "Calligraphy Capitals",
  intro:
    "Calligraphy capital letters are the large, decorated initials of a pen alphabet, and this page lets you copy each one on its own from an A–Z chart in four styles, or set whole words in 10 capital-led styles. Script and bold script give the looping copperplate capitals; Fraktur and bold Fraktur give the Gothic ones; the outline set gives an open, double-lined capital. If you searched for a calligraphy alphabet in capital letters or calligraphic capitals for a monogram, the chart directly below is the quickest route: tap a cell and the letter is on your clipboard.",
  tool: {
    styles: [
      "script", "bold-script", "bold-fraktur", "fraktur", "varsity-outline", "illuminated",
      "drop-cap", "monogram-framed", "u-small-caps", "bold-serif",
    ],
    sample: "Rose Garden",
    placeholder: "Type a word, initials or a heading…",
    presets: ["Rose Garden", "Chapter One", "A & J", "NORTHERN SEA"],
  },
  stylesHeading: "Capital-Led Calligraphy Styles",
  howTo: {
    heading: "How to use calligraphy capitals",
    steps: [
      ["Copy one letter", "Tap the capital you need in the chart. One tap copies one character."],
      ["Or type a word", "In the tool, Illuminated Initials and Framed Drop Cap enlarge or frame only the first capital and keep the rest lighter."],
      ["Paste and combine", "Paste a script or Fraktur capital in front of ordinary text for an opening initial, or paste two for a monogram."],
    ],
  },
  sections: [
    {
      h2: "Calligraphy capital letters A–Z",
      blocks: [
        { p: "Four complete capital alphabets. Each cell copies one letter." },
        { chart: { styles: ["script", "bold-script", "bold-fraktur", "varsity-outline"], sets: ["upper"] } },
        { p: "Eight of the plain script capitals (ℬ ℰ ℱ ℋ ℐ ℒ ℳ ℛ) were added to Unicode earlier than the rest, in the Letterlike Symbols block, so on some devices they look a little different from 𝒜 or 𝒞. If that mismatch bothers you, use the bold script set, which was encoded all at once and stays consistent." },
      ],
    },
    {
      h2: "Drop caps, monograms and initials",
      blocks: [
        {
          cards: [
            { h: "Drop cap", p: "Open a story, a caption or a poem with one large decorated letter. Framed Drop Cap puts the first capital in brackets and sets the rest in light Fraktur; Illuminated Initials gives each word a bold Gothic capital. For painted manuscript-style capitals, see [illuminated letters](/illuminated-letters)." },
            { h: "Monogram", p: "Framed Monogram reduces your text to the first letter of each word, in bold Fraktur inside 【 】. For a script monogram, copy two capitals from the chart and put a dot or ampersand between them." },
            { h: "Single initial", p: "One script capital before a plain surname, or at the start of a signature, is often enough. The [signature font](/font-generator/signature) page has full-name layouts." },
          ],
        },
      ],
    },
    {
      h2: "1. Which calligraphy capital letters suit a map or a title?",
      blocks: [
        { p: "Labels on a hand-drawn or fantasy map are usually set in capitals with extra space between letters, so they can stretch across a region. Small Caps gives that spaced, quiet look for towns and rivers; Bold Serif or bold Fraktur capitals work for a country name or the map's title cartouche. Script capitals are best kept for a single flourish, such as the first letter of a sea, because a whole word in script capitals is hard to read." },
        { p: "Two practical notes: Unicode has no script or Fraktur digits, and the Small Caps row leaves s and x as ordinary lowercase letters. Check the preview before pasting a long label." },
      ],
    },
  ],
  built:
    "Script capitals come from Mathematical Script (U+1D49C–U+1D4B5) plus ℬ ℰ ℱ ℋ ℐ ℒ ℳ ℛ in Letterlike Symbols; bold script from U+1D4D0–U+1D4E9. Fraktur capitals use U+1D504 onward with ℭ ℌ ℑ ℜ ℨ, bold Fraktur U+1D56C–U+1D585, and the outline capitals are double-struck (U+1D538 onward with ℂ ℍ ℕ ℙ ℚ ℝ ℤ).",
  related: {
    heading: "More capital and alphabet pages",
    hrefs: ["/illuminated-letters", "/old-english-alphabet", "/font-generator/calligraphy", "/font-generator/signature", "/different-fonts"],
  },
  faq: [
    { q: "Where can I get free calligraphy capital letters?", a: "From the A–Z chart on this page. Every capital is a free Unicode character you can copy and paste." },
    { q: "How do I copy one calligraphy capital letter?", a: "Tap the letter's cell in the chart. It copies that single character, ready to paste." },
    { q: "What is a calligraphic capital?", a: "A decorated capital written with a calligraphy pen, often larger and more ornate than the letters that follow it." },
    { q: "Why do B, E, F, H, I, L, M and R look different in plain script?", a: "Those eight script capitals live in the older Letterlike Symbols block, so a device may draw them with a different font. The bold script set avoids this." },
    { q: "Can I make a monogram from calligraphy capitals?", a: "Yes. Copy two or three capitals from the chart, or type the names and copy Framed Monogram." },
    { q: "Are there calligraphy capital numbers?", a: "No script or Fraktur digits exist in Unicode. Bold and double-struck digits do, and the outline style uses them." },
    { q: "Which capital letters are best for a drop cap?", a: "Bold Fraktur or bold script, because the heavier strokes still look like a capital when the letter is pasted at normal size." },
  ],
};

export default page;
