// Old English / blackletter Unicode style engine.
//
// Every style on this site starts from one of the two blackletter alphabets
// in Unicode's Mathematical Alphanumeric Symbols block:
//   - Mathematical Fraktur       U+1D504–U+1D537
//   - Mathematical Bold Fraktur  U+1D56C–U+1D59F
// Five Fraktur capitals (C, H, I, R, Z) were encoded earlier in the
// Letterlike Symbols block (U+2100–U+214F) as ℭ ℌ ℑ ℜ ℨ, so the Fraktur
// block has holes where they would be. We map those letters to the
// Letterlike versions.
//
// Accented letters are decomposed (NFD) first, so "é" becomes 𝔢 + U+0301 and
// "ü" becomes 𝔲 + U+0308. That is how German umlauts survive conversion.

type CharMap = Record<string, string>;

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";

function rangeMap(start: number, lowerStart: number, exceptions: Record<string, number> = {}): CharMap {
  const map: CharMap = {};
  [...UPPER].forEach((c, i) => {
    map[c] = String.fromCodePoint(exceptions[c] ?? start + i);
  });
  [...LOWER].forEach((c, i) => {
    map[c] = String.fromCodePoint(exceptions[c] ?? lowerStart + i);
  });
  return map;
}

const FRAKTUR = rangeMap(0x1d504, 0x1d51e, { C: 0x212d, H: 0x210c, I: 0x2111, R: 0x211c, Z: 0x2128 });
const BOLD_FRAKTUR = rangeMap(0x1d56c, 0x1d586);
const SCRIPT = rangeMap(0x1d49c, 0x1d4b6, {
  B: 0x212c, E: 0x2130, F: 0x2131, H: 0x210b, I: 0x2110, L: 0x2112, M: 0x2133, R: 0x211b,
  e: 0x212f, g: 0x210a, o: 0x2134,
});
const BOLD_SCRIPT = rangeMap(0x1d4d0, 0x1d4ea);

const DIGITS = "0123456789";
function digitMap(start: number): CharMap {
  const m: CharMap = {};
  [...DIGITS].forEach((d, i) => (m[d] = String.fromCodePoint(start + i)));
  return m;
}
const BOLD_DIGITS = digitMap(0x1d7ce);
const OUTLINE_DIGITS = digitMap(0x1d7d8);

const SMALL_CAPS: CharMap = {
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
};

const UPSIDE: CharMap = {
  a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ", h: "ɥ", i: "ı", j: "ɾ",
  k: "ʞ", l: "l", m: "ɯ", n: "u", o: "o", p: "d", q: "b", r: "ɹ", s: "s", t: "ʇ",
  u: "n", v: "ʌ", w: "ʍ", x: "x", y: "ʎ", z: "z",
  ".": "˙", ",": "'", "?": "¿", "!": "¡", "'": ",", "(": ")", ")": "(", "&": "⅋",
};

// ---------- primitives ----------

const prep = (s: string) => s.normalize("NFD");

function mapWith(map: CharMap) {
  return (s: string) => {
    let out = "";
    for (const ch of prep(s)) out += map[ch] ?? ch;
    return out;
  };
}

export const toFraktur = mapWith(FRAKTUR);
export const toBoldFraktur = mapWith(BOLD_FRAKTUR);

/** Capitals from one alphabet, lowercase from another. */
function hybrid(capMap: CharMap, lowerMap: CharMap | ((ch: string) => string)) {
  return (s: string) => {
    let out = "";
    for (const ch of prep(s)) {
      if (ch >= "A" && ch <= "Z") out += capMap[ch];
      else if (ch >= "a" && ch <= "z")
        out += typeof lowerMap === "function" ? lowerMap(ch) : lowerMap[ch] ?? ch;
      else out += ch;
    }
    return out;
  };
}

/** Bold Fraktur for the first letter of every word, regular Fraktur after. */
function initials(first: CharMap, rest: CharMap) {
  return (s: string) => {
    let out = "";
    let atStart = true;
    for (const ch of prep(s)) {
      const isLetter = /[A-Za-z]/.test(ch);
      if (isLetter) {
        out += atStart ? first[ch.toUpperCase()] : rest[ch] ?? ch;
        atStart = false;
      } else {
        out += ch;
        if (/\s/.test(ch)) atStart = true;
      }
    }
    return out;
  };
}

function digits(map: CharMap) {
  return (s: string) => [...s].map((c) => map[c] ?? c).join("");
}

/** Add a combining mark after every visible character. */
function mark(combiner: string) {
  return (s: string) => {
    let out = "";
    for (const ch of s) {
      out += ch;
      if (!/\s/.test(ch) && !/\p{M}/u.test(ch)) out += combiner;
    }
    return out;
  };
}

function between(sep: string) {
  return (s: string) =>
    s
      .split(/(\s+)/)
      .map((part) => (/\s/.test(part) ? part : (part.match(/\P{M}\p{M}*/gu) ?? []).join(sep)))
      .join("");
}

function spaced(s: string) {
  return (s.match(/\P{M}\p{M}*/gu) ?? []).join(" ");
}

function wrap(left: string, right = left) {
  return (s: string) => `${left} ${s} ${right}`;
}
function tight(left: string, right: string) {
  return (s: string) => `${left}${s}${right}`;
}

const compose =
  (...fns: Array<(s: string) => string>) =>
  (s: string) =>
    fns.reduce((acc, fn) => fn(acc), s);

const upper = (s: string) => s.toUpperCase();
const lower = (s: string) => s.toLowerCase();

/** Medieval spelling: "th" → þ (thorn), "ae" → æ, non-final s → ſ (long s). */
function thorn(s: string) {
  return s.replace(/Th/g, "Þ").replace(/TH/g, "Þ").replace(/th/g, "þ").replace(/Ae/g, "Æ").replace(/ae/g, "æ");
}
function longS(s: string) {
  return s.replace(/s(?=[a-z])/g, "ſ");
}

/** Deterministic, light "distressed" marks — a worn print, not full Zalgo. */
const WEAR = ["̴", "̷", "̣", "̰", "͙", "͇"];
function distress(intensity: number) {
  return (s: string) => {
    let out = "";
    let i = 0;
    for (const ch of s) {
      out += ch;
      if (/\s/.test(ch) || /\p{M}/u.test(ch)) continue;
      i++;
      for (let k = 0; k < intensity; k++) out += WEAR[(i * 7 + k * 3) % WEAR.length];
    }
    return out;
  };
}

function upsideDown(s: string) {
  const flipped = [...s.toLowerCase()].map((c) => UPSIDE[c] ?? c).reverse().join("");
  // Letters that stay Latin after flipping (q, d, p, u, o, s, x, z, l) get Fraktur.
  return [...flipped].map((c) => FRAKTUR[c] ?? c).join("");
}

function vertical(s: string) {
  return (s.replace(/\s+/g, "").match(/\P{M}\p{M}*/gu) ?? []).join("\n");
}

function monogram(map: CharMap, sep: string) {
  return (s: string) => {
    const letters = s
      .split(/\s+/)
      .map((w) => w.replace(/[^A-Za-z]/g, "")[0])
      .filter(Boolean)
      .map((c) => map[c.toUpperCase()]);
    return letters.length ? letters.join(sep) : s;
  };
}

function toRoman(n: number): string {
  const table: [number, string][] = [
    [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"],
    [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
  ];
  let out = "";
  for (const [v, r] of table) while (n >= v) { out += r; n -= v; }
  return out;
}
/** Digit runs 1–3999 become Roman numerals (dates like 08.14.1998 work per part). */
function romanize(s: string) {
  return s.replace(/\d+/g, (m) => {
    const n = parseInt(m, 10);
    return n > 0 && n < 4000 ? toRoman(n) : m;
  });
}

const fr = toFraktur;
const bfr = toBoldFraktur;

// ---------- style registry ----------

export type FontStyle = {
  id: string;
  name: string;
  transform: (s: string) => string;
};

const LIST: FontStyle[] = [
  // Core alphabets
  { id: "fraktur", name: "Fraktur", transform: compose(fr, digits(BOLD_DIGITS)) },
  { id: "bold-fraktur", name: "Bold Fraktur", transform: compose(bfr, digits(BOLD_DIGITS)) },
  { id: "fraktur-small-caps", name: "Fraktur + Small Caps", transform: hybrid(FRAKTUR, SMALL_CAPS) },
  { id: "tattoo", name: "Old English Tattoo", transform: compose(bfr, spaced, wrap("꧁", "꧂")) },
  { id: "oe-cursive", name: "Old English Cursive", transform: hybrid(FRAKTUR, SCRIPT) },
  { id: "gothic-framed", name: "Gothic Framed", transform: compose(bfr, tight("【", "】")) },
  { id: "chicano", name: "Chicano / Lowrider", transform: compose(hybrid(BOLD_FRAKTUR, BOLD_SCRIPT), wrap("✞")) },
  { id: "fraktur-underline", name: "Old English Underline", transform: compose(fr, mark("̲")) },
  { id: "fraktur-strike", name: "Old English Strikethrough", transform: compose(fr, mark("̶")) },
  { id: "distressed", name: "Distressed Gothic", transform: compose(bfr, distress(1)) },
  { id: "cursed", name: "Cursed Gothic", transform: compose(fr, distress(3)) },

  // Hybrids
  { id: "bold-fraktur-small-caps", name: "Bold Fraktur + Small Caps", transform: hybrid(BOLD_FRAKTUR, SMALL_CAPS) },
  { id: "bold-cursive", name: "Bold Old English Cursive", transform: hybrid(BOLD_FRAKTUR, BOLD_SCRIPT) },
  { id: "fraktur-plain-lower", name: "Fraktur Capitals, Plain Lowercase", transform: hybrid(FRAKTUR, (c) => c) },
  { id: "illuminated", name: "Illuminated Initials", transform: initials(BOLD_FRAKTUR, FRAKTUR) },
  { id: "drop-cap", name: "Framed Drop Cap", transform: (s) => {
      const src = s.trimStart();
      const chars = [...fr(src)];
      const first = src[0];
      if (!first || !/[A-Za-z]/.test(first)) return chars.join("");
      return `【${BOLD_FRAKTUR[first.toUpperCase()]}】${chars.slice(1).join("")}`;
    } },
  { id: "alternating", name: "Alternating Light & Bold", transform: (s) => {
      let i = 0;
      let out = "";
      for (const ch of prep(s)) {
        if (/[A-Za-z]/.test(ch)) out += (i++ % 2 ? BOLD_FRAKTUR : FRAKTUR)[ch];
        else out += ch;
      }
      return out;
    } },
  { id: "fraktur-caps", name: "Fraktur All Capitals", transform: compose(upper, fr) },
  { id: "bold-fraktur-caps", name: "Bold Fraktur All Capitals", transform: compose(upper, bfr) },
  { id: "fraktur-lower", name: "Fraktur All Lowercase", transform: compose(lower, fr) },

  // Medieval spelling
  { id: "thorn", name: "Ye Olde (Thorn þ & Æ)", transform: compose(thorn, fr) },
  { id: "long-s", name: "Long S Manuscript (ſ)", transform: compose(longS, fr) },
  { id: "interpunct", name: "Manuscript Interpunct", transform: compose(fr, between("·")) },
  { id: "word-dots", name: "Word Divider ⁘", transform: (s) => fr(s).split(/\s+/).join(" ⁘ ") },

  // Lines & marks
  { id: "bold-underline", name: "Bold Fraktur Underline", transform: compose(bfr, mark("̲")) },
  { id: "bold-strike", name: "Bold Fraktur Strikethrough", transform: compose(bfr, mark("̶")) },
  { id: "double-underline", name: "Fraktur Double Underline", transform: compose(fr, mark("̳")) },
  { id: "overline", name: "Fraktur Overline", transform: compose(fr, mark("̅")) },
  { id: "slashed", name: "Slashed Gothic", transform: compose(bfr, mark("̸")) },
  { id: "wavy", name: "Wavy Accent Gothic", transform: compose(fr, mark("̰")) },
  { id: "dotted", name: "Dotted Underline Gothic", transform: compose(fr, mark("̤")) },
  { id: "circled", name: "Bubble Gothic", transform: compose(fr, mark("⃝")) },
  { id: "boxed", name: "Boxed Gothic", transform: compose(bfr, mark("⃞")) },

  // Spacing & direction
  { id: "wide", name: "Wide Gothic", transform: compose(fr, spaced) },
  { id: "wide-bold", name: "Wide Bold Fraktur", transform: compose(bfr, spaced) },
  { id: "upside-down", name: "Upside-down Gothic", transform: upsideDown },
  { id: "reversed", name: "Reversed Gothic", transform: (s) => [...fr(s)].reverse().join("") },
  { id: "vertical", name: "Vertical Spine Stack", transform: compose(bfr, vertical) },

  // Frames
  { id: "frame-white", name: "White Bracket Frame", transform: compose(fr, tight("⟦", "⟧")) },
  { id: "frame-lenticular", name: "Lenticular Frame", transform: compose(fr, tight("〖", "〗")) },
  { id: "frame-corner", name: "Corner Bracket Frame", transform: compose(bfr, tight("『", "』")) },
  { id: "frame-banner", name: "Banner Rule", transform: compose(bfr, wrap("━━", "━━")) },
  { id: "frame-block", name: "Block Frame", transform: compose(bfr, wrap("▌", "▐")) },
  { id: "frame-chevron", name: "Guillemet Frame", transform: compose(fr, wrap("«", "»")) },
  { id: "frame-tibetan", name: "Ornate Tibetan Frame", transform: compose(bfr, wrap("༺", "༻")) },

  // Gothic decorations
  { id: "deco-pentagram", name: "Pentagram Gothic ⛧", transform: compose(bfr, wrap("⛧")) },
  { id: "deco-maltese", name: "Maltese Cross ✠", transform: compose(fr, wrap("✠")) },
  { id: "deco-cross", name: "Cross of Jerusalem ☩", transform: compose(bfr, wrap("☩")) },
  { id: "deco-dagger", name: "Dagger Gothic †", transform: compose(fr, wrap("†")) },
  { id: "deco-skull", name: "Skull Gothic ☠", transform: compose(bfr, wrap("☠")) },
  { id: "deco-swords", name: "Crossed Swords ⚔", transform: compose(bfr, wrap("⚔")) },
  { id: "deco-fleur", name: "Fleur-de-lis ⚜", transform: compose(fr, wrap("⚜")) },
  { id: "deco-crown", name: "Crowned Gothic ♛", transform: compose(bfr, wrap("♛")) },
  { id: "deco-fleuron", name: "Manuscript Fleuron ☙ ❧", transform: compose(fr, wrap("☙", "❧")) },
  { id: "deco-hedera", name: "Hedera Leaf ❦", transform: compose(fr, wrap("❦")) },
  { id: "deco-rose", name: "Dark Rose 🥀", transform: compose(bfr, wrap("🥀")) },
  { id: "deco-bat", name: "Bat Wing 🦇", transform: compose(bfr, wrap("🦇")) },
  { id: "deco-candle", name: "Candlelit 🕯", transform: compose(fr, wrap("🕯")) },
  { id: "deco-stars", name: "Starlit Gothic ✧", transform: compose(fr, wrap("✧･ﾟ", "ﾟ･✧")) },
  { id: "deco-heart", name: "Gothic Heart ♡", transform: compose(bfr, wrap("♡")) },

  // Numbers-focused
  { id: "roman-date", name: "Roman Numeral Date", transform: compose(romanize, bfr) },
  { id: "roman-date-light", name: "Roman Numerals (Light Fraktur)", transform: compose(romanize, fr) },
  { id: "fraktur-outline-digits", name: "Fraktur + Outline Numbers", transform: compose(fr, digits(OUTLINE_DIGITS)) },

  // Initials
  { id: "monogram", name: "Monogram Initials", transform: monogram(BOLD_FRAKTUR, " · ") },
  { id: "monogram-framed", name: "Framed Monogram", transform: (s) => `【${monogram(BOLD_FRAKTUR, "")(s)}】` },
  { id: "monogram-ampersand", name: "Couple Monogram", transform: monogram(FRAKTUR, " & ") },
];

export const ALL_STYLES: Record<string, FontStyle> = Object.fromEntries(LIST.map((s) => [s.id, s]));

/** The homepage order. Every other page re-orders a subset of these. */
export const HOME_STYLES = LIST.map((s) => s.id);

export function pickStyles(ids: string[]): FontStyle[] {
  return ids.map((id) => ALL_STYLES[id]).filter(Boolean);
}

export const ALPHABET_UPPER = [...UPPER];
export const ALPHABET_LOWER = [...LOWER];
