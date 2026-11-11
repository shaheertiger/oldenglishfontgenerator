import type { PageContent } from "./types";

const page: PageContent = {
  slug: "old-english-font-youtube",
  title: "Old English Font for YouTube — 12 Styles for Titles",
  description:
    "YouTube font generator for Old English text: 12 gothic styles for channel names, 100-character video titles, descriptions and comments, with a counter.",
  h1: "Old English Font for YouTube",
  crumb: "Old English Font for YouTube",
  intro:
    "YouTube lets you paste Old English text into 5 places: your channel name, video titles (up to 100 characters), descriptions, comments and community posts. Type below, watch the counter against the 100-character title limit and copy a style. Your @handle is the exception and has to stay plain.",
  tool: {
    styles: [
      "bold-fraktur", "fraktur", "illuminated", "fraktur-plain-lower", "frame-banner", "gothic-framed",
      "deco-swords", "deco-crown", "frame-tibetan", "bold-fraktur-small-caps", "fraktur-small-caps", "deco-skull",
    ],
    sample: "Grimhall Gaming",
    placeholder: "Channel name or title words…",
    presets: ["Grimhall Gaming", "Dark Souls Lore", "Tattoo Diaries", "Episode XII", "Midnight Metal Covers"],
    limit: { label: "YouTube video title", max: 100 },
  },
  stylesHeading: "YouTube text styles",
  howTo: {
    heading: "How to use an Old English font on YouTube",
    steps: [
      ["Style a few words", "Type your channel name or the hook of a title. One or two styled words beside plain text work better than a fully gothic title."],
      ["Copy", "Tap Copy on the style you like. Check the counter if it's going into a title."],
      ["Paste in YouTube Studio", "For the channel name, open YouTube Studio, Customization, Basic info. For a title or description, open the video's Details page and paste."],
    ],
  },
  sections: [
    {
      h2: "Where does YouTube accept styled text?",
      blocks: [
        {
          table: {
            head: ["YouTube field", "Old English text?", "Limit and notes"],
            rows: [
              ["Video title", "Yes", "100 characters; styled letters often count as 2 each"],
              ["Channel name", "Yes", "Shown on your channel page, videos and comments"],
              ["@handle", "No", "Plain letters, numbers and a few symbols only"],
              ["Description", "Yes", "Style a heading line, keep links and timestamps plain"],
              ["Comments and community posts", "Yes", "Short styled phrases read best"],
              ["Thumbnail", "Not as text", "Thumbnails are images; use a real blackletter font"],
            ],
          },
        },
        { p: "YouTube adjusts its field rules over time, so if Studio refuses a paste, shorten the text or switch to a style without decorative symbols." },
      ],
    },
    {
      h2: "Does blackletter in titles hurt search or accessibility?",
      blocks: [
        { p: "It can. The styled letters are different characters from ordinary A to Z, so a viewer typing \"dark souls lore\" may not match a title written entirely in Fraktur, and screen readers tend to read each one as a mathematical symbol or skip it. That's why the counter is paired with advice to style a word or two: put the searchable words in plain text and use blackletter for a series name, an episode number or a single accent word." },
        {
          table: {
            head: ["Title approach", "Example", "Searchable?"],
            rows: [
              ["Fully styled", "𝕯𝖆𝖗𝖐 𝕾𝖔𝖚𝖑𝖘 𝕷𝖔𝖗𝖊 𝕰𝖝𝖕𝖑𝖆𝖎𝖓𝖊𝖉", "Poorly"],
              ["Styled series tag", "Dark Souls Lore Explained | 𝕰𝖕𝖎𝖘𝖔𝖉𝖊 𝖃𝕴𝕴", "Yes, on the plain words"],
              ["Styled accent word", "The 𝕮𝖚𝖗𝖘𝖊𝖉 Sword in Elden Ring", "Mostly"],
            ],
          },
        },
      ],
    },
    {
      h2: "What about Old English text on thumbnails and banners?",
      blocks: [
        { p: "Thumbnails and channel art are pictures, so copy-paste characters don't apply. Set the words in an installed blackletter font in your editor, or export a transparent PNG from the [text to image tool](/old-english-text-to-image) and drop it onto the thumbnail. Font picks and sizing for 1280 × 720 thumbnails are in our [YouTube thumbnail fonts guide](/blog/old-english-youtube-thumbnail-fonts), and the free downloads are on the [Old English fonts](/fonts/old-english) page." },
      ],
    },
  ],
  built:
    "Styles use Mathematical Fraktur and Bold Fraktur from Unicode's Mathematical Alphanumeric Symbols block, with frames and symbols such as ⚔ and ♛ from older symbol blocks. The counter measures UTF-16 code units, which is how most web forms count.",
  related: {
    heading: "Old English for other apps",
    hrefs: ["/old-english-font-tiktok", "/old-english-font-discord", "/old-english-font-roblox", "/old-english-text-to-image", "/gothic-font-generator", "/metal-font-generator"],
  },
  faq: [
    { q: "What font does YouTube use?", a: "YouTube's logo and brand lettering use YouTube Sans, a typeface introduced with its 2017 rebrand, while the website's interface text has mainly used Roboto. Neither is blackletter; the styles here are Unicode characters you paste in." },
    { q: "Can I download YouTube Sans?", a: "It isn't offered as a free public download, so we don't link to copies. For your own channel art, use a free open-licence font instead, such as the ones on our Old English fonts page." },
    { q: "How do I change the font of my YouTube channel name?", a: "You can't pick a font, but you can paste styled Unicode letters. Copy a style above, then go to YouTube Studio, Customization, Basic info and paste it into the name field." },
    { q: "How long can a YouTube title be?", a: "100 characters. Blackletter letters usually count as 2 each, so a fully styled title runs out at around 50 letters." },
    { q: "Can my @handle be in a fancy font?", a: "No. Handles only accept plain characters. Keep the handle plain and style the channel name." },
    { q: "Is there a YouTube font generator for comments?", a: "This one works for comments too. Paste a short styled phrase; long gothic comments are hard to read on phones." },
    { q: "Do styled titles get fewer views?", a: "There's no public data showing a penalty, but titles that viewers can't search for or read aloud can lose clicks. Style the decoration, not the keywords." },
  ],
};

export default page;
