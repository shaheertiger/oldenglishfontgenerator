import type { PageContent } from "./types";
import { HOME_STYLES } from "@/lib/fonts";

const home: PageContent = {
  slug: "",
  title: "Blackletter Text Generator: 60+ Old English Styles, Free",
  description:
    "Blackletter text generator with 60+ Old English, gothic and Fraktur styles, a tattoo preview and image export. Type once, tap Copy. Free, no sign-up.",
  h1: "Blackletter & Old English Text Generator",
  crumb: "Home",
  intro:
    "This blackletter text generator, an Old English text generator and gothic text generator in one, turns whatever you type into 60+ styles you can copy and paste: classic Fraktur, heavy Bold Fraktur, tattoo layouts, gothic frames and decorated variations, plus a tattoo preview and PNG export further down. Want just the classic look fast? The [Old English font](/font-generator/old-english) page has the 14 most-used styles and ready-made words.",
  tool: {
    styles: HOME_STYLES,
    sample: "Old English Font",
    placeholder: "Type your name, a quote or a username…",
    presets: ["Your Name Here", "Est. 1998", "Carpe Diem", "Stay Gold"],
  },
  stylesHeading: "Old English Font Styles",
  howTo: {
    heading: "How to Copy & Paste Old English Text",
    steps: [
      ["1. Type", "Enter a name, a word or a short line in the box. Every style below updates as you type, and nothing leaves your device."],
      ["2. Pick & copy", "Scroll the list, find a style you like and press its Copy button. A small message confirms it reached your clipboard."],
      ["3. Paste", "Switch to Instagram, Discord, a document or a message and paste it. The letters arrive as ordinary text, not as an image."],
    ],
  },
  sections: [
    {
      h2: "Old English vs. Gothic vs. Blackletter vs. Fraktur",
      blocks: [
        {
          p: "People use these four words almost interchangeably, but each one comes from a different world. Here is the short version; the [blackletter generator](/font-generator/blackletter) page goes deeper into the history.",
        },
        {
          table: {
            head: ["Name", "Who uses it", "What it really means", "Sample"],
            glyphCols: [3],
            rows: [
              ["Old English", "Tattoo shops, sign painters, font menus", "A popular label for heavy blackletter lettering. It has nothing to do with the Old English language.", "𝔒𝔩𝔡 𝔈𝔫𝔤𝔩𝔦𝔰𝔥"],
              ["Gothic", "Everyday speech, fashion, music", "A loose word for any dark, pointed, medieval-looking type.", "𝕲𝖔𝖙𝖍𝖎𝖈"],
              ["Blackletter", "Typographers and historians", "The whole family of broad-pen scripts used in Europe from about the 12th century.", "𝔅𝔩𝔞𝔠𝔨𝔩𝔢𝔱𝔱𝔢𝔯"],
              ["Fraktur", "German printing, Unicode", "One branch of blackletter with broken curves. Unicode's letters are modelled on it.", "𝔉𝔯𝔞𝔨𝔱𝔲𝔯"],
            ],
          },
        },
      ],
    },
    {
      h2: "Where to Use Old English Letters",
      blocks: [
        {
          cards: [
            { h: "Bios and display names", p: "Put your name or a one-line motto in blackletter and keep the rest plain so it stays easy to read. Username fields often allow only plain letters, so use the name or bio field." },
            { h: "Tattoo preview", p: "Try a name or date in several styles before your consultation, then show the artist the one you like best. The [Old English tattoo font](/font-generator/old-english-tattoo) page adds stencil-style layouts." },
            { h: "Gaming names", p: "Clan tags and lobby names look sharper with a framed gothic style. Each game sets its own character rules, so test it first." },
            { h: "Logos and merch mockups", p: "Sketch a band name or shop sign quickly. For print, switch to a real blackletter typeface." },
            { h: "Weddings and certificates", p: "Draft headings for invitations, awards or diplomas, then hand the wording to whoever sets the final type. The [diploma font](/diploma-font) page explains what printers actually use." },
          ],
        },
      ],
    },
    {
      h2: "Which Old English style fits your project?",
      blocks: [
        { p: "Blackletter means different things to a tattoo artist, a metal band and a newspaper. These pages each start from one use and pick the styles, presets and free fonts that suit it." },
        {
          table: {
            head: ["Project", "Start here", "Free fonts to install"],
            rows: [
              ["Script or blackletter tattoo", "[Tattoo font generator](/tattoo-font-generator), [Latin phrases](/latin-tattoo-font), [Bible verses](/bible-verse-font)", "Tattoo fonts"],
              ["West Coast and lowrider lettering", "[Gangster font generator](/font-generator/gangster), [Chicano lettering](/chicano-font-generator)", "[Free blackletter fonts](/fonts)"],
              ["Band names and dark titles", "[Metal font generator](/metal-font-generator), [horror text](/horror-font-generator)", "[Pirata One](/fonts/pirata-one)"],
              ["Diplomas, mastheads and documents", "[Diploma font](/diploma-font), [newspaper mastheads](/newspaper-masthead-font)", "[Old English Text MT and free lookalikes](/fonts/old-english-text-mt)"],
              ["Manuscripts and fantasy", "[Illuminated letters](/illuminated-letters), [medieval font](/font-generator/medieval)", "[Calligraphy fonts](/fonts/calligraphy)"],
              ["Shirts, hoodies and brands", "[Text to image export](/old-english-text-to-image)", "[UnifrakturCook](/fonts/unifrakturcook)"],
            ],
          },
        },
        { p: "Every free font on the site, with our glyph and character-support measurements, is in [one comparison table](/fonts)." },
      ],
    },
    {
      h2: "Popular lettering tools",
      blocks: [
        { p: "The pages people search for most, each with its own styles and a full copyable table:" },
        {
          ul: [
            "[Old English font alphabet](/font-generator/old-english-letters): every blackletter letter A–Z and a–z with copy buttons.",
            "[Gothic letters](/font-generator/gothic-letters): blackletter A–Z plus dark decorated sets and the real Gothic alphabet.",
            "[Medieval font](/font-generator/medieval): manuscript styles with thorn and the long s.",
            "[Italics generator](/font-generator/italic): serif and sans italic text without a font menu.",
            "[Hieroglyphics translator](/hieroglyphics-translator): English to Egyptian sign alphabet, with the sign key.",
            "[Cuneiform translator](/cuneiform-translator): English to cuneiform signs, letter by letter.",
            "[Letters in different fonts](/different-fonts): one letter or number in 40+ styles.",
            "[Fancy letters alphabet](/font-generator/fancy-letters): script, bubble, squared and more, A–Z.",
          ],
        },
      ],
    },
    {
      h2: "Old English Alphabet A–Z",
      blocks: [
        { p: "Need a single character instead of a whole word? Tap any tile to copy that letter on its own." },
        { widget: "alphabet-compact" },
      ],
    },
  ],
  built:
    "Every style starts from Unicode's Mathematical Fraktur letters (U+1D504–U+1D537) or Mathematical Bold Fraktur (U+1D56C–U+1D59F). Five regular Fraktur capitals were encoded earlier in the Letterlike Symbols block, so ℭ, ℌ, ℑ, ℜ and ℨ come from there. Frames, crosses and underlines are separate symbols or combining marks added around those letters.",
  related: {
    heading: "More Old English Tools",
    hrefs: ["/font-generator/old-english-tattoo", "/old-english-alphabet", "/old-english-name-generator", "/font-generator/blackletter", "/font-generator/fraktur", "/font-generator/old-cursive", "/symbols", "/old-english-text-to-image"],
  },
  faq: [
    {
      q: "Is this the Old English language?",
      a: "No. Old English is also the name of the language spoken in England before about 1150, the language of Beowulf. This tool does not translate anything. It swaps the shape of each letter for a blackletter look-alike, so your words stay in modern English.",
    },
    {
      q: "Why do some letters (ℭ ℌ ℑ ℜ ℨ) look different?",
      a: "Those five capitals were added to Unicode years before the rest of the Fraktur alphabet, in a block meant for mathematical symbols. They often come from a different font on your phone, so they can look slightly larger, lighter or narrower than the letters around them.",
    },
    {
      q: "Why are there no Old English numbers?",
      a: "Unicode only includes Fraktur letters, not Fraktur digits. The generator uses bold serif digits, which sit well next to blackletter, and the Roman numeral style turns dates into letters. The [Old English alphabet](/old-english-alphabet) page lists every number option.",
    },
    {
      q: "Can I use Old English letters in a username?",
      a: "Often not in the handle itself: many sites limit usernames to plain letters, numbers and a few symbols. Name, bio and caption fields are usually less strict, but each site sets its own rules.",
    },
    {
      q: "Is it safe for screen readers and search engines?",
      a: "Partly. Screen readers may read each letter as a maths symbol or skip it, and search engines may not match it to the normal word. Use it for a name or a short headline and keep important information in plain text next to it.",
    },
    {
      q: "Can I use it for a tattoo?",
      a: "Use it to preview and choose a style, not as the final stencil. Unicode letters are drawn by whatever font your phone uses, so their shapes vary. A tattoo artist will redraw the lettering by hand or from a proper typeface, and our tattoo page lets you export a PNG to show them.",
    },
    {
      q: "Why do I see boxes or question marks?",
      a: "Your device has no font containing those characters. It happens on older Android phones, some smart TVs and a few desktop apps. Updating the system usually fixes it, and the people you send the text to may still see it correctly.",
    },
    {
      q: "Is it free?",
      a: "Yes. There is no sign-up, no limit and no watermark. The conversion happens in your browser, so the text you type is not sent to our server.",
    },
  ],
};

export default home;
