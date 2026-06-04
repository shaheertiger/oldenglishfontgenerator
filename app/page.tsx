import type { Metadata } from "next";
import Link from "next/link";
import Generator from "@/components/Generator";
import CategorySection from "@/components/CategorySection";
import UsecaseArt from "@/components/UsecaseArt";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { PAGES } from "@/lib/pages";
import { OLD_ENGLISH_FAMILY } from "@/lib/fonts";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Old English Font Generator – Copy & Paste Gothic & Blackletter Text",
  description:
    "Free Old English font generator with 60+ blackletter, gothic, medieval, and fraktur styles. Copy and paste into Instagram, TikTok, Discord, YouTube, bios, and usernames.",
  keywords: [
    "old english font",
    "old english font generator",
    "blackletter font",
    "gothic font generator",
    "fraktur generator",
    "medieval text generator",
  ],
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      "en-US": `${SITE_URL}/`,
      "es-ES": `${SITE_URL}/es`,
    },
  },
  openGraph: {
    title: "Old English Font Generator – Gothic & Blackletter Styles",
    description:
      "Convert any text into Old English, gothic, blackletter, fraktur, and medieval Unicode styles. Free, instant, copy & paste.",
    url: `${SITE_URL}/`,
    type: "website",
  },
};

const PILLS = [
  { label: "Cursive", href: "/font-generator/cursive" },
  { label: "Instagram Fonts", href: "/font-generator/instagram" },
  { label: "Cool Fonts: Copy & Paste", href: "/font-generator/cool" },
  { label: "Bold", href: "/font-generator/bold" },
  { label: "Strikethrough Text", href: "/font-generator/strikethrough" },
  { label: "Bubble", href: "/font-generator/bubble" },
  { label: "Italic", href: "/font-generator/italic" },
  { label: "Fancy", href: "/font-generator/fancy" },
  { label: "Stylish", href: "/font-generator/stylish" },
  { label: "Glitch", href: "/font-generator/glitch" },
  { label: "Zalgo", href: "/font-generator/zalgo" },
  { label: "Cursed", href: "/font-generator/cursed" },
  { label: "Creepy", href: "/font-generator/creepy" },
  { label: "Small Caps", href: "/font-generator/small-caps" },
  { label: "Upside Down", href: "/font-generator/upside-down" },
  { label: "Underline", href: "/font-generator/underline" },
  { label: "Big", href: "/font-generator/big" },
  { label: "Weird", href: "/font-generator/weird" },
  { label: "Discord Fonts", href: "/font-generator/discord" },
  { label: "TikTok Fonts", href: "/font-generator/tiktok" },
  { label: "Twitter / X", href: "/font-generator/twitter" },
  { label: "Facebook Fonts", href: "/font-generator/facebook" },
];

const LINK_GROUPS = [
  {
    title: "Popular Font Generators",
    links: [
      { label: "Cursive Font Generator", href: "/font-generator/cursive" },
      { label: "Instagram Font Generator", href: "/font-generator/instagram" },
      { label: "Cool Fonts Generator", href: "/font-generator/cool" },
      { label: "Bold Text Generator", href: "/font-generator/bold" },
    ],
  },
  {
    title: "Gothic & Old English Tools",
    links: [
      { label: "Old English Font Generator", href: "/font-generator/old-english" },
      { label: "Gothic Font Generator", href: "/font-generator/gothic" },
      { label: "Blackletter Font Generator", href: "/font-generator/blackletter" },
      { label: "Fraktur Font Generator", href: "/font-generator/fraktur" },
      { label: "Tattoo Font Generator", href: "/font-generator/tattoo" },
    ],
  },
  {
    title: "Social Media Fonts",
    links: [
      { label: "Instagram Fonts", href: "/font-generator/instagram" },
      { label: "TikTok Fonts", href: "/font-generator/tiktok" },
      { label: "Discord Fonts", href: "/font-generator/discord" },
      { label: "Facebook Fonts", href: "/font-generator/facebook" },
    ],
  },
];

const POPULAR_USES = [
  { art: "tattoo" as const, h: "Tattoo mockups", p: "Preview a name or quote in dozens of blackletter variants before booking your artist." },
  { art: "instagram" as const, h: "Instagram bios", p: "Drop Old English text into your bio, captions, and comments for instant personality." },
  { art: "discord" as const, h: "Discord usernames", p: "Gothic nicknames and status text that render the same across every Discord client." },
  { art: "logo" as const, h: "Gothic logos", p: "Sketch wordmarks and band-style logos in blackletter before committing to a vector typeface." },
  { art: "invite" as const, h: "Wedding invites", p: "Mock up event titles and names in medieval scripts before sending them to your designer." },
  { art: "youtube" as const, h: "YouTube titles", p: "Use Old English text in video titles, end-screen cards, and channel descriptions." },
];

const USE_CASES = [
  { art: "instagram" as const, h: "Instagram bios & captions", p: "Drop blackletter text into your bio for instant personality. Works in captions and comments too." },
  { art: "discord" as const, h: "Discord usernames & status", p: "Stand out on every server. Gothic Unicode renders the same on desktop, web, and mobile clients." },
  { art: "tattoo" as const, h: "Tattoo lettering mockups", p: "Preview how a name or quote looks in dozens of blackletter variants before talking to an artist." },
  { art: "logo" as const, h: "Logo & brand text", p: "Sketch logo wordmarks in gothic styles before committing to a vector typeface." },
  { art: "gaming" as const, h: "Gaming profiles", p: "Steam, Xbox, and PSN accept most blackletter ranges in display names." },
  { art: "youtube" as const, h: "YouTube titles", p: "Use Old English text in video titles, end-screen cards, and channel descriptions." },
  { art: "tiktok" as const, h: "TikTok captions", p: "Catch the eye on the For You feed without changing video copy." },
  { art: "invite" as const, h: "Wedding & invites", p: "Mock up event titles in medieval scripts before sending to your designer." },
];

const FAQ = [
  {
    q: "What is an Old English font?",
    a: "Old English is a name for the family of blackletter typefaces — tall, angular, ornate scripts used by medieval European scribes and later printers. The look survived into the modern era on diplomas, newspaper mastheads, tattoos, and logos because it reads as formal or ceremonial.",
  },
  {
    q: "Is this an actual font, or just text?",
    a: "It's text. The generator swaps each letter for a Unicode codepoint that looks like Old English. Because the result is still plain text, it pastes into apps that don't let you change fonts.",
  },
  {
    q: "How do I use Old English fonts on Instagram?",
    a: "Type your text in the generator, tap a style to copy it, then open Instagram and paste it into your bio, post caption, or comment. Bios accept the widest range; usernames sometimes filter unusual characters.",
  },
  {
    q: "How do I add blackletter text to TikTok?",
    a: "Copy a style here, then paste it into your TikTok bio (Profile → Edit profile → Bio) or directly into a video caption. The Unicode renders identically on web and the iOS/Android apps.",
  },
  {
    q: "Will it work on Discord?",
    a: "Yes. Discord accepts Unicode in messages, server nicknames, custom status, and channel names. For bold or italic inside a message you can also use Discord's markdown (**bold**, *italic*) — Unicode is the only option for usernames.",
  },
  {
    q: "Old English vs. gothic vs. blackletter — what's the difference?",
    a: "All three describe the same broad family. Blackletter is the typographic term, gothic is the everyday word, and Old English is what most sign painters and tattooists call it. Stylistic siblings, not different scripts.",
  },
  {
    q: "Can I use this for a tattoo?",
    a: "For mockups, absolutely — preview your phrase in every style. For the actual tattoo, your artist will need a real vector font (TTF/OTF) so the linework stays sharp at any size. Use the generator to decide which style you want.",
  },
  {
    q: "Are these fonts safe to use in usernames?",
    a: "Bios and captions accept the full Unicode range across all major platforms. Username fields are stricter — Instagram, X, and TikTok filter some exotic characters. If a variant won't save, try one closer to standard letters (Small Caps, Bold Serif).",
  },
  {
    q: "Why do some characters look like empty boxes?",
    a: "Your device doesn't ship a font that covers those Unicode codepoints. Modern iOS and Android cover most ranges; some older Android builds and Windows fonts fall back to boxes.",
  },
  {
    q: "Is it really free?",
    a: "Yes. No sign-up, no watermark, no usage limits. Everything runs in your browser.",
  },
  {
    q: "Will heavily stylized text hurt my SEO?",
    a: "Search engines index the underlying Unicode codepoints, not the visual style. Stylized bios are harder to find via search, so reserve styling for emphasis and keep important keywords in plain text.",
  },
  {
    q: "Are these readable by screen readers?",
    a: "Inconsistently. Most screen readers either read each character by its Unicode name or skip it. Keep critical messages in standard letters if accessibility matters.",
  },
  {
    q: "Can I combine multiple styles in one post?",
    a: "Yes — paste different styles into different parts of your text. Each chunk of Unicode is independent.",
  },
  {
    q: "Which Unicode blocks power these styles?",
    a: "Most of the variants come from the Mathematical Alphanumeric Symbols block (U+1D400–U+1D7FF), which covers bold, italic, fraktur, script, double-struck, and monospace alphabets. Decorative variants pull from Enclosed Alphanumerics (U+2460–U+24FF), Halfwidth and Fullwidth Forms (U+FF00–U+FFEF), and Combining Diacritical Marks (U+0300–U+036F) for glitch and underline effects.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#app`,
  name: "Old English Font Generator",
  url: `${SITE_URL}/`,
  applicationCategory: "DesignApplication",
  operatingSystem: "Web",
  browserRequirements: "Requires JavaScript.",
  description:
    "Free online tool that converts plain text into 60+ Old English, blackletter, gothic, and medieval Unicode styles you can copy and paste anywhere.",
  inLanguage: "en",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  featureList: [
    "60+ blackletter, gothic, fraktur, and medieval styles",
    "Instant copy and paste",
    "Works on Instagram, TikTok, Discord, YouTube, and X",
    "No sign-up, watermark, or usage limits",
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Font Generator", item: `${SITE_URL}/font-generator` },
    { "@type": "ListItem", position: 3, name: "Old English Font Generator", item: `${SITE_URL}/` },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SiteHeader />
      <main>
        <div className="container">
          <section className="hero" id="generator">
            <h1>Old English Font Generator</h1>
            <p className="lead">
              Type your text and instantly convert it into Old English, gothic,
              blackletter, Fraktur, and medieval Unicode fonts. Copy and paste
              the result into Instagram, TikTok, Discord, YouTube, bios,
              usernames, and captions.
            </p>

            <Generator
              styles={OLD_ENGLISH_FAMILY}
              pills={PILLS}
              resultsTitle="Old English Font Styles"
              initialVisible={8}
            />

            <div className="ad-slot" aria-hidden="true">Advertisement</div>
          </section>
        </div>

        <div className="container">
          <CategorySection
            title="Cursive Fonts"
            description="Smooth, flowing script styles that read like fountain-pen handwriting."
            href="/font-generator/cursive"
            styles={["script", "script-bold", "italic-serif", "bold-italic-serif"]}
            sample="cursive text"
          />
          <CategorySection
            title="Bold Fonts"
            description="Heavy, attention-grabbing letterforms in serif, sans, and italic."
            href="/font-generator/bold"
            styles={["bold-serif", "bold-italic-serif", "sans-bold", "sans-bold-italic"]}
            sample="bold text"
          />
          <CategorySection
            title="Fancy Fonts"
            description="Decorative, ornate styles for headlines, posts, and profiles."
            href="/font-generator/fancy"
            styles={["script", "fraktur", "double-struck", "small-caps"]}
            sample="fancy text"
          />
          <CategorySection
            title="Italic Fonts"
            description="Slanted Unicode variants for emphasis where formatting isn't available."
            href="/font-generator/italic"
            styles={["italic-serif", "bold-italic-serif", "sans-italic", "sans-bold-italic"]}
            sample="italic text"
          />

          <div className="ad-slot" aria-hidden="true">Advertisement</div>

          <CategorySection
            title="Bubble Fonts"
            description="Circled, balloon-like letters in outlined and filled variants."
            href="/font-generator/bubble"
            styles={["bubble", "bubble-filled", "squared"]}
            sample="bubble text"
          />
          <CategorySection
            title="Small Caps"
            description="ʟᴏᴡᴇʀᴄᴀsᴇ ʟᴇᴛᴛᴇʀs ɪɴ ᴄᴀᴘɪᴛᴀʟ shapes — minimal and typographic."
            href="/font-generator/small-caps"
            styles={["small-caps", "fraktur", "sans-bold"]}
            sample="small caps"
          />
          <CategorySection
            title="Glitch & Zalgo"
            description="Stacked combining marks for corrupted, eerie, and unsettling text."
            href="/font-generator/glitch"
            styles={["zalgo-soft", "zalgo", "zalgo-extreme"]}
            sample="glitch text"
          />
          <CategorySection
            title="Instagram Fonts"
            description="The styles people actually use in IG bios, captions, and stories."
            href="/font-generator/instagram"
            styles={["script", "fraktur", "small-caps", "double-struck"]}
            sample="instagram bio"
          />
          <CategorySection
            title="Discord Fonts"
            description="Username, status, and message styles that survive Discord's filters."
            href="/font-generator/discord"
            styles={["fraktur", "bold-serif", "italic-serif", "monospace"]}
            sample="discord name"
          />
        </div>

        <section className="section" id="more-generators">
          <div className="container">
            <div className="eyebrow">Keep exploring</div>
            <h2>More font generators</h2>
            <p>Jump straight to the most popular styles, grouped by what people search for.</p>
            <div className="link-cards">
              {LINK_GROUPS.map((group) => (
                <div className="link-card" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.links.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href}>{l.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="how">
          <div className="container">
            <div className="eyebrow">Using the generator</div>
            <h2>How to copy &amp; paste Old English fonts</h2>
            <div className="steps">
              <div className="step">
                <div className="num">01</div>
                <h3>Type your text</h3>
                <p>Enter a name, phrase, caption, username, or bio in the box above. Output updates as you type.</p>
              </div>
              <div className="step">
                <div className="num">02</div>
                <h3>Pick a style</h3>
                <p>Scroll through 60+ blackletter, gothic, and medieval variants until one fits the tone.</p>
              </div>
              <div className="step">
                <div className="num">03</div>
                <h3>Tap to copy</h3>
                <p>Tap the row to copy. Paste anywhere plain text is allowed — Instagram, TikTok, Discord, X, anywhere.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="use-cases">
          <div className="container">
            <div className="eyebrow">Where it works</div>
            <h2>Use cases for Old English text</h2>
            <p>The same blackletter output looks at home in a dozen different places. A few of the most common:</p>
            <div className="usecases">
              {USE_CASES.map((u) => (
                <div className="usecase" key={u.h}>
                  <UsecaseArt name={u.art} />
                  <h3>{u.h}</h3>
                  <p>{u.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="container">
          <div className="ad-slot" aria-hidden="true">Advertisement</div>
        </div>

        <section className="section" id="about">
          <div className="container">
            <div className="eyebrow">Background</div>
            <h2>What is an Old English font?</h2>
            <p>
              Old English refers to the dense, angular blackletter scripts
              that medieval scribes used across Europe between the 12th and
              17th centuries. When Gutenberg cast type for the first printed
              books, he based his letterforms on blackletter — that&rsquo;s
              why the style still reads as &ldquo;old&rdquo; today. The look
              survives in newspaper mastheads, diplomas, certificate borders,
              tattoos, metal album covers, and luxury brand logos.
            </p>
            <h2 style={{ marginTop: 36 }}>Old English vs. gothic vs. blackletter</h2>
            <p>
              These are three names for one family. Blackletter is the
              typographer&rsquo;s term; gothic is the everyday word; Old
              English is what most sign shops, tattoo artists, and font
              marketplaces call it. Inside the family there are subgenres —
              textura, rotunda, schwabacher, fraktur — that differ in how
              strokes break and curve. The styles you see in this generator
              approximate the most recognizable of those subgenres using
              Unicode characters.
            </p>
            <h2 style={{ marginTop: 36 }}>How the Unicode trick works</h2>
            <p>
              Real fonts are vector files installed on your device. Unicode
              &ldquo;fonts&rdquo; aren&rsquo;t — they&rsquo;re separate
              characters in the Unicode standard that happen to look like
              styled versions of A–Z. The Mathematical Alphanumeric Symbols
              block (U+1D400–U+1D7FF) covers bold, italic, fraktur, script,
              double-struck, and monospace. When the generator outputs a
              blackletter A, it&rsquo;s sending codepoint U+1D504. Because
              the result is plain text, it survives copy/paste into any app
              — even apps that don&rsquo;t let you change fonts. Decorative
              variants pull from Enclosed Alphanumerics (U+2460–U+24FF),
              Fullwidth Forms (U+FF00–U+FFEF), and Combining Diacritical
              Marks (U+0300–U+036F) for glitch and underline effects.
            </p>
          </div>
        </section>

        <section className="section" id="popular-uses">
          <div className="container">
            <div className="eyebrow">Popular uses</div>
            <h2>Popular ways people use Old English fonts</h2>
            <p>A few of the most common places this gothic and blackletter text ends up.</p>
            <div className="usecases">
              {POPULAR_USES.map((u) => (
                <div className="usecase" key={u.h}>
                  <UsecaseArt name={u.art} />
                  <h3>{u.h}</h3>
                  <p>{u.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="container">
            <h2>Frequently Asked Questions</h2>
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section" id="more">
          <div className="container">
            <div className="eyebrow">Keep exploring</div>
            <h2>All font generators</h2>
            <div className="features">
              {PAGES.slice(0, 12).map((p) => (
                <Link key={p.slug} href={`/font-generator/${p.slug}`} className="feature">
                  <h3>{p.h1}</h3>
                  <p>{p.description}</p>
                </Link>
              ))}
            </div>
            <p style={{ marginTop: 24 }}>
              <Link href="/font-generator">See every font generator →</Link>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
