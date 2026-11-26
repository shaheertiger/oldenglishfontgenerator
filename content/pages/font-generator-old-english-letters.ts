import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL, which ranked in Bing (and was cited by
// Copilot for "old english font alphabet") before 00a2b7f. The retired
// /old-english-letters page now 301s here; its monogram notes are merged below.
// The per-letter index stays on /old-english-alphabet.
const page: PageContent = {
  slug: "font-generator/old-english-letters",
  file: "font-generator-old-english-letters",
  title: "Old English Font Alphabet: A–Z Letters to Copy and Paste",
  description:
    "Old English font alphabet: 52 letters plus digits in light and bold blackletter. Tap any letter to copy it, or type a full name. Free, no sign-up.",
  h1: "Old English Font Alphabet",
  crumb: "Old English Letters",
  intro:
    "The Old English font alphabet is the set of 26 blackletter capitals and 26 small letters, and every one of these Old English letters is in the chart below, ready to copy with one tap. If you would rather convert a whole word, type it in the box: the old english alphabet font styles underneath give you light and bold Fraktur, all capitals, all lowercase, initials only, and framed single letters for monograms. Everything here is plain Unicode text, so you can paste it anywhere you can type; whether a character shows depends on the fonts on the reader's device.",
  tool: {
    styles: [
      "fraktur", "bold-fraktur", "fraktur-caps", "bold-fraktur-caps", "fraktur-lower", "illuminated", "drop-cap",
      "monogram", "monogram-framed", "monogram-ampersand", "circled", "boxed", "frame-white", "fraktur-outline-digits",
    ],
    sample: "Old English Letters",
    placeholder: "Type a word, a name or the whole alphabet…",
    presets: ["Old English Letters", "ABCDEFGHIJKLM", "nopqrstuvwxyz", "Amelia Rose", "Sofia & Mateo"],
  },
  stylesHeading: "Old English alphabet styles",
  howTo: {
    heading: "How to use the Old English alphabet",
    steps: [
      ["Pick single letters or a whole word", "For one initial, tap its cell in the chart. For a name or a phrase, type it in the box so every letter converts at once."],
      ["Choose light or bold", "Fraktur has thin hairlines and reads more easily; Bold Fraktur is heavier and closer to a sign-painter's capital."],
      ["Copy and paste", "Press Copy on the style you want. The letters are characters, so they keep their shape wherever you paste them."],
    ],
  },
  sections: [
    {
      h2: "1. How do I copy and paste Old English letters?",
      blocks: [
        { p: "Tap any cell below and that single letter goes to your clipboard. The light Fraktur set comes first, then Bold Fraktur, each with capitals, small letters and the digits 0–9. Unicode has no blackletter numerals, so the digit rows use bold serif figures, which sit comfortably next to the heavy letters." },
        { chart: { styles: ["fraktur", "bold-fraktur"], sets: ["upper", "lower", "digits"] } },
        { p: "Five capitals, ℭ ℌ ℑ ℜ and ℨ, were added to Unicode years before the rest of the alphabet and live in a different block. Some phones draw them from another font, so C, H, I, R and Z can look slightly lighter or narrower than their neighbors. That is normal and nothing is broken. If you want a single letter with every variation (outlined, framed, bubble), each one has its own page in the [Old English alphabet](/old-english-alphabet) index." },
      ],
    },
    {
      h2: "2. What is the Old English font called in Word?",
      blocks: [
        { p: "The blackletter typeface that comes with Microsoft Office is called [Old English Text MT](/fonts/old-english-text-mt). It is a Monotype design (the MT stands for Monotype) and is licensed through Office rather than offered as a free standalone download, so free font sites that host the file are not entitled to give it away." },
        { p: "The letters on this page are something different. They are not a font at all but individual Unicode characters that happen to be shaped like Fraktur. Choose Old English Text MT from the font menu when you are laying out a printed document and want every letter typeset properly; copy from the chart when you are somewhere with no font menu and need a few blackletter letters as text." },
      ],
    },
    {
      h2: "3. Can I write Old English lettering in all capitals?",
      blocks: [
        { p: "You can, and the Fraktur All Capitals styles above do it in one step, but read the result before you commit to it. Blackletter capitals were designed as decorated openings, not as a set to line up side by side, so a whole word in capitals turns into a row of ornaments. A few pairs are especially easy to confuse in most Fraktur designs:" },
        {
          table: {
            head: ["Letters", "Glyphs", "What to watch for"],
            glyphCols: [1],
            rows: [
              ["I and J", "ℑ 𝔍", "Nearly the same shape; J usually drops a little lower."],
              ["C and E", "ℭ 𝔈", "E has a short middle stroke that is easy to miss at small sizes."],
              ["B and V", "𝔅 𝔙", "Both have a rounded bowl on the right."],
              ["n and u", "𝔫 𝔲", "Both are two short vertical strokes; only the joins differ."],
            ],
          },
        },
        { p: "The usual fix is a capital only at the start of each word and small letters after it. For a heading that must be all capitals, the bold weight holds its shape better than the light one." },
      ],
    },
    {
      h2: "4. Initials and monograms from a full name",
      blocks: [
        { p: "Type a full name and the three Monogram styles keep only the first letter of each word. A few traditional conventions are worth knowing before you order anything engraved:" },
        {
          ul: [
            "A single person's three-letter monogram often places the surname initial in the center, larger than the other two: first, LAST, middle. Copied text cannot change one letter's size, so the Framed Monogram style is the closest you can get as text.",
            "A couple before marriage often joins their two first initials with an ampersand, which is what the Couple Monogram style does.",
            "After marriage, many couples put the shared surname initial in the middle with a first-name initial on each side.",
          ],
        },
        { p: "None of this is a rule. A layout that simply looks right to you is fine. To enlarge a center letter, export the text as a picture with the [Old English text to image](/old-english-text-to-image) tool and resize it in any image editor." },
      ],
    },
  ],
  built:
    "Letters come from Mathematical Fraktur (U+1D504–U+1D537) and Mathematical Bold Fraktur (U+1D56C–U+1D59F), with ℭ ℌ ℑ ℜ ℨ taken from Letterlike Symbols (U+212D, U+210C, U+2111, U+211C, U+2128). Digits are Mathematical Bold digits (U+1D7CE–U+1D7D7) because Unicode has no Fraktur numerals; the bubble and boxed styles add the combining enclosing circle U+20DD or square U+20DE after each letter.",
  related: {
    heading: "More Old English letter tools",
    hrefs: ["/old-english-alphabet", "/font-generator/old-english", "/fonts/old-english-text-mt", "/old-english-name-generator", "/font-generator/old-english-tattoo", "/illuminated-letters"],
  },
  faq: [
    { q: "What are Old English letters?", a: "In everyday use the phrase means blackletter: the dense, broken-stroke lettering of medieval manuscripts and early printing. The Old English language itself was written in a different hand with extra letters such as þ and æ; [how to write Old English](/how-to-write-old-english) covers that." },
    { q: "How do I copy one Old English letter?", a: "Tap its cell in the chart above. Each cell copies exactly one character, so you can build an initial or a short word letter by letter." },
    { q: "Why do C, H, I, R and Z look different from the other letters?", a: "Those five capitals sit in Unicode's older Letterlike Symbols block, so your device may draw them from a different font than the rest of the alphabet." },
    { q: "Are there Old English numbers?", a: "Unicode has no blackletter digits. The chart uses bold serif figures instead, and the Fraktur + Outline Numbers style swaps in double-struck digits." },
    { q: "How do I get just my initials in Old English?", a: "Type your full name and use one of the Monogram styles. They pick out the first letter of each word and convert only those." },
    { q: "Can I make a monogram with a bigger middle letter?", a: "Not as copied text, because every character is the same size. Export an image with the text to image tool and enlarge the center letter there." },
    { q: "Why does the bubble style look misaligned?", a: "The circle is a combining mark drawn over the previous letter, and some fonts position it badly over mathematical letters. The framed and boxed styles are steadier." },
    { q: "Which Old English letters font should I use for printing?", a: "For anything printed, install a real blackletter font such as Old English Text MT or a free open-licence lookalike, so the letters stay sharp at any size. The [fonts](/fonts) page lists options." },
    { q: "Is this the same as the Old English alphabet page?", a: "This page is the full copyable chart plus monogram tools. The [Old English alphabet](/old-english-alphabet) page goes letter by letter, with a separate page for each one." },
  ],
};

export default page;
