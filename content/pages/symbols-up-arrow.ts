import type { PageContent } from "./types";

// Restored Nov 2026 at /symbols/up-arrow (ranked in Bing before 00a2b7f;
// Copilot grounding query "up arrow copy and paste"). Code points are
// computed from the characters; names follow the Unicode character names.
const cp = (s: string) => [...s].map((c) => "U+" + c.codePointAt(0)!.toString(16).toUpperCase().padStart(4, "0")).join(" ");

// [glyph, Unicode name (shortened), group, what it's good for]
const UP: [string, string, string, string][] = [
  ["↑", "Upwards arrow", "Basic", "The everyday up arrow: \"see above\", \"link in bio ↑\""],
  ["⬆", "Upwards black arrow", "Basic", "A solid, heavier arrow; many phones draw it as the ⬆️ emoji"],
  ["🡅", "Upwards heavy arrow", "Basic", "Thick shaft and head, good at small sizes"],
  ["🡑", "Upwards sans-serif arrow", "Basic", "Plain geometric arrow"],
  ["🠉", "Upwards arrow with large triangle head", "Basic", "A big head on a thin stem"],
  ["⭡", "Upwards triangle-headed arrow", "Basic", "Modern-looking thin arrow"],
  ["⇑", "Upwards double arrow", "Double & multiple", "An emphatic, double-lined up arrow"],
  ["⇈", "Upwards paired arrows", "Double & multiple", "Two arrows side by side: strong increase"],
  ["⮅", "Upwards triangle-headed paired arrows", "Double & multiple", "A cleaner version of ⇈"],
  ["⤊", "Upwards triple arrow", "Double & multiple", "Three shafts in one arrow"],
  ["⟰", "Upwards quadruple arrow", "Double & multiple", "Four shafts, the heaviest up arrow"],
  ["↟", "Upwards two-headed arrow", "Double & multiple", "Two heads on one shaft: \"jump up\""],
  ["⇧", "Upwards white arrow", "Keys & outlines", "The Shift key symbol"],
  ["⇪", "Upwards white arrow from bar", "Keys & outlines", "The Caps Lock key symbol"],
  ["⇫", "Upwards white arrow on pedestal", "Keys & outlines", "Level 2 Lock on some keyboard layouts"],
  ["⇬", "White arrow on pedestal with bar", "Keys & outlines", "Another keyboard lock symbol"],
  ["⇮", "Upwards white double arrow", "Keys & outlines", "Level 3 select in the ISO keyboard symbol standard"],
  ["⇯", "Upwards white double arrow on pedestal", "Keys & outlines", "Level 3 lock"],
  ["⌃", "Up arrowhead", "Keys & outlines", "The Control key symbol on a Mac"],
  ["⇞", "Upwards arrow with double stroke", "Keys & outlines", "The Page Up key"],
  ["⍐", "APL quad upwards arrow", "Keys & outlines", "A boxed arrow from the APL programming language"],
  ["⤒", "Upwards arrow to bar", "To or from a bar", "Back to top, upload to a limit"],
  ["↥", "Upwards arrow from bar", "To or from a bar", "Rising from a baseline; \"raise\""],
  ["⤉", "Upwards arrow with horizontal stroke", "To or from a bar", "A crossed shaft"],
  ["⇡", "Upwards dashed arrow", "Dashed & curved", "A tentative or suggested move up"],
  ["⤴", "Rightwards then curving upwards", "Dashed & curved", "Turning up; \"go up from here\""],
  ["⬏", "Rightwards arrow with tip upwards", "Dashed & curved", "A right-angle turn upward"],
  ["⬑", "Leftwards arrow with tip upwards", "Dashed & curved", "Turn left, then up"],
  ["↾", "Upwards harpoon, barb right", "Dashed & curved", "Half-headed arrow used in math and chemistry"],
  ["↿", "Upwards harpoon, barb left", "Dashed & curved", "The mirror of ↾"],
  ["⥉", "Two-headed arrow from small circle", "Dashed & curved", "A rare decorative up arrow"],
  ["⬀", "North east white arrow", "Diagonal", "Up and to the right: growth, trending up"],
  ["⬁", "North west white arrow", "Diagonal", "Up and to the left"],
  ["▲", "Black up-pointing triangle", "Triangles & buttons", "Upvote, sort ascending, a stock that rose"],
  ["△", "White up-pointing triangle", "Triangles & buttons", "Outline upvote before it is clicked"],
  ["▴", "Small black up-pointing triangle", "Triangles & buttons", "Compact marker beside a number"],
  ["⏶", "Medium up-pointing triangle", "Triangles & buttons", "Scroll-up and expand buttons"],
  ["⏫", "Up-pointing double triangle", "Triangles & buttons", "Fast scroll to top"],
  ["🔼", "Up-pointing small red triangle", "Triangles & buttons", "Emoji upvote button"],
  ["🔝", "Top with upwards arrow above", "Triangles & buttons", "Emoji for \"top\" or \"back to top\""],
  ["🆙", "Squared UP with exclamation mark", "Triangles & buttons", "Emoji button reading UP!, for level-ups"],
  ["📈", "Chart with upwards trend", "Triangles & buttons", "Emoji for growth and rising numbers"],
  ["˄", "Modifier letter up arrowhead", "Small", "Raised caret used in phonetics"],
  ["ꜛ", "Modifier letter raised up arrow", "Small", "Tiny superscript arrow for rising tone in phonetics"],
];

const page: PageContent = {
  slug: "symbols/up-arrow",
  file: "symbols-up-arrow",
  title: "Up Arrow Copy and Paste – 44 Up Arrows ↑ ⬆ ⇧ ⇑ ▲",
  description:
    "Up arrow copy and paste: 44 up arrows and up triangles (↑ ⬆ ⇧ ⇑ ⤴ ▲ 🔼) with names and Unicode code points. Select one and copy. Free.",
  h1: "Up Arrow Copy and Paste",
  crumb: "Up Arrow",
  intro:
    "An up arrow is any character that points upward, from the plain ↑ to the solid ⬆, the outlined Shift key ⇧ and the triangle ▲, and this page lists 44 of them to copy and paste with their names and code points. Most people looking for an up arrow symbol to copy want one of a few things: a \"link in bio ↑\" pointer, an upvote, a sign that a number went up, or the key symbol from a shortcut like ⇧⌘Z. The table groups up arrow symbols by shape so you can find the right one, and the box below styles a caption to go with it.",
  tool: {
    styles: ["u-superscript", "u-small-caps", "fraktur-caps", "bold-fraktur-caps", "u-sans-bold-italic", "u-squared", "overline", "vertical"],
    sample: "Link in bio",
    placeholder: "Type the words that go with your arrow…",
    presets: ["Link in bio", "Level up", "Back to top", "Prices up"],
  },
  stylesHeading: "Caption styles to pair with an up arrow",
  howTo: {
    heading: "How to copy an up arrow",
    steps: [
      ["Pick by shape", "Basic, double, outlined key symbols, diagonal and triangle arrows each have their own group in the table."],
      ["Select and copy", "Double-click or long-press the arrow in the first column and copy it. Each cell is one character."],
      ["Place it with text", "Put a space between the arrow and your words, as in \"link in bio ↑\", so the arrow doesn't merge with the first letter."],
    ],
  },
  sections: [
    {
      h2: "Up arrow symbols: all 44 with code points",
      blocks: [
        {
          table: {
            head: ["Arrow", "Name", "Code point", "Group", "Good for"],
            glyphCols: [0],
            rows: UP.map(([g, n, grp, use]) => [g, n, cp(g), grp, use]),
          },
        },
      ],
    },
    {
      h2: "1. Which up arrow should I use for \"link in bio\"?",
      blocks: [
        { p: "The point of the arrow is to send the reader's eye toward the profile above the post, so a plain, readable arrow does the job: ↑ or ⬆. ⤴ adds a little motion and reads as \"up from here\". Keep it to one or two arrows; a row of ⬆⬆⬆ looks like spam. If the caption is styled, use the same style for the words and leave the arrow plain." },
      ],
    },
    {
      h2: "2. What are the up arrows on keyboard shortcuts?",
      blocks: [
        { p: "Shortcut guides use outlined arrows for modifier keys. ⇧ is Shift, ⇪ is Caps Lock, ⌃ is Control on a Mac, and ⇞ is Page Up. So ⇧⌘Z means Shift + Command + Z. These are ordinary characters, which is why help pages and cheat sheets can show them in plain text; copy them from the table when you write your own." },
        { p: "For the opposite direction, with down arrows for downloads, Page Down and \"see below\", go to [down arrow copy and paste](/symbols/down-arrow)." },
      ],
    },
  ],
  built:
    "Arrows come from the Arrows block (U+2190–U+21FF), Supplemental Arrows-A and -B (U+27F0–U+297F), Miscellaneous Symbols and Arrows (U+2B00–U+2BFF) and Supplemental Arrows-C (U+1F800–U+1F8FF). Triangles are in Geometric Shapes and Miscellaneous Technical, the emoji in Miscellaneous Symbols and Pictographs and Enclosed Alphanumeric Supplement.",
  related: {
    heading: "More symbols",
    hrefs: ["/symbols/down-arrow", "/symbols", "/symbols/brackets", "/symbols/numbers", "/emoticons/shrug"],
  },
  faq: [
    { q: "How do I copy and paste an up arrow?", a: "Select the arrow in the first column of the table, copy it, and paste it where you are typing. The plain one is ↑ (U+2191)." },
    { q: "What is the Unicode for the up arrow?", a: "The basic up arrow ↑ is U+2191. The solid ⬆ is U+2B06 and the double ⇑ is U+21D1." },
    { q: "How do I type an up arrow on a keyboard?", a: "On Windows, hold Alt and type 24 on the number pad for ↑. On a Mac, open the Character Viewer with Control + Command + Space and search for \"arrow\"." },
    { q: "What does ⇧ mean?", a: "It is the Shift key symbol. In shortcut lists, ⇧ followed by another key means hold Shift while pressing it." },
    { q: "Why does my ⬆ arrow look like an emoji?", a: "Some systems draw U+2B06 in emoji style by default. If you want the flat text version, use ↑ or 🡅 instead." },
    { q: "Which arrow means upvote?", a: "▲ or the outlined △ is the usual upvote marker; 🔼 is the emoji version." },
    { q: "What is the up arrow with a curve?", a: "⤴ (U+2934), an arrow that points right and then curves upward." },
  ],
};

export default page;
