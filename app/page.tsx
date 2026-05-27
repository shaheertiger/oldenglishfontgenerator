import type { Metadata } from "next";
import Link from "next/link";
import Generator from "@/components/Generator";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { PAGES } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Old English Font Generator – Blackletter & Gothic Text Styles",
  description:
    "Convert plain text into Old English, blackletter, and gothic Unicode fonts you can copy and paste anywhere — Instagram, TikTok, Discord, Twitter and more.",
  keywords: [
    "old english font",
    "blackletter font",
    "gothic font generator",
    "old english text generator",
  ],
  alternates: { canonical: "https://www.oldenglishfontgenerator.com/" },
  openGraph: {
    title: "Old English Font Generator",
    description:
      "Turn any text into Old English, blackletter and gothic Unicode styles. Copy & paste ready.",
    url: "https://www.oldenglishfontgenerator.com/",
    type: "website",
  },
};

const HOME_STYLES = [
  "fraktur",
  "fraktur-bold",
  "script",
  "script-bold",
  "double-struck",
  "sans-bold",
  "monospace",
  "small-caps",
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero container" id="generator">
          <h1>
            Turn plain text into <span className="fancy">Old English</span> fonts
          </h1>
          <p>
            Type anything below and instantly get blackletter, gothic, and
            medieval Unicode styles you can copy &amp; paste into Instagram,
            TikTok, Discord, Twitter, YouTube, and anywhere else text is
            allowed.
          </p>
          <Generator styles={HOME_STYLES} />
        </section>

        <section className="section" id="more-generators">
          <div className="container">
            <h2>More font generators</h2>
            <p>Style-specific generators with their own previews and copy buttons:</p>
            <div className="features" style={{ marginTop: 24 }}>
              {PAGES.slice(0, 12).map((p) => (
                <Link
                  key={p.slug}
                  href={`/font-generator/${p.slug}`}
                  className="feature"
                  style={{ textDecoration: "none" }}
                >
                  <h3>{p.h1}</h3>
                  <p>{p.description}</p>
                </Link>
              ))}
            </div>
            <p style={{ marginTop: 20 }}>
              <Link href="/font-generator">See all font generators →</Link>
            </p>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <h2>What is an Old English font?</h2>
            <p>
              &ldquo;Old English&rdquo; usually refers to a family of
              blackletter typefaces — dense, ornate scripts that scribes used
              across medieval Europe and that printers later cast in metal.
              The tall, angular shapes feel formal, ceremonial, and a little
              mysterious, which is why they keep showing up on diplomas,
              newspaper mastheads, tattoos, and band logos centuries later.
            </p>

            <div className="features">
              <div className="feature">
                <h3>Instant preview</h3>
                <p>
                  Every style updates as you type — no buttons to press, no
                  waiting. Pick one and copy it in a single tap.
                </p>
              </div>
              <div className="feature">
                <h3>Works everywhere</h3>
                <p>
                  These styles are real Unicode characters, not images. They
                  paste into bios, captions, usernames, and DMs on practically
                  any modern app.
                </p>
              </div>
              <div className="feature">
                <h3>No sign-up</h3>
                <p>
                  Free and browser-only. Your text never leaves your device —
                  everything is generated locally.
                </p>
              </div>
              <div className="feature">
                <h3>Multiple variants</h3>
                <p>
                  Classic fraktur, bold blackletter, gothic cursive, outline,
                  small caps, and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="container">
            <h2>Frequently asked questions</h2>
            <details>
              <summary>Is this actually a font?</summary>
              <p>
                Not quite. We don&rsquo;t change your device&rsquo;s font — we
                substitute each letter for a similar-looking Unicode character.
                The result <em>looks</em> like a different font but is just
                regular text, so it pastes anywhere.
              </p>
            </details>
            <details>
              <summary>Will it work on Instagram, TikTok, and Discord?</summary>
              <p>
                Yes. The blackletter and gothic styles work in bios, captions,
                comments, and usernames on most major platforms. A few apps
                strip unusual characters from usernames; if that happens try
                another variant.
              </p>
            </details>
            <details>
              <summary>Can I use this for tattoos or logos?</summary>
              <p>
                The preview is great for mocking up an idea, but for a tattoo
                or printed logo you&rsquo;ll want a true vector font so the
                linework stays sharp at any size.
              </p>
            </details>
            <details>
              <summary>Is it free?</summary>
              <p>Completely free. No account, no watermark, no limits.</p>
            </details>
            <details>
              <summary>Why do some characters look like empty boxes?</summary>
              <p>
                The viewer&rsquo;s device doesn&rsquo;t have a font installed
                that covers those Unicode codepoints. Try a different variant.
              </p>
            </details>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
