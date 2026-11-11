import type { PageContent } from "./types";

const page: PageContent = {
  slug: "horror-font-generator",
  title: "Horror Font Generator — 20 Scary Styles to Copy & Paste",
  description:
    "Horror font generator: 20 scary, cursed and vampire text styles to copy and paste, with bats, skulls and candles. Works in bios, captions and chats.",
  h1: "Horror Font Generator",
  crumb: "Horror Font Generator",
  intro:
    "Type anything and this horror font generator turns it into 20 scary text styles to copy and paste: glitchy cursed gothic, worn-out print, vampire blackletter, upside-down text and names framed with bats, skulls and candles. It's built for Halloween captions, haunted-house signs, horror game usernames and spooky party invitations. Need font files for a poster instead? See the [free Halloween fonts](/fonts/halloween).",
  tool: {
    styles: [
      "cursed", "distressed", "deco-bat", "deco-skull", "deco-candle", "deco-pentagram", "deco-rose",
      "deco-dagger", "bold-fraktur", "fraktur", "bold-fraktur-caps", "upside-down", "reversed",
      "slashed", "wavy", "fraktur-strike", "frame-tibetan", "deco-cross", "gothic-framed", "typewriter",
    ],
    sample: "Trick or Treat",
    placeholder: "Type something scary…",
    presets: ["Trick or Treat", "Happy Halloween", "Enter If You Dare", "Count Dracula", "The House on the Hill", "Do Not Open", "31.10"],
  },
  stylesHeading: "Scary text styles",
  howTo: {
    heading: "How to make scary text",
    steps: [
      ["Write the line", "Short phrases work best. A name, a title or a three-word warning reads better than a full sentence in heavy gothic letters."],
      ["Pick a mood", "Cursed Gothic and Distressed Gothic look glitchy or rotten; Bat Wing and Candlelit feel like a vampire's calling card; Upside-down looks possessed."],
      ["Copy and paste", "Tap Copy and paste it into your post, bio, game name or invitation. Preview it first: heavy combining marks can overlap nearby lines."],
    ],
  },
  sections: [
    {
      h2: "Which horror style matches your theme?",
      blocks: [
        { cards: [
          { h: "Vampire", p: "Bold Fraktur with the Dark Rose, Bat Wing or Candlelit frame. Blackletter is the natural fit for anything set in an old castle." },
          { h: "Possessed or glitched", p: "Cursed Gothic stacks marks above and below each letter. Use it for one word; a full line becomes hard to read." },
          { h: "Abandoned and rotting", p: "Distressed Gothic adds light wear, like an old printed sign that has been rained on." },
          { h: "Found-footage notes", p: "Typewriter text looks like a case file or a typed warning slipped under a door." },
          { h: "Occult", p: "Pentagram, Dagger and Cross of Jerusalem frames. Pair them with Fraktur for a grimoire feel." },
          { h: "Mirror world", p: "Upside-down and Reversed Gothic flip the text, a cheap trick that still unsettles people." },
        ] },
      ],
    },
    {
      h2: "Will Halloween symbols show up on every phone?",
      blocks: [
        { p: "Symbols appear only if the viewer's device knows them. The older the Unicode version that added a character, the more phones and computers can show it. Everything in this table is supported on current iOS, Android, Windows and macOS, but if your audience uses older devices, prefer the symbols near the top." },
        {
          table: {
            head: ["Symbol", "Name", "Code point", "Added in Unicode"],
            glyphCols: [0],
            rows: [
              ["☠", "Skull and crossbones", "U+2620", "1.1 (1993)"],
              ["⚰", "Coffin", "U+26B0", "4.1 (2005)"],
              ["⚱", "Funeral urn", "U+26B1", "4.1 (2005)"],
              ["⛧", "Inverted pentagram", "U+26E7", "6.0 (2010)"],
              ["🎃", "Jack-o-lantern", "U+1F383", "6.0 (2010)"],
              ["👻", "Ghost", "U+1F47B", "6.0 (2010)"],
              ["🕯", "Candle", "U+1F56F", "7.0 (2014)"],
              ["🕷", "Spider", "U+1F577", "7.0 (2014)"],
              ["🕸", "Spider web", "U+1F578", "7.0 (2014)"],
              ["🦇", "Bat", "U+1F987", "9.0 (2016)"],
              ["🥀", "Wilted flower", "U+1F940", "9.0 (2016)"],
              ["🩸", "Drop of blood", "U+1FA78", "12.0 (2019)"],
            ],
          },
        },
        { p: "More crosses, daggers and ornaments are on the [gothic symbols](/gothic-symbols) page, each one tap to copy." },
      ],
    },
    {
      h2: "Why does cursed text look different on my friend's phone?",
      blocks: [
        { p: "Cursed and distressed styles work by adding combining marks, small accents that attach to the letter before them. Each app decides how high to stack them and whether to clip them, so the same text can look tame in one place and chaotic in another. Some platforms strip combining marks from usernames entirely. If a style must look identical everywhere, export it as a picture with the [text to image tool](/old-english-text-to-image)." },
      ],
    },
    {
      h2: "Is there a horror movie font I can download?",
      blocks: [
        { p: "Famous horror titles are usually custom lettering, not fonts you can buy. For posters, flyers and video thumbnails, open-licence display fonts with drips, slashes or heavy blackletter get you close; the [Halloween fonts collection](/fonts/halloween) compares ten of them, all free for commercial use. For darker, more traditional blackletter, try the [gothic font generator](/gothic-font-generator) or the [gothic fonts](/fonts/gothic) directory." },
      ],
    },
  ],
  built:
    "The letters are Mathematical Fraktur and Bold Fraktur. Cursed and distressed styles add combining marks such as U+0334 and U+0337 after each letter; the frames are ordinary symbols and emoji placed before and after your text.",
  related: {
    heading: "More dark lettering tools",
    hrefs: ["/gothic-font-generator", "/gothic-symbols", "/metal-font-generator", "/death-note-font", "/medieval-font-generator", "/old-english-text-to-image"],
  },
  faq: [
    { q: "How do I copy and paste scary fonts?", a: "Type your text in the box, find a style you like and tap Copy. Then paste it wherever you want; it's Unicode text, not an image." },
    { q: "What is the best font for a vampire theme?", a: "Bold Fraktur blackletter, ideally with the Bat Wing, Dark Rose or Candlelit frame. Blackletter suggests old Europe, which is where most vampire stories are set." },
    { q: "Can I use scary text in my Instagram or TikTok bio?", a: "Yes. Most styles work in bios and captions. Cursed Gothic may be clipped or stripped in some name fields, so check how it looks after saving." },
    { q: "Why do some symbols appear as empty boxes?", a: "The device viewing them doesn't have that character. The table above lists when each symbol was added to Unicode; older ones display on more devices." },
    { q: "Is there a Halloween font for Canva or Word?", a: "These copy-paste styles work in any text box, but for print and design you'll get sharper results with an installed font. See the free Halloween fonts collection for downloadable options." },
    { q: "Can I make text that drips blood?", a: "Unicode has no dripping letters. A font such as Nosifer does that as a real font file; the [Halloween fonts](/fonts/halloween) page lets you preview it with your own words." },
    { q: "Is the text I type stored?", a: "No. Everything is converted in your browser." },
  ],
};

export default page;
