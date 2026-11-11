import type { PageContent } from "./types";

const page: PageContent = {
  slug: "old-english-font-instagram",
  title: "Old English Font for Instagram — Bio Templates to Copy",
  description:
    "Old English font for Instagram: blackletter bio templates with a live 150-character counter, plus where styled text works on your profile.",
  h1: "Old English Font for Instagram",
  crumb: "Old English Font for Instagram",
  intro:
    "Instagram has no font menu, but an Old English font for Instagram is just a paste away. Write your bio below and each style shows a character count against the 150-character bio limit, so you know it will fit before you open the app. The presets are ready-made bio lines you can edit.",
  tool: {
    styles: ["fraktur", "bold-fraktur", "fraktur-plain-lower", "illuminated", "oe-cursive", "deco-stars", "deco-heart", "frame-chevron", "fraktur-small-caps", "deco-rose", "word-dots", "gothic-framed"],
    sample: "Stay wild, stay gold",
    placeholder: "Write your Instagram bio…",
    presets: ["Stay wild, stay gold", "Tattoo artist • Bookings open", "Est. 2001 | Chicago", "Living my own fairytale", "Dark academia enthusiast"],
    limit: { label: "Instagram bio", max: 150 },
  },
  stylesHeading: "Instagram bio styles",
  howTo: {
    heading: "How to put Old English text in your Instagram bio",
    steps: [
      ["Write and check the count", "Type your bio and watch the counter on each style. Red means it is over 150."],
      ["Copy your style", "Press Copy on the style you like."],
      ["Paste in Edit profile", "In Instagram, open your profile, tap Edit profile, then Bio, and paste. Save and check how it looks to others."],
    ],
  },
  sections: [
    {
      h2: "Where Old English text works on Instagram",
      blocks: [
        {
          table: {
            head: ["Field", "Styled text?", "Notes"],
            rows: [
              ["Bio", "Yes", "Limited to 150 characters."],
              ["Name", "Yes", "The bold line above your bio, limited to 30 characters. It also helps people find you, so keep a recognisable word in it."],
              ["Username (@handle)", "No", "Only letters, numbers, periods and underscores."],
              ["Captions and comments", "Yes", "Long captions in blackletter are tiring to read; use it for the first line."],
              ["Story text", "Yes", "Paste into a text box. Instagram's own story fonts apply on top, so results vary."],
            ],
          },
        },
      ],
    },
    {
      h2: "Why the counter can say more than you typed",
      blocks: [
        { p: "Each Fraktur letter is stored as two hidden units in the way most apps count text, so a 40-letter bio can measure 80 or more. The counter above uses that stricter count to be safe. If the counter says you're close, mix plain and styled text: style only your name or the first line." },
      ],
    },
    {
      h2: "Bio templates",
      blocks: [
        { ul: [
          "𝔑𝔞𝔪𝔢 • what you do • where you are",
          "𝕺𝖜𝖓𝖊𝖗 at Your Shop ✦ link below",
          "☙ quote you live by ❧ and plain-text contact line",
          "𝔈𝔰𝔱. 1998 | city | one hobby",
        ] },
        { p: "Notice that every template keeps something in plain text. People scan bios in a second or two, and readable words still matter most." },
      ],
    },
  ],
  built:
    "Bio styles use Mathematical Fraktur and Bold Fraktur. The counter measures UTF-16 code units, the unit many apps use internally, in which every Fraktur letter outside the Letterlike Symbols block counts as two. Instagram does not publish exactly how it counts, so treat the number as a cautious estimate.",
  related: {
    heading: "More Old English tools for your profile",
    hrefs: ["/old-english-name-generator", "/old-english-cursive", "/old-english-font-discord", "/old-english-letters", "/gothic-font-generator", "/old-english-alphabet", "/old-english-font-tiktok", "/old-english-font-facebook"],
  },
  faq: [
    { q: "Can I change my Instagram font to Old English?", a: "Instagram doesn't let you change fonts, but you can paste Old English Unicode characters into your bio, Name field, captions and comments." },
    { q: "Why won't Instagram save my styled username?", a: "Usernames can only contain plain letters, numbers, periods and underscores. Put styled text in the Name field instead." },
    { q: "Will styled text hurt my searchability?", a: "It can. Search matches plain words more reliably, so keep your real name or business name in plain text somewhere in your Name field or bio." },
    { q: "Why does my bio look different on my friend's phone?", a: "Each phone draws these characters with its own fonts, so shapes and spacing differ a little between iPhone and Android." },
    { q: "How long can my bio be?", a: "Instagram's bio limit is 150 characters. Because styled letters may count double, aim for well under the limit when using blackletter." },
    { q: "Can screen readers read my styled bio?", a: "Often not well. Some read each letter as a maths symbol. Keeping key details in plain text helps everyone." },
  ],
};

export default page;
