import type { PageContent } from "./types";

// Restored Nov 2026 at /symbols, the URL Bing ranked before commit 00a2b7f.
// It also absorbs the old /gothic-symbols page (now a 301 to here): the gothic
// symbol grid stays the first section because "gothic symbols copy and paste"
// is what people search for when they land on this URL.
const cp = (s: string) => [...s].map((c) => "U+" + c.codePointAt(0)!.toString(16).toUpperCase().padStart(4, "0")).join(" ");

const MEANINGS: [string, string, string][] = [
  ["✠", "Maltese cross", "The eight-pointed cross of the Knights Hospitaller. Gives a heraldic, crusader-era feel before a name."],
  ["☩", "Cross of Jerusalem", "A cross with smaller crosses in its four corners, common on medieval seals and pilgrim badges."],
  ["†", "Dagger (obelus)", "A printer's footnote mark. Beside a name or year it traditionally marks a death, so it suits memorial lines."],
  ["⸸", "Turned dagger", "An upside-down dagger, used in black metal artwork and occult designs."],
  ["⛧", "Inverted pentagram", "A five-pointed star with one point down, tied to occult and metal imagery. Some readers find it offensive."],
  ["☠", "Skull and crossbones", "The classic warning and pirate sign; in goth bios it reads as memento mori, a reminder of death."],
  ["❦", "Hedera (ivy leaf)", "One of the oldest typographic ornaments. Scribes used it to mark paragraphs and fill the end of a line."],
  ["⚜", "Fleur-de-lis", "A stylized lily from French royal heraldry. Pairs well with blackletter names and crests."],
  ["☙", "Reversed rotated floral heart", "The left half of a matching pair; close a phrase with ❧ to make a printed-book divider."],
];

const page: PageContent = {
  slug: "symbols",
  title: "Gothic Symbols Copy and Paste – 43 Crosses, Skulls & More",
  description:
    "Gothic symbols to copy and paste: 43 crosses, daggers, skulls, ornaments and brackets, plus Greek, alchemy, number and arrow sets. Tap to copy. Free.",
  h1: "Gothic Symbols Copy and Paste",
  crumb: "Symbols",
  intro:
    "Gothic symbols are Unicode characters such as the Maltese cross ✠, the dagger †, the skull ☠ and the ivy leaf ❦, and this page is gothic symbols copy and paste for 43 of them, one tap each. The chart of gothic symbols comes first, sorted into crosses, daggers, occult signs, mourning symbols, manuscript ornaments and frames, so the goth symbols you want are easy to find. If you only need gothic symbols to copy around a name, type the name in the box and pick a framed version. Further down are separate sets for Greek letters, alchemy signs, number styles, brackets and arrows.",
  tool: {
    styles: [
      "deco-maltese", "deco-cross", "deco-dagger", "deco-pentagram", "deco-skull", "deco-swords",
      "deco-fleuron", "deco-hedera", "deco-fleur", "deco-crown", "deco-bat", "deco-rose", "deco-candle",
      "frame-lenticular", "frame-white", "frame-corner", "frame-tibetan",
    ],
    sample: "Nightshade",
    placeholder: "Type a name to frame it with gothic symbols…",
    presets: ["Nightshade", "Requiem", "Lord Vex", "Saint & Sinner"],
  },
  stylesHeading: "Names framed with gothic symbols",
  howTo: {
    heading: "How to use gothic symbols",
    steps: [
      ["Pick a single symbol", "Tap a tile in the gothic symbols chart. You get one character, ready to paste wherever you are typing."],
      ["Or frame a whole name", "Type a name in the box and copy a framed version: the letters turn into blackletter and a matching symbol sits on each side."],
      ["Keep the frame balanced", "Use the same symbol on both sides, or a true pair such as ☙ and ❧. One pair looks deliberate; five in a row looks like noise."],
    ],
  },
  sections: [
    {
      h2: "Gothic symbols",
      blocks: [
        { p: "All 43 symbols are ordinary Unicode characters, grouped the way people tend to look for them. Hover a tile or use a screen reader to hear its name and code point." },
        { widget: "symbols" },
      ],
    },
    {
      h2: "1. What do the most popular gothic symbols mean?",
      blocks: [
        {
          table: {
            head: ["Symbol", "Name", "Code point", "Meaning and typical use"],
            glyphCols: [0],
            rows: MEANINGS.map(([g, n, m]) => [g, n, cp(g), m]),
          },
        },
        { p: "For a profile picture caption or a bio, two or three of these are plenty: a cross or dagger on each side of a name, or a single ❦ to separate lines. The [gothic letters](/font-generator/gothic-letters) page covers the blackletter alphabet that usually sits between them." },
      ],
    },
    {
      h2: "More symbol sets to copy",
      blocks: [
        { p: "Each set below has its own page with a full table, names and Unicode code points:" },
        {
          ul: [
            "[Greek letters copy and paste](/symbols/greek): all 24 letters, capital and small, from alpha to omega.",
            "[Alchemy symbols copy and paste](/symbols/alchemy): the four elements, the seven planetary metals, and process signs from the Alchemical Symbols block.",
            "[Number symbols copy and paste](/symbols/numbers): circled, parenthesized, Roman, superscript, subscript, fraction and double-struck digits.",
            "[Brackets copy and paste](/symbols/brackets): lenticular 【】, corner 「」, white square ⟦⟧, angle 《》 and ornament brackets.",
            "[Up arrow copy and paste](/symbols/up-arrow): ↑ ⬆ ⇧ ⇑ ⤴ and dozens more, with names.",
            "[Down arrow copy and paste](/symbols/down-arrow): ↓ ⬇ ⇩ ⇓ ⤵ and the rest of the downward family.",
          ],
        },
      ],
    },
    {
      h2: "2. Why do some gothic symbols show as boxes?",
      blocks: [
        { p: "A symbol is just a number until a font draws it. Old staples such as † and ☠ are in nearly every system font, but the turned dagger ⸸ and the Javanese brackets ꧁ ꧂ need newer fonts, and the reader may see an empty box instead. Emoji in the chart, like 🦇 and 🥀, are drawn differently by each vendor. If a symbol matters, for example in a display name you plan to keep, look at it on a second device before you settle on it." },
      ],
    },
  ],
  built:
    "Crosses, the skull and the pentagrams come from Miscellaneous Symbols (U+2600–U+26FF) and Dingbats (U+2700–U+27BF); the daggers are in General Punctuation and Supplemental Punctuation; frames use CJK punctuation, Javanese and Tibetan characters. Framed names set the letters in Mathematical Fraktur or Bold Fraktur (U+1D504–U+1D59F).",
  related: {
    heading: "Pair symbols with blackletter text",
    hrefs: ["/font-generator/gothic-letters", "/", "/old-english-name-generator", "/horror-font-generator", "/font-generator/satanic", "/illuminated-letters"],
  },
  faq: [
    { q: "How do I copy and paste gothic symbols?", a: "Tap a symbol in the chart and it is copied to your clipboard. Paste it like any text. To get a whole name framed with symbols, type it in the box and press Copy on a framed style." },
    { q: "What are goth symbols called?", a: "There is no single name. The usual set is crosses (✠ ☩ ✝), daggers († ⸸), pentagrams (⛧), the skull (☠), moons (☽ ☾) and manuscript ornaments such as ❦ and ⚜." },
    { q: "How do I type gothic symbols on a keyboard?", a: "Most are not on any keyboard. Copying them is quickest; on Windows the Character Map and on a Mac the Character Viewer (Control + Command + Space) also list them." },
    { q: "What does a dagger † after a name mean?", a: "In genealogy and old print, † beside a name or year marks a death. Use it with care in names of living people." },
    { q: "Is the inverted pentagram ⛧ a satanic symbol?", a: "It is widely used in Satanist and occult imagery and in black metal artwork, so many readers take it that way. Consider your audience before you use it." },
    { q: "What gothic symbols are good for a pfp or bio?", a: "Pick one pair and repeat it: ✠ Name ✠, † Name †, or ☙ Name ❧. A single ❦ also makes a neat line divider." },
    { q: "Are gothic symbols a font?", a: "No. Each one is a separate Unicode character, so it keeps its shape when pasted, as long as the reader's device has a font that includes it." },
    { q: "Where are the gothic symbols that used to be on /gothic-symbols?", a: "They are here now. The old address forwards to this page, and the full chart is the first section above." },
  ],
};

export default page;
