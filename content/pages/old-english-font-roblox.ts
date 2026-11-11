import type { PageContent } from "./types";

const page: PageContent = {
  slug: "old-english-font-roblox",
  title: "Old English Font for Roblox — 10 Styles & Where They Work",
  description:
    "Roblox font copy and paste, honestly: 10 gothic styles, which Roblox fields accept them, why chat often filters them, and free fonts for Studio.",
  h1: "Old English Font for Roblox",
  crumb: "Old English Font for Roblox",
  intro:
    "Copy-paste Old English text has 2 good homes on Roblox and several places where it fails. Usernames only take plain letters, numbers and one underscore, and chat often filters unusual characters. Where it does work is inside the game you build in Roblox Studio and off-platform, on your Discord server, YouTube channel and thumbnails.",
  tool: {
    styles: [
      "bold-fraktur", "fraktur", "gothic-framed", "deco-swords", "deco-crown", "illuminated",
      "fraktur-plain-lower", "frame-corner", "deco-skull", "monogram-framed",
    ],
    sample: "Shadow Keep",
    placeholder: "Game title, group name or clan tag…",
    presets: ["Shadow Keep", "Knights of Ember", "Obby of Doom", "Clan Ravenhold", "Dungeon Quest II"],
    limit: { label: "Roblox display name", max: 20 },
  },
  stylesHeading: "Gothic styles for Roblox projects",
  howTo: {
    heading: "How to get Old English lettering into Roblox",
    steps: [
      ["Decide where it's going", "For your own experience, use a real font in Studio. For a Discord server or video about your game, copy a style from this page."],
      ["Test before you rely on it", "Paste the text where you want it and check how it appears to another account. Roblox's filters change, and what passes today may be replaced with # tomorrow."],
      ["Fall back to an image", "If text gets filtered, make the title an image: export it from the text to image tool and upload it as a decal or GUI image."],
    ],
  },
  sections: [
    {
      h2: "Which Roblox fields accept copy-paste fonts?",
      blocks: [
        {
          table: {
            head: ["Roblox field", "Old English text?", "Notes"],
            rows: [
              ["Username", "No", "3–20 characters: letters, numbers and at most one underscore"],
              ["Display name", "Rarely", "Also short (around 20 characters) with its own character rules; expect styled letters to be rejected"],
              ["In-game chat", "Often filtered", "Unusual characters are commonly blocked or replaced with #"],
              ["Experience and group descriptions", "Sometimes", "May pass or be filtered; check how it shows to other accounts"],
              ["Text inside your own experience", "Yes, with a font", "Set the font on Studio text objects rather than pasting symbols"],
              ["Off-platform (Discord, YouTube)", "Yes", "Paste freely: these apps display the Unicode letters"],
            ],
          },
        },
        { p: "These rules reflect how Roblox behaves at the time of writing and can change without notice. Roblox moderates text for safety, and this site doesn't help anyone get around that; if the filter blocks a style, use a plain name or an image instead." },
      ],
    },
    {
      h2: "How do you use a blackletter font in Roblox Studio?",
      blocks: [
        { p: "Text in your experience, such as a title screen, shop sign or quest banner, comes from text objects like TextLabel. Their font settings let you choose from the font families Roblox offers to creators, and that list can include medieval or gothic-looking options; the exact choices vary over time, so browse what Studio shows you. Real font settings beat pasted symbols because the text stays editable, scales cleanly and can't be swapped for # by the chat filter." },
        { p: "When no built-in family has the look you want, set the words in a free blackletter font outside Roblox, export a PNG with a transparent background from our [text to image tool](/old-english-text-to-image), and upload it as an image. That's how many games get ornate logos." },
      ],
    },
    {
      h2: "Where can you download a Roblox font?",
      blocks: [
        { p: "Roblox's own brand typeface, Builder Sans, arrived with the company's 2022 rebrand and isn't distributed as a free public download, so we don't link to copies. If what you want is a gothic look for thumbnails, icons or merch for your game, the free open-licence fonts on our [Old English fonts](/fonts/old-english) and [fantasy fonts](/fonts/fantasy) pages can be used commercially, including in game art." },
      ],
    },
  ],
  built:
    "Styles are built from Unicode's Mathematical Fraktur and Bold Fraktur letters plus symbols such as ⚔, ♛ and ☠. Whether Roblox shows them depends on its text filters, not on the characters themselves.",
  related: {
    heading: "Gothic text for gamers",
    hrefs: ["/old-english-font-discord", "/old-english-font-youtube", "/old-english-text-to-image", "/medieval-font-generator", "/viking-font-generator", "/gothic-symbols"],
  },
  faq: [
    { q: "Can I copy and paste fonts into Roblox?", a: "Sometimes, but not reliably. Usernames reject them, and chat often filters unusual characters. They work best off-platform and as real fonts inside your own experience." },
    { q: "Why does Roblox turn my fancy text into hashtags?", a: "Roblox's safety filter replaces text it can't check or doesn't allow with # symbols. Styled Unicode letters often trigger it. Use plain text or an image instead." },
    { q: "How many characters can a Roblox display name have?", a: "Display names are short, around 20 characters, and have their own allowed-character rules that change from time to time. Check the current limit in your account settings." },
    { q: "Can I get an Old English Roblox username?", a: "No. Usernames only allow letters, numbers and a single underscore, 3 to 20 characters long." },
    { q: "How do I add a gothic font to my Roblox game?", a: "Pick a font on the text object's font settings in Roblox Studio, or upload the lettering as an image made with a free blackletter font." },
    { q: "Can I download the Roblox font?", a: "Roblox's brand typeface, Builder Sans, isn't a free public download. For gothic lettering, use free open-licence fonts such as UnifrakturCook or Pirata One." },
    { q: "Is there a way to bypass the Roblox chat filter with fonts?", a: "We don't offer one. The filter exists to keep players safe, and trying to evade it can get an account moderated." },
  ],
};

export default page;
