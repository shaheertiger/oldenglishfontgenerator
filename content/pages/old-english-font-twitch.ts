// @retired 2026-11-26: daily-batch page (Nov 2-19) with 0 Bing impressions; now 410. Source kept on purpose (we don't delete files); not registered or served.
import type { PageContent } from "./types";

const page: PageContent = {
  slug: "old-english-font-twitch",
  title: "Old English Font for Twitch — 12 Stream Title & Chat Styles",
  description:
    "Twitch fonts in Old English: 12 gothic styles for stream titles, chat and bios, checked against the 140-character title limit; usernames reject them.",
  h1: "Old English Font for Twitch",
  crumb: "Old English Font for Twitch",
  intro:
    "Twitch has no font menu, but the 12 blackletter styles below paste straight into your stream title, chat messages, bio and panels. Type your text, watch the counter against Twitch's 140-character title limit, then copy a row. The one place they won't go is your username or display name, which Twitch keeps to plain letters, numbers and underscores.",
  tool: {
    styles: [
      "bold-fraktur", "fraktur", "bold-fraktur-caps", "fraktur-plain-lower", "deco-swords", "deco-skull",
      "deco-crown", "frame-banner", "frame-block", "gothic-framed", "bold-cursive", "deco-stars",
    ],
    sample: "LIVE: Elden Ring Blind Run",
    placeholder: "Your stream title or chat message…",
    presets: ["LIVE: Elden Ring Blind Run", "Just Chatting", "Horror Night", "Subathon Day 3", "GG"],
    limit: { label: "Stream title", max: 140 },
  },
  stylesHeading: "Twitch title and chat styles",
  howTo: {
    heading: "How to use an Old English font on Twitch",
    steps: [
      ["Style only the hook", "Put one or two words in blackletter and leave the game name plain, so viewers browsing the category still read what you're playing."],
      ["Check the counter", "The number beside each row counts what Twitch is likely to count. Styled letters can use two units each, so a 70-letter title can already be at 140."],
      ["Paste and preview", "In your Creator Dashboard, open Stream Manager, paste into the title and look at the preview card before going live."],
    ],
  },
  sections: [
    {
      h2: "Which Twitch fields take gothic letters?",
      blocks: [
        {
          table: {
            head: ["Twitch field", "Blackletter works?", "Limit and notes"],
            rows: [
              ["Stream title", "Yes", "140 characters; shown on your channel, in the directory and in notifications"],
              ["Chat messages", "Yes, unless the channel blocks symbols", "500 characters; some mods and bots filter heavy symbol use"],
              ["Bio (About)", "Yes", "300 characters; set under Settings → Profile"],
              ["Panels", "Yes", "Panel text accepts Unicode; panel images let you use any real font"],
              ["Username / display name", "No", "4–25 characters: letters, numbers and underscores; the display name only changes capitalisation"],
              ["Tags", "No", "Letters and numbers only, so viewers can search them"],
            ],
          },
        },
        { p: "Twitch changes its settings pages from time to time. If a paste is refused, trust the app over any table, including this one." },
      ],
    },
    {
      h2: "What font does Twitch use?",
      blocks: [
        { p: "Twitch's own typeface is **Roobert**, introduced with its 2019 rebrand; it is a commercial font, so it isn't free to download. You can't change the font Twitch uses for your channel or chat. What this page does is different: it swaps your letters for Unicode characters shaped like blackletter, which Twitch shows in its own font stack like any other text." },
        { p: "Any chat display settings a viewer changes affect only their own screen. Nothing you set changes how chat looks to someone else; the only lettering you fully control is the overlay you draw on stream." },
      ],
    },
    {
      h2: "Old English text on your stream overlay",
      blocks: [
        { p: "Overlays aren't Twitch text at all; they are drawn by your broadcasting software. In OBS Studio, add a Text source and pick any font installed on your computer, so you can use a real blackletter font instead of copied characters. That gives cleaner edges and proper kerning." },
        {
          ul: [
            "**Free fonts that read well on stream:** [UnifrakturCook](/fonts/unifrakturcook) for a heavy classic look and [Pirata One](/fonts/pirata-one) for something easier to read at small sizes. Both are free for commercial use, which covers a monetised channel.",
            "**Size it up.** Blackletter needs more height than a plain font to read the same, and many viewers watch on a phone. Check your overlay on one before going live.",
            "**Add an outline.** A 2 to 4 px dark stroke keeps thin Fraktur strokes visible over busy game footage.",
            "**Panels and offline banners** are images, so design them with the same font, or export text from [Old English text to image](/old-english-text-to-image) as a transparent PNG.",
          ],
        },
      ],
    },
    {
      h2: "Keeping a gothic title easy to find",
      blocks: [
        { p: "Twitch search and browse lean on the category and tags you set, not on the letters in your title, so a styled title doesn't hide you from people browsing a game. But viewers skimming the directory read titles in a fraction of a second, and a full line of Fraktur turns into texture. Two habits help: start with a plain word or emoji viewers recognise, and keep the styled part under about five words." },
        { p: "Screen readers spell out each mathematical letter or skip them, so blind and low-vision viewers may hear nonsense. A plain-text version of the title in your first chat message or a command bot keeps everyone in. For names across other platforms, see the [Discord](/old-english-font-discord) and [YouTube](/old-english-font-youtube) pages, which count characters against those apps' limits." },
      ],
    },
  ],
  built:
    "Styles use Unicode Mathematical Fraktur (U+1D504–U+1D537) and Bold Fraktur (U+1D56C–U+1D59F); each of those letters is two UTF-16 code units, which is why the counter climbs twice as fast as the letters you type. Swords, skulls and crowns are standard symbols that Twitch renders in titles and chat.",
  related: {
    heading: "Old English for other apps",
    hrefs: ["/old-english-font-discord", "/old-english-font-youtube", "/old-english-font-tiktok", "/old-english-font-instagram", "/gothic-font-generator", "/old-english-text-to-image"],
  },
  faq: [
    { q: "How do I change my font on Twitch?", a: "You can't change Twitch's font, but you can paste Unicode letters that look like a different font. Copy a style here and paste it into your stream title, a chat message or your bio." },
    { q: "Can my Twitch username be in Old English?", a: "No. Usernames are 4–25 characters using only letters, numbers and underscores, and your display name can only change the capitalisation. Use a styled name in your bio or overlay instead." },
    { q: "Is there a Twitch font generator for chat?", a: "Yes, this page works for chat. Paste styled words into any channel's chat, but check the rules: some channels and bots treat long runs of symbols as spam." },
    { q: "Why does my stream title get cut off?", a: "Styled letters often count as two characters each against the 140-character limit, and long titles are also truncated on directory cards. Keep the styled part short." },
    { q: "What font is good for a Twitch overlay?", a: "Any font installed on your computer works in OBS. For an Old English look, UnifrakturCook and Pirata One are free, readable and licensed for commercial streams." },
    { q: "Do gothic letters hurt discoverability on Twitch?", a: "Not much for browse, which relies on your category and tags. They can make your title harder to read at a glance, so style a word or two rather than the whole line." },
  ],
};

export default page;
