import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL, which ranked in Bing before the
// rebuild removed it. Minecraft-style text only: not affiliated, no logo font.
const page: PageContent = {
  slug: "font-generator/minecraft",
  file: "font-generator-minecraft",
  title: "Minecraft Text Generator – 12 Blocky Styles, Copy & Paste",
  description:
    "Minecraft text generator: 12 blocky, Minecraft-style text styles – monospace, outline, squared, boxed and wide. Type, tap Copy, paste. Free, unofficial.",
  h1: "Minecraft Text Generator",
  crumb: "Minecraft-Style Text",
  intro:
    "A Minecraft text generator turns normal letters into blocky, grid-like text, and this page gives you 12 Minecraft-style text styles that you can copy and paste. If you searched for a Minecraft text generator copy paste tool or an old Minecraft font generator, the closest plain-text matches are fixed-width monospace, hollow outline letters, squared capitals and boxed or wide spacing, because they echo the game's chunky, pixel-built world. It is fan-made styling, not the game's official logo or font, and we are not affiliated with Mojang or Microsoft.",
  tool: {
    styles: [
      "typewriter", "u-mono-spaced", "varsity-outline", "u-outline-spaced", "u-outline-underline", "boxed",
      "u-squared", "u-squared-spaced", "frame-white", "u-sans-bold", "u-fullwidth", "u-bold-serif",
    ],
    sample: "Diamond Mine",
    placeholder: "Type a server name, a sign or a build name…",
    presets: ["Diamond Mine", "Creeper Crew", "Spawn Point", "Build Team", "Village 01"],
  },
  stylesHeading: "Blocky text styles",
  howTo: {
    heading: "How to make blocky game text",
    steps: [
      ["Type the label", "A build name, a server title, a team name or a line for a screenshot caption."],
      ["Choose a block feel", "Monospace for a grid, Squared for tile letters, Outline for a stone-carved hollow look."],
      ["Copy it", "Tap Copy and paste it where you want it. Keep coordinates and commands in plain letters so others can type them."],
    ],
  },
  sections: [
    {
      h2: "Blocky alphabet chart: outline and bold sans",
      blocks: [
        { p: "Two alphabets with full A–Z, a–z and 0–9 sets. Outline letters have hollow stems that read like carved blocks; Sans Bold is the heavy, clean option for titles. Tap any cell to copy one character, handy for a single-letter team logo or a numbered build." },
        { chart: { styles: ["varsity-outline", "u-sans-bold"], sets: ["upper", "lower", "digits"] } },
      ],
    },
    {
      h2: "1. Which style is closest to a pixel font?",
      blocks: [
        { p: "None of them is truly pixelated, because Unicode letters are drawn by whatever smooth font the reader's device uses. The ones that feel most like a block game are the ones built on a grid:" },
        { ul: [
          "Monospace and Monospace Spaced: every letter takes the same width, like tiles on a grid.",
          "Squared: each capital sits in its own square, like a block face. 🄼🄸🄽🄴",
          "Boxed Gothic: a frame drawn around each letter. It depends on font support more than the others, so preview it.",
          "Fullwidth: wide, evenly spaced letters for a banner over a build.",
        ] },
        { p: "For a real pixel look on a thumbnail or a poster, install an open-licence pixel display font in your image editor; text styles can't add the stepped edges." },
      ],
    },
    {
      h2: "2. Ideas for Minecraft-style names and labels",
      blocks: [
        {
          table: {
            head: ["Use", "Try this style", "Example"],
            glyphCols: [2],
            rows: [
              ["Server or realm title", "Outline Spaced", "𝕊 𝕜 𝕪 𝔹 𝕝 𝕠 𝕔 𝕜"],
              ["Team or build crew", "Squared", "🄱🅄🄸🄻🄳 🅃🄴🄰🄼"],
              ["Coordinates in a caption", "Monospace", "𝚇 𝟷𝟸𝟾 𝚈 𝟼𝟺 𝚉 -𝟹𝟶𝟶"],
              ["Screenshot caption", "Sans Bold", "𝗦𝘂𝗿𝘃𝗶𝘃𝗮𝗹 𝗗𝗮𝘆 𝟭𝟬𝟬"],
              ["Map or area label", "White Bracket Frame", "⟦ℌ𝔬𝔪𝔢⟧"],
            ],
          },
        },
      ],
    },
    {
      h2: "3. Can this make enchanting table letters?",
      blocks: [
        { p: "No. The enchanting-table glyphs are not part of Unicode, so there are no characters to copy for them, and this page doesn't fake them with lookalikes. It also doesn't copy the game's logo or menu lettering. What you get is Minecraft-style text made from standard characters. Each game, server and launcher decides which characters it keeps, so check a name in place before you rely on it. For other game-name looks, see the [Fortnite-style fonts](/font-generator/fortnite) page." },
      ],
    },
  ],
  built:
    "Monospace and Outline use Mathematical Monospace and Mathematical Double-Struck letters and digits; Squared uses the squared Latin capitals in Enclosed Alphanumeric Supplement (🄰–🅉); Boxed Gothic adds the combining enclosing square U+20DE to each Bold Fraktur letter.",
  related: {
    heading: "More game and block lettering",
    hrefs: ["/font-generator/fortnite", "/font-generator/fun", "/font-generator/font-converter", "/symbols", "/different-fonts", "/font-generator/fancy-letters"],
  },
  faq: [
    { q: "Is there a Minecraft text generator copy paste?", a: "Yes. Type your text in the box and tap Copy next to any of the 12 blocky styles." },
    { q: "Is this the official Minecraft font?", a: "No. It is unofficial Minecraft-style text made from Unicode characters. We are not affiliated with Mojang or Microsoft and don't provide the game's font or logo." },
    { q: "What is the most blocky text style?", a: "Squared and Monospace. Squared puts each capital in a box; Monospace gives every letter the same width." },
    { q: "Can I make an old Minecraft font?", a: "Not as text. A pixel font has to be installed and used in a design app. The styles here only give a blocky feel." },
    { q: "Why are squared letters always capitals?", a: "Unicode only includes squared capital letters, so lowercase input is converted to capitals." },
    { q: "Can I copy numbers in a blocky style?", a: "Yes. Outline, Sans Bold and Monospace have their own digits, like 𝟙𝟚𝟛 or 𝟷𝟸𝟹." },
    { q: "Why does Boxed Gothic look broken?", a: "The box is a combining mark drawn over the letter, and many fonts place it imperfectly. Pick Squared if you need clean boxes." },
  ],
};

export default page;
