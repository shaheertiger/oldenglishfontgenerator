import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL. Angle: the Renaissance chancery
// italic hand and its pairing with Roman capitals, as opposed to /italic,
// which is a general slanted-text converter.
const page: PageContent = {
  slug: "font-generator/italianate",
  file: "font-generator-italianate",
  title: "Italianate Font Generator – 10 Chancery Italic Styles, Free",
  description:
    "Italianate font generator: 10 chancery italic and Roman capital styles in the Renaissance manner. Type a line, tap Copy, paste it as text. Free.",
  h1: "Italianate Font Generator",
  crumb: "Italianate Font",
  intro:
    "An italianate font generator sets your words in the manner of the Italian Renaissance hand: a slanted, narrow italic lowercase paired with upright Roman capitals. This page gives you 10 such layouts, from an italianate script line with a Roman initial to all-capital inscriptions with a raised dot between words. The chancery italic font look comes from the cancelleresca, the hand of Renaissance chancery scribes, and the Renaissance italic font rows here are built for menus, place cards, book-style titles and quotations rather than for loud social captions.",
  tool: {
    styles: [
      "roman-initial-italic", "italic-serif", "bold-italic-serif", "u-italic-spaced", "roman-inscription",
      "bold-serif", "u-small-caps", "u-small-caps-spaced", "u-small-caps-underline", "u-bold-spaced",
    ],
    sample: "Trattoria della Luna",
    placeholder: "Type a title, a name or a motto…",
    presets: ["Trattoria della Luna", "Festina lente", "Anno Domini 1522", "Vita nuova"],
  },
  stylesHeading: "Italianate Text Styles",
  howTo: {
    heading: "How to set a line in the italianate manner",
    steps: [
      ["Write it properly cased", "Use capitals where a scribe would: the first letter of names and of the line. Roman Capital + Italic turns those into upright capitals."],
      ["Mix two rows", "A heading in Roman Inscription capitals over a line of Renaissance Italic is the classic Renaissance title-page pairing."],
      ["Copy each line", "Copy and paste the lines separately so each keeps its own style."],
    ],
  },
  sections: [
    {
      h2: "What makes lettering italianate",
      blocks: [
        { p: "In fifteenth-century Italy, humanist scribes developed a quick, slanted, joined-up hand alongside their upright book script. Papal and government chanceries used it for letters and briefs, which is why calligraphers call it chancery italic or cancelleresca. In 1501 the Venetian printer Aldus Manutius issued a pocket edition of Virgil in a type cut to imitate this hand, and that is the origin of italic type. In 1522 the scribe Ludovico degli Arrighi published a printed manual teaching it." },
        {
          cards: [
            { h: "Narrow, slanted lowercase", p: "Letters lean slightly and are compressed sideways. The Renaissance Italic row reproduces this proportion." },
            { h: "Upright Roman capitals", p: "Chancery writers usually kept their capitals upright and modeled them on ancient Roman letters. Roman Capital + Italic does this automatically for each word's first letter." },
            { h: "Inscriptional caps for headings", p: "The Roman Inscription row writes in capitals only, uses V for U and I for J as Roman stonecutters did, and separates words with a raised dot. Numbers become Roman numerals." },
          ],
        },
      ],
    },
    {
      h2: "Italic lowercase and Roman capitals to copy",
      blocks: [
        { p: "To assemble a line by hand, take capitals from the Bold Serif rows and lowercase from the italic rows. Each cell copies one character." },
        { chart: { styles: ["italic-serif", "bold-serif"], sets: ["lower", "upper"] } },
      ],
    },
    {
      h2: "Italianate vs. italic vs. calligraphy",
      blocks: [
        { p: "The [italics generator](/font-generator/italic) is the quick tool for slanting any text, including sans-serif italics that would look out of place on a Renaissance menu. This page is narrower: it sticks to the serif italic and capital forms a chancery scribe would recognize. For looped copperplate and other pen hands see the [calligraphy generator](/font-generator/calligraphy), and for the Gothic book hands the Italian humanists moved away from, the [blackletter](/font-generator/blackletter) page." },
      ],
    },
  ],
  built:
    "The italic rows use Mathematical Italic (U+1D434–U+1D467) and Bold Italic (U+1D468–U+1D49B). Capitals come from Mathematical Bold (U+1D400–U+1D433), the inscription row adds the middle dot U+00B7 between words, and the small-capital rows borrow letters such as ᴀ, ʙ and ᴄ from the Phonetic Extensions and IPA blocks.",
  related: {
    heading: "Related lettering",
    hrefs: ["/font-generator/italic", "/font-generator/calligraphy", "/font-generator/calligraphy-capital-letters", "/latin-tattoo-font", "/diploma-font"],
  },
  faq: [
    { q: "What does italianate mean for a font?", a: "Italian in style. For lettering it usually means the Renaissance chancery italic and the upright Roman capitals written with it." },
    { q: "Is chancery italic the same as italics?", a: "Chancery italic is the handwritten ancestor; italic type was cut in Venice around 1500 to imitate it. Most modern italics still keep its slant and narrow shape." },
    { q: "How do I make an italianate title?", a: "Put the heading in Roman Inscription or Bold Spaced, then the subtitle in Renaissance Italic. Copy and paste the two lines separately." },
    { q: "Why does the inscription style change U to V?", a: "Classical Latin inscriptions had no separate U or J, so the row writes V and I instead, as on Roman monuments." },
    { q: "Can I use an italianate font on a restaurant menu?", a: "For a digital menu or social post, copy the text from here. For a printed menu, install a real italic or chancery typeface so it prints sharply." },
    { q: "Why are numbers not italic?", a: "Unicode has no italic digits. Use the Roman Inscription row if you want a date as Roman numerals instead." },
  ],
};

export default page;
