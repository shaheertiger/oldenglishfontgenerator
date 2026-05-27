import type { Metadata } from "next";
import Generator from "@/components/Generator";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Preppy Fonts Generator – Clean Aesthetic Text Copy & Paste",
  description:
    "Preppy aesthetic fonts for Instagram bios, TikTok captions, and academic-style usernames. Clean serif, small caps, monospace, and italic — copy and paste ready.",
  keywords: ["preppy fonts", "preppy aesthetic font", "preppy text generator", "academia fonts"],
  alternates: { canonical: `${SITE_URL}/preppy` },
  openGraph: {
    title: "Preppy Fonts Generator",
    description: "Clean, polished, academic-leaning Unicode font styles.",
    url: `${SITE_URL}/preppy`,
    type: "website",
  },
};

const STYLES = [
  "small-caps",
  "italic-serif",
  "bold-serif",
  "bold-italic-serif",
  "double-struck",
  "monospace",
  "small-caps-spaced",
  "italic-spaced",
  "fraktur",
  "script",
  "outline-gothic",
  "fullwidth",
];

const PILLS = [
  { label: "Cursive", href: "/font-generator/cursive" },
  { label: "Italic", href: "/font-generator/italic" },
  { label: "Small Caps", href: "/font-generator/small-caps" },
  { label: "Bold", href: "/font-generator/bold" },
  { label: "Fancy", href: "/font-generator/fancy" },
  { label: "Coquette", href: "/coquette" },
  { label: "Stylish", href: "/font-generator/stylish" },
  { label: "Instagram", href: "/font-generator/instagram" },
];

export default function PreppyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <section className="hero">
            <h1>Preppy Fonts</h1>
            <p className="lead">
              Clean, polished Unicode styles for the preppy aesthetic — small
              caps, italics, serif bold, and monospaced text that reads as
              put-together without trying too hard. Built for Instagram bios,
              TikTok captions, and academic-style usernames.
            </p>
            <Generator
              styles={STYLES}
              pills={PILLS}
              resultsTitle="Preppy Font Styles"
              initialVisible={12}
            />
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>What makes a font feel &ldquo;preppy&rdquo;?</h2>
            <p>
              The preppy aesthetic borrows from old-school East Coast prep
              schools, sailing clubs, and Ivy League branding — clean
              typography, no clutter, lots of small caps, italic accents,
              and the occasional serif flourish. Translated to Unicode, that
              means leaning on the math-italic, small-caps, and double-struck
              blocks rather than the heavily decorative ones.
            </p>
            <h2 style={{ marginTop: 28 }}>Where it works</h2>
            <p>
              Preppy text reads best in bios, profile names, and short
              captions where every letter gets attention. It overpowers long
              paragraphs and disappears in busy feeds — use it for the lines
              you want people to read twice, not for body content.
            </p>
            <h2 style={{ marginTop: 28 }}>Pairing tip</h2>
            <p>
              The strongest preppy bios combine one styled line (small caps
              or italic) with one plain line. The contrast makes the styled
              line feel intentional instead of decorative for its own sake.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
