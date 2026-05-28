import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Generator from "@/components/Generator";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { getPage } from "@/lib/pages";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

type Params = { slug: string };

type SpanishPage = {
  label: string;
  h1: string;
  lead: string;
  title: string;
  description: string;
  keyword: string;
  resultsTitle: string;
  about: { heading: string; body: string }[];
  faq: { q: string; a: string }[];
};

const SLUGS = ["cursive", "fancy", "bold", "instagram"] as const;

const SPANISH: Record<string, SpanishPage> = {
  cursive: {
    label: "Letra Cursiva",
    h1: "Generador de Letra Cursiva",
    lead:
      "Convierte lo que escribas en letra cursiva y manuscrita de trazos suaves. Copia el estilo que más te guste y pégalo en tu biografía, leyendas o mensajes — sin instalar nada ni registrarte.",
    title: "Generador de Letra Cursiva – Copiar y Pegar Texto Cursivo",
    description:
      "Convierte texto normal en letra cursiva y manuscrita con Unicode. Gratis, al instante, y funciona en Instagram, TikTok, Discord y más.",
    keyword: "generador de letra cursiva",
    resultsTitle: "Estilos de letra cursiva",
    about: [
      {
        heading: "¿Qué es una letra cursiva?",
        body: "La letra cursiva imita la escritura a mano, con trazos fluidos y enlazados como los de una pluma. El estándar Unicode incluye varios bloques de caracteres con forma de cursiva, y eso es justo lo que ves aquí: tus letras transformadas una a una.",
      },
      {
        heading: "¿Dónde puedo usar la letra cursiva?",
        body: "En cualquier lugar que admita texto plano: biografías y leyendas de Instagram, nombres de usuario y comentarios de TikTok, mensajes de Discord, X, WhatsApp y la mayoría de apps de mensajería. Algunas plataformas filtran caracteres poco comunes en los nombres de usuario; si pasa, prueba otra variante.",
      },
    ],
    faq: [
      {
        q: "¿Es realmente una fuente o solo texto?",
        a: "Es texto. No cambia la tipografía de tu dispositivo: sustituimos cada letra por un carácter Unicode parecido, así que el resultado se pega en cualquier sitio.",
      },
      {
        q: "¿Puedo usar la cursiva en mi nombre de Instagram?",
        a: "Sí — las biografías admiten todo el rango Unicode. El campo del nombre a veces filtra letras inusuales, así que pruébalo antes de guardarlo.",
      },
    ],
  },
  fancy: {
    label: "Letras Bonitas",
    h1: "Generador de Letras Bonitas y Elegantes",
    lead:
      "Escribe una vez y copia el estilo que encaje con tu vibra — caligráfico, gótico, con contorno o vintage. Letras bonitas y elegantes listas para copiar y pegar.",
    title: "Generador de Letras Bonitas – Texto Elegante y Estético",
    description:
      "Letras bonitas, elegantes y estéticas en Unicode. Estilos cursivos, góticos, con contorno y decorativos para copiar y pegar.",
    keyword: "letras bonitas para copiar y pegar",
    resultsTitle: "Estilos de letras bonitas",
    about: [
      {
        heading: "Cómo elegir el estilo elegante adecuado",
        body: "Los estilos de tipo script e itálica se leen cálidos y personales. Las letras fraktur y con contorno transmiten algo más formal o ceremonial. Elige según el tono de lo que vas a publicar.",
      },
      {
        heading: "Combina sin perder legibilidad",
        body: "Las letras bonitas lucen más cuando las usas con intención: aplica un estilo decorativo a una palabra clave y deja el resto en texto normal. Así tu mensaje sigue siendo fácil de leer de un vistazo.",
      },
    ],
    faq: [
      {
        q: "¿Puedo usar letras elegantes para invitaciones de boda?",
        a: "Para vistas previas digitales, sí. Para invitaciones impresas, pídele a tu diseñador una tipografía real — los caracteres Unicode no se imprimen tan nítidos como las fuentes vectoriales.",
      },
      {
        q: "¿Por qué algunas letras se ven como cuadros vacíos?",
        a: "El dispositivo de quien lo ve no tiene una fuente que cubra esos caracteres. Prueba con otro estilo y debería mostrarse correctamente.",
      },
    ],
  },
  bold: {
    label: "Letras en Negrita",
    h1: "Generador de Letras en Negrita",
    lead:
      "Escribe tu mensaje y copia una versión en negrita que sobrevive al copiar y pegar. Úsala donde no haya formato de texto enriquecido, como Instagram, Facebook o el chat.",
    title: "Generador de Letras en Negrita – Negritas para Copiar y Pegar",
    description:
      "Pon cualquier texto en negrita con caracteres Unicode. Funciona en Instagram, Discord, Facebook y donde no se admite el formato en negrita.",
    keyword: "letras en negrita para facebook",
    resultsTitle: "Estilos de letras en negrita",
    about: [
      {
        heading: "Negrita con Unicode vs. negrita con formato",
        body: "Editores como Word o Google Docs ponen el texto en negrita cambiando el grosor de la fuente. Las plataformas sin esa opción (Instagram, la mayoría de los chats) no lo permiten — salvo que uses caracteres Unicode que ya vienen en negrita de fábrica.",
      },
      {
        heading: "Negritas para Facebook y redes",
        body: "Facebook, Instagram y X respetan el Unicode en publicaciones y comentarios, así que puedes destacar una frase en negrita sin recurrir a ninguna app extra. Resérvalo para títulos y palabras clave para que no canse a la vista.",
      },
    ],
    faq: [
      {
        q: "¿Funciona la negrita Unicode en Discord?",
        a: "Sí, aunque Discord también admite markdown — encierra el texto entre **dos asteriscos** para una negrita nativa que los lectores de pantalla manejan mejor.",
      },
      {
        q: "¿Los lectores de pantalla leen bien la negrita Unicode?",
        a: "De forma irregular. Algunos anuncian cada carácter con su nombre completo en Unicode, lo cual no ayuda. Deja la información importante en texto normal.",
      },
    ],
  },
  instagram: {
    label: "Letras para Instagram",
    h1: "Generador de Letras para Instagram",
    lead:
      "Elige una fuente, cópiala y pégala directamente en tu biografía, leyenda o comentario de Instagram. Todos los estilos son Unicode, así que Instagram los muestra bien en web y móvil.",
    title: "Generador de Letras para Instagram – Fuentes para Bio y Leyendas",
    description:
      "Genera fuentes para biografías, leyendas y nombres de Instagram. Estilos cursivos, en negrita, góticos y estéticos en Unicode — copia y pega al instante.",
    keyword: "letras para instagram",
    resultsTitle: "Estilos para Instagram",
    about: [
      {
        heading: "¿Qué fuentes funcionan en la biografía de Instagram?",
        body: "Casi todos los estilos de abajo se muestran bien en biografías y leyendas. Los nombres de usuario también aceptan Unicode, pero el filtro automático de Instagram a veces oculta cuentas con nombres que parecen spam — usa estilos limpios para tu nombre.",
      },
      {
        heading: "Consejos para texto listo para Instagram",
        body: "Mezcla un estilo llamativo con letras normales para que tu biografía siga siendo legible de un vistazo. Combínalo con saltos de línea para conseguir una composición más ordenada.",
      },
    ],
    faq: [
      {
        q: "¿Las fuentes elegantes perjudican mi alcance en Instagram?",
        a: "En las leyendas, puede. La búsqueda y la accesibilidad de Instagram prefieren el texto plano, así que abusar de la estilización en las leyendas reduce la visibilidad. Las biografías son más seguras.",
      },
      {
        q: "¿Los lectores de pantalla pueden leer estos caracteres?",
        a: "Normalmente los leen letra por letra o los omiten. Si la accesibilidad te importa, deja la información clave en caracteres normales.",
      },
    ],
  },
};

export async function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const sp = SPANISH[slug];
  if (!sp) return {};
  const url = `${SITE_URL}/es/font-generator/${slug}`;
  return {
    title: sp.title,
    description: sp.description,
    keywords: [sp.keyword],
    alternates: {
      canonical: url,
      languages: {
        "en-US": `${SITE_URL}/font-generator/${slug}`,
        "es-ES": url,
      },
    },
    openGraph: {
      title: sp.title,
      description: sp.description,
      url,
      type: "website",
      locale: "es_ES",
    },
  };
}

export default async function PageES({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const sp = SPANISH[slug];
  const page = getPage(slug);
  if (!sp || !page) notFound();

  const others = SLUGS.filter((s) => s !== slug);

  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Inicio</Link>
            <span className="sep">/</span>
            <Link href="/es/font-generator">Generador de letras</Link>
            <span className="sep">/</span>
            <span className="current">{sp.label}</span>
          </div>

          <section className="hero" id="generator">
            <h1>{sp.h1}</h1>
            <p className="lead">{sp.lead}</p>

            <Generator
              styles={page.styles}
              resultsTitle={sp.resultsTitle}
              initialVisible={8}
              defaultText="Escribe o pega tu texto aquí…"
            />
          </section>
        </div>

        {sp.about.map((b) => (
          <section className="section" key={b.heading}>
            <div className="container">
              <h2>{b.heading}</h2>
              <p>{b.body}</p>
            </div>
          </section>
        ))}

        <section className="section faq" id="faq">
          <div className="container">
            <h2>Preguntas frecuentes</h2>
            {sp.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="eyebrow">Sigue explorando</div>
            <h2>Más generadores</h2>
            <div className="cat-strip" style={{ marginTop: 16 }}>
              {others.map((s) => (
                <Link key={s} href={`/es/font-generator/${s}`} className="cat-pill">
                  {SPANISH[s].label}
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
