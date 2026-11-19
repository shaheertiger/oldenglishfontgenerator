import type { PageContent } from "./types";

const page: PageContent = {
  slug: "happy-birthday-font",
  title: "Happy Birthday Font — 14 Calligraphy & Old English Styles",
  description:
    "Happy Birthday font generator: copy and paste Happy Birthday in 14 calligraphy, Old English and decorated styles for posts, cards and captions. Free.",
  h1: "Happy Birthday Font",
  crumb: "Happy Birthday Font",
  intro:
    "Type a name and get \"Happy Birthday\" in 14 styles at once: flowing calligraphy script, bold Old English, illuminated capitals, and versions framed with stars, hearts and crowns. Every row is plain Unicode text, so it pastes straight into a Facebook post, an Instagram caption, a WhatsApp message or the draft of a card. For a printed card or cake topper, the free fonts further down give a cleaner result.",
  tool: {
    styles: [
      "script", "bold-script", "oe-cursive", "bold-cursive", "bold-fraktur", "fraktur",
      "illuminated", "deco-stars", "deco-heart", "deco-crown", "deco-rose", "frame-banner",
      "frame-white", "fraktur-small-caps",
    ],
    sample: "Happy Birthday, Sophia",
    placeholder: "Type Happy Birthday and a name…",
    presets: ["Happy Birthday, Sophia", "Happy 30th Birthday", "Happy Birthday Mom", "Feliz Cumpleaños", "Alles Gute zum Geburtstag"],
  },
  stylesHeading: "Happy Birthday text styles",
  howTo: {
    heading: "How to write Happy Birthday in a fancy font",
    steps: [
      ["Add the name", "Type Happy Birthday followed by the person's name, or tap a preset. Short messages look best in decorative styles."],
      ["Pick a mood", "Script for elegant or sentimental, Old English for milestones and a bit of drama, stars and hearts for fun."],
      ["Copy and paste", "Tap Copy and paste into your post, message or card design. Keep the rest of the message in plain text so it stays readable."],
    ],
  },
  sections: [
    {
      h2: "Which Happy Birthday style suits which occasion?",
      blocks: [
        {
          table: {
            head: ["Occasion", "Try this style", "Why"],
            rows: [
              ["Milestone birthday (18th, 21st, 30th, 50th)", "Bold Old English or illuminated capitals", "Blackletter feels formal and ceremonial, like a certificate"],
              ["Mum, grandma, partner", "Calligraphy script or hearts", "Soft, handwritten feel"],
              ["Friend's post or group chat", "Stars or crown frame", "Playful and quick to read"],
              ["Kids' party invitation", "Bold script with stars", "Decorative but still legible"],
              ["Memorial birthday post", "Fraktur with small caps, no emoji", "Quiet and respectful"],
            ],
          },
        },
        { p: "Writing the age? Unicode has no blackletter digits, so numbers stay plain or switch to an outlined style; our [Old English numbers](/old-english-numbers) page explains why and shows Roman numerals as an alternative, such as XXX for a 30th." },
      ],
    },
    {
      h2: "Free calligraphy fonts for birthday cards and cake toppers",
      blocks: [
        { p: "Copied text can't be printed nicely because it relies on whatever fonts the printer's device has. For anything printed or cut, install a real font. These are free under the SIL Open Font License, including for cards and toppers you sell. Glyph counts are from our own measurement of each file." },
        {
          table: {
            head: ["Font", "Look", "Glyphs", "Use it for"],
            rows: [
              ["Great Vibes", "Flowing formal script", "2,025", "Card fronts and banners"],
              ["Pinyon Script", "Copperplate-style script", "836", "Elegant invitations and place cards"],
              ["Kaushan Script", "Brush lettering", "414", "Casual cards and party signs"],
              ["[UnifrakturCook](/fonts/unifrakturcook)", "Heavy Old English", "271", "Milestone cards and 18th or 21st banners"],
              ["Cinzel Decorative", "Ornate Roman capitals", "353", "A classic, grown-up birthday look"],
            ],
          },
        },
        { p: "Cutting a cake topper or vinyl decal on a Cricut? Script fonts need letters that touch so the word comes out in one piece; our [Cricut guide](/fonts/old-english/cricut) covers welding and minimum sizes. To turn a styled line into a PNG for a digital card, use [Old English text to image](/old-english-text-to-image)." },
      ],
    },
    {
      h2: "Happy Birthday in other languages",
      blocks: [
        { p: "Accented letters keep their accents in the copied styles, though a few apps place the accent slightly off on script letters. Preview before sending." },
        {
          table: {
            head: ["Language", "Happy Birthday", "Note"],
            rows: [
              ["Spanish", "Feliz cumpleaños", "The ñ keeps its tilde in every style"],
              ["French", "Joyeux anniversaire", ""],
              ["German", "Alles Gute zum Geburtstag", "Fraktur suits German especially well: it was Germany's everyday print type for centuries"],
              ["Italian", "Buon compleanno", ""],
              ["Portuguese", "Feliz aniversário", ""],
            ],
          },
        },
      ],
    },
  ],
  built:
    "Calligraphy rows use Mathematical Script and Bold Script letters; Old English rows use Mathematical Fraktur and Bold Fraktur, all from Unicode's Mathematical Alphanumeric Symbols block. Accents are kept as combining marks after each letter. Stars, hearts, crowns and roses are standard symbols or emoji, so they look slightly different on iPhone and Android.",
  related: {
    heading: "More ways to style a message",
    hrefs: ["/old-english-font-facebook", "/old-english-font-instagram", "/old-english-name-generator", "/old-english-cursive", "/old-english-numbers", "/old-english-text-to-image"],
  },
  faq: [
    { q: "How do I write Happy Birthday in calligraphy to copy and paste?", a: "Type Happy Birthday and a name in the box, then copy one of the script rows. They are Unicode letters, so they paste anywhere text is accepted." },
    { q: "Can I use these fonts on a Facebook birthday post?", a: "Yes. Paste a styled Happy Birthday line at the top of a post or comment. Keep the rest of the message plain, so it reads well and screen readers can follow it." },
    { q: "What is the best font for a birthday card?", a: "Great Vibes or Pinyon Script for an elegant card, Kaushan Script for a casual one, and UnifrakturCook for a bold Old English milestone card. All are free for commercial use." },
    { q: "Why do my friends see boxes instead of fancy letters?", a: "Their device lacks fonts for those characters, which usually means an old phone or operating system. Bold Fraktur and script are among the best supported styles." },
    { q: "Can I put a fancy Happy Birthday on a cake?", a: "Bakers and cake topper makers need a real font file or an image, not copied text. Export a PNG or SVG with the text to image tool, or name one of the free fonts above." },
    { q: "Do birthday emojis work with these styles?", a: "Yes. You can add 🎂, 🎉 or 🎈 before or after any copied line; they are separate characters and don't affect the styled letters." },
  ],
};

export default page;
