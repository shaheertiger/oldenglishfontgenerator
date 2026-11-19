import type { PageContent } from "./types";

const page: PageContent = {
  slug: "gothic-letters",
  title: "Gothic Letters A–Z — Copy & Paste in 14 Styles",
  description:
    "Gothic letters to copy and paste: capital and small blackletter A–Z in 14 styles, plus the real 4th-century Gothic alphabet of Wulfila with all 27 letters.",
  h1: "Gothic Letters",
  crumb: "Gothic Letters",
  intro:
    "Type anything and get it back in 14 sets of gothic letters: capital and small blackletter, bold, framed and worn versions, plus the actual alphabet of the Goths, which looks nothing like blackletter. \"Gothic letters\" means two different things, and this page covers both. Tap Copy on any row; the letters are standard Unicode characters, so they paste into bios, chats, documents and game names.",
  tool: {
    styles: [
      "bold-fraktur", "fraktur", "bold-fraktur-caps", "fraktur-caps", "fraktur-lower", "fraktur-small-caps",
      "gothic-framed", "drop-cap", "distressed", "deco-cross", "frame-block", "fraktur-outline-digits",
      "gothic-wulfila", "runes-futhorc",
    ],
    sample: "Gothic Letters",
    placeholder: "Type a word or a single letter…",
    presets: ["Gothic Letters", "ABCDEFG", "abcdefg", "Raven", "Codex Argenteus"],
  },
  stylesHeading: "Gothic letter sets",
  howTo: {
    heading: "How to copy gothic letters",
    steps: [
      ["Type a letter or a word", "One letter gives you a single gothic initial; a full word shows how the letters sit together."],
      ["Choose capitals or small letters", "The caps rows force every letter to a capital; the lowercase row gives small gothic letters only, which read more easily in long text."],
      ["Copy and paste", "Tap Copy and paste wherever you need it. If you see empty boxes, the app's font lacks those characters; try the plain Fraktur row first."],
    ],
  },
  sections: [
    {
      h2: "Two kinds of gothic letters",
      blocks: [
        { p: "Most people searching for gothic letters want **blackletter**: the dense, angular script of medieval manuscripts and newspaper mastheads, also sold as Old English. The name is an insult that stuck. Italian Renaissance scholars called the northern script \"gothic\" because, to them, it looked barbaric, and the Goths were their shorthand for barbarians. The Goths themselves never wrote it." },
        { p: "The Goths did have an alphabet of their own. In the 4th century, the bishop **Wulfila** (also spelled Ulfilas) devised one to translate the Bible into the Gothic language, borrowing mostly from Greek letters with some Latin and runic shapes. Its best-known survivor is the Codex Argenteus, the 6th-century \"Silver Bible\" written in silver ink on purple parchment and now kept in Uppsala, Sweden. The Gothic Alphabet row in the generator uses those letters." },
        {
          table: {
            head: ["", "Blackletter (\"gothic script\")", "Gothic alphabet (Wulfila)"],
            rows: [
              ["Example", "𝕲𝖔𝖙𝖍𝖎𝖈", "𐌲𐌿𐍄𐌹𐍃𐌺"],
              ["Era", "About the 12th to 16th century, still used for display", "4th century onward"],
              ["Language", "Latin, German, English and others", "Gothic, an extinct East Germanic language"],
              ["Letters", "The Latin alphabet, drawn with a broad pen", "27 letters, two of them used only as numbers"],
              ["Where you'll see it", "Tattoos, diplomas, mastheads, band logos", "Linguistics books, museums, fantasy worldbuilding"],
            ],
            glyphCols: [],
          },
        },
      ],
    },
    {
      h2: "Capital and small gothic letters, A to Z",
      blocks: [
        { p: "Every blackletter capital and small letter, one tap to copy each. Capitals are the ornate part, so a word in all capitals turns into a dark texture that's hard to read; capitalise the first letter and keep the rest small. For a single decorated initial, see [illuminated letters](/illuminated-letters), and for one page per letter with 14 styles each, use the [letter index](/old-english-alphabet)." },
        { widget: "alphabet-full" },
      ],
    },
    {
      h2: "The 27 letters of the Gothic alphabet",
      blocks: [
        { p: "Each letter had a name, mostly words for everyday things, and a number value, as in Greek. This is the mapping the Gothic Alphabet style uses to turn English into Gothic letters. Gothic had no letter for c, v or y, so the generator writes c as 𐌺 (k) and both v and y as 𐍅." },
        {
          table: {
            head: ["Letter", "Name", "Sound", "Number"],
            glyphCols: [0],
            rows: [
              ["𐌰", "ahsa", "a", "1"], ["𐌱", "bairkan", "b", "2"], ["𐌲", "giba", "g", "3"], ["𐌳", "dags", "d", "4"],
              ["𐌴", "aihvus", "e", "5"], ["𐌵", "qairthra", "q (kw)", "6"], ["𐌶", "iuja", "z", "7"], ["𐌷", "hagl", "h", "8"],
              ["𐌸", "thiuth", "th", "9"], ["𐌹", "eis", "i", "10"], ["𐌺", "kusma", "k", "20"], ["𐌻", "lagus", "l", "30"],
              ["𐌼", "manna", "m", "40"], ["𐌽", "nauths", "n", "50"], ["𐌾", "jer", "j (y)", "60"], ["𐌿", "urus", "u", "70"],
              ["𐍀", "pairthra", "p", "80"], ["𐍁", "(no letter)", "number only", "90"], ["𐍂", "raida", "r", "100"], ["𐍃", "sauil", "s", "200"],
              ["𐍄", "teiws", "t", "300"], ["𐍅", "winja", "w", "400"], ["𐍆", "faihu", "f", "500"], ["𐍇", "iggws", "ch (x)", "600"],
              ["𐍈", "hwair", "hw", "700"], ["𐍉", "othal", "o", "800"], ["𐍊", "(no letter)", "number only", "900"],
            ],
          },
        },
        { p: "The letter names are reconstructions from a 9th-century manuscript and from the rune names they resemble, so spellings differ between books. Several match runes almost exactly: faihu and the rune fehu (ᚠ) both mean wealth. For the runes themselves, see the [Viking font generator](/viking-font-generator); for even older scripts, the [ancient font generator](/ancient-font-generator)." },
      ],
    },
    {
      h2: "Which gothic letters should I use?",
      blocks: [
        {
          ul: [
            "**A name or a short title:** Bold Fraktur. It stays readable on small phone screens.",
            "**A long sentence:** the small-letter row, or Fraktur with small caps. Ten words of capitals are tiring to read.",
            "**A single initial:** the framed or drop-cap rows, or a monogram from [Old English letters](/old-english-letters).",
            "**Something that looks truly ancient:** the Gothic Alphabet row. Few people can read it, which is the point.",
            "**Darker decoration:** crosses and worn letters here, or skulls and bats on the [gothic font generator](/gothic-font-generator).",
          ],
        },
      ],
    },
  ],
  built:
    "Blackletter rows use Mathematical Fraktur (U+1D504–U+1D537) and Bold Fraktur (U+1D56C–U+1D59F), with five capitals taken from the Letterlike Symbols block (ℭ ℌ ℑ ℜ ℨ). The Gothic Alphabet row substitutes letters from Unicode's Gothic block (U+10330–U+1034A), added in Unicode 3.1 in 2001; th and hw become single letters first. Fonts that cover that block include Noto Sans Gothic and, on Windows, Segoe UI Historic.",
  related: {
    heading: "More gothic and blackletter tools",
    hrefs: ["/gothic-font-generator", "/old-english-alphabet", "/blackletter-generator", "/fraktur-generator", "/illuminated-letters", "/gothic-symbols", "/medieval-font-generator"],
  },
  faq: [
    { q: "Are gothic letters the same as Old English letters?", a: "In everyday use, yes: both names describe blackletter, the medieval script used in tattoos and mastheads. Strictly speaking, the Gothic alphabet is a separate 4th-century script, and Old English is a language that was mostly written in plain insular letters." },
    { q: "How do I type small gothic letters?", a: "Type in lowercase and copy the Fraktur Lowercase row, or use the Fraktur row, which keeps your capitals as you typed them. Each small letter is its own Unicode character, from 𝔞 to 𝔷." },
    { q: "Why are some gothic capitals a different size from the rest?", a: "Five Fraktur capitals (C, H, I, R and Z) were already in Unicode before the full set, so they come from a different block. Some fonts draw those five slightly larger or lighter." },
    { q: "Can anyone read the Gothic alphabet?", a: "Very few people. It is studied by historical linguists, and the language died out centuries ago. Use it for decoration or worldbuilding, not for a message you need people to read." },
    { q: "Will gothic letters work in my username?", a: "Display names on Instagram, TikTok and Discord usually accept them. Usernames and handles normally allow only plain letters, numbers and a few symbols, so they will reject gothic letters." },
    { q: "Is it gothic or Gothic?", a: "Writers often use lowercase gothic for the blackletter style and the mood, and capital G for the Goths, their language and their alphabet. Either is understood." },
  ],
};

export default page;
