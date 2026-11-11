import type { PageContent } from "./types";

const page: PageContent = {
  slug: "old-english-font-snapchat",
  title: "Old English Font for Snapchat — 12 Gothic Name Styles",
  description:
    "Snapchat fonts in Old English: 12 gothic styles for your display name, chats and snap text, plus why your 3–15 character @username can't use them.",
  h1: "Old English Font for Snapchat",
  crumb: "Old English Font for Snapchat",
  intro:
    "Snapchat has no font picker for names, but 12 blackletter styles below paste straight into your display name, chats and the text on a snap. Type a name, copy a row and paste it in Snapchat. The only field that refuses them is your @username, which stays plain letters, numbers and a few symbols.",
  tool: {
    styles: [
      "bold-fraktur", "fraktur", "illuminated", "fraktur-plain-lower", "deco-stars", "deco-heart",
      "deco-bat", "frame-corner", "bold-cursive", "gothic-framed", "deco-rose", "monogram",
    ],
    sample: "Raven Snaps",
    placeholder: "Your Snapchat name…",
    presets: ["Raven Snaps", "Mia 🖤", "Midnight Crew", "Streak Queen", "Kai Vibes"],
  },
  stylesHeading: "Snapchat name styles",
  howTo: {
    heading: "How to put an Old English font on your Snapchat name",
    steps: [
      ["Pick a style", "Type your name above and compare the rows. Bold Fraktur is the easiest to read on a small chat list."],
      ["Copy the row", "Tap Copy. The text is ordinary Unicode, so no extra keyboard or font app is involved."],
      ["Paste in your profile", "In Snapchat, open your profile, tap the settings gear, choose Name, paste and save. Friends see the new name in chats and stories."],
    ],
  },
  sections: [
    {
      h2: "Which Snapchat fields take gothic letters?",
      blocks: [
        {
          table: {
            head: ["Snapchat field", "Blackletter works?", "What to know"],
            rows: [
              ["Display name", "Yes", "Shown to friends in chats, stories and the friend list"],
              ["@username", "No", "3–15 characters: letters, numbers, hyphen, underscore and period"],
              ["Chat messages", "Yes", "Paste a styled word into any chat"],
              ["Text on a snap", "Yes, pasted into the caption box", "Snapchat's caption styles can change size and spacing; preview before sending"],
              ["Story and Spotlight captions", "Usually", "Test one first; very long styled captions get hard to read on a phone"],
            ],
          },
        },
        { p: "Snapchat adjusts its fields from time to time. If a paste is rejected, try a shorter name or a style with fewer symbols, and trust what the app accepts over any list, including this one." },
      ],
    },
    {
      h2: "What font is Snapchat, and can you change it?",
      blocks: [
        { p: "Snap doesn't offer a setting to swap the font of the app itself, and the interface lettering you see can differ between iPhone, Android and the web version. People searching this usually want their own name or captions to look different. That part is possible: the letters on this page are separate Unicode characters that look like blackletter, so Snapchat displays them as text in whatever font the phone already has." },
        { p: "The same trick is why the look can shift slightly between a friend's Android phone and your iPhone. The shapes come from each device's built-in symbol fonts, not from Snapchat." },
      ],
    },
    {
      h2: "How do you keep a gothic name easy to find?",
      blocks: [
        { ul: [
          "**Leave the @username plain.** Friends add you by username or Snapcode, so a styled display name never stops people finding you.",
          "**Style part of the name.** Fraktur Capitals, Plain Lowercase gives a blackletter first letter while the rest stays readable.",
          "**Add one symbol, not five.** A single 🖤 or ✧ beside the name reads as deliberate; long chains of symbols get cut off in the chat list.",
          "**Check it on a small screen.** Open your profile on a friend's phone; thin Fraktur strokes can blur at small sizes, where Bold Fraktur holds up.",
        ] },
        { p: "Using the same name elsewhere? The [TikTok](/old-english-font-tiktok) and [Instagram](/old-english-font-instagram) pages count characters against their limits, and the [name generator](/old-english-name-generator) has date and initial presets." },
      ],
    },
  ],
  built:
    "Every style starts from Unicode's Mathematical Fraktur (U+1D504–U+1D537) or Bold Fraktur (U+1D56C–U+1D59F). Hearts, stars, bats and roses are standard emoji or symbols that Snapchat renders in names and chats.",
  related: {
    heading: "Old English for other apps",
    hrefs: ["/old-english-font-tiktok", "/old-english-font-instagram", "/old-english-font-youtube", "/old-english-font-discord", "/old-english-name-generator", "/gothic-symbols"],
  },
  faq: [
    { q: "How do I get a different font on Snapchat?", a: "Type your text here, copy a style and paste it into your Snapchat display name, a chat or a snap caption. Snapchat has no built-in font menu for names, but it shows these Unicode letters as normal text." },
    { q: "Can my Snapchat username be in Old English?", a: "No. Usernames are 3–15 characters and only allow letters, numbers, hyphens, underscores and periods. Put the styled version in your display name." },
    { q: "Is there a Snapchat font generator that doesn't need an app?", a: "Yes, this page. Everything converts in your browser and you copy the result. Keyboard apps produce the same characters but ask for keyboard access." },
    { q: "Why do my friends see boxes instead of letters?", a: "Their phone is missing the symbols, which usually means a very old operating system. Updating the phone fixes it in most cases." },
    { q: "Will a gothic display name get my account flagged?", a: "There's no rule against Unicode letters in display names. Avoid names that imitate another person or brand, which breaks Snapchat's rules whatever the font." },
    { q: "Which style is easiest to read on Snapchat?", a: "Bold Fraktur. Its thick strokes stay clear in the small chat list, while the lighter Fraktur can look faint on dark mode." },
  ],
};

export default page;
