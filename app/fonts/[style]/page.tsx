import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Faq from "@/components/Faq";
import FontDirectory from "@/components/FontDirectory";
import JsonLd from "@/components/JsonLd";
import { renderBlock } from "@/components/PageView";
import RichText from "@/components/RichText";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import Updated from "@/components/Updated";
import { APP_GUIDES, FONT_PAGES, FONT_PAGE_BY_STYLE, fontPageSource, isSingleFont } from "@/lib/fontpages";
import { COMPARE_HEAD, STATS_VERIFIED, compareRow, factRows } from "@/lib/fontstats";
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
  const others = FONT_PAGES.filter((o) => o.style !== p.style);
  const collections = others.filter((o) => !isSingleFont(o));
  const singles = others.filter(isSingleFont);

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
              {renderBlock({ table: { head: ["Detail", focus.family], rows: factRows(focus) } }, 0)}
              <p className="note">
                Glyph counts and character support are our own measurements of the file Google Fonts serves, checked {STATS_VERIFIED}.
              </p>
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

        <section className="section">
          <div className="container">
            <h2>How do these {fonts.length} fonts compare?</h2>
            <p>
              Measured from each font file: how many glyphs it contains, whether it has the long s (ſ) used in old
              German and English printing, German ß and umlauts, and accented Central European letters. All{" "}
              {fonts.length} are under the SIL Open Font License.
            </p>
            {renderBlock({ table: { head: COMPARE_HEAD, rows: fonts.map(compareRow) } }, 0)}
          </div>
        </section>

        {tools.length > 0 && (
          <section className="section">
            <div className="container">
              <h2>Need copy-and-paste text instead of a font file?</h2>
              <p>
                Font files only work in apps that let you pick a font. For bios, captions and usernames, use a Unicode
                generator; the text pastes anywhere.
              </p>
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
            <h2>More font collections</h2>
            <ul>
              {collections.map((o) => (
                <li key={o.style}><Link href={`/fonts/${o.style}`}>{o.h1}</Link></li>
              ))}
            </ul>
            {singles.length > 0 && (
              <>
                <h3>Individual fonts</h3>
                <ul>
                  {singles.map((o) => (
                    <li key={o.style}><Link href={`/fonts/${o.style}`}>{o.crumb}</Link></li>
                  ))}
                </ul>
              </>
            )}
            <p>
              Every font on one page: <Link href="/fonts">all fonts compared</Link>. Or go back to the{" "}
              <Link href="/">Old English font generator</Link>.
            </p>
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
