import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL after the Nov 1 removal cost its
// Bing traffic. Output comes from the fixed dictionary in lib/translators.ts.
const page: PageContent = {
  slug: "pirate-translator",
  title: "Pirate Translator – Free English to Pirate Speak",
  description:
    "Pirate translator: about 60 words and 7 phrases swapped for pirate slang (hello → ahoy, my friends → me hearties). Type, copy, paste. Free.",
  h1: "Pirate Translator",
  crumb: "Pirate Translator",
  intro:
    "This pirate translator rewrites ordinary English in pirate speak by swapping everyday words for their stage-pirate versions, so \"hello my friends\" comes out as \"ahoy me hearties\". Use it as an English to pirate translator for party invitations, a captain's role in a school play, or a Talk Like a Pirate Day post. It follows a fixed word list rather than guessing, which means the same sentence always gives the same result and any word it does not know is left as you typed it. Three versions appear below: plain, bold blackletter between skulls, and an all-caps shout.",
  tool: {
    styles: ["pirate", "pirate-bold-fraktur", "pirate-caps"],
    sample: "Hello my friends, are you looking for the treasure?",
    placeholder: "Type a sentence in plain English…",
    presets: [
      "Hello my friends, are you looking for the treasure?",
      "I am going to the kitchen for a drink",
      "Excuse me captain, where is the bathroom?",
      "Goodbye and happy birthday",
    ],
  },
  stylesHeading: "Your Text in Pirate Speak",
  howTo: {
    heading: "How to talk like a pirate with this translator",
    steps: [
      ["Write plain English", "Short, chatty sentences give the most swaps: greetings, you and your, money, food, drink and the sea."],
      ["Read the result", "Check that the swaps make sense in your sentence. A few are blunt (every \"the\" becomes th'), so edit by hand if needed."],
      ["Copy and paste", "Press Copy on the plain, skull-framed or shouted version and paste it into your message, card or caption."],
    ],
  },
  sections: [
    {
      h2: "Pirate words list: what the translator changes",
      blocks: [
        { p: "These are the main swaps in the dictionary. Phrases are replaced first, then single words, and capital letters are carried over, so Hello becomes Ahoy and HELLO becomes AHOY." },
        {
          table: {
            head: ["You type", "Pirate version"],
            rows: [
              ["hello, hi", "ahoy"],
              ["hey, stop", "avast"],
              ["yes / no", "aye / nay"],
              ["my", "me"],
              ["you / your", "ye / yer"],
              ["is, are, am", "be"],
              ["I am / you are", "I be / ye be"],
              ["how are you", "how be ye farin'"],
              ["my friend / my friends", "me hearty / me hearties"],
              ["friend / buddy", "matey / bucko"],
              ["man / boy / girl", "scallywag / lad / lass"],
              ["boss, captain", "cap'n"],
              ["money, gold", "doubloons"],
              ["treasure, cash", "booty"],
              ["drink, beer", "grog"],
              ["food / kitchen", "grub / galley"],
              ["steal / take", "plunder / pillage"],
              ["sea, ocean", "briny deep"],
              ["flag", "Jolly Roger"],
              ["wow", "shiver me timbers"],
              ["goodbye, bye", "fair winds"],
              ["the bathroom", "the head (shown as th' head)"],
              ["go away", "walk the plank (shown as walk th' plank)"],
              ["excuse me", "arrr"],
              ["the / of / for / to / and", "th' / o' / fer / t' / an'"],
              ["-ing at the end of longer words", "-in' (going → goin')"],
            ],
          },
        },
        { p: "The -ing rule only fires on words longer than four letters, so sing and king stay as they are while sailing becomes sailin'. Names, numbers and anything not in the list pass through untouched." },
      ],
    },
    {
      h2: "1. How do I translate English to pirate speak for an invitation?",
      blocks: [
        { p: "Write the invitation plainly first, then paste one line at a time. Greetings, you and your, and food and drink words carry most of the flavor: \"You are invited to my party, there will be food and drinks\" turns into \"Ye be invited t' me party, thar will be grub an' drinks\". Notice that drinks stayed put: the list holds drink and beer, not every plural. Add a word by hand where the translator misses one, and keep dates, times and addresses in plain English so guests can read them." },
        { p: "The skull version sets the result in bold blackletter between ☠ marks for a heading, and Pirate Shout capitalizes everything and adds \", ARRR!\" at the end, which suits a single short line better than a paragraph." },
      ],
    },
    {
      h2: "2. Where does the pirate accent come from?",
      blocks: [
        { p: "Most of what we now call pirate speak comes from film and fiction rather than from real sailors of the 1700s. The growling \"arr\" is usually traced to Robert Newton's Long John Silver in the 1950 film of Treasure Island, played with the accent of England's West Country, and it spread through later pirate films and parodies. Real seamen did use words like aye, avast and matey, but historical records of how pirates spoke are thin, so treat this as costume language. The [Wikipedia article on Talk Like a Pirate Day](https://en.wikipedia.org/wiki/International_Talk_Like_a_Pirate_Day), held every September 19, covers the modern custom." },
      ],
    },
  ],
  built:
    "A fixed dictionary of about 60 words and 7 phrases, applied phrase-first and then word by word, with case kept; words over four letters ending in -ing become -in'. The skull style then maps letters to Unicode Mathematical Bold Fraktur (U+1D56C–U+1D59F) and adds ☠ (U+2620).",
  related: {
    heading: "More text translators",
    hrefs: ["/medieval-translator", "/hieroglyphics-translator", "/runic-translator", "/font-generator/fun", "/font-generator/ye-old-english"],
  },
  faq: [
    { q: "How do you say hello in pirate?", a: "Ahoy. The translator also turns hey into avast, which is really a sailor's order to stop, so use ahoy if you mean a greeting." },
    { q: "What does matey mean?", a: "Friend or shipmate. The translator uses it for friend, me hearty for my friend and me hearties for my friends." },
    { q: "Is this a real pirate language translator?", a: "There is no separate pirate language. This swaps English words for nautical slang and stage-pirate phrases, so the result is still English with a costume on." },
    { q: "Why didn't some of my words change?", a: "Only words in the dictionary are swapped. Plurals and rarer words are often missing, so change them yourself; the table above lists what the translator knows." },
    { q: "How do you say goodbye like a pirate?", a: "The translator writes fair winds, short for wishing someone fair winds for their voyage." },
    { q: "What do pirates call money?", a: "Doubloons for money and gold, booty for treasure and cash. A doubloon was a Spanish gold coin." },
    { q: "Can I copy and paste pirate speak?", a: "Yes. Press Copy on any result. It is plain Unicode text, so you can paste it anywhere you can type; whether the blackletter version shows depends on the fonts on the reader's device." },
    { q: "When is Talk Like a Pirate Day?", a: "September 19 each year. It began as a joke between friends and spread online." },
  ],
};

export default page;
