import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL, which ranked in Bing before the
// rebuild removed it.
const page: PageContent = {
  slug: "font-generator/handwriting",
  file: "font-generator-handwriting",
  title: "Handwriting Font Generator – Copy & Paste Handwritten Text",
  description:
    "Handwriting font generator: turn text into cursive and handwritten script you can copy and paste into bios, captions, messages and Word. Free, no download.",
  h1: "Handwriting Font Generator",
  crumb: "Handwriting Font Generator",
  intro:
    "A handwriting font generator turns typed text into letters that look written by hand: flowing script, bold cursive, italic and fine-line styles, plus blackletter cursive for an older hand. Use it as a handwritten font generator for names, notes and captions, or for quick handwriting font copy and paste: each result is plain Unicode text, so it pastes into messages and documents without installing a font.",
  tool: {
    styles: ["script", "bold-script", "script-spaced", "italic-serif", "bold-italic-serif", "oe-cursive", "bold-cursive", "roman-initial-italic", "gangster-initials", "typewriter"],
    sample: "Handwritten notes",
    placeholder: "Type a name, signature or message…",
    presets: ["Handwritten notes", "Thank you", "With love", "Your Name"],
  },
  stylesHeading: "Handwriting Styles",
  howTo: {
    heading: "How to copy and paste handwriting text",
    steps: [
      ["Type", "Enter a name, a signature or a short message. All styles update as you type."],
      ["Copy", "Press Copy next to the handwriting style you like."],
      ["Paste", "Paste it into a bio, caption, card message or document. It stays handwritten because the letters themselves are script characters."],
    ],
  },
  sections: [
    {
      h2: "Which handwriting style to use",
      blocks: [
        {
          table: {
            head: ["Style", "Looks like", "Good for"],
            rows: [
              ["Script", "Formal copperplate pen", "Names, signatures, wedding and thank-you notes"],
              ["Bold Script", "Thick brush lettering", "Headlines, bios, short captions"],
              ["Fine Line Spaced Script", "Light, airy handwriting", "Aesthetic bios and quotes"],
              ["Italic", "Neat slanted print", "Longer lines that still need to be readable"],
              ["Blackletter Cursive", "Old pen-and-ink hand", "Vintage, gothic or tattoo-style text. More on the [Old English cursive](/font-generator/old-cursive) page"],
            ],
          },
        },
      ],
    },
    {
      h2: "Handwriting text vs. a handwriting font",
      blocks: [
        { p: "This tool gives you characters, not a font. That is why it pastes into apps that never let you change fonts. The trade-off is that you get a few fixed styles and no lowercase in some of them. If you are designing something to print, such as an invitation or a shirt, install a real handwriting or calligraphy font instead; our [calligraphy fonts](/fonts/calligraphy) page lists free ones." },
      ],
    },
  ],
  built:
    "Script styles use Unicode's Mathematical Script (U+1D49C–U+1D4CF) and Bold Script (U+1D4D0–U+1D503) letters, with the older Letterlike Symbols forms ℬ ℰ ℱ ℋ ℐ ℒ ℳ ℛ ℯ ℊ ℴ filling the gaps. Italic uses Mathematical Italic.",
  related: {
    heading: "More lettering tools",
    hrefs: ["/font-generator/old-cursive", "/", "/font-generator/old-english", "/tattoo-font-generator", "/old-english-name-generator", "/fonts/calligraphy"],
  },
  faq: [
    { q: "How do I make my text look handwritten?", a: "Type it in the box above and copy a script or cursive style. It pastes as handwritten-looking text anywhere." },
    { q: "Can I use this as a signature?", a: "It works as a styled name in emails and profiles, but it is not a legal e-signature. Use an e-signature service for documents." },
    { q: "Where can I paste handwriting text?", a: "Anywhere you can type: it is plain Unicode text. Username fields are often stricter and may reject it." },
    { q: "Why do some letters look different from the rest?", a: "A few script capitals were added to Unicode earlier than the others, so your phone may draw them from a different font." },
  ],
};

export default page;
