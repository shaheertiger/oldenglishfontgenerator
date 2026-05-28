import type { Metadata } from "next";
import Link from "next/link";
import Generator from "@/components/Generator";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Generador de Letras – Cursiva, Negrita, Bonitas y para Instagram",
  description:
    "Convierte tu texto a letras cursivas, en negrita, bonitas y para Instagram con un solo cuadro. Todo en Unicode, listo para copiar y pegar en cualquier app.",
  keywords: [
    "generador de letras",
    "letras cursivas",
    "letras en negrita",
    "letras bonitas",
    "letras para instagram",
  ],
  alternates: {
    canonical: `${SITE_URL}/es/font-generator`,
    languages: {
      "en-US": `${SITE_URL}/font-generator`,
      "es-ES": `${SITE_URL}/es/font-generator`,
    },
  },
  openGraph: {
    title: "Generador de Letras – Cursiva, Negrita, Bonitas y para Instagram",
    description:
      "Letras cursivas, en negrita, bonitas y para Instagram — copia y pega al instante.",
    url: `${SITE_URL}/es/font-generator`,
    type: "website",
    locale: "es_ES",
  },
};

const SHOWCASE = ["script", "bold-serif", "italic-serif", "fraktur", "small-caps", "bubble", "double-struck", "fullwidth"];

const FEATURES = [
  {
    slug: "cursive",
    title: "Letra Cursiva",
    desc: "Convierte tu texto en letra cursiva y manuscrita con trazos suaves y enlazados.",
  },
  {
    slug: "fancy",
    title: "Letras Bonitas y Elegantes",
    desc: "Estilos decorativos, caligráficos y góticos para darle un toque especial a tu texto.",
  },
  {
    slug: "bold",
    title: "Letras en Negrita",
    desc: "Texto en negrita que se mantiene al copiar y pegar, incluso donde no hay formato.",
  },
  {
    slug: "instagram",
    title: "Letras para Instagram",
    desc: "Fuentes ideales para tu biografía, leyendas y comentarios de Instagram.",
  },
];

export default function FontGeneratorIndexES() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Inicio</Link>
            <span className="sep">/</span>
            <span className="current">Generador de letras</span>
          </div>

          <section className="hero" id="generator">
            <h1>Generador de Letras</h1>
            <p className="lead">
              Un solo cuadro, todos los estilos. Explora letras cursivas,
              góticas, en negrita, de burbuja y mucho más — todo generado como
              Unicode que puedes copiar y pegar en cualquier aplicación.
            </p>

            <Generator
              styles={SHOWCASE}
              defaultText="Escribe o pega tu texto aquí…"
              resultsTitle="Estilos de letras"
              initialVisible={8}
            />

            <div className="lang-switcher" style={{ marginTop: 24 }}>
              <Link href="/font-generator">EN</Link>
              <Link href="/es/font-generator" className="active">ES</Link>
            </div>
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>Todos los generadores de letras</h2>
            <p>Páginas dedicadas a los estilos más buscados:</p>
            <div className="features" style={{ marginTop: 20 }}>
              {FEATURES.map((f) => (
                <Link
                  key={f.slug}
                  href={`/es/font-generator/${f.slug}`}
                  className="feature"
                  style={{ textDecoration: "none" }}
                >
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
