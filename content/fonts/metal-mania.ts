import type { FontPage } from "@/lib/fontpages";

const page: FontPage = {
  style: "metal-mania",
  title: "Metal Mania Font — Free Spiky Band-Logo Font, 268 Glyphs",
  description:
    "Metal Mania font: a free heavy-metal display face with spiked terminals and 268 glyphs, under the SIL Open Font License. Preview your band name in 6 fonts.",
  h1: "Metal Mania Font",
  crumb: "Metal Mania",
  intro:
    "Metal Mania is a free display font by Open Window, on Google Fonts since July 2012, with spiked terminals in the style of heavy metal band logos. It has one weight, and our measurement of the file counts 268 glyphs, covering Western European accents and ß but not the long s or Czech and Hungarian letters such as č, ě and ő. It's under the SIL Open Font License, so you can print it on merch you sell.",
  sample: "Iron Requiem",
  fonts: ["Metal Mania", "New Rocker", "UnifrakturCook", "Manufacturing Consent", "Pirata One", "Germania One"],
  notes: {
    "Metal Mania": "The subject of this page: aggressive spikes on nearly every stroke end.",
    "New Rocker": "Rock-poster blackletter with lively capitals, a little less spiky.",
    "UnifrakturCook": "Heavy traditional Fraktur, the black metal and doom option.",
    "Manufacturing Consent": "Crisp contemporary blackletter for a modern metal or hardcore look.",
    "Pirata One": "Readable gothic for the tracklist and tour dates under the logo.",
    "Germania One": "Narrow and industrial, for tall vertical banners.",
  },
  focus: "Metal Mania",
  sections: [
    {
      h2: "Is Metal Mania the font of a real band's logo?",
      blocks: [
        { p: "No. Famous metal logos are almost always hand-drawn and trademarked, and you can't download them as fonts. Metal Mania imitates the general thrash and heavy metal style: pointed serifs, flared spikes and a heavy baseline. It's a good starting point for a mockup or a local band's first shirts; serious logos usually end up redrawn by hand." },
        { p: "People searching for a \"metal lord\" font are usually after the same spiky look. For black metal's tangled, unreadable logos there is no font at all; those are drawn one by one." },
      ],
    },
    {
      h2: "How do I make Metal Mania look like a band logo?",
      blocks: [
        { ul: [
          "**Keep it to one or two words.** Spikes collide in long names.",
          "**Tighten the letter spacing** until the spikes nearly touch, then fix collisions by hand.",
          "**Add symmetry.** Many logos stretch the first and last letters into long spikes; draw these after converting the text to outlines.",
          "**Pair it with a readable font** such as Pirata One for album titles and dates.",
        ] },
        { p: "For copy-paste band names on Instagram, Discord or a Bandcamp bio, use the [metal font generator](/metal-font-generator). More downloadable options are in the [gothic fonts](/fonts/gothic) and [Halloween fonts](/fonts/halloween) collections." },
      ],
    },
  ],
  tools: ["/metal-font-generator", "/gothic-font-generator", "/horror-font-generator", "/gothic-symbols"],
  faq: [
    { q: "Is Metal Mania free for band merch?", a: "Yes. The SIL Open Font License allows commercial use, so shirts, posters and album covers are fine. You can't sell the font file itself." },
    { q: "What font is the Metallica logo?", a: "None you can install. It's a custom drawn logo and a trademark. Metal Mania gives a general heavy metal feel without copying it." },
    { q: "Does Metal Mania have lowercase letters?", a: "Yes, it includes a full lowercase, but it looks most like a band logo in capitals or with a capital first letter." },
    { q: "Does Metal Mania support accented letters?", a: "Western European accents, umlauts and ß, yes. Our check found no long s, and it lacks letters such as č, ě, ň and ő, though it does draw ł, ř, š and ž." },
  ],
};

export default page;
