import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { NAME_CATEGORIES } from "@/lib/names";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Name Generator – Random Usernames for Roblox, Discord, Twitter & More",
  description:
    "Free random name and username generators for Roblox, Minecraft, Discord, Twitter, plus cute and aesthetic ideas. Hit Regenerate and click to copy.",
  keywords: [
    "name generator",
    "username generator",
    "random username",
    "roblox name generator",
    "discord username generator",
  ],
  alternates: { canonical: `${SITE_URL}/name-generator` },
  openGraph: {
    title: "Name Generator – Random Usernames for Roblox, Discord, Twitter & More",
    description: "Random username generators by platform, copy and paste ready.",
    url: `${SITE_URL}/name-generator`,
    type: "website",
  },
};

export default function NameGeneratorIndex() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <section className="hero">
            <h1>Name Generator</h1>
            <p className="lead">
              Random username and name ideas tailored to each platform —
              Roblox, Minecraft, Discord, Twitter, plus cute and aesthetic
              styles. Pick a generator, hit Regenerate, and tap any row to copy.
            </p>
          </section>
        </div>

        <section className="section">
          <div className="container">
            <div className="features">
              {NAME_CATEGORIES.map((c) => (
                <Link key={c.slug} href={`/name-generator/${c.slug}`} className="feature">
                  <h3>{c.h1}</h3>
                  <p>{c.description}</p>
                </Link>
              ))}
            </div>
            <p style={{ marginTop: 24 }}>
              Looking for gothic and Old English style handles instead? Try the{" "}
              <Link href="/username-generator">username generator</Link>.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
