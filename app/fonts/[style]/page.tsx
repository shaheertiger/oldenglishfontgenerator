import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FontDirectory from "@/components/FontDirectory";
import JsonLd from "@/components/JsonLd";
import { renderBlock } from "@/components/PageView";
import RichText from "@/components/RichText";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { APP_GUIDES, FONT_PAGES, FONT_PAGE_BY_STYLE } from "@/lib/fontpages";
import { fontsByName, specimenUrl } from "@/lib/realfonts";
import { abs, breadcrumbLd, faqLd } from "@/lib/seo";
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
  const fonts = fontsByName(p.fonts);
  const list: WithContext<ItemList> = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: p.h1,
    itemListElement: fonts.map((f, i) => ({ "@type": "ListItem", position: i + 1, name: f.family, url: specimenUrl(f) })),
  };
  const others = FONT_PAGES.filter((o) => o.style !== p.style);

  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep" aria-hidden="true">›</span>
            <span className="current" aria-current="page">{p.crumb}</span>
          </nav>
          <section className="hero">
            <h1>{p.h1}</h1>
            <p className="lead"><RichText text={p.intro} /></p>
            <FontDirectory fonts={fonts} sample={p.sample} notes={p.notes} />
          </section>
        </div>

        {p.sections.map((s) => (
          <section className="section" key={s.h2}>
            <div className="container">
              <h2>{s.h2}</h2>
              {s.blocks.map((b, i) => renderBlock(b, i))}
            </div>
          </section>
        ))}

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

        <section className="section faq">
          <div className="container">
            <h2>Frequently Asked Questions</h2>
            {p.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p><RichText text={f.a} /></p>
              </details>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>More font collections</h2>
            <ul>
              {others.map((o) => (
                <li key={o.style}><Link href={`/fonts/${o.style}`}>{o.h1}</Link></li>
              ))}
              <li><Link href="/">Old English font generator (copy and paste)</Link></li>
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
      <JsonLd data={[breadcrumbLd([{ name: "Home", path: "/" }, { name: p.crumb, path: `/fonts/${p.style}` }]), list, faqLd(p.faq)]} />
    </>
  );
}
