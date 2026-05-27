import type { Metadata } from "next";
import Link from "next/link";
import Generator from "@/components/Generator";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { PAGES } from "@/lib/pages";
import { OLD_ENGLISH_FAMILY } from "@/lib/fonts";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Old English Font Generator – 25+ Blackletter, Gothic & Fraktur Styles",
  description:
    "Free Old English font generator with 25+ blackletter, gothic, medieval, and fraktur styles. Copy and paste into Instagram, TikTok, Discord, YouTube, bios, and usernames.",
  keywords: [
    "old english font",
    "old english font generator",
    "blackletter font",
    "gothic font generator",
    "fraktur generator",
    "medieval text generator",
    "tattoo font",
  ],
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title: "Old English Font Generator – 25+ Gothic & Blackletter Styles",
    description:
      "Convert any text into Old English, gothic, blackletter, fraktur, and medieval Unicode styles. Free, instant, copy & paste.",
    url: `${SITE_URL}/`,
    type: "website",
  },
};

const CATEGORIES = [
  { label: "Cursive", href: "/font-generator/cursive" },
  { label: "Bold", href: "/font-generator/bold" },
  { label: "Italic", href: "/font-generator/italic" },
  { label: "Fancy", href: "/font-generator/fancy" },
  { label: "Stylish", href: "/font-generator/stylish" },
  { label: "Bubble", href: "/font-generator/bubble" },
  { label: "Small Caps", href: "/font-generator/small-caps" },
  { label: "Strikethrough", href: "/font-generator/strikethrough" },
  { label: "Underline", href: "/font-generator/underline" },
  { label: "Glitch", href: "/font-generator/glitch" },
  { label: "Zalgo", href: "/font-generator/zalgo" },
  { label: "Upside Down", href: "/font-generator/upside-down" },
  { label: "Instagram", href: "/font-generator/instagram" },
  { label: "TikTok", href: "/font-generator/tiktok" },
  { label: "Discord", href: "/font-generator/discord" },
  { label: "Twitter / X", href: "/font-generator/twitter" },
  { label: "Facebook", href: "/font-generator/facebook" },
  { label: "Cool", href: "/font-generator/cool" },
];

const USE_CASES = [
  {
    h: "Instagram bios & captions",
    p: "Drop blackletter text into your bio for instant personality. Works in captions and comments too.",
  },
  {
    h: "Discord usernames & status",
    p: "Stand out on every server. Gothic Unicode renders the same on desktop, web, and mobile clients.",
  },
  {
    h: "Tattoo lettering mockups",
    p: "Preview how a name or quote looks in dozens of blackletter variants before talking to an artist.",
  },
  {
    h: "Logo & brand text",
    p: "Sketch logo wordmarks in gothic styles before committing to a vector typeface.",
  },
  {
    h: "Username generators",
    p: "Layer gothic with small caps or outline for a profile name people remember.",
  },
  {
    h: "YouTube titles & channel art",
    p: "Use Old English text in video titles, end-screen cards, and channel descriptions.",
  },
  {
    h: "TikTok captions",
    p: "Catch the eye on the For You feed without changing video copy.",
  },
  {
    h: "Gaming profiles",
    p: "Steam, Xbox, and PSN accept most blackletter ranges in display names.",
  },
];

const FAQ = [
  {
    q: "What is an Old English font?",
    a: "Old English is shorthand for a family of blackletter typefaces — tall, angular, ornate scripts used by medieval European scribes and later printers. The look survived into the modern era on diplomas, newspaper mastheads, tattoos, and logos because it instantly reads as formal or ceremonial.",
  },
  {
    q: "Is this an actual font or just text?",
    a: "It's text. The generator swaps each letter for a Unicode codepoint that looks like Old English. Because the result is still plain text, it pastes into apps that don't let you change fonts.",
  },
  {
    q: "Will it work on Instagram, TikTok, and Discord?",
    a: "Yes. Bios, captions, comments, and most username fields accept the Unicode ranges used here. A few apps strip rare characters from usernames; in that case try a different variant.",
  },
  {
    q: "Old English vs. gothic vs. blackletter — what's the difference?",
    a: "All three describe the same broad family. 'Blackletter' is the umbrella term for the dense, angular medieval script. 'Gothic' is the same thing in everyday English. 'Old English' is the name most US sign painters and tattooists use. They're stylistic siblings, not different scripts.",
  },
  {
    q: "Can I use this for a tattoo?",
    a: "For mockups, absolutely — preview your phrase in every style before choosing one. For the actual tattoo, your artist will need a real vector font (TTF/OTF) so the linework stays sharp at any size. The generator helps you decide which style you want.",
  },
  {
    q: "Why do some styles look like empty boxes on my phone?",
    a: "Your device doesn't ship a font that covers those Unicode codepoints. Modern iOS and Android phones cover most ranges; some older Android builds and Windows fonts fall back to boxes.",
  },
  {
    q: "Is it really free?",
    a: "Yes. No sign-up, no watermark, no usage limits. The tool runs entirely in your browser, so we don't see your text.",
  },
  {
    q: "Can I use the output in print or in a vector logo?",
    a: "Unicode characters don't translate to print quality at large sizes. Use the generator to choose a style, then ask your designer for a matching blackletter typeface in TTF/OTF for the final artwork.",
  },
  {
    q: "Do these characters affect SEO or search visibility?",
    a: "Search engines index the underlying Unicode codepoints, not the visual style. Heavily stylized bios are harder to find in search; reserve the styling for emphasis and keep important keywords in plain text.",
  },
  {
    q: "Are screen readers compatible with this text?",
    a: "Most screen readers either read each character by its Unicode name or skip it entirely. If accessibility matters for your post, keep the critical message in standard letters.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero container" id="generator">
          <h1>
            <span className="fancy">Old English</span> Font Generator
          </h1>
          <p className="lead">
            Convert any text into 25+ Old English, gothic, blackletter,
            medieval, and fraktur styles. Copy and paste into Instagram,
            TikTok, Discord, YouTube, bios, usernames, tattoos — anywhere
            plain text is allowed.
          </p>

          <div className="badges">
            <span className="badge">Free forever</span>
            <span className="badge">No sign-up</span>
            <span className="badge">25+ styles</span>
            <span className="badge">Copy & paste</span>
            <span className="badge">Runs in your browser</span>
          </div>

          <div style={{ marginTop: 32 }}>
            <Generator styles={OLD_ENGLISH_FAMILY} />
          </div>
        </section>

        <section className="section" id="how">
          <div className="container">
            <div className="eyebrow">Using the generator</div>
            <h2>How to use the Old English font generator</h2>
            <p>
              Three steps. Nothing installs, nothing uploads, nothing waits
              for a server.
            </p>
            <div className="steps">
              <div className="step">
                <div className="num">01</div>
                <h3>Type your text</h3>
                <p>
                  Enter a name, phrase, caption, username, or bio in the box
                  above. The output updates as you type.
                </p>
              </div>
              <div className="step">
                <div className="num">02</div>
                <h3>Pick a style</h3>
                <p>
                  Scroll the preview list and find the variant that fits the
                  tone — classic, bold, decorative, glitched, or spaced.
                </p>
              </div>
              <div className="step">
                <div className="num">03</div>
                <h3>Copy and paste</h3>
                <p>
                  Hit copy. Paste anywhere plain text is allowed — Instagram,
                  TikTok, Discord, X, WhatsApp, email, anywhere.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="categories">
          <div className="container">
            <div className="eyebrow">Browse by style</div>
            <h2>More font generators</h2>
            <p>
              Each style has its own page with dedicated previews, examples,
              and tips for the platform it fits best.
            </p>
            <div className="cat-strip">
              {CATEGORIES.map((c) => (
                <Link key={c.href} href={c.href} className="cat-pill">
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="use-cases">
          <div className="container">
            <div className="eyebrow">Where it works</div>
            <h2>Use cases for Old English text</h2>
            <p>
              The same blackletter output looks at home in a dozen different
              places. A few of the most common:
            </p>
            <div className="usecases">
              {USE_CASES.map((u) => (
                <div className="usecase" key={u.h}>
                  <h3>{u.h}</h3>
                  <p>{u.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <div className="eyebrow">Background</div>
            <h2>What is an Old English font?</h2>
            <p>
              Old English refers to the dense, angular blackletter scripts
              that medieval scribes used across Europe between the 12th and
              17th centuries. When Gutenberg cast type for the first printed
              books, he based his letterforms on blackletter — that's why the
              style still reads as &ldquo;old&rdquo; and ceremonial today.
              The look survived in newspaper mastheads, diplomas, certificate
              borders, tattoos, metal album covers, and luxury brand logos.
            </p>
            <h2 style={{ marginTop: 36 }}>Old English vs. gothic vs. blackletter</h2>
            <p>
              These are three names for one family. &ldquo;Blackletter&rdquo;
              is the typographer&rsquo;s term; &ldquo;gothic&rdquo; is the
              everyday word; &ldquo;Old English&rdquo; is what most sign
              shops, tattoo artists, and font marketplaces call it. Inside
              the family there are subgenres — textura, rotunda, schwabacher,
              fraktur — that differ in how the strokes break and curve. The
              styles you see in this generator approximate the most
              recognizable of those subgenres using Unicode characters.
            </p>
            <h2 style={{ marginTop: 36 }}>How the Unicode trick works</h2>
            <p>
              Real fonts are vector files installed on your device. Unicode
              &ldquo;fonts&rdquo; aren&rsquo;t — they&rsquo;re separate
              characters in the Unicode standard that happen to look like
              styled versions of A–Z. The Mathematical Alphanumeric Symbols
              block (U+1D400–U+1D7FF) covers bold, italic, fraktur, script,
              double-struck, and monospace. When the generator outputs a
              blackletter A, it&rsquo;s really sending the codepoint U+1D504.
              Because the result is plain text, it survives copy/paste into
              any app — even apps that don&rsquo;t let you change fonts.
            </p>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="container">
            <div className="eyebrow">Questions</div>
            <h2>Frequently asked questions</h2>
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
            <h2>All generators on the site</h2>
            <div className="features">
              {PAGES.slice(0, 12).map((p) => (
                <Link
                  key={p.slug}
                  href={`/font-generator/${p.slug}`}
                  className="feature"
                >
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
