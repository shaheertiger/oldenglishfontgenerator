import type { PageContent } from "./types";
import { ALL_STYLES } from "@/lib/fonts";

// Lives at /font-generator/old-english, the URL that ranked in Bing before the
// November 2026 rebuild. The homepage covers the full generator; this page is
// about getting ready-made Old English text onto the clipboard fast.
const f = (s: string) => ALL_STYLES["fraktur"].transform(s);
const b = (s: string) => ALL_STYLES["bold-fraktur"].transform(s);

const WORDS = ["Love", "Family", "Blessed", "Loyalty", "Faith", "Est. 2025", "Respect", "Forever", "Mom", "Dad", "Brothers", "Gangsta", "Hustle", "Royalty"];

const page: PageContent = {
  slug: "font-generator/old-english",
  file: "font-generator-old-english",
  title: "Old English Font Generator: 14 Styles to Copy and Paste",
  description:
    "Old English font generator: type once, get 14 blackletter styles, tap Copy and paste anywhere. Plus ready-made words and A–Z letters. Free, no sign-up.",
  h1: "Old English Font Generator",
  crumb: "Old English Font Generator",
  intro:
    "An Old English font is blackletter lettering, the dense, angular script of late-medieval Europe, and this Old English font generator turns anything you type into 14 blackletter styles you can copy and paste. It works as an Old English text generator for names, captions and short phrases: type below, tap Copy, paste. Nothing to install, free, no sign-up. Below the tool are ready-made Old English words and the A–Z letters, and the main [Old English text generator](/) has all 60+ styles and a tattoo preview.",
  tool: {
    styles: [
      "fraktur", "bold-fraktur", "fraktur-small-caps", "bold-fraktur-small-caps", "fraktur-caps", "bold-fraktur-caps",
      "tattoo", "gothic-framed", "fraktur-underline", "distressed", "deco-cross", "deco-crown", "frame-block", "roman-date",
    ],
    sample: "Old English Text",
    placeholder: "Type the text you want in Old English…",
    presets: ["Old English Text", "Your Name", "Est. 1999", "Only God Can Judge Me"],
  },
  stylesHeading: "Old English Font: 14 Styles",
  howTo: {
    heading: "How to use the Old English font generator",
    steps: [
      ["Type or pick", "Type your own words in the box, or use one of the ready-made words further down the page."],
      ["Copy", "Press Copy next to the style you like. On a phone, the Copy button is more reliable than long-pressing the text."],
      ["Paste", "Paste into a bio, caption, display name, message or document. The letters stay Old English because they are characters, not a font."],
    ],
  },
  sections: [
    {
      h2: "1. How do I copy and paste Old English font?",
      blocks: [
        { p: "Type your text in the box above, press Copy on the style you want, then paste it. Or copy a finished word from this table; the most-requested ones are already converted." },
        {
          table: {
            head: ["Word", "Old English", "Bold Old English"],
            glyphCols: [1, 2],
            rows: WORDS.map((w) => [w, f(w), b(w)]),
          },
        },
      ],
    },
    {
      h2: "2. What do the Old English font letters look like, A to Z?",
      blocks: [
        { p: "Tap any letter to copy it on its own, for an initial, a monogram or a one-letter logo. The full [Old English font alphabet](/font-generator/old-english-letters) has every letter with copy buttons and the [Old English alphabet](/old-english-alphabet) adds a printable chart and numbers." },
        { widget: "alphabet-compact" },
      ],
    },
    {
      h2: "3. Why do some Old English letters show up as boxes?",
      blocks: [
        { p: "A box (or a question mark) means the reader's device has no font that contains that character. The usual suspects are the five capitals ℭ ℌ ℑ ℜ ℨ, which come from an older Unicode block and are drawn from a different font, and the rarer decorated styles. If a style shows boxes for you, switch to plain Fraktur or Bold Fraktur, which have the widest font support." },
      ],
    },
    {
      h2: "4. Old English font generator or an installed font?",
      blocks: [
        { p: "Copy-paste text is for places where you cannot choose a font: bios, chats and display names. If you are designing something to print, such as a shirt, a certificate or a tattoo stencil, install a real font so the letters stay sharp at any size. [Old English Text MT and its free lookalikes](/fonts/old-english-text-mt) covers which one to use, and the [Old English text to image](/old-english-text-to-image) tool exports a PNG if you just need a picture." },
      ],
    },
  ],
  built:
    "The letters come from Unicode's Mathematical Fraktur (U+1D504–U+1D537) and Mathematical Bold Fraktur (U+1D56C–U+1D59F) blocks, plus the five older Fraktur capitals ℭ ℌ ℑ ℜ ℨ from Letterlike Symbols. Unicode has no Fraktur digits, so numbers become Mathematical Bold digits (U+1D7CE–U+1D7D7) or, in the Roman Numeral Date style, Roman numerals.",
  related: {
    heading: "More Old English tools",
    hrefs: ["/", "/font-generator/old-english-letters", "/old-english-alphabet", "/font-generator/old-english-tattoo", "/font-generator/medieval", "/font-generator/gothic-letters", "/font-generator/blackletter", "/death-note-font", "/old-english-name-generator"],
  },
  faq: [
    { q: "How do I copy and paste Old English font?", a: "Type your text in the box, press Copy on the style you like and paste it wherever you want it. Nothing to install." },
    { q: "Is there a free Old English font generator?", a: "Yes, this one: it is free, needs no sign-up and runs in your browser. Type once and all 14 styles update." },
    { q: "What is the Old English font called?", a: "The look is called blackletter, and its German form is Fraktur. The best-known installed font with this name is Old English Text MT." },
    { q: "What is the Old English font called in Word?", a: "Old English Text MT. The [Old English Text MT](/fonts/old-english-text-mt) page covers it and free alternatives." },
    { q: "Why does the pasted text change back to normal letters?", a: "Some fields only accept plain letters and strip special characters. Try a different field, such as a bio instead of a username." },
    { q: "Can I use Old English text in a document?", a: "It pastes as text into documents, but a few capitals may come from a fallback font. For anything you print, install a blackletter font instead." },
    { q: "Is Old English font text free to use commercially?", a: "Yes. The characters are part of Unicode, so anyone can use them anywhere. Installed fonts have their own licences, so check those separately." },
    { q: "Is this the Old English language?", a: "No. It changes how the letters look; your words stay in modern English. For thee-and-thou wording try the [medieval translator](/medieval-translator)." },
  ],
};

export default page;
