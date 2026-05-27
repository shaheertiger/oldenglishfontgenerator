import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import SymbolGrid from "@/components/SymbolGrid";
import { SYMBOL_CATEGORIES, SYMBOL_BY_SLUG } from "@/lib/symbols";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

type Params = { category: string };

export async function generateStaticParams() {
  return SYMBOL_CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { category } = await params;
  const c = SYMBOL_BY_SLUG[category];
  if (!c) return {};
  const url = `${SITE_URL}/symbols/${c.slug}`;
  return {
    title: c.title,
    description: c.description,
    keywords: [c.keyword],
    alternates: { canonical: url },
    openGraph: { title: c.title, description: c.description, url, type: "website" },
  };
}

export default async function SymbolCategoryPage({ params }: { params: Promise<Params> }) {
  const { category } = await params;
  const cat = SYMBOL_BY_SLUG[category];
  if (!cat) notFound();

  const others = SYMBOL_CATEGORIES.filter((c) => c.slug !== cat.slug);

  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/symbols">Symbols</Link>
            <span className="sep">/</span>
            <span className="current">{cat.label}</span>
          </div>

          <section className="hero">
            <h1>{cat.label} Symbol Copy & Paste</h1>
            <p className="lead">{cat.intro}</p>
            <SymbolGrid symbols={cat.symbols} />
          </section>
        </div>

        <section className="section">
          <div className="container">
            <div className="eyebrow">Browse</div>
            <h2>Other symbol categories</h2>
            <div className="cat-strip" style={{ marginTop: 16 }}>
              {others.map((o) => (
                <Link key={o.slug} href={`/symbols/${o.slug}`} className="cat-pill">
                  {o.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>About {cat.label.toLowerCase()} symbols</h2>
            <p>{cat.about}</p>
            <p style={{ marginTop: 16 }}>
              Every glyph above is a plain Unicode character, so it pastes
              into bios, captions, messages, and documents the same way a
              regular letter does. No installation, no font file — the
              character itself carries the visual style.
            </p>
            <h2 style={{ marginTop: 28 }}>How to use these symbols</h2>
            <p>
              Click any tile to copy. Paste anywhere plain text is
              allowed — Instagram, TikTok, Discord, X, WhatsApp, email,
              Notion, Google Docs, code comments, signatures. If a symbol
              renders as an empty box on someone else&rsquo;s device, their
              system font doesn&rsquo;t cover that Unicode block; pick a
              variant from a more widely-supported range.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
