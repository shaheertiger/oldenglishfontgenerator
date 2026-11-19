import type { FontPage } from "@/lib/fontpages";

const page: FontPage = {
  style: "germania-one",
  title: "Germania One Font — Free Condensed German Gothic, 282 Glyphs",
  description:
    "Germania One font: a free condensed German gothic display face with 282 glyphs, ß, umlauts and the long s. Preview your text and compare 5 similar fonts.",
  h1: "Germania One Font",
  crumb: "Germania One",
  intro:
    "Germania One is a free condensed blackletter display font by John Vargas Beltrán, added to Google Fonts in January 2012. Its straight, clipped strokes give German gothic lettering a poster and industrial feel, and its narrow letters fit long words into tight spaces. Our measurement of the file counts 282 glyphs, including ß, umlauts and the long s (ſ), but not Central European letters such as ł or ř. It is under the SIL Open Font License.",
  sample: "Bierhalle Nord",
  fonts: ["Germania One", "UnifrakturCook", "Pirata One", "Grenze Gotisch", "Manufacturing Consent", "New Rocker"],
  notes: {
    "Germania One": "The subject of this page: one condensed weight with flat, angular strokes.",
    "UnifrakturCook": "Heavier and more traditional, with the classic broken Fraktur curves.",
    "Pirata One": "Wider and more open; the easier read when the text runs to a full line.",
    "Grenze Gotisch": "Similar modern gothic mood with a variable weight from thin to black.",
    "Manufacturing Consent": "Sharper and more contemporary; suits streetwear more than beer halls.",
    "New Rocker": "Rock-poster capitals with flared serifs, for a louder headline.",
  },
  focus: "Germania One",
  sections: [
    {
      h2: "What does \"German gothic\" mean, and is Germania One one?",
      blocks: [
        { p: "People searching for a Deutsch or German gothic font usually mean Fraktur, the blackletter that German printing used from the 16th century until it was officially dropped in 1941. Germania One borrows that look rather than copying a historical type: it keeps the pointed, broken shapes of Fraktur but squares them off and narrows them, more like a 20th-century poster or a brewery sign than a printed Bible." },
        { table: { head: ["If you want…", "Use", "Why"], rows: [
          ["A condensed German poster look", "Germania One", "Narrow letters fit long German compound words"],
          ["Traditional printed Fraktur", "UnifrakturCook or UnifrakturMaguntia", "Closer to historical German type"],
          ["German text with ſ and ß in paragraphs", "Grenze Gotisch", "More weights and better for running text"],
          ["Readable menus and subtitles", "Pirata One", "More open letter shapes"],
        ] } },
        { p: "For the history of why Germany stopped using blackletter, and why the 1941 decree is often misremembered, read [blackletter's 1941 ban](/blog/blackletter-history-1941-ban). For copy-and-paste Fraktur in apps without fonts, use the [Fraktur generator](/fraktur-generator)." },
      ],
    },
    {
      h2: "Where does Germania One work best?",
      blocks: [
        { ul: [
          "**Signs and labels with long words.** Condensed letters keep a word like Brauhaus or Oktoberfest on one line.",
          "**YouTube thumbnails and posters.** Its heavy, flat strokes survive being scaled down; see our [thumbnail font guide](/blog/old-english-youtube-thumbnail-fonts).",
          "**Sleeves and narrow print areas** on shirts, where a wide blackletter would have to shrink.",
          "**Not for paragraphs.** At text sizes the narrow letters crowd together; switch to a plain font for anything longer than a line.",
        ] },
        { p: "Germania One has a single regular weight and no italic, so pair it with a plain sans-serif for supporting text. More options are in the [gothic fonts](/fonts/gothic) and [clothing brand fonts](/fonts/clothing-brand) collections." },
      ],
    },
  ],
  tools: ["/fraktur-generator", "/blackletter-generator", "/old-english-text-to-image"],
  faq: [
    { q: "Is Germania One free for commercial use?", a: "Yes. It is under the SIL Open Font License, which allows commercial use in logos, signs, merchandise and videos. You can't sell the font file itself." },
    { q: "Does Germania One have German characters?", a: "Yes. Our check of the font file found ß, ä, ö and ü, and the long s (ſ). It does not cover Central European letters such as ł, ř or ő." },
    { q: "Is Germania One a Fraktur font?", a: "It is Fraktur-inspired rather than a historical Fraktur. The letter shapes are simplified, squared and condensed for display use." },
    { q: "Does Germania One come in bold?", a: "No, Google Fonts has one regular weight, though it is already heavy. For more weights, use Grenze Gotisch." },
    { q: "How do I use Germania One in Canva or Word?", a: "Canva includes many Google Fonts, or you can upload it with a paid plan; in Word, download it from Google Fonts and install it. Our [Canva guide](/fonts/old-english/canva) and [Word guide](/fonts/old-english/word) cover both." },
  ],
};

export default page;
