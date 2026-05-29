import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import NameClient from "@/components/NameClient";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, faqLd } from "@/lib/seo";
import { NAME_CATEGORIES, NAME_BY_SLUG } from "@/lib/names";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

type Params = { type: string };

export async function generateStaticParams() {
  return NAME_CATEGORIES.map((c) => ({ type: c.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { type } = await params;
  const c = NAME_BY_SLUG[type];
  if (!c) return {};
  const url = `${SITE_URL}/name-generator/${c.slug}`;
  return {
    title: c.title,
    description: c.description,
    keywords: [c.keyword],
    alternates: { canonical: url },
    openGraph: { title: c.title, description: c.description, url, type: "website" },
  };
}

export default async function NameTypePage({ params }: { params: Promise<Params> }) {
  const { type } = await params;
  const cat = NAME_BY_SLUG[type];
  if (!cat) notFound();

  const others = NAME_CATEGORIES.filter((c) => c.slug !== cat.slug);

  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/name-generator">Name Generator</Link>
            <span className="sep">/</span>
            <span className="current">{cat.label}</span>
          </div>

          <section className="hero">
            <h1>{cat.h1}</h1>
            <p className="lead">{cat.intro}</p>
            <NameClient parts={cat.parts} stylize={cat.stylize} />
          </section>
        </div>

        <section className="section">
          <div className="container">
            {cat.about.map((a) => (
              <div key={a.heading}>
                <h2 style={{ marginTop: 28 }}>{a.heading}</h2>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section faq">
          <div className="container">
            <div className="eyebrow">FAQ</div>
            <h2>Frequently asked questions</h2>
            {cat.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="eyebrow">Browse</div>
            <h2>Other generators</h2>
            <div className="cat-strip" style={{ marginTop: 16 }}>
              {others.map((o) => (
                <Link key={o.slug} href={`/name-generator/${o.slug}`} className="cat-pill">
                  {o.label}
                </Link>
              ))}
              <Link href="/username-generator" className="cat-pill">
                Username Generator
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Name Generator", path: "/name-generator" },
            { name: cat.label, path: `/name-generator/${cat.slug}` },
          ]),
          faqLd(cat.faq),
        ]}
      />
    </>
  );
}
