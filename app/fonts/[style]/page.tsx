import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Faq from "@/components/Faq";
import FontDirectory from "@/components/FontDirectory";
import JsonLd from "@/components/JsonLd";
import { StatsTable, renderBlock } from "@/components/PageView";
import RichText from "@/components/RichText";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import Updated from "@/components/Updated";
import { APP_GUIDES, FONT_PAGES, FONT_PAGE_BY_STYLE, fontPageSource, isSingleFont } from "@/lib/fontpages";
import { COMPARE_HEAD, FONT_STATS, STATS_VERIFIED, compareRow, factRows } from "@/lib/fontstats";
import { FONT_BY_FAMILY, fontsByName, specimenUrl } from "@/lib/realfonts";
import { abs, breadcrumbLd, faqLd } from "@/lib/seo";
import { toolLinks } from "@/lib/site";
import type { ItemList, WithContext } from "schema-dts";

type Params = { style: string };
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return FONT_PAGES.map((p) => ({ style: p.style }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const p = FONT_PAGE_BY_STYLE[(await params).style];
  if (!p) return {};
  const url = abs(`/fonts/${p.style}`);
  return {
    title: { absolute: p.title },
    description: p.description,
    alternates: { canonical: url },
    openGraph: { title: p.title, description: p.description, url, type: "website" },
  };
}

export default async function FontsPage({ params }: { params: Promise<Params> }) {
  const p = FONT_PAGE_BY_STYLE[(await params).style];
  if (!p) notFound();
  const path = `/fonts/${p.style}`;
  const fonts = fontsByName(p.fonts);
  const focus = p.focus ? FONT_BY_FAMILY[p.focus] : undefined;
  const tools = toolLinks(p.tools ?? []);
  const list: WithContext<ItemList> = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: p.h1,
    numberOfItems: fonts.length,
    itemListElement: fonts.map((f, i) => ({ "@type": "ListItem", position: i + 1, name: f.family, url: specimenUrl(f) })),
  };
  // True siblings: the other font pages sharing the most fonts with this one.
  const siblings = FONT_PAGES.filter((o) => o.style !== p.style)
    .map((o) => ({ o, shared: o.fonts.filter((f) => p.fonts.includes(f)).length + (o.focus && p.fonts.includes(o.focus) ? 2 : 0) }))
    .filter((x) => x.shared > 0)
    .sort((a, b) => b.shared - a.shared)
    .slice(0, 4)
    .map((x) => x.o);
  const single = isSingleFont(p);
  const longS = fonts.filter((f) => FONT_STATS[f.family]?.longS);
  const biggest = [...fonts].sort((a, b) => (FONT_STATS[b.family]?.glyphs ?? 0) - (FONT_STATS[a.family]?.glyphs ?? 0))[0];
  const german = fonts.filter((f) => FONT_STATS[f.family]?.german).length;

  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep" aria-hidden="true">›</span>
            <Link href="/fonts">Fonts</Link>
            <span className="sep" aria-hidden="true">›</span>
            <span className="current" aria-current="page">{p.crumb}</span>
          </nav>
          <section className="hero">
            <h1>{p.h1}</h1>
            <p className="lead"><RichText text={p.intro} /></p>
            <Updated file={fontPageSource(p.style)} note={`font data measured ${STATS_VERIFIED}`} />
            <FontDirectory fonts={fonts} sample={p.sample} notes={p.notes} />
          </section>
        </div>

        {focus && (
          <section className="section">
            <div className="container">
              <h2>What is in the {focus.family} font file?</h2>
              <StatsTable head={["Detail", focus.family]} rows={factRows(focus)} />
              <p className="note">Our measurement, {STATS_VERIFIED}.</p>
            </div>
          </section>
        )}

        {p.about && (
          <section className="section">
            <div className="container">
              <h2>{p.about.name} at a glance</h2>
              {renderBlock({ table: { head: ["Detail", p.about.name], rows: p.about.facts } }, 0)}
            </div>
          </section>
        )}

        {p.sections.map((s) => (
          <section className="section" key={s.h2}>
            <div className="container">
              <h2>{s.h2}</h2>
              {s.blocks.map((b, i) => renderBlock(b, i))}
            </div>
          </section>
        ))}

        {!single && (
          <section className="section">
            <div className="container">
              <h2>How do these {fonts.length} fonts compare?</h2>
              <p>
                {biggest.family} is the largest file here ({FONT_STATS[biggest.family]?.glyphs} glyphs).{" "}
                {longS.length
                  ? `${longS.length} of ${fonts.length} draw the long s (ſ): ${longS.map((f) => f.family).join(", ")}.`
                  : `None of the ${fonts.length} draws the long s (ſ).`}{" "}
                {german} cover German ß and umlauts. Counts are our measurements of each file.
              </p>
              <StatsTable head={COMPARE_HEAD} rows={fonts.map(compareRow)} />
            </div>
          </section>
        )}

        {tools.length > 0 && (
          <section className="section">
            <div className="container">
              <h2>Need copy-and-paste text instead of a font file?</h2>
              <ul className="tool-links">
                {tools.map((t) => (
                  <li key={t.href}>
                    <Link href={t.href}>
                      <strong>{t.label}</strong>
                      <span>{t.blurb}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {p.style === "old-english" && (
          <section className="section">
            <div className="container">
              <h2>Use an Old English font in your app</h2>
              <ul className="tool-links">
                {APP_GUIDES.map((a) => (
                  <li key={a.app}>
                    <Link href={`/fonts/old-english/${a.app}`}>
                      <strong>Old English font in {a.name}</strong>
                      <span>{a.description.split(":")[0]}.</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <Faq items={p.faq} />

        <section className="section">
          <div className="container">
            <h2>Related font pages</h2>
            <ul>
              {siblings.map((o) => (
                <li key={o.style}><Link href={`/fonts/${o.style}`}>{isSingleFont(o) ? o.crumb : o.h1}</Link></li>
              ))}
              <li><Link href="/fonts">All {FONT_PAGES.length} font pages and every font compared</Link></li>
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Fonts", path: "/fonts" }, { name: p.crumb, path }]),
          list,
          faqLd(p.faq),
        ]}
      />
    </>
  );
}
