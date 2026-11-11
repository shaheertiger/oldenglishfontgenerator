import type { FontPage } from "@/lib/fontpages";

const page: FontPage = {
  style: "pirata-one",
  title: "Pirata One Font — Free Readable Blackletter, 386 Glyphs",
  description:
    "Pirata One font: a free modern blackletter that stays readable in full sentences, with 386 glyphs and Central European letters. Preview it and 5 similar fonts.",
  h1: "Pirata One Font",
  crumb: "Pirata One",
  intro:
    "Pirata One is a free modern blackletter by Rodrigo Fuenzalida and Nicolás Massi, added to Google Fonts in October 2012. Its open, simplified letters keep the gothic mood while staying readable across a full line, which most blackletter can't do. Our measurement of the file counts 386 glyphs with ß, umlauts and Central European letters, but no long s. It's under the SIL Open Font License.",
  sample: "Menu of the Night",
  fonts: ["Pirata One", "Grenze Gotisch", "Texturina", "New Rocker", "UnifrakturMaguntia", "Manufacturing Consent"],
  notes: {
    "Pirata One": "The subject of this page: single-weight modern blackletter with open counters.",
    "Grenze Gotisch": "The flexible alternative: a variable weight from 100 to 900 in one file.",
    "Texturina": "Textura-inspired text face with italics, for true paragraphs.",
    "New Rocker": "More decorative capitals, for posters where Pirata One feels too plain.",
    "UnifrakturMaguntia": "The traditional Fraktur look, less readable but more historical.",
    "Manufacturing Consent": "Darker and sharper; strong in a logo, weaker in sentences.",
  },
  focus: "Pirata One",
  sections: [
    {
      h2: "Why is Pirata One easier to read than other blackletter?",
      blocks: [
        { p: "Classic Fraktur breaks every curve into short angled strokes and fills the inside of letters with ink. Pirata One keeps the angled pen look but leaves the counters open and simplifies the capitals, so an a still looks like an a. That's why it turns up on bar menus, game interfaces, tracklists and book covers where a whole subtitle has to be read, not just recognised." },
        { table: { head: ["Use", "Pirata One?", "Note"], rows: [
          ["Logo or title", "Yes", "Works, though heavier fonts make more impact"],
          ["Menu, tracklist, subtitle", "Best choice", "Readable at small sizes"],
          ["Long paragraphs", "Not ideal", "Texturina is built for that"],
          ["Historical German text", "Partly", "Has ß and umlauts but no long s"],
        ] } },
      ],
    },
    {
      h2: "What should I pair with Pirata One?",
      blocks: [
        { p: "Pirata One has a single weight, so pair it with a plain serif or sans for body text, and with a heavier blackletter such as UnifrakturCook when you need a dramatic headline. For different weights within the blackletter style, Grenze Gotisch is the better fit. More options sit in the [gothic fonts](/fonts/gothic) and [clothing brand fonts](/fonts/clothing-brand) collections." },
      ],
    },
  ],
  tools: ["/gothic-font-generator", "/metal-font-generator", "/old-english-text-to-image"],
  faq: [
    { q: "Is Pirata One free for commercial use?", a: "Yes. It's under the SIL Open Font License, which allows commercial use, including logos, menus and products." },
    { q: "Does Pirata One come in bold?", a: "No. Google Fonts has one regular weight. For a bold blackletter, add UnifrakturCook or use Grenze Gotisch's weight axis." },
    { q: "Which languages does Pirata One support?", a: "Our check found Western and Central European letters, including ß, umlauts, ł, ř and ő. It doesn't include the long s." },
    { q: "Is Pirata One a pirate font?", a: "The name means pirate in Spanish and Italian, but the design is modern blackletter, not a treasure-map style." },
  ],
};

export default page;
