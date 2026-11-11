import type { PageContent } from "./types";

const page: PageContent = {
  slug: "gothic-font-generator",
  title: "Gothic Font Generator — Dark Blackletter Copy & Paste",
  description:
    "Gothic font generator with dark blackletter styles: crosses, skulls, roses, bats and worn ink. Copy and paste for bios, gamertags and posts.",
  h1: "Gothic Font Generator",
  crumb: "Gothic Font Generator",
  intro:
    "This gothic font generator leans into the darker side of blackletter. Alongside plain Fraktur you get crosses, pentagrams, skulls, dead roses, bats, candlelight and distressed letters that look like they were pressed with a worn printing block. It suits metal and goth aesthetics, horror projects, Halloween posts and any profile that wants a bit of menace.",
  tool: {
    styles: [
      "deco-pentagram", "deco-skull", "distressed", "cursed", "deco-rose", "deco-bat", "deco-candle", "deco-dagger",
      "bold-fraktur", "slashed", "bold-strike", "frame-block", "deco-cross", "deco-maltese", "upside-down",
      "reversed", "frame-tibetan", "deco-swords", "fraktur",
    ],
    sample: "Nocturne",
    placeholder: "Type a band name, gamertag or caption…",
    presets: ["Nocturne", "Black Mass", "Rest in Peace", "Vampire Hours", "Dead Inside"],
  },
  stylesHeading: "Dark gothic styles",
  howTo: {
    heading: "How to make dark gothic text",
    steps: [
      ["Type something short", "Gothic decoration adds symbols on both sides, so shorter names leave room for the frame."],
      ["Choose your symbol", "Skulls, crosses and roses change the mood far more than the letters do. Try a few on the same word."],
      ["Copy and test it", "Paste into the app you plan to use. Emoji-based frames like 🦇 and 🥀 look different on iPhone and Android."],
    ],
  },
  sections: [
    {
      h2: "What makes text look gothic",
      blocks: [
        { p: "Gothic as a mood is mostly about contrast and decay. Heavy black strokes against empty space, sharp points instead of curves, religious or occult symbols, and a feeling of age. Bold Fraktur gives you the contrast. Symbols such as † and ✠ add the church-and-graveyard feel. The distressed styles add tiny combining marks to each letter so the text looks scratched or eroded." },
        { p: "Restraint helps. One symbol on each side of a name usually looks more deliberate than a row of them, and a single dark word in a bio has more impact than an entire paragraph of decorated text." },
      ],
    },
    {
      h2: "Symbols in this generator",
      blocks: [
        {
          table: {
            head: ["Symbol", "Name", "Typical mood"],
            glyphCols: [0],
            rows: [
              ["⛧", "Inverted pentagram", "Occult, black metal"],
              ["✠", "Maltese cross", "Knights, crusader, heraldry"],
              ["☩", "Cross of Jerusalem", "Medieval, ecclesiastical"],
              ["†", "Dagger", "Memorial, old print footnotes"],
              ["☠", "Skull and crossbones", "Horror, pirate, danger"],
              ["🥀", "Wilted rose", "Romantic goth, heartbreak"],
              ["🦇", "Bat", "Vampire, Halloween"],
            ],
          },
        },
      ],
    },
    {
      h2: "Good places for dark gothic text",
      blocks: [
        { ul: ["Band and project names on social profiles and event posters drafts.", "Gamertags and clan names, where games allow extended characters.", "Halloween and horror captions.", "Discord server names and role names for goth, metal or horror communities."] },
      ],
    },
  ],
  built:
    "Letters use Fraktur or Bold Fraktur from the Mathematical Alphanumeric Symbols block. Worn and cursed effects stack combining marks such as U+0334 (tilde overlay) and U+0323 (dot below) on each letter, using a fixed pattern so the result stays the same every time you copy it. Skulls, crosses and daggers come from the Miscellaneous Symbols and General Punctuation blocks; the rose and bat are emoji.",
  related: {
    heading: "Related blackletter tools",
    hrefs: ["/blackletter-generator", "/medieval-font-generator", "/old-english-font-discord", "/fraktur-generator", "/chicano-font-generator", "/old-english-tattoo-font", "/horror-font-generator", "/metal-font-generator"],
  },
  faq: [
    { q: "What's the difference between gothic and Old English fonts?", a: "They describe the same letter shapes. Gothic is the everyday word and is often used for a darker mood; Old English is the name tattoo and sign shops use. This page focuses on the darker, decorated versions." },
    { q: "Why does the cursed text look messy in some apps?", a: "Combining marks stack above and below letters. Apps with tight line spacing can clip them or overlap neighbouring lines. The lighter Distressed Gothic style is safer for bios." },
    { q: "Do these symbols have religious meaning?", a: "Several do. Crosses and pentagrams carry meaning for many people, so think about your audience before using them in a public name." },
    { q: "Can I use gothic text in a game name?", a: "Many games restrict names to basic characters, and some reject unusual symbols silently. Test it, and keep a plain backup name ready." },
    { q: "Why do the bat and rose look different on my friend's phone?", a: "They are emoji, and each platform draws its own version. The letters themselves vary less." },
    { q: "Is upside-down gothic still Fraktur?", a: "Partly. Flipping uses existing rotated-letter characters, and only letters that remain Latin after flipping can be converted to Fraktur." },
  ],
};

export default page;
