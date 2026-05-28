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
];

export const PAGE_INDEX_DESCRIPTION =
  "Free Unicode font generators: cursive, bold, gothic, bubble, glitch, small caps, upside down, and more. Type, copy, paste — works on Instagram, TikTok, Discord, Twitter, and Facebook.";

export function getPage(slug: string): PageConfig | undefined {
  return PAGES.find((p) => p.slug === slug);
}

export function platformsFor(page: PageConfig) {
  if (page.whereToUse) return page.whereToUse;
  return COMMON_PLATFORMS;
}
