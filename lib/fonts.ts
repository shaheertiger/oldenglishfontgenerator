// Unicode style transforms for blackletter / gothic / fancy variants.
// Each style maps A-Z, a-z, 0-9 (where available) to Unicode codepoints.

type CharMap = Record<string, string>;

const LATIN = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function buildMap(target: string): CharMap {
  const map: CharMap = {};
  for (let i = 0; i < LATIN.length; i++) {
    // target may contain surrogate pairs (each codepoint = 2 UTF-16 units)
    const cp = target.codePointAt(i * 2);
    if (cp !== undefined) map[LATIN[i]] = String.fromCodePoint(cp);
  }
  return map;
}

// Each target string below contains 52 codepoints (A-Z then a-z) in Unicode
// math/letterlike planes. We use the codepoint-by-codepoint helper above so
// surrogate pairs in the supplementary planes are handled correctly.

const fraktur = buildMap(
  "\u{1D504}\u{1D505}\u{212D}\u{1D507}\u{1D508}\u{1D509}\u{1D50A}\u{210C}\u{2111}\u{1D50D}\u{1D50E}\u{1D50F}\u{1D510}\u{1D511}\u{1D512}\u{1D513}\u{1D514}\u{211C}\u{1D516}\u{1D517}\u{1D518}\u{1D519}\u{1D51A}\u{1D51B}\u{1D51C}\u{2128}" +
  "\u{1D51E}\u{1D51F}\u{1D520}\u{1D521}\u{1D522}\u{1D523}\u{1D524}\u{1D525}\u{1D526}\u{1D527}\u{1D528}\u{1D529}\u{1D52A}\u{1D52B}\u{1D52C}\u{1D52D}\u{1D52E}\u{1D52F}\u{1D530}\u{1D531}\u{1D532}\u{1D533}\u{1D534}\u{1D535}\u{1D536}\u{1D537}"
);

const frakturBold = buildMap(
  "\u{1D56C}\u{1D56D}\u{1D56E}\u{1D56F}\u{1D570}\u{1D571}\u{1D572}\u{1D573}\u{1D574}\u{1D575}\u{1D576}\u{1D577}\u{1D578}\u{1D579}\u{1D57A}\u{1D57B}\u{1D57C}\u{1D57D}\u{1D57E}\u{1D57F}\u{1D580}\u{1D581}\u{1D582}\u{1D583}\u{1D584}\u{1D585}" +
  "\u{1D586}\u{1D587}\u{1D588}\u{1D589}\u{1D58A}\u{1D58B}\u{1D58C}\u{1D58D}\u{1D58E}\u{1D58F}\u{1D590}\u{1D591}\u{1D592}\u{1D593}\u{1D594}\u{1D595}\u{1D596}\u{1D597}\u{1D598}\u{1D599}\u{1D59A}\u{1D59B}\u{1D59C}\u{1D59D}\u{1D59E}\u{1D59F}"
);

const doubleStruck = buildMap(
  "\u{1D538}\u{1D539}\u{2102}\u{1D53B}\u{1D53C}\u{1D53D}\u{1D53E}\u{210D}\u{1D540}\u{1D541}\u{1D542}\u{1D543}\u{1D544}\u{2115}\u{1D546}\u{2119}\u{211A}\u{211D}\u{1D54A}\u{1D54B}\u{1D54C}\u{1D54D}\u{1D54E}\u{1D54F}\u{1D550}\u{2124}" +
  "\u{1D552}\u{1D553}\u{1D554}\u{1D555}\u{1D556}\u{1D557}\u{1D558}\u{1D559}\u{1D55A}\u{1D55B}\u{1D55C}\u{1D55D}\u{1D55E}\u{1D55F}\u{1D560}\u{1D561}\u{1D562}\u{1D563}\u{1D564}\u{1D565}\u{1D566}\u{1D567}\u{1D568}\u{1D569}\u{1D56A}\u{1D56B}"
);

const cursiveBold = buildMap(
  "\u{1D4D0}\u{1D4D1}\u{1D4D2}\u{1D4D3}\u{1D4D4}\u{1D4D5}\u{1D4D6}\u{1D4D7}\u{1D4D8}\u{1D4D9}\u{1D4DA}\u{1D4DB}\u{1D4DC}\u{1D4DD}\u{1D4DE}\u{1D4DF}\u{1D4E0}\u{1D4E1}\u{1D4E2}\u{1D4E3}\u{1D4E4}\u{1D4E5}\u{1D4E6}\u{1D4E7}\u{1D4E8}\u{1D4E9}" +
  "\u{1D4EA}\u{1D4EB}\u{1D4EC}\u{1D4ED}\u{1D4EE}\u{1D4EF}\u{1D4F0}\u{1D4F1}\u{1D4F2}\u{1D4F3}\u{1D4F4}\u{1D4F5}\u{1D4F6}\u{1D4F7}\u{1D4F8}\u{1D4F9}\u{1D4FA}\u{1D4FB}\u{1D4FC}\u{1D4FD}\u{1D4FE}\u{1D4FF}\u{1D500}\u{1D501}\u{1D502}\u{1D503}"
);

const monospace = buildMap(
  "\u{1D670}\u{1D671}\u{1D672}\u{1D673}\u{1D674}\u{1D675}\u{1D676}\u{1D677}\u{1D678}\u{1D679}\u{1D67A}\u{1D67B}\u{1D67C}\u{1D67D}\u{1D67E}\u{1D67F}\u{1D680}\u{1D681}\u{1D682}\u{1D683}\u{1D684}\u{1D685}\u{1D686}\u{1D687}\u{1D688}\u{1D689}" +
  "\u{1D68A}\u{1D68B}\u{1D68C}\u{1D68D}\u{1D68E}\u{1D68F}\u{1D690}\u{1D691}\u{1D692}\u{1D693}\u{1D694}\u{1D695}\u{1D696}\u{1D697}\u{1D698}\u{1D699}\u{1D69A}\u{1D69B}\u{1D69C}\u{1D69D}\u{1D69E}\u{1D69F}\u{1D6A0}\u{1D6A1}\u{1D6A2}\u{1D6A3}"
);

const sansBold = buildMap(
  "\u{1D5D4}\u{1D5D5}\u{1D5D6}\u{1D5D7}\u{1D5D8}\u{1D5D9}\u{1D5DA}\u{1D5DB}\u{1D5DC}\u{1D5DD}\u{1D5DE}\u{1D5DF}\u{1D5E0}\u{1D5E1}\u{1D5E2}\u{1D5E3}\u{1D5E4}\u{1D5E5}\u{1D5E6}\u{1D5E7}\u{1D5E8}\u{1D5E9}\u{1D5EA}\u{1D5EB}\u{1D5EC}\u{1D5ED}" +
  "\u{1D5EE}\u{1D5EF}\u{1D5F0}\u{1D5F1}\u{1D5F2}\u{1D5F3}\u{1D5F4}\u{1D5F5}\u{1D5F6}\u{1D5F7}\u{1D5F8}\u{1D5F9}\u{1D5FA}\u{1D5FB}\u{1D5FC}\u{1D5FD}\u{1D5FE}\u{1D5FF}\u{1D600}\u{1D601}\u{1D602}\u{1D603}\u{1D604}\u{1D605}\u{1D606}\u{1D607}"
);

function applyMap(text: string, map: CharMap): string {
  let out = "";
  for (const ch of text) {
    out += map[ch] ?? ch;
  }
  return out;
}

function smallCaps(text: string): string {
  const map: CharMap = {
    a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ",
    j: "ᴊ", k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ",
    s: "ѕ", t: "ᴛ", u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
  };
  let out = "";
  for (const ch of text) {
    const lower = ch.toLowerCase();
    out += map[lower] ?? ch;
  }
  return out;
}

export type FontStyle = {
  id: string;
  name: string;
  transform: (s: string) => string;
};

export const STYLES: FontStyle[] = [
  { id: "fraktur", name: "Old English (Fraktur)", transform: (s) => applyMap(s, fraktur) },
  { id: "fraktur-bold", name: "Old English Bold", transform: (s) => applyMap(s, frakturBold) },
  { id: "cursive-bold", name: "Gothic Cursive", transform: (s) => applyMap(s, cursiveBold) },
  { id: "double-struck", name: "Medieval Outline", transform: (s) => applyMap(s, doubleStruck) },
  { id: "sans-bold", name: "Heavy Sans", transform: (s) => applyMap(s, sansBold) },
  { id: "monospace", name: "Manuscript Mono", transform: (s) => applyMap(s, monospace) },
  { id: "small-caps", name: "Small Caps", transform: (s) => smallCaps(s) },
];
