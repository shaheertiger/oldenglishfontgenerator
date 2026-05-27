import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Different Fonts – A–Z and 0–9 in 40+ Unicode Styles",
  description:
    "Pick any letter or digit to see it rendered in 40+ Unicode styles — blackletter, cursive, bold, italic, bubble, leet, mirrored, Morse, and more.",
  alternates: { canonical: `${SITE_URL}/different-fonts` },
};

const LETTERS = "abcdefghijklmnopqrstuvwxyz".split("");
const DIGITS = "0123456789".split("");

export default function DifferentFontsIndex() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <section className="hero">
            <h1>Letters in Different Fonts</h1>
            <p className="lead">
              Pick any letter or digit to see it rendered in 40+ Unicode
              styles. Tap a row on the next page to copy the fancy character.
            </p>
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>Letters</h2>
            <div className="cat-strip" style={{ marginTop: 16 }}>
              {LETTERS.map((c) => (
                <Link key={c} href={`/different-fonts/${c}`} className="cat-pill">
                  {c.toUpperCase()}
                </Link>
              ))}
            </div>
            <h2 style={{ marginTop: 36 }}>Digits</h2>
            <div className="cat-strip" style={{ marginTop: 16 }}>
              {DIGITS.map((c) => (
                <Link key={c} href={`/different-fonts/${c}`} className="cat-pill">
                  {c}
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
