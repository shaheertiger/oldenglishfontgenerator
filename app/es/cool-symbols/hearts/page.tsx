import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import SymbolGrid from "@/components/SymbolGrid";
import { SYMBOL_BY_SLUG } from "@/lib/symbols";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

const heart = SYMBOL_BY_SLUG["heart"];

export const metadata: Metadata = {
  title: "Símbolos de Corazón – Copiar y Pegar ♥ ❤ ♡",
  description:
    "Símbolos y emojis de corazón para copiar y pegar — corazones rellenos, con contorno, decorados y de colores. Gratis y listos para cualquier app.",
  keywords: [
    "símbolos de corazón",
    "corazón para copiar y pegar",
    "símbolo corazón",
  ],
  alternates: {
    canonical: `${SITE_URL}/es/cool-symbols/hearts`,
    languages: {
      "en-US": `${SITE_URL}/symbols/heart`,
      "es-ES": `${SITE_URL}/es/cool-symbols/hearts`,
    },
  },
  openGraph: {
    title: "Símbolos de Corazón – Copiar y Pegar ♥ ❤ ♡",
    description:
      "Corazones rellenos, con contorno, decorados y de colores para copiar y pegar.",
    url: `${SITE_URL}/es/cool-symbols/hearts`,
    type: "website",
    locale: "es_ES",
  },
};

export default function HeartsSymbolsES() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Inicio</Link>
            <span className="sep">/</span>
            <Link href="/symbols">Símbolos</Link>
            <span className="sep">/</span>
            <span className="current">Corazones</span>
          </div>

          <section className="hero">
            <h1>Símbolos de Corazón para Copiar y Pegar</h1>
            <p className="lead">
              Corazones rellenos, con contorno, ornamentados y atravesados por
              una flecha. Toca cualquier casilla para copiarlo y pégalo donde
              quieras.
            </p>
            <SymbolGrid symbols={heart.symbols} />
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>Sobre los símbolos de corazón</h2>
            <p>
              Cada corazón de arriba es un carácter Unicode normal, así que se
              pega en biografías, leyendas, mensajes y documentos igual que
              cualquier otra letra. No hay que instalar nada ni descargar
              ninguna fuente — el propio carácter lleva su estilo.
            </p>
            <p style={{ marginTop: 16 }}>
              Haz clic en una casilla para copiar y pega donde se admita texto
              plano: Instagram, TikTok, Discord, X, WhatsApp, correo, Notion o
              Google Docs. Si un corazón aparece como un cuadro vacío en otro
              dispositivo, su fuente del sistema no cubre ese bloque Unicode;
              elige otra variante más compatible.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
