import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import SymbolGrid from "@/components/SymbolGrid";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/seo";
import { EMOTICON_CATEGORIES, EMOTICON_BY_SLUG } from "@/lib/emoticons";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

type Params = { category: string };

export async function generateStaticParams() {
  return EMOTICON_CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { category } = await params;
  const c = EMOTICON_BY_SLUG[category];
  if (!c) return {};
  const url = `${SITE_URL}/emoticons/${c.slug}`;
  return {
    title: c.title,
    description: c.description,
    keywords: [c.keyword],
    alternates: { canonical: url },
    openGraph: { title: c.title, description: c.description, url, type: "website" },
  };
}

export default async function EmoticonCategoryPage({ params }: { params: Promise<Params> }) {
  const { category } = await params;
  const cat = EMOTICON_BY_SLUG[category];
  if (!cat) notFound();

  const others = EMOTICON_CATEGORIES.filter((c) => c.slug !== cat.slug);

  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/emoticons">Emoticons</Link>
            <span className="sep">/</span>
            <span className="current">{cat.label}</span>
          </div>

          <section className="hero">
            <h1>{cat.label} Emoticons Copy & Paste</h1>
            <p className="lead">{cat.intro}</p>
            <SymbolGrid symbols={cat.emoticons} />
          </section>
        </div>

        <section className="section">
          <div className="container">
            <div className="eyebrow">Browse</div>
            <h2>Other emoticons</h2>
            <div className="cat-strip" style={{ marginTop: 16 }}>
              {others.map((o) => (
                <Link key={o.slug} href={`/emoticons/${o.slug}`} className="cat-pill">
                  {o.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>About {cat.label.toLowerCase()} emoticons</h2>
            <p>{cat.about}</p>
            <p style={{ marginTop: 16 }}>
              Kaomoji are built entirely from plain Unicode text characters, so
              each face pastes into bios, captions, messages, and documents the
              same way a regular letter does. No installation, no font file —
              the characters themselves carry the expression.
            </p>
            <h2 style={{ marginTop: 28 }}>How to use these emoticons</h2>
            <p>
              Click any tile to copy. Paste anywhere plain text is
              allowed — Instagram, TikTok, Discord, X, WhatsApp, email,
              Notion, Google Docs, code comments, signatures. If a face
              renders with broken or boxed characters on someone
              else&rsquo;s device, their system font doesn&rsquo;t cover
              that Unicode range; pick a simpler variant built from more
              widely-supported characters.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Emoticons", path: "/emoticons" },
          { name: cat.label, path: `/emoticons/${cat.slug}` },
        ])}
      />
    </>
  );
}
