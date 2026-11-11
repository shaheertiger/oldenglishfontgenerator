import type { FontPage } from "@/lib/fontpages";

const page: FontPage = {
  style: "unifrakturcook",
  title: "UnifrakturCook Font — Free Bold Fraktur, 271 Glyphs, Long s",
  description:
    "UnifrakturCook font: a free, heavy Fraktur under the SIL Open Font License, with 271 glyphs, the long s and umlauts. Preview your text and compare 5 similar fonts.",
  h1: "UnifrakturCook Font",
  crumb: "UnifrakturCook",
  intro:
    "UnifrakturCook is a free, bold Fraktur by j. 'mach' wust, released through the Unifraktur project and on Google Fonts since December 2010. It comes in one heavy weight (700), and our measurement of the file counts 271 glyphs, including the long s (ſ), ß and umlauts. It's licensed under the SIL Open Font License, so you can use it for logos, tattoo stencils and merchandise.",
  sample: "Gesellschaft",
  fonts: ["UnifrakturCook", "UnifrakturMaguntia", "Manufacturing Consent", "Germania One", "Fruktur", "Pirata One"],
  notes: {
    "UnifrakturCook": "The subject of this page: heavy display Fraktur with tight counters and dramatic capitals.",
    "UnifrakturMaguntia": "Its lighter sibling from the same designer. Use it for smaller text and long titles.",
    "Manufacturing Consent": "Another heavy blackletter with the long s, but with sharper, more contemporary joins.",
    "Germania One": "Narrower and more geometric; also includes the long s.",
    "Fruktur": "A friendlier Fraktur with an italic, for when Cook feels too severe.",
    "Pirata One": "A simplified modern blackletter that stays legible at small sizes.",
  },
  focus: "UnifrakturCook",
  sections: [
    {
      h2: "What is UnifrakturCook best for?",
      blocks: [
        { ul: [
          "**Short, bold titles.** One or two words: a shop name, an album title, a team name.",
          "**Vinyl and cutting machines.** The thick strokes weed more easily than thin blackletter. The [Cricut guide](/fonts/old-english/cricut) covers installing it.",
          "**Tattoo references.** Its weight resembles the heavy Old English lettering most people ask for; preview it on skin with the [Old English tattoo font](/old-english-tattoo-font) tool.",
          "**German text.** It draws ß, umlauts and the long s, so historical German spellings set correctly.",
        ] },
        { p: "It is less suited to paragraphs. At body size the counters of e, a and o close up and words become hard to read; switch to UnifrakturMaguntia or Pirata One there." },
      ],
    },
    {
      h2: "UnifrakturCook or UnifrakturMaguntia?",
      blocks: [
        { table: { head: ["", "UnifrakturCook", "UnifrakturMaguntia"], rows: [
          ["Weight", "700 (bold)", "400 (regular)"],
          ["Glyphs in file", "271", "270"],
          ["Long s (ſ)", "Yes", "Yes"],
          ["Best size", "Large display", "Headings and short lines"],
        ] } },
        { p: "Both come from the same project and pair well: Cook for the main word, Maguntia for a subtitle. More options are in the [Old English fonts](/fonts/old-english) and [gothic fonts](/fonts/gothic) collections." },
      ],
    },
  ],
  tools: ["/fraktur-generator", "/old-english-tattoo-font", "/old-english-text-to-image", "/bold-fraktur"],
  faq: [
    { q: "Is UnifrakturCook free for commercial use?", a: "Yes. It's under the SIL Open Font License, which allows commercial use, including logos, products and embedding in apps." },
    { q: "Does UnifrakturCook have a regular weight?", a: "No. Google Fonts serves a single 700 weight. For a lighter version, use UnifrakturMaguntia from the same designer." },
    { q: "Does UnifrakturCook support the long s?", a: "Yes. Our check of the font file found ſ along with ß and the German umlauts. It does not cover Central European letters such as ł or ř." },
    { q: "How do I use UnifrakturCook on Instagram?", a: "You can't use a font file there. Use the Fraktur or Old English generator for copy-paste Unicode text, or export an image with the text to image tool, which uses UnifrakturCook." },
    { q: "Where do I download UnifrakturCook?", a: "From its Google Fonts page, linked on the font card above. That gives you the current file and licence." },
  ],
};

export default page;
