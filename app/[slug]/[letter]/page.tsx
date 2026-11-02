import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Generator from "@/components/Generator";
import CharGrid from "@/components/CharGrid";
import FontDirectory from "@/components/FontDirectory";
import JsonLd from "@/components/JsonLd";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { ALL_STYLES } from "@/lib/fonts";
import { LETTERS, LETTER_BY_L, codepoints, hex } from "@/lib/letters";
import { fontsByName } from "@/lib/realfonts";
import { abs, breadcrumbLd, faqLd } from "@/lib/seo";

type Params = { slug: string; letter: string };
const HUB = "old-english-alphabet";

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return LETTERS.map((x) => ({ slug: HUB, letter: x.l }));
}

const PREVIEW_FONTS = fontsByName(["UnifrakturMaguntia", "UnifrakturCook", "Fruktur", "Texturina", "Pirata One", "Grenze Gotisch"]);
const GRID_STYLES = ["fraktur", "bold-fraktur", "gothic-framed", "frame-white", "circled", "boxed", "fraktur-underline", "distressed"];

function content(l: string) {
  const info = LETTER_BY_L[l];
  const U = l.toUpperCase();
  const cp = codepoints(l);
  const fr = ALL_STYLES["fraktur"].transform;
  const bfr = ALL_STYLES["bold-fraktur"].transform;
  const title = `Old English Letter ${U} — Copy ${U} in Blackletter`;
  const description = `Old English letter ${U}: copy the capital and lowercase ${U} in Fraktur and Bold Fraktur, see how it is built and which letters it is confused with.`;
  const faq = [
    { q: `Which letter is the Old English ${U} confused with?`, a: info.confused },
    ...(cp.letterlike
      ? [{
          q: `Why does ${fr(U)} look different from other Fraktur letters?`,
          a: `It is ${hex(cp.upper)}, a Letterlike Symbols character, so ${fr(U)} may come from another font than ${fr(l)}; bold ${bfr(U)} is ${hex(cp.boldUpper)}.`,
        }]
      : []),
  ];
  return { info, U, cp, fr, bfr, title, description, faq };
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug, letter } = await params;
  if (slug !== HUB || !LETTER_BY_L[letter]) return {};
  const { title, description } = content(letter);
  const url = abs(`/${HUB}/${letter}`);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
  };
}

export default async function LetterPage({ params }: { params: Promise<Params> }) {
  const { slug, letter } = await params;
  if (slug !== HUB || !LETTER_BY_L[letter]) notFound();
  const { info, U, cp, fr, bfr, faq } = content(letter);
  const i = LETTERS.findIndex((x) => x.l === letter);
  const prev = LETTERS[(i + 25) % 26].l;
  const next = LETTERS[(i + 1) % 26].l;

  const grid = [
    { label: `Capital ${U}`, cells: GRID_STYLES.map((id) => ({ glyph: ALL_STYLES[id].transform(U), hint: `${ALL_STYLES[id].name} ${U}` })) },
    { label: `Lowercase ${letter}`, cells: GRID_STYLES.map((id) => ({ glyph: ALL_STYLES[id].transform(letter), hint: `${ALL_STYLES[id].name} ${letter}` })) },
  ];

  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep" aria-hidden="true">›</span>
            <Link href={`/${HUB}`}>Old English Alphabet</Link>
            <span className="sep" aria-hidden="true">›</span>
            <span className="current" aria-current="page">{U}</span>
          </nav>
          <section className="hero">
            <h1>Old English Letter {U}</h1>
            <p className="lead">
              {fr(U)} {bfr(U)} {fr(letter)} {bfr(letter)} — {info.use}
            </p>
            <CharGrid groups={grid} />
            <h2 className="tool-h">Words starting with {U}</h2>
            <Generator
              styles={["bold-fraktur", "fraktur", "illuminated", "oe-cursive", "gothic-framed", "tattoo", "fraktur-small-caps", "deco-crown"]}
              sample={info.words[0]}
              presets={info.words}
              initialVisible={8}
            />
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>How the Old English {U} is built</h2>
            <p>{info.shape}</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2><Link href="/fonts/old-english">{U} in real blackletter fonts</Link></h2>
            <FontDirectory fonts={PREVIEW_FONTS} sample={`${U}${letter}`} compact />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Unicode details for {U}</h2>
            <div className="table-wrap">
              <table className="compare">
                <thead>
                  <tr><th scope="col">Form</th><th scope="col">Character</th><th scope="col">Code point</th></tr>
                </thead>
                <tbody>
                  <tr><td>Fraktur capital</td><td className="glyph">{fr(U)}</td><td>{hex(cp.upper)}{cp.letterlike ? " (Letterlike Symbols)" : ""}</td></tr>
                  <tr><td>Fraktur lowercase</td><td className="glyph">{fr(letter)}</td><td>{hex(cp.lower)}</td></tr>
                  <tr><td>Bold Fraktur capital</td><td className="glyph">{bfr(U)}</td><td>{hex(cp.boldUpper)}</td></tr>
                  <tr><td>Bold Fraktur lowercase</td><td className="glyph">{bfr(letter)}</td><td>{hex(cp.boldLower)}</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section faq">
          <div className="container">
            <h2>Frequently Asked Questions</h2>
            {faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="prevnext">
              <Link href={`/${HUB}/${prev}`}>← Old English {prev.toUpperCase()}</Link>
              <Link href={`/${HUB}`}>Full alphabet chart</Link>
              <Link href={`/${HUB}/${next}`}>Old English {next.toUpperCase()} →</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Old English Alphabet", path: `/${HUB}` },
            { name: `Letter ${U}`, path: `/${HUB}/${letter}` },
          ]),
          faqLd(faq),
        ]}
      />
    </>
  );
}
