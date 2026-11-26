// Word-level translators for /pirate-translator and /medieval-translator.
// Each is a fixed dictionary plus a few suffix rules, applied word by word so
// the output is deterministic and renders on the server.

type Dict = Record<string, string>;

function keepCase(src: string, out: string) {
  if (src === src.toUpperCase() && src.length > 1) return out.toUpperCase();
  if (src[0] === src[0].toUpperCase()) return out[0].toUpperCase() + out.slice(1);
  return out;
}

/** Capitalise a phrase replacement only at the start of a sentence ("I think" mid-sentence -> "methinks"). */
function phraseCase(m: string, rep: string, offset: number, whole: string) {
  const sentenceStart = offset === 0 || /[.!?]\s*$/.test(whole.slice(0, offset));
  if (m === m.toUpperCase() && m.length > 1 && /[A-Z]{2}/.test(m)) return rep.toUpperCase();
  return sentenceStart && m[0] === m[0].toUpperCase() ? rep[0].toUpperCase() + rep.slice(1) : rep;
}

function translator(phrases: [RegExp, string][], words: Dict, suffix?: (w: string) => string | undefined) {
  return (s: string) => {
    let t = s;
    for (const [re, rep] of phrases) t = t.replace(re, (m, ...rest) => phraseCase(m, rep, rest[rest.length - 2] as number, rest[rest.length - 1] as string));
    return t.replace(/[A-Za-z']+/g, (w) => {
      const lw = w.toLowerCase();
      const hit = words[lw] ?? suffix?.(lw);
      return hit ? keepCase(w, hit) : w;
    });
  };
}

// ---------- pirate ----------
const PIRATE_PHRASES: [RegExp, string][] = [
  [/\bexcuse me\b/gi, "arrr"],
  [/\bmy friends\b/gi, "me hearties"],
  [/\bmy friend\b/gi, "me hearty"],
  [/\bhow are you\b/gi, "how be ye farin'"],
  [/\bi am\b/gi, "I be"],
  [/\byou are\b/gi, "ye be"],
  [/\bthe bathroom\b/gi, "the head"],
  [/\bgo away\b/gi, "walk the plank"],
];
const PIRATE: Dict = {
  hello: "ahoy", hi: "ahoy", hey: "avast", yes: "aye", yeah: "aye", no: "nay",
  my: "me", you: "ye", your: "yer", yours: "yers", is: "be", are: "be", am: "be",
  friend: "matey", friends: "mateys", buddy: "bucko", man: "scallywag", boy: "lad", girl: "lass",
  stop: "avast", money: "doubloons", cash: "booty", treasure: "booty", gold: "doubloons",
  boss: "cap'n", captain: "cap'n", sir: "matey", ma: "me", the: "th'", of: "o'", for: "fer",
  to: "t'", stupid: "addled", wow: "shiver me timbers", drink: "grog", beer: "grog",
  rum: "rum", food: "grub", eat: "plunder", steal: "plunder", take: "pillage", kitchen: "galley",
  ship: "vessel", boat: "ship", where: "whar", there: "thar", here: "'ere",
  old: "ol'", and: "an'", "isn't": "be not", "don't": "dern't", flag: "Jolly Roger",
  look: "spy", see: "spy", sea: "briny deep", ocean: "briny deep", quickly: "smartly",
  goodbye: "fair winds", bye: "fair winds", rich: "flush with doubloons", happy: "jolly",
};
function pirateSuffix(w: string) {
  if (w.length > 4 && w.endsWith("ing")) return w.slice(0, -1) + "'";
}
export const toPirate = translator(PIRATE_PHRASES, PIRATE, pirateSuffix);

// ---------- medieval / Early Modern English ----------
// "Medieval" in the popular sense: the thee/thou register people know from the
// King James Bible and Shakespeare (Early Modern English, c. 1500–1700).
const MEDIEVAL_PHRASES: [RegExp, string][] = [
  [/\bdo you have\b/gi, "hast thou"],
  [/\bdo you\b/gi, "dost thou"],
  [/\blook at\b/gi, "behold"],
  [/\bit is\b/gi, "'tis"],
  [/\bvery cool\b/gi, "most fine"],
  [/\byou are\b/gi, "thou art"],
  // "you" as the subject (sentence start or after a conjunction) is "thou"; elsewhere "thee".
  [/(?<=^|[.!?]\s+|\b(?:and|but|if|when|that|so)\s+)you\b(?!\s+(?:are|have|will))/gi, "thou"],
  [/\bare you\b/gi, "art thou"],
  [/\byou have\b/gi, "thou hast"],
  [/\bhave you\b/gi, "hast thou"],
  [/\byou will\b/gi, "thou wilt"],
  [/\bdoes it\b/gi, "doth it"],
  [/\bi think\b/gi, "methinks"],
  [/\bgood morning\b/gi, "good morrow"],
  [/\bthank you\b/gi, "I thank thee"],
  [/\bgoodbye\b/gi, "fare thee well"],
];
const MEDIEVAL: Dict = {
  you: "thee", your: "thy", yours: "thine", yourself: "thyself", are: "art",
  hello: "hail", hi: "well met", yes: "aye", no: "nay", maybe: "perchance", perhaps: "mayhap",
  before: "ere", often: "oft", soon: "anon", always: "ever", nothing: "naught", anything: "aught",
  why: "wherefore", where: "whither", here: "hither", there: "thither", "it's": "'tis",
  does: "doth", has: "hath", friend: "good fellow", friends: "good fellows",
  "don't": "do not", "can't": "cannot", "won't": "will not", very: "most", really: "verily",
  truly: "forsooth", ok: "very well", okay: "very well", girl: "maiden", boy: "lad",
  woman: "lady", man: "sirrah", king: "liege", money: "coin", bathroom: "privy", party: "feast",
  drink: "quaff", beer: "ale", stupid: "witless", crazy: "mad", awesome: "wondrous",
  cool: "fine", wow: "zounds", please: "prithee", sorry: "I beg thy pardon", kill: "slay",
  among: "amongst", while: "whilst", listen: "hark", "they're": "they be",
};
export const toMedieval = translator(MEDIEVAL_PHRASES, MEDIEVAL);
