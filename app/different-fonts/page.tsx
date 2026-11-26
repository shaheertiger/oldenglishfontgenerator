import type { Metadata } from "next";
import Link from "next/link";
import CharGrid from "@/components/CharGrid";
import Faq from "@/components/Faq";
import Generator from "@/components/Generator";
import JsonLd from "@/components/JsonLd";
import Updated from "@/components/Updated";
import Lead from "@/components/Lead";
import { OWNER_BY_PATH, relatedOwners } from "@/lib/owners";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { ALL_STYLES, ALPHABET_UPPER } from "@/lib/fonts";
import { CHARS, isDigit } from "@/lib/different-fonts";
import { abs, breadcrumbLd, faqLd } from "@/lib/seo";

// Hub for /different-fonts/{a-z,0-9}. Restored Nov 2026 at its original URL.
const TITLE = "Letters in Different Fonts: A–Z and 0–9 to Copy and Paste";
const DESC = "Every letter A–Z and number 0–9 in 40+ different fonts. Pick a character, tap a style to copy it, paste it anywhere. Free, no sign-up.";
export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: abs("/different-fonts") },
  openGraph: { title: TITLE, description: DESC, url: abs("/different-fonts"), type: "website" },
};

const CHART = ["script", "bold-serif", "u-double-struck", "u-bubble", "u-squared", "u-small-caps"];
const FAQ = [
  { q: "How do I get a letter in a different font?", a: "Open the letter below and tap the form you want; it's copied as text. For a whole word, type it in the box on this page." },
  { q: "Why are these called fonts if they are characters?", a: "They look like fonts, but each one is a separate Unicode character, which is why they keep their look when you paste them where you can't pick a font." },
  { q: "Which letters have the most forms?", a: "Most letters have about 40 distinct forms here. A few have fewer because Unicode lacks them, for example there is no small-caps q or x." },
  { q: "Are numbers available in different fonts too?", a: "Yes: 0–9 each have their own page with bold, outline, sans, monospace, circled, subscript, superscript and Roman numeral forms." },
  { q: "Will every phone show these letters?", a: "It depends on the fonts installed on the reader's device. If a character shows as an empty box, pick a more common style such as bold or script." },
];

export default function DifferentFontsHub() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep" aria-hidden="true">›</span>
            <span className="current" aria-current="page">Letters in different fonts</span>
          </nav>
          <section className="hero">
            <h1>Letters in Different Fonts</h1>
            <Lead>
              Letters in different fonts: pick any letter or number below to see it in 40+ different fonts, from Old English
              and script to bubble and squared, each one a Unicode character you can tap to copy. To see a letter in different
              fonts, open it below; to style a whole word or the alphabet in different fonts at once, type it here:
            </Lead>
            <Generator styles={["fraktur", "script", "bold-serif", "u-double-struck", "u-bubble", "u-squared", "u-small-caps", "u-fullwidth", "italic-serif", "u-sans-bold"]} sample="Letters" initialVisible={10} />
            <Updated file="lib/different-fonts.ts" />
            <nav className="related-owners" aria-label="Related styles">
              <span>Related styles:</span>
              {relatedOwners("/different-fonts").map((r) => <Link key={r.href} href={r.href}>{r.anchor}</Link>)}
            </nav>
            <h2 className="tool-h">Choose a letter or number</h2>
            <ul className="letter-nav">
              {CHARS.map((c) => (
                <li key={c}>
                  <Link href={`/different-fonts/${c}`} aria-label={`${isDigit(c) ? c : c.toUpperCase()} in different fonts`}>
                    {isDigit(c) ? c : c.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="section definition-block" aria-label="What are letters in different fonts?">
          <div className="container">
            <p className="definition">{OWNER_BY_PATH["/different-fonts"].definition}</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>The alphabet in six different fonts</h2>
            <CharGrid groups={CHART.map((id) => ({ label: ALL_STYLES[id].name, cells: ALPHABET_UPPER.map((c) => ({ glyph: ALL_STYLES[id].transform(c), hint: `${ALL_STYLES[id].name} ${c}` })) }))} />
          </div>
        </section>

        <Faq items={FAQ} />
      </main>
      <SiteFooter />
      <JsonLd data={[breadcrumbLd([{ name: "Home", path: "/" }, { name: "Letters in different fonts", path: "/different-fonts" }]), faqLd(FAQ)]} />
    </>
  );
}
