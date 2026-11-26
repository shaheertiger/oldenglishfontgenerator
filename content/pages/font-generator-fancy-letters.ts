import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL, which ranked in Bing before the
// rebuild removed it. Also absorbs /font-generator/cool-letters (301 here).
const page: PageContent = {
  slug: "font-generator/fancy-letters",
  file: "font-generator-fancy-letters",
  title: "Fancy Letters Alphabet – A to Z in 4 Styles, Copy and Paste",
  description:
    "Fancy letters alphabet: A–Z and a–z in script, bold script, gothic and outline, plus 16 styles for names. Tap a letter to copy it. Free, no sign-up.",
  h1: "Fancy Letters Alphabet",
  crumb: "Fancy Letters",
  intro:
    "The fancy letters alphabet is the ordinary A to Z swapped for decorative Unicode look-alikes, and the chart below gives you every capital and lowercase letter in four of them, each one a tap to copy. Use it as a fancy alphabet letters sheet when you only need a single initial, or type a whole name into the box to get it in 16 fancy letter alphabet styles at once. Because each glyph is a real character rather than an image, these are copy paste letters: they go wherever you can type text.",
  tool: {
    styles: [
      "script", "bold-script", "fraktur", "bold-fraktur", "oe-cursive", "illuminated",
      "roman-initial-italic", "italic-serif", "bold-italic-serif", "u-double-struck", "u-bubble",
      "u-cursive-bold-spaced", "u-cursive-underline", "deco-stars", "deco-heart", "frame-tibetan",
    ],
    sample: "Fancy Letters",
    placeholder: "Type a name or a few letters…",
    presets: ["Fancy Letters", "ABC", "Olivia", "J & M", "Good Vibes"],
  },
  stylesHeading: "16 fancy letter styles",
  howTo: {
    heading: "How to copy fancy letters",
    steps: [
      ["Pick the letters", "For one character, find it in the A–Z chart. For a word or a name, type it into the box at the top."],
      ["Tap to copy", "Each chart cell copies exactly one fancy letter. In the generator, Copy takes the whole line in that style."],
      ["Paste it in", "Paste into a bio, a caption, a card or a document. Mix one fancy capital with plain lowercase if you want it easy to read."],
    ],
  },
  sections: [
    {
      h2: "The full fancy letters alphabet, A to Z",
      blocks: [
        { p: "Four alphabets, capitals first and then lowercase. Script is the classic looping copperplate hand; Bold Script is the same shapes with a heavy pen; Bold Fraktur is the blackletter look of old German printing; Outline, also called double-struck, has a hollow stem on every letter. Tap any cell to copy that one letter." },
        { chart: { styles: ["script", "bold-script", "bold-fraktur", "u-double-struck"], sets: ["upper", "lower"] } },
        { p: "Need numbers too? Only some styles have them. The outline set below includes every digit from 0 to 9, which suits a birth year, a jersey number or a date next to a fancy name." },
        { chart: { styles: ["u-double-struck"], sets: ["digits"] } },
        { p: "Looking for one character in dozens of styles instead? The [letters in different fonts](/different-fonts) pages give each letter, such as [A](/different-fonts/a), its own page." },
      ],
    },
    {
      h2: "1. How do you type fancy letters?",
      blocks: [
        { p: "A keyboard has no key for 𝒜 or 𝕬, so you don't type them directly; you generate them and paste. Type your text into the box above and every style on the list converts it as you go. Then press Copy on the version you like. On a phone, the copied text stays in the clipboard until you paste it, so you can switch apps freely in between." },
        { ul: [
          "One letter only: tap it in the chart. Nothing else gets copied, not even a space.",
          "A full word: type it, then copy the whole result. Numbers and punctuation pass through unchanged in styles that have no fancy version of them.",
          "Mixed looks: copy a capital from one alphabet and the rest from another, for example an illuminated 𝕺 followed by script lowercase.",
        ] },
      ],
    },
    {
      h2: "2. What are the best fancy capital letters?",
      blocks: [
        { p: "Fancy capital letters carry most of the decoration, which is why one decorative initial often looks better than a whole word in a heavy style. Here is how the capitals in each alphabet differ:" },
        {
          table: {
            head: ["Style", "Sample capitals", "Character"],
            glyphCols: [1],
            rows: [
              ["Script", "𝒜 ℬ 𝒞 𝒟 ℰ", "Loops and swashes; the most elegant for a monogram"],
              ["Bold Script", "𝓐 𝓑 𝓒 𝓓 𝓔", "Thicker strokes that stay legible at small sizes"],
              ["Bold Fraktur", "𝕬 𝕭 𝕮 𝕯 𝕰", "Gothic, formal, a little dramatic"],
              ["Fraktur", "𝔄 𝔅 ℭ 𝔇 𝔈", "Lighter blackletter, closer to old book type"],
              ["Outline", "𝔸 𝔹 ℂ 𝔻 𝔼", "Hollow stems, clean and modern"],
              ["Bubble", "Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ", "Each letter in a ring; playful rather than formal"],
            ],
          },
        },
        { p: "Some fancy capitals, such as ℬ, ℰ and ℌ, come from an older Unicode block than the rest of their alphabet, so on some devices they can look a touch different in weight. For gothic capitals specifically, the [Old English alphabet](/old-english-alphabet) has every letter in Fraktur." },
      ],
    },
    {
      h2: "3. What are cool letters for names?",
      blocks: [
        { p: "Cool letters for names are mostly about restraint. A name is short, so it can carry a stronger style than a sentence can, but the reader still has to recognize it. A few combinations that hold up:" },
        { ul: [
          "Bold Script for a first name, such as 𝓞𝓵𝓲𝓿𝓲𝓪. It reads at a glance and still looks handwritten.",
          "Illuminated Initials for a surname: a heavy blackletter capital followed by lighter Fraktur.",
          "Spaced Bold Cursive for a short name or nickname that should look airy, like 𝓙 𝓪 𝔂.",
          "Outline capitals for initials only, for example 𝕁.𝕄.",
          "A frame or star wrap around a plain style when the name itself should stay simple.",
        ] },
        { p: "If you want lettering that looks pen-made rather than typeset, the [fancy writing](/font-generator/fancy-writing) generator leans on script and calligraphy styles, and the [calligraphy capital letters](/font-generator/calligraphy-capital-letters) page focuses on decorative initials." },
      ],
    },
  ],
  built:
    "Script and Bold Script come from Unicode's Mathematical Alphanumeric Symbols block (U+1D400–U+1D7FF), with gaps filled by Letterlike Symbols such as ℬ and ℯ; Fraktur and Outline come from the same block; Bubble uses Enclosed Alphanumerics (Ⓐ–ⓩ, ①–⑨).",
  related: {
    heading: "More letter tools",
    hrefs: ["/different-fonts", "/font-generator/fancy-writing", "/font-generator/calligraphy-capital-letters", "/old-english-alphabet", "/font-generator/gothic-letters", "/font-generator/font-converter"],
  },
  faq: [
    { q: "How do I copy and paste fancy letters?", a: "Tap a letter in the A–Z chart to copy just that one, or type a word in the box and press Copy next to a style. Then paste it like any other text." },
    { q: "Where can I get the fancy alphabet A to Z?", a: "The chart on this page lists A–Z and a–z in Script, Bold Script, Bold Fraktur and Outline, with outline digits 0–9 below it." },
    { q: "What are fancy letters called?", a: "There's no single name. In Unicode they are mostly Mathematical Alphanumeric Symbols, styled copies of the Latin alphabet originally added for math notation." },
    { q: "How do I make fancy capital letters?", a: "Type your text in capitals, or copy single capitals from the chart. Script and Bold Fraktur have the most decorative capitals." },
    { q: "Are these cool letters to copy and paste free?", a: "Yes. They are standard Unicode characters, so there is nothing to buy or install, and the conversion runs in your browser." },
    { q: "Why do some fancy letters show as boxes?", a: "The reader's device has no font containing that character. It is plain Unicode text, so you can paste it anywhere you can type; whether a character shows depends on the fonts on the reader's device." },
    { q: "Can I use fancy letters for a name?", a: "Yes, for display purposes. Pick a style that keeps the name recognizable, such as Bold Script or a single decorative initial." },
    { q: "Why aren't numbers fancy in every style?", a: "Unicode only has styled digits for some alphabets, like Outline and Bold. Script and Fraktur have no digits of their own, so numbers stay plain." },
    { q: "Are fancy letters a font?", a: "No. A font changes how existing letters are drawn; these are different characters. That's why they keep their look after you paste them." },
  ],
};

export default page;
