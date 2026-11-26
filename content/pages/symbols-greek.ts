import type { PageContent } from "./types";

// Restored Nov 2026 at /symbols/greek (ranked in Bing before 00a2b7f).
// Code points are computed from the characters themselves, so they can't drift.
const cp = (s: string) => [...s].map((c) => "U+" + c.codePointAt(0)!.toString(16).toUpperCase().padStart(4, "0")).join(" ");

// [name, capital, small, Latin sound, a common use outside Greek]
const LETTERS: [string, string, string, string, string][] = [
  ["Alpha", "Α", "α", "a", "α: angles, significance level in statistics"],
  ["Beta", "Β", "β", "b (modern Greek v)", "β: beta particles, a stock's beta"],
  ["Gamma", "Γ", "γ", "g", "γ: gamma rays; Γ: the gamma function"],
  ["Delta", "Δ", "δ", "d", "Δ: change in a value; δ: a small quantity"],
  ["Epsilon", "Ε", "ε", "short e", "ε: a very small number in calculus"],
  ["Zeta", "Ζ", "ζ", "z", "ζ: the Riemann zeta function"],
  ["Eta", "Η", "η", "long e (modern Greek i)", "η: efficiency in engineering"],
  ["Theta", "Θ", "θ", "th", "θ: an angle"],
  ["Iota", "Ι", "ι", "i", "\"not one iota\": the smallest amount"],
  ["Kappa", "Κ", "κ", "k", "κ: curvature, Cohen's kappa"],
  ["Lambda", "Λ", "λ", "l", "λ: wavelength, lambda functions in code"],
  ["Mu", "Μ", "μ", "m", "μ: micro- (μm, μs), the mean of a population"],
  ["Nu", "Ν", "ν", "n", "ν: frequency in physics"],
  ["Xi", "Ξ", "ξ", "x (ks)", "ξ: a random variable in some texts"],
  ["Omicron", "Ο", "ο", "short o", "Rare in math because it looks like the Latin o"],
  ["Pi", "Π", "π", "p", "π ≈ 3.14159; Π: a product of terms"],
  ["Rho", "Ρ", "ρ", "r", "ρ: density, correlation"],
  ["Sigma", "Σ", "σ ς", "s", "Σ: a sum; σ: standard deviation; ς is used only at the end of a word"],
  ["Tau", "Τ", "τ", "t", "τ: torque, time constants"],
  ["Upsilon", "Υ", "υ", "u / y", "Υ: the upsilon particle in physics"],
  ["Phi", "Φ", "φ", "ph (f)", "φ: the golden ratio ≈ 1.618"],
  ["Chi", "Χ", "χ", "kh", "χ²: the chi-squared test"],
  ["Psi", "Ψ", "ψ", "ps", "ψ: the wave function; Ψ: a symbol of psychology"],
  ["Omega", "Ω", "ω", "long o", "Ω: ohms; ω: angular velocity"],
];

const VARIANTS: [string, string, string][] = [
  ["ς", "Final sigma", "The form of small sigma written at the end of a word, as in λόγος."],
  ["ϑ", "Theta symbol", "A cursive theta some math texts use alongside θ."],
  ["ϕ", "Phi symbol", "The straight-stroke phi, often preferred for angles and the golden ratio."],
  ["ϖ", "Pi symbol", "A curly pi, rare today; it appears in some older astronomy and physics."],
  ["ϵ", "Lunate epsilon symbol", "The half-moon epsilon; the set-membership sign ∈ was based on an epsilon."],
];

const page: PageContent = {
  slug: "symbols/greek",
  file: "symbols-greek",
  title: "Greek Letters Copy and Paste – All 24, Α α to Ω ω",
  description:
    "Greek letters to copy and paste: all 24 capitals and small letters with names, sounds and Unicode code points, plus 5 variant forms. Free.",
  h1: "Greek Letters Copy and Paste",
  crumb: "Greek Letters",
  intro:
    "Greek letters are the 24 characters of the Greek alphabet, from alpha (Α α) to omega (Ω ω), and the table below lets you copy and paste each one, capital or small, with its name and code point. Most people who search for Greek letters to copy and paste need one symbol for homework, a formula, a fraternity or sorority name, or a username, so the table also notes what each letter usually stands for in math and science. If you want the whole Greek alphabet to copy at once, select the rows you need. The box below sets your own Latin text in related scripts and math styles.",
  tool: {
    styles: ["phoenician", "gothic-wulfila", "roman-inscription", "u-double-struck", "u-sans-bold", "u-italic-serif", "u-bold-italic-serif", "u-small-caps"],
    sample: "Alpha to Omega",
    placeholder: "Type a word or chapter name…",
    presets: ["Alpha to Omega", "Delta Gamma", "Theta Chi", "Sigma"],
  },
  stylesHeading: "Your text in Greek-related scripts and math styles",
  howTo: {
    heading: "How to copy Greek letters",
    steps: [
      ["Find the letter", "Look it up by name in the first column. Capitals and small letters sit side by side."],
      ["Select and copy", "Double-click or long-press the letter itself, then copy. Each glyph cell holds exactly one character."],
      ["Check the look-alikes", "Capital Α, Β, Ε and several others look like Latin letters but are different characters. Search engines and spell checkers treat them differently."],
    ],
  },
  sections: [
    {
      h2: "Greek alphabet to copy: capitals, small letters and code points",
      blocks: [
        {
          table: {
            head: ["Name", "Capital", "Small", "Code points", "Sound", "Common use"],
            glyphCols: [1, 2],
            rows: LETTERS.map(([n, u, l, s, use]) => [n, u, l, `${cp(u)} / ${cp(l.replace(" ", ""))}`, s, use]),
          },
        },
      ],
    },
    {
      h2: "Variant Greek letter forms",
      blocks: [
        { p: "Unicode also has a handful of alternate shapes. They are separate characters, so copy the exact one your formula or textbook uses." },
        {
          table: {
            head: ["Letter", "Name", "Code point", "Where you see it"],
            glyphCols: [0],
            rows: VARIANTS.map(([g, n, w]) => [g, n, cp(g), w]),
          },
        },
      ],
    },
    {
      h2: "1. How do I write fraternity or sorority letters?",
      blocks: [
        { p: "Greek-letter organizations use capitals only, written with no spaces or with thin spaces: ΑΦΑ, ΔΓ, ΣΧ. Copy the capitals from the table in order. Watch out for the letters that look Latin: if you type a plain A instead of Alpha, the result looks the same but is a different character, which matters when someone searches for it." },
        { p: "For Greek-looking decoration without real Greek, such as Ξ for E, the [different fonts](/different-fonts) page and the [ancient font generator](/ancient-font-generator) are a better fit; the result here is genuine Greek text." },
      ],
    },
  ],
  built:
    "Every letter comes from the Greek and Coptic block (U+0370–U+03FF): capitals at U+0391–U+03A9 and small letters at U+03B1–U+03C9, with the variant forms at U+03D1–U+03F5. The tool styles use Phoenician (U+10900), Gothic (U+10330) and Mathematical Alphanumeric Symbols.",
  related: {
    heading: "More alphabets and symbol sets",
    hrefs: ["/symbols", "/ancient-font-generator", "/font-generator/gothic-letters", "/symbols/numbers", "/different-fonts"],
  },
  faq: [
    { q: "How do I copy and paste Greek letters?", a: "Find the letter by name in the table, select the character in the Capital or Small column and copy it. Each cell contains one character." },
    { q: "How many letters are in the Greek alphabet?", a: "24, from alpha to omega. Small sigma has a second form, ς, used at the end of a word." },
    { q: "What is the Greek letter that looks like a W?", a: "That is small omega, ω. The capital is Ω." },
    { q: "What does the Greek letter Δ mean?", a: "Capital delta. In math and science it usually means a change in a quantity, as in Δt for a change in time." },
    { q: "Why does my copied Alpha look like a normal A?", a: "Capital alpha Α and Latin A share the same shape in most fonts. They are still different characters: Α is U+0391 and A is U+0041." },
    { q: "How do I type Greek letters on Windows or a Mac?", a: "Add a Greek keyboard layout in your system settings, or copy them from this page. In Word and Google Docs you can also insert them from the symbol menu." },
    { q: "Is there a Greek letter font generator?", a: "Greek letters are not a font of Latin letters; each one is a separate character. The box on this page sets your Latin text in scripts related to Greek, such as Phoenician and Gothic." },
  ],
};

export default page;
