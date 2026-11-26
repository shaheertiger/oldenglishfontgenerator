import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL, which ranked in Bing before the
// rebuild removed it.
const page: PageContent = {
  slug: "font-generator/animalistic",
  file: "font-generator-animalistic",
  title: "Animalistic Font Copy and Paste – 12 Feral Text Styles",
  description:
    "Animalistic font copy and paste: 12 feral text styles – claw-slashed, scarred, torn and wide-stance gothic. Type a name, tap Copy, paste. Free.",
  h1: "Animalistic Font Copy and Paste",
  crumb: "Animalistic Font",
  intro:
    "An animalistic font is lettering that looks clawed, scarred or torn, as if an animal got to it first, and this page offers 12 of these styles as copy-and-paste text. Most people looking for an animalistic font copy and paste want feral text for a pack name, a werewolf character, a team called the Wolves or a fierce caption. The trick is heavy blackletter or angular letters, then damage: claw slashes, scratches, a bar across the top like a raised hackle.",
  tool: {
    styles: [
      "slashed", "bold-strike", "distressed", "fraktur-strike", "cursed", "overline",
      "u-japanese-style", "u-fraktur-bold-spaced", "u-gothic-bold", "deco-swords", "wide-bold", "u-bent",
    ],
    sample: "Wolf Pack",
    placeholder: "Type a pack, a beast or a name…",
    presets: ["Wolf Pack", "Feral", "Alpha", "Lone Wolf", "Claws Out", "Night Hunt"],
  },
  stylesHeading: "Feral text styles",
  howTo: {
    heading: "How to make feral text",
    steps: [
      ["Pick a beast-sized word", "One or two words. Animal names, pack names and single verbs like Hunt or Roar carry the look best."],
      ["Choose the damage", "Slashed Gothic for a swipe through each letter, Bold Fraktur Strikethrough for one deep scar across, Distressed Gothic for a worn, dirt-scuffed texture."],
      ["Copy and add a track", "Copy it, then add 🐾 or 🐺 if you want the animal to be obvious."],
    ],
  },
  sections: [
    {
      h2: "Clawed alphabet: slashed, scarred and worn letters",
      blocks: [
        { p: "Three heavy blackletter alphabets with different injuries. Slashed Gothic has a diagonal swipe across each letter, the closest to a claw mark. Bold Fraktur Strikethrough has one straight scar. Distressed Gothic adds small marks that look like scuffs and scratches." },
        { chart: { styles: ["slashed", "bold-strike", "distressed"], sets: ["upper", "lower"] } },
      ],
    },
    {
      h2: "1. Which style looks most like claw marks?",
      blocks: [
        { p: "Slashed Gothic. Each letter carries a single diagonal stroke, so a word looks raked by one paw. For a heavier attack, type the word in Slashed Gothic, copy it, then add a second line of the same word in Bold Fraktur Strikethrough under it. Real claw marks come in sets of three or four parallel lines, which text can't draw, so if you need that on a poster or a jersey, add it in an image editor afterwards." },
      ],
    },
    {
      h2: "2. Matching a style to the animal",
      blocks: [
        { cards: [
          { h: "Wolf or werewolf", p: "Fraktur Bold Spaced or Wide Bold Fraktur. Spread-out letters feel like a howl across distance." },
          { h: "Big cat", p: "Slashed Gothic. Fast, sharp and diagonal, like a swipe." },
          { h: "Bear", p: "Gothic Bold with Distressed for weight and roughness." },
          { h: "Dragon or wyvern", p: "Crossed Swords around Bold Fraktur, or Cursed Gothic for something smoking." },
          { h: "Raptor or bird of prey", p: "Japanese Style. Its angular strokes look like talons and beak edges." },
          { h: "Feral human", p: "Bent or Fraktur Overline. A little off-balance, half tamed." },
        ] },
      ],
    },
    {
      h2: "3. Animalistic font copy and paste vs. a downloadable font",
      blocks: [
        { p: "These styles are characters, so they paste into a bio, a chat or a document without installing anything. They can't change shape the way a font file can: no fur texture, no teeth on the strokes, no three-line scratches. For a logo, a jersey or merch, use a display font made for that look and keep this page for the text you type online. For rougher, hand-scratched letters, also see [scratchy text](/font-generator/scratchy)." },
      ],
    },
  ],
  built:
    "The base letters are Mathematical Fraktur and Bold Fraktur; claw slashes are the combining overlay U+0338, scars the long stroke overlay U+0336, the raised bar the combining overline U+0305, and Japanese Style swaps letters for angular CJK and katakana lookalikes such as 乇 and 尺.",
  related: {
    heading: "More fierce lettering",
    hrefs: ["/font-generator/scratchy", "/font-generator/monster", "/viking-font-generator", "/metal-font-generator", "/runic-translator", "/font-generator/blackletter"],
  },
  faq: [
    { q: "What is an animalistic font?", a: "Lettering that looks wild or attacked: clawed, scratched, torn or heavy like an animal's build. Here it is made with Unicode characters you can copy." },
    { q: "How do I copy and paste an animalistic font?", a: "Type your word in the box, then tap Copy next to a feral style such as Slashed Gothic." },
    { q: "Can I get feral text for a pack or clan name?", a: "Yes. Short names in Slashed Gothic or Wide Bold Fraktur keep their shape and are still readable." },
    { q: "How do I add paw prints?", a: "Paste 🐾 before or after the styled name. It's an emoji, so it looks slightly different on each device." },
    { q: "Why does the slash look different on my phone?", a: "The slash is a combining mark, and each font positions it its own way. Some draw it long, some short." },
    { q: "Is there a werewolf font?", a: "Not an official one. Bold Fraktur with claw slashes is a popular way to suggest it in text." },
  ],
};

export default page;
