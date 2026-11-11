import type { PageContent } from "./types";

const page: PageContent = {
  slug: "metal-font-generator",
  title: "Metal Font Generator — 18 Heavy Metal Styles to Copy & Paste",
  description:
    "Metal font generator: 18 heavy metal and black metal text styles to copy and paste, with spikes, pentagrams and worn print. Free, no sign-up.",
  h1: "Metal Font Generator",
  crumb: "Metal Font Generator",
  intro:
    "This metal font generator turns your band name, album title or gamertag into 18 heavy metal text styles to copy and paste, from clean Bold Fraktur to worn, cursed and spiked versions framed with pentagrams, daggers and crossed swords. It's copy-paste Unicode for bios, setlists and posts. For posters and merch mockups you'll want a real font file such as [Metal Mania](/fonts/metal-mania).",
  tool: {
    styles: [
      "bold-fraktur", "bold-fraktur-caps", "fraktur-caps", "distressed", "cursed", "slashed",
      "deco-pentagram", "deco-skull", "deco-swords", "deco-dagger", "deco-cross", "frame-banner",
      "frame-block", "wide-bold", "vertical", "roman-date", "fraktur", "gothic-framed",
    ],
    sample: "Iron Requiem",
    placeholder: "Band name, album or gamertag…",
    presets: ["Iron Requiem", "Funeral Winter", "Live Fast Die Loud", "Tour MMXXVI", "Necro Hymn", "Stage Dive"],
  },
  stylesHeading: "Metal text styles",
  howTo: {
    heading: "How to style a band name",
    steps: [
      ["Keep it short", "Metal lettering is built for one to three words. Long names lose their impact in heavy blackletter."],
      ["Choose your subgenre's weight", "All-capital Bold Fraktur for doom and heavy metal, Distressed or Cursed for black metal, Crossed Swords for power metal."],
      ["Copy and check", "Paste it into your bio or post and look at it on a phone. Heavily marked styles can collide with the line above or below."],
    ],
  },
  sections: [
    {
      h2: "What do metal logos look like in each subgenre?",
      blocks: [
        { p: "Metal bands almost never use an off-the-shelf font for their logo; the logo is drawn once and becomes the band's mark. Still, each subgenre has habits, and the copy-paste styles here can get you into the right neighbourhood:" },
        {
          table: {
            head: ["Subgenre", "Typical lettering", "Closest styles here"],
            rows: [
              ["Black metal", "Spiky, symmetric, often hard to read on purpose, with thorn or branch shapes", "Cursed Gothic, Distressed Gothic, Pentagram"],
              ["Thrash", "Sharp, angular capitals with pointed ends", "Slashed Gothic, Bold Fraktur All Capitals"],
              ["Doom and gothic metal", "Blackletter or ornate occult lettering", "Bold Fraktur, Cross of Jerusalem, Dagger"],
              ["Power metal", "Bold, heroic capitals, sometimes with swords or chrome effects", "Crossed Swords, Wide Bold Fraktur"],
              ["Death metal", "Dense, organic shapes that drip or splinter", "Distressed Gothic, Skull Gothic"],
            ],
          },
        },
      ],
    },
    {
      h2: "Can I get the Metallica font here?",
      blocks: [
        { p: "No, and nobody can give you an official one. The Metallica logo is a custom drawing, widely credited to frontman James Hetfield, not a typeface you can download. It's also not blackletter: its long, pointed first and last letters are closer to angular display lettering. Fan-made lookalike fonts exist, but a band logo is a trademark, so using a copy on merch you sell can get you into trouble." },
        { p: "What you can do is make your own name look metal. Bold Fraktur All Capitals and Slashed Gothic give a hard, sharp feel without imitating anyone's logo, and the [Metal Mania font page](/fonts/metal-mania) shows a free, open-licence font built in that spirit." },
      ],
    },
    {
      h2: "Why is black metal lettering so hard to read?",
      blocks: [
        { p: "It's intentional. Black metal logos are usually hand-drawn with mirror symmetry and strokes that grow into spikes, roots or branches, so the logo works more like a sigil than a word. Unicode can't draw those shapes, but stacking combining marks on blackletter letters, as Cursed Gothic does, gives a similar sense of noise. Use it for one word; anything longer turns into a smear." },
      ],
    },
    {
      h2: "Where do metal text styles work?",
      blocks: [
        { ul: [
          "**Instagram, TikTok and X bios:** all styles paste in. Keep cursed styles to one word so they don't overlap your other lines.",
          "**Discord and gaming names:** stick to Bold Fraktur or Bold Fraktur All Capitals; some games reject symbols. Check the [Discord name guide](/old-english-font-discord) for length limits.",
          "**Spotify and Bandcamp descriptions:** most styles show, but search won't find your band if the name is in Unicode letters. Keep the plain spelling somewhere in the text.",
          "**Posters and shirts:** use an installed font from the [gothic fonts](/fonts/gothic) directory instead, so the print is sharp.",
        ] },
      ],
    },
  ],
  built:
    "All styles start from Mathematical Fraktur or Bold Fraktur. Distressed and cursed versions add combining marks after each letter; the pentagram ⛧, skull ☠, swords ⚔ and dagger † are standard Unicode symbols placed around your text.",
  related: {
    heading: "More dark lettering tools",
    hrefs: ["/gothic-font-generator", "/horror-font-generator", "/gothic-symbols", "/biker-font-generator", "/blackletter-generator", "/old-english-text-to-image"],
  },
  faq: [
    { q: "What font do metal bands use?", a: "Most metal logos are drawn by hand rather than set in a font. Display fonts such as Metal Mania and New Rocker imitate the look and are useful for mockups." },
    { q: "Is there a Metallica font generator?", a: "There's no official one, because the logo is a custom drawing and a trademark. This generator gives you metal-style lettering for your own name instead." },
    { q: "How do I copy and paste metal letters?", a: "Type your text, pick a style and tap Copy. The result is Unicode text that pastes into bios, captions and most chat apps." },
    { q: "Which style looks most like black metal?", a: "Cursed Gothic, because it piles marks above and below each letter. Pair it with the pentagram frame if you want it darker." },
    { q: "Can I use this lettering for my band's merch?", a: "For print, use a real font file so the edges are clean. The open-licence fonts on our metal and gothic font pages allow commercial use; hand-drawn lettering by an artist is the best route for a lasting logo." },
    { q: "Why does my band name not show up in search?", a: "Search engines and platform search treat Unicode Fraktur letters as different characters from plain letters. Keep the normal spelling in your profile so fans can find you." },
  ],
};

export default page;
