import type { PageContent } from "./types";

const page: PageContent = {
  slug: "bible-verse-font",
  title: "Bible Verse Font — 16 Gothic Styles, 10 Verses Counted",
  description:
    "Bible verse font in gothic blackletter: 16 copy-paste styles plus character and word counts for 10 popular KJV verses, for tattoos, cards and signs.",
  h1: "Bible Verse Font",
  crumb: "Bible Verse Font",
  intro:
    "The classic Bible verse font is blackletter, the same family of letters Gutenberg used for the first printed Bible around 1455, and this page sets your verse in 16 gothic styles you can copy. Below the tool, a table counts the characters and words in 10 of the most requested King James verses, so you know how long a verse really is before planning a tattoo, a card or a wall sign.",
  tool: {
    styles: [
      "fraktur", "bold-fraktur", "illuminated", "drop-cap", "fraktur-small-caps", "oe-cursive",
      "script", "long-s", "thorn", "deco-cross", "deco-maltese", "deco-fleuron",
      "deco-hedera", "deco-fleur", "frame-banner", "roman-date-light",
    ],
    sample: "The LORD is my shepherd",
    placeholder: "Type a verse or a reference…",
    presets: ["The LORD is my shepherd", "Be still, and know", "Faith Hope Charity", "Psalm 23:1", "John 3:16", "Blessed"],
  },
  stylesHeading: "Gothic verse styles",
  howTo: {
    heading: "How to set a Bible verse in gothic letters",
    steps: [
      ["Paste the exact wording", "Copy the verse from the translation you want. KJV, NIV and ESV word the same verse differently, and the length changes with them."],
      ["Choose a weight", "Fraktur is light enough for a full verse; Bold Fraktur and Illuminated Initials work better for two to five words or a heading."],
      ["Add the reference", "Type the reference on its own, such as Psalm 23:1. The Roman Numerals style turns it into Psalm XXIII:I, a traditional touch."],
    ],
  },
  sections: [
    {
      h2: "How long are the most popular verses?",
      blocks: [
        { p: "We counted these ourselves from the King James Version text. Characters include spaces and punctuation; letters count only A–Z. Long verses are hard to fit in heavy blackletter, so many people use a short extract, such as Be still, and know, instead of the full verse." },
        {
          table: {
            head: ["Verse (KJV)", "Text", "Characters", "Letters", "Words"],
            rows: [
              ["Psalm 23:1", "The LORD is my shepherd; I shall not want.", "42", "32", "9"],
              ["Philippians 4:13", "I can do all things through Christ which strengtheneth me.", "58", "48", "10"],
              ["Proverbs 3:5", "Trust in the LORD with all thine heart; and lean not unto thine own understanding.", "82", "66", "15"],
              ["1 Corinthians 13:13", "And now abideth faith, hope, charity, these three; but the greatest of these is charity.", "88", "69", "15"],
              ["Psalm 46:10", "Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth.", "102", "77", "22"],
              ["Romans 8:28", "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.", "126", "100", "25"],
              ["Jeremiah 29:11", "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.", "129", "99", "26"],
              ["John 3:16", "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.", "141", "113", "25"],
              ["Joshua 1:9", "Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.", "160", "126", "30"],
              ["Isaiah 40:31", "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.", "172", "134", "33"],
            ],
          },
        },
        { p: "As a rough guide, a verse over about 60 characters will need several lines in blackletter. If it's for skin, the [Old English tattoo font](/old-english-tattoo-font) page has a mockup where you can test line breaks." },
      ],
    },
    {
      h2: "Why do Bibles look gothic?",
      blocks: [
        { p: "Because the earliest printed ones were. Johannes Gutenberg's Bible, finished in Mainz around 1455 and often called the 42-line Bible after the number of lines on most pages, was printed in textura, the tall, tightly packed blackletter of church manuscripts. When the King James Bible appeared in 1611, it too was printed in blackletter, with words the translators had supplied for sense set in lighter roman type; later editions show those words in italics." },
        { p: "Bibles moved to roman type over the following centuries, but the association stuck. Blackletter still signals scripture, liturgy and tradition, which is why it appears on church signs, confirmation certificates and memorial cards. The [blackletter generator](/blackletter-generator) explains how textura differs from the Fraktur your phone actually displays." },
      ],
    },
    {
      h2: "Which style suits a church bulletin, card or memorial?",
      blocks: [
        {
          table: {
            head: ["Use", "Style to try", "Tip"],
            rows: [
              ["Church bulletin heading", "Fraktur Small Caps", "Readable, still traditional"],
              ["Baptism or confirmation card", "Illuminated Initials", "Bold first letter of each word, like a manuscript"],
              ["Memorial card", "Fraktur with Hedera Leaf ❦", "Quiet decoration that prints in black"],
              ["Catholic or Orthodox theme", "Maltese Cross ✠ or Cross of Jerusalem ☩", "Crosses with a long liturgical history"],
              ["Verse reference", "Roman Numerals (Light Fraktur)", "Chapter and verse become numerals"],
            ],
          },
        },
        { p: "For printed cards and signs, an installed font gives cleaner edges than copied text. The free [Old English fonts](/fonts/old-english) and [calligraphy fonts](/fonts/calligraphy) pages list open-licence options." },
      ],
    },
  ],
  built:
    "The verse styles use Unicode Mathematical Fraktur and Bold Fraktur. The Long S style swaps s for ſ inside words, as 17th-century printers did; the Thorn style writes th as þ. Crosses and leaves are standard symbols from the Miscellaneous Symbols and Dingbats blocks.",
  related: {
    heading: "More lettering for faith and tradition",
    hrefs: ["/old-english-tattoo-font", "/blackletter-generator", "/medieval-font-generator", "/latin-tattoo-font", "/gothic-symbols", "/illuminated-letters"],
  },
  faq: [
    { q: "What font is used for Bible verses?", a: "There's no single one, but gothic blackletter is the traditional choice because the first printed Bibles used it. Modern Bibles are set in readable serif fonts; blackletter is used for headings, cards and tattoos." },
    { q: "What font was the King James Bible printed in?", a: "The 1611 first edition was printed in blackletter, with words added by the translators set in roman type. Later editions switched to roman type and marked those words with italics." },
    { q: "Is there a Christian or Catholic font?", a: "No font belongs to one church, but blackletter, uncial and decorated initials are strongly associated with Christian manuscripts. Adding a Maltese cross ✠ or Jerusalem cross ☩ makes the theme clear." },
    { q: "How many characters is John 3:16?", a: "In the King James Version, 141 characters including spaces and punctuation, 113 letters and 25 words." },
    { q: "What is the shortest popular verse for a tattoo?", a: "Of the ten in our table, Psalm 23:1 is the shortest at 42 characters. Many people shorten longer verses to a key phrase, such as Be still, and know." },
    { q: "Can I copy a gothic Bible verse into Word or Canva?", a: "Yes, it pastes as text. For printing, it's sharper to install a blackletter font and type the verse normally; see the [Word guide](/fonts/old-english/word)." },
    { q: "Is the KJV text free to use?", a: "The King James Version is in the public domain in most countries. In the United Kingdom it is still under Crown rights, so check the rules if you're publishing there." },
  ],
};

export default page;
