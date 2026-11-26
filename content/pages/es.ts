import type { PageContent } from "./types";

// Restaurada en noviembre de 2026 en /es, la URL que Bing posicionaba antes
// del commit 00a2b7f. Página de inicio en español: letras góticas / Old English.
const page: PageContent = {
  slug: "es",
  lang: "es",
  title: "Letras Góticas Old English: 16 Estilos para Copiar y Pegar",
  description:
    "Generador de letras góticas y Old English: escribe una vez y copia 16 estilos blackletter, fraktur y de tatuaje. Gratis, sin registro y en tu navegador.",
  h1: "Generador de Letras Góticas y Old English",
  crumb: "Letras góticas",
  intro:
    "Las letras góticas, que en inglés se conocen como Old English o blackletter, son las letras angulosas y densas de los manuscritos medievales, y aquí puedes escribir tu texto y copiar 16 versiones distintas con un toque. Si buscas letra Old English para un nombre, un perfil o la idea de un tatuaje, escribe arriba y elige; si quieres letras para copiar y pegar en otros estilos (cursiva, burbuja, negrita), tienes el [generador de letras para copiar y pegar](/es/font-generator). Lo que copias no es una fuente instalada, sino caracteres Unicode, así que se pega como texto normal.",
  tool: {
    styles: ["fraktur", "bold-fraktur", "tattoo", "oe-cursive", "bold-cursive", "fraktur-small-caps", "gothic-framed", "chicano", "distressed", "cursed", "illuminated", "drop-cap", "fraktur-caps", "slashed", "wide-bold", "deco-fleuron"],
    sample: "Letras Góticas",
    placeholder: "Escribe tu nombre o una frase…",
    presets: ["Letras Góticas", "Familia", "Fe y Esperanza", "Tu Nombre"],
  },
  stylesHeading: "16 estilos de letras góticas",
  howTo: {
    heading: "Cómo usar el generador",
    steps: [
      ["Escribe", "Pon tu nombre, una fecha o una frase en el cuadro. Todos los estilos se actualizan a la vez."],
      ["Copia", "Pulsa Copiar junto al estilo que más te guste."],
      ["Pega", "Pégalo donde estés escribiendo. Si en otro dispositivo ves cuadritos vacíos, es que a ese dispositivo le falta una fuente con esos caracteres."],
    ],
  },
  sections: [
    {
      h2: "Abecedario gótico completo",
      blocks: [
        { p: "Toca cualquier letra para copiarla sola. Sirve para escribir iniciales, armar un monograma o comparar mayúsculas antes de decidir." },
        { chart: { styles: ["bold-fraktur", "oe-cursive"], sets: ["upper", "lower"] } },
      ],
    },
    {
      h2: "1. ¿Qué tipos de letra gótica hay?",
      blocks: [
        {
          ul: [
            "**Fraktur**: la gótica alemana, con curvas quebradas. Es la base de casi todos los estilos de esta página.",
            "**Fraktur negrita**: el mismo trazo, más grueso. Se lee mejor en tamaños pequeños.",
            "**Cursiva gótica**: mayúsculas góticas con minúsculas enlazadas, una mezcla muy usada en nombres.",
            "**Estilo chicano**: inicial gótica con el resto en letra de pincel, típico de la rotulación lowrider.",
            "**Iniciales iluminadas**: la primera letra destacada, como en los libros de horas medievales.",
          ],
        },
        { p: "Para ver el estilo con más detalle, en inglés tienes el [Old English font generator](/) y la página de [gothic letters](/font-generator/gothic-letters), con el alfabeto gótico de Wulfila incluido." },
      ],
    },
    {
      h2: "2. ¿Sirve para un tatuaje?",
      blocks: [
        { p: "Sirve para decidir. Prueba el nombre o la frase en cada estilo, compara cómo quedan las mayúsculas y lleva al estudio la que te convenza. Para el trabajo final el tatuador necesita una fuente vectorial de verdad, porque los caracteres Unicode dependen de cómo los dibuje cada teléfono. En la página [letra Old English para copiar y pegar](/es/font-generator/old-english) explicamos qué fuente pedir." },
      ],
    },
  ],
  built:
    "Las letras salen de los bloques Unicode Mathematical Fraktur y Mathematical Bold Fraktur (U+1D504–U+1D59F); unas pocas mayúsculas (ℭ ℌ ℑ ℜ ℨ) vienen del bloque Letterlike Symbols. Unicode no tiene números góticos, así que los dígitos se sustituyen por cifras en negrita.",
  related: {
    heading: "Más herramientas",
    hrefs: ["/es/font-generator", "/es/font-generator/old-english", "/es/cool-symbols/hearts", "/", "/tattoo-font-generator", "/font-generator/gothic-letters"],
  },
  faq: [
    { q: "¿Qué son las letras góticas?", a: "Son las letras de la escritura blackletter, la que usaban los copistas en la Europa medieval y los primeros impresores. En inglés se llaman Old English, aunque no tienen relación con el idioma inglés antiguo." },
    { q: "¿Cómo copio y pego letras góticas?", a: "Escribe tu texto en el cuadro, pulsa Copiar en el estilo que quieras y pégalo donde estés escribiendo." },
    { q: "¿Es una fuente que tengo que descargar?", a: "No. Son caracteres Unicode que ya traen la forma gótica, por eso no hay nada que instalar." },
    { q: "¿Se pueden poner acentos y la ñ en letra gótica?", a: "Sí, pero con truco: Unicode no tiene una ñ ni vocales acentuadas góticas, así que el generador pone la letra gótica y le añade la tilde como marca combinable. Según la fuente del dispositivo, la tilde puede quedar algo desplazada." },
    { q: "¿Hay números en letra gótica?", a: "No en Unicode. Los números se muestran en negrita para que combinen; para fechas en un tatuaje, los números romanos suelen quedar mejor." },
    { q: "¿Qué diferencia hay entre gótica, Old English y blackletter?", a: "Son nombres para la misma familia de letras. Blackletter es el término tipográfico, gótica el nombre común en español y Old English el que usan en inglés tatuadores y rotulistas." },
    { q: "¿Es gratis?", a: "Sí. No hace falta registrarse y todo se genera en tu navegador." },
  ],
};

export default page;
