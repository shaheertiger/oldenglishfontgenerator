import type { FontPage } from "@/lib/fontpages";

const page: FontPage = {
  style: "fantasy",
  title: "Fantasy Fonts — 11 Free Fonts for Maps, D&D and Book Covers",
  description:
    "Fantasy fonts free for commercial use: 11 open-licence medieval, uncial, calligraphic and dark fantasy fonts for maps, D&D handouts, games and covers.",
  h1: "Fantasy Fonts",
  crumb: "Fantasy Fonts",
  intro:
    "These 11 free fantasy fonts cover the looks tabletop players, indie game makers and self-published authors ask for most: epic Roman capitals, uncial and pen-written hands for maps, old printed-book type for lore, and dark blackletter for villains. Each is open-licence, so you can put them in a published adventure, a Steam game or a book you sell. Type a place name or title to compare them.",
  sample: "The Shattered Crown",
  fonts: ["Cinzel Decorative", "Almendra", "IM Fell English", "MedievalSharp", "Uncial Antiqua", "Macondo", "Eagle Lake", "Fondamento", "Metamorphous", "Pirata One", "Jacquard 24"],
  notes: {
    "Cinzel Decorative": "Swashed Roman capitals for epic titles and chapter headings. Capitals only in spirit, so keep it to short lines.",
    "Almendra": "A readable text face with calligraphic touches and an italic. Good for spell descriptions, lore pages and rulebook body text.",
    "IM Fell English": "A revival of 17th-century English printing, uneven inking included. Makes handouts look like an old printed broadsheet.",
    "MedievalSharp": "Light, pen-cut letters that stay clear at small sizes: a solid choice for map labels and inventory screens.",
    "Uncial Antiqua": "Rounded early-medieval capitals with a Celtic feel. Use it for elven or druidic names, or anything set before the Gothic era.",
    "Macondo": "Soft, uncial-like letters with a storybook warmth. Suits cosy fantasy and children's adventure books.",
    "Eagle Lake": "Looks written with a broad pen. Great for scroll headings, quest titles and region names on a map.",
    "Fondamento": "A chancery italic hand for letters, royal decrees and wizards' notes in your campaign.",
    "Metamorphous": "Blends uncial and blackletter, so it reads as ancient without being hard work. A good title font for a homebrew setting.",
    "Pirata One": "Simplified blackletter for villains, cults and dark fantasy titles that still need to be legible.",
    "Jacquard 24": "Blackletter on a pixel grid, made for retro RPGs and dungeon crawlers.",
  },
  sections: [
    {
      h2: "Which fantasy font should I use for each job?",
      blocks: [
        { table: { head: ["Use", "Best picks", "Reason"], rows: [
          ["Book or module cover", "Cinzel Decorative, Metamorphous", "Strong capitals that hold up as a big title."],
          ["Map labels", "MedievalSharp, Eagle Lake", "Pen-like but clear when small and placed over artwork."],
          ["Handouts and in-world letters", "Fondamento, IM Fell English", "Feel handwritten or printed centuries ago."],
          ["Rulebook body text", "Almendra", "Comfortable to read across paragraphs, with an italic for emphasis."],
          ["Dark fantasy and villains", "Pirata One", "Gothic menace without losing legibility."],
          ["Pixel-art games", "Jacquard 24", "Built on a pixel grid, so it stays crisp at its intended size."],
        ] } },
        { p: "Pair one display font with one text font and stop there. A cover in Cinzel Decorative with handouts in Almendra looks deliberate; five fantasy fonts on one page looks like a ransom note." },
      ],
    },
    {
      h2: "Are fantasy fonts historically accurate?",
      blocks: [
        { p: "Some are closer than others. Uncial Antiqua follows a real early-medieval script, and IM Fell English is a revival of actual 17th-century type. MedievalSharp, Eagle Lake and Macondo are modern inventions that only suggest the past. For a fantasy world that doesn't matter, but if you want a period look, see the timeline on the [blackletter and medieval fonts](/fonts/blackletter) page and the single-font guide to [Uncial Antiqua](/fonts/uncial-antiqua)." },
      ],
    },
    {
      h2: "Can I use these fonts in a game or a published adventure?",
      blocks: [
        { p: "Yes. The SIL Open Font License lets you embed the fonts in games and apps and use them in printed or PDF products you sell, including adventures on community marketplaces. You can't sell the font files on their own. Keep the licence file with your game's other third-party notices." },
        { p: "For a decorated first letter on a chapter or handout, use [illuminated letters](/illuminated-letters); for manuscript-style text you can paste into a VTT chat or Discord, try the [medieval font generator](/medieval-font-generator)." },
      ],
    },
  ],
  faq: [
    { q: "What is a good free fantasy font?", a: "Cinzel Decorative for epic titles and MedievalSharp for readable medieval text. Both are free for commercial use." },
    { q: "What font works for D&D handouts?", a: "Fondamento or IM Fell English for letters and notices, Almendra for longer text such as item descriptions." },
    { q: "What is the best font for a fantasy map?", a: "MedievalSharp for small labels and Eagle Lake for region names. Both read well over busy map art." },
    { q: "Is there a free Tolkien-style font?", a: "We don't list fonts copied from any book or film. Uncial Antiqua and Eagle Lake give a similar hand-lettered, ancient feel and are fully open-licence." },
    { q: "What is a good dark fantasy font?", a: "Pirata One for legible gothic text, or Metamorphous for a title that feels ancient and ominous." },
    { q: "Can I use these fonts on a book cover I sell?", a: "Yes. All 11 are under the SIL Open Font License, which allows commercial use on covers, interiors and merchandise." },
  ],
  tools: ["/medieval-font-generator", "/illuminated-letters"],
};

export default page;
