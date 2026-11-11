import type { PageContent } from "./types";

const page: PageContent = {
  slug: "death-note-font",
  title: "Death Note Font — 16 Gothic Styles to Copy & Paste",
  description:
    "Death Note font look-alike: 16 gothic and blackletter styles to copy and paste, including an L-style capital, for cosplay, notebooks and fan posts.",
  h1: "Death Note Font",
  crumb: "Death Note Font",
  intro:
    "The Death Note look comes from gothic blackletter lettering, and this page gives you 16 copy-and-paste styles that get close to it, from all-capital Fraktur for a notebook cover to a single framed blackletter capital in the spirit of L's emblem. There's no official downloadable Death Note font: the lettering in the series and its merchandise is custom artwork, so what you'll find here and elsewhere are fan matches.",
  tool: {
    styles: [
      "fraktur-caps", "bold-fraktur-caps", "fraktur", "bold-fraktur", "illuminated", "drop-cap",
      "gothic-framed", "frame-white", "monogram-framed", "distressed", "cursed", "deco-skull",
      "deco-candle", "deco-dagger", "long-s", "typewriter",
    ],
    sample: "Death Note",
    placeholder: "Type a name or a title…",
    presets: ["Death Note", "L", "Kira", "Ryuk", "Light Yagami", "How to Use It"],
  },
  stylesHeading: "Death Note style lettering",
  howTo: {
    heading: "How to make Death Note style text",
    steps: [
      ["Type the words", "Use the presets or your own title. Capitals matter: the cover look works best in all capitals, the emblem look with a single letter."],
      ["Pick cover or emblem", "Fraktur All Capitals and Bold Fraktur All Capitals give the notebook-cover feel; Gothic Framed or Framed Monogram isolate one blackletter capital."],
      ["Copy it", "Tap Copy and paste it into your post, username or document. For print, use the font suggestions below instead."],
    ],
  },
  sections: [
    {
      h2: "What font is used in Death Note?",
      blocks: [
        { p: "Death Note, the manga by Tsugumi Ohba and Takeshi Obata that ran from 2003 to 2006, uses custom-drawn lettering for the notebook's cover and title. It is a gothic, blackletter-style design rather than a commercial typeface you can buy, and the anime and later merchandise have used several variations of it." },
        { p: "Fans usually match two separate things:" },
        {
          table: {
            head: ["Element", "What it looks like", "Closest free option"],
            rows: [
              ["Notebook cover title", "Spiky gothic capitals, white on black", "Fraktur All Capitals here, or [UnifrakturCook](/fonts/unifrakturcook) as a font file"],
              ["L's emblem", "One ornate blackletter capital L", "Gothic Framed style here; [Old English Text MT](/fonts/old-english-text-mt) is the usual fan match"],
              ["Rules page inside the notebook", "English text in a plain, typed look", "Typewriter style here"],
            ],
          },
        },
        { p: "Treat these as look-alikes, not the official artwork. If you need an exact match for a product, that artwork belongs to the rights holders." },
      ],
    },
    {
      h2: "How do I make my own Death Note notebook cover?",
      blocks: [
        { ul: [
          "**Set the title in a real font.** Copy-paste letters can print blurry. Install a free blackletter font such as UnifrakturCook from the [Old English fonts](/fonts/old-english) page and type the title in Word, Canva or Google Docs.",
          "**Use white on black.** The cover's effect depends on the contrast. Matte black card with white or silver lettering looks closest.",
          "**Keep it to two words.** Blackletter capitals are wide; a long title won't fit the width of an A5 or composition notebook cover.",
          "**Export an image if your app can't install fonts.** The [text to image tool](/old-english-text-to-image) saves blackletter as a transparent PNG you can place on a design.",
        ] },
      ],
    },
    {
      h2: "Can I use the L symbol as a username?",
      blocks: [
        { p: "Yes, as copy-paste text. Type L into the box and copy Bold Fraktur (𝕷), Fraktur (𝔏) or the framed version. Discord, Instagram and TikTok accept these characters in display names, but most platforms don't allow them in the @handle itself. Single-character names may be rejected for being too short, so add a word or a symbol." },
      ],
    },
    {
      h2: "Why does all-capital blackletter look hard to read?",
      blocks: [
        { p: "Blackletter capitals were designed to start a word, not to be lined up in a row. Set in all capitals, they become a dense pattern, which is exactly why they suit a sinister notebook cover and why they don't suit anything people need to read quickly. For a username, try Fraktur with normal capitalisation instead." },
      ],
    },
  ],
  built:
    "These styles use Unicode Mathematical Fraktur (U+1D504 block) and Bold Fraktur (U+1D56C block). Five regular Fraktur capitals, including the H in Death Note, come from the Letterlike Symbols block. Nothing here reproduces the official Death Note artwork.",
  related: {
    heading: "More gothic lettering",
    hrefs: ["/gothic-font-generator", "/horror-font-generator", "/old-english-letters", "/old-english-font-discord", "/old-english-text-to-image", "/gothic-symbols"],
  },
  faq: [
    { q: "Is there an official Death Note font?", a: "No downloadable official font exists. The notebook lettering is custom artwork; fans recreate it with blackletter fonts and copy-paste styles like the ones on this page." },
    { q: "What font is the L in Death Note?", a: "L's emblem is a single ornate blackletter capital. Fans most often compare it to Old English Text MT; the Gothic Framed style here gives a similar copy-paste L." },
    { q: "Can I copy and paste the Death Note font?", a: "You can copy Death Note style text: type your words, pick a style and tap Copy. It's Unicode blackletter, so it pastes into most apps." },
    { q: "Which free font is closest to the Death Note cover?", a: "UnifrakturCook is a heavy, free blackletter font that comes close in weight. It's under the SIL Open Font License." },
    { q: "Can I sell a notebook I made with this lettering?", a: "Using the Death Note name and artwork on products you sell can infringe the rights holders' trademarks and copyright. Gothic lettering itself is fine; copying the official design isn't." },
    { q: "Why do some letters look different from the others?", a: "Five Fraktur capitals (C, H, I, R, Z) were added to Unicode earlier than the rest, so some fonts draw them in a slightly different style. Bold Fraktur doesn't have this issue." },
  ],
};

export default page;
