import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { EMOTICON_CATEGORIES } from "@/lib/emoticons";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Emoticons – Kaomoji & Japanese Text Faces Copy & Paste",
  description:
    "Browse shrug, blushing, uwu, happy, sad, angry, love, and more kaomoji categories. Click any face to copy and paste it anywhere.",
  keywords: ["emoticons", "kaomoji", "japanese text faces", "shrug emoticon", "uwu emoticon"],
  alternates: { canonical: `${SITE_URL}/emoticons` },
  openGraph: {
    title: "Emoticons – Kaomoji & Japanese Text Faces Copy & Paste",
    description: "Click-to-copy kaomoji library, grouped by category.",
    url: `${SITE_URL}/emoticons`,
    type: "website",
  },
};

export default function EmoticonsIndex() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <section className="hero">
            <h1>Emoticons</h1>
            <p className="lead">
              Browse shrug, blushing, uwu, happy, sad, angry, love, and more —
              click any face to copy. Every kaomoji is plain Unicode text that
              pastes anywhere text is allowed.
            </p>
          </section>
        </div>

        <section className="section">
          <div className="container">
            <div className="features">
              {EMOTICON_CATEGORIES.map((c) => (
                <Link key={c.slug} href={`/emoticons/${c.slug}`} className="feature">
                  <h3>{c.label} Emoticons</h3>
                  <p style={{ fontSize: 20, marginBottom: 8 }}>
                    {c.emoticons.slice(0, 4).join("  ")}
                  </p>
                  <p>{c.description}</p>
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
