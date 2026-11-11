import type { PageContent } from "./types";

const page: PageContent = {
  slug: "illuminated-letters",
  title: "Illuminated Letters — 12 Medieval Drop Cap Styles to Copy",
  description:
    "Illuminated letters and drop caps: start any text with a medieval decorated initial in 12 copy-paste styles, or export a framed capital as PNG. Free.",
  h1: "Illuminated Letters",
  crumb: "Illuminated Letters",
  intro:
    "An illuminated letter is the large, decorated first capital of a medieval page, and you can recreate the effect in 12 ways below, from a bracketed Bold Fraktur drop cap to initials framed by fleurons. Type the opening words of a story, invitation or chapter heading; every style copies as text, and the export panel turns your initial into an image.",
  tool: {
    styles: [
      "drop-cap", "illuminated", "monogram-framed", "deco-fleuron", "bold-fraktur", "frame-lenticular",
      "frame-tibetan", "deco-hedera", "deco-crown", "monogram", "fraktur-small-caps", "gothic-framed",
    ],
    sample: "Once upon a time",
    placeholder: "Type the opening words…",
    presets: ["Once upon a time", "In the beginning", "Here begins the tale", "Anno Domini", "Chapter One"],
  },
  stylesHeading: "Drop cap and initial styles",
  howTo: {
    heading: "How to start a page with an illuminated letter",
    steps: [
      ["Type the first line", "The first letter becomes the decorated initial, so begin with a capital and a strong opening word."],
      ["Pick the treatment", "Framed Drop Cap boxes the first letter only; Illuminated Initials enlarges the first letter of every word, like a manuscript title."],
      ["Copy or export", "Paste the text where you need it, or use the PNG export below for a crisp single capital in a document or print."],
    ],
  },
  sections: [
    {
      h2: "What is the difference between an illuminated letter, a versal and a drop cap?",
      blocks: [
        {
          table: {
            head: ["Term", "What it means", "Where you see it"],
            rows: [
              ["Illuminated letter", "A capital decorated with colour and often gold leaf (illumination literally means lighting up the page)", "Medieval manuscripts, Bibles and books of hours"],
              ["Historiated initial", "An initial with a small scene or figure painted inside it", "Larger manuscripts, at the start of major sections"],
              ["Versal", "A built-up capital that marks the start of a verse or paragraph, drawn with several pen strokes", "Psalters, calligraphy practice sheets"],
              ["Drop cap", "A large first letter that drops down beside two or more lines of text", "Printed books, magazines, websites"],
              ["Raised cap", "A large first letter that sits on the first line and rises above it", "Modern editorial design"],
            ],
          },
        },
        { p: "In copy-paste text, a true drop cap that spans several lines isn't possible, because a single character can't change the line height around it. The Framed Drop Cap style imitates one by boxing a heavy letter at the start, which reads clearly on social media. For a proper multi-line drop cap, use a font in Word, Google Docs or a design app." },
      ],
    },
    {
      h2: "How do I make a decorated initial as an image?",
      blocks: [
        { p: "Type a single letter, or a short word, and download it as PNG or SVG. The image is drawn with real open-licence blackletter fonts, so it stays sharp in print and on invitations." },
        { widget: "image-export" },
      ],
    },
    {
      h2: "Which fonts give the most medieval-looking capitals?",
      blocks: [
        {
          ul: [
            "**Before blackletter:** uncial capitals were used for early medieval initials. [Uncial Antiqua](/fonts/uncial-antiqua) is a free version.",
            "**Classic gothic manuscript:** textura and Fraktur fonts such as Texturina and UnifrakturMaguntia, listed with others in the [blackletter and medieval fonts](/fonts/blackletter) collection.",
            "**Fantasy books and games:** decorative faces like Cinzel Decorative, in the [fantasy fonts](/fonts/fantasy) collection.",
          ],
        },
        { p: "For single letters, initials and monograms to copy, see [Old English letters](/old-english-letters). For whole lines of manuscript-style text with thorns and the long s, use the [medieval font generator](/medieval-font-generator)." },
      ],
    },
  ],
  built:
    "Initials use Mathematical Bold Fraktur (U+1D56C–U+1D59F) with the rest of the text in Mathematical Fraktur. Frames come from CJK brackets 【】 〖〗, the Tibetan ornaments ༺ ༻, and fleurons ☙ ❧ ❦ from the Dingbats and Miscellaneous Symbols blocks.",
  related: {
    heading: "More medieval lettering",
    hrefs: ["/old-english-letters", "/medieval-font-generator", "/old-english-text-to-image", "/gothic-symbols", "/old-english-alphabet", "/how-to-write-old-english"],
  },
  faq: [
    { q: "What is an illuminated letter?", a: "The decorated first capital of a section in a medieval manuscript, usually painted in colour and sometimes gold. Illumination refers to the way gold and colour light up the page." },
    { q: "How do I make a drop cap in copy-paste text?", a: "Use the Framed Drop Cap style, which boxes a heavy blackletter first letter. A real multi-line drop cap needs an app with formatting, such as Word or Google Docs." },
    { q: "Is there an illuminated letters font?", a: "There are decorative initial fonts, but most are commercial. Free open-licence options such as Uncial Antiqua and UnifrakturCook give a strong medieval capital, especially when exported as an image." },
    { q: "What is a versal letter?", a: "A built-up capital drawn with several pen strokes, used to mark the start of a verse or paragraph in manuscripts." },
    { q: "Can I use an illuminated letter on a wedding invitation?", a: "Yes. Export the couple's initial as a PNG or SVG and place it above the names, or use the Couple Monogram style on the Old English letters page." },
    { q: "Why does my initial look plain on some phones?", a: "Copy-paste letters use your device's fonts. For a guaranteed look, use the image export, which draws the letter with a real blackletter font." },
  ],
};

export default page;
