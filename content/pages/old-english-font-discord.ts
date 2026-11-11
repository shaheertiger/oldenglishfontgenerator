import type { PageContent } from "./types";

const page: PageContent = {
  slug: "old-english-font-discord",
  title: "Old English Discord Name — Gothic Nicknames That Fit",
  description:
    "Old English Discord name ideas: blackletter display names and nicknames with a 32-character counter, plus what Discord usernames allow.",
  h1: "Old English Discord Names",
  crumb: "Old English Discord Names",
  intro:
    "An Old English Discord name gives your profile a sharp gothic look in member lists and chat. Type a name below and every style shows its length against Discord's 32-character limit for display names and server nicknames. The page also explains the difference between those and your username, which plays by stricter rules.",
  tool: {
    styles: ["bold-fraktur", "fraktur", "deco-swords", "deco-crown", "frame-corner", "gothic-framed", "deco-pentagram", "distressed", "frame-white", "deco-bat", "bold-fraktur-small-caps", "illuminated"],
    sample: "Shadowmere",
    placeholder: "Type a display name or nickname…",
    presets: ["Shadowmere", "Lord Vex", "Raven", "The Night Watch", "xKnightx"],
    limit: { label: "Discord name", max: 32 },
  },
  stylesHeading: "Discord name styles",
  howTo: {
    heading: "How to set an Old English name on Discord",
    steps: [
      ["Check the length", "Type your name and look at the counter. Anything red is over 32 and Discord will refuse it."],
      ["Copy your style", "Press Copy on a style that fits."],
      ["Paste it in settings", "For everywhere: User Settings, then Profiles, then Display Name. For one server: open the server menu and choose Edit Per-server Profile to set a nickname."],
    ],
  },
  sections: [
    {
      h2: "Username vs. display name vs. nickname",
      blocks: [
        {
          table: {
            head: ["Name", "Where it shows", "Old English allowed?"],
            rows: [
              ["Username", "Your unique handle, used to add you as a friend", "No: lowercase letters, numbers, periods and underscores only"],
              ["Display name", "Next to your messages in every server, unless you set a nickname", "Yes, up to 32 characters"],
              ["Server nickname", "Only in one server, overriding your display name there", "Yes, up to 32 characters, if the server lets members change nicknames"],
            ],
          },
        },
        { p: "So the usual setup is a plain username your friends can type, and a blackletter display name or nickname that everyone sees in chat." },
      ],
    },
    {
      h2: "Keeping it mention-friendly",
      blocks: [
        { p: "When someone types @ to mention you, Discord searches your username and display name. Nobody can type Fraktur letters on a normal keyboard, so they will find you by your username instead, which is one more reason to keep it readable. Some server moderators also ask for nicknames that start with a normal letter so member lists stay sortable. If a server has that rule, try the Illuminated Initials style with a plain first word, or keep a plain prefix before the styled part." },
      ],
    },
    {
      h2: "Fitting a name in 32 characters",
      blocks: [
        { p: "Discord counts length differently from what you might expect, and styled letters can use more of the limit than plain ones. Frames and emoji also add characters. If you're close to 32, drop the symbols on one side, remove spaces or pick a style without decoration." },
      ],
    },
  ],
  built:
    "Display-name styles use Mathematical Fraktur and Bold Fraktur. Symbol frames add characters such as ⚔ (U+2694) and ♛ (U+265B), and the worn style adds combining marks, which count toward the limit even though they take up no space. The counter shows UTF-16 code units, the stricter of the two common ways to count, so if it fits here it should fit in Discord.",
  related: {
    heading: "More name and profile tools",
    hrefs: ["/gothic-font-generator", "/old-english-name-generator", "/old-english-font-instagram", "/medieval-font-generator", "/old-english-letters", "/fraktur-generator", "/old-english-font-tiktok"],
  },
  faq: [
    { q: "Can my Discord username be in Old English?", a: "No. Usernames only allow lowercase letters, numbers, periods and underscores. Use a display name or server nickname for the styled version." },
    { q: "What is the Discord display name limit?", a: "32 characters, the same as server nicknames. Styled letters may use more of that limit than plain ones." },
    { q: "Can I use Old English text in Discord messages?", a: "Yes. It pastes into messages, channel topics and your About Me. Discord's own markdown can't produce blackletter, so Unicode is the only way." },
    { q: "Why can't I change my nickname in a server?", a: "Server admins can turn off the Change Nickname permission. Ask a moderator or use your global display name instead." },
    { q: "Will bots and mentions still work?", a: "Yes. Mentions and bots rely on your user ID, not the look of your name. People may need your username to find you when typing @." },
  ],
};

export default page;
