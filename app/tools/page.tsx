import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "All Tools – Old English Fonts, Text Converters & Generators",
  description:
    "Every tool in one place: Old English and gothic font generators, text converters, social media tools, ASCII art, medieval translators, and developer utilities.",
  keywords: ["font tools", "text tools", "text converter", "online tools"],
  alternates: { canonical: `${SITE_URL}/tools` },
  openGraph: {
    title: "All Tools – Old English Fonts, Text Converters & Generators",
    description:
      "Every tool in one place: font generators, text converters, social tools, ASCII art, medieval translators, and developer utilities.",
    url: `${SITE_URL}/tools`,
    type: "website",
  },
};

type Tool = { label: string; href: string; note: string };

const GROUPS: { title: string; intro: string; tools: Tool[] }[] = [
  {
    title: "Font Tools",
    intro: "Turn plain text into Old English, gothic, and dozens of other Unicode styles.",
    tools: [
      { label: "Old English Font Generator", href: "/font-generator/old-english", note: "Blackletter & gothic styles" },
      { label: "Gothic Font Generator", href: "/font-generator/gothic", note: "Dark, angular gothic text" },
      { label: "Blackletter Font Generator", href: "/font-generator/blackletter", note: "Textura & fraktur forms" },
      { label: "Fraktur Font Generator", href: "/font-generator/fraktur", note: "Ornate German blackletter" },
      { label: "Tattoo Font Generator", href: "/font-generator/tattoo", note: "Lettering mockups" },
      { label: "All Font Generators", href: "/font-generator", note: "Every style in one place" },
      { label: "Auto Font Styler", href: "/auto-font-styler", note: "Smart style suggestions" },
      { label: "Font Mixer", href: "/font-mixer", note: "Blend multiple styles" },
      { label: "Different Fonts (A–Z)", href: "/different-fonts", note: "Browse letter by letter" },
      { label: "Cool Symbols", href: "/symbols", note: "Copy-paste symbol library" },
    ],
  },
  {
    title: "Text Converters",
    intro: "Transform, encode, and reshape text for any purpose.",
    tools: [
      { label: "Case Converter", href: "/case-converter", note: "Upper, lower, title & more" },
      { label: "Pig Latin Translator", href: "/pig-latin-translator", note: "English ↔ Pig Latin" },
      { label: "Subscript & Superscript", href: "/subscript-generator", note: "Tiny raised & lowered text" },
      { label: "Binary Code Translator", href: "/binary-code-translator", note: "Text ↔ binary" },
      { label: "Morse Code Translator", href: "/morse-code-translator", note: "Text ↔ Morse" },
      { label: "Invisible Text Generator", href: "/invisible-text-generator", note: "Blank Unicode characters" },
      { label: "Stacked Text Generator", href: "/stacked-text-generator", note: "Layer text vertically" },
    ],
  },
  {
    title: "Social Media Tools",
    intro: "Names, bios, and captions that stand out on every platform.",
    tools: [
      { label: "Instagram Fonts", href: "/font-generator/instagram", note: "Bios, captions & stories" },
      { label: "TikTok Fonts", href: "/font-generator/tiktok", note: "Usernames & captions" },
      { label: "Discord Fonts", href: "/font-generator/discord", note: "Names, status & messages" },
      { label: "Facebook Fonts", href: "/font-generator/facebook", note: "Posts & comments" },
      { label: "Username Generator", href: "/username-generator", note: "Stylish handle ideas" },
      { label: "Name Generator", href: "/name-generator", note: "Character & display names" },
      { label: "Emoticons (Kaomoji)", href: "/emoticons", note: "Copy-paste kaomoji" },
    ],
  },
  {
    title: "ASCII Tools",
    intro: "Turn text and images into ASCII art.",
    tools: [
      { label: "ASCII Generator", href: "/ascii-generator", note: "Text to ASCII art" },
      { label: "Image to ASCII", href: "/image-to-ascii", note: "Photos to ASCII" },
    ],
  },
  {
    title: "Fantasy & Medieval Tools",
    intro: "Lettering and translators for old, mythic, and fantasy worlds.",
    tools: [
      { label: "Medieval Font Generator", href: "/font-generator/medieval", note: "Manuscript-style text" },
      { label: "Medieval English Translator", href: "/medieval-translator", note: "Modern ↔ Old-style English" },
      { label: "Runic Translator", href: "/runic-translator", note: "English to runes" },
      { label: "Hieroglyphics Translator", href: "/hieroglyphics-translator", note: "English to hieroglyphs" },
      { label: "Cuneiform Translator", href: "/cuneiform-translator", note: "English to cuneiform" },
      { label: "Pirate Translator", href: "/pirate-translator", note: "Talk like a pirate" },
      { label: "Headcanon Generator", href: "/headcanon-generator", note: "Character headcanons" },
      { label: "Story Generator", href: "/story-generator", note: "Quick story prompts" },
    ],
  },
  {
    title: "Developer Tools",
    intro: "Small utilities for everyday dev tasks.",
    tools: [
      { label: "UUID Generator", href: "/uuid-generator", note: "Random unique IDs" },
      { label: "Roman Numeral Converter", href: "/roman-numeral-converter", note: "Numbers ↔ Roman numerals" },
    ],
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Tools", item: `${SITE_URL}/tools` },
  ],
};

export default function ToolsHub() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Tools</span>
          </div>

          <section className="hero">
            <h1>All Tools</h1>
            <p className="lead">
              Every generator, converter, and translator on the site — grouped
              so you can find the right tool fast. All free, all browser-based,
              no sign-up required.
            </p>
          </section>
        </div>

        {GROUPS.map((group) => (
          <section className="section" key={group.title}>
            <div className="container">
              <h2>{group.title}</h2>
              <p>{group.intro}</p>
              <div className="features" style={{ marginTop: 20 }}>
                {group.tools.map((t) => (
                  <Link key={t.href} href={t.href} className="feature" style={{ textDecoration: "none" }}>
                    <h3>{t.label}</h3>
                    <p>{t.note}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
