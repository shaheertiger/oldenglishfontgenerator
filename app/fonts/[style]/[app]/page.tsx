import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Faq from "@/components/Faq";
import FontDirectory from "@/components/FontDirectory";
import RichText from "@/components/RichText";
import Updated from "@/components/Updated";
import JsonLd from "@/components/JsonLd";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { APP_BY_SLUG, APP_GUIDES, appGuideSource } from "@/lib/fontpages";
import { fontsByName } from "@/lib/realfonts";
import { abs, breadcrumbLd, faqLd } from "@/lib/seo";
import type { HowTo, WithContext } from "schema-dts";

type Params = { style: string; app: string };
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return APP_GUIDES.map((a) => ({ style: "old-english", app: a.app }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { style, app } = await params;
  const a = APP_BY_SLUG[app];
  if (style !== "old-english" || !a) return {};
  const url = abs(`/fonts/old-english/${a.app}`);
  return {
    title: { absolute: a.title },
    description: a.description,
    alternates: { canonical: url },
    openGraph: { title: a.title, description: a.description, url, type: "article" },
  };
}

const PICKS = fontsByName(["UnifrakturMaguntia", "UnifrakturCook", "Pirata One", "Grenze Gotisch"]);

export default async function AppGuidePage({ params }: { params: Promise<Params> }) {
  const { style, app } = await params;
  const a = APP_BY_SLUG[app];
  if (style !== "old-english" || !a) notFound();
  const path = `/fonts/old-english/${a.app}`;
  const howto: WithContext<HowTo> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to use an Old English font in ${a.name}`,
    step: a.steps.map(([name, text], i) => ({ "@type": "HowToStep", position: i + 1, name, text })),
  };

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
            <Link href="/fonts/old-english">Old English Fonts</Link>
            <span className="sep" aria-hidden="true">›</span>
            <span className="current" aria-current="page">{a.name}</span>
          </nav>
          <section className="hero">
            <h1>Old English Font in {a.name}</h1>
            <p className="lead"><RichText text={a.intro} /></p>
            <Updated file={appGuideSource(a.app)} />
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>Step by step</h2>
            <ol className="steps">
              {a.steps.map(([t, d]) => (
                <li className="step" key={t}>
                  <strong>{t}</strong>
                  <p><RichText text={d} /></p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Good to know</h2>
            <ul>
              {a.notes.map((n) => <li key={n}><RichText text={n} /></li>)}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2><Link href="/fonts/old-english">Free blackletter fonts for {a.name}</Link></h2>
            <FontDirectory fonts={PICKS} sample="Old English" compact />
          </div>
        </section>

        <Faq items={a.faq} />

        <section className="section">
          <div className="container">
            <h2>Using a different app?</h2>
            <ul>
              {APP_GUIDES.filter((o) => o.app !== a.app).map((o) => (
                <li key={o.app}><Link href={`/fonts/old-english/${o.app}`}>Old English font in {o.name}</Link></li>
              ))}
            </ul>
          </div>
        </section>

      </main>
      <SiteFooter />
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Fonts", path: "/fonts" },
            { name: "Old English Fonts", path: "/fonts/old-english" },
            { name: a.name, path },
          ]),
          howto,
          faqLd(a.faq),
        ]}
      />
    </>
  );
}
