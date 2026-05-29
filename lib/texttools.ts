// Pure text-transformation helpers shared by the text utility tool pages.
// Everything here is deterministic and runs in the browser — no network.

/* ------------------------------------------------------------------ */
/* Pig Latin                                                          */
/* ------------------------------------------------------------------ */

const VOWELS = "aeiou";

function isVowel(ch: string): boolean {
  return VOWELS.includes(ch.toLowerCase());
}

// Re-apply the capitalization pattern of the original word to a new word.
function matchCase(original: string, transformed: string): string {
  if (original === original.toUpperCase() && original !== original.toLowerCase()) {
    return transformed.toUpperCase();
  }
  if (original[0] === original[0]?.toUpperCase()) {
    return transformed.charAt(0).toUpperCase() + transformed.slice(1).toLowerCase();
  }
  return transformed.toLowerCase();
}

function wordToPigLatin(word: string): string {
  if (!word) return word;
  const lower = word.toLowerCase();
  // Words beginning with a vowel: append "way".
  if (isVowel(lower[0])) {
    return matchCase(word, lower + "way");
  }
  // Otherwise move the leading consonant cluster to the end and add "ay".
  let i = 0;
  while (i < lower.length && !isVowel(lower[i])) {
    // Treat "y" as a vowel once we're past the first letter (e.g. "rhythm").
    if (i > 0 && lower[i] === "y") break;
    i++;
  }
  const cluster = lower.slice(0, i);
  const rest = lower.slice(i);
  return matchCase(word, rest + cluster + "ay");
}

export function toPigLatin(text: string): string {
  // Split on word characters so punctuation and spacing are preserved.
  return text.replace(/[A-Za-z]+/g, (w) => wordToPigLatin(w));
}

function wordFromPigLatin(word: string): string {
  const lower = word.toLowerCase();
  // "...way" or "...yay" -> word started with a vowel.
  if (/(?:w|y)ay$/.test(lower) && lower.length > 3) {
    return matchCase(word, lower.replace(/(?:w|y)ay$/, ""));
  }
  // "<rest><cluster>ay" -> move the cluster (everything before "ay" that we
  // can't be sure of) back to the front. We can only guess a single-consonant
  // cluster reliably, so move the letter immediately before "ay".
  const m = lower.match(/^(.*?)([bcdfghjklmnpqrstvwxz]+)ay$/);
  if (m) {
    return matchCase(word, m[2] + m[1]);
  }
  return word;
}

export function fromPigLatin(text: string): string {
  return text.replace(/[A-Za-z]+/g, (w) => wordFromPigLatin(w));
}

/* ------------------------------------------------------------------ */
/* Case conversion                                                    */
/* ------------------------------------------------------------------ */

export type CaseMode =
  | "sentence"
  | "lower"
  | "upper"
  | "capitalized"
  | "title"
  | "alternating"
  | "inverse";

// Small words that stay lowercase in Title Case unless they're first/last.
const TITLE_MINOR = new Set([
  "a", "an", "and", "as", "at", "but", "by", "for", "in", "nor", "of", "on",
  "or", "so", "the", "to", "up", "yet", "vs", "via",
]);

export function convertCase(text: string, mode: CaseMode): string {
  switch (mode) {
    case "lower":
      return text.toLowerCase();
    case "upper":
      return text.toUpperCase();
    case "sentence":
      return text
        .toLowerCase()
        .replace(/(^\s*[a-z])|([.!?]\s+[a-z])/g, (s) => s.toUpperCase());
    case "capitalized":
      return text.replace(/\b\w/g, (c) => c.toUpperCase());
    case "title": {
      const words = text.toLowerCase().split(/(\s+)/);
      const lastIndex = words.length - 1;
      return words
        .map((w, i) => {
          if (/^\s+$/.test(w) || w === "") return w;
          const isEdge = i === 0 || i === lastIndex;
          if (!isEdge && TITLE_MINOR.has(w)) return w;
          return w.charAt(0).toUpperCase() + w.slice(1);
        })
        .join("");
    }
    case "alternating":
      return text
        .split("")
        .map((c, i) => (i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()))
        .join("");
    case "inverse":
      return text
        .split("")
        .map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
        .join("");
    default:
      return text;
  }
}

/* ------------------------------------------------------------------ */
/* Subscript & superscript                                            */
/* ------------------------------------------------------------------ */

const SUPERSCRIPT: Record<string, string> = {
  "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶",
  "7": "⁷", "8": "⁸", "9": "⁹", "+": "⁺", "-": "⁻", "=": "⁼", "(": "⁽",
  ")": "⁾", a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ",
  h: "ʰ", i: "ⁱ", j: "ʲ", k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ",
  p: "ᵖ", r: "ʳ", s: "ˢ", t: "ᵗ", u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ",
  y: "ʸ", z: "ᶻ",
};

const SUBSCRIPT: Record<string, string> = {
  "0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄", "5": "₅", "6": "₆",
  "7": "₇", "8": "₈", "9": "₉", "+": "₊", "-": "₋", "=": "₌", "(": "₍",
  ")": "₎", a: "ₐ", e: "ₑ", h: "ₕ", i: "ᵢ", j: "ⱼ", k: "ₖ", l: "ₗ",
  m: "ₘ", n: "ₙ", o: "ₒ", p: "ₚ", r: "ᵣ", s: "ₛ", t: "ₜ", u: "ᵤ",
  v: "ᵥ", x: "ₓ",
};

export function toSuperscript(text: string): string {
  return text
    .split("")
    .map((c) => SUPERSCRIPT[c.toLowerCase()] ?? c)
    .join("");
}

export function toSubscript(text: string): string {
  return text
    .split("")
    .map((c) => SUBSCRIPT[c.toLowerCase()] ?? c)
    .join("");
}

/* ------------------------------------------------------------------ */
/* Binary <-> text                                                    */
/* ------------------------------------------------------------------ */

export function textToBinary(text: string, separator = " "): string {
  return Array.from(text)
    .map((c) => {
      const code = c.codePointAt(0) ?? 0;
      return code.toString(2).padStart(8, "0");
    })
    .join(separator);
}

export function binaryToText(binary: string): string {
  const groups = binary.trim().split(/\s+/).filter(Boolean);
  return groups
    .map((g) => {
      const n = parseInt(g, 2);
      return Number.isNaN(n) ? "" : String.fromCodePoint(n);
    })
    .join("");
}

/* ------------------------------------------------------------------ */
/* Stacked text (combining marks above the baseline)                  */
/* ------------------------------------------------------------------ */

// Combining diacritical marks that sit ABOVE a character (U+0300–U+036F range).
const STACK_MARKS = [
  "́", "̀", "̂", "̃", "̄", "̆", "̇",
  "̈", "̊", "̋", "̌", "̒", "̓", "̔",
  "̽", "̾", "͂", "̈́", "͊", "͐", "͗",
];

// Deterministic stacking: each base letter gets `intensity` marks layered above
// it, producing the tall "letters on top" look without randomness.
export function toStacked(text: string, intensity = 6): string {
  const n = Math.max(0, Math.min(intensity, STACK_MARKS.length));
  return text
    .split("")
    .map((c) => {
      if (c.trim() === "") return c;
      let out = c;
      for (let i = 0; i < n; i++) out += STACK_MARKS[i];
      return out;
    })
    .join("");
}

/* ------------------------------------------------------------------ */
/* Morse code <-> text                                                */
/* ------------------------------------------------------------------ */

const MORSE: Record<string, string> = {
  a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.",
  g: "--.", h: "....", i: "..", j: ".---", k: "-.-", l: ".-..",
  m: "--", n: "-.", o: "---", p: ".--.", q: "--.-", r: ".-.",
  s: "...", t: "-", u: "..-", v: "...-", w: ".--", x: "-..-",
  y: "-.--", z: "--..",
  "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
  "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
  ".": ".-.-.-", ",": "--..--", "?": "..--..", "!": "-.-.--",
  "'": ".----.", "/": "-..-.", "(": "-.--.", ")": "-.--.-",
  "&": ".-...", ":": "---...", ";": "-.-.-.", "=": "-...-",
  "+": ".-.-.", "-": "-....-", "_": "..--.-", '"': ".-..-.",
  "@": ".--.-.",
};

const MORSE_INVERSE: Record<string, string> = Object.fromEntries(
  Object.entries(MORSE).map(([k, v]) => [v, k])
);

// Letters are separated by a single space, words by " / ".
export function toMorse(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .map((word) =>
      word
        .split("")
        .map((c) => MORSE[c] ?? "")
        .filter(Boolean)
        .join(" ")
    )
    .filter(Boolean)
    .join(" / ");
}

export function fromMorse(code: string): string {
  return code
    .trim()
    .split(/\s*\/\s*/) // split into words on the "/" separator
    .map((word) =>
      word
        .trim()
        .split(/\s+/)
        .map((tok) => MORSE_INVERSE[tok] ?? "")
        .join("")
    )
    .join(" ");
}

/* ------------------------------------------------------------------ */
/* Medieval / "ye olde" English translator                           */
/* ------------------------------------------------------------------ */

// Whole-word modern -> archaic substitutions. Keys are lowercase; the caller
// preserves the original word's capitalization.
const MEDIEVAL_WORDS: Record<string, string> = {
  you: "thou", your: "thy", yours: "thine", yourself: "thyself",
  are: "art", "you're": "thou art", "you'll": "thou shalt",
  "you've": "thou hast", "you'd": "thou wouldst",
  is: "be", am: "be", have: "hath", has: "hath", do: "doth", does: "doth",
  did: "didst", will: "shall", "can't": "cannot", "won't": "shall not",
  my: "mine", me: "mine own self",
  hello: "well met", hi: "good morrow", hey: "hark", goodbye: "fare thee well",
  yes: "aye", no: "nay", ok: "verily", okay: "verily", sure: "indeed",
  please: "prithee", thanks: "gramercy", "thank": "gramercy",
  friend: "good fellow", friends: "good fellows", stranger: "wanderer",
  before: "ere", here: "hither", there: "yonder", where: "whither",
  often: "oft", maybe: "mayhap", perhaps: "perchance", very: "most",
  really: "verily", because: "for that", about: "concerning",
  beautiful: "fair", pretty: "comely", ugly: "ill-favoured",
  crazy: "mad", happy: "merry", sad: "woeful", angry: "wroth",
  tired: "weary", scared: "affrighted", money: "coin", food: "victuals",
  drink: "ale", house: "dwelling", town: "village", king: "liege",
  fight: "duel", run: "flee", look: "behold", listen: "hark",
  speak: "speaketh", think: "ween", know: "knoweth", said: "quoth",
  girl: "maiden", woman: "lady", man: "gentleman", child: "bairn",
  now: "anon", soon: "ere long", quickly: "apace", today: "this day",
};

export function toMedieval(text: string): string {
  return text.replace(/[A-Za-z']+/g, (word) => {
    const replacement = MEDIEVAL_WORDS[word.toLowerCase()];
    if (!replacement) return word;
    return matchCase(word, replacement);
  });
}
