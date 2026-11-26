import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL. The dictionary lives in
// lib/translators.ts; this page describes it as Early Modern English on purpose.
const page: PageContent = {
  slug: "medieval-translator",
  title: "Medieval Translator – Free Modern English to Thee & Thou",
  description:
    "Medieval translator: about 60 words and 11 phrases turned into thee-and-thou English (you are → thou art, please → prithee). Type, copy, paste. Free.",
  h1: "Medieval Translator",
  crumb: "Medieval Translator",
  intro:
    "This medieval translator turns modern English into the old-fashioned \"thee and thou\" English that most people picture when they think of knights and castles, so \"are you coming to the party?\" becomes \"art thou coming to the feast?\". Strictly speaking it is a translator for Early Modern English, the language of Shakespeare and the King James Bible, rather than for the English actually spoken in the Middle Ages; if you searched for an old English translator or a Shakespearean translator, this is the register you were after. Results come in plain text, in Fraktur, and on a scroll with thorn and long s.",
  tool: {
    styles: ["medieval-speech", "medieval-speech-fraktur", "medieval-speech-scroll"],
    sample: "Hello friend, are you coming to the party?",
    placeholder: "Type a sentence in modern English…",
    presets: [
      "Hello friend, are you coming to the party?",
      "Why are you here? Look, the king!",
      "Good morning, how are you?",
      "Thank you and goodbye",
    ],
  },
  stylesHeading: "Your Text in Thee & Thou English",
  howTo: {
    heading: "How to make text sound medieval",
    steps: [
      ["Type modern English", "Questions and greetings change the most, because the dictionary is built around you, are, hello, why, please and thank you."],
      ["Fix the grammar by hand", "The swaps are word by word. Read the result once and adjust anything that sounds off; the table below shows the common fixes."],
      ["Copy a version", "Take the plain version for a message, the Fraktur one for a heading, or the scroll for a title or sign-off."],
    ],
  },
  sections: [
    {
      h2: "Thee and thou word list: what gets swapped",
      blocks: [
        { p: "Phrases are matched first, then single words. Capitals carry over, and words outside the list stay modern." },
        {
          table: {
            head: ["Modern English", "Medieval translator output"],
            rows: [
              ["you are / are you", "thou art / art thou"],
              ["you have / have you", "thou hast / hast thou"],
              ["you will", "thou wilt"],
              ["do you / does it", "dost thou / doth it"],
              ["I think", "methinks"],
              ["good morning", "good morrow"],
              ["thank you", "I thank thee"],
              ["goodbye", "fare thee well"],
              ["you (anywhere else)", "thee"],
              ["your / yours / yourself", "thy / thine / thyself"],
              ["hello / hi", "hail / well met"],
              ["yes / no", "aye / nay"],
              ["maybe / perhaps", "perchance / mayhap"],
              ["why / where / here / there", "wherefore / whither / hither / thither"],
              ["it's", "'tis"],
              ["does / has", "doth / hath"],
              ["before / often / soon", "ere / oft / anon"],
              ["really / truly", "verily / forsooth"],
              ["please / listen / look", "prithee / hark / behold"],
              ["friend / king / money", "good fellow / liege / coin"],
              ["party / drink / beer", "feast / quaff / ale"],
              ["wow / awesome / stupid", "zounds / wondrous / witless"],
              ["while / among", "whilst / amongst"],
            ],
          },
        },
      ],
    },
    {
      h2: "1. Is this a real medieval English translator?",
      blocks: [
        { p: "Not in the historical sense. English from the Middle Ages comes in two very different stages: Old English, spoken until roughly the Norman Conquest of 1066 and written in poems like Beowulf, and Middle English, the language of Chaucer's Canterbury Tales in the late 1300s. Both need real study to read, and a word-swap tool cannot produce either. The thee-and-thou style here is Early Modern English, from about 1500 to 1700, which is easy to read today and has become the popular shorthand for \"medieval\"." },
        { p: "One useful fact for getting it right: thou was the singular, informal \"you\", and you or ye was plural or polite. Thou is the subject (thou art), thee the object (I love thee), and thy or thine the possessive. The translator turns a lone you into thee, which is correct after a verb but wrong at the start of a sentence, so \"you seem tired\" comes out as \"thee seem tired\" and should be fixed to \"thou seemest tired\". Verbs with thou also take -est or -st (thou knowest, thou canst), which the word list does not add. For the history of these forms see Wikipedia's [Thou](https://en.wikipedia.org/wiki/Thou) article." },
      ],
    },
    {
      h2: "2. How do I write a medieval-style message for a fantasy game or faire?",
      blocks: [
        { p: "Keep sentences short and lead with a greeting or an exclamation, since hail, well met, hark, behold and zounds do a lot of work. Run each line through the box, then make two quick checks. First, look for doubled swaps: \"Do you have\" comes out as \"Do thou hast\", which should read \"Hast thou\". Second, look for very becoming most, which can stack awkwardly (\"most most fine\" from \"very cool\")." },
        { p: "For the look as well as the words, the scroll result sets the text in Fraktur, swaps th for the thorn letter þ and uses the long s (ſ) inside words, the way early printers did. To restyle text you have already written, the [medieval font generator](/font-generator/medieval) has more scribal lettering, and the [ye old English](/font-generator/ye-old-english) page explains why \"ye\" is really \"the\" written with a thorn." },
      ],
    },
  ],
  built:
    "A fixed dictionary of about 60 words and 11 phrases, applied phrase-first and then word by word with case kept. The Fraktur results use Unicode Mathematical Fraktur (U+1D504–U+1D537 plus Letterlike forms such as ℌ and ℭ); the scroll adds þ (U+00FE), ſ (U+017F) and the fleurons ☙ ❧.",
  related: {
    heading: "More old-style text tools",
    hrefs: ["/font-generator/medieval", "/font-generator/ye-old-english", "/how-to-write-old-english", "/pirate-translator", "/runic-translator", "/font-generator/old-english"],
  },
  faq: [
    { q: "How do you say hello in medieval English?", a: "Hail or well met are the classic greetings; the translator uses hail for hello and well met for hi. Good morrow is good morning." },
    { q: "What is the difference between thee and thou?", a: "Thou is the subject and thee is the object: thou art kind, but I thank thee. Both are the old singular forms of you." },
    { q: "Does this translate into Old English?", a: "No. Old English, the language of Beowulf, has different words, grammar and letters. This tool gives Shakespeare-era English, which modern readers can follow." },
    { q: "How do you say I love you in medieval?", a: "I love thee. Type \"I love you\" and the translator gives exactly that." },
    { q: "What does prithee mean?", a: "Please. It is a shortened form of \"I pray thee\"." },
    { q: "What does wherefore mean?", a: "Why. \"Wherefore art thou Romeo?\" asks why he is Romeo, not where he is, and the translator uses it for why." },
    { q: "Why do some sentences come out with odd grammar?", a: "The translator swaps words without parsing the sentence, so verb endings and word order stay modern. Edit the result by hand using the thou and thee notes above." },
    { q: "Can I copy and paste the medieval text?", a: "Yes, press Copy on any version. It is plain Unicode text, so you can paste it anywhere you can type; whether the Fraktur letters show depends on the fonts on the reader's device." },
  ],
};

export default page;
