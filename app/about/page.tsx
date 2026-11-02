import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter, Breadcrumb } from "@/components/SiteChrome";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, abs } from "@/lib/seo";
import { CONTACT_EMAIL } from "@/lib/site";

const TITLE = "About Old English Font Generator | How It Works";
const DESC =
  "Who runs Old English Font Generator, why it focuses only on blackletter, and how the Unicode mapping behind every style actually works.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: abs("/about") },
  openGraph: { title: TITLE, description: DESC, url: abs("/about"), type: "website" },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <Breadcrumb current="About" />
          <section className="hero">
            <h1>About Old English Font Generator</h1>
            <p className="lead">
              One independent developer builds and maintains this site. It does a
              single job: turning ordinary text into Old English, blackletter and
              gothic lettering you can paste anywhere, and explaining honestly
              what that text can and can't do.
            </p>
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>Why a site about only one style</h2>
            <p>
              Most text generators throw dozens of unrelated styles onto one page.
              That's fine if you want bubble letters one minute and upside-down
              text the next, but people looking for blackletter usually have a
              specific goal: a name for a tattoo consultation, a bio that fits
              Instagram's limit, a Discord display name, a heading for a
              certificate. Focusing on one family lets each page answer those
              questions properly, from the 32-character Discord limit to why
              Unicode has no blackletter digits.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>How the Unicode mapping works</h2>
            <p>
              Nothing here installs a font. Unicode, the standard that assigns a
              number to every character a computer can show, includes two
              complete blackletter alphabets meant for mathematics: Mathematical
              Fraktur (U+1D504–U+1D537) and Mathematical Bold Fraktur
              (U+1D56C–U+1D59F). When you type an A, the generator swaps it for
              U+1D504, 𝔄. Five regular capitals, ℭ ℌ ℑ ℜ ℨ, were encoded earlier
              in the Letterlike Symbols block, so the generator uses those.
            </p>
            <p>
              Accented letters are split into a base letter and a separate accent
              mark before conversion, which is how umlauts survive. Frames,
              crosses and underlines are extra symbols or combining marks placed
              around the converted letters. Because the result is ordinary text,
              it pastes into any app that accepts typing, but its exact look
              depends on the fonts installed on the reader&apos;s device.
            </p>
            <p>
              The image export on the{" "}
              <Link href="/old-english-text-to-image">text to image</Link> page
              and the{" "}
              <Link href="/old-english-tattoo-font">tattoo preview</Link> work
              differently: they draw real blackletter typefaces, UnifrakturCook
              and UnifrakturMaguntia, which are published under the SIL Open Font
              License and hosted on this site.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>How the site is run</h2>
            <ul>
              <li>Conversion happens in your browser. Text you type is not sent to our server.</li>
              <li>The site is free and supported by advertising. There are no accounts or paid tiers.</li>
              <li>We use analytics to see which pages are useful. See the <Link href="/privacy">privacy policy</Link> for details.</li>
              <li>We don&apos;t publish ratings or reviews we haven&apos;t collected, and we correct mistakes when they&apos;re pointed out.</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Contact</h2>
            <p>
              Found a style that renders badly on your device, a fact that&apos;s
              wrong, or a use case we should cover? Email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or use the{" "}
              <Link href="/contact">contact page</Link>.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
    </>
  );
}
