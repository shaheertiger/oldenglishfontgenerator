import type { Metadata } from "next";
import Link from "next/link";
import Generator from "@/components/Generator";
import UsecaseArt from "@/components/UsecaseArt";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import JsonLd from "@/components/JsonLd";
import { faqLd } from "@/lib/seo";
import { OLD_ENGLISH_FAMILY } from "@/lib/fonts";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Generador de Letras Old English – 60+ Estilos Góticos y Blackletter",
  description:
    "Convierte cualquier texto a más de 60 estilos Old English, góticos, blackletter, medievales y fraktur. Copia y pega en Instagram, TikTok, Discord, YouTube, biografías y nombres de usuario.",
  keywords: [
    "letras old english",
    "generador de letras goticas",
    "blackletter",
    "fuentes medievales",
    "fraktur generador",
    "letras para instagram",
  ],
  alternates: {
    canonical: `${SITE_URL}/es`,
    languages: {
      "en-US": `${SITE_URL}/`,
      "es-ES": `${SITE_URL}/es`,
    },
  },
  openGraph: {
    title: "Generador de Letras Old English – Estilos Góticos y Blackletter",
    description: "Texto gótico, blackletter, medieval y fraktur — copia y pega.",
    url: `${SITE_URL}/es`,
    type: "website",
    locale: "es_ES",
  },
};

const PILLS = [
  { label: "Cursiva", href: "/font-generator/cursive" },
  { label: "Negrita", href: "/font-generator/bold" },
  { label: "Cursiva inclinada", href: "/font-generator/italic" },
  { label: "Elegante", href: "/font-generator/fancy" },
  { label: "Burbuja", href: "/font-generator/bubble" },
  { label: "Versalitas", href: "/font-generator/small-caps" },
  { label: "Glitch", href: "/font-generator/glitch" },
  { label: "Zalgo", href: "/font-generator/zalgo" },
  { label: "Al revés", href: "/font-generator/upside-down" },
  { label: "Instagram", href: "/font-generator/instagram" },
  { label: "Discord", href: "/font-generator/discord" },
  { label: "TikTok", href: "/font-generator/tiktok" },
];

const USE_CASES = [
  { art: "instagram" as const, h: "Biografías y leyendas de Instagram", p: "Coloca texto blackletter en tu biografía para destacar al instante. También funciona en leyendas y comentarios." },
  { art: "discord" as const, h: "Nombres y estado en Discord", p: "Destaca en cualquier servidor. El Unicode gótico se ve igual en el escritorio, la web y el móvil." },
  { art: "tattoo" as const, h: "Pruebas de tatuajes", p: "Visualiza cómo se ve un nombre o frase en docenas de variantes blackletter antes de hablar con el artista." },
  { art: "logo" as const, h: "Texto de logos y marcas", p: "Diseña wordmarks góticos antes de comprometerte con una tipografía vectorial." },
  { art: "gaming" as const, h: "Perfiles gamer", p: "Steam, Xbox y PSN aceptan la mayoría de rangos blackletter en nombres visibles." },
  { art: "youtube" as const, h: "Títulos de YouTube", p: "Usa texto Old English en títulos de vídeos, tarjetas finales y descripciones de canal." },
  { art: "tiktok" as const, h: "Leyendas de TikTok", p: "Llama la atención en la página Para Ti sin cambiar el texto del vídeo." },
  { art: "invite" as const, h: "Bodas e invitaciones", p: "Prepara títulos de eventos en escrituras medievales antes de pasarlos al diseñador." },
];

const FAQ = [
  {
    q: "¿Qué es una fuente Old English?",
    a: "Old English es el nombre coloquial de la familia tipográfica blackletter — escrituras altas, angulares y ornamentadas que usaron los escribas medievales europeos y, más tarde, los primeros impresores. El estilo sobrevive en diplomas, cabeceras de periódicos, tatuajes y logos porque se lee como formal o ceremonial.",
  },
  {
    q: "¿Es realmente una fuente o solo texto?",
    a: "Es texto. El generador sustituye cada letra por un carácter Unicode que se parece a Old English. Como el resultado sigue siendo texto plano, se pega en aplicaciones que no permiten cambiar tipografías.",
  },
  {
    q: "¿Cómo añado letras Old English a mi biografía de Instagram?",
    a: "Escribe tu texto en el generador, toca el estilo que te guste para copiarlo, y luego en la app de Instagram ve a tu perfil → Editar perfil → Biografía. Pega y guarda.",
  },
  {
    q: "¿Funciona en Discord?",
    a: "Sí. Discord acepta Unicode en mensajes, apodos del servidor, estado personalizado y nombres de canal. Para negrita o cursiva dentro de un mensaje también puedes usar el markdown de Discord (**negrita**, *cursiva*).",
  },
  {
    q: "Old English, gótica, blackletter — ¿qué diferencia hay?",
    a: "Los tres nombres describen la misma familia amplia. Blackletter es el término tipográfico; gótica es la palabra cotidiana; Old English es como la llaman la mayoría de los rotulistas y tatuadores. Son hermanos estilísticos, no sistemas de escritura diferentes.",
  },
  {
    q: "¿Puedo usarlo para un tatuaje?",
    a: "Para previsualizar, sí — prueba tu frase en todos los estilos. Para el tatuaje real, tu artista necesitará una fuente vectorial (TTF/OTF) para que los trazos se mantengan nítidos a cualquier tamaño. Usa el generador para decidir qué estilo quieres.",
  },
  {
    q: "¿Por qué algunos caracteres se ven como cuadros vacíos?",
    a: "Tu dispositivo no tiene una fuente instalada que cubra esos puntos de código Unicode. iOS y Android modernos cubren la mayoría de los rangos; algunos Android antiguos y fuentes de Windows muestran cuadros.",
  },
  {
    q: "¿Es gratis de verdad?",
    a: "Sí. Sin registro, sin marca de agua, sin límites de uso. Todo se ejecuta en tu navegador.",
  },
];

export default function HomeES() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <section className="hero" id="generator">
            <h1>Generador de Letras Old English</h1>
            <p className="lead">
              Convierte cualquier texto en más de 60 estilos Old English,
              góticos, blackletter y medievales. Copia y pega en Instagram,
              TikTok, Discord, YouTube, biografías, nombres de usuario y más.
            </p>

            <Generator
              styles={OLD_ENGLISH_FAMILY}
              pills={PILLS}
              defaultText="Escribe o pega tu texto aquí…"
              resultsTitle="Estilos Old English"
              initialVisible={8}
            />

            <div className="lang-switcher" style={{ marginTop: 24 }}>
              <Link href="/">EN</Link>
              <Link href="/es" className="active">ES</Link>
            </div>

            <div className="ad-slot" aria-hidden="true">Publicidad</div>
          </section>
        </div>

        <section className="section" id="how">
          <div className="container">
            <div className="eyebrow">Cómo usar el generador</div>
            <h2>Cómo copiar y pegar fuentes Old English</h2>
            <div className="steps">
              <div className="step">
                <div className="num">01</div>
                <h3>Escribe tu texto</h3>
                <p>Introduce un nombre, frase, leyenda o biografía en el cuadro de arriba. La vista previa se actualiza al escribir.</p>
              </div>
              <div className="step">
                <div className="num">02</div>
                <h3>Elige un estilo</h3>
                <p>Recorre más de 60 variantes blackletter, góticas y medievales hasta encontrar la que encaja con el tono.</p>
              </div>
              <div className="step">
                <div className="num">03</div>
                <h3>Toca para copiar</h3>
                <p>Toca la fila para copiar. Pega donde se admita texto plano — Instagram, TikTok, Discord, X, donde sea.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="use-cases">
          <div className="container">
            <div className="eyebrow">Dónde funciona</div>
            <h2>Casos de uso para texto Old English</h2>
            <p>El mismo resultado blackletter encaja en una docena de contextos. Los más comunes:</p>
            <div className="usecases">
              {USE_CASES.map((u) => (
                <div className="usecase" key={u.h}>
                  <UsecaseArt name={u.art} />
                  <h3>{u.h}</h3>
                  <p>{u.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <div className="eyebrow">Contexto</div>
            <h2>¿Qué es una fuente Old English?</h2>
            <p>
              Old English se refiere a las escrituras blackletter densas y
              angulares que los escribas medievales usaron en toda Europa
              entre los siglos XII y XVII. Cuando Gutenberg fundió los tipos
              para los primeros libros impresos, basó sus formas de letra en
              blackletter — por eso el estilo sigue leyéndose como
              &laquo;antiguo&raquo; hoy. La estética sobrevive en cabeceras de
              periódico, diplomas, bordes de certificados, tatuajes, portadas
              de discos metal y logos de marcas de lujo.
            </p>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="container">
            <h2>Preguntas frecuentes</h2>
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
      <JsonLd data={faqLd(FAQ)} />
    </>
  );
}
