import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "About – Old English Font Generator",
  description:
    "Learn who builds Old English Font Generator, why the site exists, how our Unicode font tools work, and the principles behind keeping everything free, private, and browser-based.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About – Old English Font Generator",
    description:
      "Who we are, why we built a free Unicode font generator, and how our copy-paste text tools actually work.",
    url: `${SITE_URL}/about`,
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
  ],
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">About</span>
          </div>

          <section className="hero">
            <h1>About Old English Font Generator</h1>
            <p className="lead">
              Old English Font Generator is a free collection of browser-based
              text tools that turn ordinary keyboard text into blackletter,
              gothic, cursive, and dozens of other Unicode styles you can copy
              and paste anywhere — no app, no account, and no files to download.
            </p>
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>Why we built this site</h2>
            <p>
              The project started with a simple frustration: there was no quick,
              clean way to make a name or caption look like old manuscript
              lettering without installing a font, opening a design app, or
              signing up for yet another service. Most "font generator" sites
              were buried in pop-ups and redirects, and many produced text that
              broke the moment you pasted it into Instagram or Discord.
            </p>
            <p>
              We set out to fix that. Every tool here runs entirely in your
              browser, produces standard Unicode characters, and is designed to
              be fast, readable, and genuinely useful — whether you are styling a
              social media bio, mocking up a tattoo, or just having fun with text.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>How our font tools actually work</h2>
            <p>
              The styles you generate here are <strong>not</strong> real font
              files and they do not change the font on your device. Instead, the
              Unicode standard — the system that defines every character your
              computer can display — includes thousands of letter-like symbols:
              mathematical alphabets, blackletter (fraktur) letters, circled
              characters, full-width forms, and more.
            </p>
            <p>
              When you type a word, our tools map each ordinary letter to a
              similar-looking Unicode character. The result is still plain text,
              so it copies and pastes into almost any app that accepts typing —
              Instagram, TikTok, Discord, X (Twitter), YouTube, WhatsApp,
              messaging apps, and beyond. Because it is real text rather than an
              image, it stays selectable and searchable wherever you paste it.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>What you will find here</h2>
            <p>
              Beyond the core{" "}
              <Link href="/font-generator">font generators</Link>, the site has
              grown into a broad set of text utilities, including:
            </p>
            <ul className="where-list">
              <li>
                <strong>Font &amp; style generators</strong> — Old English,
                gothic, blackletter, cursive, bold, italic, bubble, and many more.
              </li>
              <li>
                <strong>Text converters</strong> — case converter, binary and
                Morse code translators, subscript and superscript, and invisible
                text.
              </li>
              <li>
                <strong>Creative &amp; fantasy tools</strong> — runic,
                hieroglyphic, cuneiform, medieval, and pirate translators, plus
                name and username generators.
              </li>
              <li>
                <strong>ASCII art</strong> — turn text or images into ASCII.
              </li>
              <li>
                <strong>Reference &amp; reading</strong> — a growing{" "}
                <Link href="/blog">blog</Link> covering typography, Unicode, and
                how to use styled text well.
              </li>
            </ul>
            <p>
              You can browse everything from the{" "}
              <Link href="/tools">all tools</Link> page.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Our principles</h2>
            <div className="steps">
              <div className="step">
                <div className="num">01</div>
                <h3>Free and open</h3>
                <p>
                  Every tool is free to use with no sign-up. We support the site
                  with unobtrusive advertising rather than paywalls.
                </p>
              </div>
              <div className="step">
                <div className="num">02</div>
                <h3>Private by design</h3>
                <p>
                  Text you type is processed in your browser. We do not store the
                  content you generate or require an account to use it.
                </p>
              </div>
              <div className="step">
                <div className="num">03</div>
                <h3>Genuinely useful</h3>
                <p>
                  We write our own guides, keep the output compatible across apps,
                  and improve tools based on how people actually use them.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Get in touch</h2>
            <p>
              Questions, feedback, bug reports, or ideas for new tools are always
              welcome. Visit our <Link href="/contact">contact page</Link> or
              email us directly at{" "}
              <a href="mailto:hello@oldenglishfontgenerator.com">
                hello@oldenglishfontgenerator.com
              </a>
              . You can also read our{" "}
              <Link href="/privacy">Privacy Policy</Link> and{" "}
              <Link href="/terms">Terms of Service</Link> to learn how the site
              operates.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
