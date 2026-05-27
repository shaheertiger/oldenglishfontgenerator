import type { Metadata } from "next";
import MixerClient from "./MixerClient";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Font Mixer – Combine Two Unicode Styles into One",
  description:
    "Mix two Unicode font styles into one custom output — alternating letters, stacked transforms, or split. Copy and paste the result anywhere.",
  keywords: ["font mixer", "combine fonts", "unicode font mix", "alternating text"],
  alternates: { canonical: `${SITE_URL}/font-mixer` },
  openGraph: {
    title: "Font Mixer – Combine Two Unicode Styles",
    description: "Blend two Unicode styles into a single line of styled text.",
    url: `${SITE_URL}/font-mixer`,
    type: "website",
  },
};

export default function MixerPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <section className="hero">
            <h1>Font Mixer</h1>
            <p className="lead">
              Pick two Unicode styles and a mix mode to fuse them into one
              line of text. Alternate every other letter, stack transforms,
              or split the text in half — copy the result and paste anywhere.
            </p>
            <MixerClient />
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>How the font mixer works</h2>
            <p>
              <strong>Alternate:</strong> every other character is rendered in
              Style A and Style B, producing a striped, pseudo-cursive look.
              Great for usernames and short captions.
            </p>
            <p>
              <strong>Stack:</strong> Style A is applied first, then Style B
              is applied to the result. Only certain combinations stack
              cleanly — try blackletter + spaced, or script + underlined.
            </p>
            <p>
              <strong>Split:</strong> the first half of your text uses Style
              A, the second half uses Style B. Handy for two-word handles.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
