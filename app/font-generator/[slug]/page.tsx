import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Generator from "@/components/Generator";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { PAGES, getPage, platformsFor } from "@/lib/pages";
import { ALL_STYLES } from "@/lib/fonts";

type Params = { slug: string };

export async function generateStaticParams() {
  return PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return {};
  const url = `https://www.oldenglishfontgenerator.com/font-generator/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    keywords: [page.keyword],
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      type: "website",
    },
  };
}

const SIBLING_PILLS = (currentSlug: string) =>
  PAGES.filter((p) => p.slug !== currentSlug)
    .slice(0, 10)
    .map((p) => ({ label: p.h1.replace(/ (Generator|Font Generator)$/i, ""), href: `/font-generator/${p.slug}` }));

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();

  const others = PAGES.filter((p) => p.slug !== page.slug).slice(0, 12);
  const platforms = platformsFor(page);
  const sampleStyles = page.styles.slice(0, 3).map((id) => ALL_STYLES[id]).filter(Boolean);
  const samplePhrases = page.examples ?? ["hello world", "good vibes only", "stay weird"];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.oldenglishfontgenerator.com/" },
      { "@type": "ListItem", position: 2, name: "Font Generator", item: "https://www.oldenglishfontgenerator.com/font-generator" },
      { "@type": "ListItem", position: 3, name: page.h1, item: `https://www.oldenglishfontgenerator.com/font-generator/${page.slug}` },
    ],
  };

  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/font-generator">Font Generator</Link>
            <span className="sep">/</span>
            <span className="current">{page.h1.replace(/ Generator$/i, "")}</span>
          </div>

          <section className="hero" id="generator">
            <h1>{page.h1}</h1>
            <p className="lead">{page.intro}</p>

            <Generator
              styles={page.styles}
              defaultText={page.defaultText}
              pills={SIBLING_PILLS(page.slug)}
              resultsTitle={`${page.h1.replace(/ Generator$/i, "")} Styles`}
              initialVisible={8}
            />
          </section>
        </div>

        {page.about[0] && (
          <section className="section">
            <div className="container">
              <h2>{page.about[0].heading}</h2>
              <p>{page.about[0].body}</p>
            </div>
          </section>
        )}

        <section className="section">
          <div className="container">
            <div className="eyebrow">Quick guide</div>
            <h2>How to use the {page.h1.toLowerCase()}</h2>
            <div className="steps">
              <div className="step">
                <div className="num">01</div>
                <h3>Type your text</h3>
                <p>Enter text in the box above — previews update as you type.</p>
              </div>
              <div className="step">
                <div className="num">02</div>
                <h3>Pick a variant</h3>
                <p>Scroll through the generated styles and find the one that fits.</p>
              </div>
              <div className="step">
                <div className="num">03</div>
                <h3>Tap to copy</h3>
                <p>Click any row to copy it, then paste it wherever you need.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="eyebrow">Compatibility</div>
            <h2>Where these styles work</h2>
            <p>The output is plain Unicode, so it pastes into any app that accepts text:</p>
            <ul className="where-list">
              {platforms.map((p) => (
                <li key={p.app}>
                  <strong>{p.app}</strong>
                  {p.note}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {sampleStyles.length > 0 && (
          <section className="section">
            <div className="container">
              <div className="eyebrow">Examples</div>
              <h2>Previews</h2>
              <div className="examples">
                {sampleStyles.flatMap((s) =>
                  samplePhrases.map((phrase) => (
                    <div className="ex" key={`${s.id}-${phrase}`}>
                      <small>{s.name}</small>
                      {s.transform(phrase)}
                    </div>
                  ))
                )}
              </div>
            </div>
          </section>
        )}

        {page.about.slice(1).map((b) => (
          <section className="section" key={b.heading}>
            <div className="container">
              <h2>{b.heading}</h2>
              <p>{b.body}</p>
            </div>
          </section>
        ))}

        <section className="section faq" id="faq">
          <div className="container">
            <h2>Frequently Asked Questions</h2>
            {page.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="eyebrow">Keep exploring</div>
            <h2>More font generators</h2>
            <div className="features">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/font-generator/${o.slug}`}
                  className="feature"
                >
                  <h3>{o.h1}</h3>
                  <p>{o.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
