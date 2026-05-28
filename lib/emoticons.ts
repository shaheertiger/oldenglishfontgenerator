export type EmoticonCategory = {
  slug: string;
  label: string;
  keyword: string;
  title: string;
  description: string;
  intro: string;
  about: string;
  emoticons: string[];
};

export const EMOTICON_CATEGORIES: EmoticonCategory[] = [
  {
    slug: "shrug",
    label: "Shrug",
    keyword: "shrug emoticon",
    title: "Shrug Emoticon – Copy & Paste ¯\\_(ツ)_/¯",
    description: "Shrug emoticons (kaomoji) to copy and paste — the classic ¯\\_(ツ)_/¯ and dozens of indifferent, who-knows variants.",
    intro: "The famous shrug and every variation of it — single arm, both arms, with different faces. Click any tile to copy.",
    about: "The shrug — ¯\\_(ツ)_/¯ — became an internet staple as shorthand for indifference, 'who knows,' or 'not my problem.' It is built from a macron, an underscore, a parenthesized katakana tsu (ツ) for the face, and slashes for the arms. Because it uses standard Unicode characters, it pastes cleanly almost anywhere.",
    emoticons: ["¯\\_(ツ)_/¯","¯\\_(シ)_/¯","¯\\_(⊙_ʖ⊙)_/¯","¯\\_(ツ)_/¯ ","┐(ツ)┌","╮(╯_╰)╭","┐(´∀｀)┌","╮(´∀｀)╭","┐(´～｀)┌","╮( ˘ ⌣ ˘ )╭","¯\\(°_o)/¯","乁(ツ)ㄏ","乁( ◔ ౪◔)ㄏ","┐(´д｀)┌","╮(╯▽╰)╭","┐(￣ヘ￣)┌","¯\\_( ͡° ͜ʖ ͡°)_/¯","乁༼☯‿☯✿༽ㄏ","ヘ(´－｀;)ヘ","╮(￣～￣)╭","┐(‘～`;)┌","┐(￣ー￣)┌","¯\\_(´・ω・)_/¯","╮(. ❛ ᴗ ❛.)╭"],
  },
  {
    slug: "blushing",
    label: "Blushing",
    keyword: "blushing emoticon",
    title: "Blushing Emoticon – Copy & Paste (\\u005e\\u005e) Cute Kaomoji",
    description: "Blushing emoticons (kaomoji) to copy and paste — shy, flustered, and bashful Japanese text faces with rosy cheeks.",
    intro: "Shy, flustered, rosy-cheeked kaomoji for when words make you bashful. Click any tile to copy.",
    about: "Blushing kaomoji use symbols like asterisks, parentheses and dashes to suggest red cheeks and a shy expression. They became hugely popular in Japanese message boards and later worldwide for conveying embarrassment, affection, or sweet awkwardness. The cheeks are usually drawn as ///, *, or ♡ on either side of a soft face.",
    emoticons: ["(⁄ ⁄•⁄ω⁄•⁄ ⁄)","(//▽//)","(*/▽＼*)","(*/ω＼*)","(^^*)","(〃▽〃)","( ̄▽ ̄*)ゞ","(⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)","(*ﾉ▽ﾉ)","(*ﾟ∀ﾟ*)","(*≧ω≦*)","(*ﾉωﾉ)","(/。＼)","(„• ֊ •„)","(*^^*)","( 〃▽〃)","(„ಡωಡ„)","(⁄ ⁄•⁄-⁄•⁄ ⁄)","(*/_＼*)","(っ˘ω˘ς )","(*´∀｀*)","(^▽^*)))","( ⁄ ⁄•⁄ ⁄•⁄ ⁄ )","(✿>ω<)"],
  },
  {
    slug: "uwu",
    label: "UwU",
    keyword: "uwu emoticon",
    title: "UwU Emoticon – Copy & Paste UwU OwO Cute Faces",
    description: "UwU and OwO emoticons to copy and paste — soft, smug, cute text faces popular in chat and gaming.",
    intro: "UwU, OwO, and the whole family of soft, smug, cute faces. Click any tile to copy.",
    about: "UwU and OwO are emoticons built from letters rather than symbols: the U or O letters form closed or wide eyes, while w sketches a small mouth or nose. They spread through anime fandoms, furry communities, and gaming chat as a way to signal cuteness, affection, or playful smugness. Endless stylized variants exist with cat ears, paws, and decorations.",
    emoticons: ["UwU","OwO","uwu","owo","°w°"," owo ","UwU~","( ´ ▽ ` )ノ",">w<",":3","x3"," uvu ","(*≧ω≦*)","ʕ•ᴥ•ʔ","( ˘ ³˘)♥","(ᵘʷᵘ)","òwó","ÚwÚ","(◡ ω ◡)","( ͡° ω ͡°)","nyaa~","(=^･ω･^=)","(ↀωↀ)",">~<"],
  },
  {
    slug: "happy",
    label: "Happy",
    keyword: "happy emoticon",
    title: "Happy Emoticon – Copy & Paste (\\u005e_\\u005e) Smiling Kaomoji",
    description: "Happy emoticons (kaomoji) to copy and paste — smiling, cheerful, joyful Japanese text faces.",
    intro: "Smiling, beaming, joyful kaomoji for good news and good moods. Click any tile to copy.",
    about: "Happy kaomoji express joy through upturned eyes (^), wide smiles, and raised arms. Unlike Western emoticons that are read sideways, kaomoji are read upright, so the eyes carry most of the emotion. Smiling faces are the most common and oldest kaomoji, dating back to early 1980s Japanese ASCII art communities.",
    emoticons: ["(^_^)","(^▽^)","(◕‿◕)","(≧▽≦)","ヽ(´▽`)/","(*^▽^*)","(＾ω＾)","ヽ(•‿•)ノ","(◠‿◠)","(´｡• ᵕ •｡`)","(＾▽＾)","\\(^o^)/","(•‿•)","(✿◕‿◕)","( ´ ▽ ` )","(„• ᴗ •„)","(*≧▽≦)","ヽ(＾Д＾)ﾉ","(＾◡＾)","(╹◡╹)","(＾ｖ＾)","(￣▽￣)ノ","(≧◡≦)","☆*:.｡.o(≧▽≦)o.｡.:*☆"],
  },
  {
    slug: "sad",
    label: "Sad",
    keyword: "sad emoticon",
    title: "Sad Emoticon – Copy & Paste (._.) Gloomy Kaomoji",
    description: "Sad emoticons (kaomoji) to copy and paste — gloomy, disappointed, downcast Japanese text faces.",
    intro: "Gloomy, downcast, disappointed kaomoji for low moods and bad news. Click any tile to copy.",
    about: "Sad kaomoji convey sorrow with downturned eyes, dropping shoulders, and shadow marks. They sit a step below crying faces — more melancholy than tearful. Symbols like ; orz and dropped mouths let the face slump on the page without a single tear.",
    emoticons: ["(._.)","(；_；)","(ಥ﹏ಥ)","(╥﹏╥)","(っ˘̩╭╮˘̩)っ","(´；ω；`)","(T_T)","( ; ; )","(ノ_<。)","(ーー゛)","(´・ω・`)","(；へ：)","(◞‸◟)","( ╥ω╥ )","(っ˘̩╮˘̩)っ","orz","_| ̄|○","(´•︵•`)","(◞﹏◟)","(´∩｡• ᵕ •｡∩`)","(ㄒoㄒ)","( πーπ )","(´；д；`)","( ´ ω ` )"],
  },
  {
    slug: "angry",
    label: "Angry",
    keyword: "angry emoticon",
    title: "Angry Emoticon – Copy & Paste (\\u0060\\u30fc\\u00b4) Mad Kaomoji",
    description: "Angry emoticons (kaomoji) to copy and paste — mad, furious, annoyed Japanese text faces.",
    intro: "Mad, furious, fuming kaomoji for when you need to vent. Click any tile to copy.",
    about: "Angry kaomoji use sharp eyebrows (`´), gritted-teeth mouths, and anger-mark symbols (#, 凸) to show rage. Some include a raised fist or steam puffs. The anger vein symbol borrowed from manga is a common touch that instantly reads as 'furious' to anyone familiar with the style.",
    emoticons: ["(╬ Ò﹏Ó)","(>_<)","(︶︹︺)","(`Д´)","ヽ(`Д´)ﾉ","(҂` ﾛ ´)","凸(`0´)凸","(ノಠ益ಠ)ノ彡┻━┻","ಠ_ಠ","(¬_¬)","(；¬_¬)","(╯°□°）╯","(҂｀ﾛ´)凸","ヽ(▼皿▼)ノ","( `ε´ )","(ﾒ｀ﾛ´)/","凸ಠ益ಠ凸","(＃`Д´)","(҂ ‾ ▱ ‾ )","(눈_눈)","ヽ(o`皿′o)ﾉ","(`ヘ´)","(♯`∧´)","凸(￣ヘ￣)"],
  },
  {
    slug: "love",
    label: "Love",
    keyword: "love emoticon",
    title: "Love Emoticon – Copy & Paste (\\u2665\\u2256\\u2665) Heart Kaomoji",
    description: "Love emoticons (kaomoji) to copy and paste — adoring, affectionate, heart-eyed Japanese text faces.",
    intro: "Heart-eyed, adoring, affectionate kaomoji for crushes and sweethearts. Click any tile to copy.",
    about: "Love kaomoji decorate a happy face with hearts (♥), heart-shaped eyes, or hugging arms reaching toward something dear. They are a favorite in messages to partners and friends because the hearts make affection unmistakable. Many include sparkles or are framed by an offering gesture like (づ｡◕‿‿◕｡)づ.",
    emoticons: ["(♥ω♥*)","(｡♥‿♥｡)","(♡°▽°♡)","(◍•ᴗ•◍)❤","( ˘ ³˘)♥","ヽ(♡‿♡)ノ","(づ｡◕‿‿◕｡)づ","(♥▽♥)","(*♡∀♡)","(❤ω❤)","♡＼(￣▽￣)／♡","(´• ω •`) ♡","( ♥д♥)","(♥ﻌ♥)","(✿ ♥‿♥)","( ˘͈ ᵕ ˘͈♡)","乁(♡ ʖ̯ ♡)ㄏ","(/▽＼*)。o○♡","( ◞・౪・)♡","♡( ◡‿◡ )","(♡˙︶˙♡)","(◕‿◕)♡","( ͡♥ ͜ʖ ͡♥)","☆.｡.:*・°☆♥"],
  },
  {
    slug: "crying",
    label: "Crying",
    keyword: "crying emoticon",
    title: "Crying Emoticon – Copy & Paste (\\u3065\\uff61\\u2565\\uff65\\uff65\\uff61\\uff65\\u2565)\\u3065 Tearful Kaomoji",
    description: "Crying emoticons (kaomoji) to copy and paste — sobbing, tearful, weeping Japanese text faces.",
    intro: "Sobbing, weeping, tear-streaming kaomoji for the big emotions. Click any tile to copy.",
    about: "Crying kaomoji push past simple sadness with streaming tears drawn from symbols like ﾟ, ;, and 。. Some are gentle single tears while others are full waterfall sobs. They are used both sincerely and ironically — to express overwhelming joy as often as grief.",
    emoticons: ["(╥﹏╥)","(づ｡◕‿‿◕｡)づ","(ಥ_ಥ)","(っ˘̩╭╮˘̩)っ","。゜゜(´Ｏ`) ゜゜。","(ToT)","(個_個)","(つ﹏⊂)","(；へ：)","ヽ(；▽；)ノ","(:＿;)","(/ˍ・、)","(πーπ)","(ｉДｉ)","。゜(｀Д´)゜。","( ; ω ; )","(╯︵╰,)","(つд⊂)","(´；ω；`)","。＝゜＝。","(;﹏;)","(>﹏<)","｡ﾟ(ﾟ´ω`ﾟ)ﾟ｡","。゜・(つд`。)・゜。"],
  },
  {
    slug: "bear",
    label: "Bear",
    keyword: "bear emoticon",
    title: "Bear Emoticon – Copy & Paste ʕ•ᴥ•ʔ Cute Bear Kaomoji",
    description: "Bear emoticons (kaomoji) to copy and paste — the classic ʕ•ᴥ•ʔ and many cuddly bear text faces.",
    intro: "The classic ʕ•ᴥ•ʔ bear and a whole forest of cuddly variants. Click any tile to copy.",
    about: "The bear kaomoji ʕ•ᴥ•ʔ uses Canadian Aboriginal syllabics (ʕ and ʔ) for the rounded ears and the snout marker ᴥ for the muzzle. It exploded in popularity through chat apps and merchandise. Variants give the bear waving arms, sleepy eyes, or hearts, all built from the same recognizable head shape.",
    emoticons: ["ʕ•ᴥ•ʔ","ʕ •ᴥ•ʔ","ʕっ•ᴥ•ʔっ","ʕ◉ᴥ◉ʔ","ʕ◕ᴥ◕ʔ","ʕ•̀ω•́ʔ","ʕ ﾉ•ᴥ•ʔﾉ","ʕ•ᴥ•ʔ♡","ʕ ·ᴥ·ʔ","ʕノ•ᴥ•ʔノ ︵ ┻━┻","ʕ ᵔᴥᵔ ʔ","ʕ；•`ᴥ•´ʔ","ʕ•̫͡•ʔ","ʕง•ᴥ•ʔง","(ʃƪ˘ﻬ˘)","ʕ￫ᴥ￩ʔ","ʕ ꈍᴥꈍʔ","ʕ•́ᴥ•̀ʔっ","ʕ•ﻌ•ʔ","ʕっ•ᴥ•ʔっ ♡","ʕ•ᴥ-ʔ","ヽʕ •ᴥ•ʔﾉ","ʕノ•ᴥ•ʔノ","ʕ•ᴥ•ʔﾉ♡"],
  },
  {
    slug: "cat",
    label: "Cat",
    keyword: "cat emoticon",
    title: "Cat Emoticon – Copy & Paste (\\uff1d\\u0027\\u00b7\\u03c9\\u00b7\\u0027\\uff1d) Cute Cat Kaomoji",
    description: "Cat emoticons (kaomoji) to copy and paste — whiskered, pointy-eared, playful cat text faces.",
    intro: "Whiskered, pointy-eared, nyaa-ing cat kaomoji. Click any tile to copy.",
    about: "Cat kaomoji draw whiskers and pointed ears with characters like ^, ฅ, and =. The face symbol ω frequently doubles as a tiny cat nose and mouth. They are beloved for playful messages and often paired with 'nyaa' to mimic a meow.",
    emoticons: ["(=^･ω･^=)","(=^‥^=)","(ↀωↀ)","(=｀ω´=)","ฅ(•ㅅ•❀)ฅ","(=^･ｪ･^=)","ﾉ(=ΦωΦ=)","(=ＴェＴ=)","(^・ω・^ )","ฅ(^◕ᴥ◕^)ฅ","(=^-ω-^=)","( =ω= )","(=ↀωↀ=)✧","(^人^)","( ﾐⓛ ﻌ ⓛﾐ)","ヾ(=ΦㅅΦ=)ノ","(=ㅇㅅㅇ=)","ฅ(• ω •)ฅ","(=ＴωＴ=)","( =ＴェＴ=)","ฅ(=ﾟωﾟ=)ฅ","(ﾐΦ ﻌ Φﾐ)","(=ΦㅅΦ=)","(ﾐⓛ ﻌ ⓛﾐ)♡"],
  },
  {
    slug: "table-flip",
    label: "Table Flip",
    keyword: "table flip emoticon",
    title: "Table Flip Emoticon – Copy & Paste (\\u256f\\u00b0\\u25a1\\u00b0\\uff09\\u256f\\ufe35 \\u253b\\u2501\\u253b",
    description: "Table flip emoticons (kaomoji) to copy and paste — the rage classic (╯°□°）╯︵ ┻━┻ and put-it-back variants.",
    intro: "The rage-quit table flip and its 'put the table back' counterparts. Click any tile to copy.",
    about: "The table flip — (╯°□°）╯︵ ┻━┻ — captures a moment of pure frustration: a little figure hurling a table (┻━┻) into the air. It became a meme staple for expressing rage or comedic defeat. The companion ┬─┬ノ( º _ ºノ) shows a calmer figure setting the table back down.",
    emoticons: ["(╯°□°）╯︵ ┻━┻","┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻","(ノಠ益ಠ)ノ彡┻━┻","ヽ(`Д´)ﾉ︵ ┻━┻","(┛◉Д◉)┛彡┻━┻","┬─┬ノ( º _ ºノ)","(╯‵□′)╯︵┴─┴","┻━┻︵ \\(°□°)/ ︵ ┻━┻","ノ┬─┬ノ ︵ ( \\o°o)\\","(╯°Д°）╯︵ /(.□ . \\)","┬──┬ ノ( ゜-゜ノ)","(ノ°益°)ノ彡┻━┻","┻━┻ ヽ(ಠ益ಠ)ﾉ彡┻━┻","(ノ ゜Д゜)ノ ︵ ┻━┻","ヽ( •_)ᕗ ┳━┳","(ノ▼Д▼)ノ彡┻━┻","┬─┬ ノ( ^_^ノ)","(ﾉಥ益ಥ）ﾉ ┻━┻","(╯ರ ~ ರ）╯︵ ┻━┻","┻━┻︵╰(°□°)╯︵┻━┻","(ノ・∀・)ノ︵┻━┻","ヘ(￣ω￣ヘ)","┻━┻ミ\\(≧ﾛ≦\\)","(ノ｀´)ノ ︵┻━┻"],
  },
  {
    slug: "dance",
    label: "Dance",
    keyword: "dance emoticon",
    title: "Dance Emoticon – Copy & Paste \\u30fd(\\u00b4\\u30fc\\uff40)\\u309e Dancing Kaomoji",
    description: "Dance emoticons (kaomoji) to copy and paste — wiggling, grooving, arms-up dancing Japanese text faces.",
    intro: "Wiggling, grooving, arms-flailing dance kaomoji for celebration. Click any tile to copy.",
    about: "Dance kaomoji use raised-arm characters like ヽ ノ ┌ ┘ and swaying notes (♪ ♫) to suggest motion. They are perfect for celebrating wins, good news, or just feeling the music. Many pair the dancing figure with musical notes to make the rhythm explicit.",
    emoticons: ["ヽ(´ー｀)ノ","♪┏(・o･)┛♪","ヽ(•‿•)ノ","┌(ㆆ㉨ㆆ)ʃ","♪┗ ( ・o・) ┓♪","ヽ(⌐■_■)ノ♪♬","┏(＾0＾)┛","└(￣◇￣)┐","ヾ(⌐■_■)ノ♪","(ノ^_^)ノ","┌(★o☆)┘","ヽ(*・ω・)ﾉ","♪♪ヽ(ˇ∀ˇ )ゞ","ヽ(ヅ)ノ","┏(-_-)┛┗(-_- )┓","( ﾉ ﾟｰﾟ)ﾉ","ヽ(o´∀`)ﾉ♪♬","ε=ε=ε=┌(;*´Д`)ﾉ","┌( ಠ_ಠ)┘","＼(^o^)／","♪～(￣ε￣)","ヽ(o☉౪⊙o)ﾉ","┗(＾0＾)┓","ヾ(´〇`)ﾉ♪♪♪"],
  },
];

export const EMOTICON_BY_SLUG: Record<string, EmoticonCategory> = Object.fromEntries(
  EMOTICON_CATEGORIES.map((c) => [c.slug, c])
);
