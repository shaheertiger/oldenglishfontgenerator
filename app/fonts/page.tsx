import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { StatsTable } from "@/components/PageView";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { APP_GUIDES, FONT_PAGES, isSingleFont } from "@/lib/fontpages";
import { FONT_STATS, STATS_VERIFIED } from "@/lib/fontstats";
import { GROUP_LABEL, REAL_FONTS, specimenUrl } from "@/lib/realfonts";
import { abs, breadcrumbLd, faqLd } from "@/lib/seo";
import type { CollectionPage, WithContext } from "schema-dts";

// Hub for every /fonts page. All numbers below are computed from
// lib/realfonts.ts, lib/fontstats.json and the page list, so they stay true
// when fonts or pages are added.

const fontCount = REAL_FONTS.length;
const longS = REAL_FONTS.filter((f) => FONT_STATS[f.family]?.longS);
const byGlyphs = [...REAL_FONTS].sort((a, b) => (FONT_STATS[b.family]?.glyphs ?? 0) - (FONT_STATS[a.family]?.glyphs ?? 0));
const newest = [...REAL_FONTS].sort((a, b) => (FONT_STATS[b.family]?.added ?? "").localeCompare(FONT_STATS[a.family]?.added ?? ""))[0];
const collections = FONT_PAGES.filter((p) => !isSingleFont(p));
const singles = FONT_PAGES.filter(isSingleFont);
const pagesFor = (family: string) => FONT_PAGES.filter((p) => p.fonts.includes(family));

const title = `Free Blackletter & Old English Fonts — ${fontCount} Compared`;
const description = `All ${fontCount} free fonts on this site in one table: glyph counts, long s and umlaut support, weights and licence, plus ${collections.length} collections and ${singles.length} font guides.`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: abs("/fonts") },
  openGraph: { title, description, url: abs("/fonts"), type: "website" },
};

const faq = [
  {
    q: "Are all of these fonts free for commercial use?",
    a: `Yes. All ${fontCount} are published on Google Fonts under the SIL Open Font License, which allows personal and commercial use, including logos, merchandise, apps and games. You can't sell the font files themselves.`,
  },
  {
    q: "Which free blackletter font has the most characters?",
    a: `${byGlyphs[0].family}, with ${FONT_STATS[byGlyphs[0].family].glyphs} glyphs in the file we measured, followed by ${byGlyphs[1].family} (${FONT_STATS[byGlyphs[1].family].glyphs}). More glyphs usually means more languages and symbols, not a better look.`,
  },
  {
    q: "Which fonts have the long s (ſ)?",
    a: `${longS.length} of the ${fontCount}: ${longS.map((f) => f.family).join(", ")}. You need it to set text the way 17th- and 18th-century printers did.`,
  },
  {
    q: "What about Old English Text MT, Old London and Cloister Black?",
    a: "They aren't open-licence, so we can't host previews of them, but each has its own page explaining where it comes from, what licence applies and which free font looks closest.",
  },
];

export default function FontsHub() {
  const ld: WithContext<CollectionPage> = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Free Blackletter & Old English Fonts",
    url: abs("/fonts"),
    description,
    hasPart: FONT_PAGES.map((p) => ({ "@type": "WebPage", name: p.h1, url: abs(`/fonts/${p.style}`) })),
  };

  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep" aria-hidden="true">›</span>
            <span className="current" aria-current="page">Fonts</span>
          </nav>
          <section className="hero">
            <h1>Free Blackletter &amp; Old English Fonts</h1>
            <p className="lead">
              {fontCount} free, open-licence fonts, every one measured by us: {longS.length} include the long s, the
              largest has {FONT_STATS[byGlyphs[0].family].glyphs} glyphs and the newest ({newest.family}) joined Google
              Fonts in {FONT_STATS[newest.family].added.slice(0, 4)}. Pick a collection below, or scan the full table.
            </p>
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>Which font collection do you need?</h2>
            <ul className="tool-links">
              {collections.map((p) => (
                <li key={p.style}>
                  <Link href={`/fonts/${p.style}`}>
                    <strong>{p.h1}</strong>
                    <span>{p.fonts.length} fonts · {p.description.split(":")[0].split(".")[0]}.</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Guides to individual fonts</h2>
            <ul className="tool-links">
              {singles.map((p) => (
                <li key={p.style}>
                  <Link href={`/fonts/${p.style}`}>
                    <strong>{p.crumb}</strong>
                    <span>{p.description.split(".")[0]}.</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>All {fontCount} fonts compared</h2>
            <p className="note">Glyph counts and character support measured from each font file on {STATS_VERIFIED}.</p>
            <StatsTable
                  head={["Font", "Style", "Designer", "Glyphs", "Long s", "ß/umlauts", "Collections"]}
                  rows={REAL_FONTS.map((f) => {
                    const s = FONT_STATS[f.family];
                    return [
                      `[${f.family}](${specimenUrl(f)})`,
                      GROUP_LABEL[f.group],
                      f.designers,
                      s ? String(s.glyphs) : "—",
                      s?.longS ? "Yes" : "No",
                      s?.german ? "Yes" : "No",
                      pagesFor(f.family).map((p) => `[${p.crumb}](/fonts/${p.style})`).join(", ") || "—",
                    ];
                  })}
            />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>How do I install a font in my app?</h2>
            <ul>
              {APP_GUIDES.map((a) => (
                <li key={a.app}><Link href={`/fonts/old-english/${a.app}`}>Old English font in {a.name}</Link></li>
              ))}
            </ul>
          </div>
        </section>

        <Faq items={faq} />
      </main>
      <SiteFooter />
      <JsonLd data={[breadcrumbLd([{ name: "Home", path: "/" }, { name: "Fonts", path: "/fonts" }]), ld, faqLd(faq)]} />
    </>
  );
}
