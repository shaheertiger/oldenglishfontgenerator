import type { PageContent } from "./types";

// The A–Z table below was generated from the code points (U+1D56C + n for
// capitals, U+1D586 + n for lowercase), not typed by hand.
const page: PageContent = {
  slug: "bold-fraktur",
  title: "Bold Fraktur Font — Copy & Paste All 52 Letters",
  description:
    "Bold Fraktur font copy and paste: all 52 heavy blackletter letters with code points, plus 12 bold styles that convert your text instantly. Free.",
  h1: "Bold Fraktur Font",
  crumb: "Bold Fraktur Alphabet",
  intro:
    "Bold Fraktur is 52 Unicode letters, 26 capitals and 26 lowercase, sitting in one unbroken run from U+1D56C to U+1D59F. Type below to turn any text into it, or copy single letters from the full table further down. Every result is plain text, so it pastes into bios, captions, documents and chats without installing anything.",
  tool: {
    styles: [
      "bold-fraktur", "bold-fraktur-caps", "bold-fraktur-small-caps", "bold-cursive", "illuminated", "wide-bold",
      "bold-underline", "bold-strike", "gothic-framed", "boxed", "alternating", "slashed",
    ],
    sample: "Heavy Blackletter",
    placeholder: "Type text to make it Bold Fraktur…",
    presets: ["Heavy Blackletter", "Est. 1994", "Ink & Iron", "Brotherhood", "Midnight Mass"],
  },
  stylesHeading: "Bold Fraktur styles",
  howTo: {
    heading: "How to type in Bold Fraktur",
    steps: [
      ["Enter your words", "Use normal letters on your keyboard. Capitals stay capitals, so write it the way you want it to read."],
      ["Pick a weight treatment", "Plain Bold Fraktur is the classic. Small Caps and the cursive hybrid soften it when a line feels too heavy."],
      ["Copy and paste", "Tap Copy, then paste wherever text is accepted. The letters travel as characters, not as a picture."],
    ],
  },
  sections: [
    {
      h2: "What does every Bold Fraktur letter look like?",
      blocks: [
        { p: "Tap a cell to select a single glyph. The code point column is useful if you build symbols into a spreadsheet formula, an HTML entity (&#x1D56C; gives 𝕬) or a keyboard shortcut." },
        {
          table: {
            head: ["Letter", "Capital", "Code point", "Lowercase", "Code point"],
            glyphCols: [1, 3],
            rows: [
          ["A", "𝕬", "U+1D56C", "𝖆", "U+1D586"],
          ["B", "𝕭", "U+1D56D", "𝖇", "U+1D587"],
          ["C", "𝕮", "U+1D56E", "𝖈", "U+1D588"],
          ["D", "𝕯", "U+1D56F", "𝖉", "U+1D589"],
          ["E", "𝕰", "U+1D570", "𝖊", "U+1D58A"],
          ["F", "𝕱", "U+1D571", "𝖋", "U+1D58B"],
          ["G", "𝕲", "U+1D572", "𝖌", "U+1D58C"],
          ["H", "𝕳", "U+1D573", "𝖍", "U+1D58D"],
          ["I", "𝕴", "U+1D574", "𝖎", "U+1D58E"],
          ["J", "𝕵", "U+1D575", "𝖏", "U+1D58F"],
          ["K", "𝕶", "U+1D576", "𝖐", "U+1D590"],
          ["L", "𝕷", "U+1D577", "𝖑", "U+1D591"],
          ["M", "𝕸", "U+1D578", "𝖒", "U+1D592"],
          ["N", "𝕹", "U+1D579", "𝖓", "U+1D593"],
          ["O", "𝕺", "U+1D57A", "𝖔", "U+1D594"],
          ["P", "𝕻", "U+1D57B", "𝖕", "U+1D595"],
          ["Q", "𝕼", "U+1D57C", "𝖖", "U+1D596"],
          ["R", "𝕽", "U+1D57D", "𝖗", "U+1D597"],
          ["S", "𝕾", "U+1D57E", "𝖘", "U+1D598"],
          ["T", "𝕿", "U+1D57F", "𝖙", "U+1D599"],
          ["U", "𝖀", "U+1D580", "𝖚", "U+1D59A"],
          ["V", "𝖁", "U+1D581", "𝖛", "U+1D59B"],
          ["W", "𝖂", "U+1D582", "𝖜", "U+1D59C"],
          ["X", "𝖃", "U+1D583", "𝖝", "U+1D59D"],
          ["Y", "𝖄", "U+1D584", "𝖞", "U+1D59E"],
          ["Z", "𝖅", "U+1D585", "𝖟", "U+1D59F"],
            ],
          },
        },
      ],
    },
    {
      h2: "How is Bold Fraktur different from regular Fraktur?",
      blocks: [
        {
          table: {
            head: ["", "Bold Fraktur", "Regular Fraktur"],
            rows: [
              ["Unicode range", "U+1D56C–U+1D59F", "U+1D504–U+1D537"],
              ["Gaps in the range", "None: all 52 letters are present", "5 capitals missing (C, H, I, R, Z)"],
              ["Where the missing letters live", "Not applicable", "Letterlike Symbols block: ℭ ℌ ℑ ℜ ℨ"],
              ["Consistency across fonts", "High, every letter comes from the same block", "Lower, the five borrowed capitals can come from a different font on your phone"],
              ["Stroke weight", "Heavy, good for one or two words", "Light, better for longer lines"],
            ],
          },
        },
        { p: "That missing-letter quirk is the practical reason many people prefer the bold set: a name like Charlie or Rachel looks even in Bold Fraktur, while in the light version the C or R can look slightly out of place. If you need the lighter look, umlauts or the long s, the [Fraktur generator](/fraktur-generator) covers those." },
      ],
    },
    {
      h2: "What about numbers and punctuation?",
      blocks: [
        { p: "Unicode never added Fraktur digits, light or bold. The styles above swap 0–9 for Mathematical Bold digits (U+1D7CE–U+1D7D7), which sit well next to heavy blackletter. Punctuation such as full stops, commas and ampersands stays as ordinary characters. For dates, the [Old English numbers](/old-english-numbers) page shows Roman numeral options." },
      ],
    },
    {
      h2: "Where does Bold Fraktur work, and where should you use a real font?",
      blocks: [
        {
          ul: [
            "**Works well:** profile names, short captions, gaming tags, chat nicknames and headings in apps with no font menu.",
            "**Works, with care:** long posts. Screen readers may spell each letter out, so keep the bold text to a line.",
            "**Use a font file instead:** print, logos, vinyl cutting and anything that must scale. [UnifrakturCook](/fonts/unifrakturcook) is a free, heavy Fraktur with a similar weight, and the [Old English fonts](/fonts/old-english) page lists more.",
          ],
        },
      ],
    },
  ],
  built:
    "Every style here starts from Mathematical Bold Fraktur (U+1D56C–U+1D59F), introduced with the Mathematical Alphanumeric Symbols block in Unicode 3.1. Digits come from Mathematical Bold (U+1D7CE–U+1D7D7); the underline, strike and slash styles add combining marks after each letter.",
  related: {
    heading: "More blackletter tools",
    hrefs: ["/fraktur-generator", "/old-english-alphabet", "/gothic-font-generator", "/old-english-numbers", "/old-english-letters", "/old-english-text-to-image"],
  },
  faq: [
    { q: "How do I copy Bold Fraktur letters?", a: "Type your text in the box and press Copy on the Bold Fraktur row, or tap a single letter in the table. Either way you get Unicode characters that paste as text." },
    { q: "What is the Unicode range for Bold Fraktur?", a: "U+1D56C to U+1D59F. Capitals run from U+1D56C (𝕬) to U+1D585 (𝖅), lowercase from U+1D586 (𝖆) to U+1D59F (𝖟)." },
    { q: "Why do some Fraktur names look uneven but Bold Fraktur doesn't?", a: "Regular Fraktur borrows five capitals (C, H, I, R and Z) from an older Unicode block, so they may render in a different font. Bold Fraktur has all 52 letters in one block." },
    { q: "Are there Bold Fraktur numbers?", a: "No. Unicode has no Fraktur digits in any weight, so the generator substitutes mathematical bold digits, which match the weight." },
    { q: "Is Bold Fraktur the same as Old English?", a: "In everyday use, yes: most people calling a heavy blackletter style Old English mean something that looks like this. Technically Fraktur is one branch of the blackletter family." },
    { q: "Can I use Bold Fraktur in Word or Google Docs?", a: "You can paste it, but it's better to install a real blackletter font for documents. The text stays editable and prints sharper." },
    { q: "Does Bold Fraktur show on every phone?", a: "Current iPhone, Android, Windows and macOS versions display it. Very old systems may show empty boxes." },
  ],
};

export default page;
