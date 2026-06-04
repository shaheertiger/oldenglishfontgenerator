export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "cta"; text: string; href: string; label: string }
  | { type: "links"; heading?: string; items: { label: string; href: string }[] };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readingTime: string;
  excerpt: string;
  body: BlogBlock[];
};

export const POSTS: BlogPost[] = [
  {
    slug: "blackletter-gothic-fraktur-difference",
    title: "Blackletter, Gothic, or Fraktur — What's the Difference?",
    description:
      "All three names describe the same broad family of medieval scripts — but each one points at a slightly different subgenre. Here's how to tell them apart.",
    date: "2026-04-12",
    readingTime: "5 min read",
    excerpt:
      "Three names, one family of dense angular scripts. The difference is in the strokes, the era, and who's doing the naming.",
    body: [
      { type: "p", text: "Walk into a tattoo shop, a sign painter's studio, and a typography classroom and you'll hear the same family of medieval-looking letterforms called three different things. The tattoo artist calls it Old English. The sign painter calls it gothic. The typographer calls it blackletter. They're all looking at variations of the same thing, but the words point at different facets of it." },
      { type: "h2", text: "Blackletter is the umbrella term" },
      { type: "p", text: "If you're being precise, blackletter is the family — the entire category of dense, angular European scripts written with a broad-edge pen from roughly the 12th century onward. It's called blackletter because the densely-spaced vertical strokes leave more black ink on the page than the whitespace between them, the opposite of the rounder Carolingian and humanist scripts that came before and after." },
      { type: "p", text: "Inside that family, scribes developed four major subgenres that you'll still see referenced today: textura, rotunda, schwabacher, and fraktur. Each was a regional and chronological variation, and each has its own visual signature." },
      { type: "h2", text: "Textura is the sharpest" },
      { type: "p", text: "Textura (sometimes called 'textur' or 'Gothic textualis') is the densest, most angular variety — the one most people picture when they think 'medieval manuscript.' The strokes are nearly vertical, the corners are sharp, and the lowercase letters all share the same height. Gutenberg's 42-line Bible was printed in a textura type, which is why the look reads so strongly as 'old printed book.'" },
      { type: "h2", text: "Rotunda is softer and Italian" },
      { type: "p", text: "Where textura was dominant in Northern Europe, scribes in Italy and Spain developed rotunda — same family, but with rounded counters and less aggressive angles. If textura is winter, rotunda is summer. The Spanish liturgical books of the 14th–15th centuries are full of it." },
      { type: "h2", text: "Schwabacher is the German workhorse" },
      { type: "p", text: "Schwabacher emerged in late 15th-century Germany as a more casual, readable cousin of textura. Lots of curved lowercase strokes, less geometric rigor. It was the popular print face of early German books before fraktur replaced it." },
      { type: "h2", text: "Fraktur is the most famous subgenre" },
      { type: "p", text: "Fraktur means 'broken' in Latin — a reference to the way the curves are broken into shorter angled strokes. It was developed in early 16th-century Germany as a more decorative alternative to schwabacher, and it dominated German printing for the next four centuries. The Unicode block that powers most blackletter generators (U+1D504–U+1D537) is officially called 'Mathematical Fraktur,' which is why those characters specifically look like the fraktur subgenre rather than the more austere textura." },
      { type: "h2", text: "So what should you call yours?" },
      { type: "p", text: "If you're talking to a typographer, say blackletter. If you're talking to most other people, gothic and Old English are fine — they're casual umbrella terms. If you mean specifically the German-print style with the broken curves, fraktur is the right word. And if you're being unusually precise about a medieval manuscript script, name the subgenre." },
      { type: "p", text: "For our generator, the styles labelled 'Old English' and 'Blackletter' are technically Unicode fraktur, because that's the only blackletter subgenre Unicode actually covers. The other subgenres don't have dedicated codepoints — they only exist as real installed fonts." },
    ],
  },
  {
    slug: "old-english-fonts-instagram-bio",
    title: "How to Add Old English Fonts to Your Instagram Bio",
    description:
      "Step-by-step guide to using blackletter and gothic Unicode text in your Instagram bio, captions, and display name — including what to do when characters get filtered.",
    date: "2026-04-20",
    readingTime: "4 min read",
    excerpt:
      "Instagram doesn't let you change fonts inside the app. Unicode is the workaround — here's how to do it cleanly.",
    body: [
      { type: "p", text: "Instagram's bio field gives you 150 characters and exactly zero formatting controls. No bold button, no font picker, no rich text. If you've seen accounts with blackletter or cursive text in their bio, they got around the limitation with Unicode — and you can do the same in about 30 seconds." },
      { type: "h2", text: "The short version" },
      { type: "ol", items: [
        "Open the Old English font generator on a separate tab or window.",
        "Type the text you want in your bio.",
        "Tap the style you like and hit Copy.",
        "In the Instagram app, go to your profile → Edit profile → Bio.",
        "Paste, save, and check how it renders.",
      ]},
      { type: "h2", text: "Why this works" },
      { type: "p", text: "Instagram treats your bio as plain text. The 'fonts' from the generator aren't really fonts — they're Unicode characters that happen to look like styled versions of A–Z. Because they're plain text, Instagram doesn't know to filter them out, and they render identically on iOS, Android, and the web app." },
      { type: "h2", text: "Where each field is more or less permissive" },
      { type: "p", text: "Bio: accepts almost everything. Use the most decorative styles you want." },
      { type: "p", text: "Caption: same — full Unicode range works." },
      { type: "p", text: "Display name (the bold name above your handle): mostly works, but Instagram occasionally hides display names that look like spam to its automatic moderation. If your styled name keeps reverting, simplify to a less exotic variant." },
      { type: "p", text: "Username (@handle): strict. Only Latin letters, numbers, dots, and underscores — no Unicode styling at all. Workaround: keep your handle plain and put the styled version in your display name." },
      { type: "h2", text: "Common problems and fixes" },
      { type: "h3", text: "It pastes as empty boxes" },
      { type: "p", text: "The viewer's device doesn't have a font that covers those Unicode codepoints. Try a different variant — Small Caps and Bold Serif have the widest font coverage." },
      { type: "h3", text: "Some letters look wrong" },
      { type: "p", text: "A handful of Unicode blocks are missing one or two letters and fall back to look-alikes. The Q in cursive and the X in small caps are the usual offenders." },
      { type: "h3", text: "Instagram trimmed my bio" },
      { type: "p", text: "Some Unicode characters count as two units against the 150-character limit. Watch the counter as you paste. If you're near the cap, the heavier styles (outline, bubble) will eat your budget fastest." },
      { type: "h2", text: "What this costs you in search" },
      { type: "p", text: "Instagram indexes the underlying characters, not their visual style. A bio that's 100% Unicode 'fonts' is invisible to keyword search. The pattern most growth-focused accounts use: one styled line for personality, plus 1–2 plain-text lines with the keywords people would actually search to find you." },
    ],
  },
  {
    slug: "old-english-fonts-tattoo-guide",
    title: "Old English Tattoo Lettering: A Practical Mockup Guide",
    description:
      "Blackletter is one of the most popular tattoo lettering styles. Here's how to use Unicode previews to lock in a style before you book the appointment.",
    date: "2026-04-28",
    readingTime: "6 min read",
    excerpt:
      "Unicode previews aren't tattoo-quality, but they're the fastest way to settle on a style before you commit ink.",
    body: [
      { type: "p", text: "Old English lettering has been a tattoo standard for almost as long as machines have been buzzing. It carries weight, reads as serious, and gives a lot of visual surface area to play with on the forearm, ribs, or knuckles. If you're planning a piece, the hardest part isn't picking the words — it's picking the style." },
      { type: "h2", text: "Where this generator helps, and where it doesn't" },
      { type: "p", text: "The Unicode styles in this tool are great for one specific job: settling on a visual direction before you sit down with an artist. You can paste a name, a quote, or a date into the generator and see it rendered in 20+ blackletter variants in seconds. That's faster than typing it out in 20 separate font files." },
      { type: "p", text: "What Unicode can't do: produce the file your tattooist will actually trace. Tattoo stencils need vector or high-resolution raster artwork at the final size, with deliberate stroke weight and kerning. Unicode characters render at whatever weight the device font provides — useless for ink." },
      { type: "p", text: "So the workflow is: use this tool to decide the style. Then send the style name to your artist and ask them to render the same look in a real vector font." },
      { type: "h2", text: "Style families worth previewing" },
      { type: "h3", text: "Classic blackletter" },
      { type: "p", text: "Heavy, dense, angular — the unmistakable medieval look. Reads as serious and timeless. Best for short phrases (one or two words per line) because the density makes long text hard to follow at body size." },
      { type: "h3", text: "Fraktur" },
      { type: "p", text: "Slightly more decorative than textura blackletter, with rounded touches in the curves. Reads as German printing tradition. Most of the 'Old English' variants in the generator are actually fraktur because that's what Unicode covers." },
      { type: "h3", text: "Blackletter italic / cursive blackletter" },
      { type: "p", text: "Lighter and more flowing. Closer to copperplate or chancery cursive, but with the dark-stroke aesthetic of blackletter. Good for longer quotes and names where readability matters." },
      { type: "h3", text: "Outlined blackletter" },
      { type: "p", text: "Hollow letters that the artist can fill, half-fill, or leave as line art. Good for larger pieces where you want negative space to do some of the work." },
      { type: "h2", text: "Things to think about before you commit" },
      { type: "ul", items: [
        "Body size matters: blackletter looks heavy at small sizes and can blur over years. If you're putting it on a finger or behind an ear, ask your artist about stroke-weight survivability.",
        "Cap height vs. x-height: classic blackletter has tall ascenders and descenders. Plan your placement so the bottoms of the g's and y's aren't running off the edge of the area you've planned.",
        "Letter spacing: dense scripts need air. Tighter spacing reads as a wall of black; looser spacing breathes but takes more skin.",
        "Numerals: most blackletter typefaces have weak numerals. If you're tattooing a date, your artist may need to pull the numbers from a different but compatible font.",
      ]},
      { type: "h2", text: "A note on legibility" },
      { type: "p", text: "Blackletter is famously hard to read at a glance, especially the textura subgenre. If the words are personally meaningful and you don't care whether anyone else can read them quickly, that's fine. If they need to be readable to others — say, a memorial date — pick a more open subgenre like schwabacher, or use blackletter only for one prominent word and keep the rest in a cleaner script." },
    ],
  },
  {
    slug: "how-unicode-fonts-actually-work",
    title: "How Unicode \"Fonts\" Actually Work (And Why They Paste Anywhere)",
    description:
      "A short, non-technical explanation of how blackletter, cursive, and bold text generators work — and why the output survives copy-paste into apps that don't let you change fonts.",
    date: "2026-05-05",
    readingTime: "5 min read",
    excerpt:
      "The 'fonts' from generators like this one aren't really fonts. They're characters. Here's why that matters.",
    body: [
      { type: "p", text: "If you've ever wondered why pasting a cursive caption into Instagram works but doesn't work in a Word document, the answer is the same: the generator isn't changing a font, it's changing the characters themselves." },
      { type: "h2", text: "What a font actually is" },
      { type: "p", text: "A font is a file installed on your device that tells the computer how to draw each character. Times New Roman is a file. Helvetica is a file. When you write 'A' in Word and switch to Helvetica, the underlying character — Unicode codepoint U+0041, capital A — doesn't change. The file that draws it changes." },
      { type: "p", text: "Apps that let you change fonts (Word, Google Docs, Photoshop) are sending two pieces of information at once: the characters, and a reference to which font file should draw them. Apps that don't let you change fonts (Instagram, Discord, most messaging apps) only send the characters. Whoever's on the other end sees them in whatever font that app picks." },
      { type: "h2", text: "What Unicode generators do instead" },
      { type: "p", text: "Unicode contains a lot of letters that aren't English A–Z. Greek, Cyrillic, Hebrew, Arabic, Devanagari — thousands of writing systems. But it also contains several alphabets that exist purely for math notation: bold A, italic A, fraktur A, script A, double-struck A, monospace A. Each of these is a separate, real character in Unicode. Bold A is codepoint U+1D400. Fraktur A is U+1D504. Script A is U+1D49C." },
      { type: "p", text: "When you type 'hello' into the generator and pick blackletter, the output is the literal characters U+1D525 U+1D522 U+1D529 U+1D529 U+1D52C — different codepoints than the regular h, e, l, l, o. The visual style is baked into the character." },
      { type: "h2", text: "Why this works for copy-paste into Instagram and Discord" },
      { type: "p", text: "Because the output is plain text — just different plain text — it pastes anywhere plain text is accepted. Instagram doesn't care whether your bio is written in regular Latin letters, Cyrillic, emoji, or mathematical fraktur. It stores the characters you sent and displays them in whatever font your viewer's device chooses." },
      { type: "p", text: "The receiving device has to have a font installed that covers those codepoints. Modern iOS and Android both ship with broad Unicode coverage including the math alphabets, which is why blackletter pastes look right on most phones. Older Android versions and older Windows installations sometimes don't have a font covering U+1D500 onward, and you get tofu boxes." },
      { type: "h2", text: "Why this doesn't work in Word" },
      { type: "p", text: "Word does let you change fonts directly — that's the entire feature. So when you paste U+1D525 (fraktur h), Word displays the fraktur h, but it also can't apply its built-in 'bold' formatting to it cleanly, because the character already encodes a style. Underlining works because that's a separate decoration; making it italic is a no-op because the character is already italic-styled. Generally for word processors you want plain characters plus the app's formatting tools." },
      { type: "h2", text: "The accessibility tradeoff" },
      { type: "p", text: "Screen readers handle Unicode math alphabets inconsistently. Some announce 'mathematical fraktur capital A,' which is technically accurate but useless if you're a regular reader. Others skip the characters entirely. Either way, heavy Unicode styling reduces accessibility — keep important information in plain letters and use the styled variants for decoration." },
    ],
  },
  {
    slug: "best-old-english-fonts-for-discord",
    title: "The Best Old English Styles for Discord Usernames and Status",
    description:
      "Discord supports markdown for message formatting, but usernames and status are Unicode-only. Here's which blackletter variants render cleanest where.",
    date: "2026-05-14",
    readingTime: "4 min read",
    excerpt:
      "Pick the right Unicode style for Discord's nickname filter — and use markdown where it works.",
    body: [
      { type: "p", text: "Discord is one of the friendlier platforms for Unicode styling. The desktop, web, and mobile clients all use the same renderer, so a name that looks right on your laptop looks right on your friend's phone. The only catch is knowing where markdown beats Unicode, and where Unicode is the only option." },
      { type: "h2", text: "Where markdown beats Unicode" },
      { type: "p", text: "Inside a regular chat message, Discord supports a small subset of markdown:" },
      { type: "ul", items: [
        "**double asterisks** for bold",
        "*single asterisks* or _underscores_ for italic",
        "__double underscores__ for underline",
        "~~double tildes~~ for strikethrough",
        "`backticks` for inline code",
        "```triple backticks``` for code blocks",
      ]},
      { type: "p", text: "If your goal is bold or italic inside a message, use markdown. It plays nicely with screen readers, doesn't break search inside the channel, and survives quotes and forwards. Unicode bold has its place but it's the wrong tool for chat formatting." },
      { type: "h2", text: "Where Unicode is the only option" },
      { type: "p", text: "Markdown doesn't work in Discord's usernames, server nicknames, custom status, channel names, or role names. Those fields are plain text. If you want any visual styling on them, Unicode is your only path." },
      { type: "h2", text: "Best blackletter picks for each field" },
      { type: "h3", text: "Server nickname" },
      { type: "p", text: "This is where most people use Unicode. The full blackletter range works. Stick to one of the cleaner variants — Gothic Classic or Blackletter Bold — for a nickname people actually want to @-mention. Decorative variants like Cursed Gothic or Glitch Script look cool but make it nearly impossible for other users to type your name." },
      { type: "h3", text: "Global username (the @handle)" },
      { type: "p", text: "Heavily restricted. Discord enforces a Latin-letters-numbers-dot-underscore character set on global usernames. No Unicode styling at all. Reserve styling for the nickname." },
      { type: "h3", text: "Custom status" },
      { type: "p", text: "Accepts the full Unicode range. Short statuses look good in Small Caps or Outline Gothic. Long statuses are easier to read in Italic Serif or regular Cursive." },
      { type: "h3", text: "Channel and role names (server admins)" },
      { type: "p", text: "Unicode works, but think about the @-mention experience. A channel called #𝔤𝔢𝔫𝔢𝔯𝔞𝔩 is harder to autocomplete than #general. Most well-run servers reserve Unicode for cosmetic role icons (the prefix character on a role name) rather than for the names themselves." },
      { type: "h2", text: "Practical compatibility tips" },
      { type: "ul", items: [
        "Test your nickname on a friend's older phone before committing — older Android sometimes shows boxes for the Mathematical Fraktur block.",
        "If your gothic name keeps getting flagged as impersonation, you may have accidentally picked a character that visually duplicates another user's handle. Try a less common variant.",
        "Pings still work for Unicode nicknames most of the time, but some screen-reader users can't type them. Decide whether being mention-able matters more than the look.",
      ]},
    ],
  },
  {
    slug: "fancy-text-copy-paste-iphone-android",
    title: "How to Copy and Paste Fancy Text That Actually Works on iPhone and Android",
    description:
      "Fancy text not pasting correctly on your phone? Here's exactly why it happens and how to make Unicode stylish text work in any iPhone or Android app.",
    date: "2026-05-15",
    readingTime: "6 min read",
    excerpt:
      "Most 'broken' fancy text isn't broken — it's a font-coverage gap. Here's how to copy and paste it so it survives on any phone.",
    body: [
      { type: "p", text: "You found a stylish font online, copied it, pasted it into your bio — and half the letters turned into empty rectangles. Frustrating, but fixable. The text isn't corrupted; your phone just doesn't have a glyph for some of the characters. Once you understand why, copying fancy text that works on any device becomes easy." },
      { type: "h2", text: "Why fancy text sometimes breaks" },
      { type: "p", text: "Fancy text from a generator isn't a font in the normal sense. Each 'styled' letter is a separate Unicode character that happens to look like a decorated A–Z. When your phone displays text, it looks up each character in the fonts installed on the device. If a character exists but no installed font has a picture for it, you get the fallback box — the famous 'tofu' rectangle." },
      { type: "p", text: "That's why the same string looks perfect on your friend's new iPhone and broken on an older Android: the newer device simply ships more complete font coverage." },
      { type: "h2", text: "The copy-paste steps that work every time" },
      { type: "ol", items: [
        "Open a generator and type your text.",
        "Pick a style and tap the row to copy it — don't manually highlight, which can drop trailing characters.",
        "Switch to the target app and long-press the field, then choose Paste.",
        "Preview before saving. If you see boxes, back out and pick a different style.",
      ]},
      { type: "h2", text: "Styles with the widest device coverage" },
      { type: "p", text: "If you need text that renders on basically everything — including older phones and desktop — stick to styles drawn from well-supported Unicode blocks: bold, italic, and small caps. They're covered by nearly every system font shipped in the last decade." },
      { type: "cta", text: "Want bold text that survives copy-paste everywhere? Try the", href: "/font-generator/bold", label: "Bold Text Generator" },
      { type: "h2", text: "iPhone-specific notes" },
      { type: "p", text: "iOS has excellent Unicode coverage, so most styles render in Messages, Instagram, and Notes. The main gotcha is the username field on some apps, which strips non-standard characters on save — that's an app rule, not an iPhone limitation." },
      { type: "h2", text: "Android-specific notes" },
      { type: "p", text: "Modern Android (12+) handles almost everything. Older builds and some manufacturer skins lag on the newer Unicode blocks, so combining-mark styles (glitch, zalgo) and rarer decorative sets are the first to show boxes. When in doubt on Android, choose bold or small caps." },
      { type: "h2", text: "Quick fixes when it still won't work" },
      { type: "ul", items: [
        "Boxes everywhere: switch to a simpler style (bold, italic, small caps).",
        "Pastes as plain text: the app stripped the styling on save — try its bio field instead of its username field.",
        "Some letters fine, others boxes: that block is missing a couple of glyphs; pick a neighbouring style.",
      ]},
      { type: "links", heading: "Reliable styles to start with", items: [
        { label: "Bold Text Generator", href: "/font-generator/bold" },
        { label: "Cursive Font Generator", href: "/font-generator/cursive" },
        { label: "Small Caps Generator", href: "/font-generator/small-caps" },
      ]},
    ],
  },
  {
    slug: "change-instagram-bio-font",
    title: "How to Change the Font in Your Instagram Bio (Step-by-Step, 2026)",
    description:
      "Instagram doesn't let you change fonts natively — but a simple Unicode trick works for bios, captions, and comments. Here's the full step-by-step.",
    date: "2026-05-14",
    readingTime: "5 min read",
    excerpt:
      "There's no font button in Instagram. The workaround is Unicode text you paste in — here's how to do it cleanly in under a minute.",
    body: [
      { type: "p", text: "Instagram gives you 150 characters of bio space and no formatting controls at all — no bold, no font picker, nothing. Every account you've seen with cursive or gothic text in its bio used the same trick: Unicode characters pasted in from a generator. Here's exactly how." },
      { type: "h2", text: "Step by step" },
      { type: "ol", items: [
        "Open a font generator in your browser.",
        "Type the text you want in your bio.",
        "Tap a style you like and copy it.",
        "In Instagram, go to your profile → Edit profile → Bio.",
        "Paste, then save and check how it renders.",
      ]},
      { type: "h2", text: "Why there's no native font option" },
      { type: "p", text: "Instagram treats the bio as plain text, the same way a text message is plain text. The 'fonts' from a generator aren't really fonts — they're Unicode characters that look like styled letters. Because they're plain text, Instagram doesn't filter them, and they show up the same on iOS, Android, and web." },
      { type: "h2", text: "Which fields accept styling" },
      { type: "p", text: "Bio and captions accept the full range — use any style you like. Your display name (the bold line above your handle) usually works too, but Instagram occasionally hides names that trip its spam moderation, so keep that one simpler. Your @username is plain-text only: letters, numbers, dots, and underscores." },
      { type: "cta", text: "Pick a style for your bio with the", href: "/font-generator/instagram", label: "Instagram Font Generator" },
      { type: "h2", text: "Keep it readable and findable" },
      { type: "p", text: "Two practical cautions. First, heavily decorated styles can render as boxes on older phones — bold, cursive, and small caps are the safest. Second, Instagram's search indexes the underlying characters, not their look, so a 100%-styled bio is invisible to keyword search. The common pattern: one styled line for personality, plus a plain line with the words people would search to find you." },
      { type: "links", heading: "Popular bio styles", items: [
        { label: "Cursive Font Generator", href: "/font-generator/cursive" },
        { label: "Bold Text Generator", href: "/font-generator/bold" },
        { label: "Aesthetic Symbols for Bios", href: "/symbols" },
      ]},
    ],
  },
  {
    slug: "what-are-unicode-fonts",
    title: "What Are Unicode Fonts? Why Fancy Text Pastes Into Any App Without Installing Anything",
    description:
      "Unicode fonts aren't fonts at all — they're special characters built into every device. Here's exactly how they work and why they paste anywhere.",
    date: "2026-05-13",
    readingTime: "7 min read",
    excerpt:
      "The reason fancy text pastes into apps that don't have a font picker: it was never a font. It's characters. Here's the full explanation.",
    body: [
      { type: "p", text: "If you've ever wondered how people put bold, cursive, or gothic text into an Instagram bio or a Discord name when those apps have no font settings, the answer is one of the most useful misunderstandings on the internet: 'Unicode fonts' aren't fonts. They're characters. Once that clicks, everything about how fancy text behaves makes sense." },
      { type: "h2", text: "Fonts vs. characters" },
      { type: "p", text: "A real font is a file installed on your device — a set of drawings for each letter. When you change a font, you're swapping the drawings, but the underlying letter 'A' stays the letter 'A.' Apps like Instagram don't let you do this because they only store plain text, not formatting." },
      { type: "p", text: "Unicode takes the opposite approach. Instead of changing how an 'A' is drawn, it provides entirely separate characters that already look styled. There's a normal 'A' (U+0041), and there's a bold mathematical 'A' (U+1D400), an italic 'A,' a fraktur 'A,' and more. They're different characters that just happen to resemble decorated versions of the same letter." },
      { type: "h2", text: "What Unicode actually is" },
      { type: "p", text: "Unicode is the global standard that assigns a unique number — a 'codepoint' — to every character used in human writing: every alphabet, every emoji, every symbol. Your device has fonts that map those numbers to pictures. Because the styled letters are real, standardized codepoints, every compliant device knows about them." },
      { type: "h2", text: "Why it pastes anywhere" },
      { type: "p", text: "This is the key. When you copy 𝓯𝓪𝓷𝓬𝔂 text and paste it into a bio, you're not pasting a font — you're pasting a sequence of plain-text characters. The app stores them like any other text. There's nothing to install, nothing to strip, and nothing the app needs to support beyond ordinary Unicode, which everything supports." },
      { type: "cta", text: "See it in action with the", href: "/font-generator", label: "Font Generator" },
      { type: "h2", text: "The blocks behind the styles" },
      { type: "p", text: "Most styles come from the Mathematical Alphanumeric Symbols block (U+1D400–U+1D7FF), which covers bold, italic, script, fraktur, double-struck, and monospace alphabets — originally added for mathematicians who needed distinct letter styles in equations. Decorative variants pull from other blocks: Enclosed Alphanumerics for bubble letters, Halfwidth and Fullwidth Forms for vaporwave text, and Combining Diacritical Marks for glitch effects." },
      { type: "h2", text: "Why some characters show as boxes" },
      { type: "p", text: "A codepoint existing isn't the same as your device having a picture for it. If an installed font doesn't cover a codepoint, you get the fallback box. Newer phones cover more blocks; older ones miss the rarer ones. That's the single most common cause of 'broken' fancy text." },
      { type: "h2", text: "Why screen readers and search struggle with it" },
      { type: "p", text: "Because these are unusual characters rather than styled normal letters, screen readers often read them oddly or skip them, and search engines index the raw codepoints rather than the visual word. Great for decoration, bad for accessibility and discoverability — so keep important information in normal text." },
      { type: "links", heading: "Try a few styles", items: [
        { label: "Bold Text Generator", href: "/font-generator/bold" },
        { label: "Cursive Font Generator", href: "/font-generator/cursive" },
        { label: "Old English Font Generator", href: "/font-generator/old-english" },
      ]},
    ],
  },
  {
    slug: "aesthetic-fonts-tiktok-bio",
    title: "Aesthetic Fonts for TikTok Bio and Captions: The Ones That Actually Work in 2026",
    description:
      "TikTok doesn't let you change fonts natively, but Unicode characters give your bio and captions a different look. Here are the styles that work best.",
    date: "2026-05-12",
    readingTime: "6 min read",
    excerpt:
      "TikTok has no font button, but Unicode fills the gap. Here are the aesthetic styles that render cleanly in bios and captions.",
    body: [
      { type: "p", text: "TikTok profiles all use the same default font, which is exactly why a styled bio stands out on the For You page and on your profile. TikTok has no built-in font option, but Unicode characters let you paste a different look into your bio and captions. Here's what actually works in 2026 — and what to avoid." },
      { type: "h2", text: "How to add a styled font to TikTok" },
      { type: "ol", items: [
        "Open a font generator and type your text.",
        "Copy the style you want.",
        "In TikTok, tap Profile → Edit profile → Bio (or paste directly into a caption while posting).",
        "Paste and preview before saving.",
      ]},
      { type: "h2", text: "Styles that render cleanly on TikTok" },
      { type: "p", text: "TikTok runs on modern iOS and Android, so coverage is good. The most reliable aesthetic styles are cursive script for a soft, elegant feel; small caps for a clean minimal look; and bold for emphasis. These three cover most 'aesthetic' bios without risking boxes." },
      { type: "cta", text: "Browse styles built for short-form social with the", href: "/font-generator/tiktok", label: "TikTok Font Generator" },
      { type: "h2", text: "Add symbols for a softer aesthetic" },
      { type: "p", text: "A lot of the TikTok 'aesthetic' look comes from small decorative symbols between words — stars, sparkles, hearts, little flowers. Used sparingly, they frame your text nicely. Overused, they make a bio hard to read, so one or two accents is the sweet spot." },
      { type: "h2", text: "What to avoid" },
      { type: "ul", items: [
        "Heavy glitch or zalgo text — it often clips or shows boxes and reads as spammy.",
        "Styling the whole bio — keep at least one plain line so people (and TikTok's systems) can read who you are.",
        "Putting styled text in fields TikTok validates strictly, like the username, where it may be rejected.",
      ]},
      { type: "links", heading: "Aesthetic style picks", items: [
        { label: "Cursive Font Generator", href: "/font-generator/cursive" },
        { label: "Small Caps Generator", href: "/font-generator/small-caps" },
        { label: "Aesthetic Symbols", href: "/symbols" },
      ]},
    ],
  },
  {
    slug: "fancy-text-whatsapp",
    title: "Fancy Text for WhatsApp: How to Send Bold, Italic, and Stylish Messages",
    description:
      "WhatsApp has built-in bold and italic formatting — but it also supports Unicode fancy fonts. Here's how to use both and which to use when.",
    date: "2026-05-11",
    readingTime: "6 min read",
    excerpt:
      "WhatsApp has native bold and italic, plus support for Unicode fancy text. Here's how each works and when to reach for which.",
    body: [
      { type: "p", text: "WhatsApp is one of the few chat apps with real built-in formatting — and it also displays Unicode fancy text. That gives you two completely different ways to make a message stand out, and they're good for different things. Here's how both work." },
      { type: "h2", text: "Method 1: WhatsApp's native formatting" },
      { type: "p", text: "WhatsApp lets you format text with simple markers around a word or phrase:" },
      { type: "ul", items: [
        "Bold: wrap text in asterisks — *like this*",
        "Italic: wrap in underscores — _like this_",
        "Strikethrough: wrap in tildes — ~like this~",
        "Monospace: wrap in three backticks — ```like this```",
      ]},
      { type: "p", text: "This is the right tool for normal conversation. It's readable, it's accessible to screen readers, and the formatting is 'real' — WhatsApp renders it as styled normal text, not as substituted characters." },
      { type: "h2", text: "Method 2: Unicode fancy text" },
      { type: "p", text: "For styles WhatsApp doesn't offer natively — cursive, gothic, bubble, small caps — you paste Unicode text from a generator. Copy the style, paste it into the message box, and send. Because it's plain-text characters, it travels through WhatsApp unchanged and shows on the other person's phone." },
      { type: "cta", text: "Generate cursive and gothic messages with the", href: "/font-generator", label: "Font Generator" },
      { type: "h2", text: "Which should you use?" },
      { type: "p", text: "Use native formatting for anything you actually want read easily — emphasis in a real conversation, a struck-out correction, a code snippet. Use Unicode fancy text for decorative one-offs: a stylish status, a birthday message, a group name. Don't send long Unicode paragraphs; they're tiring to read and can show boxes on older devices." },
      { type: "h2", text: "A note on the 'About' and group name fields" },
      { type: "p", text: "Your WhatsApp About line and group names are plain text with no native formatting, so Unicode is the only way to style them — and a great place to use it, since they're short and decorative by nature." },
      { type: "links", heading: "Styles for status and group names", items: [
        { label: "Bold Text Generator", href: "/font-generator/bold" },
        { label: "Cursive Font Generator", href: "/font-generator/cursive" },
        { label: "Strikethrough Text", href: "/font-generator/strikethrough" },
      ]},
    ],
  },
  {
    slug: "how-to-bold-text-instagram",
    title: "How to Bold Text on Instagram: Captions, Bio, and Stories (2026)",
    description:
      "Instagram has no built-in bold button — but there's a reliable way to make text bold in bios, captions, and DMs using Unicode characters.",
    date: "2026-05-10",
    readingTime: "5 min read",
    excerpt:
      "No bold button on Instagram? Unicode bold characters are the workaround that renders in bios, captions, and DMs. Here's how.",
    body: [
      { type: "p", text: "Instagram still doesn't have a bold button anywhere — not in captions, not in bios, not in DMs. The way creators get bold text is with Unicode bold characters, which look like a heavier version of normal letters and paste in as plain text. Here's the quick method and the caveats." },
      { type: "h2", text: "How to do it" },
      { type: "ol", items: [
        "Open a bold text generator and type your text.",
        "Copy the bold output.",
        "Paste it into your caption, bio, or DM and post.",
      ]},
      { type: "cta", text: "Make bold text instantly with the", href: "/font-generator/bold", label: "Bold Text Generator" },
      { type: "h2", text: "Why this works when there's no bold button" },
      { type: "p", text: "Instagram stores plain text only. Unicode bold letters (from the Mathematical Alphanumeric Symbols block) are separate characters that already look bold, so Instagram saves them like any other text and displays them everywhere — feed, profile, and the web." },
      { type: "h2", text: "Where bold works and where it's risky" },
      { type: "p", text: "Captions and bios: reliable, use freely. DMs: works fine. Display name: usually works. Username: not supported — handles are plain Latin only. One caution: bold Unicode is great for a word or a line, but a whole caption in bold reads as shouting and can show boxes on older phones." },
      { type: "h2", text: "Bold vs. readability and SEO" },
      { type: "p", text: "Because bold letters are special characters, screen readers may read them awkwardly and Instagram's search won't match them to the normal spelling. Bold your hook or one keyword for emphasis, but keep the searchable, accessible version of important words in normal text." },
      { type: "links", heading: "Related styles", items: [
        { label: "Italic Text", href: "/font-generator/italic" },
        { label: "Instagram Fonts", href: "/font-generator/instagram" },
        { label: "Small Caps", href: "/font-generator/small-caps" },
      ]},
    ],
  },
  {
    slug: "cursive-text-generator-guide",
    title: "Cursive Text Generator: How to Copy and Paste Cursive Fonts Online",
    description:
      "Want cursive text to copy and paste into Instagram, TikTok, or anywhere else? Here's how cursive Unicode text works and the styles available.",
    date: "2026-05-09",
    readingTime: "5 min read",
    excerpt:
      "Cursive Unicode text gives any app a flowing, handwritten look. Here's how it works and the script variants you can copy and paste.",
    body: [
      { type: "p", text: "Cursive text — flowing, connected, handwritten-looking letters — is one of the most popular styles for bios, captions, and usernames because it reads as elegant and personal. Like all fancy text, it's made of Unicode characters you can copy and paste anywhere. Here's how it works." },
      { type: "h2", text: "What 'cursive' means in Unicode" },
      { type: "p", text: "Unicode includes a Script alphabet in the Mathematical Alphanumeric Symbols block (and a bold script variant). These are the characters that look like fountain-pen handwriting. A generator maps each letter you type to its script counterpart, so the result stays as plain, copyable text." },
      { type: "h2", text: "How to copy and paste it" },
      { type: "ol", items: [
        "Open the cursive generator and type your text.",
        "Choose between the lighter script and the bolder script variant.",
        "Tap to copy, then paste into your bio, caption, or message.",
      ]},
      { type: "cta", text: "Get flowing script text from the", href: "/font-generator/cursive", label: "Cursive Font Generator" },
      { type: "h2", text: "The variants you'll see" },
      { type: "ul", items: [
        "Script: light, elegant, best for soft aesthetic bios.",
        "Bold script: heavier and more visible, good for names and headers.",
        "Italic serif: a slanted, formal look that reads as 'handwritten' without full connection.",
      ]},
      { type: "h2", text: "Two things to watch" },
      { type: "p", text: "First, the script block is missing dedicated glyphs for a couple of letters on some systems, so a capital here or there may fall back to a look-alike — preview before you post. Second, cursive is decorative: keep searchable keywords in normal text, since search won't match the script characters to the plain spelling." },
      { type: "links", heading: "More elegant styles", items: [
        { label: "Fancy Font Generator", href: "/font-generator/fancy" },
        { label: "Italic Text", href: "/font-generator/italic" },
        { label: "Instagram Fonts", href: "/font-generator/instagram" },
      ]},
    ],
  },
  {
    slug: "small-text-superscript-generator",
    title: "Small Text Generator: Tiny Superscript Fonts for Instagram Bio and Discord",
    description:
      "Small and superscript-style fonts create visual contrast that makes Instagram bios and Discord profiles look unique. Here's what they are and how to use them.",
    date: "2026-05-08",
    readingTime: "5 min read",
    excerpt:
      "Tiny text adds contrast and a clean, designed look to bios and profiles. Here's how superscript and small-caps Unicode work.",
    body: [
      { type: "p", text: "Small text — letters that appear shrunk, raised, or lowered relative to normal type — is a subtle way to make a bio or profile look intentionally designed. It's built from superscript and subscript Unicode characters plus the small-caps set. Here's how each works and where it fits." },
      { type: "h2", text: "The two kinds of 'small' text" },
      { type: "p", text: "Superscript and subscript characters are genuinely tiny letters and numbers that sit above or below the baseline — useful for a delicate accent. Small caps, by contrast, are full-height-but-shorter capital shapes used for lowercase letters, giving a clean typographic look without actually shrinking the text." },
      { type: "h2", text: "How to make small text" },
      { type: "ol", items: [
        "Open the small text or subscript generator and type your text.",
        "Pick superscript (raised), subscript (lowered), or small caps.",
        "Copy and paste into your bio or profile.",
      ]},
      { type: "cta", text: "Make raised and lowered text with the", href: "/subscript-generator", label: "Subscript & Superscript Generator" },
      { type: "h2", text: "Where it works best" },
      { type: "p", text: "Instagram and TikTok bios: a tiny line under your name reads as a designed subtitle. Discord: small caps in your display name or 'About Me' looks polished and survives across clients. The contrast between normal and tiny text is the whole effect, so use small text for a secondary line, not your main one." },
      { type: "h2", text: "The catch with superscript" },
      { type: "p", text: "The superscript and subscript blocks don't include every letter of the alphabet at full quality — a few letters are missing or look odd. If a word comes out with a stray normal-size letter, switch to small caps, which covers the whole alphabet cleanly." },
      { type: "links", heading: "Related styles", items: [
        { label: "Small Caps Generator", href: "/font-generator/small-caps" },
        { label: "Small Text", href: "/font-generator/small" },
        { label: "Discord Fonts", href: "/font-generator/discord" },
      ]},
    ],
  },
  {
    slug: "bubble-letters-generator-guide",
    title: "Bubble Letters Generator: Copy and Paste Bubble Text Free",
    description:
      "Bubble letters are rounded, circled characters that stand out in any caption, comment, or bio. Here's how to generate them and where they work best.",
    date: "2026-05-07",
    readingTime: "5 min read",
    excerpt:
      "Bubble text wraps each letter in a circle for a playful, eye-catching look. Here's how it works and where to use it.",
    body: [
      { type: "p", text: "Bubble letters — each character enclosed in a circle — are one of the most recognizable fancy-text styles. They look playful and pop in a feed full of plain text. Like other Unicode styles, they're free to generate and paste anywhere. Here's the rundown." },
      { type: "h2", text: "Where bubble letters come from" },
      { type: "p", text: "Bubble text uses the Enclosed Alphanumerics Unicode block, which provides circled versions of letters and numbers. There are two main looks: outlined bubbles (a circle around each letter) and filled/negative bubbles (a solid circle with the letter knocked out). A generator maps your text to whichever set you choose." },
      { type: "h2", text: "How to generate and paste" },
      { type: "ol", items: [
        "Open the bubble letters generator and type your text.",
        "Choose outlined or filled bubbles.",
        "Copy and paste into your caption, comment, or bio.",
      ]},
      { type: "cta", text: "Make circled text with the", href: "/font-generator/bubble", label: "Bubble Letters Generator" },
      { type: "h2", text: "Where bubble text works best" },
      { type: "p", text: "Bubble letters shine in short bursts: a one-word username accent, a playful caption, a comment that stands out. They're harder to read in long strings, so they're best for a name or a couple of words rather than a sentence." },
      { type: "h2", text: "Compatibility notes" },
      { type: "p", text: "The outlined letters are widely supported. The filled/negative-circle set is newer and a little less universal, so it occasionally shows boxes on older devices — preview before posting, and fall back to the outlined version if needed. Numbers in bubbles are very well supported across the board." },
      { type: "links", heading: "Playful styles", items: [
        { label: "Bubble Letters", href: "/font-generator/bubble" },
        { label: "Cool Fonts", href: "/font-generator/cool" },
        { label: "Aesthetic Symbols", href: "/symbols" },
      ]},
    ],
  },
  {
    slug: "strikethrough-text-copy-paste",
    title: "Strikethrough Text Copy and Paste: How to Cross Out Text in Any App",
    description:
      "Need to add a strikethrough on Instagram, Discord, or Twitter? Here's exactly how — including which platforms have native formatting and which need Unicode.",
    date: "2026-05-06",
    readingTime: "5 min read",
    excerpt:
      "Crossing out text is sometimes a built-in feature and sometimes a Unicode trick. Here's how to do it on each major app.",
    body: [
      { type: "p", text: "Strikethrough — a line drawn through text — is great for corrections, jokes, and crossing off list items. Some apps have it built in; others need a Unicode workaround. Here's how to cross out text on each major platform." },
      { type: "h2", text: "Apps with native strikethrough" },
      { type: "p", text: "A few apps format strikethrough for you, no generator needed:" },
      { type: "ul", items: [
        "WhatsApp: wrap text in tildes — ~like this~",
        "Discord: wrap text in double tildes — ~~like this~~",
        "Slack and many note apps: select text and apply strikethrough from the formatting toolbar.",
      ]},
      { type: "h2", text: "Apps that need the Unicode method" },
      { type: "p", text: "Instagram, Twitter/X, Facebook, and most bio fields have no strikethrough option. There, you use Unicode: a generator adds a combining 'long stroke overlay' mark to each character, so the line becomes part of the text itself and pastes in as plain text." },
      { type: "cta", text: "Cross out text anywhere with the", href: "/font-generator/strikethrough", label: "Strikethrough Text Generator" },
      { type: "h2", text: "How the Unicode version works" },
      { type: "p", text: "Each of your letters gets a combining stroke character layered on top of it. Because combining marks attach to the preceding character, the strike rides along wherever the text goes. The downside: it's built from combining marks, so a few apps that sanitize those may drop the line — preview before relying on it." },
      { type: "h2", text: "When to use which" },
      { type: "p", text: "If the app has native strikethrough (WhatsApp, Discord), use it — it's cleaner and accessible. Use the Unicode version only where there's no built-in option, like Instagram bios and captions or X." },
      { type: "links", heading: "Related styles", items: [
        { label: "Strikethrough Text", href: "/font-generator/strikethrough" },
        { label: "Underline Text", href: "/font-generator/underline" },
        { label: "Bold Text", href: "/font-generator/bold" },
      ]},
    ],
  },
  {
    slug: "aesthetic-symbols-instagram-bio",
    title: "Aesthetic Symbols for Instagram Bio: Copy and Paste Collection (2026)",
    description:
      "Stars, moons, flowers, crowns, hearts — a collection of decorative Unicode symbols organized by category, ready to copy and paste into your bio.",
    date: "2026-05-05",
    readingTime: "6 min read",
    excerpt:
      "The little symbols that frame an aesthetic bio are all Unicode. Here's how to use them well — and where to find a full library.",
    body: [
      { type: "p", text: "The tiny stars, moons, flowers, and hearts you see framing aesthetic Instagram bios are all Unicode symbols — single characters you copy and paste, the same as fancy text. Used with restraint, they turn a plain bio into something that looks designed. Here's how to use them and where to find them." },
      { type: "h2", text: "Why symbols work so well in bios" },
      { type: "p", text: "A bio is short, so a single well-placed symbol does a lot of visual work: it separates ideas, adds a theme (celestial, floral, cute), and breaks up text walls. Because symbols are plain-text characters, they paste into the bio field, captions, and your display name without any app support." },
      { type: "h2", text: "Popular categories" },
      { type: "ul", items: [
        "Celestial: stars, sparkles, moons, suns — the classic soft-aesthetic set.",
        "Floral and nature: flowers, leaves, four-pointed sparkles.",
        "Hearts: outline, solid, and decorative heart variants.",
        "Crowns, arrows, and dividers: for structure and a touch of flair.",
      ]},
      { type: "cta", text: "Browse a full categorized library in the", href: "/symbols", label: "Cool Symbols collection" },
      { type: "h2", text: "How to use them tastefully" },
      { type: "p", text: "The rule is restraint. One symbol as a bullet between lines, or a matching pair framing your name, looks intentional. A dozen scattered symbols looks cluttered and hurts readability. Pick one theme and stick to it." },
      { type: "h2", text: "Pair symbols with a styled font" },
      { type: "p", text: "Symbols look best alongside a subtle font style — small caps or light cursive — rather than competing with a loud one. Combine a soft script name, a plain searchable keyword line, and one or two themed symbols for a clean aesthetic profile." },
      { type: "links", heading: "Build your bio", items: [
        { label: "Cool Symbols Library", href: "/symbols" },
        { label: "Cursive Font Generator", href: "/font-generator/cursive" },
        { label: "Instagram Fonts", href: "/font-generator/instagram" },
      ]},
    ],
  },
  {
    slug: "cool-discord-username-ideas",
    title: "Cool Discord Username Ideas Using Unicode Special Characters",
    description:
      "Want a Discord display name that stands out in the member list? Unicode characters let you create unique names — bold, gothic, cursive, and more.",
    date: "2026-05-04",
    readingTime: "5 min read",
    excerpt:
      "A styled Discord display name jumps out in any member list. Here's how to build one with Unicode — and what to avoid.",
    body: [
      { type: "p", text: "Discord display names are where Unicode styling pays off most: the member list is a long column of plain names, so a styled one immediately catches the eye. You can use bold, gothic, cursive, small caps, and decorative symbols. Here's how to put together a name that looks good and still works." },
      { type: "h2", text: "Display name vs. username" },
      { type: "p", text: "Discord now separates your unique username (lowercase, restricted characters, used for the @handle) from your display name (what people actually see). Styling goes in the display name — the username stays plain. So you keep a clean, mention-able handle and a decorated name on top." },
      { type: "h2", text: "Style ideas that work" },
      { type: "ul", items: [
        "Gothic / blackletter for a dark, dramatic look.",
        "Bold for clean visibility without exotic characters.",
        "Cursive for an elegant, softer name.",
        "Small caps for a tidy, minimal aesthetic.",
        "A single symbol prefix (a star or sigil) as a role-style accent.",
      ]},
      { type: "cta", text: "Generate names that survive Discord's rendering with the", href: "/font-generator/discord", label: "Discord Font Generator" },
      { type: "h2", text: "Go gothic for a server identity" },
      { type: "p", text: "Blackletter names are especially popular for gaming and community servers because they read as a distinct brand. Just keep them legible — a fully decorated, hard-to-read name annoys people trying to reference you." },
      { type: "h2", text: "Compatibility tips" },
      { type: "ul", items: [
        "Test on a friend's older phone — the Mathematical Fraktur block can show boxes on older Android.",
        "Avoid characters that visually duplicate another member's name; Discord may flag it as impersonation.",
        "Don't overload with combining marks (glitch/zalgo) — it can break layout and reads as spam.",
      ]},
      { type: "links", heading: "Name styles to try", items: [
        { label: "Gothic Font Generator", href: "/font-generator/gothic" },
        { label: "Discord Fonts", href: "/font-generator/discord" },
        { label: "Username Generator", href: "/username-generator" },
      ]},
    ],
  },
  {
    slug: "invisible-character-copy-paste",
    title: "Invisible Character Copy and Paste: What It Is and How to Use It",
    description:
      "An invisible character is a real Unicode character that takes up space but has no visible shape. Here's what it is, why it exists, and how people use it.",
    date: "2026-05-03",
    readingTime: "5 min read",
    excerpt:
      "Invisible characters look like nothing but count as text. Here's what they are and the legitimate ways people use them.",
    body: [
      { type: "p", text: "An invisible character is exactly what it sounds like: a real Unicode character that renders as nothing — no shape, sometimes not even width — but still counts as text. People use them to create 'blank' messages, blank usernames, and spacing tricks. Here's how they work and where they're useful." },
      { type: "h2", text: "What an invisible character actually is" },
      { type: "p", text: "There are several. Some are spacing characters with no ink, like the Hangul Filler or various Unicode spaces. Others are zero-width characters, like the zero-width space, that take up no visible room at all. Because they're genuine characters, apps treat a field containing one as 'not empty,' which is the source of most of their uses." },
      { type: "h2", text: "How to use one" },
      { type: "ol", items: [
        "Open an invisible text generator and copy the blank character.",
        "Paste it wherever you need an apparently empty value.",
        "Verify the field accepted it — some apps trim leading/trailing blanks.",
      ]},
      { type: "cta", text: "Copy a working blank character from the", href: "/invisible-text-generator", label: "Invisible Text Generator" },
      { type: "h2", text: "Legitimate uses" },
      { type: "ul", items: [
        "A blank-looking username or display name where the app requires a non-empty value.",
        "Sending an 'empty' message or status on apps that won't send a truly blank one.",
        "Adding spacing in bios where normal spaces get trimmed.",
        "Placeholder values in forms during testing.",
      ]},
      { type: "h2", text: "Why it sometimes fails" },
      { type: "p", text: "Many apps strip leading and trailing whitespace, and some specifically filter zero-width characters to prevent abuse. If a blank value won't save, try a different invisible character — a no-ink spacing character often survives where a zero-width one gets removed. Don't use them to hide content deceptively; platforms increasingly detect that." },
      { type: "links", heading: "Related tools", items: [
        { label: "Invisible Text Generator", href: "/invisible-text-generator" },
        { label: "Discord Fonts", href: "/font-generator/discord" },
        { label: "Username Generator", href: "/username-generator" },
      ]},
    ],
  },
  {
    slug: "upside-down-text-generator-guide",
    title: "Upside Down Text Generator: How to Flip Text and What It Actually Does",
    description:
      "Upside down text uses Unicode characters that look like flipped letters. Here's how it works, how to generate it, and where it has the most impact.",
    date: "2026-05-02",
    readingTime: "5 min read",
    excerpt:
      "Flipped text isn't rotated — it's clever Unicode look-alikes. Here's how upside down text works and where to use it.",
    body: [
      { type: "p", text: "Upside down text — sʇxǝʇ ǝʞıl sıɥʇ — looks like someone rotated your message 180 degrees. It's a fun novelty for bios, comments, and messages. But nothing is actually being rotated: it's built from Unicode characters that happen to resemble flipped letters. Here's how it works." },
      { type: "h2", text: "How flipping actually works" },
      { type: "p", text: "A generator does two things. First, it replaces each letter with a Unicode character that looks like its upside-down twin — for example, an 'e' becomes 'ǝ,' a 'y' becomes 'ʎ.' Many of these come from the International Phonetic Alphabet and other blocks. Second, it reverses the order of the characters, so when you read the flipped string top-to-bottom it appears to start from the 'end.'" },
      { type: "h2", text: "How to generate it" },
      { type: "ol", items: [
        "Open the upside down generator and type normally.",
        "Copy the flipped output.",
        "Paste it into your bio, comment, or message.",
      ]},
      { type: "cta", text: "Flip your text instantly with the", href: "/font-generator/upside-down", label: "Upside Down Text Generator" },
      { type: "h2", text: "Where it has the most impact" },
      { type: "p", text: "Upside down text is a pattern interrupt — it stops the scroll because it's genuinely hard to parse at a glance. That makes it great for a surprising comment, a quirky bio line, or a playful message. It's a novelty, so a few words land better than a paragraph." },
      { type: "h2", text: "Compatibility" },
      { type: "p", text: "Most of the flipped characters are well supported on modern devices, but a handful of letters rely on rarer codepoints that can show boxes on older systems. Capital letters are less reliable than lowercase, so lowercase phrases flip most cleanly. Preview before posting." },
      { type: "links", heading: "More novelty styles", items: [
        { label: "Upside Down Text", href: "/font-generator/upside-down" },
        { label: "Weird Fonts", href: "/font-generator/weird" },
        { label: "Cool Fonts", href: "/font-generator/cool" },
      ]},
    ],
  },
  {
    slug: "vaporwave-text-generator-guide",
    title: "Vaporwave Text Generator: How to Make Aesthetic Ａｅｓｔｈｅｔｉｃ Full-Width Fonts",
    description:
      "Vaporwave text uses wide full-width Unicode characters for a retro 80s digital aesthetic. Here's what it is, where it came from, and how to generate it.",
    date: "2026-05-01",
    readingTime: "5 min read",
    excerpt:
      "Those wide, spaced-out ａｅｓｔｈｅｔｉｃ letters are full-width Unicode. Here's the story behind vaporwave text and how to make it.",
    body: [
      { type: "p", text: "Vaporwave text — the wide, evenly-spaced ｌｅｔｔｅｒｓ with a retro feel — is one of the most distinctive aesthetic styles online. It's tied to the vaporwave art and music movement, and it's made from a single Unicode block. Here's where it comes from and how to generate it." },
      { type: "h2", text: "What makes text 'vaporwave'" },
      { type: "p", text: "The look uses full-width characters from the Halfwidth and Fullwidth Forms Unicode block (U+FF00–U+FFEF). These were created so that Latin letters could sit comfortably alongside East Asian characters, which occupy a full square 'em' of width. Borrowed for aesthetics, that extra width gives text its spaced-out, retro-computer feel." },
      { type: "h2", text: "Why it became a vaporwave staple" },
      { type: "p", text: "Vaporwave aesthetics lean on 80s and 90s digital nostalgia — early computers, Japanese ad design, mall culture. Full-width text looks like it came off a vintage Japanese operating system, so it became visual shorthand for the whole movement. You'll see it in album art, usernames, and aesthetic bios." },
      { type: "h2", text: "How to generate vaporwave text" },
      { type: "ol", items: [
        "Open the vaporwave generator and type your text.",
        "Copy the full-width output.",
        "Paste it into your bio, caption, or username.",
      ]},
      { type: "cta", text: "Make full-width aesthetic text with the", href: "/font-generator/vaporwave", label: "Vaporwave Text Generator" },
      { type: "h2", text: "Compatibility and tips" },
      { type: "p", text: "Full-width characters are very widely supported, so vaporwave text rarely shows boxes — one of the safest aesthetic styles. Because each letter is double-width, it eats character limits fast, so it's best for short bios and names. Pair it with a couple of celestial symbols to complete the look." },
      { type: "links", heading: "Aesthetic styles", items: [
        { label: "Vaporwave Text", href: "/font-generator/vaporwave" },
        { label: "Aesthetic Symbols", href: "/symbols" },
        { label: "Cool Fonts", href: "/font-generator/cool" },
      ]},
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}
