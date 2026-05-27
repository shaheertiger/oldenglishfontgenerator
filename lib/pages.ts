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
};

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
    styles: ["script", "script-bold", "italic-serif", "bold-italic-serif", "sans-italic", "sans-bold-italic"],
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
    styles: ["bold-serif", "bold-italic-serif", "sans-bold", "sans-bold-italic", "fraktur-bold", "script-bold"],
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
    styles: ["italic-serif", "bold-italic-serif", "sans-italic", "sans-bold-italic", "script"],
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
    styles: ["script", "script-bold", "fraktur", "fraktur-bold", "double-struck", "italic-serif", "small-caps"],
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
    styles: ["small-caps"],
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
];

export const PAGE_INDEX_DESCRIPTION =
  "Free Unicode font generators: cursive, bold, gothic, bubble, glitch, small caps, upside down, and more. Type, copy, paste — works on Instagram, TikTok, Discord, Twitter, and Facebook.";

export function getPage(slug: string): PageConfig | undefined {
  return PAGES.find((p) => p.slug === slug);
}
