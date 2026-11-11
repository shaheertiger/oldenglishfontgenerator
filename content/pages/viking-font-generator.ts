import type { PageContent } from "./types";

const page: PageContent = {
  slug: "viking-font-generator",
  title: "Viking Font Generator — 13 Rune & Norse Text Styles",
  description:
    "Viking font generator: turn names into Elder Futhark, Viking Age and Anglo-Saxon runes, or heavy Norse-style blackletter. Free to copy and paste.",
  h1: "Viking Font Generator",
  crumb: "Viking Font Generator",
  intro:
    "This Viking font generator gives you 13 styles: 3 rune rows (the 24-rune Elder Futhark, the 16-rune Viking Age Younger Futhark and the Anglo-Saxon futhorc) plus Norse-feeling blackletter with swords, crowns and banners. The runes are real Unicode characters, so a name like Ragnar pastes into a bio, a game lobby or a tattoo sketch as ᚱᚨᚷᚾᚨᚱ.",
  tool: {
    styles: [
      "runes-elder", "runes-younger", "runes-futhorc", "runes-elder-spaced", "bold-fraktur", "bold-fraktur-caps",
      "wide-bold", "deco-swords", "deco-crown", "frame-tibetan", "frame-banner", "frame-block", "thorn",
    ],
    sample: "Ragnar Lothbrok",
    placeholder: "Type a name, clan or battle cry…",
    presets: ["Ragnar Lothbrok", "Valhalla", "Odin", "Skål", "Shieldmaiden", "Thor"],
  },
  stylesHeading: "Rune rows and Norse lettering",
  howTo: {
    heading: "How to write a name in runes",
    steps: [
      ["Spell it the way it sounds", "Runes recorded sounds, not modern spelling. Writing Eric as Erik, or Philip as Filip, gives a closer result than the English spelling."],
      ["Pick a rune row", "Use Elder Futhark for a general ancient look, Younger Futhark if you want the runes the Vikings actually carved, and futhorc for Anglo-Saxon or Old English themes."],
      ["Copy and check", "Paste it somewhere you can see it at full size. If you see boxes, your device lacks a runic font; see the font notes below."],
    ],
  },
  sections: [
    {
      h2: "Which rune does each letter become?",
      blocks: [
        { p: "This is the exact mapping the generator uses. It is a convenient letter-for-rune substitution, not a scholarly transcription: real rune carvers spelled by ear, and the Younger Futhark had so few signs that one rune stood for several sounds. That is why u, v, w and y all become ᚢ in the middle column." },
        {
          table: {
            head: ["Latin", "Elder Futhark", "Younger Futhark", "Anglo-Saxon futhorc"],
            glyphCols: [1, 2, 3],
            rows: [
              ["A", "ᚨ", "ᛅ", "ᚪ"], ["B", "ᛒ", "ᛒ", "ᛒ"], ["C", "ᚲ", "ᚴ", "ᚳ"], ["D", "ᛞ", "ᛏ", "ᛞ"],
              ["E", "ᛖ", "ᛁ", "ᛖ"], ["F", "ᚠ", "ᚠ", "ᚠ"], ["G", "ᚷ", "ᚴ", "ᚷ"], ["H", "ᚺ", "ᚼ", "ᚻ"],
              ["I", "ᛁ", "ᛁ", "ᛁ"], ["J", "ᛃ", "ᛁ", "ᛄ"], ["K", "ᚲ", "ᚴ", "ᚳ"], ["L", "ᛚ", "ᛚ", "ᛚ"],
              ["M", "ᛗ", "ᛘ", "ᛗ"], ["N", "ᚾ", "ᚾ", "ᚾ"], ["O", "ᛟ", "ᚬ", "ᚩ"], ["P", "ᛈ", "ᛒ", "ᛈ"],
              ["Q", "ᚲ", "ᚴ", "ᚳ"], ["R", "ᚱ", "ᚱ", "ᚱ"], ["S", "ᛊ", "ᛋ", "ᛋ"], ["T", "ᛏ", "ᛏ", "ᛏ"],
              ["U", "ᚢ", "ᚢ", "ᚢ"], ["V", "ᚹ", "ᚢ", "ᚠ"], ["W", "ᚹ", "ᚢ", "ᚹ"], ["X", "ᚲᛊ", "ᚴᛋ", "ᛉ"],
              ["Y", "ᛃ", "ᚢ", "ᚣ"], ["Z", "ᛉ", "ᛋ", "ᛋ"], ["TH", "ᚦ", "ᚦ", "ᚦ"], ["NG", "ᛜ", "ᚾᚴ", "ᛝ"],
            ],
          },
        },
        { p: "Futhorc also has single runes for the pairs ea (ᛠ), ae (ᚫ) and oe (ᛟ), and the generator uses them when those letters sit side by side. Words are joined with ᛫, the runic word divider, instead of a space; the spaced Elder Futhark style keeps ordinary gaps if you prefer them." },
      ],
    },
    {
      h2: "Elder, Younger or Anglo-Saxon: what's the difference?",
      blocks: [
        {
          table: {
            head: ["Rune row", "Runes", "Roughly when and where", "Pick it for"],
            rows: [
              ["Elder Futhark", "24", "Germanic peoples, about the 2nd to 8th century", "The look most people mean by Norse runes"],
              ["Younger Futhark", "16", "Scandinavia in the Viking Age, about the 9th to 11th century", "Viking characters, rune stones, historical games"],
              ["Anglo-Saxon futhorc", "about 26 to 33, depending on the source", "England, before and alongside the Latin alphabet", "Old English, Beowulf and Anglo-Saxon settings"],
            ],
          },
        },
        { p: "The dates are approximate; runic finds are scattered and scholars argue about the edges. What is certain is the direction of travel: the Scandinavian row shrank while the English row grew, because English needed more vowels." },
      ],
    },
    {
      h2: "How are runes connected to Old English?",
      blocks: [
        { p: "Old English, the language, was written in runes before monks brought the Latin alphabet, and the two systems overlapped for centuries. Well-known futhorc inscriptions include the Franks Casket and the Ruthwell Cross. When scribes switched to Latin letters they kept two runes they couldn't do without: thorn (þ, from ᚦ) for the th sound and wynn for w. The thorn style in this generator, and the whole \"ye olde\" joke, trace back to that rune. See the [medieval font generator](/medieval-font-generator) for more scribal letters." },
        { p: "So a Viking-looking name in blackletter is a mash-up rather than history: blackletter came centuries after the Viking Age. That's fine for a game, a band or a costume. If accuracy matters, use the rune rows." },
      ],
    },
    {
      h2: "Why do runes show as boxes on some devices?",
      blocks: [
        { p: "Runes live in Unicode's Runic block (U+16A0–U+16FF), which was added in Unicode 3.0 in 1999, so the characters themselves are old and standard. Display depends on a font: on Windows, Segoe UI Historic usually covers them; Google's free Noto Sans Runic does too, and most recent phones show them without help. If a friend sees empty squares, the text is fine but their device has no runic font. For a poster or tattoo reference, export an image instead with [Old English text to image](/old-english-text-to-image)." },
        { p: "Need an installable font with a Norse or ancient mood? [Uncial Antiqua](/fonts/uncial-antiqua) and the [fantasy fonts](/fonts/fantasy) collection are free for commercial use. Some runes have also been taken up by extremist groups, so think about context and pairing before printing them on merchandise; our piece on [blackletter's history](/blog/blackletter-history-1941-ban) covers how symbols pick up baggage." },
      ],
    },
  ],
  built:
    "The rune styles replace each Latin letter (after handling th, ng, ea, ae and oe) with a character from the Unicode Runic block, joined by ᛫ (U+16EB). The Norse lettering styles use Mathematical Bold Fraktur with symbols such as ⚔ and ♛.",
  related: {
    heading: "More ancient and dark lettering",
    hrefs: ["/medieval-font-generator", "/illuminated-letters", "/metal-font-generator", "/gothic-symbols", "/old-english-tattoo-font", "/fonts/old-english"],
  },
  faq: [
    { q: "Is this a real rune translator?", a: "No. It swaps each letter for a rune, which is close enough for names and decoration. A proper transcription spells by sound and follows the conventions of one period, so a runologist would write some names differently." },
    { q: "Which runes did the Vikings use?", a: "Mostly the Younger Futhark, a 16-rune row used in Scandinavia during the Viking Age. The 24-rune Elder Futhark is older, though it is the one most modern designs borrow." },
    { q: "Can I use runes in my Instagram or Discord name?", a: "Usually, yes. They are standard Unicode characters, so they paste like any other text into bios and display names. Usernames and handles that only accept letters and numbers will reject them." },
    { q: "Is there an Elvish font generator here?", a: "No. Tolkien's Elvish script, Tengwar, isn't Norse and isn't part of standard Unicode, so it can't be produced as copy-and-paste text the way runes can." },
    { q: "How do I write my name in runes for a tattoo?", a: "Spell the name by sound, choose one rune row and stick to it, then have someone who reads runes check it. Bring a PNG, not copied text, so the artist sees exactly the shapes you chose." },
    { q: "What does ᛫ mean between the words?", a: "It is a runic punctuation mark used to separate words in inscriptions. The generator uses it instead of spaces; pick the spaced Elder Futhark style if you'd rather keep normal gaps." },
    { q: "Are runes offensive?", a: "Runes are an ordinary historical script used by heritage groups, scholars and fantasy fans. A few runes have also been adopted by hate groups, so meaning depends heavily on context and what they're combined with." },
  ],
};

export default page;
