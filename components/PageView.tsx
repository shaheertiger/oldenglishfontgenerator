import Link from "next/link";
import type { Metadata } from "next";
import Generator from "@/components/Generator";
import CharGrid, { type CharGroup } from "@/components/CharGrid";
import Faq from "@/components/Faq";
import ImageExport from "@/components/ImageExport";
import Updated from "@/components/Updated";
import JsonLd from "@/components/JsonLd";
import RichText from "@/components/RichText";
import { SiteHeader, SiteFooter, Breadcrumb } from "@/components/SiteChrome";
import type { Block, PageContent, Widget } from "@/content/pages/types";
import { ALL_STYLES, ALPHABET_LOWER, ALPHABET_UPPER } from "@/lib/fonts";
import { appLd, breadcrumbLd, faqLd, orgLd, websiteLd, abs } from "@/lib/seo";
import { toolLinks } from "@/lib/site";
import { sourceFile } from "@/content/pages";
import { lastModified } from "@/lib/lastmod";
import { LETTERS } from "@/lib/letters";
import { SYMBOL_GROUPS } from "@/lib/symbols";

export function pagePath(p: PageContent) {
  return p.slug ? `/${p.slug}` : "/";
}

export function pageMetadata(p: PageContent): Metadata {
  const url = abs(pagePath(p));
  return {
    title: { absolute: p.title },
    description: p.description,
    alternates: { canonical: url },
    openGraph: { title: p.title, description: p.description, url, type: "website", siteName: "Old English Font Generator" },
    twitter: { card: "summary_large_image", title: p.title, description: p.description },
  };
}

function letters(styleId: string, chars: string[], label: string): CharGroup {
  const s = ALL_STYLES[styleId];
  return { label, cells: chars.map((c) => ({ glyph: s.transform(c), hint: `${s.name} ${c}` })) };
}

function renderWidget(w: Widget, p: PageContent) {
  switch (w) {
    case "alphabet-compact":
      return (
        <>
          <CharGrid
            groups={[
              letters("fraktur", ALPHABET_UPPER, "Fraktur A–Z"),
              letters("fraktur", ALPHABET_LOWER, "Fraktur a–z"),
              letters("bold-fraktur", ALPHABET_UPPER, "Bold Fraktur A–Z"),
              letters("bold-fraktur", ALPHABET_LOWER, "Bold Fraktur a–z"),
            ]}
          />
          <p>
            Want a printable sheet or a per-letter breakdown? Open the full{" "}
            <Link href="/old-english-alphabet">Old English alphabet</Link>.
          </p>
        </>
      );
    case "alphabet-full":
      return (
        <CharGrid
          printable
          groups={[
            letters("fraktur", ALPHABET_UPPER, "Fraktur capitals"),
            letters("fraktur", ALPHABET_LOWER, "Fraktur lowercase"),
            letters("bold-fraktur", ALPHABET_UPPER, "Bold Fraktur capitals"),
            letters("bold-fraktur", ALPHABET_LOWER, "Bold Fraktur lowercase"),
          ]}
        />
      );
    case "letters":
      return (
        <CharGrid
          groups={[
            letters("gothic-framed", ALPHABET_UPPER, "Framed capitals 【】"),
            letters("frame-white", ALPHABET_UPPER, "White-bracket capitals ⟦⟧"),
            letters("circled", ALPHABET_UPPER, "Circled Fraktur capitals"),
          ]}
        />
      );
    case "numbers": {
      const d = "0123456789".split("");
      const bold = ALL_STYLES["fraktur"];
      const outline = ALL_STYLES["fraktur-outline-digits"];
      const roman = ["—", "Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ", "Ⅴ", "Ⅵ", "Ⅶ", "Ⅷ", "Ⅸ"];
      return (
        <CharGrid
          groups={[
            { label: "Bold serif digits (closest match to Bold Fraktur)", cells: d.map((c) => ({ glyph: bold.transform(c), hint: `bold digit ${c}` })) },
            { label: "Outline (double-struck) digits", cells: d.map((c) => ({ glyph: outline.transform(c), hint: `outline digit ${c}` })) },
            { label: "Unicode Roman numerals", cells: d.slice(1).map((c, i) => ({ glyph: roman[i + 1], hint: `Roman numeral ${c}` })) },
          ]}
        />
      );
    }
    case "tattoo-preview":
      return <ImageExport mode="tattoo" defaultText={p.tool.sample} />;
    case "image-export":
      return <ImageExport mode="plain" defaultText={p.tool.sample} />;
    case "symbols":
      return (
        <CharGrid
          groups={SYMBOL_GROUPS.map((g) => ({
            label: g.label,
            cells: g.items.map(([glyph, name]) => ({ glyph, hint: name })),
          }))}
        />
      );
    case "letter-index":
      return (
        <ul className="letter-nav">
          {LETTERS.map((x) => (
            <li key={x.l}>
              <Link href={`/old-english-alphabet/${x.l}`} aria-label={`Old English letter ${x.l.toUpperCase()}`}>
                {x.l.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      );
  }
}

export function renderBlock(b: Block, i: number, p?: PageContent) {
  if ("p" in b) return <p key={i}><RichText text={b.p} /></p>;
  if ("ul" in b)
    return (
      <ul key={i}>
        {b.ul.map((li) => <li key={li}><RichText text={li} /></li>)}
      </ul>
    );
  if ("table" in b)
    return (
      <div className="table-wrap" key={i}>
        <table className="compare">
          <thead>
            <tr>{b.table.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
          </thead>
          <tbody>
            {b.table.rows.map((r) => (
              <tr key={r[0]}>
                {r.map((c, j) => (
                  <td key={j} className={b.table.glyphCols?.includes(j) ? "glyph" : undefined}>
                    <RichText text={c} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  if ("cards" in b)
    return (
      <div className="uses" key={i}>
        {b.cards.map((c) => (
          <div className="use" key={c.h}>
            <h3>{c.h}</h3>
            <p><RichText text={c.p} /></p>
          </div>
        ))}
      </div>
    );
  return p ? <div key={i}>{renderWidget(b.widget, p)}</div> : null;
}

export default function PageView({ page, home = false }: { page: PageContent; home?: boolean }) {
  const path = pagePath(page);
  const related = toolLinks(page.related.hrefs);
  const ld: object[] = [
    appLd(page.h1, path, page.description, lastModified(sourceFile(page))),
    faqLd(page.faq),
    breadcrumbLd(home ? [{ name: "Home", path: "/" }] : [{ name: "Home", path: "/" }, { name: page.crumb, path }]),
  ];
  if (home) ld.push(orgLd(), websiteLd());

  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          {!home && <Breadcrumb current={page.crumb} />}
          <section className="hero" aria-labelledby="h1">
            <h1 id="h1">{page.h1}</h1>
            <p className="lead"><RichText text={page.intro} /></p>
            <Updated file={sourceFile(page)} />
            <h2 className="tool-h">{page.stylesHeading}</h2>
            <Generator
              styles={page.tool.styles}
              sample={page.tool.sample}
              placeholder={page.tool.placeholder}
              presets={page.tool.presets}
              limit={page.tool.limit}
              readQuery={home}
            />
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>{page.howTo.heading}</h2>
            <ol className="steps">
              {page.howTo.steps.map(([t, d]) => (
                <li className="step" key={t}>
                  <strong>{t}</strong>
                  <p><RichText text={d} /></p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {page.sections.map((s) => (
          <section className="section" key={s.h2}>
            <div className="container">
              <h2>{s.h2}</h2>
              {s.blocks.map((b, i) => renderBlock(b, i, page))}
            </div>
          </section>
        ))}

        {page.built && (
          <section className="section">
            <div className="container">
              <h2>How we built this style</h2>
              <p className="note"><RichText text={page.built} /></p>
            </div>
          </section>
        )}

        <section className="section">
          <div className="container">
            <h2>{page.related.heading}</h2>
            <ul className="tool-links">
              {related.map((t) => (
                <li key={t.href}>
                  <Link href={t.href}>
                    <strong>{t.label}</strong>
                    <span>{t.blurb}</span>
                  </Link>
                </li>
              ))}
            </ul>
            {!home && (
              <p>
                Need every style in one place? Go back to the{" "}
                <Link href="/">Old English font generator</Link>.
              </p>
            )}
          </div>
        </section>

        <Faq items={page.faq} />
      </main>
      <SiteFooter />
      <JsonLd data={ld} />
    </>
  );
}
