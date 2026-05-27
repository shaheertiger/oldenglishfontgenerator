import type { Metadata } from "next";
import AutoStylerClient from "./AutoStylerClient";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Auto Font Styler – Smart Style Suggestions for Your Text",
  description:
    "Type any text and get instant Unicode style suggestions matched to its tone, length, and content. No guessing — copy and paste the best fit.",
  keywords: ["auto font styler", "smart font selector", "font suggester", "best font for text"],
  alternates: { canonical: `${SITE_URL}/auto-font-styler` },
  openGraph: {
    title: "Auto Font Styler – Smart Style Suggestions",
    description: "Heuristic-based Unicode style suggestions based on your text.",
    url: `${SITE_URL}/auto-font-styler`,
    type: "website",
  },
};

export default function AutoStylerPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <section className="hero">
            <h1>Auto Font Styler</h1>
            <p className="lead">
              Type anything and get the 8 styles most likely to fit. A
              lightweight heuristic reads your input&rsquo;s length, casing,
              and keywords — &ldquo;love&rdquo; leans toward script,
              &ldquo;dark&rdquo; leans toward blackletter, short strings get
              heavier styles, all-caps gets typographic ones.
            </p>
            <AutoStylerClient />
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>How the picker decides</h2>
            <p>
              Each suggestion has a one-line reason next to its name. The
              picker checks for mood words (dark/love/royal/playful/tech),
              looks at length (short vs. long), and notices structural cues
              like all-caps or embedded digits. Whatever slots aren&rsquo;t
              filled by cue-based picks get topped up with general-purpose
              styles that work for almost any text.
            </p>
            <h2 style={{ marginTop: 28 }}>When to use it</h2>
            <p>
              If you have a specific style in mind, the main generator is
              faster. The auto styler is for when you&rsquo;re staring at
              dozens of variants and not sure where to start — type your
              actual text, see what the picker recommends, then keep or swap.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
