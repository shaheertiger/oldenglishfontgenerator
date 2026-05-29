import type { Metadata } from "next";
import CaseClient from "./CaseClient";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Case Converter – Sentence case, Title Case, UPPER & lower",
  description:
    "Free online case converter. Change text to Sentence case, Title Case, UPPER CASE, lower case, Capitalized Case, and alternating case instantly. Copy and paste.",
  keywords: [
    "case converter",
    "sentence case",
    "title case converter",
    "uppercase to lowercase",
    "capitalize text",
  ],
  alternates: { canonical: `${SITE_URL}/case-converter` },
  openGraph: {
    title: "Case Converter – Sentence, Title, UPPER & lower",
    description: "Convert text between sentence case, title case, upper, lower and more.",
    url: `${SITE_URL}/case-converter`,
    type: "website",
  },
};

export default function CaseConverterPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <section className="hero">
            <h1>Case Converter</h1>
            <p className="lead">
              Paste your text and switch it between Sentence case, Title Case,
              UPPER CASE, lower case, Capitalized Case, and more. Live word and
              character counts included. Nothing leaves your browser.
            </p>
            <CaseClient />
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>The case styles explained</h2>
            <p>
              <strong>Sentence case</strong> capitalizes the first letter of
              each sentence and lowercases the rest — the everyday style for
              paragraphs and emails. <strong>Title Case</strong> capitalizes the
              important words and keeps short joining words (a, the, of, and)
              lowercase, which is how headlines and article titles are written.
            </p>
            <p>
              <strong>Capitalized Case</strong> simply uppercases the first
              letter of every word. <strong>UPPER CASE</strong> and{" "}
              <strong>lower case</strong> do exactly what they say.{" "}
              <strong>aLtErNaTiNg</strong> and <strong>InVeRsE</strong> case are
              playful styles for social posts and memes.
            </p>
            <h2 style={{ marginTop: 28 }}>When to use which</h2>
            <p>
              Use Sentence case for body copy, Title Case for headings and blog
              titles, UPPER CASE for short labels or emphasis, and lower case
              when you want a calm, informal tone. The converter never sends
              your text anywhere — the transformation runs entirely on your
              device.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
