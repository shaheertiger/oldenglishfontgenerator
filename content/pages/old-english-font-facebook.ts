import type { PageContent } from "./types";

const page: PageContent = {
  slug: "old-english-font-facebook",
  title: "Old English Font for Facebook — Posts & 101-Char Intro",
  description:
    "Old English font for Facebook: gothic text for posts, comments and your 101-character intro, with a live counter and the one field Facebook blocks.",
  h1: "Old English Font for Facebook",
  crumb: "Old English Font for Facebook",
  intro:
    "Facebook has no font menu, but Old English text pasted from here works in 3 places: posts, comments and your 101-character profile intro. Type below, check the counter against the intro limit and copy. The one place it fails is your profile name, where Facebook's name rules reject unusual characters.",
  tool: {
    styles: [
      "fraktur", "bold-fraktur", "illuminated", "fraktur-plain-lower", "deco-fleuron", "deco-heart",
      "frame-chevron", "fraktur-small-caps", "deco-cross", "gothic-framed",
    ],
    sample: "Happy birthday, Grandma",
    placeholder: "Write your post line or intro…",
    presets: ["Happy birthday, Grandma", "Est. 1987 · Ohio", "Tattoo artist · DM for bookings", "Rest in peace, brother", "Game night is ON"],
    limit: { label: "Facebook intro", max: 101 },
  },
  stylesHeading: "Facebook text styles",
  howTo: {
    heading: "How to change the font on a Facebook post",
    steps: [
      ["Style one line", "Type a headline, greeting or sign-off. One styled line on top of a plain post reads better than a whole post in blackletter."],
      ["Copy the style", "Tap Copy on the row you like."],
      ["Paste into Facebook", "Open a new post, a comment box or Edit profile, then Intro, and paste. Preview before posting."],
    ],
  },
  sections: [
    {
      h2: "Where can you use fancy fonts on Facebook?",
      blocks: [
        {
          table: {
            head: ["Place", "Old English text?", "Notes"],
            rows: [
              ["Posts", "Yes", "Best for a first line or headline"],
              ["Comments and replies", "Yes", "Short phrases only"],
              ["Profile intro (bio)", "Yes", "101 characters"],
              ["Profile name", "No", "Facebook's name standards don't allow symbols or unusual characters"],
              ["Page and group posts", "Yes", "Same as personal posts"],
              ["Messenger chats", "Yes", "Shows as text on current apps"],
            ],
          },
        },
        { p: "These details reflect Facebook's settings at the time of writing. If a field rejects your text, the app's rule wins; try plain text there and keep the style for posts." },
      ],
    },
    {
      h2: "Why can't I put Old English letters in my Facebook name?",
      blocks: [
        { p: "Facebook asks people to use the name they go by in everyday life and filters out symbols, unusual capitalisation and characters from mixed alphabets. Fraktur letters are technically mathematical symbols, so the name editor treats them as invalid. Trying to sneak them through can also trigger a name review, which is more hassle than it's worth." },
        { p: "If you run a business Page, the same idea applies: the Page name should be plain and searchable. Put the gothic styling in a pinned post or your cover image instead. The [text to image tool](/old-english-text-to-image) makes a PNG you can use as a cover or post graphic." },
      ],
    },
    {
      h2: "Should a whole Facebook post be in Old English?",
      blocks: [
        { p: "Better not. Screen readers often announce each styled character as a mathematical symbol, so a full post becomes unreadable to blind and low-vision friends, and blackletter is slow to read for everyone. Use it like a heading: a name in a birthday post, a band or event title, a memorial line. Leave the details in normal text." },
        {
          cards: [
            { h: "Birthday and anniversary posts", p: "Style the name, keep the message plain." },
            { h: "Memorial posts", p: "Rest in peace or a name and dates, often with Roman numerals from the [numbers page](/old-english-numbers)." },
            { h: "Event and group posts", p: "Put the event name in Bold Fraktur so it stands out in a busy feed." },
          ],
        },
      ],
    },
  ],
  built:
    "Styles use Mathematical Fraktur (U+1D504–U+1D537) and Bold Fraktur (U+1D56C–U+1D59F); decorations come from the Dingbats and Miscellaneous Symbols blocks. The counter measures UTF-16 code units, which counts most Fraktur letters as two.",
  related: {
    heading: "Old English for other platforms",
    hrefs: ["/old-english-font-instagram", "/old-english-font-tiktok", "/old-english-font-discord", "/old-english-text-to-image", "/old-english-name-generator", "/gothic-symbols"],
  },
  faq: [
    { q: "How do I get a different font on Facebook?", a: "Facebook doesn't offer fonts, but you can paste Unicode-styled text. Type here, copy a style and paste it into a post, comment or your intro." },
    { q: "Can I change my Facebook name to Old English letters?", a: "No. Facebook's name rules reject symbols and unusual characters, and Fraktur letters count as symbols." },
    { q: "How long is the Facebook intro?", a: "101 characters. Styled letters usually count as two each, so the counter here helps you stay under." },
    { q: "Will my friends see the Old English text?", a: "Yes, on current phones and browsers. Very old devices may show boxes." },
    { q: "Is fancy text bad for accessibility?", a: "It can be. Screen readers may read each letter as a math symbol, so keep styled text to a short line." },
    { q: "Does styled text work in Facebook ads?", a: "It may be flagged or look out of place; ad text is safest in plain characters. Use an image for decorative lettering." },
    { q: "Can I use this on a Facebook Page?", a: "In Page posts and the about text, yes. Keep the Page name itself plain so people can search for it." },
  ],
};

export default page;
