import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL, which ranked in Bing before 00a2b7f.
// Angle: horror/occult-look gothic text for fiction, games, Halloween and band
// art. Decorative only; no real-world hate symbols.
const page: PageContent = {
  slug: "font-generator/satanic",
  file: "font-generator-satanic",
  title: "Satanic Font Generator: 14 Demonic Gothic Text Styles",
  description:
    "Satanic font generator: 14 demonic gothic styles, from pentagram frames to cursed, slashed and upside-down text. Type, tap Copy, paste. Free.",
  h1: "Satanic Font Generator",
  crumb: "Satanic",
  intro:
    "A satanic font generator dresses your words in the look of a horror-film title or a black metal cover, and this one has 14 styles to copy: pentagram and skull frames, slashed and struck-through blackletter, worn and cursed letters, and text flipped upside down. Searches for a demon font or a cursed text generator in Old English usually want exactly this mix of gothic letters and damage. It is all decoration: plain Unicode text you can paste anywhere you can type, though whether a character shows depends on the fonts on the reader's device.",
  tool: {
    styles: [
      "deco-pentagram", "cursed", "distressed", "upside-down", "reversed", "deco-skull", "deco-bat",
      "deco-dagger", "slashed", "bold-strike", "u-cursed-gothic", "u-zalgo", "u-dark-gothic", "deco-candle",
    ],
    sample: "Hail the Dark Lord",
    placeholder: "Name your demon, coven or cursed tome…",
    presets: ["Hail the Dark Lord", "Abandon All Hope", "Necronomicon", "The Ninth Circle", "Coven of Night"],
  },
  stylesHeading: "Demonic gothic styles",
  howTo: {
    heading: "How to make demonic text",
    steps: [
      ["Start with blackletter", "Most of these styles are built on Bold Fraktur, which already reads as old and ominous."],
      ["Add damage or a symbol", "Choose worn, slashed or cursed letters, or frame the words with a pentagram, skull, dagger or bat."],
      ["Test the readability", "Heavy effects can make a name unreadable. Paste it into a draft first and make sure people can still tell what it says."],
    ],
  },
  sections: [
    {
      h2: "1. How do you make text look demonic?",
      blocks: [
        { p: "Horror lettering usually combines three things. The base is blackletter, because centuries of church manuscripts and occult book covers have tied those pointed shapes to anything ancient and forbidden. On top comes damage: letters that look scratched, cut or melting. Finally, a symbol frames the words, such as an inverted star, a skull or a candle." },
        { p: "The styles above are built in that order. The light Cursed and Distressed versions add one or a few marks to each letter and stay inside the line. Zalgo and Cursed Gothic pile many marks above and below each letter and spill outside the line, which looks dramatic but can overlap the text around it. Upside-down and Reversed rearrange the letters, the classic trick for a spell or a backward message." },
        { chart: { styles: ["slashed", "bold-strike"], sets: ["upper", "lower", "digits"] } },
      ],
    },
    {
      h2: "2. What do the pentagram and other symbols mean?",
      blocks: [
        { p: "The five-pointed star is far older than any modern use. It appears in ancient Greek and medieval Christian symbolism, and a point-down version became associated with occultism much later. In entertainment it now mostly signals horror, fantasy or heavy metal. The skull ☠ (U+2620), dagger † (U+2020) and bat are general Halloween and horror shorthand." },
        { p: "This page is for fiction, games, Halloween, band names and horror projects. It deliberately leaves out real-world hate symbols; if you are designing a band logo or a game title, the [metal font generator](/metal-font-generator) and [horror font generator](/horror-font-generator) have more options in the same mood." },
      ],
    },
  ],
  built:
    "Base letters are Mathematical Fraktur and Bold Fraktur. Cursed and Distressed add a fixed set of combining marks such as U+0334 and U+0337, Zalgo stacks many combining diacritics from U+0300–U+036F, and Slashed uses the combining long solidus U+0338. The pentagram ⛧ is U+26E7 in Miscellaneous Symbols.",
  related: {
    heading: "More dark lettering",
    hrefs: ["/horror-font-generator", "/metal-font-generator", "/font-generator/slasher", "/font-generator/monster", "/font-generator/distorted-text", "/font-generator/gothic-letters"],
  },
  faq: [
    { q: "What is a satanic font?", a: "It is an informal name for horror-style lettering: blackletter combined with scratches, glitches and occult-looking symbols. No single font has that official name." },
    { q: "Is there a demon font I can copy and paste?", a: "Yes. Type your text and copy a style here; every letter is a Unicode character, so there is nothing to install." },
    { q: "Why does the Zalgo text spill onto other lines?", a: "Each letter carries a stack of combining marks above and below it, and they draw outside the normal line height. Use the Cursed or Distressed style for a calmer version." },
    { q: "Why does the cursed text look different on another device?", a: "Combining marks are positioned by the reader's font, and fonts stack them differently. The heavier the effect, the more the result varies." },
    { q: "Can I make a cursed text generator style in Old English letters?", a: "Yes. Cursed Gothic and Distressed Gothic both start from Fraktur blackletter, then add the damage on top." },
    { q: "How do I write text upside down?", a: "Use the Upside-down Gothic style. It flips each letter it can and reverses the order, so the line reads correctly when turned around." },
    { q: "Is the pentagram symbol offensive?", a: "It depends on context. The star has religious, magical and decorative meanings across history; here it is used as a horror and fantasy decoration." },
  ],
};

export default page;
