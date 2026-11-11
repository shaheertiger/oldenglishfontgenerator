import type { PageContent } from "./types";
import { HOME_STYLES } from "@/lib/fonts";

const home: PageContent = {
  slug: "",
  title: "Old English Font Generator — Copy & Paste Blackletter Text",
  description:
    "Old English font generator with 60+ gothic, fraktur & blackletter styles. Copy and paste into Instagram, Discord or a tattoo preview. Free, no sign-up.",
  h1: "Old English Font Generator",
  crumb: "Home",
  intro:
    "This Old English font generator turns whatever you type into blackletter text you can copy and paste: classic Fraktur, heavy Bold Fraktur, tattoo layouts, gothic frames and more than sixty other variations. Type below, tap Copy on the style you like, and paste it anywhere that accepts text.",
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
          p: "People use these four words almost interchangeably, but each one comes from a different world. Here is the short version; the [blackletter generator](/blackletter-generator) page goes deeper into the history.",
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
            { h: "Instagram bio", p: "Put your name or a one-line motto in blackletter and keep the rest plain so the bio stays easy to read. See the [Instagram bio templates](/old-english-font-instagram)." },
            { h: "Tattoo preview", p: "Try a name or date in several styles before your consultation, then show the artist the one you like best." },
            { h: "Discord", p: "Display names and server nicknames accept these letters. Your unique @username does not." },
            { h: "Gaming names", p: "Clan tags and lobby names look sharper with a framed gothic style. Check each game's own character rules first." },
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
              ["Script or blackletter tattoo", "[Tattoo font generator](/tattoo-font-generator), [Latin phrases](/latin-tattoo-font), [Bible verses](/bible-verse-font)", "[Tattoo fonts](/fonts/tattoo)"],
              ["West Coast and lowrider lettering", "[Gangster font generator](/gangster-font-generator), [biker patches](/biker-font-generator)", "[Chicano fonts](/fonts/chicano)"],
              ["Band names and dark titles", "[Metal font generator](/metal-font-generator), [horror text](/horror-font-generator)", "[Halloween fonts](/fonts/halloween), [Metal Mania](/fonts/metal-mania)"],
              ["Diplomas, mastheads and documents", "[Diploma font](/diploma-font), [newspaper mastheads](/newspaper-masthead-font)", "[Old English Text MT and free lookalikes](/fonts/old-english-text-mt)"],
              ["Manuscripts and fantasy", "[Illuminated letters](/illuminated-letters), [medieval generator](/medieval-font-generator)", "[Fantasy fonts](/fonts/fantasy), [calligraphy fonts](/fonts/calligraphy)"],
              ["Shirts, hoodies and brands", "[Text to image export](/old-english-text-to-image)", "[Clothing brand fonts](/fonts/clothing-brand)"],
              ["TikTok and Facebook", "[TikTok names and bios](/old-english-font-tiktok), [Facebook posts](/old-english-font-facebook)", "Not needed: copy-paste text works in the app"],
            ],
          },
        },
        { p: "Every free font on the site, with our glyph and character-support measurements, is in [one comparison table](/fonts)." },
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
    hrefs: [
      "/old-english-tattoo-font",
      "/old-english-alphabet",
      "/old-english-name-generator",
      "/gothic-font-generator",
      "/fraktur-generator",
      "/old-english-cursive",
      "/old-english-numbers",
      "/old-english-font-instagram",
      "/old-english-font-discord",
      "/old-english-text-to-image",
    ],
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
      a: "Unicode only includes Fraktur letters, not Fraktur digits. The generator uses bold serif digits, which sit well next to blackletter, and the Roman numeral style turns dates into letters. The Old English numbers page lists every option.",
    },
    {
      q: "Will it work in Instagram, TikTok or Discord usernames?",
      a: "Usually not in the handle itself. Instagram, TikTok and Discord all restrict usernames to plain letters, numbers, dots and underscores. The styled text does work in the places shown to other people: Instagram's Name field and bio, TikTok's bio and Discord display names or nicknames.",
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
