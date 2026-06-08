import type { Metadata } from "next";
import Link from "next/link";
import Generator from "@/components/Generator";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { CATEGORIES, getPage, PAGE_INDEX_DESCRIPTION } from "@/lib/pages";

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
            <h2>Browse font generators by category</h2>
            <p>
              Every dedicated style page, grouped by what you&rsquo;re going for.
              Jump to a category:
            </p>
            <div className="cat-strip" style={{ marginTop: 16 }}>
              {CATEGORIES.map((c) => (
                <a key={c.id} href={`#${c.id}`} className="cat-pill">
                  {c.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {CATEGORIES.map((c) => (
          <section className="section" id={c.id} key={c.id} style={{ scrollMarginTop: 80 }}>
            <div className="container">
              <h2>{c.title}</h2>
              <p>{c.intro}</p>
              <div className="features" style={{ marginTop: 20 }}>
                {c.slugs.map((slug) => {
                  const p = getPage(slug);
                  if (!p) return null;
                  return (
                    <Link key={p.slug} href={`/font-generator/${p.slug}`} className="feature" style={{ textDecoration: "none" }}>
                      <h3>{p.h1}</h3>
                      <p>{p.description}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </main>
      <SiteFooter />
    </>
  );
}
