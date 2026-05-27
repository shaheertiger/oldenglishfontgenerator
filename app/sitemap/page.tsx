import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { PAGES } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Sitemap – All Font Generators",
  description:
    "Every page on oldenglishfontgenerator.com — font generators, ASCII tools, and more.",
  alternates: { canonical: "https://www.oldenglishfontgenerator.com/sitemap" },
};

export default function SitemapPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero container">
          <h1>Sitemap</h1>
          <p>Every page on the site, one click away.</p>
        </section>

        <section className="section">
          <div className="container">
            <h2>Main</h2>
            <ul className="sitemap-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/font-generator">Font Generator</Link></li>
              <li><Link href="/ascii-generator">ASCII Generator</Link></li>
              <li><Link href="/image-to-ascii">Image to ASCII</Link></li>
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Font generators</h2>
            <ul className="sitemap-list">
              {PAGES.map((p) => (
                <li key={p.slug}>
                  <Link href={`/font-generator/${p.slug}`}>{p.h1}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Machine-readable</h2>
            <p>
              For search engines and tooling: <a href="/sitemap.xml">/sitemap.xml</a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
