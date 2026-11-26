import type { PageContent } from "./types";

// Restaurada en noviembre de 2026 en /es/font-generator/old-english (Bing la
// posicionaba antes del commit 00a2b7f).
const page: PageContent = {
  slug: "es/font-generator/old-english",
  file: "es-font-generator-old-english",
  lang: "es",
  title: "Letra Old English para Copiar y Pegar – 12 Estilos",
  description:
    "Letra Old English para copiar y pegar: 12 estilos blackletter de rótulo, diploma y tatuaje. Escribe tu texto, elige uno y cópialo. Gratis.",
  h1: "Letra Old English para Copiar y Pegar",
  crumb: "Letra Old English",
  intro:
    "La letra Old English es la gótica de rótulo que se ve en diplomas, cabeceras de periódico y tatuajes, y aquí la tienes en 12 estilos para copiar y pegar a partir de lo que escribas. Quien busca tipos de letra Old English suele querer uno de dos resultados: un texto ya convertido para pegar en un perfil o un mensaje, o el nombre de una fuente para usar en el ordenador o llevar al tatuador. Esta página resuelve lo primero con el conversor y lo segundo en las preguntas de abajo.",
  tool: {
    styles: ["fraktur", "bold-fraktur", "fraktur-underline", "u-royal-gothic", "bold-fraktur-small-caps", "fraktur-plain-lower", "long-s", "wide", "u-old-english-spaced", "u-ye-olde", "monogram", "fraktur-outline-digits"],
    sample: "Old English",
    placeholder: "Escribe un nombre, un apellido o una fecha…",
    presets: ["Old English", "García", "Mi Vida Loca", "Gracias Madre"],
  },
  stylesHeading: "Letra Old English en 12 estilos",
  howTo: {
    heading: "Cómo convertir texto a letra Old English",
    steps: [
      ["Escribe el texto", "Nombres y frases cortas quedan mejor: la blackletter es densa y cuesta leerla en párrafos largos."],
      ["Elige el estilo", "Fraktur para un aire clásico, negrita para que se lea de lejos, versalitas si quieres algo más sobrio y monograma si solo necesitas las iniciales."],
      ["Copia el resultado", "Pulsa Copiar. Las mayúsculas góticas son difíciles de leer todas juntas, así que escribe solo la inicial en mayúscula."],
    ],
  },
  sections: [
    {
      h2: "Alfabeto Old English de la A a la Z",
      blocks: [
        { chart: { styles: ["fraktur", "bold-fraktur-small-caps"], sets: ["upper", "lower"] } },
      ],
    },
    {
      h2: "1. ¿Qué es la letra Old English Text MT?",
      blocks: [
        { p: "Es una fuente digital de estilo blackletter que muchos conocen porque venía con programas de oficina. Si la usas en un documento y luego lo abres en otro equipo que no la tiene, el texto cambia a otra fuente y \"no sale bien el formato\". Con el conversor de esta página no pasa, porque el resultado no depende de ninguna fuente instalada. En inglés tienes más detalles en la página de [Old English Text MT](/fonts/old-english-text-mt)." },
      ],
    },
    {
      h2: "2. ¿Qué estilo de letra Old English elijo para un tatuaje?",
      blocks: [
        { p: "Para nombres y apellidos, la fraktur negrita aguanta mejor el paso del tiempo en la piel porque sus trazos son más gruesos. En frases largas, una inicial gótica con el resto en minúscula es más legible que todo en mayúsculas. Usa esta página para elegir y comparar; el tatuador trabajará con una fuente vectorial. Para ver el diseño sobre la piel, el [tattoo font generator](/tattoo-font-generator) tiene vista previa (en inglés)." },
        { p: "¿Buscas una fuente parecida a Old English que sea gratuita? UnifrakturMaguntia y Pirata One son dos fuentes góticas con licencia libre que puedes buscar por su nombre en el catálogo de Google Fonts." },
      ],
    },
  ],
  built:
    "Todos los estilos parten de las letras Mathematical Fraktur y Mathematical Bold Fraktur de Unicode (U+1D504–U+1D59F) y de las mayúsculas ℭ ℌ ℑ ℜ ℨ del bloque Letterlike Symbols. El subrayado usa la marca combinable U+0332 y la s larga es ſ (U+017F).",
  related: {
    heading: "Sigue explorando",
    hrefs: ["/es", "/es/font-generator", "/font-generator/old-english", "/fonts/old-english-text-mt", "/tattoo-font-generator", "/old-english-alphabet"],
  },
  faq: [
    { q: "¿Cómo pongo mi texto en letra Old English?", a: "Escríbelo en el cuadro de arriba y copia el estilo que te guste. El cambio es instantáneo." },
    { q: "¿La letra Old English es lo mismo que la gótica?", a: "Sí, en la práctica. Old English es el nombre que se usa en inglés para la letra gótica o blackletter." },
    { q: "¿Tiene algo que ver con el inglés antiguo?", a: "No. El inglés antiguo, el idioma, se escribía con otra letra. El nombre Old English para esta tipografía es solo una costumbre." },
    { q: "¿Por qué a veces la tilde queda torcida?", a: "No existe una á gótica en Unicode: se dibuja la a gótica y se le añade la tilde encima, y cada fuente la coloca a su manera." },
    { q: "¿Puedo usarla en un documento de texto?", a: "Puedes pegarla, pero para documentos es mejor instalar una fuente gótica real: se imprime más nítida y se puede corregir." },
    { q: "¿Hay números en letra Old English?", a: "La letra gótica de Unicode no incluye números; el conversor usa cifras en negrita, que combinan bien." },
  ],
};

export default page;
