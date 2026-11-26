import type { PageContent } from "./types";

// Restaurada en noviembre de 2026 en /es/cool-symbols/hearts (Bing la
// posicionaba antes del commit 00a2b7f). Los códigos se calculan a partir de
// los propios caracteres.
const cp = (s: string) => [...s].map((c) => "U+" + c.codePointAt(0)!.toString(16).toUpperCase().padStart(4, "0")).join(" ");

// [símbolo, nombre en español, para qué se usa]
const TEXTO: [string, string, string][] = [
  ["♡", "Corazón blanco (de contorno)", "El palo de corazones de la baraja en versión hueca; delicado y muy usado en biografías"],
  ["♥", "Corazón negro relleno", "El palo de corazones relleno. Se ve como texto, en el color de la letra"],
  ["❤", "Corazón grueso", "Más grande que ♥; muchos sistemas lo pintan como el emoji rojo ❤️"],
  ["❥", "Corazón girado (viñeta)", "Inclinado hacia un lado; pensado como viñeta de lista"],
  ["❣", "Corazón con exclamación", "Un corazón sobre un punto, como un signo de exclamación"],
  ["❦", "Corazón floral (hedera)", "Hoja de hiedra de los impresores antiguos; separa párrafos"],
  ["❧", "Corazón floral girado", "Pareja de ☙; juntos enmarcan una frase"],
  ["☙", "Corazón floral girado al revés", "Abre la frase que ❧ cierra"],
  ["🎔", "Corazón con la punta a la izquierda", "Un corazón tumbado, poco común"],
  ["ღ", "Letra georgiana ghan", "No es un corazón: es una letra del alfabeto georgiano, pero se usa por su forma"],
];

const EMOJI: [string, string, string][] = [
  ["💕", "Dos corazones", "Cariño entre amigos o pareja"],
  ["💖", "Corazón brillante", "Ilusión, algo que te encanta"],
  ["💗", "Corazón creciente", "Un cariño que va a más"],
  ["💓", "Corazón latiendo", "Emoción, nervios de enamorado"],
  ["💞", "Corazones girando", "Amor correspondido"],
  ["💘", "Corazón atravesado por una flecha", "La flecha de Cupido: flechazo, enamorarse"],
  ["💝", "Corazón con lazo", "Un regalo, San Valentín"],
  ["💟", "Corazón decorativo", "Un corazón dentro de un recuadro"],
  ["💔", "Corazón roto", "Desamor, tristeza"],
  ["❤️‍🔥", "Corazón en llamas", "Pasión; es una combinación de ❤ y 🔥 unidos"],
  ["❤️‍🩹", "Corazón vendado", "Un corazón que se está curando"],
  ["💌", "Carta de amor", "Un sobre cerrado con un corazón"],
  ["🫶", "Manos en forma de corazón", "Gracias, cariño, apoyo"],
  ["🫀", "Corazón anatómico", "El órgano real; medicina, salud"],
];

const COLORES: [string, string][] = [
  ["🧡", "Naranja"], ["💛", "Amarillo"], ["💚", "Verde"], ["💙", "Azul"], ["💜", "Morado"],
  ["🖤", "Negro"], ["🤍", "Blanco"], ["🤎", "Marrón"], ["🩷", "Rosa"], ["🩵", "Celeste"], ["🩶", "Gris"],
];

const COMBOS: [string, string][] = [
  ["─── ♡ ───", "Separador con corazón en medio"],
  ["˚ʚ♡ɞ˚", "Corazón con alitas, estilo kawaii"],
  ["♡⃛", "Corazón con puntitos encima (marca combinable U+20DB)"],
  ["❥ ❥ ❥", "Fila de corazones girados como viñetas"],
  ["☙ te quiero ❧", "Frase enmarcada con corazones florales"],
  ["<3", "El corazón de teclado de siempre: menor que y un tres"],
];

const page: PageContent = {
  slug: "es/cool-symbols/hearts",
  file: "es-cool-symbols-hearts",
  lang: "es",
  title: "Símbolos de Corazón para Copiar y Pegar – 35 Corazones",
  description:
    "Símbolos de corazón para copiar y pegar: 35 corazones (♡ ♥ ❤ ❣ ღ 💕 y de colores) con su nombre en español y su código Unicode. Gratis.",
  h1: "Símbolos de Corazón para Copiar y Pegar",
  crumb: "Símbolos de corazón",
  intro:
    "Los símbolos de corazón son caracteres Unicode con forma de corazón, desde el sencillo ♡ hasta el emoji 💕, y aquí tienes 35 para copiar y pegar, cada uno con su nombre en español y su código. Si buscas un corazón para copiar que se vea como texto, sin color, usa los de la primera tabla (♡ ♥ ❦); si quieres un corazón de color, los emojis están en las tablas siguientes. Para escribir un nombre con corazones alrededor, ponlo en el cuadro y copia el resultado.",
  tool: {
    styles: ["deco-heart", "u-love-parens", "u-script", "bold-script", "script-spaced", "u-bubble", "u-cursive-underline", "u-japanese-style", "deco-stars", "deco-rose"],
    sample: "Te quiero",
    placeholder: "Escribe un nombre o una frase…",
    presets: ["Te quiero", "Mi amor", "Lucía", "Feliz San Valentín"],
  },
  stylesHeading: "Tu texto con corazones",
  howTo: {
    heading: "Cómo copiar un corazón",
    steps: [
      ["Busca el corazón", "Los de texto están arriba; los emojis, por tipo y por color, más abajo."],
      ["Selecciónalo", "Mantén pulsado o haz doble clic sobre el corazón de la primera columna y cópialo."],
      ["Pégalo", "Pégalo junto a tu texto. Deja un espacio entre el corazón y la palabra para que no se peguen."],
    ],
  },
  sections: [
    {
      h2: "Corazones de texto: ♡ ♥ ❤ ❣ ღ",
      blocks: [
        { p: "Estos corazones toman el color del texto, así que quedan sobrios y combinan con cualquier tipo de letra." },
        {
          table: {
            head: ["Corazón", "Nombre", "Código", "Uso"],
            glyphCols: [0],
            rows: TEXTO.map(([g, n, u]) => [g, n, cp(g), u]),
          },
        },
      ],
    },
    {
      h2: "Emojis de corazón y de colores",
      blocks: [
        {
          table: {
            head: ["Emoji", "Nombre", "Código", "Qué expresa"],
            glyphCols: [0],
            rows: EMOJI.map(([g, n, u]) => [g, n, cp(g), u]),
          },
        },
        {
          table: {
            head: ["Corazón de color", "Color", "Código"],
            glyphCols: [0],
            rows: COLORES.map(([g, c]) => [g, c, cp(g)]),
          },
        },
        { p: "El rosa 🩷, el celeste 🩵 y el gris 🩶 son de los más recientes (Emoji 15.0, de 2022), así que en dispositivos sin actualizar pueden verse como un cuadrito." },
      ],
    },
    {
      h2: "1. ¿Cómo hago un separador o un adorno con corazones?",
      blocks: [
        { p: "Combina un corazón de texto con rayas, alitas o paréntesis. Copia la combinación entera de la columna de la izquierda:" },
        {
          table: {
            head: ["Combinación", "Descripción"],
            glyphCols: [0],
            rows: COMBOS,
          },
        },
      ],
    },
  ],
  built:
    "Los corazones de texto vienen de los bloques Miscellaneous Symbols (♡ ♥ ☙) y Dingbats (❤ ❥ ❣ ❦ ❧); ღ es del alfabeto georgiano. Los emojis están en Miscellaneous Symbols and Pictographs, Supplemental Symbols and Pictographs y Symbols and Pictographs Extended-A; ❤️‍🔥 y ❤️‍🩹 son secuencias de varios caracteres unidos con U+200D.",
  related: {
    heading: "Más símbolos y letras",
    hrefs: ["/es", "/es/font-generator", "/symbols", "/coquette", "/font-generator/princess", "/happy-birthday-font"],
  },
  faq: [
    { q: "¿Cómo copio y pego un corazón?", a: "Selecciona el corazón en la tabla, cópialo y pégalo donde estés escribiendo. Cada casilla tiene un solo símbolo." },
    { q: "¿Cuál es el símbolo del corazón relleno negro?", a: "♥ (U+2665), el corazón de la baraja. Si quieres el emoji negro, es 🖤 (U+1F5A4)." },
    { q: "¿Cómo se hace un corazón con el teclado?", a: "Escribe <3. En Windows también puedes mantener Alt y teclear 3 en el teclado numérico para obtener ♥." },
    { q: "¿Por qué mi corazón ❤ sale rojo y a veces negro?", a: "U+2764 puede mostrarse como texto o como emoji. Seguido del selector U+FE0F (❤️) casi siempre aparece en rojo." },
    { q: "¿Qué significa el corazón atravesado 💘?", a: "Es la flecha de Cupido: representa enamorarse o un flechazo." },
    { q: "¿ღ es un corazón?", a: "No, es la letra georgiana ghan (U+10E6). Se usa como corazón por su forma." },
    { q: "¿Hay corazones que no sean emoji?", a: "Sí: ♡ ♥ ❥ ❣ ❦ ❧ se comportan como letras y toman el color del texto." },
  ],
};

export default page;
