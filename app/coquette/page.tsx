import type { Metadata } from "next";
import Generator from "@/components/Generator";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Coquette Fonts Generator – Soft Cursive & Ribbon Aesthetic Text",
  description:
    "Coquette aesthetic fonts for Instagram bios and TikTok captions. Soft cursive, flowing italics, and delicate Unicode styles — copy and paste ready.",
  keywords: ["coquette fonts", "coquette aesthetic font", "ribbon fonts", "soft cursive generator"],
  alternates: { canonical: `${SITE_URL}/coquette` },
  openGraph: {
    title: "Coquette Fonts Generator",
    description: "Soft, flowing, ribbon-aesthetic Unicode styles.",
    url: `${SITE_URL}/coquette`,
    type: "website",
  },
};

const STYLES = [
  "script",
  "script-bold",
  "italic-serif",
  "bold-italic-serif",
  "cursive-spaced",
  "cursive-underline",
  "italic-spaced",
  "small-caps",
  "small-caps-spaced",
  "fraktur",
  "outline-gothic",
  "ye-olde",
];

const PILLS = [
  { label: "Cursive", href: "/font-generator/cursive" },
  { label: "Italic", href: "/font-generator/italic" },
  { label: "Fancy", href: "/font-generator/fancy" },
  { label: "Small Caps", href: "/font-generator/small-caps" },
  { label: "Stylish", href: "/font-generator/stylish" },
  { label: "Preppy", href: "/preppy" },
  { label: "Instagram", href: "/font-generator/instagram" },
  { label: "TikTok", href: "/font-generator/tiktok" },
];

export default function CoquettePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <section className="hero">
            <h1>Coquette Fonts</h1>
            <p className="lead">
              Soft, flowing Unicode styles for the coquette aesthetic — looping
              cursive scripts, delicate italics, and spaced small caps that
              feel like ribbons. Built for Instagram bios, TikTok captions,
              and Pinterest-board usernames.
            </p>
            <Generator
              styles={STYLES}
              pills={PILLS}
              resultsTitle="Coquette Font Styles"
              initialVisible={12}
            />
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>What is the coquette font aesthetic?</h2>
            <p>
              Coquette as a Tumblr- and TikTok-era visual style leans into
              hyperfeminine cues — bows, soft pinks, ballet flats, ribbons,
              cursive monograms. Translated into Unicode typography, the
              equivalent is the looping script alphabet (U+1D49C onward),
              math italic, and spaced small caps. None of it screams; all of
              it feels handwritten and delicate.
            </p>
            <h2 style={{ marginTop: 28 }}>Picking the right variant</h2>
            <p>
              Cursive Script and Cursive Bold work best for whole-word vibes —
              a name or a single line of caption. Italic Spaced and Small Caps
              Spaced feel airier and pair well with bows and ribbon emoji in
              bios. Underlined cursive adds the ribbon-tie feeling at the cost
              of some readability.
            </p>
            <h2 style={{ marginTop: 28 }}>Where it works</h2>
            <p>
              Bios accept everything. Display names mostly do. Username fields
              filter most cursive Unicode — if your handle keeps reverting,
              swap to Small Caps. Captions look softest when you mix one
              cursive line with regular text rather than going all-cursive.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
