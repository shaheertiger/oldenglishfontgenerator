// Unicode style transforms. Each style returns a transformed copy of the input.

type CharMap = Record<string, string>;

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const DIGITS = "0123456789";
const LATIN = UPPER + LOWER;

// Build a map by iterating codepoints of `target`. Surrogate pairs are handled.
function buildMap(source: string, target: string): CharMap {
  const map: CharMap = {};
  const srcChars = [...source];
  const tgtChars = [...target];
  for (let i = 0; i < srcChars.length && i < tgtChars.length; i++) {
    map[srcChars[i]] = tgtChars[i];
  }
  return map;
}

function applyMap(text: string, map: CharMap): string {
  let out = "";
  for (const ch of text) out += map[ch] ?? ch;
  return out;
}

// ----- Blackletter / Fraktur -----
const fraktur = buildMap(
  LATIN,
  "\u{1D504}\u{1D505}\u{212D}\u{1D507}\u{1D508}\u{1D509}\u{1D50A}\u{210C}\u{2111}\u{1D50D}\u{1D50E}\u{1D50F}\u{1D510}\u{1D511}\u{1D512}\u{1D513}\u{1D514}\u{211C}\u{1D516}\u{1D517}\u{1D518}\u{1D519}\u{1D51A}\u{1D51B}\u{1D51C}\u{2128}" +
  "\u{1D51E}\u{1D51F}\u{1D520}\u{1D521}\u{1D522}\u{1D523}\u{1D524}\u{1D525}\u{1D526}\u{1D527}\u{1D528}\u{1D529}\u{1D52A}\u{1D52B}\u{1D52C}\u{1D52D}\u{1D52E}\u{1D52F}\u{1D530}\u{1D531}\u{1D532}\u{1D533}\u{1D534}\u{1D535}\u{1D536}\u{1D537}"
);

const frakturBold = buildMap(
  LATIN,
  "\u{1D56C}\u{1D56D}\u{1D56E}\u{1D56F}\u{1D570}\u{1D571}\u{1D572}\u{1D573}\u{1D574}\u{1D575}\u{1D576}\u{1D577}\u{1D578}\u{1D579}\u{1D57A}\u{1D57B}\u{1D57C}\u{1D57D}\u{1D57E}\u{1D57F}\u{1D580}\u{1D581}\u{1D582}\u{1D583}\u{1D584}\u{1D585}" +
  "\u{1D586}\u{1D587}\u{1D588}\u{1D589}\u{1D58A}\u{1D58B}\u{1D58C}\u{1D58D}\u{1D58E}\u{1D58F}\u{1D590}\u{1D591}\u{1D592}\u{1D593}\u{1D594}\u{1D595}\u{1D596}\u{1D597}\u{1D598}\u{1D599}\u{1D59A}\u{1D59B}\u{1D59C}\u{1D59D}\u{1D59E}\u{1D59F}"
);

// ----- Cursive / Script -----
const script = buildMap(
  LATIN,
  "\u{1D49C}\u{212C}\u{1D49E}\u{1D49F}\u{2130}\u{2131}\u{1D4A2}\u{210B}\u{2110}\u{1D4A5}\u{1D4A6}\u{2112}\u{2133}\u{1D4A9}\u{1D4AA}\u{1D4AB}\u{1D4AC}\u{211B}\u{1D4AE}\u{1D4AF}\u{1D4B0}\u{1D4B1}\u{1D4B2}\u{1D4B3}\u{1D4B4}\u{1D4B5}" +
  "\u{1D4B6}\u{1D4B7}\u{1D4B8}\u{1D4B9}\u{212F}\u{1D4BB}\u{210A}\u{1D4BD}\u{1D4BE}\u{1D4BF}\u{1D4C0}\u{1D4C1}\u{1D4C2}\u{1D4C3}\u{2134}\u{1D4C5}\u{1D4C6}\u{1D4C7}\u{1D4C8}\u{1D4C9}\u{1D4CA}\u{1D4CB}\u{1D4CC}\u{1D4CD}\u{1D4CE}\u{1D4CF}"
);

const scriptBold = buildMap(
  LATIN,
  "\u{1D4D0}\u{1D4D1}\u{1D4D2}\u{1D4D3}\u{1D4D4}\u{1D4D5}\u{1D4D6}\u{1D4D7}\u{1D4D8}\u{1D4D9}\u{1D4DA}\u{1D4DB}\u{1D4DC}\u{1D4DD}\u{1D4DE}\u{1D4DF}\u{1D4E0}\u{1D4E1}\u{1D4E2}\u{1D4E3}\u{1D4E4}\u{1D4E5}\u{1D4E6}\u{1D4E7}\u{1D4E8}\u{1D4E9}" +
  "\u{1D4EA}\u{1D4EB}\u{1D4EC}\u{1D4ED}\u{1D4EE}\u{1D4EF}\u{1D4F0}\u{1D4F1}\u{1D4F2}\u{1D4F3}\u{1D4F4}\u{1D4F5}\u{1D4F6}\u{1D4F7}\u{1D4F8}\u{1D4F9}\u{1D4FA}\u{1D4FB}\u{1D4FC}\u{1D4FD}\u{1D4FE}\u{1D4FF}\u{1D500}\u{1D501}\u{1D502}\u{1D503}"
);

// ----- Bold / Italic serif -----
const boldSerif = buildMap(
  LATIN + DIGITS,
  "\u{1D400}\u{1D401}\u{1D402}\u{1D403}\u{1D404}\u{1D405}\u{1D406}\u{1D407}\u{1D408}\u{1D409}\u{1D40A}\u{1D40B}\u{1D40C}\u{1D40D}\u{1D40E}\u{1D40F}\u{1D410}\u{1D411}\u{1D412}\u{1D413}\u{1D414}\u{1D415}\u{1D416}\u{1D417}\u{1D418}\u{1D419}" +
  "\u{1D41A}\u{1D41B}\u{1D41C}\u{1D41D}\u{1D41E}\u{1D41F}\u{1D420}\u{1D421}\u{1D422}\u{1D423}\u{1D424}\u{1D425}\u{1D426}\u{1D427}\u{1D428}\u{1D429}\u{1D42A}\u{1D42B}\u{1D42C}\u{1D42D}\u{1D42E}\u{1D42F}\u{1D430}\u{1D431}\u{1D432}\u{1D433}" +
  "\u{1D7CE}\u{1D7CF}\u{1D7D0}\u{1D7D1}\u{1D7D2}\u{1D7D3}\u{1D7D4}\u{1D7D5}\u{1D7D6}\u{1D7D7}"
);

const italicSerif = buildMap(
  LATIN,
  "\u{1D434}\u{1D435}\u{1D436}\u{1D437}\u{1D438}\u{1D439}\u{1D43A}\u{1D43B}\u{1D43C}\u{1D43D}\u{1D43E}\u{1D43F}\u{1D440}\u{1D441}\u{1D442}\u{1D443}\u{1D444}\u{1D445}\u{1D446}\u{1D447}\u{1D448}\u{1D449}\u{1D44A}\u{1D44B}\u{1D44C}\u{1D44D}" +
  "\u{1D44E}\u{1D44F}\u{1D450}\u{210E}\u{1D452}\u{1D453}\u{1D454}\u{1D455}\u{1D456}\u{1D457}\u{1D458}\u{1D459}\u{1D45A}\u{1D45B}\u{1D45C}\u{1D45D}\u{1D45E}\u{1D45F}\u{1D460}\u{1D461}\u{1D462}\u{1D463}\u{1D464}\u{1D465}\u{1D466}\u{1D467}"
);

const boldItalicSerif = buildMap(
  LATIN,
  "\u{1D468}\u{1D469}\u{1D46A}\u{1D46B}\u{1D46C}\u{1D46D}\u{1D46E}\u{1D46F}\u{1D470}\u{1D471}\u{1D472}\u{1D473}\u{1D474}\u{1D475}\u{1D476}\u{1D477}\u{1D478}\u{1D479}\u{1D47A}\u{1D47B}\u{1D47C}\u{1D47D}\u{1D47E}\u{1D47F}\u{1D480}\u{1D481}" +
  "\u{1D482}\u{1D483}\u{1D484}\u{1D485}\u{1D486}\u{1D487}\u{1D488}\u{1D489}\u{1D48A}\u{1D48B}\u{1D48C}\u{1D48D}\u{1D48E}\u{1D48F}\u{1D490}\u{1D491}\u{1D492}\u{1D493}\u{1D494}\u{1D495}\u{1D496}\u{1D497}\u{1D498}\u{1D499}\u{1D49A}\u{1D49B}"
);

// ----- Sans-serif variants -----
const sansBold = buildMap(
  LATIN + DIGITS,
  "\u{1D5D4}\u{1D5D5}\u{1D5D6}\u{1D5D7}\u{1D5D8}\u{1D5D9}\u{1D5DA}\u{1D5DB}\u{1D5DC}\u{1D5DD}\u{1D5DE}\u{1D5DF}\u{1D5E0}\u{1D5E1}\u{1D5E2}\u{1D5E3}\u{1D5E4}\u{1D5E5}\u{1D5E6}\u{1D5E7}\u{1D5E8}\u{1D5E9}\u{1D5EA}\u{1D5EB}\u{1D5EC}\u{1D5ED}" +
  "\u{1D5EE}\u{1D5EF}\u{1D5F0}\u{1D5F1}\u{1D5F2}\u{1D5F3}\u{1D5F4}\u{1D5F5}\u{1D5F6}\u{1D5F7}\u{1D5F8}\u{1D5F9}\u{1D5FA}\u{1D5FB}\u{1D5FC}\u{1D5FD}\u{1D5FE}\u{1D5FF}\u{1D600}\u{1D601}\u{1D602}\u{1D603}\u{1D604}\u{1D605}\u{1D606}\u{1D607}" +
  "\u{1D7EC}\u{1D7ED}\u{1D7EE}\u{1D7EF}\u{1D7F0}\u{1D7F1}\u{1D7F2}\u{1D7F3}\u{1D7F4}\u{1D7F5}"
);

const sansItalic = buildMap(
  LATIN,
  "\u{1D608}\u{1D609}\u{1D60A}\u{1D60B}\u{1D60C}\u{1D60D}\u{1D60E}\u{1D60F}\u{1D610}\u{1D611}\u{1D612}\u{1D613}\u{1D614}\u{1D615}\u{1D616}\u{1D617}\u{1D618}\u{1D619}\u{1D61A}\u{1D61B}\u{1D61C}\u{1D61D}\u{1D61E}\u{1D61F}\u{1D620}\u{1D621}" +
  "\u{1D622}\u{1D623}\u{1D624}\u{1D625}\u{1D626}\u{1D627}\u{1D628}\u{1D629}\u{1D62A}\u{1D62B}\u{1D62C}\u{1D62D}\u{1D62E}\u{1D62F}\u{1D630}\u{1D631}\u{1D632}\u{1D633}\u{1D634}\u{1D635}\u{1D636}\u{1D637}\u{1D638}\u{1D639}\u{1D63A}\u{1D63B}"
);

const sansBoldItalic = buildMap(
  LATIN,
  "\u{1D63C}\u{1D63D}\u{1D63E}\u{1D63F}\u{1D640}\u{1D641}\u{1D642}\u{1D643}\u{1D644}\u{1D645}\u{1D646}\u{1D647}\u{1D648}\u{1D649}\u{1D64A}\u{1D64B}\u{1D64C}\u{1D64D}\u{1D64E}\u{1D64F}\u{1D650}\u{1D651}\u{1D652}\u{1D653}\u{1D654}\u{1D655}" +
  "\u{1D656}\u{1D657}\u{1D658}\u{1D659}\u{1D65A}\u{1D65B}\u{1D65C}\u{1D65D}\u{1D65E}\u{1D65F}\u{1D660}\u{1D661}\u{1D662}\u{1D663}\u{1D664}\u{1D665}\u{1D666}\u{1D667}\u{1D668}\u{1D669}\u{1D66A}\u{1D66B}\u{1D66C}\u{1D66D}\u{1D66E}\u{1D66F}"
);

// ----- Outline / double-struck -----
const doubleStruck = buildMap(
  LATIN + DIGITS,
  "\u{1D538}\u{1D539}\u{2102}\u{1D53B}\u{1D53C}\u{1D53D}\u{1D53E}\u{210D}\u{1D540}\u{1D541}\u{1D542}\u{1D543}\u{1D544}\u{2115}\u{1D546}\u{2119}\u{211A}\u{211D}\u{1D54A}\u{1D54B}\u{1D54C}\u{1D54D}\u{1D54E}\u{1D54F}\u{1D550}\u{2124}" +
  "\u{1D552}\u{1D553}\u{1D554}\u{1D555}\u{1D556}\u{1D557}\u{1D558}\u{1D559}\u{1D55A}\u{1D55B}\u{1D55C}\u{1D55D}\u{1D55E}\u{1D55F}\u{1D560}\u{1D561}\u{1D562}\u{1D563}\u{1D564}\u{1D565}\u{1D566}\u{1D567}\u{1D568}\u{1D569}\u{1D56A}\u{1D56B}" +
  "\u{1D7D8}\u{1D7D9}\u{1D7DA}\u{1D7DB}\u{1D7DC}\u{1D7DD}\u{1D7DE}\u{1D7DF}\u{1D7E0}\u{1D7E1}"
);

// ----- Monospace -----
const monospace = buildMap(
  LATIN + DIGITS,
  "\u{1D670}\u{1D671}\u{1D672}\u{1D673}\u{1D674}\u{1D675}\u{1D676}\u{1D677}\u{1D678}\u{1D679}\u{1D67A}\u{1D67B}\u{1D67C}\u{1D67D}\u{1D67E}\u{1D67F}\u{1D680}\u{1D681}\u{1D682}\u{1D683}\u{1D684}\u{1D685}\u{1D686}\u{1D687}\u{1D688}\u{1D689}" +
  "\u{1D68A}\u{1D68B}\u{1D68C}\u{1D68D}\u{1D68E}\u{1D68F}\u{1D690}\u{1D691}\u{1D692}\u{1D693}\u{1D694}\u{1D695}\u{1D696}\u{1D697}\u{1D698}\u{1D699}\u{1D69A}\u{1D69B}\u{1D69C}\u{1D69D}\u{1D69E}\u{1D69F}\u{1D6A0}\u{1D6A1}\u{1D6A2}\u{1D6A3}" +
  "\u{1D7F6}\u{1D7F7}\u{1D7F8}\u{1D7F9}\u{1D7FA}\u{1D7FB}\u{1D7FC}\u{1D7FD}\u{1D7FE}\u{1D7FF}"
);

// ----- Bubble (circled) -----
const bubble = buildMap(
  UPPER + LOWER + DIGITS,
  "\u{24B6}\u{24B7}\u{24B8}\u{24B9}\u{24BA}\u{24BB}\u{24BC}\u{24BD}\u{24BE}\u{24BF}\u{24C0}\u{24C1}\u{24C2}\u{24C3}\u{24C4}\u{24C5}\u{24C6}\u{24C7}\u{24C8}\u{24C9}\u{24CA}\u{24CB}\u{24CC}\u{24CD}\u{24CE}\u{24CF}" +
  "\u{24D0}\u{24D1}\u{24D2}\u{24D3}\u{24D4}\u{24D5}\u{24D6}\u{24D7}\u{24D8}\u{24D9}\u{24DA}\u{24DB}\u{24DC}\u{24DD}\u{24DE}\u{24DF}\u{24E0}\u{24E1}\u{24E2}\u{24E3}\u{24E4}\u{24E5}\u{24E6}\u{24E7}\u{24E8}\u{24E9}" +
  "\u{24EA}\u{2460}\u{2461}\u{2462}\u{2463}\u{2464}\u{2465}\u{2466}\u{2467}\u{2468}"
);

const bubbleFilled = buildMap(
  UPPER + LOWER + DIGITS,
  "\u{1F150}\u{1F151}\u{1F152}\u{1F153}\u{1F154}\u{1F155}\u{1F156}\u{1F157}\u{1F158}\u{1F159}\u{1F15A}\u{1F15B}\u{1F15C}\u{1F15D}\u{1F15E}\u{1F15F}\u{1F160}\u{1F161}\u{1F162}\u{1F163}\u{1F164}\u{1F165}\u{1F166}\u{1F167}\u{1F168}\u{1F169}" +
  "\u{1F150}\u{1F151}\u{1F152}\u{1F153}\u{1F154}\u{1F155}\u{1F156}\u{1F157}\u{1F158}\u{1F159}\u{1F15A}\u{1F15B}\u{1F15C}\u{1F15D}\u{1F15E}\u{1F15F}\u{1F160}\u{1F161}\u{1F162}\u{1F163}\u{1F164}\u{1F165}\u{1F166}\u{1F167}\u{1F168}\u{1F169}" +
  "\u{24FF}\u{2776}\u{2777}\u{2778}\u{2779}\u{277A}\u{277B}\u{277C}\u{277D}\u{277E}"
);

// ----- Square (boxed) -----
const squared = buildMap(
  UPPER + LOWER,
  "\u{1F130}\u{1F131}\u{1F132}\u{1F133}\u{1F134}\u{1F135}\u{1F136}\u{1F137}\u{1F138}\u{1F139}\u{1F13A}\u{1F13B}\u{1F13C}\u{1F13D}\u{1F13E}\u{1F13F}\u{1F140}\u{1F141}\u{1F142}\u{1F143}\u{1F144}\u{1F145}\u{1F146}\u{1F147}\u{1F148}\u{1F149}" +
  "\u{1F130}\u{1F131}\u{1F132}\u{1F133}\u{1F134}\u{1F135}\u{1F136}\u{1F137}\u{1F138}\u{1F139}\u{1F13A}\u{1F13B}\u{1F13C}\u{1F13D}\u{1F13E}\u{1F13F}\u{1F140}\u{1F141}\u{1F142}\u{1F143}\u{1F144}\u{1F145}\u{1F146}\u{1F147}\u{1F148}\u{1F149}"
);

// ----- Full-width (Big) -----
const fullwidth = buildMap(
  UPPER + LOWER + DIGITS,
  "\u{FF21}\u{FF22}\u{FF23}\u{FF24}\u{FF25}\u{FF26}\u{FF27}\u{FF28}\u{FF29}\u{FF2A}\u{FF2B}\u{FF2C}\u{FF2D}\u{FF2E}\u{FF2F}\u{FF30}\u{FF31}\u{FF32}\u{FF33}\u{FF34}\u{FF35}\u{FF36}\u{FF37}\u{FF38}\u{FF39}\u{FF3A}" +
  "\u{FF41}\u{FF42}\u{FF43}\u{FF44}\u{FF45}\u{FF46}\u{FF47}\u{FF48}\u{FF49}\u{FF4A}\u{FF4B}\u{FF4C}\u{FF4D}\u{FF4E}\u{FF4F}\u{FF50}\u{FF51}\u{FF52}\u{FF53}\u{FF54}\u{FF55}\u{FF56}\u{FF57}\u{FF58}\u{FF59}\u{FF5A}" +
  "\u{FF10}\u{FF11}\u{FF12}\u{FF13}\u{FF14}\u{FF15}\u{FF16}\u{FF17}\u{FF18}\u{FF19}"
);

// ----- Small caps -----
const smallCapsMap: CharMap = {
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ",
  j: "ᴊ", k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ",
  s: "s", t: "ᴛ", u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
};
function smallCaps(text: string): string {
  let out = "";
  for (const ch of text) {
    const lo = ch.toLowerCase();
    out += smallCapsMap[lo] ?? ch;
  }
  return out;
}

// ----- Tiny (superscript / subscript-ish) -----
const superscriptMap: CharMap = {
  a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ", i: "ⁱ",
  j: "ʲ", k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ", q: "۹", r: "ʳ",
  s: "ˢ", t: "ᵗ", u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ", y: "ʸ", z: "ᶻ",
  "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶",
  "7": "⁷", "8": "⁸", "9": "⁹",
};
function superscript(text: string): string {
  let out = "";
  for (const ch of text) out += superscriptMap[ch.toLowerCase()] ?? ch;
  return out;
}

// ----- Upside down -----
const upsideDownMap: CharMap = {
  a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ", h: "ɥ", i: "ı",
  j: "ɾ", k: "ʞ", l: "l", m: "ɯ", n: "u", o: "o", p: "d", q: "b", r: "ɹ",
  s: "s", t: "ʇ", u: "n", v: "ʌ", w: "ʍ", x: "x", y: "ʎ", z: "z",
  A: "∀", B: "B", C: "Ɔ", D: "D", E: "Ǝ", F: "Ⅎ", G: "פ", H: "H", I: "I",
  J: "ſ", K: "K", L: "˥", M: "W", N: "N", O: "O", P: "Ԁ", Q: "Q", R: "R",
  S: "S", T: "⊥", U: "∩", V: "Λ", W: "M", X: "X", Y: "⅄", Z: "Z",
  "0": "0", "1": "Ɩ", "2": "ᄅ", "3": "Ɛ", "4": "ㄣ", "5": "ϛ", "6": "9",
  "7": "ㄥ", "8": "8", "9": "6",
  ".": "˙", ",": "'", "?": "¿", "!": "¡", "'": ",", '"': ",,", "(": ")",
  ")": "(", "[": "]", "]": "[", "{": "}", "}": "{", "<": ">", ">": "<",
  "&": "⅋", "_": "‾",
};
function upsideDown(text: string): string {
  const out: string[] = [];
  for (const ch of text) out.push(upsideDownMap[ch] ?? ch);
  return out.reverse().join("");
}

// ----- Strikethrough / underline / slash / tilde -----
function combine(text: string, combiner: string): string {
  let out = "";
  for (const ch of text) {
    out += ch;
    if (ch !== " " && ch !== "\n") out += combiner;
  }
  return out;
}
const strikethrough = (t: string) => combine(t, "̶");
const underline = (t: string) => combine(t, "̲");
const doubleUnderline = (t: string) => combine(t, "̳");
const slashThrough = (t: string) => combine(t, "̷");

// ----- Zalgo / glitch / cursed -----
const ZALGO_UP = [
  "̍","̎","̄","̅","̿","̑","̆","̐","͒",
  "͗","͑","̇","̈","̊","͂","̓","̈́","͊",
  "͋","͌","̃","̂","̌","͐","̀","́","̋",
  "̏","̒","̓","̔","̽","̉","ͣ","ͤ","ͥ",
  "ͦ","ͧ","ͨ","ͩ","ͪ","ͫ","ͬ","ͭ","ͮ",
  "ͯ","̾","͛","͆","̚",
];
const ZALGO_MID = [
  "̕","̛","̀","́","͘","̡","̢","̧","̨",
  "̴","̵","̶","͏","͜","͝","͞","͟","͠",
  "͢","̸","̷","͡","҉",
];
const ZALGO_DOWN = [
  "̖","̗","̘","̙","̜","̝","̞","̟","̠",
  "̤","̥","̦","̩","̪","̫","̬","̭","̮",
  "̯","̰","̱","̲","̳","̹","̺","̻","̼",
  "ͅ","͇","͈","͉","͍","͎","͓","͔","͕",
  "͖","͙","͚","̣",
];
function zalgo(text: string, intensity: number): string {
  // intensity: 0..1
  // deterministic per-char so re-renders don't flicker too much
  let out = "";
  let seed = 17;
  function rand() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  }
  for (const ch of text) {
    out += ch;
    if (ch === " " || ch === "\n") continue;
    const n = Math.max(1, Math.floor(intensity * 8));
    for (let i = 0; i < n; i++) out += ZALGO_UP[Math.floor(rand() * ZALGO_UP.length)];
    for (let i = 0; i < Math.floor(intensity * 3); i++) out += ZALGO_MID[Math.floor(rand() * ZALGO_MID.length)];
    for (let i = 0; i < n; i++) out += ZALGO_DOWN[Math.floor(rand() * ZALGO_DOWN.length)];
  }
  return out;
}

// ----- Spaced / wide -----
function spaced(text: string): string {
  return [...text].join(" ");
}

// ----- Mirror / reverse -----
function reverse(text: string): string {
  return [...text].reverse().join("");
}

// ----- Weird mix (random) -----
function weirdMix(text: string): string {
  const pools = [fraktur, script, doubleStruck, bubble, squared, fullwidth];
  let seed = 42;
  function rand() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
  let out = "";
  for (const ch of text) {
    const pool = pools[Math.floor(rand() * pools.length)];
    out += pool[ch] ?? ch;
  }
  return out;
}

// ----- Style registry -----
export type FontStyle = {
  id: string;
  name: string;
  transform: (s: string) => string;
};

export const ALL_STYLES: Record<string, FontStyle> = {
  fraktur: { id: "fraktur", name: "Old English", transform: (s) => applyMap(s, fraktur) },
  "fraktur-bold": { id: "fraktur-bold", name: "Old English Bold", transform: (s) => applyMap(s, frakturBold) },
  script: { id: "script", name: "Cursive Script", transform: (s) => applyMap(s, script) },
  "script-bold": { id: "script-bold", name: "Cursive Bold", transform: (s) => applyMap(s, scriptBold) },
  "bold-serif": { id: "bold-serif", name: "Bold Serif", transform: (s) => applyMap(s, boldSerif) },
  "italic-serif": { id: "italic-serif", name: "Italic Serif", transform: (s) => applyMap(s, italicSerif) },
  "bold-italic-serif": { id: "bold-italic-serif", name: "Bold Italic Serif", transform: (s) => applyMap(s, boldItalicSerif) },
  "sans-bold": { id: "sans-bold", name: "Sans Bold", transform: (s) => applyMap(s, sansBold) },
  "sans-italic": { id: "sans-italic", name: "Sans Italic", transform: (s) => applyMap(s, sansItalic) },
  "sans-bold-italic": { id: "sans-bold-italic", name: "Sans Bold Italic", transform: (s) => applyMap(s, sansBoldItalic) },
  "double-struck": { id: "double-struck", name: "Outline", transform: (s) => applyMap(s, doubleStruck) },
  monospace: { id: "monospace", name: "Monospace", transform: (s) => applyMap(s, monospace) },
  bubble: { id: "bubble", name: "Bubble", transform: (s) => applyMap(s, bubble) },
  "bubble-filled": { id: "bubble-filled", name: "Bubble Filled", transform: (s) => applyMap(s, bubbleFilled) },
  squared: { id: "squared", name: "Squared", transform: (s) => applyMap(s, squared) },
  fullwidth: { id: "fullwidth", name: "Big (Full Width)", transform: (s) => applyMap(s, fullwidth) },
  "small-caps": { id: "small-caps", name: "Small Caps", transform: smallCaps },
  superscript: { id: "superscript", name: "Tiny", transform: superscript },
  "upside-down": { id: "upside-down", name: "Upside Down", transform: upsideDown },
  strikethrough: { id: "strikethrough", name: "Strikethrough", transform: strikethrough },
  underline: { id: "underline", name: "Underline", transform: underline },
  "double-underline": { id: "double-underline", name: "Double Underline", transform: doubleUnderline },
  "slash-through": { id: "slash-through", name: "Slashed", transform: slashThrough },
  "zalgo-soft": { id: "zalgo-soft", name: "Glitch (soft)", transform: (s) => zalgo(s, 0.4) },
  zalgo: { id: "zalgo", name: "Zalgo", transform: (s) => zalgo(s, 1) },
  "zalgo-extreme": { id: "zalgo-extreme", name: "Cursed", transform: (s) => zalgo(s, 1.6) },
  spaced: { id: "spaced", name: "Spaced", transform: spaced },
  reverse: { id: "reverse", name: "Reverse", transform: reverse },
  weird: { id: "weird", name: "Weird Mix", transform: weirdMix },
};

export function pickStyles(ids: string[]): FontStyle[] {
  return ids.map((id) => ALL_STYLES[id]).filter(Boolean);
}
