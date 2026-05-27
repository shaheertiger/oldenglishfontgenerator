import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { POSTS, getPost, type BlogBlock } from "@/lib/blog";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

type Params = { slug: string };

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function renderBlock(b: BlogBlock, i: number) {
  switch (b.type) {
    case "h2": return <h2 key={i}>{b.text}</h2>;
    case "h3": return <h3 key={i}>{b.text}</h3>;
    case "p": return <p key={i}>{b.text}</p>;
    case "ul": return <ul key={i}>{b.items.map((it, j) => <li key={j}>{it}</li>)}</ul>;
    case "ol": return <ol key={i}>{b.items.map((it, j) => <li key={j}>{it}</li>)}</ol>;
    case "quote": return <blockquote key={i}>{b.text}</blockquote>;
  }
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    author: { "@type": "Organization", name: "Old English Font Generator" },
    publisher: {
      "@type": "Organization",
      name: "Old English Font Generator",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.svg` },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
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
            <Link href="/blog">Blog</Link>
            <span className="sep">/</span>
            <span className="current">{post.title}</span>
          </div>

          <article className="blog-post">
            <header className="blog-post-head">
              <div className="blog-meta">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span className="blog-dot">·</span>
                <span>{post.readingTime}</span>
              </div>
              <h1>{post.title}</h1>
              <p className="lead">{post.description}</p>
            </header>

            <div className="blog-body">
              {post.body.map((b, i) => renderBlock(b, i))}
            </div>
          </article>
        </div>

        <section className="section">
          <div className="container">
            <div className="eyebrow">Keep reading</div>
            <h2>More articles</h2>
            <div className="features">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="feature">
                  <h3>{r.title}</h3>
                  <p>{r.excerpt}</p>
                </Link>
              ))}
            </div>
            <p style={{ marginTop: 24 }}>
              <Link href="/blog">All articles →</Link>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
