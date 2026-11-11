import type { BlogPost } from "@/lib/blog";

const post: BlogPost = {
  slug: "block-vs-script-font",
  title: "Block vs Script Font: 5 Uses Compared, Tattoos to Signs",
  description:
    "Block vs script font: block letters stand apart, script letters join. Which reads better on tattoos, shirts, signs, embroidery and invitations, compared.",
  date: "2026-11-11",
  readingTime: "4 min read",
  excerpt:
    "Block or script is usually the first lettering decision, and it is mostly a question of distance, size and how the letters will be made.",
  related: ["best-monogram-fonts-blackletter", "old-english-wedding-invitations", "best-fonts-for-signs-blackletter"],
  body: [
    { type: "p", text: "A block font has letters that stand separately, like print; a script font has letters that join or appear to join, like handwriting. Across the 5 common uses compared below, block lettering wins wherever text must be read quickly or from a distance (signs, team shirts, small embroidery), and script wins where the words are short and personal (invitations, name tattoos). Blackletter counts as block: decorative, but each letter is built and placed on its own." },
    { type: "h2", text: "What counts as a block font?" },
    { type: "p", text: "In everyday speech, block letters means capital letters printed separately, as on a form that says write in block capitals. Lettering artists and sign makers use block more broadly for any style where letters don't connect: sans-serifs, slab serifs, varsity letters and, less obviously, blackletter. A Fraktur word looks busy, but each letter is a separate unit with its own space, which is why it can be spaced, kerned and cut like other print styles." },
    { type: "h2", text: "What counts as a script font?" },
    { type: "p", text: "Script fonts imitate joined writing made with a pen or brush. Formal scripts follow copperplate, with thick downstrokes and hairline joins; casual and brush scripts look quicker and rougher; signature scripts imitate a hurried autograph. Some scripts only look joined, with letters that overlap rather than truly connect, which matters for cutting machines and embroidery." },
    { type: "h2", text: "Which is better for tattoos, shirts, signs, embroidery and invitations?" },
    {
      type: "table",
      head: ["Use", "Block (incl. blackletter)", "Script", "Usual pick"],
      rows: [
        ["Tattoos", "Bold, ages well; blackletter is the classic heavy choice", "Elegant for names and short phrases; thin joins can blur as ink settles", "Either; script for names, blackletter for statements"],
        ["T-shirts and hoodies", "Reads across a room; strong for brands and teams", "Good for one-word logos and retro designs", "Block for anything longer than two words"],
        ["Signs and storefronts", "Readable at distance and speed", "Hard to read from far away, especially in all caps", "Block, with script as an accent"],
        ["Embroidery", "Clean at small sizes, particularly simple caps", "Fine joins and hairlines need more size", "Block for small text, script for larger names"],
        ["Invitations", "Formal and striking for names; heavy in long lines", "Romantic, traditional for wedding wording", "Script or serif, blackletter for names only"],
      ],
    },
    { type: "p", text: "The pattern behind the table is simple: script trades legibility for personality. That trade is worth it for a name or a two-word phrase, and rarely worth it for an address, a sentence or anything read in passing." },
    { type: "h2", text: "Can you mix block and script in one design?" },
    { type: "p", text: "Yes, and it is one of the most reliable combinations in lettering. A common pattern is a big script word over a smaller line of block capitals, such as a script name above a block date. West Coast and chicano lettering mixes them inside a single word: a heavy blackletter capital followed by flowing script lowercase. You can try that hybrid instantly in the [gangster font generator](/gangster-font-generator), which has an Old English initial plus script style, or compare full families in the [tattoo font generator](/tattoo-font-generator)." },
    { type: "p", text: "Two rules keep a mix from looking messy: give each style a clear job (one decorative, one calm), and don't put two scripts or two blackletters next to each other." },
    { type: "h2", text: "Should script ever be written in all capitals?" },
    { type: "p", text: "Almost never. Script capitals are designed to start words, with loops and swashes that collide when several sit side by side, and an all-caps script word is slow to decode. The same is true, to a lesser degree, of blackletter: whole words in Fraktur capitals are hard to read, which is why blackletter tradition uses a capital only at the start of a word." },
    { type: "h2", text: "Which works better on a cutting machine or engraver?" },
    { type: "p", text: "Block lettering is easier to cut, weed and engrave because each letter is a separate shape. With script, letters must be welded into one continuous path so the joins don't cut through, and very thin hairlines can tear in vinyl. Heavier blackletter fonts such as UnifrakturCook or Pirata One handle cutting better than delicate ones. The [Cricut guide](/fonts/old-english/cricut) covers welding and minimum sizes." },
    { type: "h2", text: "Where can you try both styles quickly?" },
    { type: "p", text: "For copy-paste text, the tattoo font generator shows block, blackletter, script and typewriter styles in one list. For installable fonts, the [tattoo fonts](/fonts/tattoo) collection mixes free block and script families, and the [chicano fonts](/fonts/chicano) collection pairs heavy blackletter with high-contrast script." },
    {
      type: "faq",
      items: [
        { q: "What is the difference between block and script fonts?", a: "Block letters stand separately, like print. Script letters join or appear to join, like handwriting." },
        { q: "Is Old English a block or script font?", a: "Block, in construction. Each blackletter letter is drawn and spaced separately, even though the style is decorative. Old English cursive styles are hybrids that add script lowercase." },
        { q: "Which is easier to read, block or script?", a: "Block, especially at a distance, at small sizes and for anything longer than a few words." },
        { q: "Is script or block better for a name tattoo?", a: "Both work. Script feels personal and flowing; bold blackletter ages well. Discuss size with your artist, because thin script joins need room." },
        { q: "Can I combine block and script fonts?", a: "Yes. Give each a clear role, such as a script name over block capitals, and avoid pairing two decorative styles." },
      ],
    },
    { type: "cta", text: "See block, blackletter and script side by side in the", href: "/tattoo-font-generator", label: "tattoo font generator" },
  ],
};

export default post;
