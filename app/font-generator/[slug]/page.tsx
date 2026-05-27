import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Generator from "@/components/Generator";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { PAGES, getPage } from "@/lib/pages";

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
  const url = `https://oldenglishfontgenerator.com/font-generator/${page.slug}`;
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

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();

  const others = PAGES.filter((p) => p.slug !== page.slug).slice(0, 10);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero container">
          <h1>{page.h1}</h1>
          <p>{page.intro}</p>
          <Generator styles={page.styles} defaultText={page.defaultText} />
        </section>

        <section className="section">
          <div className="container">
            {page.about.map((b) => (
              <div key={b.heading} style={{ marginBottom: 28 }}>
                <h2>{b.heading}</h2>
                <p>{b.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="container">
            <h2>FAQ</h2>
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
            <h2>More font generators</h2>
            <div className="features">
              {others.map((o) => (
                <Link key={o.slug} href={`/font-generator/${o.slug}`} className="feature" style={{ textDecoration: "none" }}>
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
    </>
  );
}
