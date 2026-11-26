import type { PageContent } from "./types";

// Restaurada en noviembre de 2026 en /es/font-generator (Bing la posicionaba
// antes del commit 00a2b7f). Índice en español de estilos de texto.
const page: PageContent = {
  slug: "es/font-generator",
  file: "es-font-generator",
  lang: "es",
  title: "Letras para Copiar y Pegar – 12 Estilos Bonitos Gratis",
  description:
    "Letras para copiar y pegar en 12 estilos: cursiva, negrita, burbuja, máquina de escribir, gótica y más. Escribe una vez, toca Copiar y pega. Gratis.",
  h1: "Letras para Copiar y Pegar",
  crumb: "Letras para copiar y pegar",
  intro:
    "Las letras para copiar y pegar son caracteres Unicode con forma de cursiva, negrita, burbuja u otros estilos, y en esta página conviertes tu texto en 12 de ellos de una sola vez. Es la forma más rápida de conseguir letras bonitas sin instalar ningún programa: escribes, comparas los tipos de letra uno debajo de otro y copias el que te guste. Si lo que buscas es solo la letra gótica, ve directo al [generador de letras góticas](/es).",
  tool: {
    styles: ["u-script", "bold-script", "u-bold-serif", "u-italic-serif", "u-small-caps", "u-bubble", "u-fullwidth", "u-strikethrough", "fraktur", "typewriter", "u-weird", "u-japanese-style"],
    sample: "Letras bonitas",
    placeholder: "Escribe aquí lo que quieras convertir…",
    presets: ["Letras bonitas", "English", "Buenos días", "Mi perfil"],
  },
  stylesHeading: "12 tipos de letra",
  howTo: {
    heading: "Tres pasos",
    steps: [
      ["Escribe una vez", "El texto aparece en los 12 estilos a la vez, así no tienes que probar uno por uno."],
      ["Compara", "Mira cuál se lee mejor a tamaño real. La cursiva fina luce en frases cortas; la negrita aguanta textos más largos."],
      ["Copia y pega", "Toca Copiar y pégalo. Es texto, no una imagen, así que se puede editar después."],
    ],
  },
  sections: [
    {
      h2: "Alfabetos para copiar letra por letra",
      blocks: [
        { p: "Cada casilla copia un solo carácter. Útil para una inicial decorada o para completar una palabra a mano." },
        { chart: { styles: ["u-script", "u-bubble", "u-bold-serif"], sets: ["upper", "lower"] } },
      ],
    },
    {
      h2: "1. ¿Cómo escribo \"English\" en letras bonitas?",
      blocks: [
        { p: "Escribe English en el cuadro (hay un botón con la palabra lista) y verás la palabra en cursiva, burbuja, máquina de escribir y el resto de estilos. Es una búsqueda muy común porque mucha gente quiere el nombre de la asignatura en la portada de un cuaderno o un trabajo. Para una portada impresa, la cursiva o la negrita con serifa son las más legibles; la burbuja y la de ancho completo quedan mejor en pantalla." },
      ],
    },
    {
      h2: "Más páginas en español y en inglés",
      blocks: [
        {
          ul: [
            "[Letras góticas Old English](/es): 16 estilos blackletter, fraktur y de tatuaje.",
            "[Letra Old English para copiar y pegar](/es/font-generator/old-english): el estilo clásico de rótulos y diplomas, con consejos para tatuajes.",
            "[Símbolos de corazón para copiar y pegar](/es/cool-symbols/hearts): ♡ ♥ ❤ y muchos más, con su nombre en español.",
            "En inglés: [handwriting font generator](/font-generator/handwriting) para letra manuscrita, [fancy letters](/font-generator/fancy-letters) para letras decorativas e [italic font generator](/font-generator/italic) para cursiva fina.",
          ],
        },
      ],
    },
  ],
  built:
    "Los estilos usan bloques de Unicode pensados en origen para fórmulas matemáticas (Mathematical Alphanumeric Symbols, U+1D400–U+1D7FF), letras en círculo de Enclosed Alphanumerics, caracteres de ancho completo (U+FF01–U+FF5E) y la raya combinable U+0336 para el tachado.",
  related: {
    heading: "Otras herramientas",
    hrefs: ["/es", "/es/font-generator/old-english", "/es/cool-symbols/hearts", "/font-generator/fancy-letters", "/font-generator/handwriting", "/different-fonts"],
  },
  faq: [
    { q: "¿Cómo se copian y pegan letras bonitas?", a: "Escribe tu texto, toca Copiar en el estilo que prefieras y pégalo donde quieras. No hace falta instalar nada." },
    { q: "¿Estas letras son una fuente?", a: "No exactamente. Son caracteres Unicode distintos de las letras normales, por eso conservan su forma al pegarlos." },
    { q: "¿Por qué la ñ y los acentos no cambian en algunos estilos?", a: "Varios estilos solo tienen versiones de la A a la Z sin tilde, así que la ñ y las vocales acentuadas se quedan como están." },
    { q: "¿Qué tipo de letra es mejor para un título?", a: "Para algo que se tiene que leer rápido, la negrita con serifa o la cursiva. Los estilos raros, como el japonés o el de letras extrañas, sirven más como adorno." },
    { q: "¿Puedo usar estas letras en un trabajo de clase?", a: "En un título, sí. En el cuerpo del texto conviene usar una fuente normal del procesador de textos, porque estos caracteres no se corrigen ni se buscan bien." },
    { q: "¿Por qué a otra persona le salen cuadritos?", a: "Su dispositivo no tiene una fuente con esos caracteres. Prueba un estilo más sencillo, como la negrita o la cursiva." },
    { q: "¿Cuesta algo?", a: "No. Es gratis, sin registro y funciona en el navegador." },
  ],
};

export default page;
