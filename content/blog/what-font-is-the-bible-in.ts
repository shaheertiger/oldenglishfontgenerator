import type { BlogPost } from "@/lib/blog";

const post: BlogPost = {
  slug: "what-font-is-the-bible-in",
  title: "What Font Is the Bible In? From 1455 Textura to 8-pt Type",
  description:
    "What font is the Bible in? No single one: early Bibles used blackletter, modern ones compact serif faces at about 6–14 pt. Size chart inside.",
  date: "2026-11-11",
  readingTime: "4 min read",
  excerpt:
    "The Bible has been printed in hundreds of typefaces. Here is why the old ones look gothic, what modern editions use instead, and what the print-size labels actually mean.",
  related: ["old-english-font-size-guide", "long-s-explained", "blackletter-history-1941-ban"],
  body: [
    { type: "p", text: "There is no single Bible font. The first printed Bible, around 1455, used textura blackletter, and English Bibles stayed in blackletter into the 1600s; modern Bibles are set in compact serif text typefaces, usually somewhere between 6 and 14 points depending on whether the edition is compact, standard, large print or giant print. Which typeface a particular Bible uses is decided by its publisher, and many name it on the copyright page." },
    { type: "h2", text: "Why do old Bibles look gothic?" },
    { type: "p", text: "Because blackletter was simply what books looked like. Gutenberg's press in Mainz imitated the textura script that scribes already used for church books, so the earliest printed Bibles look like manuscripts. In England, black-letter stayed common for church Bibles, law books and proclamations well into the 1600s, even as roman type spread; the 1611 King James Version was printed in it. Over the following century, English printers moved to roman type, and Bibles followed." },
    { type: "p", text: "That history is why blackletter still signals scripture, liturgy and tradition today, and why people look for a gothic look when lettering a verse. If that is what you are after, the [Bible verse font](/bible-verse-font) page sets verses in gothic styles you can copy, with letter counts for the most popular passages." },
    { type: "h2", text: "What typefaces do modern Bibles use?" },
    { type: "p", text: "Modern Bibles have unusual typesetting demands. A complete Bible runs to roughly three-quarters of a million words in English, so publishers need type that stays readable at small sizes, fits many characters on a line, and survives printing on very thin paper where the other side shows through. That pushes them towards:" },
    { type: "ul", items: [
      "**Serif text faces** with sturdy, open letters rather than delicate, high-contrast ones.",
      "**Narrow proportions**, so two columns of text fit on a small page.",
      "**Purpose-made Bible typefaces.** Several large publishers commission or license type designed specifically for Bibles, tuned for thin paper and tiny verse numbers.",
      "**Separate faces for notes**, cross-references and headings, often a sans-serif alongside the serif text.",
    ] },
    { type: "p", text: "To find the exact typeface of a Bible you own, check the copyright page near the front; publishers often credit the typeface there, sometimes with the typesetter." },
    { type: "h2", text: "What do Bible font sizes mean? (size chart)" },
    { type: "p", text: "Labels like compact, large print and giant print are marketing categories, not standards, and different publishers draw the lines in different places. The ranges below are typical, not fixed. A point is 1/72 of an inch, about 0.35 mm, and it measures the type's body, not the visible letter, so two typefaces at the same point size can look different." },
    {
      type: "table",
      head: ["Edition label", "Typical body size", "Point size in mm", "Suits"],
      rows: [
        ["Compact or pocket", "about 6–7 pt", "2.1–2.5 mm", "Carrying in a bag; short reading sessions"],
        ["Standard or personal size", "about 8–9 pt", "2.8–3.2 mm", "Everyday reading with good eyesight"],
        ["Large print", "about 10–12 pt", "3.5–4.2 mm", "Long reading sessions, reading aloud"],
        ["Giant print", "about 13 pt and up", "4.6 mm and up", "Low vision; often split into volumes"],
      ],
    },
    { type: "p", text: "The millimetre column is simple conversion (points × 0.3528). If you are choosing a Bible for someone with low vision, judge from a sample page photo rather than the label alone, because x-height, paper colour and line spacing matter as much as the number." },
    { type: "h2", text: "Is there a free font that looks like an old Bible?" },
    { type: "p", text: "Yes. For the Gutenberg look, Texturina is a free typeface modelled on textura and redrawn to be readable. For the later German printed look, UnifrakturMaguntia is a faithful free Fraktur. For an English 17th-century book feel without blackletter, IM Fell English revives type from that period, irregular inking included. All three are open-licence; compare them in the [blackletter and medieval fonts](/fonts/blackletter) and [calligraphy fonts](/fonts/calligraphy) collections." },
    { type: "p", text: "Old printed Bibles also use the long s (ſ), which looks like an f without the full crossbar. It is a common source of misreading; our post on [the long s](/blog/long-s-explained) explains when it was used." },
    { type: "h2", text: "Should a church bulletin or verse card use blackletter?" },
    { type: "p", text: "Use it for a heading or a single short verse, not for paragraphs. Blackletter is slow to read for most people today, so a title such as Holy Communion or a short line such as Be still works well, while announcements and readings belong in a plain serif. The [blackletter generator](/blackletter-generator) explains the differences between textura, rotunda and Fraktur if you want the heading to match a particular era." },
    {
      type: "faq",
      items: [
        { q: "What font was the first printed Bible in?", a: "Textura, a tall, dense blackletter. Gutenberg's Bible, finished in Mainz around 1455, imitated the script of handwritten church books." },
        { q: "What font is the King James Bible in today?", a: "It depends on the edition. Modern KJV printings use whatever serif typeface their publisher chose; the 1611 first edition was in blackletter." },
        { q: "What font size is a large print Bible?", a: "Typically about 10–12 pt, though publishers define large print differently. Giant print editions usually start around 13 pt." },
        { q: "How do I find out which font my Bible uses?", a: "Look at the copyright page near the front. Many publishers name the typeface and sometimes the typesetter." },
        { q: "Is there a free Bible font I can download?", a: "For a historical look, Texturina and UnifrakturMaguntia are free under the SIL Open Font License. Publishers' own Bible typefaces are usually not free." },
      ],
    },
    { type: "cta", text: "Set a verse in gothic lettering and check its length with the", href: "/bible-verse-font", label: "Bible verse font tool" },
  ],
};

export default post;
