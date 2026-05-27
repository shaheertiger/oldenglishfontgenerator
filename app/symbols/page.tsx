import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { SYMBOL_CATEGORIES } from "@/lib/symbols";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Symbols – Cool Unicode Symbols Copy & Paste",
  description:
    "Browse arrows, hearts, stars, currency, music, infinity, and dozens of other Unicode symbol categories. Click any tile to copy.",
  keywords: ["symbols copy paste", "cool symbols", "unicode symbols", "arrow symbol", "heart symbol"],
  alternates: { canonical: `${SITE_URL}/symbols` },
  openGraph: {
    title: "Symbols – Cool Unicode Symbols Copy & Paste",
    description: "Click-to-copy Unicode symbol library, grouped by category.",
    url: `${SITE_URL}/symbols`,
    type: "website",
  },
};

export default function SymbolsIndex() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <section className="hero">
            <h1>Cool Symbols</h1>
            <p className="lead">
              Browse arrows, hearts, stars, currency, music, infinity, and
              more — click any tile to copy. Every glyph is a plain Unicode
              character that pastes anywhere text is allowed.
            </p>
          </section>
        </div>

        <section className="section">
          <div className="container">
            <div className="features">
              {SYMBOL_CATEGORIES.map((c) => (
                <Link key={c.slug} href={`/symbols/${c.slug}`} className="feature">
                  <h3>{c.label} Symbols</h3>
                  <p style={{ fontSize: 22, marginBottom: 8 }}>
                    {c.symbols.slice(0, 6).join(" ")}
                  </p>
                  <p>{c.description}</p>
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
