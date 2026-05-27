import type { Metadata } from "next";
import HeadcanonClient from "./HeadcanonClient";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Headcanon Generator – Random Character Traits & Backstory",
  description:
    "Generate random character headcanons: name, vibe, fear, motivation, secret, quirk, alignment, comfort object. For writers, RP, and fan fiction.",
  keywords: ["headcanon generator", "character generator", "character trait generator", "fanfic generator"],
  alternates: { canonical: `${SITE_URL}/headcanon-generator` },
  openGraph: {
    title: "Headcanon Generator",
    description: "Random character traits and backstory snippets for writers and RP.",
    url: `${SITE_URL}/headcanon-generator`,
    type: "website",
  },
};

export default function HeadcanonPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <section className="hero">
            <h1>Headcanon Generator</h1>
            <p className="lead">
              Random character traits — name, age, vibe, fear, secret,
              motivation, comfort object, alignment, quirk. For writers,
              roleplayers, fanfic authors, and anyone stuck on a blank page.
            </p>
            <HeadcanonClient />
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>What is a headcanon?</h2>
            <p>
              A &ldquo;headcanon&rdquo; is a detail about a character or
              setting that isn&rsquo;t official in the source material — a
              fan&rsquo;s personal interpretation, treated as canon inside
              their own head. The generator gives you a starter set of
              traits you can mix into an existing character, an original
              cast, or a tabletop RPG NPC.
            </p>
            <h2 style={{ marginTop: 28 }}>How to use the output</h2>
            <p>
              Regenerate until something sparks. Keep the parts you like and
              swap the rest. The most useful traits tend to be the
              contradictions — a character whose vibe and motivation pull
              against each other usually has more story in them than one
              who&rsquo;s internally consistent.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
