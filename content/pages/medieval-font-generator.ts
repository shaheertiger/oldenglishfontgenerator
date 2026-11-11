import type { PageContent } from "./types";

const page: PageContent = {
  slug: "medieval-font-generator",
  title: "Medieval Font Generator — Manuscript Text Copy & Paste",
  description:
    "Medieval text generator with manuscript touches: thorn, long s, word dots, fleurons and illuminated capitals. Copy and paste for games and posts.",
  h1: "Medieval Font Generator",
  crumb: "Medieval Font Generator",
  intro:
    "A medieval font generator should feel like a page from a manuscript, not just a heavy typeface. Besides blackletter letters, the styles here bring in details a scribe would recognise: the thorn letter þ, the long s, raised dots between words, leaf-shaped fleurons and a dark illuminated capital at the start of a line.",
  tool: {
    styles: ["thorn", "illuminated", "long-s", "interpunct", "word-dots", "deco-fleuron", "deco-hedera", "drop-cap", "deco-maltese", "frame-lenticular", "fraktur", "deco-swords", "overline", "frame-white"],
    sample: "Here beginneth the tale",
    placeholder: "Type a title, quest name or proclamation…",
    presets: ["Here beginneth the tale", "The Kingdom of Aethelwold", "Hear ye, hear ye", "Thou shalt not pass"],
  },
  stylesHeading: "Manuscript-style text",
  howTo: {
    heading: "How to give text a manuscript feel",
    steps: [
      ["Write in an old voice", "Words like thee, thou and beginneth help as much as the letters. The thorn style turns every th into þ."],
      ["Add one ornament", "A fleuron ☙ or hedera ❦ at each end frames a heading the way scribes marked sections."],
      ["Copy into your project", "Use it for tabletop campaign notes, fantasy game names, event posters drafts or a themed caption."],
    ],
  },
  sections: [
    {
      h2: "Letters scribes used that we lost",
      blocks: [
        {
          table: {
            head: ["Character", "Name", "Used for"],
            glyphCols: [0],
            rows: [
              ["þ Þ", "Thorn", "The th sound. Printers later swapped it for y, which is where ye olde comes from."],
              ["æ Æ", "Ash", "A vowel between a and e in early English."],
              ["ſ", "Long s", "S at the start or middle of a word, in use until around 1800."],
              ["·", "Interpunct", "A raised dot used to separate words in some medieval and older inscriptions."],
              ["☙ ❧", "Fleuron", "Leaf ornaments that mark a new section or fill out a line."],
            ],
          },
        },
        { p: "The ye in ye olde shoppe was always pronounced the. The y was simply the closest letter printers had to þ." },
      ],
    },
    {
      h2: "Illuminated capitals",
      blocks: [
        { p: "In illuminated manuscripts, the first letter of a chapter was painted large, often in red, blue or gold, sometimes with a whole scene inside it. Text alone can't do colour or size, but the Illuminated Initials style gets the rhythm: a bold capital at the start of each word, with lighter letters after it. The Framed Drop Cap style isolates just the very first letter, the way a manuscript page opens." },
      ],
    },
    {
      h2: "Good uses for medieval text",
      blocks: [
        { ul: ["Dungeons & Dragons handouts, quest titles and tavern signs.", "Server and channel names for fantasy or historical gaming groups.", "Renaissance fair and reenactment event announcements.", "Posts about history, castles, folklore or fantasy books."] },
      ],
    },
  ],
  built:
    "Base letters come from Mathematical Fraktur and Bold Fraktur. Thorn (U+00FE, U+00DE), ash (U+00E6, U+00C6) and long s (U+017F) are ordinary Latin characters that stay unconverted, since Unicode has no Fraktur versions of them. Fleurons are U+2619 and U+2767, and the hedera is U+2766 from the Dingbats block.",
  related: {
    heading: "More medieval and blackletter tools",
    hrefs: ["/blackletter-generator", "/fraktur-generator", "/gothic-font-generator", "/old-english-letters", "/old-english-alphabet", "/old-english-text-to-image", "/illuminated-letters"],
  },
  faq: [
    { q: "Does this translate modern English into medieval English?", a: "No. It changes the appearance of letters and can swap th for þ, but the words stay as you typed them." },
    { q: "Why is þ not in blackletter style?", a: "Unicode has no Fraktur thorn, so the normal þ is used. It looks close enough next to Fraktur letters." },
    { q: "Was the long s really used everywhere?", a: "In English and many European languages, yes, from medieval times until the late 18th century, when printers dropped it." },
    { q: "Can I use these in a game?", a: "Many games allow these characters in chat or guild names but not in character names. Check the game's rules or test in a private message first." },
    { q: "What font did medieval scribes use?", a: "They wrote by hand in various scripts, the formal one being textura. Fonts in the modern sense only arrived with printing." },
  ],
};

export default page;
