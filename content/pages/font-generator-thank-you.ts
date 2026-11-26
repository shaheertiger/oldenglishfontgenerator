import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL. Bing: "thank you font" ~112 impressions
// at about #7; Copilot cites the site for "thank you font", "thank you font
// style" and "thank you written in style". Output: the phrase in many styles.
const page: PageContent = {
  slug: "font-generator/thank-you",
  file: "font-generator-thank-you",
  title: "Thank You Font – 12 Thank You Styles to Copy and Paste",
  description:
    "Thank you font in 12 styles: script, bold, outline, bubble, hearts. Type your thanks once, tap Copy, paste it into a card or reply. Free, no sign-up.",
  h1: "Thank You Font",
  crumb: "Thank You Font",
  intro:
    "A thank you font is a decorative lettering style for the words \"thank you\"; this page sets your message in 12 of them at once, ready to copy as text. Pick a thank you font style to match the mood: flowing script for a warm note, bold serif for a headline, bubble or hearts for something playful. Seeing thank you in different fonts side by side makes the choice quick, and you can swap the phrase for \"Thanks!\", \"Merci\" or a longer line with a name in it.",
  tool: {
    styles: [
      "script", "bold-script", "script-spaced", "bold-italic-serif", "varsity-outline", "u-bubble",
      "u-love-parens", "deco-heart", "u-superscript", "u-double-underline", "typewriter", "bold-serif",
    ],
    sample: "Thank you",
    placeholder: "Type your thank-you message…",
    presets: ["Thank you", "Thank you so much", "Thanks!", "Merci", "Thank you for everything"],
  },
  stylesHeading: "Thank You in Different Fonts",
  howTo: {
    heading: "How to write thank you in a stylish font",
    steps: [
      ["Pick a phrase", "Tap a preset or type your own words, including a name: \"Thank you, Grandma\" or \"Thanks for coming!\"."],
      ["Choose the mood", "Script reads as personal, Bold Serif as confident, Bubble and Love Parenthesis as light-hearted."],
      ["Copy it", "Tap Copy beside the style and paste the line into your message, caption or card text."],
    ],
  },
  sections: [
    {
      h2: "Ready-made thank you text to copy",
      blocks: [
        { p: "The phrases people ask for most, already converted. Select a cell and copy it, or type your own wording in the box above." },
        {
          table: {
            head: ["Phrase", "Tattoo Script", "Bold Tattoo Script", "Varsity Outline"],
            glyphCols: [1, 2, 3],
            rows: [
              ["Thank you", "𝒯𝒽𝒶𝓃𝓀 𝓎ℴ𝓊", "𝓣𝓱𝓪𝓷𝓴 𝔂𝓸𝓾", "𝕋𝕙𝕒𝕟𝕜 𝕪𝕠𝕦"],
              ["Thank you so much", "𝒯𝒽𝒶𝓃𝓀 𝓎ℴ𝓊 𝓈ℴ 𝓂𝓊𝒸𝒽", "𝓣𝓱𝓪𝓷𝓴 𝔂𝓸𝓾 𝓼𝓸 𝓶𝓾𝓬𝓱", "𝕋𝕙𝕒𝕟𝕜 𝕪𝕠𝕦 𝕤𝕠 𝕞𝕦𝕔𝕙"],
              ["Thanks!", "𝒯𝒽𝒶𝓃𝓀𝓈!", "𝓣𝓱𝓪𝓷𝓴𝓼!", "𝕋𝕙𝕒𝕟𝕜𝕤!"],
              ["Many thanks", "ℳ𝒶𝓃𝓎 𝓉𝒽𝒶𝓃𝓀𝓈", "𝓜𝓪𝓷𝔂 𝓽𝓱𝓪𝓷𝓴𝓼", "𝕄𝕒𝕟𝕪 𝕥𝕙𝕒𝕟𝕜𝕤"],
              ["Thank you for everything", "𝒯𝒽𝒶𝓃𝓀 𝓎ℴ𝓊 𝒻ℴ𝓇 ℯ𝓋ℯ𝓇𝓎𝓉𝒽𝒾𝓃ℊ", "𝓣𝓱𝓪𝓷𝓴 𝔂𝓸𝓾 𝓯𝓸𝓻 𝓮𝓿𝓮𝓻𝔂𝓽𝓱𝓲𝓷𝓰", "𝕋𝕙𝕒𝕟𝕜 𝕪𝕠𝕦 𝕗𝕠𝕣 𝕖𝕧𝕖𝕣𝕪𝕥𝕙𝕚𝕟𝕘"],
              ["Merci (French)", "ℳℯ𝓇𝒸𝒾", "𝓜𝓮𝓻𝓬𝓲", "𝕄𝕖𝕣𝕔𝕚"],
              ["Gracias (Spanish)", "𝒢𝓇𝒶𝒸𝒾𝒶𝓈", "𝓖𝓻𝓪𝓬𝓲𝓪𝓼", "𝔾𝕣𝕒𝕔𝕚𝕒𝕤"],
              ["Danke (German)", "𝒟𝒶𝓃𝓀ℯ", "𝓓𝓪𝓷𝓴𝓮", "𝔻𝕒𝕟𝕜𝕖"],
            ],
          },
        },
      ],
    },
    {
      h2: "1. How do I write thank you in a fancy font?",
      blocks: [
        { p: "Type the words, then copy the row that suits the person you are thanking. A thank-you to a teacher or a client usually looks best in Tattoo Script or Bold Renaissance Italic, which stay readable. For a friend, Love Parenthesis or Gothic Heart ♡ adds a bit of fun. If you only want one fancy word, convert \"Thank\" and leave the rest of the sentence plain; a single styled word draws the eye without making the message hard to read." },
        { p: "Accented letters such as the é in \"Merci beaucoup, René\" have no ready-made script or outline versions in Unicode, so the generator builds them from a styled letter plus a separate combining accent. On some screens that accent can sit a little off-center; check the preview before you send it." },
      ],
    },
    {
      h2: "2. Which thank you font style looks classy?",
      blocks: [
        {
          table: {
            head: ["Style", "Feels", "Use it for"],
            rows: [
              ["Tattoo Script", "Handwritten, formal", "Wedding and gift thank-you notes, a closing line"],
              ["Fine Line Spaced Script", "Light and airy", "A one-line caption under a photo"],
              ["Bold Renaissance Italic", "Polished, slanted", "A thank-you to clients or colleagues"],
              ["Bold Serif", "Plain and strong", "A heading on a thank-you slide or post"],
              ["Double Underline", "Neat, emphatic", "Highlighting \"thank you\" inside a longer message"],
            ],
          },
        },
        { p: "For the classic hand-lettered look, the [calligraphy generator](/font-generator/calligraphy) has more script hands, and the [happy birthday font](/happy-birthday-font) page does the same job for birthday wishes. If you want every single letter of a script alphabet, copy from the chart below." },
        { chart: { styles: ["bold-script", "varsity-outline", "u-bubble"], sets: ["upper", "lower"] } },
      ],
    },
  ],
  built:
    "Script rows use Mathematical Script and Bold Script (U+1D49C–U+1D503), Varsity Outline uses the double-struck letters (U+1D538 onward, with ℂ ℍ ℕ ℙ ℚ ℝ ℤ from Letterlike Symbols), and Bubble uses the circled letters Ⓐ–ⓩ (U+24B6–U+24E9). Love Parenthesis simply puts ordinary brackets around each character.",
  related: {
    heading: "More ways to say it",
    hrefs: ["/happy-birthday-font", "/font-generator/calligraphy", "/font-generator/fancy-writing", "/font-generator/handwriting", "/coquette"],
  },
  faq: [
    { q: "What is the best thank you font?", a: "For a card or a heartfelt reply, a script style such as Tattoo Script. For a heading or slide, Bold Serif. Try your exact words in both before you decide." },
    { q: "How do I copy and paste thank you in a fancy font?", a: "Type \"thank you\" in the box, tap Copy next to the style you like and paste it. The ready-made table above also has common phrases already converted." },
    { q: "Can I write thank you in brown or another color?", a: "No. These are characters, and Unicode characters carry no color; the app you paste into decides the color of the text." },
    { q: "Is there a thank you calligraphy font to copy and paste?", a: "The script rows imitate a calligraphy pen and copy as plain text. For printed cards, install a real calligraphy font so the letters print sharply." },
    { q: "How do I write thank you in a handwriting style?", a: "Copy Tattoo Script or Fine Line Spaced Script. Both are built from script letters that slant and loop like handwriting." },
    { q: "Can I add a name after thank you?", a: "Yes. Type the whole line, for example \"Thank you, Ms. Rivera\", and every style converts it together." },
    { q: "Why do some letters in my thank you message look different?", a: "Script capitals and a few lowercase letters, such as ℯ and ℴ, come from an older Unicode block, so the reader's device may draw them with a slightly different font." },
  ],
};

export default page;
