import type { PageContent } from "./types";

const page: PageContent = {
  slug: "old-english-font-tiktok",
  title: "Old English Font for TikTok — Names Under 30 Characters",
  description:
    "Old English font for TikTok: gothic names and bio lines with a live 30-character counter, plus which TikTok fields accept fancy text and which don't.",
  h1: "Old English Font for TikTok",
  crumb: "Old English Font for TikTok",
  intro:
    "TikTok gives you 30 characters for your display name and 80 for your bio, and both accept Old English text pasted from here. Type below and each style shows how many characters it uses against the 30-character name limit, because blackletter letters often count double. Your @username is the one place it won't work.",
  tool: {
    styles: [
      "bold-fraktur", "fraktur", "illuminated", "fraktur-plain-lower", "deco-rose", "deco-bat",
      "deco-stars", "gothic-framed", "bold-cursive", "frame-tibetan", "fraktur-small-caps", "deco-candle",
    ],
    sample: "Luna Grave",
    placeholder: "Your TikTok name…",
    presets: ["Luna Grave", "Dark Academia", "Goth Girl Diaries", "Ink by Marco", "Nightshift Edits"],
    limit: { label: "TikTok name", max: 30 },
  },
  stylesHeading: "TikTok name styles",
  howTo: {
    heading: "How to change your TikTok name to Old English",
    steps: [
      ["Write a short name", "Watch the counter on your favourite style. It turns red past 30, which is roughly 14 blackletter letters plus a space."],
      ["Copy it", "Tap Copy on the row you want. Nothing is installed and no keyboard permission is needed."],
      ["Paste in Edit profile", "In TikTok, go to Profile, Edit profile, Name, paste and save. For your bio, tap Bio instead."],
    ],
  },
  sections: [
    {
      h2: "Which TikTok profile fields accept fancy fonts?",
      blocks: [
        {
          table: {
            head: ["Field", "Old English text?", "Limit"],
            rows: [
              ["Name (display name)", "Yes", "30 characters"],
              ["Bio", "Yes", "80 characters"],
              ["Username (@handle)", "No", "Letters, numbers, underscores and periods only"],
              ["Captions", "Yes", "Long captions in blackletter are hard to read; style a word or two"],
              ["Comments", "Yes", "Keep it short so it stays readable in the feed"],
              ["On-video text", "Yes, pasted into a text box", "TikTok's own text styles may override how it looks"],
            ],
          },
        },
        { p: "Limits come from TikTok's profile editor at the time of writing; TikTok changes them occasionally, so if the app accepts less than the counter suggests, trust the app." },
      ],
    },
    {
      h2: "Why does a 15-letter name hit the 30-character limit?",
      blocks: [
        { p: "Blackletter letters live outside the basic part of Unicode, and most counters, including the one here, store each one as two units. Fifteen Fraktur letters can therefore count as 30. Spaces, digits in plain text and punctuation still count as one. TikTok's own counting can differ slightly from ours, which is why our counter errs on the strict side." },
        {
          table: {
            head: ["Name", "Letters", "Plain count", "Fraktur count"],
            rows: [
              ["Luna Grave", "9", "10", "19"],
              ["Dark Academia", "12", "13", "25"],
              ["Goth Girl Diaries", "15", "17", "32"],
            ],
          },
        },
        { p: "If you're over, style only your first name, or use Fraktur Capitals, Plain Lowercase, where only the capitals count double." },
      ],
    },
    {
      h2: "Will people still find me in TikTok search?",
      blocks: [
        { p: "Search works best on your @username, which stays plain, so you won't disappear. Styled characters in your display name, though, are not the same characters as normal letters, so someone typing your name in plain text may not match it. A common fix is to keep your recognisable name plain and decorate it with a symbol or style a short tagline in your bio instead." },
        { p: "Running the same look across apps? The [Instagram](/old-english-font-instagram) and [Discord](/old-english-font-discord) pages have counters for their limits, and the [gothic symbols](/gothic-symbols) page has bats, roses and crosses to add on either side." },
      ],
    },
  ],
  built:
    "Name styles use Mathematical Fraktur (U+1D504–U+1D537) and Bold Fraktur (U+1D56C–U+1D59F). Emoji frames (🥀 🦇 🕯) are standard emoji that TikTok displays in names and bios. The counter measures UTF-16 code units, the stricter of the common ways apps count characters.",
  related: {
    heading: "Old English for other apps",
    hrefs: ["/old-english-font-instagram", "/old-english-font-discord", "/old-english-font-facebook", "/old-english-name-generator", "/gothic-symbols", "/gothic-font-generator"],
  },
  faq: [
    { q: "How do I get an Old English font on TikTok?", a: "Type your text here, copy a style and paste it into your TikTok name, bio, caption or comment. It's Unicode text, so no app or keyboard is required." },
    { q: "Can I use a fancy font in my TikTok username?", a: "No. The @username only allows letters, numbers, underscores and periods. Use the styled text in your display name instead." },
    { q: "How many characters can a TikTok name have?", a: "30 characters. Blackletter letters usually count as two each, so plan for about 14 styled letters." },
    { q: "How long can a TikTok bio be?", a: "80 characters. Style one short line and keep the rest plain so it stays readable." },
    { q: "Why does my styled name show boxes for some people?", a: "Very old phones may lack the symbols. Current iOS and Android display Fraktur letters correctly." },
    { q: "Is a TikTok font changer app safe?", a: "Many are keyboard apps that ask for full keyboard access. Copying from a web page gives the same characters without granting any permissions." },
    { q: "Do fancy fonts hurt my reach on TikTok?", a: "There's no public evidence either way. The practical risk is search: plain-text searches may not match a fully styled name, so keep your @username plain." },
  ],
};

export default page;
