import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { ALL_STYLES, OLD_ENGLISH_FAMILY } from "@/lib/fonts";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

const SHOWCASE_IDS = [
  ...OLD_ENGLISH_FAMILY,
  "bold-serif", "italic-serif", "bold-italic-serif", "sans-bold",
  "double-struck", "monospace", "bubble", "bubble-filled", "squared",
  "fullwidth", "small-caps", "superscript", "love-parens", "leet",
  "japanese-style", "mirrored", "morse", "bent", "weird",
];

const SUPPORTED = "abcdefghijklmnopqrstuvwxyz0123456789".split("");

type Params = { letter: string };

export async function generateStaticParams() {
  return SUPPORTED.map((letter) => ({ letter }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { letter } = await params;
  const ch = letter?.[0]?.toLowerCase();
  if (!ch) return {};
  const isDigit = /\d/.test(ch);
  const upper = ch.toUpperCase();
  const title = isDigit
    ? `${ch} in Different Fonts – ${ch} Symbols & Styles Copy & Paste`
    : `Capital ${upper} in Different Fonts – Stylish ${upper} Copy & Paste`;
  const description = isDigit
    ? `Every Unicode style applied to the digit ${ch}. Copy and paste a fancy ${ch} into Instagram, TikTok, Discord, or anywhere else.`
    : `The letter ${upper} in 40+ Unicode fonts — blackletter, cursive, bold, italic, bubble, leet, mirrored, and more. Copy any styled ${upper} with one tap.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/different-fonts/${ch}` },
    openGraph: { title, description, url: `${SITE_URL}/different-fonts/${ch}`, type: "website" },
  };
}

export default async function LetterPage({ params }: { params: Promise<Params> }) {
  const { letter } = await params;
  const ch = letter?.[0]?.toLowerCase();
  if (!ch || !SUPPORTED.includes(ch)) notFound();
  const upper = ch.toUpperCase();
  const isDigit = /\d/.test(ch);

  const items = SHOWCASE_IDS
    .map((id) => ALL_STYLES[id])
    .filter(Boolean)
    .map((s) => ({ id: s.id, name: s.name, lower: s.transform(ch), upper: s.transform(upper) }));

  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/different-fonts">Different Fonts</Link>
            <span className="sep">/</span>
            <span className="current">{upper}</span>
          </div>

          <section className="hero">
            <h1>{isDigit ? `${ch} in Different Fonts` : `Capital ${upper} in Different Fonts`}</h1>
            <p className="lead">
              {isDigit
                ? `Every Unicode style applied to the digit ${ch}. Tap any row to copy the fancy version into your bio, post, or message.`
                : `The letter ${upper} rendered in 40+ Unicode styles — blackletter, cursive, bold, italic, bubble, leet, mirrored, Morse, and more. Tap any row to copy.`}
            </p>
          </section>
        </div>

        <section className="section">
          <div className="container">
            <div className="results">
              {items.map((it) => (
                <div key={it.id} className="style-card">
                  <div className="left">
                    <div className="name">{it.name}</div>
                    <div className="preview" style={{ fontSize: 36 }}>
                      {it.upper}  {!isDigit && it.lower !== it.upper ? it.lower : ""}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Why the same letter looks like 40 different shapes</h2>
            <p>
              The styles below aren&rsquo;t font files — they&rsquo;re distinct Unicode
              codepoints that happen to look like &ldquo;{upper}&rdquo; in different
              visual styles. Unicode reserves whole blocks for math notation (bold,
              italic, fraktur, script, double-struck, monospace, sans-serif), and
              decorative ranges for circled, parenthesized, fullwidth, and squared
              forms. Stack them with combining marks (underline, strikethrough,
              glitch) and the count climbs fast.
            </p>
            <p>
              Because each variant is a real character, you can paste it into bios,
              captions, usernames, and DMs on apps that don&rsquo;t expose font
              settings. The output is plain text — just unusual plain text.
            </p>
            <h2 style={{ marginTop: 28 }}>Other letters</h2>
            <p>
              Browse every letter and digit: pick another to see its styled variants.
            </p>
            <div className="cat-strip" style={{ marginTop: 20 }}>
              {SUPPORTED.filter((c) => c !== ch).slice(0, 26).map((c) => (
                <Link key={c} href={`/different-fonts/${c}`} className="cat-pill">
                  {c.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
