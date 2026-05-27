import type { Metadata } from "next";
import Link from "next/link";
import Generator from "@/components/Generator";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { PAGES, PAGE_INDEX_DESCRIPTION } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Font Generator – Free Special Fonts Copy & Paste",
  description: PAGE_INDEX_DESCRIPTION,
  keywords: ["special font generator", "font generator", "copy paste fonts"],
  alternates: { canonical: "https://www.oldenglishfontgenerator.com/font-generator" },
  openGraph: {
    title: "Font Generator – Free Special Fonts Copy & Paste",
    description: PAGE_INDEX_DESCRIPTION,
    url: "https://www.oldenglishfontgenerator.com/font-generator",
    type: "website",
  },
};

const SHOWCASE = [
  "fraktur", "script", "bold-serif", "italic-serif", "small-caps",
  "bubble", "squared", "fullwidth", "upside-down", "zalgo-soft",
];

export default function FontGeneratorIndex() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero container">
          <h1>Special Font Generator</h1>
          <p>
            One input, every style. Browse cursive, gothic, bold, bubble,
            glitch, small caps, upside down and more — all generated as
            Unicode you can copy and paste into any app.
          </p>
          <Generator styles={SHOWCASE} />
        </section>

        <section className="section">
          <div className="container">
            <h2>All font generators</h2>
            <p>Dedicated pages for the most-searched styles:</p>
            <div className="features" style={{ marginTop: 20 }}>
              {PAGES.map((p) => (
                <Link key={p.slug} href={`/font-generator/${p.slug}`} className="feature" style={{ textDecoration: "none" }}>
                  <h3>{p.h1}</h3>
                  <p>{p.description}</p>
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
