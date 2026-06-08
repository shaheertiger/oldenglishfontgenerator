// Page configs: one per font-generator subpage. Keyword targets mirror
// the slug strategy of competing font generator sites; copy is original.

export type PageConfig = {
  slug: string;
  keyword: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  styles: string[];
  defaultText?: string;
  about: { heading: string; body: string }[];
  faq: { q: string; a: string }[];
  whereToUse?: { app: string; note: string }[];
  examples?: string[];
  // When set, renders a copyable per-character reference chart on the page
  // using the page's first style. "letters" shows A–Z and a–z; "numbers" 0–9.
  alphabet?: "letters" | "numbers";
};

const COMMON_PLATFORMS = [
  { app: "Instagram", note: "Bios, captions, comments" },
  { app: "TikTok", note: "Usernames, captions, comments" },
  { app: "Discord", note: "Messages, status, nicknames" },
  { app: "Twitter / X", note: "Display name, bio, tweets" },
  { app: "Facebook", note: "Posts and comments" },
  { app: "WhatsApp", note: "Messages and status" },
  { app: "YouTube", note: "Channel name, video titles" },
  { app: "Telegram", note: "Messages and bios" },
];

const ALL_VARIETY = [
  "fraktur",
  "fraktur-bold",
  "script",
  "script-bold",
  "bold-serif",
  "italic-serif",
  "bold-italic-serif",
  "sans-bold",
  "sans-italic",
  "double-struck",
  "monospace",
  "bubble",
  "bubble-filled",
  "squared",
  "fullwidth",
  "small-caps",
  "superscript",
  "upside-down",
  "strikethrough",
  "underline",
  "zalgo-soft",
  "weird",
];

export const PAGES: PageConfig[] = [
  {
    slug: "cursive",
    keyword: "cursive generator",
    title: "Cursive Font Generator – Copy & Paste Cursive Text",
    description:
      "Convert plain text into cursive, script, and handwritten Unicode fonts. Free, instant, and works on Instagram, TikTok, Discord, and more.",
    h1: "Cursive Font Generator",
    intro:
      "Turn anything you type into smooth cursive and script styles. Copy a variant and paste it into your bio, captions, comments, or DMs — no app or sign-up needed.",
    styles: ["script", "script-bold", "italic-serif", "bold-italic-serif", "sans-italic", "sans-bold-italic", "cursive-underline", "cursive-strike", "cursive-spaced", "cursive-bold-spaced", "italic-underline", "italic-strike", "italic-spaced", "script-zalgo", "medieval-script"],
    about: [
      {
        heading: "What counts as a cursive font?",
        body: "Cursive typefaces are scripts where letters look flowing and connected, like handwriting with a fountain pen. The Unicode standard includes several blocks of script-style letters — what you see here are those characters, mapped one-to-one from your input.",
      },
      {
        heading: "Where can I use cursive Unicode text?",
        body: "Anywhere plain text is accepted: Instagram bios and captions, TikTok usernames and comments, Discord messages, Twitter/X, YouTube titles, WhatsApp, Telegram, and most messaging apps. Some platforms strip rare characters from usernames — if that happens, try a different variant.",
      },
    ],
    faq: [
      {
        q: "Is this actually a font?",
        a: "No — your device's font isn't changing. We swap each letter for a similar-looking Unicode codepoint, so the result is still plain text and pastes anywhere.",
      },
      {
        q: "Why do some letters look like boxes?",
        a: "The viewer's device is missing a font that covers those characters. Pick a different style and the recipient should see it correctly.",
      },
      {
        q: "Can I use cursive text in my Instagram name?",
        a: "Yes — bios accept the full Unicode range. The display name field sometimes filters unusual letters, so test before committing.",
      },
    ],
  },
  {
    slug: "calligraphy",
    keyword: "calligraphy generator",
    title: "Calligraphy Font Generator – Copy & Paste Calligraphy Text",
    description:
      "Turn plain text into elegant calligraphy and script fonts. Free, instant Unicode calligraphy you can copy and paste into Instagram, bios, invitations, and more.",
    h1: "Calligraphy Font Generator",
    intro:
      "Type anything and get flowing, hand-lettered calligraphy styles — script, italic, and ornate medieval forms. Copy a variant and paste it anywhere, no font file required.",
    styles: ["script", "script-bold", "italic-serif", "bold-italic-serif", "sans-italic", "cursive-underline", "cursive-spaced", "medieval-script", "royal-gothic", "decorative-gothic", "fraktur", "ye-olde"],
    about: [
      {
        heading: "Is this real calligraphy?",
        body: "Not in the pen-and-ink sense — true calligraphy is drawn by hand with a nib or brush. What you get here are Unicode script and italic alphabets that mimic the flowing look of calligraphic lettering, mapped one-to-one from your input so the result stays as plain, copyable text.",
      },
      {
        heading: "Where calligraphy text works best",
        body: "Calligraphy styles read as elegant and personal, so they suit Instagram bios and captions, wedding and event mockups, quote graphics, signatures, and profile names. Pair a script style with regular text so longer passages stay readable at a glance.",
      },
    ],
    faq: [
      {
        q: "Can I use this calligraphy for wedding invitations?",
        a: "For digital previews and mockups, yes. For printed invitations, hand the chosen look to your designer so they can set it in a proper vector font — Unicode characters won't print as crisply as a real typeface.",
      },
      {
        q: "Why do some calligraphy letters look like boxes?",
        a: "The viewer's device is missing a font that covers those script characters. Pick a different variant and the recipient should see it correctly.",
      },
    ],
  },
  {
    slug: "gothic",
    keyword: "gothic text generator",
    title: "Gothic Font Generator – Copy & Paste Gothic Text",
    description:
      "Convert plain text into gothic, blackletter, and fraktur fonts. Free, instant Unicode gothic text you can copy and paste into Instagram, Discord, bios, and usernames.",
    h1: "Gothic Font Generator",
    intro:
      "Turn anything you type into dark, angular gothic and blackletter styles. Copy a variant and paste it into your bio, captions, usernames, or messages — no app or font file needed.",
    styles: ["fraktur", "fraktur-bold", "gothic-bold", "blackletter-bold", "outline-gothic", "decorative-gothic", "royal-gothic", "medieval-script", "script", "double-struck", "small-caps", "tattoo-gothic"],
    about: [
      {
        heading: "What makes a font 'gothic'?",
        body: "Gothic is the everyday name for blackletter — the dense, angular scripts medieval European scribes used, later cast as type by early printers. The styles here approximate the most recognizable blackletter forms (textura, fraktur, schwabacher) using Unicode characters, so the result stays as plain, copyable text.",
      },
      {
        heading: "Gothic vs. blackletter vs. Old English",
        body: "All three name the same broad family. Blackletter is the typographic term, gothic is the common word, and Old English is what most tattoo artists and sign shops call it. They're stylistic siblings, not different writing systems.",
      },
    ],
    faq: [
      {
        q: "Will gothic text work in my Instagram or Discord name?",
        a: "Bios and messages accept the full Unicode range. Username fields are stricter — if a heavily decorated variant won't save, pick one closer to standard letters like Small Caps or Bold.",
      },
      {
        q: "Can I use gothic text for a tattoo?",
        a: "For mockups, yes — preview your phrase in every style. For the actual tattoo, your artist needs a real vector font so the linework stays sharp; use the generator to choose the look you want.",
      },
    ],
  },
  {
    slug: "cute",
    keyword: "cute font copy and paste",
    title: "Cute Font Generator – Copy & Paste Cute Aesthetic Text",
    description:
      "Make cute, soft, aesthetic fonts you can copy and paste. Bubble, script, small caps, and decorative Unicode styles — instant and free for bios, captions, and usernames.",
    h1: "Cute Font Generator",
    intro:
      "Type once and grab soft, playful, aesthetic styles — bubbly circled letters, flowing script, and tiny small caps. Copy whichever looks cutest and paste it anywhere.",
    styles: ["bubble", "bubble-filled", "script", "script-bold", "small-caps", "small-caps-spaced", "squared", "fullwidth", "cursive-underline", "italic-serif", "double-struck", "superscript"],
    about: [
      {
        heading: "What makes a font look cute?",
        body: "Cute styles lean on rounded, soft, or dainty shapes — circled bubble letters, flowing script, and small caps all read as friendly and aesthetic. Mixing them with symbols and spacing creates the soft 'kawaii' look popular in bios and usernames.",
      },
      {
        heading: "Pairing cute text with symbols",
        body: "Cute aesthetics often combine styled letters with decorative symbols — hearts, stars, sparkles. Generate your text here, then add a few glyphs from the symbols pages for a finished look.",
      },
    ],
    faq: [
      {
        q: "Can I use cute fonts in my Instagram bio?",
        a: "Yes — bios accept the full Unicode range. Some username fields filter unusual characters, so test before saving your handle.",
      },
      {
        q: "Why do some cute letters look the same in upper and lowercase?",
        a: "A few Unicode styles (like filled bubble letters) only have one case, so we use them for both. Pick the outlined variant if you need distinct upper and lowercase.",
      },
    ],
  },
  {
    slug: "superscript",
    keyword: "superscript generator",
    title: "Superscript Generator – Copy & Paste Small Raised Text",
    description:
      "Convert text into superscript using Unicode characters. Tiny raised letters you can copy and paste into bios, footnotes, captions, and chat.",
    h1: "Superscript Generator",
    intro:
      "Turn your text into small, raised superscript letters. Copy a variant and paste it anywhere — bios, footnotes, math notation, or minimalist captions.",
    styles: ["superscript", "small-caps", "tiny-spaced", "small-caps-spaced", "small-gothic", "monospace"],
    about: [
      {
        heading: "How superscript text works",
        body: "Superscript characters were designed for math and footnote notation (like xⁿ), but they render smaller and raised compared to regular letters and copy as plain text. We map each letter to its Unicode superscript form where one exists.",
      },
    ],
    faq: [
      {
        q: "Why are some superscript letters missing or substituted?",
        a: "Unicode never assigned a superscript form for every Latin letter. Most are covered, but a few fall back to the closest similar-looking character.",
      },
    ],
  },
  {
    slug: "aesthetic",
    keyword: "aesthetic fonts",
    title: "Aesthetic Font Generator – Copy & Paste Aesthetic Text",
    description:
      "Generate aesthetic fonts — fullwidth, spaced, script, and soft Unicode styles you can copy and paste into Instagram bios, captions, and usernames.",
    h1: "Aesthetic Font Generator",
    intro:
      "Type once and browse soft, spaced, and vaporwave-style aesthetic fonts. Copy whichever fits your vibe and paste it into your bio, captions, or profile.",
    styles: ["fullwidth", "script", "small-caps-spaced", "squared", "cursive-spaced", "italic-spaced", "double-struck", "bubble", "outline-spaced", "spaced", "small-caps", "fullwidth-underline"],
    about: [
      {
        heading: "What makes a font look 'aesthetic'?",
        body: "Aesthetic styles lean on airy spacing, soft script, and fullwidth letters that take up more room — the look that defines vaporwave, soft-girl, and minimalist profiles. The effect comes from real Unicode characters, so it pastes anywhere as plain text.",
      },
    ],
    faq: [
      {
        q: "Can I use aesthetic fonts in my Instagram bio?",
        a: "Yes — bios accept the full Unicode range. Some username fields filter unusual characters, so test before saving a handle.",
      },
    ],
  },
  {
    slug: "fortnite",
    keyword: "fortnite font",
    title: "Fortnite Font Generator – Sweaty Tryhard Name Fonts",
    description:
      "Generate Fortnite-style fonts for sweaty, tryhard usernames and display names. Gothic, bold, and decorative Unicode styles — copy and paste ready.",
    h1: "Fortnite Font Generator",
    intro:
      "Build a sweaty Fortnite-style name. Pick a bold, gothic, or symbol-laden variant, copy it, and paste it into your Epic display name or clan tag.",
    styles: ["gothic-bold", "fraktur", "blackletter", "sans-bold", "monospace", "small-caps", "double-struck", "squared", "fullwidth", "tattoo-gothic", "outline-gothic", "fraktur-bold"],
    about: [
      {
        heading: "Where Fortnite-style fonts work",
        body: "Epic Games display names accept a wide range of Unicode, which is why 'sweaty' players use styled letters and symbols to stand out. The same styles work in clan tags and on most gaming profiles like Steam, Xbox, and PSN.",
      },
    ],
    faq: [
      {
        q: "Will Fortnite accept these characters in my name?",
        a: "Most do, but Epic filters some ranges and blocks duplicate display names. If a variant won't save, try one closer to standard letters or remove the heaviest symbols.",
      },
    ],
  },
  {
    slug: "vaporwave",
    keyword: "vaporwave text generator",
    title: "Vaporwave Text Generator – Aesthetic Fullwidth Text",
    description:
      "Generate vaporwave aesthetic text using fullwidth Unicode characters — the ａｅｓｔｈｅｔｉｃ wide-spaced look. Copy and paste anywhere.",
    h1: "Vaporwave Text Generator",
    intro:
      "Get the classic ｖａｐｏｒｗａｖｅ look — wide fullwidth letters with airy spacing. Copy a style and paste it into captions, art, or your profile.",
    styles: ["fullwidth", "fullwidth-underline", "squared", "squared-spaced", "spaced", "small-caps-spaced", "double-struck", "script"],
    about: [
      {
        heading: "Where the vaporwave look comes from",
        body: "Vaporwave text uses fullwidth forms (ＡＢＣ) originally designed to sit alongside East Asian characters on the same em-square. Pasted into a Latin context they render wide and evenly spaced — the aesthetic that became shorthand for the vaporwave and 80s-retro vibe.",
      },
    ],
    faq: [
      {
        q: "Why does vaporwave text take up so much space?",
        a: "Fullwidth characters are designed to be as wide as a CJK character, so each letter is roughly double the width of normal text. It can wrap awkwardly on narrow screens — preview before posting.",
      },
    ],
  },
  {
    slug: "hacked",
    keyword: "hacker font",
    title: "Hacked Text Generator – Glitchy Hacker Font Copy & Paste",
    description:
      "Generate hacked, glitchy, and leetspeak hacker fonts using Unicode. Copy and paste corrupted, matrix-style text anywhere.",
    h1: "Hacked Text Generator",
    intro:
      "Make your text look hacked — leetspeak, glitched, and monospace 'terminal' styles. Copy a variant and paste it wherever plain text is allowed.",
    styles: ["leet", "gothic-glitch", "zalgo", "zalgo-soft", "sans-zalgo", "monospace", "double-struck", "squared", "strikethrough"],
    about: [
      {
        heading: "How 'hacked' text is built",
        body: "The hacker look mixes a few tricks: leetspeak swaps letters for numbers and symbols (h4ck3d), monospace mimics a terminal, and combining diacritics add a glitched, corrupted overlay. All of it stays as copyable Unicode text.",
      },
    ],
    faq: [
      {
        q: "Will glitchy hacked text break anyone's app?",
        a: "Heavy combining-mark styles can slow older renderers, and some platforms throttle high-density Unicode. Use it for fun, not to evade moderation.",
      },
    ],
  },
  {
    slug: "tattoo",
    keyword: "tattoo fonts",
    title: "Tattoo Font Generator – Blackletter & Gothic Tattoo Lettering",
    description:
      "Preview tattoo lettering in dozens of blackletter, gothic, and script styles. Free Unicode tattoo fonts you can copy and paste to mock up a design.",
    h1: "Tattoo Font Generator",
    intro:
      "Mock up a name or quote in tattoo lettering before you book. Browse blackletter, gothic, and script styles, copy your favorite, and share it with your artist.",
    styles: ["tattoo-gothic", "blackletter", "blackletter-bold", "gothic-bold", "fraktur", "royal-gothic", "dark-gothic", "church-style", "medieval-script", "decorative-gothic", "band-logo", "old-english-spaced"],
    about: [
      {
        heading: "Using this to plan a tattoo",
        body: "Type your phrase and preview it instantly across blackletter, gothic, and script variants — far faster than installing downloaded fonts. Once you find the look you want, screenshot it or copy the text to show your artist.",
      },
      {
        heading: "From mockup to real ink",
        body: "These are Unicode characters for previewing, not print-ready type. For the actual tattoo, your artist needs a true vector font (TTF/OTF) so the linework stays crisp at any size. Use the generator to decide the style; let the artist handle the stencil.",
      },
    ],
    faq: [
      {
        q: "Can I use these characters as a tattoo stencil?",
        a: "They're meant for previewing the style, not as a stencil. Hand the chosen look to your tattoo artist so they can set it in a proper vector font for clean linework.",
      },
      {
        q: "Which style is most popular for tattoos?",
        a: "Blackletter and Old English gothic are the classic tattoo scripts; flowing script suits names and quotes. Try a few and see what fits the placement.",
      },
    ],
  },
  {
    slug: "signature",
    keyword: "signature font",
    title: "Signature Font Generator – Copy & Paste Signature Style Text",
    description:
      "Turn your name into elegant signature-style script fonts. Free Unicode signature fonts you can copy and paste into bios, emails, and profiles.",
    h1: "Signature Font Generator",
    intro:
      "Give your name a signature look with flowing script and italic styles. Copy a variant and paste it into your bio, email sign-off, or profile.",
    styles: ["script", "script-bold", "cursive-spaced", "cursive-underline", "italic-serif", "bold-italic-serif", "sans-italic", "medieval-script"],
    about: [
      {
        heading: "What a signature font is here",
        body: "True signatures are hand-drawn, but these Unicode script and italic styles mimic that flowing, personal look. Because the result is plain text, it pastes into email signatures, bios, and profiles that don't let you change fonts.",
      },
    ],
    faq: [
      {
        q: "Can I use this as a legally binding signature?",
        a: "No — it's styled text for cosmetic use, not a legal e-signature. For documents, use a dedicated e-signature service.",
      },
    ],
  },
  {
    slug: "handwriting",
    keyword: "handwriting font",
    title: "Handwriting Font Generator – Copy & Paste Handwritten Text",
    description:
      "Convert text into handwritten-style script fonts. Free Unicode handwriting fonts you can copy and paste into bios, captions, and messages.",
    h1: "Handwriting Font Generator",
    intro:
      "Make your text look handwritten with flowing script and cursive styles. Copy a variant and paste it anywhere plain text is allowed.",
    styles: ["script", "script-bold", "cursive-spaced", "cursive-underline", "cursive-strike", "italic-serif", "sans-italic", "medieval-script"],
    about: [
      {
        heading: "How handwriting fonts work as text",
        body: "These styles use Unicode script and cursive alphabets that resemble handwriting, mapped one-to-one from your input. They aren't real fonts installed on your device — they're characters, so they survive copy-paste into apps with no formatting controls.",
      },
    ],
    faq: [
      {
        q: "Why do some handwritten letters show as boxes?",
        a: "The viewer's device lacks a font covering those script characters. Pick a different variant and the recipient should see it correctly.",
      },
    ],
  },
  {
    slug: "old-english",
    keyword: "old english font",
    title: "Old English Font Generator – Copy & Paste Old English Text",
    description:
      "Convert text into authentic Old English, blackletter, and gothic styles. Free Unicode Old English fonts you can copy and paste into Instagram, Discord, and bios.",
    h1: "Old English Font Generator",
    intro:
      "Turn anything you type into Old English blackletter and gothic lettering. Copy a variant and paste it into your bio, captions, usernames, or tattoo mockups.",
    styles: ["gothic-classic", "gothic-bold", "blackletter", "fraktur", "fraktur-bold", "old-english-spaced", "german-gothic", "church-style", "medieval-script", "royal-gothic", "decorative-gothic", "tattoo-gothic"],
    about: [
      {
        heading: "What is an Old English font?",
        body: "Old English is the everyday name for blackletter — the dense, angular scripts medieval scribes used and early printers cast as type. The styles here approximate the most recognizable blackletter forms using Unicode characters, so the result stays as plain, copyable text.",
      },
      {
        heading: "Old English vs. gothic vs. blackletter",
        body: "All three name the same family. Blackletter is the typographic term, gothic is the common word, and Old English is what most tattoo artists and sign shops call it — stylistic siblings, not different writing systems.",
      },
    ],
    faq: [
      {
        q: "Will Old English text work in my Instagram or Discord name?",
        a: "Bios and messages accept the full Unicode range. Username fields are stricter — if a decorated variant won't save, pick one closer to standard letters.",
      },
      {
        q: "Can I use Old English text for a tattoo?",
        a: "For mockups, yes — preview your phrase in every style. For the actual tattoo, your artist needs a real vector font so the linework stays sharp.",
      },
    ],
  },
  {
    slug: "instagram",
    keyword: "ig fonts",
    title: "Instagram Fonts Generator – IG Bio & Caption Fonts",
    description:
      "Generate fonts for Instagram bios, captions, and usernames. Cursive, bold, gothic, and aesthetic Unicode styles — copy and paste instantly.",
    h1: "Instagram Fonts Generator",
    intro:
      "Pick a font, copy it, and paste it straight into your Instagram bio, caption, or comment. All styles are Unicode, so Instagram displays them correctly on web and mobile.",
    styles: ["script", "fraktur", "bold-serif", "italic-serif", "small-caps", "bubble", "squared", "double-struck"],
    about: [
      {
        heading: "Which fonts work in Instagram bios?",
        body: "Nearly all of the styles below render correctly in Instagram bios and captions. Display names accept Unicode too, but Instagram's automatic moderation occasionally hides accounts whose names look like spam — stick to clean styles for your handle.",
      },
      {
        heading: "Tips for IG-ready text",
        body: "Mix one fancy style with regular letters so people can still read your bio at a glance. Combine with line breaks (use a blank character in the Notes app and paste it) for a cleaner layout.",
      },
    ],
    faq: [
      {
        q: "Will fancy fonts hurt my Instagram reach?",
        a: "Captions yes-or-no, opinions vary. Instagram's search and accessibility both prefer plain text, so heavy stylization in captions can reduce discoverability. Bios are safer.",
      },
      {
        q: "Can screen readers read these characters?",
        a: "Usually they read them character-by-character or skip them. If accessibility matters, keep your most important text in regular characters.",
      },
    ],
  },
  {
    slug: "cool",
    keyword: "cool fonts copy and paste",
    title: "Cool Fonts Generator – Copy & Paste Cool Text Styles",
    description:
      "A library of cool fonts you can copy and paste. Aesthetic, gothic, cursive, glitch, bubble — all generated instantly from any text.",
    h1: "Cool Fonts: Copy & Paste",
    intro:
      "Type once, browse a wall of styles, copy whichever looks coolest. Works everywhere plain text does — no downloads, no accounts.",
    styles: ALL_VARIETY,
    about: [
      {
        heading: "Why these all work as text",
        body: "Every style here uses real Unicode characters, not images or custom fonts. That's why you can paste them into apps that don't let you change typefaces.",
      },
    ],
    faq: [
      {
        q: "Are these safe to use in business profiles?",
        a: "Yes, but use sparingly. A subtle accent works; a wall of glitch text reads as low-effort.",
      },
    ],
  },
  {
    slug: "bold",
    keyword: "bold generator",
    title: "Bold Font Generator – Copy & Paste Bold Text",
    description:
      "Make any text bold using Unicode characters. Works on Instagram, Discord, Twitter, and anywhere bold formatting isn't supported.",
    h1: "Bold Font Generator",
    intro:
      "Type your message and grab a bold version that survives copy-paste. Use it where rich-text formatting isn't available.",
    styles: ["bold-serif", "bold-italic-serif", "sans-bold", "sans-bold-italic", "fraktur-bold", "script-bold", "bold-spaced", "bold-underline", "bold-strike", "sans-bold-spaced", "gothic-bold", "blackletter-bold", "alternating", "stacked-bold-strike", "tattoo-gothic"],
    about: [
      {
        heading: "Bold via Unicode vs. bold via formatting",
        body: "Editors like Word and Google Docs make text bold by changing the font weight. Platforms without that option (Instagram, most chat apps) leave you out of luck — unless you use Unicode bold characters that already look heavier built-in.",
      },
    ],
    faq: [
      {
        q: "Does bold Unicode work in Discord?",
        a: "Yes, but Discord also supports markdown — wrap text in **double asterisks** for native bold that screen readers handle properly.",
      },
    ],
  },
  {
    slug: "strikethrough",
    keyword: "strikethrough text generator",
    title: "Strikethrough Text Generator – Crossed-Out Text",
    description:
      "Generate strikethrough, underline, and slashed text using combining Unicode characters. Copy and paste into any app.",
    h1: "Strikethrough Text Generator",
    intro:
      "Add a line through your text — useful for edits, sarcasm, or just style. Strikethrough here uses combining characters, so it pastes everywhere.",
    styles: ["strikethrough", "underline", "double-underline", "slash-through"],
    about: [
      {
        heading: "How strikethrough works in Unicode",
        body: "Each character is followed by an invisible 'combining long stroke overlay' (U+0336) that the renderer draws on top. The text remains selectable and copyable as the original letters.",
      },
    ],
    faq: [
      {
        q: "Will the strikethrough survive a copy/paste round-trip?",
        a: "Yes — the combining characters are part of the string. Some plain-text fields strip them; most don't.",
      },
    ],
  },
  {
    slug: "bubble",
    keyword: "bubble font generator",
    title: "Bubble Font Generator – Circled Letter Text",
    description:
      "Turn text into bubble letters using circled Unicode characters. Filled and outlined variants, copy and paste ready.",
    h1: "Bubble Font Generator",
    intro:
      "Each letter becomes a circle. Pick outlined or solid, copy, paste — your text now floats.",
    styles: ["bubble", "bubble-filled", "squared"],
    about: [
      {
        heading: "Outlined vs. filled bubbles",
        body: "Outlined bubbles (Ⓐ Ⓑ Ⓒ) read more cleanly at small sizes; filled bubbles (🅐 🅑 🅒) pop against light backgrounds. Mix with regular text for emphasis instead of using a whole sentence.",
      },
    ],
    faq: [
      {
        q: "Why is the filled variant the same for upper and lowercase?",
        a: "Unicode only assigns one set of filled negative-circle letters, so we use them for both cases. The outlined variant has both.",
      },
    ],
  },
  {
    slug: "fonts-copy-and-paste",
    keyword: "fonts copy and paste",
    title: "Fonts Copy and Paste – Free Unicode Text Generator",
    description:
      "Copy and paste fonts for any app: cursive, gothic, bold, bubble, small caps, and more. Generated instantly from your text.",
    h1: "Fonts to Copy and Paste",
    intro:
      "One input, dozens of styles. Tap copy on the one you like and drop it wherever — no formatting toolbar required.",
    styles: ALL_VARIETY,
    about: [
      {
        heading: "Why copy-paste fonts exist",
        body: "Apps like Instagram and TikTok don't expose font controls in their text fields. Unicode is the workaround: certain mathematical and decorative alphabets look like different fonts but are technically just characters, so they survive copy-paste.",
      },
    ],
    faq: [
      {
        q: "Will my recipient see the same thing I do?",
        a: "If their device has a recent operating system, yes. Older Android and Windows versions sometimes show tofu boxes for less common ranges.",
      },
    ],
  },
  {
    slug: "weird",
    keyword: "weird text generator",
    title: "Weird Text Generator – Strange Unicode Styles",
    description:
      "Generate weird text — glitched, mixed, upside-down, and oddly-spaced Unicode variants you can copy and paste.",
    h1: "Weird Text Generator",
    intro:
      "Take your text somewhere unusual. Mix scripts, flip it, glitch it, space it out — all from one input.",
    styles: ["weird", "upside-down", "reverse", "spaced", "zalgo-soft", "zalgo", "bubble", "squared", "fullwidth"],
    about: [
      {
        heading: "What makes text 'weird'?",
        body: "Most of these styles draw from blocks of Unicode that weren't designed for normal writing — math symbols, phonetic alphabets, combining diacritics. Stacking them produces text that looks off in a fun way.",
      },
    ],
    faq: [
      {
        q: "Can I use this for usernames?",
        a: "Sometimes. Many platforms restrict usernames to a safe character set. Bios and post bodies are more permissive.",
      },
    ],
  },
  {
    slug: "small",
    keyword: "small font",
    title: "Small Font Generator – Tiny Text Copy & Paste",
    description:
      "Generate small text using superscript and small-caps Unicode characters. Perfect for compact bios and labels.",
    h1: "Small Font Generator",
    intro:
      "Shrink your text without changing the size. Great for bio subtext, footnotes, and minimalist captions.",
    styles: ["superscript", "small-caps"],
    about: [
      {
        heading: "How 'small' fonts actually work",
        body: "Superscript characters are designed for math notation (xⁿ), but they render smaller than regular letters and copy as plain text. Small caps use phonetic alphabet characters that look like miniature uppercase letters.",
      },
    ],
    faq: [
      {
        q: "Why are some letters missing in superscript?",
        a: "Unicode never assigned a superscript form for every Latin letter — most are there, but a few (like q and y in some fonts) fall back to similar-looking characters.",
      },
    ],
  },
  {
    slug: "discord",
    keyword: "font for discord",
    title: "Discord Font Generator – Fonts for Discord Chat",
    description:
      "Fonts you can copy and paste into Discord — usernames, status, channel messages. Works alongside Discord's built-in markdown.",
    h1: "Font Generator for Discord",
    intro:
      "Generate text Discord will actually render. Use these styles in your username, status, or messages — pair with markdown for bold and italics.",
    styles: ["fraktur", "script", "bold-serif", "italic-serif", "sans-bold", "small-caps", "double-struck", "monospace"],
    about: [
      {
        heading: "Markdown vs. Unicode in Discord",
        body: "Discord supports markdown inside messages: **bold**, *italic*, ~~strike~~, `code`. For usernames, status messages, and channel names — where markdown doesn't apply — Unicode fonts are the only way to add style.",
      },
    ],
    faq: [
      {
        q: "Will Unicode usernames affect pings?",
        a: "Discord normalizes characters for matching, so @-mentions still work in most cases, but some screen-reader users won't be able to type your name. Use sparingly.",
      },
    ],
  },
  {
    slug: "discord-font",
    keyword: "discord font",
    title: "Discord Fonts – Copy & Paste Stylish Text",
    description:
      "Stylish fonts for Discord profiles, usernames, and messages. Copy and paste — all Unicode, no Nitro required.",
    h1: "Discord Fonts",
    intro:
      "No Nitro, no bots. Type, copy, paste — your Discord text gets a new look instantly.",
    styles: ["fraktur", "fraktur-bold", "script", "bold-serif", "italic-serif", "sans-bold", "small-caps", "monospace", "double-struck"],
    about: [
      {
        heading: "Where these fonts show up",
        body: "Usernames, server nicknames, custom status, channel topics, and message bodies. They render the same on desktop, web, and mobile clients.",
      },
    ],
    faq: [
      {
        q: "Are fancy usernames against Discord's rules?",
        a: "Not in themselves. Discord's rules ban impersonation and harassment, not Unicode. Avoid look-alike characters used to impersonate someone else.",
      },
    ],
  },
  {
    slug: "glitch",
    keyword: "corrupted text generator",
    title: "Glitch / Corrupted Text Generator – Zalgo Style",
    description:
      "Generate glitched, corrupted, and zalgo text using combining diacritics. Copy and paste straight into any app.",
    h1: "Glitch / Corrupted Text Generator",
    intro:
      "Add layers of combining marks until your text looks like it crawled out of a broken terminal. Dial the intensity up or down.",
    styles: ["zalgo-soft", "zalgo", "zalgo-extreme"],
    about: [
      {
        heading: "How glitch text is built",
        body: "Combining diacritical marks (Unicode block U+0300–036F) stack on top of any base character. Pile enough of them up and the renderer starts overlapping glyphs — that's the glitch effect.",
      },
    ],
    faq: [
      {
        q: "Will glitch text break anyone's app?",
        a: "It can slow down older renderers and is sometimes used to crash naive parsers. Use it for fun, not for harm.",
      },
    ],
  },
  {
    slug: "facebook",
    keyword: "facebook fonts",
    title: "Facebook Fonts Generator – Stylish FB Profile Text",
    description:
      "Fonts for Facebook posts, comments, and profile fields. Copy and paste cursive, bold, gothic, and bubble styles.",
    h1: "Facebook Fonts Generator",
    intro:
      "Make your posts and comments stand out. Facebook accepts the same Unicode tricks that work on Instagram and Twitter.",
    styles: ["script", "fraktur", "bold-serif", "italic-serif", "small-caps", "bubble", "double-struck"],
    about: [
      {
        heading: "Facebook's text rendering quirks",
        body: "Facebook respects Unicode in posts and comments. Page names and profile names go through review and sometimes reject heavily stylized text.",
      },
    ],
    faq: [
      {
        q: "Can I use these in Marketplace listings?",
        a: "Yes, but Marketplace search indexes plain text. Heavy styling hurts your listing's discoverability.",
      },
    ],
  },
  {
    slug: "italic",
    keyword: "italics generator",
    title: "Italics Generator – Copy & Paste Italic Text",
    description:
      "Convert plain text to italic Unicode. Works where italic formatting isn't supported — Instagram bios, Discord usernames, and more.",
    h1: "Italics Generator",
    intro:
      "Get italic text you can paste anywhere — even in fields that don't support formatting.",
    styles: ["italic-serif", "bold-italic-serif", "sans-italic", "sans-bold-italic", "script", "script-bold", "italic-underline", "italic-strike", "italic-spaced", "alternating", "cursive-underline", "cursive-strike"],
    about: [
      {
        heading: "Italic Unicode vs. italic styling",
        body: "Real italics need a font with an italic cut. Unicode 'italic' characters are math symbols designed to look slanted — close enough for cosmetic use but not for typesetting.",
      },
    ],
    faq: [
      {
        q: "Does italic text affect SEO?",
        a: "Search engines index the underlying characters, not their visual style. Unicode italics don't help (or hurt) ranking on their own.",
      },
    ],
  },
  {
    slug: "upside-down",
    keyword: "upside down font generator",
    title: "Upside Down Text Generator – Flip Text",
    description:
      "Flip text upside down using Unicode. Copy and paste flipped text into chats, posts, and bios.",
    h1: "Upside Down Text Generator",
    intro:
      "Your text, rotated 180°. Each letter is swapped for a Unicode character that looks like its mirror, then the whole string is reversed.",
    styles: ["upside-down"],
    about: [
      {
        heading: "Why flipped text works",
        body: "Unicode contains rotated forms of many Latin letters (ɐ for a, qfor d, ǝ for e). Combine them in reverse order and you get readable upside-down text.",
      },
    ],
    faq: [
      {
        q: "Can it flip numbers and punctuation?",
        a: "Most — yes. A few characters fall back to their normal form when no rotated equivalent exists in Unicode.",
      },
    ],
  },
  {
    slug: "fancy",
    keyword: "fancy font copy and paste",
    title: "Fancy Font Generator – Aesthetic Copy & Paste Text",
    description:
      "Fancy and aesthetic Unicode fonts. Cursive, gothic, outline, and decorative styles you can copy and paste.",
    h1: "Fancy Font Generator",
    intro:
      "Type once, copy a style that fits your vibe — calligraphic, gothic, outlined, or vintage.",
    styles: ["script", "script-bold", "fraktur", "fraktur-bold", "double-struck", "italic-serif", "small-caps", "outline-gothic", "decorative-gothic", "royal-gothic", "medieval-script", "bold-italic-serif", "fullwidth", "ye-olde"],
    about: [
      {
        heading: "Picking the right fancy style",
        body: "Script and italic styles read as warm and personal. Fraktur and outline styles feel formal or ceremonial. Choose based on the mood of what you're posting.",
      },
    ],
    faq: [
      {
        q: "Can I use fancy text for wedding invites?",
        a: "For digital previews, sure. For printed invitations, ask your designer to use a proper typeface — Unicode characters won't print as cleanly as vector fonts.",
      },
    ],
  },
  {
    slug: "cursed",
    keyword: "cursed text generator",
    title: "Cursed Text Generator – Cursed Unicode Text",
    description:
      "Generate cursed, corrupted, and chaotic text using stacked Unicode diacritics. Copy and paste anywhere.",
    h1: "Cursed Text Generator",
    intro:
      "Heavy-duty glitch. Stacks of combining marks turn your text into something that feels unsafe to read.",
    styles: ["zalgo-extreme", "zalgo", "zalgo-soft", "weird"],
    about: [
      {
        heading: "How 'cursed' text became a meme",
        body: "The technique started on a 4chan board in the late 2000s as 'zalgo' text and spread as a way to mimic horror imagery in plain text. Today it's used for memes, ARGs, and aesthetic posts.",
      },
    ],
    faq: [
      {
        q: "Will cursed text get my message flagged?",
        a: "Some platforms throttle or hide messages with extreme Unicode density. Use it for fun, not for evading moderation.",
      },
    ],
  },
  {
    slug: "creepy",
    keyword: "creepy text",
    title: "Creepy Text Generator – Eerie Unicode Styles",
    description:
      "Creepy text styles — zalgo, glitch, and unsettling Unicode mixes you can copy and paste.",
    h1: "Creepy Text Generator",
    intro:
      "Set the mood. Glitchy, off-kilter, and gothic styles for horror posts, scary stories, and Halloween captions.",
    styles: ["zalgo-soft", "zalgo", "fraktur", "fraktur-bold", "weird"],
    about: [
      {
        heading: "Creepy ≠ unreadable",
        body: "The trick is to keep your text legible while suggesting something is wrong with it. Light zalgo or blackletter usually lands better than maxed-out chaos.",
      },
    ],
    faq: [
      {
        q: "What style works best for horror captions?",
        a: "Light glitch on key words, blackletter for the title. Heavy zalgo loses impact when overused.",
      },
    ],
  },
  {
    slug: "twitter",
    keyword: "twitter fonts",
    title: "Twitter Fonts Generator – X Profile & Tweet Fonts",
    description:
      "Fonts for Twitter / X — display names, bios, and tweets. Cursive, bold, gothic, and small caps.",
    h1: "Twitter / X Fonts Generator",
    intro:
      "Stand out in the feed. These Unicode styles work in display names, bios, and tweet bodies.",
    styles: ["script", "fraktur", "bold-serif", "italic-serif", "small-caps", "double-struck", "monospace"],
    about: [
      {
        heading: "Twitter's character limit and Unicode",
        body: "Twitter counts most styled letters as a single character, but some (like outlined or bubble letters) take two units. Watch your character count if you're near the limit.",
      },
    ],
    faq: [
      {
        q: "Will styled text reduce my impressions?",
        a: "Slightly, in our experience — Twitter's search and recommendation systems index plain text best. Reserve styled fonts for emphasis.",
      },
    ],
  },
  {
    slug: "big",
    keyword: "big text generator",
    title: "Big Text Generator – Large Unicode Letters",
    description:
      "Generate big, full-width text using Unicode. Copy and paste large letters anywhere plain text is allowed.",
    h1: "Big Text Generator",
    intro:
      "Take up more space without changing your font size. Full-width Unicode letters render wider and taller than regular text.",
    styles: ["fullwidth", "squared", "bubble-filled"],
    about: [
      {
        heading: "Where 'big' Unicode comes from",
        body: "Full-width forms (ＡＢＣ) were originally designed for use alongside East Asian scripts, where they take up the same em-square as a CJK character. Pasted into a Latin-only context, they look comically large.",
      },
    ],
    faq: [
      {
        q: "Will big text mess up message layouts?",
        a: "It might wrap awkwardly on narrow screens. Test before posting anywhere mobile-first.",
      },
    ],
  },
  {
    slug: "bold-text-generator",
    keyword: "bold text generator",
    title: "Bold Text Generator – Unicode Bold Copy & Paste",
    description:
      "Generate bold text using Unicode. Bold serif, bold sans-serif, bold italic — all copy-paste ready.",
    h1: "Bold Text Generator",
    intro:
      "Whatever bold you need — serif, sans, italic — generated as Unicode you can paste anywhere.",
    styles: ["bold-serif", "bold-italic-serif", "sans-bold", "sans-bold-italic", "fraktur-bold", "script-bold"],
    about: [
      {
        heading: "Bold serif vs. bold sans",
        body: "Serif bold reads as traditional and editorial. Sans-serif bold reads as modern and direct. Pick based on the tone you want — most social platforms render both well.",
      },
    ],
    faq: [
      {
        q: "Do screen readers handle Unicode bold?",
        a: "Inconsistently. Some announce each character with its full Unicode name ('mathematical bold capital A'), which is unhelpful. Keep important info in plain text.",
      },
    ],
  },
  {
    slug: "small-caps",
    keyword: "small cap font",
    title: "Small Caps Font Generator – Copy & Paste Small Capitals",
    description:
      "Convert text to small caps using Unicode. Perfect for clean, typographic bios and captions.",
    h1: "Small Caps Generator",
    intro:
      "ʟᴏᴡᴇʀᴄᴀsᴇ ʟᴇᴛᴛᴇʀs sʜᴀᴘᴇᴅ ʟɪᴋᴇ ᴄᴀᴘɪᴛᴀʟs. Type below to convert.",
    styles: ["small-caps", "small-caps-spaced", "small-caps-underline", "fraktur", "sans-bold", "italic-serif", "double-struck"],
    about: [
      {
        heading: "Why small caps look 'designy'",
        body: "Real small caps are a font feature where lowercase letters are designed to match the weight and proportions of capitals. Unicode small caps reuse phonetic alphabet characters that approximate the same effect.",
      },
    ],
    faq: [
      {
        q: "Why is the 'q' and 'x' a bit off?",
        a: "Unicode doesn't include phonetic small-cap forms for every letter — q and x fall back to similar-looking characters.",
      },
    ],
  },
  {
    slug: "zalgo",
    keyword: "zalgo text",
    title: "Zalgo Text Generator – Glitched Combining Diacritics",
    description:
      "Generate zalgo text using stacked combining diacritics. Copy and paste glitched, corrupted, eldritch text.",
    h1: "Zalgo Text Generator",
    intro:
      "The classic. Combining marks stacked above, through, and below your text — adjustable intensity, copy-paste ready.",
    styles: ["zalgo-soft", "zalgo", "zalgo-extreme"],
    about: [
      {
        heading: "Where zalgo came from",
        body: "Zalgo started as a creepypasta character in the late 2000s. The visual style — chaotic stacked diacritics — became shorthand for 'something is wrong here' across image macros, ARGs, and horror writing.",
      },
    ],
    faq: [
      {
        q: "Can I undo zalgo on text I received?",
        a: "Yes — strip combining characters (Unicode category Mn) and you're back to the original string.",
      },
    ],
  },
  {
    slug: "tiktok",
    keyword: "tiktok font generator",
    title: "TikTok Font Generator – Fonts for Bio, Username, Captions",
    description:
      "Stylish fonts for TikTok bios, usernames, and video captions. Cursive, bold, gothic, and aesthetic — copy and paste instantly.",
    h1: "TikTok Font Generator",
    intro:
      "Pick a font, copy it, paste it into your TikTok bio, display name, or caption. Works on iOS, Android, and tiktok.com.",
    styles: ["script", "fraktur", "bold-serif", "italic-serif", "small-caps", "bubble", "squared", "double-struck"],
    about: [
      {
        heading: "Which fonts render best on TikTok?",
        body: "Cursive script and small-caps usually look the cleanest on the For You feed because they stay readable at small caption sizes. Heavily decorated styles can clip on shorter videos — preview before posting.",
      },
      {
        heading: "Username vs. caption restrictions",
        body: "TikTok captions accept the full Unicode range. The @-handle is restricted to a safe alphanumeric set; the display name above your handle accepts most styled letters but a few exotic ones get filtered.",
      },
    ],
    faq: [
      {
        q: "Will a stylized name hurt my discoverability?",
        a: "TikTok's search indexes plain text, so styled display names are slightly harder to find. Most creators put the styled name on the profile and keep their @-handle in plain text — best of both worlds.",
      },
      {
        q: "Can I use these in TikTok comments?",
        a: "Yes — comments accept Unicode the same way captions do.",
      },
    ],
  },
  {
    slug: "ig-font",
    keyword: "ig font",
    title: "IG Font Generator – Instagram Fonts Copy & Paste",
    description:
      "Quick Instagram fonts: cursive, bold, gothic, aesthetic, and small caps. Generated from your text — copy and paste into bio, captions, or comments.",
    h1: "IG Font Generator",
    intro:
      "The fastest way to stylize your Instagram text. Type once, pick a style, paste into your bio.",
    styles: ["script", "script-bold", "fraktur", "bold-serif", "italic-serif", "small-caps", "bubble", "double-struck", "monospace"],
    about: [
      {
        heading: "Where styled fonts fit on Instagram",
        body: "Bios are the safest place — Instagram displays the full Unicode range, and styled bios catch the eye on profile previews. Captions work too; usernames are stricter and filter unusual characters.",
      },
    ],
    faq: [
      {
        q: "Does Instagram count styled letters toward the bio character limit?",
        a: "Yes. Some styles use surrogate pairs that count as two units, so you may fit fewer characters than the plain text equivalent.",
      },
      {
        q: "Why does the style look different on my friend's phone?",
        a: "Different devices ship different fonts. Older phones may show fallbacks or empty boxes for rarer Unicode ranges.",
      },
    ],
  },
  {
    slug: "underline",
    keyword: "underline copy paste",
    title: "Underline Text Generator – Copy & Paste Underlined Text",
    description:
      "Underline text using combining Unicode characters. Single, double, and slashed variants — copy and paste into any app.",
    h1: "Underline Text Generator",
    intro:
      "Add an underline that survives copy-paste. Each character gets an invisible combining mark, so the result is still plain text.",
    styles: ["underline", "double-underline", "strikethrough", "slash-through"],
    about: [
      {
        heading: "How underline works without formatting",
        body: "Most apps don't let you underline text directly. The trick is the 'combining low line' character (U+0332), which the renderer draws underneath the previous letter. Stack two of them for a double underline.",
      },
      {
        heading: "When to use it",
        body: "Useful for emphasis in chats, captions, and bios where rich text isn't available. Skip it in headlines that need to look polished — combining-mark underlines render slightly inconsistent across fonts.",
      },
    ],
    faq: [
      {
        q: "Will the underline copy as a real underline in Word or Google Docs?",
        a: "No — it pastes as the combining characters. To get a real underline in a word processor, use the app's underline button instead.",
      },
      {
        q: "Why does the underline sometimes look broken between letters?",
        a: "Each character has its own underline mark, so spacing between glyphs leaves tiny gaps. It's a Unicode limitation, not a bug in the generator.",
      },
    ],
  },
  {
    slug: "stylish",
    keyword: "stylish text",
    title: "Stylish Text Generator – Aesthetic Fonts Copy & Paste",
    description:
      "Stylish text in dozens of Unicode fonts: cursive, gothic, bold, outline, small caps. Generated instantly and copy-paste ready.",
    h1: "Stylish Text Generator",
    intro:
      "A wall of styles for whatever look you're going for — clean, bold, vintage, or chaotic. Pick one and paste it anywhere.",
    styles: ["script", "script-bold", "fraktur", "fraktur-bold", "bold-serif", "italic-serif", "bold-italic-serif", "double-struck", "small-caps", "bubble", "squared", "fullwidth", "outline-gothic", "decorative-gothic", "royal-gothic", "alternating", "cursive-underline", "bold-spaced", "italic-spaced", "small-caps-spaced"],
    about: [
      {
        heading: "Picking a style that fits the vibe",
        body: "Script and italic styles read as warm. Bold and double-struck read as confident. Fraktur reads as formal or vintage. Bubble and squared read as playful. Match the style to the message, not just to what looks the coolest.",
      },
    ],
    faq: [
      {
        q: "Can I combine multiple styles in one message?",
        a: "Yes — paste different styles into different parts of your text. Each Unicode chunk is independent.",
      },
    ],
  },
  {
    slug: "reverse",
    keyword: "backwards b copy paste",
    title: "Reverse Text Generator – Backwards Text Copy & Paste",
    description:
      "Reverse and mirror text using Unicode. Includes the famous backwards-B for stylized usernames and ironic captions.",
    h1: "Reverse Text Generator",
    intro:
      "Flip your text backwards — or just grab a backwards B. Reverse mode swaps character order; the mirror styles use Unicode look-alikes.",
    styles: ["reverse", "upside-down"],
    about: [
      {
        heading: "Reverse vs. upside-down vs. mirrored",
        body: "Reverse simply flips the character order (so 'hello' becomes 'olleh'). Upside-down also rotates each letter 180° using Unicode counterparts. A true mirror image (left-right flip) isn't possible in plain text — most letters don't have a horizontally-flipped Unicode equivalent.",
      },
      {
        heading: "Where the backwards B came from",
        body: "Pop culture made the backwards B a recognizable visual — it shows up in usernames and album art constantly. The character we use here is U+0411, the Cyrillic capital Be (Б), which sits just left of its Latin twin in any font that covers Cyrillic.",
      },
    ],
    faq: [
      {
        q: "Does reversed text break right-to-left languages?",
        a: "It can. Mixing reversed Latin with naturally right-to-left scripts (Arabic, Hebrew) confuses the bidirectional rendering algorithm. Use it for novelty, not real bilingual content.",
      },
    ],
  },
  {
    slug: "japanese",
    keyword: "japanese font",
    title: "Japanese Font Generator – Copy & Paste Japanese Style Text",
    description:
      "Generate Japanese-style Unicode text for bios, captions, and usernames. Wide, spaced characters that evoke East Asian typography — no Japanese keyboard needed.",
    h1: "Japanese Font Generator",
    intro:
      "Type in English and get a wide, East Asian-inspired style using fullwidth Unicode characters. Copy and paste anywhere plain text works.",
    styles: ["japanese-style", "fullwidth", "fullwidth-underline", "squared", "small-caps-spaced"],
    about: [
      {
        heading: "How this works without actual Japanese characters",
        body: "The output isn't Japanese — it's fullwidth Latin text using the Unicode Halfwidth and Fullwidth Forms block (U+FF01–U+FF60). Each character takes the same horizontal space as a CJK glyph, giving the wide, spaced aesthetic associated with East Asian typography.",
      },
      {
        heading: "Where it works",
        body: "Social bios, username handles, captions, and overlay text on graphics all render it cleanly. Works wherever plain text is accepted.",
      },
    ],
    faq: [
      {
        q: "Will Japanese speakers see this as Japanese?",
        a: "No — these are Latin letters in fullwidth form, not Japanese characters. Japanese readers will recognize the Latin alphabet, just wider.",
      },
      {
        q: "Why do some platforms strip the wide characters?",
        a: "A few apps normalize Unicode on input, collapsing fullwidth letters to standard ASCII. Bios usually survive; username validation fields sometimes don't.",
      },
    ],
  },
  {
    slug: "mirror",
    keyword: "mirror text generator",
    title: "Mirror Text Generator – Flipped Text Copy & Paste",
    description:
      "Flip and mirror your text using Unicode. Upside-down, reversed, and mirrored styles that copy and paste as plain text into any app.",
    h1: "Mirror Text Generator",
    intro:
      "Flip your text left-right, upside-down, or both. Each variant is plain Unicode — copy it and paste it anywhere.",
    styles: ["mirrored", "reverse", "upside-down"],
    about: [
      {
        heading: "What 'mirrored' actually means in Unicode",
        body: "A true mirror image would require horizontally-flipped glyphs, which Unicode doesn't provide for most letters. Instead, mirrored text uses look-alike characters — letters from Cyrillic, IPA, and other blocks that visually resemble flipped Latin forms.",
      },
    ],
    faq: [
      {
        q: "Why don't all letters flip perfectly?",
        a: "Unicode doesn't have mirror-image versions of every Latin letter. Where a convincing look-alike exists, we use it; where it doesn't, the closest available character fills in.",
      },
      {
        q: "Is this different from upside-down text?",
        a: "Yes — upside-down rotates each letter 180° using Unicode counterparts and reverses the word order. Mirrored flips left-right. They can be combined.",
      },
    ],
  },
  {
    slug: "mocking-text",
    keyword: "spongebob text generator",
    title: "Mocking Text Generator – SpongeBob Font Copy & Paste",
    description:
      "Generate the SpongeBob mocking meme font: alternating caps that reads as sarcastic and dismissive. Copy and paste as plain text anywhere.",
    h1: "Mocking Text Generator",
    intro:
      "TyPe AnYtHiNg AnD gEt ThE sPoNgEbOb SaRcAsM fOrMaT. Copy and paste it wherever the bit lands.",
    styles: ["alternating", "weird"],
    defaultText: "this is fine",
    about: [
      {
        heading: "Where the mocking format came from",
        body: "The alternating-caps style took off in 2017 when a SpongeBob screenshot — the one where Patrick is held like a baby, mockingly repeating words — went viral as a reaction image format. The alternating case became the visual shorthand for sarcastic mimicry.",
      },
    ],
    faq: [
      {
        q: "Should the pattern start with uppercase or lowercase?",
        a: "Either works — the key is the alternation. Most generators start with lowercase, which is what this one does.",
      },
    ],
  },
  {
    slug: "square",
    keyword: "box font",
    title: "Square Font Generator – Box Text Copy & Paste",
    description:
      "Generate square and box-style Unicode text. Squared letters and fullwidth styles for usernames, bios, and captions — copy and paste anywhere.",
    h1: "Square Font Generator",
    intro:
      "Turn your text into square, boxed-in characters. Each letter gets its own frame — copy the result and paste it anywhere plain text works.",
    styles: ["squared", "squared-spaced", "bubble", "bubble-filled", "fullwidth"],
    about: [
      {
        heading: "How squared text works",
        body: "The squared style wraps each letter in a Unicode enclosed-alphanumeric box. These characters sit in the Enclosed Alphanumeric Supplement block and render as bold boxed letters on most modern devices.",
      },
    ],
    faq: [
      {
        q: "Why are some squared letters missing?",
        a: "Unicode's enclosed alphanumeric blocks cover A–Z and 0–9. Punctuation and characters outside that range fall through unchanged.",
      },
      {
        q: "What's the difference between squared and bubble?",
        a: "Squared encloses letters in angular boxes. Bubble rounds them into circles. Both use Unicode enclosed-alphanumeric characters.",
      },
    ],
  },
  {
    slug: "typewriter",
    keyword: "typewriter font generator",
    title: "Typewriter Font Generator – Monospace Text Copy & Paste",
    description:
      "Generate typewriter-style monospace Unicode text for bios, captions, and messages. Classic fixed-width look without any app or font file.",
    h1: "Typewriter Font Generator",
    intro:
      "The classic fixed-width look — every character the same width, like text hammered onto paper. Type, copy, paste anywhere.",
    styles: ["monospace"],
    about: [
      {
        heading: "Why monospace looks like a typewriter",
        body: "Typewriters couldn't vary character spacing, so every letter took the same horizontal slot. The Unicode Mathematical Monospace block replicates that look using fixed-width letterforms mapped one-to-one from your input.",
      },
    ],
    faq: [
      {
        q: "Is this the same as a code block?",
        a: "Visually similar, different mechanism. A code block is a formatting wrapper that tells the app to render in a monospace font. This is actual monospace Unicode characters, so it works in plain-text fields that don't support formatting.",
      },
      {
        q: "Can I use this in Discord to look like a code block?",
        a: "You can, though Discord's backtick code blocks render cleaner. Use the monospace Unicode style in fields that don't support markdown, like bios.",
      },
    ],
  },
  {
    slug: "leet",
    keyword: "leet speak translator",
    title: "Leet Speak Generator – 1337 Text Translator Copy & Paste",
    description:
      "Translate text into leet speak (1337). Classic number-and-symbol substitutions from early internet culture — copy and paste anywhere.",
    h1: "Leet Speak Generator",
    intro:
      "Turn normal text into 1337 5P34K. Classic letter-to-number substitutions straight from early hacker and gaming culture.",
    styles: ["leet", "gothic-glitch", "monospace"],
    about: [
      {
        heading: "What is leet speak?",
        body: "Leet (from 'elite') is an informal writing system that substitutes numbers and symbols for letters — A becomes 4, E becomes 3, and so on. It originated in early online communities and BBS boards in the 1980s as a way to slip past keyword filters, then became a marker of internet identity through the 1990s gaming scene.",
      },
    ],
    faq: [
      {
        q: "Is leet speak still used?",
        a: "Mostly ironically. It's a recognizable shorthand for old-school hacker or gamer identity, and it still appears in usernames, memes, and nostalgia content.",
      },
      {
        q: "Why doesn't every letter get substituted?",
        a: "Some letters don't have a widely recognized leet equivalent. Those pass through unchanged so the result stays readable.",
      },
    ],
  },
  {
    slug: "satanic",
    keyword: "demon font",
    title: "Satanic Font Generator – Demon Text Copy & Paste",
    description:
      "Generate dark, demonic, and cursed text with gothic and glitch effects. Zalgo corruption, gothic scripts, and cursed styles for usernames, bios, and horror aesthetics.",
    h1: "Satanic Font Generator",
    intro:
      "Dark, corrupted, and gothic text styles — from subtle gothic script to full zalgo chaos. Copy and paste into any platform that accepts plain text.",
    styles: ["cursed-gothic", "dark-gothic", "zalgo-extreme", "zalgo", "gothic-glitch", "fraktur-bold"],
    about: [
      {
        heading: "How the corrupted text effect works",
        body: "The glitchy, overflowing look comes from Unicode combining diacritics — accent marks and modifiers that stack above and below a base character. Zalgo stacks dozens of these on each letter, which most renderers draw outside the normal line bounds, creating the distorted overflow effect.",
      },
    ],
    faq: [
      {
        q: "Will the zalgo text display correctly everywhere?",
        a: "Most modern apps handle it, but some clip the overflow or refuse to save the string. If a platform rejects it, try a less-corrupted variant like Cursed Gothic instead.",
      },
    ],
  },
  {
    slug: "freaky",
    keyword: "freaky font",
    title: "Freaky Font Generator – Weird Glitch Text Copy & Paste",
    description:
      "Generate freaky, glitchy, and distorted Unicode text. Zalgo effects, weird characters, and corrupted styles for a chaotic, unhinged aesthetic.",
    h1: "Freaky Font Generator",
    intro:
      "Glitchy, chaotic, and hard to read on purpose — pick a freaky style, copy it, and drop it anywhere plain text is accepted.",
    styles: ["zalgo-soft", "zalgo", "zalgo-extreme", "weird", "gothic-glitch", "cursed-gothic"],
    about: [
      {
        heading: "Why freaky text looks the way it does",
        body: "The distorted look combines two techniques: unusual Unicode characters that look broken or alien, and combining diacritics that overflow above and below the text line. Cranked up, the result reads as genuinely unhinged — which is exactly what the aesthetic is for.",
      },
    ],
    faq: [
      {
        q: "What's the difference between freaky and zalgo?",
        a: "Zalgo is specifically the combining-diacritic overflow effect. Freaky is broader — it includes zalgo but also weird Unicode substitutions, gothic glitch, and other styles that read as distorted or off.",
      },
    ],
  },
  {
    slug: "blackletter",
    keyword: "blackletter font generator",
    title: "Blackletter Font Generator – Copy & Paste Blackletter Text",
    description:
      "Convert plain text into blackletter, textura, and fraktur fonts. Free Unicode blackletter text you can copy and paste into Instagram, Discord, bios, and tattoo mockups.",
    h1: "Blackletter Font Generator",
    intro:
      "Turn anything you type into dense, angular blackletter lettering. Copy a variant and paste it into your bio, captions, usernames, or tattoo mockups — no font file needed.",
    styles: ["blackletter", "blackletter-bold", "fraktur", "fraktur-bold", "gothic-classic", "gothic-bold", "german-gothic", "church-style", "royal-gothic", "medieval-script", "decorative-gothic", "old-english-spaced"],
    about: [
      {
        heading: "What is blackletter?",
        body: "Blackletter is the typographic name for the dense, angular scripts medieval scribes used across Europe and early printers cast as the first metal type. The styles here approximate the most recognizable blackletter forms — textura, fraktur, schwabacher — using Unicode characters, so the result stays as plain, copyable text.",
      },
      {
        heading: "Blackletter vs. gothic vs. Old English",
        body: "All three name the same family. Blackletter is the typographer's term, gothic is the everyday word, and Old English is what most tattoo artists and sign shops call it — stylistic siblings, not different writing systems.",
      },
    ],
    faq: [
      {
        q: "Will blackletter text work in my Instagram or Discord name?",
        a: "Bios and messages accept the full Unicode range. Username fields are stricter — if a heavily decorated variant won't save, pick one closer to standard letters like Bold or Small Caps.",
      },
      {
        q: "Can I use blackletter text for a tattoo?",
        a: "For mockups, yes — preview your phrase in every style. For the actual tattoo, your artist needs a real vector font so the linework stays sharp.",
      },
    ],
  },
  {
    slug: "fraktur",
    keyword: "fraktur font generator",
    title: "Fraktur Font Generator – Copy & Paste Fraktur Text",
    description:
      "Convert plain text into Fraktur and blackletter fonts. Free Unicode Fraktur text you can copy and paste into Instagram, Discord, bios, usernames, and more.",
    h1: "Fraktur Font Generator",
    intro:
      "Turn anything you type into Fraktur — the ornate German blackletter style. Copy a variant and paste it into your bio, captions, usernames, or messages.",
    styles: ["fraktur", "fraktur-bold", "blackletter", "blackletter-bold", "gothic-classic", "gothic-bold", "german-gothic", "church-style", "royal-gothic", "decorative-gothic", "medieval-script", "old-english-spaced"],
    about: [
      {
        heading: "What is Fraktur?",
        body: "Fraktur is a subgenre of blackletter that became the dominant print typeface in German-speaking Europe for centuries. Its name comes from the 'fractured' look of the strokes. The Unicode Mathematical Alphanumeric Symbols block includes a Fraktur alphabet (U+1D504–U+1D537), which is exactly what this generator outputs.",
      },
      {
        heading: "Fraktur vs. other blackletter",
        body: "Fraktur is one branch of the broader blackletter family, alongside textura, rotunda, and schwabacher. They differ in how strokes break and curve. The styles here approximate those subgenres so you can copy the exact look you want.",
      },
    ],
    faq: [
      {
        q: "Is the Fraktur output a real font?",
        a: "No — it's Unicode text. Each letter maps to a Fraktur codepoint that looks styled, so it pastes anywhere plain text is accepted without installing a font.",
      },
      {
        q: "Where can I use Fraktur text?",
        a: "Bios, captions, and messages on Instagram, TikTok, Discord, X, and most apps. Username fields sometimes filter unusual characters — try a different variant if one won't save.",
      },
    ],
  },
  {
    slug: "medieval",
    keyword: "medieval font generator",
    title: "Medieval Font Generator – Copy & Paste Medieval Text",
    description:
      "Convert plain text into medieval, gothic, and blackletter fonts. Free Unicode medieval text you can copy and paste into Instagram, Discord, bios, and game profiles.",
    h1: "Medieval Font Generator",
    intro:
      "Turn anything you type into medieval gothic and script lettering. Copy a variant and paste it into your bio, captions, usernames, or fantasy game profiles.",
    styles: ["medieval-script", "gothic-classic", "gothic-bold", "blackletter", "fraktur", "church-style", "royal-gothic", "german-gothic", "decorative-gothic", "old-english-spaced", "script", "small-caps"],
    about: [
      {
        heading: "What makes a font look medieval?",
        body: "The medieval look comes from blackletter — the dense, angular scripts scribes used in manuscripts between the 12th and 17th centuries. These Unicode styles approximate those forms, so anything you type reads as period-accurate without an installed font.",
      },
      {
        heading: "Great for fantasy and games",
        body: "Medieval lettering suits RPG names, guild tags, fantasy usernames, D&D character sheets, and wedding or event invitations. Copy a style and drop it wherever plain text is accepted.",
      },
    ],
    faq: [
      {
        q: "Will medieval text work in game usernames?",
        a: "Steam, Xbox, and many game clients accept most blackletter Unicode in display names. Stricter username fields may filter exotic characters — pick a variant closer to standard letters if one won't save.",
      },
      {
        q: "Is this the same as Old English?",
        a: "Effectively, yes. Medieval, gothic, blackletter, and Old English all describe the same broad family of scripts.",
      },
    ],
  },
  {
    slug: "old-english-tattoo",
    keyword: "old english tattoo font",
    title: "Old English Tattoo Font – Blackletter Tattoo Lettering",
    description:
      "Preview Old English tattoo lettering in dozens of blackletter and gothic styles. Free Unicode tattoo fonts to copy, paste, and mock up your design before you book.",
    h1: "Old English Tattoo Font Generator",
    intro:
      "Mock up a name or quote in Old English tattoo lettering before you book. Browse blackletter and gothic styles, copy your favorite, and share it with your artist.",
    styles: ["tattoo-gothic", "blackletter", "blackletter-bold", "gothic-bold", "fraktur", "royal-gothic", "dark-gothic", "church-style", "medieval-script", "decorative-gothic", "band-logo", "old-english-spaced"],
    about: [
      {
        heading: "Planning an Old English tattoo",
        body: "Old English blackletter is the classic tattoo script — used for names, memorial dates, and quotes. Type your phrase and preview it instantly across blackletter and gothic variants, far faster than installing downloaded fonts. Screenshot the look you want to show your artist.",
      },
      {
        heading: "From mockup to real ink",
        body: "These are Unicode characters for previewing, not print-ready type. For the actual tattoo, your artist needs a true vector font (TTF/OTF) so the linework stays crisp at any size. Use the generator to choose the style; let the artist handle the stencil.",
      },
    ],
    faq: [
      {
        q: "Which Old English style is most popular for tattoos?",
        a: "Classic blackletter and gothic scripts are the most requested for names and memorial pieces. Try a few variants and see which suits the placement and length of your text.",
      },
      {
        q: "Can I use these characters as a tattoo stencil?",
        a: "They're meant for previewing the style, not as a stencil. Hand the chosen look to your artist so they can set it in a proper vector font for clean linework.",
      },
    ],
  },
  {
    slug: "gothic-letters",
    keyword: "gothic letters generator",
    title: "Gothic Letters Generator – Copy & Paste Gothic Letters A–Z",
    description:
      "Generate gothic letters A–Z in blackletter, fraktur, and medieval styles. Free Unicode gothic letters you can copy and paste into Instagram, Discord, and bios.",
    h1: "Gothic Letters Generator",
    intro:
      "Turn any word into gothic letters — dark, angular blackletter A–Z. Copy a variant and paste it into your bio, captions, usernames, or messages.",
    styles: ["gothic-classic", "gothic-bold", "blackletter", "blackletter-bold", "fraktur", "fraktur-bold", "outline-gothic", "decorative-gothic", "royal-gothic", "german-gothic", "medieval-script", "tattoo-gothic"],
    about: [
      {
        heading: "Gothic letters, character by character",
        body: "Each gothic letter you see is a separate Unicode codepoint that looks like a styled A–Z. Because they're real characters and not an installed font, the letters survive copy-paste into apps that don't let you change fonts.",
      },
      {
        heading: "Single letters or whole words",
        body: "Use the generator for a full phrase, or copy just one gothic capital for a monogram, initial, or logo mark. The styles cover the most recognizable blackletter and fraktur forms.",
      },
    ],
    faq: [
      {
        q: "Can I copy a single gothic letter?",
        a: "Yes — generate your text, then select and copy just the letter you need. Each gothic character is independent.",
      },
      {
        q: "Do gothic letters work everywhere?",
        a: "Bios, captions, and messages accept the full range. Some username fields filter unusual characters — try a variant closer to standard letters if one won't save.",
      },
    ],
  },
  {
    slug: "old-english-copy-paste",
    keyword: "old english font copy and paste",
    title: "Old English Font Copy and Paste – Gothic Text Generator",
    description:
      "Copy and paste Old English fonts instantly. Free Unicode Old English, blackletter, and gothic text that pastes into Instagram, TikTok, Discord, bios, and usernames.",
    h1: "Old English Font Copy and Paste",
    intro:
      "Type your text, tap a style, and copy Old English lettering in one click. Paste it straight into Instagram, TikTok, Discord, bios, usernames, or anywhere plain text is accepted.",
    styles: ["gothic-classic", "gothic-bold", "blackletter", "fraktur", "fraktur-bold", "old-english-spaced", "german-gothic", "church-style", "medieval-script", "royal-gothic", "decorative-gothic", "tattoo-gothic"],
    about: [
      {
        heading: "How copy and paste works here",
        body: "The generator swaps each letter for an Old English Unicode character, so the result is plain text — not an installed font. That's why you can copy it from this page and paste it into almost any app, even ones that don't let you change fonts.",
      },
      {
        heading: "Where the pasted text works",
        body: "Instagram bios and captions, TikTok captions, Discord messages and nicknames, YouTube titles, X, WhatsApp, and most messaging apps. Username fields are the only place that sometimes strips unusual characters.",
      },
    ],
    faq: [
      {
        q: "How do I copy the Old English text?",
        a: "Tap any style row above to copy it instantly, then paste wherever you need it. No selecting or right-clicking required.",
      },
      {
        q: "Why does pasted text sometimes show as boxes?",
        a: "The receiving device doesn't have a font covering those Unicode codepoints. Modern iOS and Android render most ranges; some older systems fall back to boxes.",
      },
    ],
  },
  {
    slug: "blackletter-copy-paste",
    keyword: "blackletter font copy and paste",
    title: "Blackletter Font Copy and Paste – Gothic Text Generator",
    description:
      "Copy and paste blackletter fonts instantly. Free Unicode blackletter, fraktur, and gothic text that pastes into Instagram, Discord, bios, usernames, and tattoo mockups.",
    h1: "Blackletter Font Copy and Paste",
    intro:
      "Type your text, tap a style, and copy blackletter lettering in one click. Paste it straight into Instagram, Discord, bios, usernames, or tattoo mockups.",
    styles: ["blackletter", "blackletter-bold", "fraktur", "fraktur-bold", "gothic-classic", "gothic-bold", "german-gothic", "church-style", "royal-gothic", "medieval-script", "decorative-gothic", "old-english-spaced"],
    about: [
      {
        heading: "Copy blackletter text in one tap",
        body: "Each blackletter character is a Unicode codepoint that looks like a styled letter, so the output is plain text. Tap a row to copy it and paste it into nearly any app — no font file or sign-up needed.",
      },
      {
        heading: "Where pasted blackletter works",
        body: "Instagram and TikTok bios and captions, Discord messages and nicknames, X, YouTube titles, and most messaging apps. Username fields sometimes filter unusual characters — try a different variant if one won't save.",
      },
    ],
    faq: [
      {
        q: "Is the copied blackletter a real font?",
        a: "No — it's Unicode text styled to look like blackletter. That's why it pastes anywhere without installing anything.",
      },
      {
        q: "Can I use copied blackletter for a tattoo mockup?",
        a: "Yes — copy your phrase to preview the style and share it with your artist. For the real tattoo, the artist will set it in a proper vector font.",
      },
    ],
  },
  {
    slug: "sweaty-fortnite",
    keyword: "sweaty fortnite fonts",
    title: "Sweaty Fortnite Fonts – Tryhard Name Generator (Copy & Paste)",
    description:
      "Make a sweaty Fortnite name with tryhard Unicode fonts and symbols. Copy and paste gothic, bold, and decorative styles straight into your Epic display name.",
    h1: "Sweaty Fortnite Font Generator",
    intro:
      "Build a sweaty, tryhard Fortnite name in seconds. Pick a bold, gothic, or symbol-heavy variant, copy it, and paste it into your Epic display name or clan tag.",
    styles: ["gothic-bold", "fraktur", "blackletter", "sans-bold", "monospace", "small-caps", "double-struck", "squared", "fullwidth", "tattoo-gothic", "outline-gothic", "fraktur-bold"],
    about: [
      {
        heading: "What makes a Fortnite name look 'sweaty'?",
        body: "Sweaty (or tryhard) names lean on styled Unicode letters, symbols, and tight spacing to read as competitive and intimidating. Bold gothic and fullwidth styles are the most popular because they stay legible while still looking different from a default name.",
      },
      {
        heading: "Where these names work",
        body: "Epic Games display names accept a wide Unicode range, so the same styles work in Fortnite, clan tags, and most gaming profiles like Steam, Xbox, and PSN. Copy a variant and paste it wherever you set your name.",
      },
    ],
    faq: [
      {
        q: "Will Fortnite accept these sweaty fonts?",
        a: "Most styles save fine in Epic display names, but Epic filters some ranges and blocks duplicate names. If a variant won't save, try one closer to standard letters or drop the heaviest symbols.",
      },
      {
        q: "Can I copy and paste these into my Epic name?",
        a: "Yes — tap a style to copy it, then paste it into Epic account settings → display name. It's plain Unicode text, so nothing needs installing.",
      },
    ],
  },
  {
    slug: "small-gothic",
    keyword: "small gothic font generator",
    title: "Small Gothic Font Generator – Tiny Gothic Text Copy & Paste",
    description:
      "Generate small gothic text — compact gothic and small-caps Unicode letters you can copy and paste into bios, usernames, and Discord profiles.",
    h1: "Small Gothic Font Generator",
    intro:
      "Turn your text into small, compact gothic lettering. Copy a variant and paste it into your bio, username, or Discord profile for a clean, understated look.",
    styles: ["small-gothic", "small-caps", "small-caps-spaced", "tiny-spaced", "gothic-classic", "fraktur", "superscript", "monospace"],
    about: [
      {
        heading: "What is small gothic text?",
        body: "Small gothic combines two ideas: the angular, blackletter-inspired gothic look and the compact, shrunken feel of small-caps and tiny Unicode letters. The result is gothic styling that stays subtle instead of dominating a bio or name.",
      },
      {
        heading: "Where small gothic fits best",
        body: "It's ideal for a secondary line in a bio, a tidy Discord display name, or a username where you want gothic character without a heavy, hard-to-read string. The contrast between small and normal text is the whole effect.",
      },
    ],
    faq: [
      {
        q: "Is small gothic readable on every device?",
        a: "The small-caps and gothic sets are well supported on modern phones. A few of the tiniest characters can show boxes on older systems — preview before posting and fall back to small caps if needed.",
      },
      {
        q: "Can I use it in a username?",
        a: "Bios and display names accept it freely. Strict username fields may filter the rarer characters, so choose a simpler variant if one won't save.",
      },
    ],
  },
  {
    slug: "old-english-ig",
    keyword: "old english font for ig",
    title: "Old English Font for IG – Instagram Gothic Text Copy & Paste",
    description:
      "Old English font for Instagram. Copy and paste blackletter and gothic Unicode text into your IG bio, captions, and display name in seconds.",
    h1: "Old English Font for Instagram",
    intro:
      "Add Old English blackletter text to your Instagram bio, captions, or display name. Type your text, copy a gothic style, and paste it straight into IG — no app needed.",
    styles: ["gothic-classic", "gothic-bold", "blackletter", "fraktur", "fraktur-bold", "old-english-spaced", "german-gothic", "church-style", "medieval-script", "royal-gothic", "decorative-gothic", "tattoo-gothic"],
    about: [
      {
        heading: "How to use Old English text on Instagram",
        body: "Instagram has no font picker, so the trick is Unicode: type your text here, tap a gothic style to copy it, then paste it into your IG bio, caption, or display name. Because it's plain text, it renders the same on iOS, Android, and the web.",
      },
      {
        heading: "Which IG fields accept it",
        body: "Bios and captions take the full range. Your display name usually works too. Your @username is plain Latin only, so keep that simple and put the Old English styling in your display name and bio.",
      },
    ],
    faq: [
      {
        q: "Why does my Old English IG bio show as boxes for some people?",
        a: "Their device lacks a font for those Unicode codepoints. Modern phones render them fine; some older devices fall back to boxes. Bold and small-caps variants have the widest coverage.",
      },
      {
        q: "Will styled text hurt my Instagram search visibility?",
        a: "Instagram indexes the underlying characters, not the style, so fully styled text is hard to find via search. Keep important keywords in plain text and use Old English for personality.",
      },
    ],
  },
  {
    slug: "font-changer",
    keyword: "font changer",
    title: "Font Changer – Change Your Text Font Online (Copy & Paste)",
    description:
      "Free online font changer. Type your text and instantly change it into dozens of Unicode font styles you can copy and paste into Instagram, Discord, and anywhere.",
    h1: "Font Changer",
    intro:
      "Change your text into a different font in seconds. Type once, browse dozens of styles, copy the one you like, and paste it anywhere — no app, no sign-up, no font files.",
    styles: ALL_VARIETY,
    defaultText: "Change my font",
    about: [
      {
        heading: "How an online font changer works",
        body: "This isn't changing the font installed on your device — it swaps each letter for a Unicode character that already looks styled. Because the output is plain text, the new look travels with it when you copy and paste, even into apps with no font settings of their own.",
      },
      {
        heading: "Where the changed text works",
        body: "Instagram bios and captions, TikTok, Discord, Facebook, X, YouTube, WhatsApp, and most messaging apps. Username fields are the main exception — they sometimes strip unusual characters, so pick a simpler style if one won't save.",
      },
    ],
    faq: [
      {
        q: "Is the font changer free?",
        a: "Yes — no sign-up, no watermark, and no limits. Everything runs in your browser.",
      },
      {
        q: "Does it actually change the font?",
        a: "It changes how your text looks by substituting styled Unicode characters. Your device's installed fonts don't change, which is exactly why the result pastes anywhere.",
      },
    ],
  },
  {
    slug: "font-converter",
    keyword: "font converter",
    title: "Font Converter – Convert Text to Stylish Fonts (Copy & Paste)",
    description:
      "Free font converter. Convert plain text into bold, italic, cursive, gothic, and dozens of other Unicode fonts you can copy and paste into any app.",
    h1: "Font Converter",
    intro:
      "Convert plain text into a stylish font instantly. Type your text, choose from dozens of converted styles, copy your favorite, and paste it wherever you need it.",
    styles: ALL_VARIETY,
    defaultText: "Convert my text",
    about: [
      {
        heading: "What the converter actually does",
        body: "It converts each letter you type into a matching Unicode character that looks bold, italic, cursive, gothic, or otherwise styled. The conversion produces plain text, so the styled result can be pasted into apps that don't let you change fonts.",
      },
      {
        heading: "Converting for different apps",
        body: "Most converted styles work everywhere text is accepted. For maximum compatibility — especially in usernames or on older devices — bold, italic, and small caps convert most reliably. Decorative styles are best kept for bios and captions.",
      },
    ],
    faq: [
      {
        q: "Can I convert text back to normal?",
        a: "Yes — just retype or delete the styled version. Since it's plain Unicode text, there's nothing installed to undo; the normal alphabet is always one click away.",
      },
      {
        q: "Will the converted font show on every device?",
        a: "Most do on modern phones and computers. If a viewer's device lacks a font for a rare character, it shows a box — switch to a more common style like bold or small caps.",
      },
    ],
  },
  {
    slug: "graffiti",
    keyword: "graffiti font generator",
    title: "Graffiti Font Generator – Bold Street-Style Text Copy & Paste",
    description:
      "Generate graffiti-style text with bold, bubble, and decorative Unicode fonts. Copy and paste street-style lettering into bios, usernames, and captions.",
    h1: "Graffiti Font Generator",
    intro:
      "Give your text a bold, street-style graffiti look. Browse heavy, bubble, and decorative Unicode styles, copy your favorite, and paste it into your bio, username, or caption.",
    styles: ["bubble", "bubble-filled", "squared", "fullwidth", "gothic-bold", "outline-gothic", "sans-bold", "double-struck", "blackletter", "fraktur-bold", "weird", "small-caps"],
    about: [
      {
        heading: "Graffiti style with Unicode",
        body: "True spray-can graffiti is a hand-drawn art form, so no plain-text tool can reproduce it exactly. What this generator does is gather the boldest, chunkiest, and most decorative Unicode styles — bubble letters, heavy gothic, squared, and outline forms — that capture a similar street-style energy and still copy-paste anywhere.",
      },
      {
        heading: "Where graffiti-style text fits",
        body: "It's popular for usernames, gaming tags, comment sections, and bios where you want letters that shout. For an actual graffiti piece or logo, use a dedicated graffiti font file; use this to mock up the vibe quickly.",
      },
    ],
    faq: [
      {
        q: "Is this real graffiti lettering?",
        a: "It's a Unicode approximation — bold, bubble, and decorative characters that give a graffiti-like feel. Real graffiti needs hand lettering or a vector font, but this is great for a quick street-style look online.",
      },
      {
        q: "Which style looks most like graffiti?",
        a: "The filled bubble and squared styles read as the most 'tag-like,' while heavy gothic gives a darker street feel. Try a few and see which fits.",
      },
    ],
  },
  {
    slug: "minecraft",
    keyword: "minecraft font generator",
    title: "Minecraft Font Generator – Stylish Names & Text Copy & Paste",
    description:
      "Generate stylish Minecraft-style names and text with Unicode fonts. Copy and paste bold, gothic, and decorative letters into usernames, signs, and chat.",
    h1: "Minecraft Font Generator",
    intro:
      "Make a stylish name or message for Minecraft. Pick a bold, gothic, or decorative Unicode style, copy it, and paste it into your username, server name, or chat.",
    styles: ["monospace", "gothic-bold", "fraktur", "sans-bold", "bold-serif", "small-caps", "squared", "fullwidth", "double-struck", "blackletter", "outline-gothic", "bubble"],
    about: [
      {
        heading: "Using styled fonts in Minecraft",
        body: "Minecraft chat, signs, and many launchers and servers accept Unicode characters, so styled letters from this generator show up in-game. Bedrock and Java handle most ranges, though some servers sanitize unusual characters — test before relying on a heavily decorated name.",
      },
      {
        heading: "Names, signs, and server text",
        body: "Use styled text for display names, server titles, MOTDs, and signs to stand out from default text. Keep critical commands and coordinates in normal letters so they stay readable and typable by other players.",
      },
    ],
    faq: [
      {
        q: "Will these fonts work in Minecraft chat and signs?",
        a: "Most Unicode styles display in chat and on signs, especially on modern versions. Some servers filter non-standard characters, so if a style doesn't appear, switch to a simpler one like bold or small caps.",
      },
      {
        q: "Can I use this for my Minecraft username?",
        a: "Mojang/Microsoft account usernames are restricted to standard characters, but in-game display names, nicknames, and server profiles usually accept Unicode styling.",
      },
    ],
  },
  {
    slug: "roblox",
    keyword: "roblox font generator",
    title: "Roblox Font Generator – Stylish Names & Text Copy & Paste",
    description:
      "Generate stylish Roblox-style names and text with Unicode fonts. Copy and paste bold, cute, and gothic letters into display names, groups, and chat.",
    h1: "Roblox Font Generator",
    intro:
      "Create a stylish name or text for Roblox. Choose a bold, cute, or gothic Unicode style, copy it, and paste it into your display name, group name, or chat.",
    styles: ["sans-bold", "bold-serif", "gothic-bold", "small-caps", "double-struck", "fullwidth", "monospace", "bubble", "fraktur", "script", "squared", "outline-gothic"],
    about: [
      {
        heading: "Styled text in Roblox",
        body: "Roblox display names, group names, and chat accept a range of Unicode characters, which is how players get stylish names that stand out in lobbies and leaderboards. Roblox's text filter is strict, so cleaner styles like bold and small caps pass more reliably than heavily decorated ones.",
      },
      {
        heading: "Display names vs. usernames",
        body: "Your Roblox username has tight character rules, but the separate display name is more flexible and is where most styling goes. Group names and in-experience text also support Unicode in many cases.",
      },
    ],
    faq: [
      {
        q: "Will Roblox accept these fonts in my name?",
        a: "Roblox runs every name through a filter, so simpler styles (bold, small caps) are the safest. Very decorative or symbol-heavy variants may be rejected — try a cleaner one if it won't save.",
      },
      {
        q: "Is this allowed by Roblox?",
        a: "Using Unicode characters in display names is common and the text still passes Roblox moderation. Always follow Roblox's name and chat rules — styling doesn't exempt text from the filter.",
      },
    ],
  },
  {
    slug: "linkedin",
    keyword: "linkedin font generator",
    title: "LinkedIn Font Generator – Bold Text for Posts & Profiles",
    description:
      "Make bold and italic text for LinkedIn posts, headlines, and profiles. Free Unicode font generator you can copy and paste into LinkedIn in seconds.",
    h1: "LinkedIn Font Generator",
    intro:
      "Add bold or italic emphasis to your LinkedIn posts, headline, and About section. LinkedIn has no formatting button, so copy a Unicode style here and paste it straight in.",
    styles: ["bold-serif", "sans-bold", "italic-serif", "bold-italic-serif", "sans-italic", "small-caps", "double-struck", "monospace", "underline", "fraktur", "script", "sans-bold-italic"],
    about: [
      {
        heading: "Why bold text stands out on LinkedIn",
        body: "LinkedIn posts and profiles use one default font with no bold or italic controls. Unicode bold and italic characters let you emphasize a hook, a headline, or a key phrase so your post stops the scroll in a busy feed — a tactic many creators use to lift engagement.",
      },
      {
        heading: "Where to use it on LinkedIn",
        body: "Post body text, your headline, the About section, and featured titles all accept Unicode. Use emphasis sparingly and professionally — one bold line or a few key terms reads as polished, while a fully styled post reads as spam.",
      },
    ],
    faq: [
      {
        q: "Does LinkedIn support bold text?",
        a: "Not natively, but it displays Unicode bold characters. Paste them into a post or your profile and they render as bold on desktop and mobile.",
      },
      {
        q: "Is bold Unicode text accessible on LinkedIn?",
        a: "Screen readers can read Unicode bold inconsistently, so keep essential information in normal text and use styled characters only for light emphasis.",
      },
    ],
  },
  {
    slug: "cool-text",
    keyword: "cool text generator",
    title: "Cool Text Generator – Copy & Paste Cool Text Online",
    description:
      "Free cool text generator. Type your text and turn it into dozens of cool Unicode styles you can copy and paste into Instagram, Discord, games, and anywhere.",
    h1: "Cool Text Generator",
    intro:
      "Turn plain text into cool, eye-catching styles in seconds. Type once, scroll a wall of variants, copy whichever looks coolest, and paste it anywhere — no app or sign-up.",
    styles: ALL_VARIETY,
    defaultText: "cool text",
    about: [
      {
        heading: "What makes text look 'cool'?",
        body: "Cool text is just normal letters swapped for styled Unicode characters — bold, gothic, cursive, bubble, glitch, and more. Because the result is plain text, it keeps its look when you copy and paste it, even into apps with no font settings.",
      },
      {
        heading: "Where cool text works",
        body: "Instagram, TikTok, Discord, X, Facebook, YouTube, gaming names, and most messaging apps. For usernames and older devices, the cleaner styles (bold, small caps) are the safest; save the heavier glitch and bubble looks for bios and captions.",
      },
    ],
    faq: [
      {
        q: "Is the cool text generator free?",
        a: "Yes — no sign-up, no watermark, no limits. Everything runs in your browser.",
      },
      {
        q: "Why do some cool fonts show as boxes?",
        a: "The viewer's device doesn't have a font for those Unicode characters. Switch to a more widely supported style like bold or small caps and they'll render everywhere.",
      },
    ],
  },
  {
    slug: "cool-letters",
    keyword: "cool letters to copy and paste",
    title: "Cool Letters to Copy and Paste – Stylish Unicode Letters",
    description:
      "Cool letters you can copy and paste. Turn your text into stylish Unicode letters — bold, gothic, cursive, bubble, and more — ready for bios, names, and captions.",
    h1: "Cool Letters to Copy and Paste",
    intro:
      "Get cool, stylish letters in one click. Type a word or name, browse the styles, and copy the letters you like — they paste into bios, usernames, captions, and chat.",
    styles: ALL_VARIETY,
    defaultText: "cool letters",
    about: [
      {
        heading: "Cool letters, one character at a time",
        body: "Each cool letter is a Unicode character that looks like a styled A–Z. You can copy a whole word or just a single decorative letter for a monogram or initial — they're all real, copyable characters, not images.",
      },
      {
        heading: "Copy and paste anywhere",
        body: "Because cool letters are plain text, they paste into Instagram, Discord, TikTok, games, and almost any app. Some username fields filter unusual characters, so pick a simpler style if a letter won't save.",
      },
    ],
    faq: [
      {
        q: "Can I copy just one cool letter?",
        a: "Yes — generate your text, then select and copy the single letter you want. Each character stands on its own.",
      },
      {
        q: "Do cool letters work in usernames?",
        a: "Bios and display names accept the full range. Strict username fields may reject decorated characters, so choose a cleaner style like bold or small caps there.",
      },
    ],
  },
  {
    slug: "fun",
    keyword: "fun fonts",
    title: "Fun Fonts Generator – Playful Text Copy & Paste",
    description:
      "Generate fun, playful fonts — bubble, squared, wide, and quirky Unicode styles you can copy and paste into bios, captions, names, and chat.",
    h1: "Fun Fonts Generator",
    intro:
      "Add a playful twist to your text. Browse bubble, squared, wide, and other fun Unicode styles, copy your favorite, and paste it into your bio, caption, or username.",
    styles: ["bubble", "bubble-filled", "squared", "fullwidth", "script", "small-caps", "double-struck", "weird", "upside-down", "strikethrough", "fraktur", "monospace"],
    defaultText: "fun fonts",
    about: [
      {
        heading: "What makes a font fun?",
        body: "Fun fonts trade formality for personality — rounded bubble letters, blocky squared characters, wide vaporwave-style text, and quirky flipped or weird variants. They're built from Unicode, so the playful look copies and pastes anywhere.",
      },
      {
        heading: "Where fun fonts fit best",
        body: "Great for casual bios, group chats, gaming names, birthday messages, and comments where you want something lighthearted. A word or two in a fun style pops more than a whole paragraph.",
      },
    ],
    faq: [
      {
        q: "Are fun fonts free to use?",
        a: "Yes — copy and paste as much as you like, with no sign-up or watermark.",
      },
      {
        q: "Will fun fonts work on every app?",
        a: "Most do on modern devices. The bubble and squared styles are widely supported; if a rare character shows a box on an older phone, switch to a simpler style.",
      },
    ],
  },
  {
    slug: "distorted-text",
    keyword: "distorted text generator",
    title: "Distorted Text Generator – Glitchy, Warped Text Copy & Paste",
    description:
      "Generate distorted text — glitchy, warped, and corrupted Unicode styles you can copy and paste into bios, captions, usernames, and chat.",
    h1: "Distorted Text Generator",
    intro:
      "Warp your text into glitchy, distorted styles. Stack combining marks, flip and mix characters, then copy the look you like and paste it anywhere plain text is accepted.",
    styles: ["zalgo-soft", "zalgo", "zalgo-extreme", "weird", "gothic-glitch", "cursed-gothic", "upside-down", "reverse", "fullwidth", "squared", "fraktur-flipped"],
    defaultText: "distorted text",
    about: [
      {
        heading: "How distorted text is made",
        body: "The glitchy, melting look comes from combining diacritical marks (Unicode U+0300–U+036F) stacked on top of your letters until the glyphs overlap. Other distorted styles mix scripts, flip characters, or widen them — all still plain Unicode text, so the warped result copies and pastes anywhere.",
      },
      {
        heading: "Where distorted text fits",
        body: "It's popular for horror and gaming aesthetics, edgy bios, Discord names, and captions that need to look broken on purpose. A short distorted phrase reads as intentional; a long one can get hard to read and may be trimmed by stricter apps.",
      },
    ],
    faq: [
      {
        q: "Will distorted text work everywhere?",
        a: "Most apps render it, but some that sanitize combining marks (a few username fields and older systems) may strip the effect or refuse to save it. If that happens, choose a lighter, less-distorted variant.",
      },
      {
        q: "What's the difference between distorted, glitch, and zalgo text?",
        a: "They overlap. Zalgo is specifically the stacked combining-mark overflow; glitch is a broader corrupted look; distorted is broadest of all — it includes those effects plus flipped, mixed, and widened characters.",
      },
    ],
  },
  {
    slug: "old-cursive",
    keyword: "old cursive font copy and paste",
    title: "Old Cursive Font Generator – Vintage Cursive Copy & Paste",
    description:
      "Convert text into old-fashioned cursive — vintage script, copperplate, and old English cursive styles. Free Unicode old cursive fonts to copy and paste anywhere.",
    h1: "Old Cursive Font Generator",
    intro:
      "Turn anything you type into old-fashioned, vintage cursive — flowing script, slanted copperplate, and medieval old English cursive. Copy the variant you like and paste it into your bio, captions, signatures, or messages.",
    styles: ["medieval-script", "medieval-bold-script", "script", "script-bold", "cursive-spaced", "cursive-underline", "cursive-bold-spaced", "cursive-strike", "italic-serif", "bold-italic-serif", "ye-olde", "manuscript-mono"],
    defaultText: "old cursive",
    about: [
      {
        heading: "What is an old cursive font?",
        body: "\"Old cursive\" usually means one of two looks: the elegant, slanted handwriting of 18th- and 19th-century copperplate and Spencerian penmanship, or the old English cursive that grew out of medieval manuscript hands. The styles here approximate both using Unicode script and medieval characters, so the vintage result stays as plain, copyable text.",
      },
      {
        heading: "Old cursive vs. modern cursive vs. blackletter",
        body: "Modern cursive (see our cursive generator) is the clean script you'd type today. Old cursive leans antique — heavier slant, ornate flourishes, a hand-penned feel. Blackletter / Old English is the dense, angular gothic lettering, which is related but not cursive at all. If you want the spiky gothic look instead, try the Old English generator.",
      },
    ],
    faq: [
      {
        q: "Is this real antique handwriting?",
        a: "No — your device's font isn't changing. We swap each letter for a similar-looking Unicode character, so the result is still plain text that pastes anywhere. It mimics vintage cursive rather than reproducing a specific historical hand.",
      },
      {
        q: "Where can I use old cursive text?",
        a: "Anywhere plain text is accepted: Instagram bios and captions, signatures, invitations and mockups, Discord, and most messaging apps. Some username fields filter unusual characters — if a variant won't save, pick one closer to standard letters.",
      },
      {
        q: "Why do some old cursive letters show as boxes?",
        a: "The viewer's device is missing a font that covers those script characters. Pick a different variant and the recipient should see it correctly.",
      },
    ],
  },
  {
    slug: "ye-old-english",
    keyword: "ye old english generator",
    title: "Ye Olde English Generator – Old-Timey Text Copy & Paste",
    description:
      "Generate ye olde English text — old-timey medieval and blackletter styles you can copy and paste. Free Unicode ye-olde fonts for signs, taverns, and themed projects.",
    h1: "Ye Olde English Generator",
    intro:
      "Give your text that old-timey, ye-olde-tavern look — medieval blackletter, fraktur, and ornate gothic lettering. Copy the variant you like and paste it into signs, menus, profiles, or themed projects.",
    styles: ["ye-olde", "fraktur", "fraktur-bold", "old-english-spaced", "german-gothic", "church-style", "medieval-script", "royal-gothic", "gothic-classic", "blackletter", "decorative-gothic", "manuscript-mono"],
    defaultText: "ye olde shoppe",
    about: [
      {
        heading: "Where \"ye olde\" comes from",
        body: "The \"ye\" in \"Ye Olde Shoppe\" was never pronounced with a Y — it's a printer's shorthand for \"the.\" Early English used the letter thorn (þ) for the \"th\" sound, and when printers lacked a thorn type they substituted a Y, since the two looked similar in blackletter. The phrase stuck as visual shorthand for anything old-fashioned and quaint.",
      },
      {
        heading: "The ye-olde look in Unicode",
        body: "The styles here recreate that antique feel with blackletter, fraktur, and medieval Unicode alphabets — the same lettering used on old tavern signs, pub names, and storybook titles. Because the output is plain characters, it copies and pastes into apps that don't let you change fonts.",
      },
    ],
    faq: [
      {
        q: "Is \"ye olde\" grammatically correct?",
        a: "The \"ye\" is really \"the\" — so \"Ye Olde Shoppe\" reads as \"The Old Shop.\" It's mock-archaic styling rather than authentic Middle English, which is exactly why it works for themed, decorative text.",
      },
      {
        q: "Will ye olde English text work in usernames and bios?",
        a: "Bios and messages accept the full Unicode range. Username fields are stricter — if a heavily decorated variant won't save, pick one closer to standard letters.",
      },
    ],
  },
  {
    slug: "old-english-letters",
    keyword: "old english letters generator",
    title: "Old English Letters Generator – A–Z Alphabet Copy & Paste",
    description:
      "Generate Old English letters and browse the full A–Z blackletter alphabet to copy and paste. Free Unicode Old English lettering for tattoos, bios, and usernames.",
    h1: "Old English Letters Generator",
    intro:
      "Type any word to see it in Old English blackletter, or copy individual letters straight from the A–Z alphabet chart below. Every character is plain Unicode, so it pastes into bios, captions, usernames, and tattoo mockups.",
    styles: ["gothic-classic", "fraktur", "gothic-bold", "blackletter", "fraktur-bold", "old-english-spaced", "german-gothic", "church-style", "medieval-script", "royal-gothic", "decorative-gothic", "tattoo-gothic"],
    defaultText: "old english",
    alphabet: "letters",
    about: [
      {
        heading: "The Old English alphabet, A to Z",
        body: "The chart below maps every English letter to its Old English blackletter form so you can copy a single letter — a monogram, an initial, or one ornate capital — without retyping a whole word. Uppercase and lowercase are shown separately because blackletter draws them quite differently.",
      },
      {
        heading: "Old English letters vs. a real font",
        body: "These are Unicode characters that look like blackletter, not an installed typeface — which is exactly why they survive copy-paste into apps with no font controls. For print or a tattoo stencil, hand the look to a designer who can set it in a true vector font for crisp linework.",
      },
    ],
    faq: [
      {
        q: "How do I copy just one Old English letter?",
        a: "Use the A–Z chart on this page — each tile is a single blackletter character you can select and copy on its own. For whole words, type into the generator at the top.",
      },
      {
        q: "Why do a few letters look unusual?",
        a: "Some blackletter capitals (especially I, J, and S) are highly stylized in the Unicode mathematical alphabets, so they can look different from what you expect. Try another style if a letter reads poorly.",
      },
      {
        q: "Will Old English letters work in my Instagram or Discord name?",
        a: "Bios and messages accept the full Unicode range. Username fields are stricter — if a decorated letter won't save, pick a style closer to standard letters.",
      },
    ],
  },
  {
    slug: "old-english-numbers",
    keyword: "old english number generator",
    title: "Old English Numbers Generator – Fancy 0–9 Copy & Paste",
    description:
      "Generate Old English style numbers and browse fancy 0–9 digits to copy and paste. Free Unicode number styles for tattoos, jerseys, bios, and usernames.",
    h1: "Old English Numbers Generator",
    intro:
      "Get stylized numbers to match Old English lettering. Type any figure or copy individual digits from the 0–9 chart below — handy for dates, jersey numbers, tattoo mockups, and profiles.",
    styles: ["double-struck", "bold-serif", "sans-bold", "fullwidth", "squared", "bubble", "monospace", "superscript", "bold-spaced", "squared-spaced"],
    defaultText: "1066",
    alphabet: "numbers",
    about: [
      {
        heading: "Why there's no true blackletter digit",
        body: "Genuine Old English blackletter never included Arabic numerals — medieval scribes wrote numbers as Roman numerals or spelled them out. Unicode has no blackletter 0–9, so the closest match for a 'gothic number' look is one of the heavy, decorative digit styles shown here. For Roman numerals, see our Roman numeral converter.",
      },
      {
        heading: "Picking a number style",
        body: "Double-struck and bold digits read as solid and formal, fullwidth and squared feel bold and blocky, and circled (bubble) digits look playful. Pair them with Old English letters from the letters generator for a matched set on jerseys, dates, or tattoo mockups.",
      },
    ],
    faq: [
      {
        q: "Can I get numbers in the same font as Old English letters?",
        a: "Not exactly — Unicode has no blackletter digits. The styles here are the closest decorative match. Many people pair Old English letters with double-struck or bold numbers for a consistent heavy look.",
      },
      {
        q: "How do I copy a single number?",
        a: "Use the 0–9 chart on this page — each tile is one styled digit you can select and copy. For multi-digit figures, type them into the generator above.",
      },
    ],
  },
  {
    slug: "old-english-word",
    keyword: "old english word generator",
    title: "Old English Word Generator – Convert Words to Old English Text",
    description:
      "Turn any word into Old English blackletter text to copy and paste. Free Unicode Old English word generator for names, tattoos, usernames, and titles.",
    h1: "Old English Word Generator",
    intro:
      "Convert a single word — a name, a title, a brand — into Old English blackletter and gothic styles. Type it once, compare the variants, and copy the one that fits your tattoo mockup, logo, or profile.",
    styles: ["gothic-classic", "fraktur", "blackletter", "gothic-bold", "fraktur-bold", "old-english-spaced", "german-gothic", "church-style", "medieval-script", "royal-gothic", "decorative-gothic", "tattoo-gothic"],
    defaultText: "legend",
    examples: ["legacy", "empire", "London", "Royal"],
    about: [
      {
        heading: "Built for single words and names",
        body: "Old English lettering looks its best on short, punchy text — a name across the shoulders, a one-word brand, a band logo. Type your word and the generator renders it across a dozen blackletter and gothic variants so you can compare them side by side before committing.",
      },
      {
        heading: "From word to tattoo or logo",
        body: "The output is Unicode, perfect for previewing and for digital profiles. For a printed logo or a tattoo stencil, screenshot the variant you like and give it to your designer or artist so they can recreate it in a proper vector font.",
      },
    ],
    faq: [
      {
        q: "Does it work with names?",
        a: "Yes — names are the most popular use. Type a first or last name and copy the blackletter version for a bio, username, or tattoo mockup.",
      },
      {
        q: "Can I convert a whole sentence?",
        a: "You can, but Old English blackletter gets hard to read in long passages. It works best on one word or a short phrase. For body text, use a lighter style from the cursive or italic generators.",
      },
    ],
  },
  {
    slug: "ransom-note",
    keyword: "ransom note font generator",
    title: "Ransom Note Font Generator – Mismatched Cut-Out Letters",
    description:
      "Turn text into mismatched, ransom-note style letters that alternate styles like cut-out magazine clippings. Free, copy and paste, no sign-up.",
    h1: "Ransom Note Font Generator",
    intro:
      "Type a message and get the classic cut-and-paste ransom note look — every letter in a clashing style, like clippings glued from different magazines. Copy it and drop it into a caption, a meme, or a [spooky DM](/font-generator/creepy).",
    styles: ["alternating", "weird", "squared", "bubble", "fullwidth", "double-struck", "small-caps", "fraktur"],
    defaultText: "pay up",
    about: [
      {
        heading: "The cut-out clipping effect",
        body: "A real ransom note is letters snipped from different sources so nothing matches. The alternating style here mimics that by switching typefaces character by character, while the blockier styles give you a single clashing look if you prefer something cleaner.",
      },
      {
        heading: "It stays plain text",
        body: "Even though the letters look pasted-on, the result is ordinary Unicode — so it copies into any app that accepts text. No image editing, no fonts to install.",
      },
    ],
    faq: [
      {
        q: "Is this a real cut-out image?",
        a: "No — it's Unicode characters that switch style letter by letter to fake the clipping look. That means you can paste it as text anywhere, not just as a picture.",
      },
      {
        q: "Where do people use ransom note text?",
        a: "Memes, horror and mystery posts, party invites, and joke threats between friends. Keep it short — the effect reads best on a few words.",
      },
    ],
  },
  {
    slug: "gothic-printing",
    keyword: "gothic printing",
    title: "Gothic Printing Font Generator – Blackletter Print Styles",
    description:
      "Generate gothic printing styles — dense blackletter and textura forms inspired by early printed books. Free Unicode text to copy and paste.",
    h1: "Gothic Printing Generator",
    intro:
      "Recreate the look of early gothic printing — the heavy blackletter that filled the first printed books and newspapers. Type your text and copy a dense, formal print style for titles, logos, and mockups.",
    styles: ["gothic-classic", "blackletter", "fraktur", "german-gothic", "newspaper-gothic", "gothic-bold", "fraktur-bold", "church-style", "old-english-spaced", "decorative-gothic"],
    defaultText: "Gazette",
    about: [
      {
        heading: "From Gutenberg to the masthead",
        body: "The earliest European printing used [blackletter](/font-generator/blackletter) type because it imitated the manuscript hands scribes already wrote. That dense, vertical look survives today on newspaper mastheads, diplomas, and certificates — and that's exactly the feel these styles capture. For the spiky, hand-penned version, try the [Old English](/font-generator/old-english) generator.",
      },
    ],
    faq: [
      {
        q: "What's the difference between gothic printing and modern gothic?",
        a: "Gothic printing leans on the formal, book-and-masthead blackletter look. Modern gothic usually means a darker, edgier take. Try both and pick what suits the project.",
      },
      {
        q: "Can I use this on a masthead or certificate mockup?",
        a: "For a digital preview, yes. For final print, hand the chosen look to your designer so they can set it in a true vector blackletter font.",
      },
    ],
  },
  {
    slug: "modern-gothic",
    keyword: "modern gothic font",
    title: "Modern Gothic Font Generator – Dark Contemporary Blackletter",
    description:
      "Convert text into modern gothic styles — sleek, dark blackletter with a contemporary edge. Free Unicode fonts to copy and paste anywhere.",
    h1: "Modern Gothic Font Generator",
    intro:
      "A cleaner, darker take on blackletter for streetwear, music, and fashion aesthetics. Type your text and copy a modern gothic style for bios, logos, and album-art mockups.",
    styles: ["dark-gothic", "gothic-bold", "blackletter-bold", "outline-gothic", "tattoo-gothic", "gothic-spaced", "fraktur-bold", "cursed-gothic", "small-gothic"],
    defaultText: "after dark",
    about: [
      {
        heading: "Old roots, new attitude",
        body: "Modern gothic keeps [blackletter's](/font-generator/blackletter) heavy strokes but strips away the fussiest ornament, so it reads sharp and editorial rather than [medieval](/font-generator/medieval). It's the look you see on streetwear graphics, rap covers, and high-fashion logos.",
      },
    ],
    faq: [
      {
        q: "Why does modern gothic feel different from Old English?",
        a: "Old English leans ornate and historical; modern gothic is cleaner and bolder. Same family of letters, different mood.",
      },
      {
        q: "Will it work in an Instagram bio?",
        a: "Yes — it's plain Unicode, so it pastes into bios and captions. Username fields can be stricter, so test before saving.",
      },
    ],
  },
  {
    slug: "mamma-mia",
    keyword: "mamma mia font generator",
    title: "Mamma Mia Font Generator – Bold Theatrical Title Text",
    description:
      "Make bold, playful title-style text inspired by stage and musical posters. Free Unicode fonts to copy and paste into bios, captions, and graphics.",
    h1: "Mamma Mia Font Generator",
    intro:
      "Big, bouncy, theatrical lettering for captions, fan posts, and party graphics. Type your text and copy a bold show-poster style — no font files needed.",
    styles: ["bold-serif", "sans-bold", "bold-spaced", "fullwidth", "bold-italic-serif", "double-struck", "squared", "outline-gothic"],
    defaultText: "here we go again",
    about: [
      {
        heading: "Big, bold, and built for fun",
        body: "Show and musical posters use chunky, high-contrast title type so a name reads across a crowded room. These [bold](/font-generator/bold) and wide Unicode styles bring that same exclamation-point energy to plain text.",
      },
    ],
    faq: [
      {
        q: "Is this the exact poster font?",
        a: "No — branded posters use licensed custom type we can't reproduce. These are the closest bold, theatrical Unicode styles you can copy and paste anywhere.",
      },
      {
        q: "Where does it work best?",
        a: "Short titles, fan captions, and party invites. Bold styles lose their punch on long passages, so keep it to a few words.",
      },
    ],
  },
  {
    slug: "squid-game",
    keyword: "squid game font generator",
    title: "Squid Game Font Generator – Bold Symbol & Title Text",
    description:
      "Make bold, blocky title text and shape-style characters inspired by the hit survival series. Free Unicode fonts to copy and paste.",
    h1: "Squid Game Font Generator",
    intro:
      "Bold, blocky lettering with that stark, high-contrast title feel. Type your text and copy a clean, heavy style for fan posts, captions, and channel art.",
    styles: ["squared", "squared-spaced", "fullwidth", "sans-bold", "bold-serif", "double-struck", "outline-gothic", "monospace"],
    defaultText: "456",
    about: [
      {
        heading: "Stark, blocky, instantly recognizable",
        body: "The show's identity leans on flat shapes — circle, triangle, square — and clean, heavy type. The [squared](/font-generator/square) and wide styles here echo that minimal, high-impact look for fan content.",
      },
    ],
    faq: [
      {
        q: "Can I get the circle-triangle-square symbols?",
        a: "Those are graphic shapes rather than letters. For symbols, check our [symbols library](/symbols) — the styles here cover the bold title text.",
      },
      {
        q: "Is this the official font?",
        a: "No — it's a copy-paste Unicode lookalike. The official title type is licensed and can't be reproduced as plain text.",
      },
    ],
  },
  {
    slug: "hunger-games",
    keyword: "hunger games font",
    title: "Hunger Games Font Generator – Bold Engraved Title Style",
    description:
      "Generate bold, engraved-looking title text inspired by dystopian poster lettering. Free Unicode fonts to copy and paste into bios and graphics.",
    h1: "Hunger Games Font Generator",
    intro:
      "Strong, serif-edged title lettering with a stamped, official feel. Type your text and copy a bold engraved-style font for fan captions, edits, and profiles.",
    styles: ["bold-serif", "small-caps", "small-caps-spaced", "bold-spaced", "double-struck", "outline-gothic", "fullwidth", "diploma-style"],
    defaultText: "the odds",
    about: [
      {
        heading: "Stamped, official, a little austere",
        body: "Dystopian franchise posters favor narrow, engraved serifs in all caps — type that looks chiseled into metal. The bold serif and [small-caps](/font-generator/small-caps) styles here lean into that cold, official mood.",
      },
    ],
    faq: [
      {
        q: "Is this the real movie font?",
        a: "No — the films use a custom licensed typeface. These are the closest bold, engraved-feeling Unicode styles for copy-paste.",
      },
      {
        q: "Best style for an all-caps title?",
        a: "Try the small-caps and bold serif options — they keep that stamped, official look across short titles.",
      },
    ],
  },
  {
    slug: "final-fantasy",
    keyword: "final fantasy font",
    title: "Final Fantasy Font Generator – Elegant Fantasy Title Text",
    description:
      "Make elegant, ornate fantasy-style title text for game fan content. Free Unicode fonts to copy and paste into bios, usernames, and graphics.",
    h1: "Final Fantasy Font Generator",
    intro:
      "Graceful, ornate lettering with a high-fantasy feel for game fans. Type your text and copy an elegant style for guild names, captions, and profiles.",
    styles: ["italic-serif", "bold-italic-serif", "script", "medieval-script", "decorative-gothic", "royal-gothic", "small-caps", "diploma-style"],
    defaultText: "crystal",
    about: [
      {
        heading: "Elegant, ornate, a little regal",
        body: "JRPG title art often pairs flowing italics with delicate ornament for a refined, magical feel. The [italic](/font-generator/italic), [script](/font-generator/cursive), and decorative styles here capture that elegance for fan posts and guild branding.",
      },
    ],
    faq: [
      {
        q: "Is this the official logo font?",
        a: "No — the game's logos are hand-drawn custom art. These are elegant Unicode lookalikes you can copy and paste anywhere.",
      },
      {
        q: "Good for a guild or party name?",
        a: "Yes — the italic and script styles read as classy and fit short names well. Test in username fields, which can filter rare characters.",
      },
    ],
  },
  {
    slug: "pulp-fiction",
    keyword: "pulp fiction font",
    title: "Pulp Fiction Font Generator – Bold Retro Poster Text",
    description:
      "Generate bold, retro poster-style title text with a punchy mid-century feel. Free Unicode fonts to copy and paste.",
    h1: "Pulp Fiction Font Generator",
    intro:
      "Loud, bold, retro title lettering with that vintage pulp-magazine punch. Type your text and copy a chunky poster style for captions, edits, and graphics.",
    styles: ["bold-serif", "sans-bold", "fullwidth", "bold-spaced", "double-struck", "squared", "outline-gothic", "small-caps-spaced"],
    defaultText: "royale",
    about: [
      {
        heading: "Loud and unapologetic",
        body: "Pulp posters and paperbacks shouted with fat, blocky type and wide spacing. These [bold](/font-generator/bold) and wide Unicode styles bring that retro, in-your-face poster energy to plain text.",
      },
    ],
    faq: [
      {
        q: "Is this the exact movie poster font?",
        a: "No — that's a custom licensed typeface. These are the closest bold, retro Unicode styles for copy-paste use.",
      },
      {
        q: "Where does it look best?",
        a: "Short titles and captions. The wide, bold styles lose impact in long blocks of text.",
      },
    ],
  },
  {
    slug: "slasher",
    keyword: "slasher flick font",
    title: "Slasher Font Generator – Horror Movie Title Text",
    description:
      "Make jagged, scratchy horror-style text for slasher and Halloween posts. Free Unicode fonts to copy and paste.",
    h1: "Slasher Font Generator",
    intro:
      "Jagged, unsettling lettering for horror posts, scary stories, and Halloween captions. Type your text and copy a creepy slasher-flick style — no app needed.",
    styles: ["zalgo-soft", "zalgo", "cursed-gothic", "dark-gothic", "gothic-glitch", "weird", "fraktur", "sans-zalgo"],
    defaultText: "scream",
    about: [
      {
        heading: "Dread over chaos",
        body: "The scariest titles suggest something is wrong without becoming illegible. A light [glitch](/font-generator/glitch) or distressed [blackletter](/font-generator/blackletter) on a short word lands harder than maxed-out static.",
      },
    ],
    faq: [
      {
        q: "What style screams slasher?",
        a: "Light zalgo or cursed gothic on the title word. Heavy distortion buries the text, so use it sparingly.",
      },
      {
        q: "Does it work for Halloween captions?",
        a: "Yes — it's plain Unicode, so it pastes into captions, stories, and DMs anywhere.",
      },
    ],
  },
  {
    slug: "monster",
    keyword: "font monster",
    title: "Monster Font Generator – Spooky Creature Text Styles",
    description:
      "Turn text into spooky, monstrous styles with glitchy and gothic energy. Free Unicode fonts to copy and paste for horror and Halloween posts.",
    h1: "Monster Font Generator",
    intro:
      "Creepy, creature-feature lettering for Halloween, horror games, and spooky usernames. Type your text and copy a monstrous style straight into your bio or caption.",
    styles: ["zalgo", "zalgo-soft", "cursed-gothic", "dark-gothic", "weird", "gothic-glitch", "fraktur-bold", "sans-zalgo"],
    defaultText: "beware",
    about: [
      {
        heading: "Make the letters feel alive",
        body: "Monster type works by warping familiar letters just enough to feel wrong — dripping marks, jagged strokes, a hint of glitch. Keep words short so the effect stays readable and menacing.",
      },
    ],
    faq: [
      {
        q: "Good for a horror game username?",
        a: "Yes, though username fields often strip rare characters. Pick a lighter style if a heavily glitched name won't save.",
      },
      {
        q: "Is heavy zalgo too much?",
        a: "Often, yes. A little distortion reads as [creepy](/font-generator/creepy); a lot reads as noise. Start light and add more only if you need it.",
      },
    ],
  },
  {
    slug: "gangster",
    keyword: "gangster font",
    title: "Gangster Font Generator – Bold Street & Graffiti Text",
    description:
      "Generate bold, gangster-style street and graffiti text. Free Unicode fonts to copy and paste into bios, captions, and usernames.",
    h1: "Gangster Font Generator",
    intro:
      "Bold, street-style lettering with attitude — heavy gothic and tattoo-flavored looks for bios, captions, and crew names. Type your text and copy a hard-hitting style.",
    styles: ["tattoo-gothic", "gothic-bold", "blackletter-bold", "dark-gothic", "fraktur-bold", "gothic-spaced", "outline-gothic", "small-gothic"],
    defaultText: "respect",
    about: [
      {
        heading: "Where the gangster look comes from",
        body: "The style borrows from West Coast [tattoo](/font-generator/tattoo) lettering and old-school [blackletter](/font-generator/blackletter) — bold, angular, and unapologetic. It's the look you see on jerseys, mixtape covers, and crew logos.",
      },
    ],
    faq: [
      {
        q: "Is this the same as Old English?",
        a: "It's closely related — gangster lettering grew out of blackletter and tattoo script. Try the tattoo gothic and bold blackletter styles for that exact feel.",
      },
      {
        q: "Will it paste into a username?",
        a: "Bios and captions accept it freely. Username fields can be stricter, so pick a cleaner style if a decorated one won't save.",
      },
    ],
  },
  {
    slug: "princess",
    keyword: "princess font",
    title: "Princess Font Generator – Elegant Royal Script Text",
    description:
      "Turn text into elegant, royal princess-style script. Free Unicode fonts to copy and paste into bios, captions, and party graphics.",
    h1: "Princess Font Generator",
    intro:
      "Graceful, fairytale lettering with a royal touch — flowing script and delicate styles for bios, party themes, and cute captions. Type your text and copy your favorite.",
    styles: ["script", "script-bold", "cursive-spaced", "italic-serif", "royal-gothic", "decorative-gothic", "cursive-underline", "bubble"],
    defaultText: "princess",
    about: [
      {
        heading: "Soft, elegant, a little magical",
        body: "Princess styles lean on flowing [script](/font-generator/cursive) and gentle ornament for a fairytale feel. They suit birthday themes, nursery mockups, [cute](/font-generator/cute) bios, and anything that wants a touch of sparkle.",
      },
    ],
    faq: [
      {
        q: "Best style for a cute bio?",
        a: "The flowing script and spaced cursive options read as elegant and soft. Pair them with a heart or star symbol for extra charm.",
      },
      {
        q: "Can I use it for a party invite?",
        a: "For a digital preview, yes. For print, hand the look to your designer so they can set it in a true script font.",
      },
    ],
  },
  {
    slug: "love",
    keyword: "love typeface",
    title: "Love Font Generator – Romantic Script & Heart Text",
    description:
      "Make romantic, lovely script text for valentines, captions, and bios. Free Unicode fonts to copy and paste anywhere.",
    h1: "Love Font Generator",
    intro:
      "Sweet, romantic lettering for love notes, valentines, anniversary posts, and dreamy captions. Type your text and copy a lovely script style straight into any app.",
    styles: ["script", "script-bold", "love-parens", "cursive-spaced", "italic-serif", "cursive-underline", "bubble", "bubble-filled"],
    defaultText: "love you",
    about: [
      {
        heading: "Romance in plain text",
        body: "Flowing [script](/font-generator/cursive) reads as warm and personal, which is why it suits love notes and anniversary captions. The styles here stay copyable as plain Unicode, so they work in DMs, bios, and graphics alike.",
      },
    ],
    faq: [
      {
        q: "Which style feels most romantic?",
        a: "The flowing script and spaced cursive read as soft and heartfelt. Add a heart symbol for a finishing touch.",
      },
      {
        q: "Will it work on Instagram and WhatsApp?",
        a: "Yes — it's plain Unicode, so it pastes into bios, captions, and messages on both.",
      },
    ],
  },
  {
    slug: "angelic",
    keyword: "angelic font",
    title: "Angelic Font Generator – Soft Heavenly Script Text",
    description:
      "Turn text into soft, heavenly angelic styles. Free Unicode fonts to copy and paste into bios, captions, and aesthetic posts.",
    h1: "Angelic Font Generator",
    intro:
      "Light, ethereal lettering with a heavenly feel — airy script and delicate styles for dreamy bios and aesthetic captions. Type your text and copy your favorite.",
    styles: ["script", "cursive-spaced", "italic-serif", "small-caps-spaced", "double-struck", "outline-spaced", "tiny-spaced", "bubble"],
    defaultText: "halo",
    about: [
      {
        heading: "Soft, airy, a little divine",
        body: "Angelic styles favor light strokes and open spacing for a calm, heavenly mood. They pair well with star and sparkle [symbols](/symbols) and suit soft, [aesthetic](/font-generator/aesthetic) profiles.",
      },
    ],
    faq: [
      {
        q: "What makes text feel angelic?",
        a: "Light, spaced-out script and delicate symbols. Avoid heavy bold or glitch styles, which break the airy feel.",
      },
      {
        q: "Does it work in a bio?",
        a: "Yes — the output is plain Unicode and pastes into bios and captions on any platform.",
      },
    ],
  },
  {
    slug: "animalistic",
    keyword: "animalistic font",
    title: "Animalistic Font Generator – Wild, Clawed & Feral Text",
    description:
      "Generate wild, feral-looking text with a clawed, untamed edge. Free Unicode fonts to copy and paste for gaming and fierce captions.",
    h1: "Animalistic Font Generator",
    intro:
      "Wild, untamed lettering with a feral, clawed feel for gaming tags, fierce captions, and creature posts. Type your text and copy a savage style.",
    styles: ["weird", "zalgo-soft", "cursed-gothic", "dark-gothic", "tattoo-gothic", "fraktur-bold", "gothic-glitch", "slash-through"],
    defaultText: "feral",
    about: [
      {
        heading: "Untamed by design",
        body: "Animalistic styles distress and sharpen the letters so they feel [scratched](/font-generator/scratchy), clawed, or growled rather than typed. A short, punchy word carries the effect best.",
      },
    ],
    faq: [
      {
        q: "Good for a gaming tag?",
        a: "Yes — though watch for username filters on rarer characters. Pick a cleaner style if a tag won't save.",
      },
      {
        q: "How wild is too wild?",
        a: "If you can't read it at a glance, dial the distortion back. A hint of feral edge beats unreadable chaos.",
      },
    ],
  },
  {
    slug: "dog",
    keyword: "dog font",
    title: "Dog Font Generator – Playful Pet Text Styles",
    description:
      "Make playful, cute text for dog and pet accounts, captions, and bios. Free Unicode fonts to copy and paste.",
    h1: "Dog Font Generator",
    intro:
      "Bouncy, friendly lettering for pet accounts, dog memes, and cute captions. Type your text and copy a playful style straight into your bio or post.",
    styles: ["bubble", "bubble-filled", "bubble-underline", "script", "cursive-spaced", "fullwidth", "squared", "double-struck"],
    defaultText: "good boy",
    about: [
      {
        heading: "Cute and friendly",
        body: "Rounded [bubble](/font-generator/bubble) letters and bouncy scripts read as playful and warm — exactly the vibe for pet content. Pair them with a paw or heart symbol for extra charm.",
      },
    ],
    faq: [
      {
        q: "Best style for a pet account name?",
        a: "Bubble and rounded styles feel friendly and fun. Test in username fields, which sometimes filter rare characters.",
      },
      {
        q: "Does it work in captions?",
        a: "Yes — it's plain Unicode and pastes into captions and bios everywhere.",
      },
    ],
  },
  {
    slug: "food",
    keyword: "food font",
    title: "Food Font Generator – Tasty, Playful Menu Text",
    description:
      "Generate playful, appetizing text for food posts, menus, and recipe captions. Free Unicode fonts to copy and paste.",
    h1: "Food Font Generator",
    intro:
      "Warm, inviting lettering for food blogs, café posts, and recipe captions. Type your text and copy a tasty style for menus, bios, and graphics.",
    styles: ["script", "bold-serif", "bubble", "cursive-spaced", "fullwidth", "small-caps", "double-struck", "bubble-filled"],
    defaultText: "fresh menu",
    about: [
      {
        heading: "Make it look appetizing",
        body: "Food branding mixes friendly [script](/font-generator/cursive) with [bold](/font-generator/bold), readable headers. Use a flowing style for a café name and a bold one for prices or dish names to keep menus clear.",
      },
    ],
    faq: [
      {
        q: "Good for a menu mockup?",
        a: "For a digital draft, yes. For a printed menu, hand the look to your designer so they can set it in a real font.",
      },
      {
        q: "Which style for a recipe caption?",
        a: "A warm script for the title and clean bold for the steps keeps it inviting and easy to read.",
      },
    ],
  },
  {
    slug: "cloud",
    keyword: "cloud fonts",
    title: "Cloud Font Generator – Soft, Dreamy Bubble Text",
    description:
      "Turn text into soft, dreamy cloud-style letters. Free Unicode fonts to copy and paste into aesthetic bios and captions.",
    h1: "Cloud Font Generator",
    intro:
      "Soft, puffy, dreamy lettering for aesthetic bios, soft-grunge captions, and chill posts. Type your text and copy a cloud-soft style anywhere.",
    styles: ["bubble", "bubble-filled", "bubble-underline", "cursive-spaced", "script", "tiny-spaced", "outline-spaced", "double-struck"],
    defaultText: "daydream",
    about: [
      {
        heading: "Light and airy",
        body: "Rounded [bubble](/font-generator/bubble) and softly spaced styles read as gentle and dreamy — the cloudcore [aesthetic](/font-generator/aesthetic). Pair them with cloud or star symbols for a complete soft look.",
      },
    ],
    faq: [
      {
        q: "What makes text look cloudy?",
        a: "Round, puffy bubble letters and open spacing. Avoid sharp or bold styles, which break the soft feel.",
      },
      {
        q: "Does it paste into Instagram?",
        a: "Yes — it's plain Unicode, so it works in bios and captions everywhere.",
      },
    ],
  },
  {
    slug: "cookie",
    keyword: "cookie typeface",
    title: "Cookie Font Generator – Sweet Rounded Script Text",
    description:
      "Make sweet, rounded cookie-style script text for cute bios and food posts. Free Unicode fonts to copy and paste.",
    h1: "Cookie Font Generator",
    intro:
      "Warm, rounded, sweet script lettering for bakery posts, cute bios, and dessert captions. Type your text and copy a cookie-soft style straight into any app.",
    styles: ["script", "script-bold", "cursive-spaced", "bubble", "bubble-filled", "italic-serif", "cursive-underline", "double-struck"],
    defaultText: "sweet treats",
    about: [
      {
        heading: "Sweet and rounded",
        body: "Cookie-style script is soft, friendly, and a little indulgent — perfect for bakeries, dessert blogs, and [cute](/font-generator/cute) branding. Flowing [script](/font-generator/cursive) paired with rounded shapes carries the warmth.",
      },
    ],
    faq: [
      {
        q: "Is this the real Cookie typeface?",
        a: "No — the Cookie font is a licensed typeface. These are the closest soft, rounded Unicode scripts you can copy and paste.",
      },
      {
        q: "Good for a bakery name?",
        a: "Yes for digital previews. For print or a logo, hand the look to a designer for a true vector font.",
      },
    ],
  },
  {
    slug: "gaming",
    keyword: "gaming text",
    title: "Gaming Font Generator – Cool Text for Gamer Tags & Bios",
    description:
      "Generate cool gaming text for usernames, clan tags, and stream titles. Free Unicode fonts to copy and paste into Discord, Twitch, and more.",
    h1: "Gaming Font Generator",
    intro:
      "Sharp, blocky, sci-fi-flavored lettering for gamer tags, clan names, and stream titles. Type your text and copy a style that stands out in Discord, Twitch, and game profiles.",
    styles: ["squared", "squared-spaced", "fullwidth", "double-struck", "leet", "monospace", "sans-bold", "outline-gothic"],
    defaultText: "game over",
    about: [
      {
        heading: "Built to stand out in a lobby",
        body: "Gaming text favors blocky, [squared](/font-generator/square), and sci-fi styles that read clearly at small sizes in a lobby or chat. [Leet-style](/font-generator/leet) swaps add a classic hacker flavor for tags and handles.",
      },
    ],
    faq: [
      {
        q: "Will it work in my gamer tag?",
        a: "Many platforms accept Unicode in display names, but some strip rare characters from login names. Test before committing, and keep a fallback style ready.",
      },
      {
        q: "Best style for a clan tag?",
        a: "Squared and fullwidth styles read clearly and look bold next to teammates' names.",
      },
    ],
  },
  {
    slug: "anime",
    keyword: "anime typeface",
    title: "Anime Font Generator – Japanese-Style & Aesthetic Text",
    description:
      "Make anime and aesthetic text with Japanese-flavored and stylish Unicode fonts. Free, copy and paste, for bios and captions.",
    h1: "Anime Font Generator",
    intro:
      "Stylish, aesthetic lettering with a Japanese-inspired flavor for anime fan bios, edits, and captions. Type your text and copy a cool style straight into any app.",
    styles: ["japanese-style", "fullwidth", "squared", "double-struck", "script", "cursive-spaced", "sans-italic", "small-caps-spaced"],
    defaultText: "senpai",
    about: [
      {
        heading: "The anime aesthetic, in text",
        body: "The look mixes [Japanese-style](/font-generator/japanese) halfwidth letters and wide fullwidth characters with clean, [stylish](/font-generator/stylish) scripts — exactly the vibe of anime fan edits and aesthetic profiles.",
      },
    ],
    faq: [
      {
        q: "Does it write real Japanese?",
        a: "No — these are Latin letters styled to feel Japanese-inspired. For actual Japanese script, use a proper keyboard or translator.",
      },
      {
        q: "Good for an anime fan bio?",
        a: "Yes — it's plain Unicode and pastes into bios and captions everywhere.",
      },
    ],
  },
  {
    slug: "biology",
    keyword: "biology font",
    title: "Biology Font Generator – Clean Scientific Label Text",
    description:
      "Generate clean, scientific-style text for labels, notes, and study aesthetics. Free Unicode fonts to copy and paste.",
    h1: "Biology Font Generator",
    intro:
      "Clean, precise lettering with a scientific, lab-label feel — handy for study notes, diagram labels, and academic aesthetics. Type your text and copy a tidy style.",
    styles: ["monospace", "mono-spaced", "small-caps", "italic-serif", "double-struck", "sans-bold", "manuscript-mono", "superscript"],
    defaultText: "mitosis",
    about: [
      {
        heading: "Precise and legible",
        body: "Scientific text values clarity over flourish. Monospace and [small-caps](/font-generator/small-caps) styles read as neat and technical, and [italics](/font-generator/italic) suit species names and Latin terms the way journals format them.",
      },
    ],
    faq: [
      {
        q: "Why italics for species names?",
        a: "Scientific convention italicizes genus and species (like Homo sapiens). The italic style here mimics that for notes and captions.",
      },
      {
        q: "Can I use superscripts for formulas?",
        a: "Yes — the superscript style covers raised characters useful for simple notation. For full equations, use a dedicated editor.",
      },
    ],
  },
  {
    slug: "cybernetic",
    keyword: "cybernetic font",
    title: "Cybernetic Font Generator – Futuristic Sci-Fi Text",
    description:
      "Turn text into futuristic, cybernetic sci-fi styles. Free Unicode fonts to copy and paste for gaming, tech, and cyberpunk posts.",
    h1: "Cybernetic Font Generator",
    intro:
      "Sharp, futuristic, machine-cool lettering for cyberpunk posts, tech bios, and gaming tags. Type your text and copy a sci-fi style straight into any app.",
    styles: ["squared", "squared-spaced", "fullwidth", "double-struck", "leet", "monospace", "outline-gothic", "sans-zalgo"],
    defaultText: "system",
    about: [
      {
        heading: "Machine-made by feel",
        body: "Cybernetic text leans on [squared](/font-generator/square), technical, and faintly glitched styles to feel engineered rather than handwritten. A little [glitch](/font-generator/glitch) adds a cyberpunk edge without losing legibility.",
      },
    ],
    faq: [
      {
        q: "Best style for a cyberpunk bio?",
        a: "Squared and fullwidth styles read as clean and futuristic; a touch of glitch adds attitude. Keep it readable.",
      },
      {
        q: "Will it work in usernames?",
        a: "Bios accept it freely. Username fields can filter rare characters, so test before saving.",
      },
    ],
  },
  {
    slug: "rock-and-roll",
    keyword: "rock and roll font",
    title: "Rock and Roll Font Generator – Bold Band & Metal Text",
    description:
      "Generate bold, edgy rock and metal band-style text. Free Unicode fonts to copy and paste into bios, logos, and posters.",
    h1: "Rock and Roll Font Generator",
    intro:
      "Loud, bold, rebellious lettering for band logos, gig posters, and music bios. Type your text and copy a rock-and-roll style straight into any app.",
    styles: ["band-logo", "gothic-bold", "blackletter-bold", "dark-gothic", "outline-gothic", "tattoo-gothic", "fraktur-bold", "bold-spaced"],
    defaultText: "encore",
    about: [
      {
        heading: "Turn it up to eleven",
        body: "Rock and metal lettering ranges from spiky [blackletter](/font-generator/blackletter) to bold, distressed logos. The band-logo and heavy [gothic](/font-generator/gothic) styles here capture that loud, rebellious feel for posters and merch mockups.",
      },
    ],
    faq: [
      {
        q: "Good for a band logo?",
        a: "For mockups, yes. For final merch or a printed poster, hand the look to a designer for a vector version.",
      },
      {
        q: "Which style is most metal?",
        a: "Spiky blackletter and the band-logo style read hardest. Keep the name short for maximum impact.",
      },
    ],
  },
  {
    slug: "varsity",
    keyword: "varsity team font",
    title: "Varsity Font Generator – Collegiate Team & Jersey Text",
    description:
      "Make bold collegiate, varsity team-style text for jerseys, bios, and sports posts. Free Unicode fonts to copy and paste.",
    h1: "Varsity Font Generator",
    intro:
      "Bold, blocky collegiate lettering with that classic team-jersey feel. Type your text and copy a varsity style for sports bios, team names, and graphics.",
    styles: ["bold-serif", "small-caps", "small-caps-spaced", "double-struck", "fullwidth", "bold-spaced", "squared", "outline-gothic"],
    defaultText: "champions",
    about: [
      {
        heading: "Classic collegiate look",
        body: "Varsity lettering is [bold](/font-generator/bold), serifed, and built to read across a stadium — the look stitched onto jackets and jerseys. Bold serif and [small-caps](/font-generator/small-caps) styles capture that athletic, all-caps feel.",
      },
    ],
    faq: [
      {
        q: "Good for a jersey mockup?",
        a: "For a digital preview, yes. For actual stitching or print, hand the look to your supplier for a true varsity font.",
      },
      {
        q: "Best style for a team name?",
        a: "Bold serif in all caps reads most collegiate. Add wide spacing for that across-the-back jersey look.",
      },
    ],
  },
  {
    slug: "wavy",
    keyword: "wavy fonts",
    title: "Wavy Font Generator – Flowing, Stretched Text Styles",
    description:
      "Turn text into wavy, flowing, stretched-out styles. Free Unicode fonts to copy and paste into bios, captions, and aesthetic posts.",
    h1: "Wavy Font Generator",
    intro:
      "Loose, flowing, stretched-out lettering for chill, aesthetic, and retro-vibe posts. Type your text and copy a wavy style straight into any app.",
    styles: ["fullwidth", "fullwidth-underline", "spaced", "cursive-spaced", "script", "tiny-spaced", "double-struck", "japanese-style"],
    defaultText: "good vibes",
    about: [
      {
        heading: "Loose and flowing",
        body: "Wide fullwidth letters and open spacing give text a stretched, wavy, laid-back rhythm — popular in [vaporwave](/font-generator/vaporwave) and chill aesthetics. Pair it with the right caption for a relaxed feel.",
      },
    ],
    faq: [
      {
        q: "What makes text look wavy?",
        a: "Wide fullwidth characters and generous spacing create that stretched, flowing rhythm. Flowing script adds extra movement.",
      },
      {
        q: "Does it paste anywhere?",
        a: "Yes — it's plain Unicode and works in bios, captions, and messages.",
      },
    ],
  },
  {
    slug: "scratchy",
    keyword: "scratchy font",
    title: "Scratchy Font Generator – Distressed, Scratched Text",
    description:
      "Generate scratchy, distressed text with a rough, scratched-up edge. Free Unicode fonts to copy and paste for grunge and horror posts.",
    h1: "Scratchy Font Generator",
    intro:
      "Rough, scratched-up lettering with a distressed, grungy edge for horror posts, grunge bios, and edgy captions. Type your text and copy a scratchy style.",
    styles: ["slash-through", "strikethrough", "zalgo-soft", "cursed-gothic", "weird", "double-underline", "gothic-glitch", "dark-gothic"],
    defaultText: "static",
    about: [
      {
        heading: "Distressed by design",
        body: "Scratchy text adds strike marks, scratches, and light distortion to make letters look scraped or damaged. A little goes a long way — keep words short so they stay legible.",
      },
    ],
    faq: [
      {
        q: "How do I get the scratched look?",
        a: "The strike-through and slash styles add scratch marks across letters; light [zalgo](/font-generator/zalgo) adds a damaged texture. Combine sparingly.",
      },
      {
        q: "Does it work in a bio?",
        a: "Yes — it's plain Unicode. Username fields may strip rarer marks, so test there.",
      },
    ],
  },
  {
    slug: "sign",
    keyword: "sign font",
    title: "Sign Font Generator – Bold, Clear Signage Text",
    description:
      "Make bold, clear signage-style text for posters, shop signs, and displays. Free Unicode fonts to copy and paste.",
    h1: "Sign Font Generator",
    intro:
      "Bold, legible lettering built to read from a distance — handy for poster mockups, shop signs, and display text. Type your text and copy a clear style.",
    styles: ["bold-serif", "sans-bold", "fullwidth", "bold-spaced", "small-caps-spaced", "double-struck", "squared", "outline-gothic"],
    defaultText: "open",
    about: [
      {
        heading: "Built to be read fast",
        body: "Good signage is [bold](/font-generator/bold), spaced, and high-contrast so it reads at a glance. Bold serif and wide styles carry that clarity, while spacing keeps short words easy to scan.",
      },
    ],
    faq: [
      {
        q: "Good for a printed sign?",
        a: "For mockups, yes. For final printing, hand the look to your designer for a true display font that scales cleanly.",
      },
      {
        q: "Which style reads best from far away?",
        a: "Bold, wide styles with extra spacing. Avoid script and decorative styles for distance signage.",
      },
    ],
  },
  {
    slug: "playlist",
    keyword: "playlist script",
    title: "Playlist Font Generator – Stylish Script for Music Names",
    description:
      "Generate stylish script text for playlist names, music bios, and cover art. Free Unicode fonts to copy and paste.",
    h1: "Playlist Font Generator",
    intro:
      "Cool, stylish script for playlist titles, music bios, and cover-art mockups. Type your text and copy a script style straight into Spotify descriptions, bios, and posts.",
    styles: ["script", "script-bold", "cursive-spaced", "italic-serif", "bold-italic-serif", "cursive-underline", "sans-italic", "double-struck"],
    defaultText: "late night",
    about: [
      {
        heading: "Set the mood for a playlist",
        body: "A [stylish](/font-generator/stylish) script title gives a playlist personality before a single track plays. Flowing scripts read as moody or romantic; [bold italics](/font-generator/bold-italic) feel energetic. Pick one that matches the vibe.",
      },
    ],
    faq: [
      {
        q: "Will it work in a Spotify playlist name?",
        a: "Most apps accept Unicode in titles and descriptions, but some trim rare characters. Test the name and keep a simpler fallback.",
      },
      {
        q: "Best style for a chill playlist?",
        a: "A soft flowing script sets a relaxed mood. For hype playlists, try bold italic instead.",
      },
    ],
  },
  {
    slug: "logotype",
    keyword: "logotype font",
    title: "Logotype Font Generator – Brand & Logo Text Styles",
    description:
      "Generate clean, distinctive logotype-style text for brand and logo mockups. Free Unicode fonts to copy and paste.",
    h1: "Logotype Font Generator",
    intro:
      "Distinctive lettering for brand names, logo mockups, and wordmarks. Type your name and compare bold, script, and gothic styles to find the right identity.",
    styles: ["band-logo", "bold-serif", "sans-bold", "outline-gothic", "small-caps-spaced", "gothic-bold", "double-struck", "script-bold"],
    defaultText: "brandname",
    about: [
      {
        heading: "Find your wordmark's feel",
        body: "A logotype is your brand name set in a distinctive style. Comparing [bold](/font-generator/bold), [script](/font-generator/cursive), and [gothic](/font-generator/gothic) looks side by side helps you spot which personality fits — clean and corporate, warm and handcrafted, or bold and edgy.",
      },
    ],
    faq: [
      {
        q: "Can I use this as my actual logo?",
        a: "Use it to explore directions, then hand the look you like to a designer. Real logos need vector files and proper licensing — Unicode text won't scale crisply for print.",
      },
      {
        q: "Which style suits a startup?",
        a: "Clean bold sans and spaced small-caps read modern and trustworthy. Script and gothic suit warmer or edgier brands.",
      },
    ],
  },
  {
    slug: "italianate",
    keyword: "italianate font",
    title: "Italianate Font Generator – Elegant Italic & Script Text",
    description:
      "Turn text into elegant, italianate italic and script styles. Free Unicode fonts to copy and paste into bios, captions, and graphics.",
    h1: "Italianate Font Generator",
    intro:
      "Refined, slanted, classically elegant lettering with an Italian flourish. Type your text and copy a graceful italic or script style straight into any app.",
    styles: ["italic-serif", "bold-italic-serif", "sans-italic", "script", "script-bold", "cursive-spaced", "italic-spaced", "small-caps-spaced"],
    defaultText: "bellissimo",
    about: [
      {
        heading: "Classical elegance",
        body: "Italianate lettering leans on graceful slants and refined proportions — the [calligraphic](/font-generator/calligraphy) tradition that gave us [italic](/font-generator/italic) type itself. The italic and script styles here carry that polished, old-world elegance.",
      },
    ],
    faq: [
      {
        q: "What does italianate mean?",
        a: "It describes a refined, Italian-influenced style — here, the elegant italics and scripts that trace back to Renaissance handwriting.",
      },
      {
        q: "Good for menus or invitations?",
        a: "For digital previews, yes. For print, hand the look to a designer for a true italic typeface.",
      },
    ],
  },
  {
    slug: "types-of-bold",
    keyword: "types of bold",
    title: "Types of Bold Font Generator – Every Bold Text Style",
    description:
      "Compare every type of bold text — serif, sans, italic, gothic, spaced, and more. Free Unicode bold fonts to copy and paste.",
    h1: "Types of Bold Generator",
    intro:
      "See your text in every kind of bold at once — serif, sans, italic, gothic, spaced, and outlined. Type once and copy whichever bold style fits.",
    styles: ["bold-serif", "sans-bold", "bold-italic-serif", "sans-bold-italic", "bold-spaced", "gothic-bold", "double-struck", "outline-gothic", "bold-underline", "bold-strike", "fraktur-bold", "stacked-bold-strike"],
    defaultText: "bold",
    about: [
      {
        heading: "Not all bold is the same",
        body: "Bold means different things in different families: a heavy serif feels formal, a bold sans feels modern, a [bold italic](/font-generator/bold-italic) feels energetic, and bold [gothic](/font-generator/gothic) feels dramatic. Comparing them side by side makes it easy to pick the right weight for the job.",
      },
    ],
    faq: [
      {
        q: "How do these differ from regular bold?",
        a: "Phone and app bold toggles aren't always available; these are dedicated bold Unicode characters, so the boldness survives copy-paste into places with no formatting.",
      },
      {
        q: "Which bold works on Instagram?",
        a: "Bold serif and bold sans paste cleanly into bios and captions. Test in username fields, which can be stricter.",
      },
    ],
  },
  {
    slug: "1940s",
    keyword: "1940s fonts",
    title: "1940s Font Generator – Vintage Wartime-Era Text",
    description:
      "Generate vintage 1940s-style text with a wartime-era, classic feel. Free Unicode fonts to copy and paste into retro posts and graphics.",
    h1: "1940s Font Generator",
    intro:
      "Classic, vintage lettering with that 1940s newspaper-and-poster feel. Type your text and copy a retro style for vintage posts, scrapbooks, and graphics.",
    styles: ["newspaper-gothic", "monospace", "small-caps", "bold-serif", "manuscript-mono", "small-caps-spaced", "double-struck", "italic-serif"],
    defaultText: "victory",
    about: [
      {
        heading: "The look of the 1940s",
        body: "Forties typography mixed sturdy newspaper gothics, [typewriter](/font-generator/typewriter) monospace, and bold serif headlines. These styles capture that wartime-era, print-shop feel for vintage projects.",
      },
    ],
    faq: [
      {
        q: "Are these authentic 1940s fonts?",
        a: "They're Unicode styles that evoke the era's printing — not scans of period typefaces. They're great for capturing the vibe in copy-paste text.",
      },
      {
        q: "Good for a vintage scrapbook caption?",
        a: "Yes — the monospace and newspaper styles read as suitably old-fashioned and paste anywhere.",
      },
    ],
  },
  {
    slug: "1920s",
    keyword: "1920s fonts",
    title: "1920s Font Generator – Art Deco & Gatsby-Era Text",
    description:
      "Make vintage 1920s, art-deco and Gatsby-era style text. Free Unicode fonts to copy and paste into retro and party graphics.",
    h1: "1920s Font Generator",
    intro:
      "Glamorous, art-deco lettering with that roaring-twenties, Gatsby-party feel. Type your text and copy a vintage style for invitations, posts, and graphics.",
    styles: ["small-caps-spaced", "outline-spaced", "bold-serif", "double-struck", "small-caps", "spaced", "italic-serif", "decorative-gothic"],
    defaultText: "the roaring twenties",
    about: [
      {
        heading: "Art deco glamour",
        body: "The 1920s favored tall, elegant capitals with wide spacing and geometric flourish — the art-deco style of theater marquees and Gatsby-era invitations. Spaced caps capture that glamorous symmetry.",
      },
    ],
    faq: [
      {
        q: "Best style for a Gatsby party invite?",
        a: "Spaced [small-caps](/font-generator/small-caps) and outlined caps read most deco. Pair them with gold-and-black graphics for the full effect.",
      },
      {
        q: "Are these real deco fonts?",
        a: "They're Unicode styles inspired by the era. For a polished print invite, hand the look to a designer.",
      },
    ],
  },
  {
    slug: "2000s",
    keyword: "2000s font",
    title: "2000s Font Generator – Y2K & Early-Internet Text",
    description:
      "Generate nostalgic Y2K, 2000s-style text with an early-internet feel. Free Unicode fonts to copy and paste into retro posts.",
    h1: "2000s Font Generator",
    intro:
      "Nostalgic Y2K lettering with that early-internet, MySpace-era energy. Type your text and copy a retro 2000s style straight into bios, captions, and edits.",
    styles: ["fullwidth", "leet", "double-struck", "squared", "bubble", "zalgo-soft", "monospace", "sans-bold-italic"],
    defaultText: "y2k",
    about: [
      {
        heading: "Early-internet nostalgia",
        body: "The 2000s web ran on fullwidth '[aesthetic](/font-generator/aesthetic)' text, [leetspeak](/font-generator/leet) handles, and glittery profile fonts. These styles bring back that MySpace-and-AIM energy for nostalgic posts.",
      },
    ],
    faq: [
      {
        q: "What's the most Y2K style?",
        a: "Fullwidth 'ａｅｓｔｈｅｔｉｃ' text and leetspeak are the most recognizable. Bubble and glitch styles add to the throwback feel.",
      },
      {
        q: "Does it paste into bios?",
        a: "Yes — it's plain Unicode and works in bios and captions everywhere.",
      },
    ],
  },
  {
    slug: "new-romance",
    keyword: "new romance font",
    title: "New Romance Font Generator – Soft Modern Script Text",
    description:
      "Turn text into soft, modern romantic script styles. Free Unicode fonts to copy and paste into bios, captions, and graphics.",
    h1: "New Romance Font Generator",
    intro:
      "Soft, modern, romantic lettering with a contemporary twist — flowing scripts and gentle italics for dreamy bios and captions. Type your text and copy a style you love.",
    styles: ["script", "script-bold", "cursive-spaced", "italic-serif", "cursive-underline", "sans-italic", "love-parens", "bubble"],
    defaultText: "sweet nothing",
    about: [
      {
        heading: "Modern romance, softly styled",
        body: "New romantic styles keep the warmth of classic [script](/font-generator/cursive) but feel cleaner and more contemporary — the look of modern wedding stationery and soft aesthetic profiles. For the heart-and-valentines version, see the [love font generator](/font-generator/love).",
      },
    ],
    faq: [
      {
        q: "How is this different from the love generator?",
        a: "It leans cleaner and more modern, with gentle italics alongside script. Try both and pick the mood that fits.",
      },
      {
        q: "Good for wedding mockups?",
        a: "For digital previews, yes. For printed stationery, hand the look to your designer for a real script font.",
      },
    ],
  },
  {
    slug: "monopoly",
    keyword: "monopoly font",
    title: "Monopoly Font Generator – Bold Vintage Board-Game Text",
    description:
      "Make bold, vintage board-game style title text. Free Unicode fonts to copy and paste into game nights, posts, and graphics.",
    h1: "Monopoly Font Generator",
    intro:
      "Bold, vintage, board-game title lettering with that classic deco-poster feel. Type your text and copy a retro style for game-night graphics and fun captions.",
    styles: ["bold-serif", "small-caps-spaced", "outline-spaced", "double-struck", "bold-spaced", "decorative-gothic", "small-caps", "fullwidth"],
    defaultText: "go directly",
    about: [
      {
        heading: "Classic board-game branding",
        body: "Vintage board-game titles use [bold](/font-generator/bold), deco-influenced caps with playful flourish. The bold serif and spaced-caps styles here capture that nostalgic game-box feel.",
      },
    ],
    faq: [
      {
        q: "Is this the official board-game font?",
        a: "No — that's a custom licensed typeface. These are the closest bold, vintage Unicode styles for copy-paste.",
      },
      {
        q: "Good for a game-night invite?",
        a: "Yes for digital graphics. For print, hand the look to a designer for a true display font.",
      },
    ],
  },
  {
    slug: "newborn",
    keyword: "newborn font",
    title: "Newborn Font Generator – Soft Baby Announcement Text",
    description:
      "Generate soft, gentle text for baby announcements, nursery decor, and cute captions. Free Unicode fonts to copy and paste.",
    h1: "Newborn Font Generator",
    intro:
      "Soft, sweet, gentle lettering for baby announcements, nursery mockups, and tender captions. Type your text and copy a delicate style straight into any app.",
    styles: ["script", "cursive-spaced", "bubble", "bubble-filled", "italic-serif", "cursive-underline", "tiny-spaced", "double-struck"],
    defaultText: "welcome baby",
    about: [
      {
        heading: "Gentle and sweet",
        body: "Newborn announcements call for soft [script](/font-generator/cursive) and rounded shapes that feel tender and warm. Pair a flowing style with a heart or star for a gentle, celebratory touch.",
      },
    ],
    faq: [
      {
        q: "Good for a birth announcement?",
        a: "For digital cards and social posts, yes. For printed keepsakes, hand the look to a designer for a true font.",
      },
      {
        q: "Which style is softest?",
        a: "Flowing script and rounded bubble letters read as the gentlest. Avoid bold or gothic styles here.",
      },
    ],
  },
  {
    slug: "thank-you",
    keyword: "thank you in fonts",
    title: "Thank You Font Generator – Stylish Thank-You Text",
    description:
      "Write 'thank you' in dozens of stylish fonts — script, bold, gothic, and more. Free Unicode fonts to copy and paste.",
    h1: "Thank You Font Generator",
    intro:
      "See 'thank you' — or any message — in dozens of stylish fonts at once. Type your text and copy the perfect grateful style for cards, captions, and replies.",
    styles: ["script", "script-bold", "cursive-spaced", "italic-serif", "bold-serif", "bubble", "fraktur", "small-caps-spaced", "cursive-underline", "double-struck"],
    defaultText: "thank you",
    about: [
      {
        heading: "Say it with style",
        body: "A simple 'thank you' lands warmer in a flowing [script](/font-generator/cursive) or a [bold](/font-generator/bold), heartfelt style. Compare the variants and copy the one that matches the message — a thank-you card, a reply, or a caption.",
      },
    ],
    faq: [
      {
        q: "Which style is best for a thank-you card?",
        a: "A flowing script reads as warm and personal. For a bold statement of thanks, try the bold serif.",
      },
      {
        q: "Does it work in messages?",
        a: "Yes — it's plain Unicode and pastes into DMs, comments, and captions everywhere.",
      },
    ],
  },
  {
    slug: "calligraphy-capital-letters",
    keyword: "calligraphy capital letters",
    title: "Calligraphy Capital Letters – Fancy A–Z Caps to Copy",
    description:
      "Browse and copy fancy calligraphy capital letters, A–Z. Free Unicode script capitals for monograms, initials, bios, and invitations.",
    h1: "Calligraphy Capital Letters",
    intro:
      "Type a word for elegant calligraphy, or copy single ornate capitals straight from the A–Z chart below — perfect for monograms, initials, and fancy first letters.",
    styles: ["script", "script-bold", "italic-serif", "bold-italic-serif", "cursive-spaced", "medieval-script", "royal-gothic", "decorative-gothic", "fraktur", "cursive-underline"],
    defaultText: "Beautiful",
    alphabet: "letters",
    about: [
      {
        heading: "Ornate capitals, one at a time",
        body: "[Calligraphy](/font-generator/calligraphy) shines in capital letters — the swooping initial that opens a name or monogram. The A–Z chart below maps each letter to an elegant [script](/font-generator/cursive) capital you can copy on its own, without retyping a whole word.",
      },
      {
        heading: "Capitals vs. a real pen",
        body: "These are Unicode characters that imitate calligraphic capitals, not ink on paper. They're ideal for digital monograms, bios, and previews. For a printed invitation or a drawn monogram, hand the look to a calligrapher or designer.",
      },
    ],
    faq: [
      {
        q: "How do I copy a single capital letter?",
        a: "Use the A–Z chart on this page — each uppercase tile is one calligraphy capital you can select and copy. For full words, type into the generator above.",
      },
      {
        q: "Why do some capitals look unusual?",
        a: "A few script capitals (especially I, J, S, and T) are highly stylized in the Unicode script alphabets, so they can look different from what you expect. Try another style if a letter reads poorly.",
      },
    ],
  },
  {
    slug: "modern-calligraphy",
    keyword: "modern calligraphy alphabet",
    title: "Modern Calligraphy Generator – Clean Script Alphabet",
    description:
      "Turn text into modern calligraphy and browse the clean script alphabet A–Z. Free Unicode fonts to copy and paste.",
    h1: "Modern Calligraphy Generator",
    intro:
      "Type a word for clean, contemporary calligraphy, or copy single letters from the A–Z alphabet below. Modern script — flowing but uncluttered — for bios, captions, and mockups.",
    styles: ["script", "script-bold", "italic-serif", "cursive-spaced", "cursive-underline", "sans-italic", "bold-italic-serif", "cursive-bold-spaced"],
    defaultText: "wander",
    alphabet: "letters",
    about: [
      {
        heading: "Calligraphy, minus the fuss",
        body: "Modern [calligraphy](/font-generator/calligraphy) keeps the flow of traditional [script](/font-generator/cursive) but drops the heavy ornament for a cleaner, contemporary look — the style filling today's wedding signs, prints, and brand lettering. The A–Z chart lets you copy single letters for monograms and initials.",
      },
    ],
    faq: [
      {
        q: "How is modern calligraphy different from classic?",
        a: "Modern calligraphy is looser and less ornate — more relaxed handwriting than formal copperplate. The styles here lean clean and contemporary.",
      },
      {
        q: "Can I copy just one letter?",
        a: "Yes — use the A–Z chart on this page to copy a single script letter. For words, type into the generator above.",
      },
    ],
  },
  {
    slug: "handwriting-styles",
    keyword: "different kinds of handwriting",
    title: "Handwriting Font Generator – Different Handwriting Styles",
    description:
      "See your text in different kinds of handwriting — cursive, script, italic, and more. Free Unicode fonts to copy and paste.",
    h1: "Handwriting Styles Generator",
    intro:
      "Compare your text across different kinds of handwriting — flowing cursive, neat script, slanted italic, and more. Type once and copy the penmanship style that fits.",
    styles: ["script", "script-bold", "cursive-spaced", "cursive-bold-spaced", "italic-serif", "sans-italic", "cursive-underline", "medieval-script", "italic-spaced", "bold-italic-serif"],
    defaultText: "handwritten",
    about: [
      {
        heading: "Many hands, one tool",
        body: "Handwriting varies enormously — formal copperplate, casual [cursive](/font-generator/cursive), sharp [italic](/font-generator/italic), looped print. These Unicode styles approximate that range so you can compare different kinds of penmanship and copy the one that suits your note, bio, or caption.",
      },
    ],
    faq: [
      {
        q: "Are these real handwriting fonts?",
        a: "They're Unicode script and italic alphabets that imitate handwriting, not scanned penmanship. That's what lets them copy-paste as plain text anywhere.",
      },
      {
        q: "Which style looks most like real cursive?",
        a: "The flowing script styles read closest to connected cursive. Italic styles feel more like neat, slanted print.",
      },
    ],
  },
  {
    slug: "facebook-bold-text",
    keyword: "facebook bold text generator",
    title: "Facebook Bold Text Generator – Bold Posts & Comments",
    description:
      "Make bold text for Facebook posts, comments, and your bio. Facebook has no bold button — this generator creates Unicode bold you can paste straight in.",
    h1: "Facebook Bold Text Generator",
    intro:
      "Facebook has no bold button, so type your text here and copy a bold Unicode version that pastes straight into posts, comments, Marketplace listings, and your bio. No formatting tools needed.",
    styles: ["sans-bold", "bold-serif", "sans-bold-italic", "bold-italic-serif", "bold-spaced", "gothic-bold", "double-struck", "bold-underline"],
    defaultText: "important update",
    about: [
      {
        heading: "Why Facebook has no bold button",
        body: "Facebook's post and comment boxes accept plain text only — there's no built-in formatting toolbar. The workaround is Unicode: each bold letter here is its own character, so the boldness travels with the text when you paste it into a status, comment, or listing.",
      },
      {
        heading: "Where bold text works on Facebook",
        body: "Bold pastes cleanly into posts, comments, Marketplace titles and descriptions, event details, and your intro/bio. Group posts and page updates work too. Use it for headlines and key points — a whole bold post is harder to read. Posting on LinkedIn instead? Use the [LinkedIn bold text generator](/font-generator/linkedin-bold-text). For weight with a slant, try [bold italic](/font-generator/bold-italic).",
      },
    ],
    faq: [
      {
        q: "How do I bold text on Facebook?",
        a: "Type your text above, tap a bold style to copy it, then paste it into your Facebook post, comment, or bio. Facebook keeps the bold characters because they're Unicode, not formatting.",
      },
      {
        q: "Will bold text work in Facebook comments?",
        a: "Yes — comments accept the same Unicode characters as posts, so bold pastes in fine. Some very old app versions may render it plainly.",
      },
      {
        q: "Is it safe for my account?",
        a: "Yes — you're just pasting standard Unicode characters, the same kind used in emoji and accented letters. Nothing is added to your account.",
      },
    ],
  },
  {
    slug: "linkedin-bold-text",
    keyword: "linkedin bold text generator",
    title: "LinkedIn Bold Text Generator – Bold Posts, Headlines & Bio",
    description:
      "Create bold text for LinkedIn posts, headlines, and your About section. LinkedIn has no formatting button — paste in Unicode bold to make key points stand out.",
    h1: "LinkedIn Bold Text Generator",
    intro:
      "LinkedIn offers no bold formatting, so type your text here and copy a professional bold Unicode version to paste into posts, your headline, About section, and experience entries. Make key points stand out in the feed.",
    styles: ["sans-bold", "bold-serif", "sans-bold-italic", "bold-italic-serif", "small-caps", "bold-spaced", "double-struck", "bold-underline"],
    defaultText: "now hiring",
    about: [
      {
        heading: "Bold that survives the LinkedIn editor",
        body: "LinkedIn's post composer and profile fields strip rich formatting, so a normal bold button won't help. Unicode bold sidesteps that — the characters themselves are bold, so they keep their weight when pasted into the feed, your headline, or your About section.",
      },
      {
        heading: "Use it sparingly and professionally",
        body: "Bold works best on hooks, section labels, and one or two key phrases per post. Bolding entire paragraphs reads as shouting and can hurt readability. A clean bold sans usually looks most professional in a business feed. For Facebook, use the [Facebook bold text generator](/font-generator/facebook-bold-text); for both weight and a slant, see [bold italic](/font-generator/bold-italic).",
      },
    ],
    faq: [
      {
        q: "How do I make bold text on LinkedIn?",
        a: "Type your text above, copy a bold style, and paste it into your LinkedIn post, headline, or About section. The bold sticks because it's Unicode characters, not formatting LinkedIn can strip.",
      },
      {
        q: "Does bold text affect LinkedIn search or accessibility?",
        a: "Screen readers can struggle with Unicode bold, and search may treat the characters differently from plain letters. Use it for emphasis on short phrases, and keep your name and core keywords in normal text.",
      },
      {
        q: "Will it work in my headline and About section?",
        a: "Yes — both accept Unicode, so bold pastes in. The headline has a character limit, and bold characters count the same as normal ones.",
      },
    ],
  },
  {
    slug: "bold-italic",
    keyword: "bold italic text generator",
    title: "Bold Italic Text Generator – Bold + Slanted Unicode Text",
    description:
      "Generate bold italic text that's both heavy and slanted in one style. Free Unicode bold italics to copy and paste into Instagram, Facebook, LinkedIn, and more.",
    h1: "Bold Italic Text Generator",
    intro:
      "Get text that's bold and italic at once — heavy strokes with a confident slant. Type your text and copy a bold italic style that pastes anywhere, no formatting button required.",
    styles: ["bold-italic-serif", "sans-bold-italic", "italic-serif", "sans-italic", "bold-serif", "italic-spaced", "italic-underline", "script-bold"],
    defaultText: "stand out",
    about: [
      {
        heading: "Bold and italic in a single style",
        body: "Most apps make you choose one or the other. Unicode includes dedicated bold-italic alphabets, so each character carries both the heavy weight and the slant at the same time — and it stays as copyable plain text. Want just one? Use the [bold text generator](/font-generator/bold-text-generator) or the [italic generator](/font-generator/italic).",
      },
      {
        heading: "Where bold italic works",
        body: "It pastes into Instagram bios and captions, Facebook and LinkedIn posts, Discord, and most messaging apps. Use it for emphasis with attitude — a tagline, a quote, or a standout phrase.",
      },
    ],
    faq: [
      {
        q: "How is this different from regular bold or italic?",
        a: "Plain bold is heavy and upright; plain italic is light and slanted. Bold italic combines both in one character, so your text is simultaneously strong and angled.",
      },
      {
        q: "Does bold italic paste everywhere?",
        a: "Almost — it's standard Unicode, so it works in most apps. Username fields sometimes filter these characters, so test before saving a profile name.",
      },
    ],
  },
  {
    slug: "fancy-letters",
    keyword: "fancy letters",
    title: "Fancy Letters Generator – Fancy A–Z Alphabet to Copy & Paste",
    description:
      "Turn text into fancy letters and browse the full A–Z alphabet in dozens of decorative Unicode styles to copy and paste. Free, instant, no sign-up.",
    h1: "Fancy Letters Generator",
    intro:
      "Type a word for fancy lettering, or copy single decorative letters straight from the A–Z alphabet below. [Script](/font-generator/cursive), [gothic](/font-generator/gothic), outline, and [bold](/font-generator/bold) styles — all plain Unicode, so they paste into bios, captions, and usernames.",
    styles: ["script", "script-bold", "fraktur", "double-struck", "italic-serif", "bold-serif", "small-caps", "outline-gothic", "cursive-spaced", "decorative-gothic", "royal-gothic", "bubble"],
    defaultText: "Fancy",
    alphabet: "letters",
    about: [
      {
        heading: "Fancy letters, one at a time",
        body: "Fancy lettering is often about a single standout character — a decorative initial, a monogram, a stylish first letter. The A–Z chart below maps every letter to a fancy form you can copy on its own, without retyping a whole word. Uppercase and lowercase are shown separately because decorative styles draw them differently.",
      },
      {
        heading: "These are characters, not a font file",
        body: "Each fancy letter is a real Unicode character that looks decorative, not an installed typeface — which is exactly why it survives copy-paste into apps with no font controls. For print or a logo, hand the look to a designer who can set it in a true vector font.",
      },
    ],
    faq: [
      {
        q: "How do I copy a single fancy letter?",
        a: "Use the A–Z chart on this page — each tile is one decorative character you can select and copy on its own. For whole words, type into the generator at the top.",
      },
      {
        q: "Why do some fancy letters look like boxes?",
        a: "The viewer's device is missing a font that covers those characters. Pick a different style and it should display correctly for everyone.",
      },
      {
        q: "Will fancy letters work in my Instagram or Discord name?",
        a: "Bios and messages accept the full Unicode range. Username fields are stricter — if a decorated letter won't save, choose a style closer to standard letters.",
      },
    ],
  },
  {
    slug: "fancy-writing",
    keyword: "fancy writing",
    title: "Fancy Writing Generator – Elegant Script & Handwriting Text",
    description:
      "Convert plain text into fancy writing — elegant script, cursive, and decorative handwriting styles you can copy and paste. Free and instant.",
    h1: "Fancy Writing Generator",
    intro:
      "Turn anything you type into fancy writing — flowing script, elegant [cursive](/font-generator/cursive), and ornate [handwriting](/font-generator/handwriting). Copy a style and paste it into bios, captions, [signatures](/font-generator/signature), and invitations, no app needed.",
    styles: ["script", "script-bold", "cursive-spaced", "cursive-bold-spaced", "italic-serif", "bold-italic-serif", "cursive-underline", "medieval-script", "royal-gothic", "decorative-gothic", "ye-olde", "sans-italic"],
    defaultText: "fancy writing",
    about: [
      {
        heading: "What makes writing look fancy",
        body: "Fancy writing leans on flow and ornament — connected script, graceful slants, and decorative flourishes that read as handwritten rather than typed. The styles here approximate that range so you can match the mood, from soft and romantic to ornate and formal.",
      },
      {
        heading: "Where fancy writing works best",
        body: "Script and handwriting styles read as elegant and personal, so they suit Instagram bios and captions, signatures, quote graphics, and wedding or event mockups. Pair a fancy style with plain text so longer passages stay readable.",
      },
    ],
    faq: [
      {
        q: "Is this real handwriting?",
        a: "No — these are Unicode script and cursive alphabets that imitate handwriting, mapped one-to-one from your input. That's what lets them copy-paste as plain text anywhere.",
      },
      {
        q: "Can I use fancy writing for a signature?",
        a: "For a digital signature look in bios or graphics, yes. For a legal or printed signature, you'll still need a real signature or a designer's vector lettering.",
      },
      {
        q: "Why do some letters look like boxes?",
        a: "The viewer's device lacks a font covering those characters. Pick a different style and it should display correctly.",
      },
    ],
  },
  {
    slug: "tiny-text",
    keyword: "tiny text generator",
    title: "Tiny Text Generator – Small Superscript & Subscript Text",
    description:
      "Make tiny text with small superscript, subscript, and small-caps Unicode characters you can copy and paste into bios, captions, and comments. Free and instant.",
    h1: "Tiny Text Generator",
    intro:
      "Shrink your text into tiny Unicode letters — small superscript, subscript-style, and miniature caps. Copy a tiny style and paste it into bios, captions, comments, and footnotes, no app needed.",
    styles: ["superscript", "tiny-spaced", "small-caps", "small-caps-spaced", "mono-spaced", "spaced"],
    defaultText: "tiny text",
    about: [
      {
        heading: "How tiny text works",
        body: "There's no real shrink button — instead, Unicode includes small superscript and subscript letters plus miniature small-caps. We swap your characters for those smaller codepoints, so the result stays as plain, copyable text that pastes anywhere.",
      },
      {
        heading: "Where tiny text fits",
        body: "Tiny styles read as subtle and decorative, so they suit aesthetic bios, footnote-style captions, hashtags, and understated usernames. Note that not every letter has a small form in Unicode, so a few characters may fall back to normal size.",
      },
    ],
    faq: [
      {
        q: "Why are some tiny letters bigger than others?",
        a: "Unicode is missing small versions of a few letters (q and some capitals are common gaps), so those fall back to normal size. Try another tiny style if a letter looks off.",
      },
      {
        q: "Does tiny text work on Instagram and Discord?",
        a: "Yes — it's plain Unicode, so it pastes into bios, captions, and messages. Username fields can be stricter, so test before saving.",
      },
      {
        q: "Is this the same as small caps?",
        a: "[Small caps](/font-generator/small-caps) shrinks lowercase into mini capitals; tiny text uses raised [superscript](/font-generator/superscript) and subscript characters that sit even smaller. Both are offered here — pick the look you prefer.",
      },
    ],
  },
  {
    slug: "brat",
    keyword: "brat text generator",
    title: "Brat Text Generator – Lowercase Minimal Brat-Style Text",
    description:
      "Style text in the minimal, lowercase brat aesthetic — plain, blunt, and all-lowercase. Copy and paste Unicode styles for captions, bios, and edits.",
    h1: "Brat Text Generator",
    intro:
      "Channel the stripped-back brat aesthetic — plain, blunt, all-lowercase lettering for captions, edits, and bios. Type your text and copy a minimal style straight into any app.",
    styles: ["mono-spaced", "monospace", "sans-bold", "spaced", "fullwidth", "small-caps", "tiny-spaced", "squared"],
    defaultText: "brat",
    about: [
      {
        heading: "The brat look, in text",
        body: "The brat aesthetic is deliberately plain — lowercase, blunt, and unfussy, the opposite of decorative fonts. The minimal [monospace](/font-generator/typewriter) and clean styles here capture that stripped-back energy for captions and edits.",
      },
      {
        heading: "Getting the full effect",
        body: "The signature brat treatment also includes a flat lime-green background and a soft blur — those are graphic effects you add in a photo or design editor, not text characters. Use this generator for the lowercase, minimal text and layer the color and blur on top.",
      },
    ],
    faq: [
      {
        q: "Can this make the lime-green blurred brat look?",
        a: "Not the color or blur — those are image effects you apply in an editor. This tool handles the minimal, lowercase brat-style text you place on top.",
      },
      {
        q: "Why is brat text all lowercase?",
        a: "The aesthetic is intentionally understated and anti-glamorous, so lowercase and plain styling are part of the look. Keep it simple for the most on-brand result.",
      },
      {
        q: "Does it paste into Instagram and TikTok?",
        a: "Yes — the styles are plain Unicode, so they paste into bios, captions, and comments everywhere.",
      },
    ],
  },
];

export const PAGE_INDEX_DESCRIPTION =
  "Free Unicode font generators: cursive, bold, gothic, bubble, glitch, small caps, upside down, and more. Type, copy, paste — works on Instagram, TikTok, Discord, Twitter, and Facebook.";

export function getPage(slug: string): PageConfig | undefined {
  return PAGES.find((p) => p.slug === slug);
}

/* ------------------------------------------------------------------ */
/* Topical categories — power contextual internal linking and the     */
/* grouped index. Every generator slug belongs to exactly one group.  */
/* ------------------------------------------------------------------ */

export type Category = {
  id: string;
  title: string;
  intro: string;
  slugs: string[];
};

export const CATEGORIES: Category[] = [
  {
    id: "old-english",
    title: "Old English & Gothic",
    intro:
      "Blackletter, fraktur, and medieval lettering — the dense, angular gothic styles this site is named for. Great for tattoos, logos, band names, and Old English words.",
    slugs: [
      "old-english", "gothic", "blackletter", "fraktur", "medieval",
      "old-english-letters", "old-english-word", "old-english-numbers",
      "old-english-tattoo", "old-english-copy-paste", "old-english-ig",
      "blackletter-copy-paste", "gothic-letters", "gothic-printing",
      "modern-gothic", "small-gothic", "old-cursive", "ye-old-english",
      "tattoo", "gangster",
    ],
  },
  {
    id: "script",
    title: "Script, Cursive & Calligraphy",
    intro:
      "Flowing, hand-lettered styles — cursive, calligraphy, italics, and signatures for bios, captions, invitations, and anything that wants an elegant, personal touch.",
    slugs: [
      "cursive", "calligraphy", "italic", "italianate", "signature",
      "handwriting", "handwriting-styles", "fancy-writing",
      "calligraphy-capital-letters", "modern-calligraphy", "new-romance",
      "playlist",
    ],
  },
  {
    id: "cute",
    title: "Cute & Aesthetic",
    intro:
      "Soft, playful, and aesthetic styles — bubble letters, vaporwave, and themed looks for cute bios, dreamy captions, and pretty profiles.",
    slugs: [
      "cute", "aesthetic", "vaporwave", "bubble", "princess", "love",
      "angelic", "cloud", "cookie", "dog", "food", "newborn", "thank-you",
    ],
  },
  {
    id: "horror",
    title: "Horror, Cursed & Glitch",
    intro:
      "Creepy, distorted, and unsettling styles — zalgo, glitch, and cursed text for horror posts, Halloween captions, and edgy usernames.",
    slugs: [
      "creepy", "cursed", "zalgo", "glitch", "weird", "distorted-text",
      "satanic", "freaky", "slasher", "monster", "animalistic", "scratchy",
    ],
  },
  {
    id: "gaming",
    title: "Gaming & Internet",
    intro:
      "Tags, handles, and themed styles for games and online culture — Fortnite, Minecraft, Roblox, leetspeak, and fan-favorite franchises.",
    slugs: [
      "gaming", "fortnite", "sweaty-fortnite", "minecraft", "roblox",
      "leet", "graffiti", "cybernetic", "anime", "final-fantasy",
      "squid-game", "hunger-games", "brat", "2000s",
    ],
  },
  {
    id: "social",
    title: "Social Media Fonts",
    intro:
      "Styled text built for each platform — Instagram, TikTok, Discord, Facebook, Twitter/X, and LinkedIn bios, captions, and posts.",
    slugs: [
      "instagram", "ig-font", "tiktok", "discord", "discord-font",
      "facebook", "facebook-bold-text", "twitter", "linkedin",
      "linkedin-bold-text",
    ],
  },
  {
    id: "bold",
    title: "Bold, Big & Emphasis",
    intro:
      "Heavy, attention-grabbing styles — bold, bold italic, underline, and big display text for headlines, signs, and anything that needs to stand out.",
    slugs: [
      "bold", "bold-text-generator", "bold-italic", "types-of-bold", "big",
      "underline", "strikethrough", "sign", "varsity", "logotype",
      "rock-and-roll",
    ],
  },
  {
    id: "tiny",
    title: "Small & Tiny Text",
    intro:
      "Miniature styles — small caps, tiny superscript, and subscript characters for subtle bios, footnotes, and understated captions.",
    slugs: ["small", "tiny-text", "small-caps", "superscript"],
  },
  {
    id: "effects",
    title: "Cool Effects & Transforms",
    intro:
      "Fun text transformers — upside down, mirrored, reversed, mocking case, and the all-purpose cool, fancy, and stylish font generators.",
    slugs: [
      "cool", "cool-text", "cool-letters", "fancy", "fancy-letters",
      "stylish", "fun", "fonts-copy-and-paste", "font-changer",
      "font-converter", "upside-down", "reverse", "mirror", "mocking-text",
      "square", "typewriter", "ransom-note", "wavy", "hacked", "japanese",
    ],
  },
  {
    id: "themed",
    title: "Vintage & Themed",
    intro:
      "Era and pop-culture looks — vintage decade styles plus title fonts inspired by film, games, and classic branding.",
    slugs: ["1920s", "1940s", "mamma-mia", "pulp-fiction", "monopoly", "biology"],
  },
];

// slug -> category lookup, built once from CATEGORIES.
const CATEGORY_BY_SLUG: Record<string, Category> = {};
for (const cat of CATEGORIES) {
  for (const slug of cat.slugs) CATEGORY_BY_SLUG[slug] = cat;
}

export function getCategory(slug: string): Category | undefined {
  return CATEGORY_BY_SLUG[slug];
}

// Pages topically related to `slug`: same-category siblings first (in
// their listed order), then padded with other pages so we always return
// up to `limit` valid, existing pages.
export function relatedPages(slug: string, limit = 12): PageConfig[] {
  const cat = CATEGORY_BY_SLUG[slug];
  const seen = new Set<string>([slug]);
  const out: PageConfig[] = [];
  const push = (s: string) => {
    if (seen.has(s)) return;
    const p = getPage(s);
    if (!p) return;
    seen.add(s);
    out.push(p);
  };
  if (cat) cat.slugs.forEach(push);
  // Pad with pages from other categories if the cluster is small.
  for (const p of PAGES) {
    if (out.length >= limit) break;
    push(p.slug);
  }
  return out.slice(0, limit);
}

export function platformsFor(page: PageConfig) {
  if (page.whereToUse) return page.whereToUse;
  return COMMON_PLATFORMS;
}
