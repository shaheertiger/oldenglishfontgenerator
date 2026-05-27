import type { Metadata } from "next";
import StoryClient from "./StoryClient";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Story Generator – Random Gothic Story Seeds",
  description:
    "Random gothic micro-story seeds for writers. One paragraph per click — setting, character, object, stakes, closing line.",
  keywords: ["story generator", "gothic story", "writing prompt", "story seed"],
  alternates: { canonical: `${SITE_URL}/story-generator` },
  openGraph: {
    title: "Story Generator",
    description: "Random gothic story seeds — one paragraph at a time.",
    url: `${SITE_URL}/story-generator`,
    type: "website",
  },
};

export default function StoryPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <section className="hero">
            <h1>Story Generator</h1>
            <p className="lead">
              One paragraph at a time. Each generation gives you a setting, a
              character, an object, a vague threat, and a closing line —
              enough scaffolding to start a short story or break through a
              blank page.
            </p>
            <StoryClient />
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>How to use it</h2>
            <p>
              Treat the output as a seed, not a finished thing. The most
              useful detail is usually the object or the closing line —
              those tend to carry the rest of the story with them.
              Regenerate freely; nothing is saved.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
