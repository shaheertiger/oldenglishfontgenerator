import type { Metadata } from "next";
import AsciiClient from "./AsciiClient";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "ASCII Generator – Text to ASCII Art",
  description:
    "Free ASCII art generator. Turn any text into block-letter ASCII you can copy and paste into chats, code comments, READMEs, and signatures.",
  keywords: ["ascii generator", "text to ascii", "ascii art"],
  alternates: { canonical: "https://www.oldenglishfontgenerator.com/ascii-generator" },
  openGraph: {
    title: "ASCII Generator – Text to ASCII Art",
    description: "Turn text into block-letter ASCII art. Copy and paste anywhere.",
    url: "https://www.oldenglishfontgenerator.com/ascii-generator",
    type: "website",
  },
};

export default function AsciiPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero container">
          <h1>ASCII Generator</h1>
          <p>
            Turn any short string into block-letter ASCII art. Type your text,
            pick a block character, and copy the result into README files,
            terminal welcome banners, code comments, or chat.
          </p>
          <AsciiClient />
        </section>

        <section className="section">
          <div className="container">
            <h2>What ASCII art is good for</h2>
            <p>
              ASCII art predates modern graphics — it&rsquo;s text shaped like
              pictures, so it survives anywhere plain text is allowed. People
              still use it for terminal startup banners, project logos in
              README files, signatures in email, and ASCII tables in code
              documentation.
            </p>
            <h2>How this generator works</h2>
            <p>
              Every supported character has a hand-drawn 5-row glyph. When you
              type, each glyph is stacked side-by-side; the chosen block
              character replaces the foreground. The output is pure
              monospaced text, so it pastes cleanly into any monospaced font
              context.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
