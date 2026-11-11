import type { PageContent } from "./types";

const page: PageContent = {
  slug: "how-to-write-old-english",
  title: "How to Write in Old English Letters by Hand — Beginner Guide",
  description:
    "How to write Old English letters by hand: pens, pen angle, the minim stroke and a step-by-step blackletter practice plan, plus a printable reference.",
  h1: "How to Write in Old English Letters",
  crumb: "How to Write Old English",
  intro:
    "Learning to write Old English lettering by hand is more about one repeated stroke than about memorising 26 fancy letters. Blackletter is built from short vertical strokes made with a flat pen held at a steady angle. Get that stroke right and most lowercase letters follow. Use the generator below as a reference while you practise.",
  tool: {
    styles: ["fraktur", "bold-fraktur", "fraktur-lower", "wide", "interpunct", "fraktur-caps"],
    sample: "minimum",
    placeholder: "Type a practice word…",
    presets: ["minimum", "illumination", "your name", "abcdefghijklm", "nopqrstuvwxyz"],
  },
  stylesHeading: "Reference letters for practice",
  howTo: {
    heading: "What you need",
    steps: [
      ["A broad-edge pen", "A chisel-tip calligraphy marker, a parallel pen around 3.8 mm, or a dip pen with a broad nib. A regular ballpoint can't make thick and thin strokes."],
      ["Guidelines", "Lined paper ruled for your pen size. A common starting height for the body of lowercase letters is about five pen-widths."],
      ["Patience for minims", "Plan a few short sessions of repeated strokes before writing whole words."],
    ],
  },
  sections: [
    {
      h2: "Step 1: Hold the pen at a steady angle",
      blocks: [
        { p: "Blackletter gets its look from a flat nib held at a constant angle, roughly 35 to 45 degrees to the writing line for most styles. Because the angle doesn't change, vertical strokes come out thick and diagonal hairlines come out thin, without you pressing harder. Draw a few zigzags first: if thick and thin strokes alternate evenly, your angle is consistent." },
      ],
    },
    {
      h2: "Step 2: Master the minim",
      blocks: [
        { p: "The minim is a short vertical stroke with a small diamond-shaped foot at the top and bottom. The letters i, m, n and u are nothing but minims joined together, which is why the word 'minimum' is the classic practice word: it's almost entirely minims. Space them evenly so the gap between strokes is about the same as the stroke width. That tight rhythm is what makes a page look 'black'." },
      ],
    },
    {
      h2: "Step 3: Build letters in families",
      blocks: [
        { ul: [
          "**Minim letters:** i, m, n, u, then r and v, which add a small flag or join.",
          "**Bowl letters:** o, c, e, then a, d, g and q. Draw the curves as straight segments with sharp corners.",
          "**Ascenders and descenders:** b, h, k, l with tall stems; p, q and y dropping below the line.",
          "**Capitals last:** Fraktur capitals are elaborate. Learn simple versions first and add flourishes later.",
        ] },
        { p: "Keep a reference open while you practise. The [Old English alphabet](/old-english-alphabet) has every letter on one page and a print button that gives you a clean sheet to keep beside your paper." },
      ],
    },
    {
      h2: "Writing in the Old English language is different",
      blocks: [
        { p: "If you were looking for how to write in the Old English language, the one spoken in England before about 1150, that's a separate subject. Its scribes used an insular script, not blackletter, and extra letters such as þ (thorn), ð (eth), æ (ash) and ƿ (wynn). Blackletter came later and became associated with 'old' English writing mostly through printing." },
      ],
    },
  ],
  built:
    "The practice reference uses Mathematical Fraktur letters (U+1D504–U+1D537). They're a digital approximation of Fraktur, so treat them as a guide to letter structure rather than as an exact model of any historical hand.",
  related: {
    heading: "More resources for lettering",
    hrefs: ["/old-english-alphabet", "/blackletter-generator", "/fonts/blackletter", "/old-english-tattoo-font", "/medieval-font-generator", "/old-english-text-to-image", "/illuminated-letters"],
  },
  faq: [
    { q: "What pen is best for writing Old English letters?", a: "Any broad-edge tool: a chisel-tip calligraphy marker is cheapest for beginners, while a parallel pen gives sharper strokes. Pointed pens and ballpoints won't give the thick and thin contrast." },
    { q: "How long does it take to learn blackletter?", a: "Most people can write tidy lowercase words after a few weeks of short, regular practice. Capitals and flourishes take longer." },
    { q: "Can I write Old English letters with a normal pen?", a: "You can imitate the shapes by drawing outlines and filling the thick parts, a technique called faux calligraphy. It's slower but needs no special pen." },
    { q: "Is blackletter the same as the Old English language?", a: "No. The language was written in an insular script; blackletter is a later style of lettering that people call Old English today." },
    { q: "Should I learn capitals or lowercase first?", a: "Lowercase. It's built from a few repeated strokes, while capitals are individual and decorative." },
  ],
};

export default page;
