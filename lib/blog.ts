export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string };

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
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}
