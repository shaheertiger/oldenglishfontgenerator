import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { PAGES } from "@/lib/pages";
import { POSTS } from "@/lib/blog";
import { SYMBOL_CATEGORIES } from "@/lib/symbols";
import { NAME_CATEGORIES } from "@/lib/names";
import { EMOTICON_CATEGORIES } from "@/lib/emoticons";

export const metadata: Metadata = {
  title: "Sitemap – All Font Generators",
  description:
    "Every page on oldenglishfontgenerator.com — font generators, ASCII tools, and more.",
  alternates: { canonical: "https://www.oldenglishfontgenerator.com/sitemap" },
};

const LETTERS = "abcdefghijklmnopqrstuvwxyz0123456789".split("");

export default function SitemapPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero container">
          <h1>Sitemap</h1>
          <p>Every page on the site, one click away.</p>
        </section>

        <section className="section">
          <div className="container">
            <h2>Main</h2>
            <ul className="sitemap-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/es">Spanish (Español)</Link></li>
              <li><Link href="/font-generator">Font Generator</Link></li>
              <li><Link href="/es/font-generator">Spanish Font Generator (Generador de letras)</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Tools</h2>
            <ul className="sitemap-list">
              <li><Link href="/auto-font-styler">Auto Font Styler</Link></li>
              <li><Link href="/font-mixer">Font Mixer</Link></li>
              <li><Link href="/username-generator">Username Generator</Link></li>
              <li><Link href="/name-generator">Name Generator</Link></li>
              <li><Link href="/emoticons">Emoticons (Kaomoji)</Link></li>
              <li><Link href="/headcanon-generator">Headcanon Generator</Link></li>
              <li><Link href="/story-generator">Story Generator</Link></li>
              <li><Link href="/uuid-generator">UUID Generator</Link></li>
              <li><Link href="/ascii-generator">ASCII Generator</Link></li>
              <li><Link href="/image-to-ascii">Image to ASCII</Link></li>
              <li><Link href="/case-converter">Case Converter</Link></li>
              <li><Link href="/pig-latin-translator">Pig Latin Translator</Link></li>
              <li><Link href="/subscript-generator">Subscript &amp; Superscript Generator</Link></li>
              <li><Link href="/binary-code-translator">Binary Code Translator</Link></li>
              <li><Link href="/stacked-text-generator">Stacked Text Generator</Link></li>
              <li><Link href="/invisible-text-generator">Invisible Text Generator</Link></li>
              <li><Link href="/morse-code-translator">Morse Code Translator</Link></li>
              <li><Link href="/medieval-translator">Medieval English Translator</Link></li>
              <li><Link href="/runic-translator">Runic Translator (Elder Futhark)</Link></li>
              <li><Link href="/hieroglyphics-translator">Hieroglyphics Translator</Link></li>
              <li><Link href="/cuneiform-translator">Cuneiform Translator</Link></li>
              <li><Link href="/pirate-translator">Pirate Translator</Link></li>
              <li><Link href="/roman-numeral-converter">Roman Numeral Converter</Link></li>
              <li><Link href="/favorites">★ Favorites</Link></li>
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Aesthetic &amp; reference</h2>
            <ul className="sitemap-list">
              <li><Link href="/preppy">Preppy Fonts</Link></li>
              <li><Link href="/coquette">Coquette Fonts</Link></li>
              <li><Link href="/different-fonts">Letters in Different Fonts</Link></li>
              <li><Link href="/symbols">Cool Symbols</Link></li>
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Font generators</h2>
            <ul className="sitemap-list">
              {PAGES.map((p) => (
                <li key={p.slug}>
                  <Link href={`/font-generator/${p.slug}`}>{p.h1}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Symbols by category</h2>
            <ul className="sitemap-list">
              {SYMBOL_CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/symbols/${c.slug}`}>{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Emoticons (kaomoji)</h2>
            <ul className="sitemap-list">
              {EMOTICON_CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/emoticons/${c.slug}`}>{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Name generators</h2>
            <ul className="sitemap-list">
              {NAME_CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/name-generator/${c.slug}`}>{c.h1}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Spanish (Español)</h2>
            <ul className="sitemap-list">
              <li><Link href="/es">Inicio</Link></li>
              <li><Link href="/es/font-generator">Generador de letras</Link></li>
              <li><Link href="/es/font-generator/cursive">Letra cursiva</Link></li>
              <li><Link href="/es/font-generator/fancy">Letras bonitas</Link></li>
              <li><Link href="/es/font-generator/bold">Letras en negrita</Link></li>
              <li><Link href="/es/font-generator/instagram">Letras para Instagram</Link></li>
              <li><Link href="/es/cool-symbols/hearts">Símbolos de corazón</Link></li>
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Letters in different fonts</h2>
            <ul className="sitemap-list">
              {LETTERS.map((c) => (
                <li key={c}>
                  <Link href={`/different-fonts/${c}`}>{c.toUpperCase()}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {POSTS.length > 0 && (
          <section className="section">
            <div className="container">
              <h2>Blog posts</h2>
              <ul className="sitemap-list">
                {POSTS.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className="section">
          <div className="container">
            <h2>Machine-readable</h2>
            <p>
              For search engines and tooling: <a href="/sitemap.xml">/sitemap.xml</a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
