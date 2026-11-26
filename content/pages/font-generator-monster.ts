import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL, which ranked in Bing before the
// rebuild removed it.
const page: PageContent = {
  slug: "font-generator/monster",
  file: "font-generator-monster",
  title: "Monster Font Style Copy Paste – 12 Creepy Creature Styles",
  description:
    "Monster font style copy paste: 12 creature-feature text styles – oozing, warty, possessed, bug-eyed. Type a name, tap Copy, paste. Free, no sign-up.",
  h1: "Monster Font Style: Copy and Paste",
  crumb: "Monster Font",
  intro:
    "A monster font style is lettering that looks like something crawled over it, and this page gives you 12 of them as text to copy and paste. Searches for a monster text generator or text style monsters usually want one of two moods: the cute, goofy monster of a kids' party or the slimy, many-legged thing under the bed. Here, the slime and warts come from combining marks stacked on gothic letters, the possessed look from heavy glitch, and the goofy side from bubbly and mismatched letters.",
  tool: {
    styles: [
      "u-zalgo", "u-zalgo-extreme", "u-cursed-gothic", "u-gothic-glitch", "u-decorative-gothic", "wavy",
      "dotted", "u-fraktur-flipped", "circled", "bold-fraktur-caps", "u-weird", "u-bent",
    ],
    sample: "Swamp Thing",
    placeholder: "Type a monster's name…",
    presets: ["Swamp Thing", "Under the Bed", "Monster Mash", "Grr", "Feed Me", "Little Monster"],
  },
  stylesHeading: "Monster text styles",
  howTo: {
    heading: "How to write in a monster font",
    steps: [
      ["Name the creature", "A monster's name, a growl or a two-word warning. Short text keeps the effect readable."],
      ["Choose slimy, possessed or silly", "Wavy and Dotted look slimy, Zalgo and Cursed look possessed, Weird Mix and Bent look silly."],
      ["Copy it", "Tap Copy and paste it into your invite, caption, story or game lobby."],
    ],
  },
  sections: [
    {
      h2: "Monster letters A to Z: warty, oozing and dotted",
      blocks: [
        { p: "Three gothic alphabets dressed up as creatures. Decorative Gothic hangs a different pair of marks on each letter, like warts and spines; Wavy puts a squiggle under every letter as if it were oozing; Dotted hangs two drops under each one. Copy single letters for a monster's initial or a party sign." },
        { chart: { styles: ["u-decorative-gothic", "wavy", "dotted"], sets: ["upper", "lower"] } },
      ],
    },
    {
      h2: "1. How do I write a font that looks monster-like?",
      blocks: [
        { p: "Think about what kind of monster it is, then pick a style that matches its body rather than its scariness:" },
        { table: {
          head: ["Creature", "Style", "Why it fits"],
          rows: [
            ["Swamp or slime monster", "Wavy, Dotted", "Marks hanging under the letters look like drips"],
            ["Demon or possessed doll", "Zalgo, Cursed", "Marks pile up above and below until the text seems to shake"],
            ["Old castle beast", "Bold Fraktur All Capitals", "Heavy blackletter, like a sign on a gate"],
            ["Many-eyed blob", "Bubble Gothic", "Each letter sits in a ring, like an eye"],
            ["Cute party monster", "Weird Mix, Bent", "Mismatched letters, a bit wobbly and silly"],
            ["Thing from another world", "Fraktur Upside Down", "Flipped text that seems to hang from the ceiling"],
          ],
        } },
      ],
    },
    {
      h2: "2. Is there dripping monster text to copy and paste?",
      blocks: [
        { p: "Not true dripping. Unicode letters don't have drips; dripping fonts are font files that redraw every letter. The Wavy and Dotted styles get you partway by hanging marks below each letter. Add 🫠 or 💧 after a word for a melting feel. For a poster, a flyer or a thumbnail, a dripping display font in a design app is the better tool, and the [horror font generator](/horror-font-generator) has more Halloween symbol options." },
      ],
    },
    {
      h2: "3. How much glitch is too much?",
      blocks: [
        { p: "The Zalgo and Cursed styles are the loudest on the page. On a one-word name they look like a creature is pushing through the screen. On a whole sentence they turn into noise and can cover the lines above and below. A good rule: one glitched word, the rest in a calmer style such as Bold Fraktur All Capitals or Wavy." },
      ],
    },
  ],
  built:
    "All monster styles start from Mathematical Fraktur or Bold Fraktur letters, or plain Latin letters for Zalgo, then add combining diacritical marks (U+0300–U+036F) such as U+0330 for the wavy line and U+0324 for the dots; Bubble Gothic adds the enclosing circle U+20DD.",
  related: {
    heading: "More creepy text",
    hrefs: ["/horror-font-generator", "/font-generator/slasher", "/font-generator/animalistic", "/font-generator/distorted-text", "/font-generator/satanic", "/font-generator/wavy"],
  },
  faq: [
    { q: "How do I copy and paste a monster font style?", a: "Type your text, find the creature look you like and tap Copy. Paste it anywhere you can type." },
    { q: "What is the scariest monster text?", a: "Cursed, the heaviest Zalgo style. Use it on one word, because it can overlap nearby lines." },
    { q: "Is there a cute monster font?", a: "Weird Mix and Bent are the playful ones. Pair them with 👾 or 👹 for a kids' party." },
    { q: "Can I make slimy text?", a: "Wavy and Dotted hang marks under each letter, which reads as slime or ooze, especially in green-themed posts." },
    { q: "Why do some monster letters look cut off?", a: "Combining marks extend above or below the letter, and some apps trim them. Choose Wavy or Dotted if you need a tidier result." },
    { q: "Is my text saved anywhere?", a: "No. The conversion happens in your browser." },
    { q: "Can I use monster text for Halloween invitations?", a: "Yes, as typed text in a message or a document. For printed invitations, a real display font will look sharper." },
  ],
};

export default page;
