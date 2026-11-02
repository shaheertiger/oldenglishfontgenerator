import type { PageContent } from "./types";

const page: PageContent = {
  slug: "gothic-symbols",
  title: "Gothic Symbols — Copy & Paste Crosses, Daggers & Skulls",
  description:
    "Gothic symbols to copy and paste: crosses ✠ ☩, daggers † ⸸, pentagrams ⛧, skulls ☠ and manuscript ornaments ❦, with names and Unicode codes.",
  h1: "Gothic Symbols",
  crumb: "Gothic Symbols",
  intro:
    "Gothic symbols are the finishing touch on blackletter text: a Maltese cross before a name, a dagger after a date, a pair of ornate brackets around a username. Tap any symbol below to copy it on its own, or type a name in the generator to see it framed automatically.",
  tool: {
    styles: ["deco-maltese", "deco-cross", "deco-dagger", "deco-pentagram", "deco-skull", "deco-swords", "deco-fleuron", "deco-hedera", "deco-fleur", "deco-crown", "deco-bat", "deco-rose", "frame-lenticular", "frame-white", "frame-tibetan", "tattoo"],
    sample: "Nightshade",
    placeholder: "Type a name to frame it with symbols…",
    presets: ["Nightshade", "Requiem", "Lord Vex", "Saint & Sinner"],
  },
  stylesHeading: "Names framed with gothic symbols",
  howTo: {
    heading: "How to use gothic symbols",
    steps: [
      ["Copy one symbol", "Tap any tile in the symbol chart. Each copies a single character you can paste anywhere."],
      ["Or frame a whole name", "Type a name in the box above and copy one of the framed styles, which places a matching symbol on each side."],
      ["Keep it balanced", "Use the same symbol on both sides, or a matching pair such as ☙ and ❧. One pair usually looks more deliberate than several."],
    ],
  },
  sections: [
    {
      h2: "Symbol chart",
      blocks: [
        { p: "Every symbol here is a standard Unicode character, so it pastes into Instagram, Discord, TikTok and documents. The name and code point appear when you hover or use a screen reader." },
        { widget: "symbols" },
      ],
    },
    {
      h2: "What the symbols mean",
      blocks: [
        { table: {
          head: ["Symbol", "Meaning and typical use"],
          glyphCols: [0],
          rows: [
            ["✠", "The Maltese cross, associated with the Knights Hospitaller. A heraldic, medieval look."],
            ["†", "The dagger, or obelus. In print it marks footnotes; next to a name or year it traditionally indicates a death."],
            ["⛧", "The inverted pentagram, widely used in occult and black metal imagery. It can offend some people, so consider your audience."],
            ["❦", "The hedera or ivy leaf, one of the oldest typographic ornaments, used by scribes to mark paragraphs and fill lines."],
            ["⚜", "The fleur-de-lis, a stylised lily long used in French royal heraldry."],
          ],
        } },
      ],
    },
    {
      h2: "Symbols that may not display everywhere",
      blocks: [
        { p: "Common symbols such as † and ☠ display on almost every device. Rarer ones, like the turned dagger ⸸ and the Javanese brackets ꧁ ꧂, need newer fonts and can show as empty boxes on older phones or some PCs. The emoji in the chart, such as 🦇 and 🥀, are drawn differently on iPhone, Android and Windows. If a symbol matters for a username, check it on a second device before you commit." },
      ],
    },
  ],
  built:
    "Crosses and occult signs come from the Miscellaneous Symbols block (U+2600–U+26FF) and Dingbats (U+2700–U+27BF). Daggers live in General Punctuation, the turned dagger in Supplemental Punctuation, and the brackets come from CJK punctuation, Javanese and Tibetan blocks. The framed name styles use Mathematical Fraktur or Bold Fraktur for the letters.",
  related: {
    heading: "Pair symbols with blackletter text",
    hrefs: ["/gothic-font-generator", "/old-english-font-discord", "/old-english-name-generator", "/medieval-font-generator", "/fonts/gothic", "/old-english-tattoo-font"],
  },
  faq: [
    { q: "How do I type gothic symbols on a keyboard?", a: "Most aren't on a keyboard. Copying them from this page is the quickest way; on Windows you can also use the Character Map, and on a Mac the Character Viewer (Control + Command + Space)." },
    { q: "Can I use gothic symbols in a Discord or Instagram name?", a: "In display names, nicknames and bios, yes. Usernames and handles on both platforms only allow plain letters, numbers and a few punctuation marks." },
    { q: "What does the dagger symbol mean after a name?", a: "In genealogy and old print, † next to a name or year marks a death. Use it thoughtfully in memorial designs." },
    { q: "Why does a symbol show up as a box?", a: "Your device lacks a font with that character. Common symbols are safer than rare ones; updating your system usually helps." },
    { q: "Are these symbols safe for screen readers?", a: "Screen readers announce them by name, such as 'Maltese cross'. A long row of symbols becomes tiring to listen to, so use them sparingly." },
  ],
};

export default page;
