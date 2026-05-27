import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { POSTS } from "@/lib/blog";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Blog – Old English Fonts, Unicode & Blackletter Notes",
  description:
    "Articles on blackletter typography, Unicode font generators, tattoo lettering, and how to use Old English text on Instagram, Discord, and TikTok.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Blog – Old English Fonts & Blackletter Notes",
    description: "Long-form articles on blackletter, gothic scripts, and copy-paste Unicode fonts.",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogIndex() {
  const sorted = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <section className="hero">
            <h1>Blog</h1>
            <p className="lead">
              Practical notes on blackletter typography, Unicode font
              generators, and where the styles from this site actually work in
              the real world.
            </p>
          </section>
        </div>

        <section className="section">
          <div className="container">
            <div className="blog-list">
              {sorted.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-list-item">
                  <div className="blog-meta">
                    <time dateTime={p.date}>{formatDate(p.date)}</time>
                    <span className="blog-dot">·</span>
                    <span>{p.readingTime}</span>
                  </div>
                  <h2>{p.title}</h2>
                  <p>{p.excerpt}</p>
                  <span className="blog-read">Read article →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
