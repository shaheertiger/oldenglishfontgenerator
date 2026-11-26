import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL, which ranked in Bing before the
// rebuild removed it.
const page: PageContent = {
  slug: "font-generator/1940s",
  file: "font-generator-1940s",
  title: "1940s Font Generator – 14 Vintage Styles to Copy & Paste",
  description:
    "1940s font generator: 14 vintage styles – typewriter, bold headline serif, masthead gothic, underlined memo text, Morse. Type, tap Copy, paste. Free.",
  h1: "1940s Font Generator",
  crumb: "1940s Font Generator",
  intro:
    "A 1940s font generator gives ordinary text the look of 1940s printing and paperwork, and this one offers 14 vintage styles you can copy: typewriter letters, heavy headline serifs, spaced small capitals, newspaper-masthead gothic and even Morse code. People searching for a font 1940s style or 1940s letter styles usually want one of three things: a typed wartime letter, a bold poster headline, or an old-Hollywood title card. The sections below show which style fits each.",
  tool: {
    styles: [
      "typewriter", "bold-serif", "italic-serif", "u-small-caps-spaced", "u-bold-spaced", "roman-inscription",
      "u-underline", "u-double-underline", "u-bold-underline", "u-strikethrough", "u-small-caps-underline",
      "bold-fraktur-caps", "frame-banner", "u-morse",
    ],
    sample: "Letters from Home",
    placeholder: "Type a headline, a name or a line from a letter…",
    presets: ["Letters from Home", "Dear Margaret", "Victory Garden", "Now Showing", "Ration Book", "1945"],
  },
  stylesHeading: "Vintage 1940s text styles",
  howTo: {
    heading: "How to make text look like the 1940s",
    steps: [
      ["Decide what it is", "A typed letter, a poster headline or a film title each call for a different style."],
      ["Choose the style", "Typewriter for letters and telegrams, Bold Serif or Bold Spaced for headlines, Small Caps Spaced for title cards."],
      ["Copy it", "Tap Copy and paste it into your caption, scrapbook page or design mock-up."],
    ],
  },
  sections: [
    {
      h2: "Vintage alphabet chart: typewriter and headline serif",
      blocks: [
        { p: "The two workhorses of the decade's paper: monospaced typewriter letters, where every character takes the same width, and a bold serif close to the heavy type used in headlines. Both include digits, handy for dates, serial numbers and addresses." },
        { chart: { styles: ["typewriter", "bold-serif"], sets: ["upper", "lower", "digits"] } },
      ],
    },
    {
      h2: "1. Which 1940s style matches my project?",
      blocks: [
        { cards: [
          { h: "A letter or telegram", p: "Typewriter. Keep the line short and lowercase-heavy; add a typed date such as 𝟷𝟸 𝙼𝙰𝚈 𝟷𝟿𝟺𝟹 above it." },
          { h: "A poster headline", p: "Bold Serif or Bold Spaced in capitals. Posters of the period favored big, simple letterforms that could be read across a street." },
          { h: "A newspaper front page", p: "Bold Fraktur All Capitals for the paper's name, Bold Serif for the headline underneath." },
          { h: "An old-Hollywood title card", p: "Small Caps Spaced or Renaissance Italic, centered, with the Banner Rule style for a line of decoration." },
          { h: "A censored document", p: "Strikethrough over a word or two looks like a redacted line in a military memo." },
          { h: "A coded message", p: "Morse Code. Radio operators of the era sent messages in it, so it fits spy and resistance themes." },
        ] },
      ],
    },
    {
      h2: "2. How do I get a 1940s typewriter font?",
      blocks: [
        { p: "Type your text and copy the Typewriter style. It uses Unicode's monospace letters, the same fixed-width idea as a mechanical typewriter, so columns line up when you stack lines. Real typed pages also have uneven ink and letters that sit slightly off the line; plain text can't reproduce that, so for a printed prop or a poster, install an open-licence typewriter font and set the text in a design program. For handwritten-looking notes from the same period, try the [old cursive](/font-generator/old-cursive) generator." },
      ],
    },
    {
      h2: "3. What made 1940s lettering look the way it did?",
      blocks: [
        { p: "Most of what people now call 1940s style comes from a few printing technologies of the time: typewriters for offices and letters, metal and wood type for posters and newspapers, and hand-lettered title cards for films. Newspapers had long used blackletter for their mastheads, which is why the Bold Fraktur option is here; the [newspaper masthead font](/newspaper-masthead-font) page has more on that tradition. The [Library of Congress](https://www.loc.gov/pictures/) holds large public collections of posters and photographs from the decade if you want real references to match." },
      ],
    },
  ],
  built:
    "Typewriter uses Mathematical Monospace (U+1D670–U+1D6A3) with monospace digits; Bold Serif uses Mathematical Bold; Small Caps borrows IPA and phonetic letters like ᴀ and ʙ; underline, double underline and strikethrough add combining marks U+0332, U+0333 and U+0336 after each character.",
  related: {
    heading: "More vintage lettering",
    hrefs: ["/newspaper-masthead-font", "/font-generator/old-cursive", "/font-generator/strikethrough", "/font-generator/italianate", "/diploma-font", "/old-english-text-to-image"],
  },
  faq: [
    { q: "What fonts were used in the 1940s?", a: "Typewriter faces in offices, bold serif and sans-serif type for posters and headlines, and hand lettering for film titles. This page imitates those looks with Unicode text." },
    { q: "Is there a 1940s font I can copy and paste?", a: "Yes. Type your text above and copy the Typewriter, Bold Serif or Small Caps Spaced style." },
    { q: "How do I make an old Hollywood title in text?", a: "Use Small Caps Spaced or Renaissance Italic, keep it to a few words, and add the Banner Rule style on a line above or below." },
    { q: "Are these real 1940s typefaces?", a: "No. They are Unicode characters that suggest the era's printing, not reproductions of period fonts." },
    { q: "Can I type a date in 1940s style?", a: "Yes. Typewriter and Bold Serif both have styled digits, so a date like 𝟷𝟿𝟺𝟻 keeps the look." },
    { q: "How does the Morse style work?", a: "Each letter becomes its International Morse Code dots and dashes, with a slash between words. Characters with no Morse code are kept as typed." },
    { q: "Why does underlined text look broken in places?", a: "The underline is a combining mark added after each character, and some fonts draw it with small gaps between letters." },
  ],
};

export default page;
