import type { Metadata } from "next";
import InvisibleClient from "./InvisibleClient";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Invisible Text Generator – Blank Characters Copy & Paste",
  description:
    "Free invisible text generator. Copy blank, invisible Unicode characters for empty usernames, blank messages, and hidden text. Runs in your browser.",
  keywords: [
    "invisible text generator",
    "invisible character",
    "blank text copy paste",
    "empty character",
    "invisible space",
  ],
  alternates: { canonical: `${SITE_URL}/invisible-text-generator` },
  openGraph: {
    title: "Invisible Text Generator",
    description: "Copy blank, invisible Unicode characters for empty usernames and messages.",
    url: `${SITE_URL}/invisible-text-generator`,
    type: "website",
  },
};

export default function InvisiblePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <section className="hero">
            <h1>Invisible Text Generator</h1>
            <p className="lead">
              Copy invisible Unicode characters — blank text that takes up space
              but shows nothing. Pick a character, choose how many, and paste it
              into usernames, messages, or bios that won&rsquo;t accept a normal
              empty string.
            </p>
            <InvisibleClient />
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>What is invisible text?</h2>
            <p>
              Invisible text is made from real Unicode characters that render
              with no visible glyph — like the Hangul Filler (U+3164), the
              Braille blank pattern (U+2800), or the zero-width space (U+200B).
              They count as &ldquo;a character&rdquo; to software, so they let
              you submit a field that looks empty, send a blank-looking message,
              or create spacing where regular spaces get trimmed.
            </p>
            <h2 style={{ marginTop: 28 }}>Which one should I use?</h2>
            <p>
              For empty usernames and display names, the <strong>Hangul
              Filler</strong> and <strong>Braille blank</strong> are the most
              widely accepted because they have a visible width without a
              symbol. The <strong>zero-width space</strong> and{" "}
              <strong>word joiner</strong> take up no width at all, which is
              handy for breaking up text or defeating auto-linking, but some
              apps strip them. Try a couple if the first one doesn&rsquo;t stick.
            </p>
            <h2 style={{ marginTop: 28 }}>A quick caution</h2>
            <p>
              Many platforms specifically forbid blank or invisible names in
              their rules, and some filters reject these characters. Use them
              where they&rsquo;re allowed, and remember the preview box above is
              empty on purpose — the characters really are there once you copy.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
