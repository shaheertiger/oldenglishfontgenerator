import type { Metadata } from "next";
import StackedClient from "./StackedClient";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Stacked Text Generator – Letters on Top Copy & Paste",
  description:
    "Free stacked text generator. Add layers of marks on top of your letters for a tall, stacked look you can copy and paste into bios, posts, and chats.",
  keywords: [
    "stacked text generator",
    "letters on top font",
    "stacked text",
    "tall text generator",
  ],
  alternates: { canonical: `${SITE_URL}/stacked-text-generator` },
  openGraph: {
    title: "Stacked Text Generator",
    description: "Stack marks on top of your letters for a tall, layered look. Copy and paste.",
    url: `${SITE_URL}/stacked-text-generator`,
    type: "website",
  },
};

export default function StackedPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <section className="hero">
            <h1>Stacked Text Generator</h1>
            <p className="lead">
              Pile combining marks on top of each letter to create tall,
              stacked text — the &ldquo;letters on top&rdquo; look. Type your
              text, drag the slider to control the height, and copy it anywhere
              plain text is allowed.
            </p>
            <StackedClient />
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>How stacked text works</h2>
            <p>
              Unicode includes <em>combining diacritical marks</em> — accents
              and symbols that attach above the character before them. By
              layering several of these marks on a single letter, the glyph
              appears to grow upward, stacking on top of the line. This tool
              adds a controlled number of above-the-line marks to each letter so
              the effect is consistent rather than random.
            </p>
            <h2 style={{ marginTop: 28 }}>Where it works (and where it may not)</h2>
            <p>
              Stacked text pastes fine into most social apps, but how tall it
              renders depends on the platform — some apps and operating systems
              clamp how far combining marks extend, and a few strip them
              entirely. Tall stacks can also overlap the line above them, so
              keep extra spacing in mind. Lower the slider if a destination
              trims the effect.
            </p>
            <h2 style={{ marginTop: 28 }}>Good uses</h2>
            <p>
              People use stacked text for eye-catching usernames, profile bios,
              comment reactions, and meme captions. Because it is still plain
              Unicode text, there are no images to upload and nothing to
              download.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
