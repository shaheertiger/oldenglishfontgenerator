import type { PageContent } from "./types";

const page: PageContent = {
  slug: "font-generator/medieval",
  file: "medieval-font-generator",
  title: "Medieval Font Generator – Copy & Paste Medieval Text",
  description:
    "Medieval font generator: turn text into blackletter, illuminated capitals and manuscript styles. Copy and paste into games, Discord, bios and posts. Free.",
  h1: "Medieval Font Generator",
  crumb: "Medieval Font Generator",
  intro:
    "Type below and copy your text in medieval lettering: classic blackletter first, then manuscript styles. A medieval font generator should feel like a page from a manuscript, not just a heavy typeface. Besides blackletter letters, the styles here bring in details a scribe would recognise: the thorn letter þ, the long s, raised dots between words, leaf-shaped fleurons and a dark illuminated capital at the start of a line.",
  tool: {
    styles: ["fraktur", "bold-fraktur", "illuminated", "fraktur-small-caps", "thorn", "long-s", "interpunct", "word-dots", "deco-fleuron", "deco-hedera", "drop-cap", "deco-maltese", "frame-lenticular", "deco-swords", "deco-crown", "gothic-framed", "frame-white"],
    sample: "Here beginneth the tale",
    placeholder: "Type a title, quest name or proclamation…",
    presets: ["Here beginneth the tale", "The Kingdom of Aethelwold", "Hear ye, hear ye", "Thou shalt not pass"],
  },
  stylesHeading: "Medieval Text Styles",
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
    hrefs: ["/font-generator/blackletter", "/font-generator/fraktur", "/font-generator/gothic-letters", "/font-generator/old-english-letters", "/old-english-alphabet", "/old-english-text-to-image", "/illuminated-letters", "/ancient-font-generator"],
  },
  faq: [
    { q: "Does this translate modern English into medieval English?", a: "No. It changes the appearance of letters and can swap th for þ, but the words stay as you typed them. For thee-and-thou wording, use the [medieval translator](/medieval-translator)." },
    { q: "Why is þ not in blackletter style?", a: "Unicode has no Fraktur thorn, so the normal þ is used. It looks close enough next to Fraktur letters." },
    { q: "Was the long s really used everywhere?", a: "In English and many European languages, yes, from medieval times until the late 18th century, when printers dropped it." },
    { q: "Can I use these in a game?", a: "Each game sets its own rules for names and chat, and some strip special characters. Test it in a private message first." },
    { q: "How do I copy and paste a medieval font?", a: "Type your text in the box, tap Copy on the style you like and paste it. The letters are Unicode characters, so no font needs installing." },
    { q: "What is the medieval font called?", a: "Most people mean blackletter, also called gothic script or textura; the Germans called their version Fraktur. On a computer, the best-known installed font of this kind is Old English Text MT." },
    { q: "How do I get a medieval font in Word?", a: "Pasted text is fine for a heading; for a whole document, install a blackletter font and choose it from the font menu. [Old English Text MT](/fonts/old-english-text-mt) explains the options." },
    { q: "How do I type in medieval writing?", a: "Type normally in the box above; the generator swaps each letter for its medieval form, and some styles add þ (thorn) and the long s (ſ) for an older spelling." },
    { q: "What does medieval script look like?", a: "Tall, narrow, angular letters with thick vertical strokes and diamond-shaped feet, packed closely so a page looks like woven texture." },
    { q: "What font did medieval scribes use?", a: "They wrote by hand in various scripts, the formal one being textura. Fonts in the modern sense only arrived with printing." },
  ],
};

export default page;
