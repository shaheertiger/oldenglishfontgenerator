import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Generator from "@/components/Generator";
import CharGrid from "@/components/CharGrid";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import Updated from "@/components/Updated";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { CHARS, codeTable, facts, faq, forms, history, info, isDigit, meta } from "@/lib/different-fonts";
import { abs, breadcrumbLd, faqLd } from "@/lib/seo";

// Restored Nov 2026 at its original URL (it was 301'd to /old-english-alphabet
// on Nov 1 and lost its Bing and Copilot traffic). See docs/fix-2026-11.md.
type Params = { letter: string };
export const dynamicParams = false;
export function generateStaticParams(): Params[] {
  return CHARS.map((letter) => ({ letter }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { letter } = await params;
  if (!CHARS.includes(letter)) return {};
  const { title, description } = meta(letter);
  const url = abs(`/different-fonts/${letter}`);
  return { title: { absolute: title }, description, alternates: { canonical: url }, openGraph: { title, description, url, type: "website" } };
}

const WORD_STYLES = ["fraktur", "bold-fraktur", "script", "bold-script", "u-sans-bold", "u-double-struck", "u-bubble", "u-squared", "u-small-caps", "u-fullwidth", "italic-serif", "u-monospace"];

export default async function DifferentFontsChar({ params }: { params: Promise<Params> }) {
  const { letter: ch } = await params;
  if (!CHARS.includes(ch)) notFound();
  const digit = isDigit(ch);
  const U = ch.toUpperCase();
  const m = meta(ch);
  const i = info(ch);
  const qa = faq(ch);
  const idx = CHARS.indexOf(ch);
  const prev = CHARS[(idx + CHARS.length - 1) % CHARS.length];
  const next = CHARS[(idx + 1) % CHARS.length];
  const groups = digit
    ? [{ label: `The number ${ch}`, cells: forms(ch).map((f) => ({ glyph: f.glyph, hint: `${f.style} ${ch}` })) }]
    : [
        { label: `Capital ${U}`, cells: forms(U).map((f) => ({ glyph: f.glyph, hint: `${f.style} ${U}` })) },
        { label: `Lowercase ${ch}`, cells: forms(ch).map((f) => ({ glyph: f.glyph, hint: `${f.style} ${ch}` })) },
      ];
  const codes = codeTable(digit ? ch : U);

  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep" aria-hidden="true">›</span>
            <Link href="/different-fonts">Letters in different fonts</Link>
            <span className="sep" aria-hidden="true">›</span>
            <span className="current" aria-current="page">{digit ? ch : U}</span>
          </nav>
          <section className="hero">
            <h1>{m.h1}</h1>
            <p className="lead">{m.answer}</p>
            <Updated file="lib/different-fonts.ts" />
            <h2 className="tool-h">{digit ? `${ch}: tap to copy` : `${U} ${ch}: tap to copy`}</h2>
            <CharGrid groups={groups} />
            <h2 className="tool-h">{digit ? `Type a number or date with ${ch}` : `Words starting with ${U}`}</h2>
            <Generator styles={WORD_STYLES} sample={i.words[0]} presets={i.words} initialVisible={8} />
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>{digit ? `The shape of ${ch}` : `The shape of ${U}`}</h2>
            <p>{i.shape}</p>
            <p>{i.use}</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>{digit ? `Where the ${ch} comes from` : `Where the letter ${U} comes from`}</h2>
            <p>{history(ch)}</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2><a href="https://www.unicode.org/charts/PDF/U1D400.pdf">Unicode</a> code points</h2>
            <ul>{facts(ch).map((f) => <li key={f}>{f}</li>)}</ul>
            <div className="table-wrap">
              <table className="compare">
                <thead><tr><th scope="col">Alphabet</th><th scope="col">Character</th><th scope="col">Code point</th></tr></thead>
                <tbody>
                  {codes.map((r) => (
                    <tr key={r[0]}><td>{r[0]}</td><td className="glyph">{r[1]}</td><td>{r[2]}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <Faq items={qa} />

        <section className="section">
          <div className="container">
            <div className="prevnext">
              <Link href={`/different-fonts/${prev}`}>← {prev.toUpperCase()} in different fonts</Link>
              <Link href="/different-fonts">All letters and numbers</Link>
              <Link href={`/different-fonts/${next}`}>{next.toUpperCase()} in different fonts →</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Letters in different fonts", path: "/different-fonts" },
            { name: m.h1, path: `/different-fonts/${ch}` },
          ]),
          faqLd(qa),
        ]}
      />
    </>
  );
}
