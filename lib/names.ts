export type NameCategory = {
  slug: string;
  label: string;
  keyword: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  about: { heading: string; body: string }[];
  faq: { q: string; a: string }[];
  stylize: boolean;
  parts: { prefixes: string[]; cores: string[]; suffixes: string[] };
};

export const NAME_CATEGORIES: NameCategory[] = [
  {
    slug: "roblox-names",
    label: "Roblox Names",
    keyword: "roblox name generator",
    title: "Roblox Name Generator – Random Cool Roblox Usernames",
    description:
      "Generate random Roblox usernames that actually fit the platform's rules — plain alphanumeric handles, no Unicode. Hit Regenerate and copy your favorite.",
    h1: "Roblox Name Generator",
    intro:
      "Random Roblox usernames built from gamer-friendly words and number suffixes. Every handle is plain alphanumeric, so it passes Roblox's strict username filter. Tap any row to copy.",
    about: [
      {
        heading: "Why plain handles for Roblox",
        body:
          "Roblox usernames only allow letters, numbers, and a single underscore — fancy Unicode fonts are rejected outright. This generator keeps every name plain so it saves the first time, instead of bouncing back with an error.",
      },
      {
        heading: "Making a name stick",
        body:
          "If the name you want is taken, regenerate or add one of the trailing number variants. Roblox checks availability and bad-word filters at signup, so keep names clean and try a few combinations until one is free.",
      },
    ],
    faq: [
      {
        q: "Can I use special fonts in a Roblox username?",
        a: "No. Roblox username fields reject Unicode and symbols other than a single underscore. Stylized fonts only work in some display-name and chat contexts, not the actual handle.",
      },
      {
        q: "How long can a Roblox name be?",
        a: "Roblox usernames can be 3 to 20 characters. All names here stay within that range so you can copy and paste them directly.",
      },
    ],
    stylize: false,
    parts: {
      prefixes: [
        "Shadow", "Cyber", "Neo", "Pixel", "Toxic", "Mega", "Ultra", "Frost",
        "Blaze", "Storm", "Dark", "Crimson", "Venom", "Rapid", "Ghost", "Iron",
        "Turbo", "Stealth", "Phantom", "Cosmic", "Savage", "Epic",
      ],
      cores: [
        "Gamer", "Slayer", "Hunter", "Ninja", "Wolf", "Dragon", "Striker", "Sniper",
        "Knight", "Raptor", "Viper", "Blaze", "Ranger", "Pirate", "Wizard", "Beast",
        "Falcon", "Reaper", "Champion", "Legend", "Bandit", "Crusher",
      ],
      suffixes: ["", "_", "X", "XD", "123", "07", "99", "2K", "Pro", "YT", "777", "01"],
    },
  },
  {
    slug: "cute-names",
    label: "Cute Names",
    keyword: "cute username generator",
    title: "Cute Username Generator – Soft & Adorable Name Ideas",
    description:
      "Generate cute, soft, and adorable usernames perfect for any profile. Sweet word combos with optional number tails. Hit Regenerate and copy your favorite.",
    h1: "Cute Username Generator",
    intro:
      "Soft, sweet, and adorable username ideas built from cozy words and gentle suffixes. Plain text so it pastes anywhere. Tap any row to copy.",
    about: [
      {
        heading: "What makes a name feel cute",
        body:
          "Cute handles lean on soft sounds and cozy imagery — sugar, clouds, kittens, pastels. This generator pairs a gentle prefix with a sweet core word and an optional dainty tail to keep the whole thing readable and adorable.",
      },
      {
        heading: "Where cute names shine",
        body:
          "These work great as display names, kawaii gaming tags, art accounts, and friendly chat handles. They stay plain alphanumeric, so they save cleanly on platforms that reject decorative fonts.",
      },
    ],
    faq: [
      {
        q: "Are these names ready to use anywhere?",
        a: "Yes. Cute names here are plain letters and numbers, so they paste into almost any username or display-name field without errors.",
      },
      {
        q: "How do I make a cute name unique?",
        a: "Regenerate for a fresh combo, or add one of the small number or underscore suffixes to claim a variant when your first pick is taken.",
      },
    ],
    stylize: false,
    parts: {
      prefixes: [
        "Sugar", "Honey", "Bubbly", "Fluffy", "Sweet", "Cozy", "Marsh", "Peachy",
        "Cloud", "Berry", "Mochi", "Dainty", "Velvet", "Cuddle", "Sunny", "Glimmer",
        "Petal", "Lullaby", "Twinkle", "Pudding", "Sprinkle", "Buttercup",
      ],
      cores: [
        "Bunny", "Kitten", "Puff", "Bear", "Petal", "Berry", "Star", "Cake",
        "Bloom", "Cloud", "Lamb", "Plush", "Pixie", "Muffin", "Bean", "Pearl",
        "Fawn", "Cherry", "Dove", "Biscuit", "Heart", "Dewdrop",
      ],
      suffixes: ["", "_", "uwu", "owo", "x", "07", "143", "11", "chan", "bun", "boo", "luv"],
    },
  },
  {
    slug: "aesthetic-names",
    label: "Aesthetic Names",
    keyword: "aesthetic username generator",
    title: "Aesthetic Username Generator – Stylish Fonts & Vibes",
    description:
      "Generate aesthetic usernames with stylish Unicode fonts — outline, monospace, small caps, and more. Hit Regenerate and copy your favorite vibe.",
    h1: "Aesthetic Username Generator",
    intro:
      "Stylish, vibey usernames run through real Unicode fonts — outline, bubble, monospace, small caps. Great for bios and display names. Tap any row to copy.",
    about: [
      {
        heading: "How the styling works",
        body:
          "Each name is built from an aesthetic word pool, then transformed with a real Unicode style — outline, bubble, squared, monospace, small caps, or full width. The card label tells you which style was applied so you can find the look you want.",
      },
      {
        heading: "Where styled names render",
        body:
          "Bios, captions, and display names on Instagram, TikTok, X, and most chat apps accept the full Unicode range. Some strict username fields filter exotic characters — if a name won't save there, regenerate or pick a tamer style.",
      },
    ],
    faq: [
      {
        q: "Will these aesthetic names work everywhere?",
        a: "They render in bios, captions, and display names on most platforms. A few apps strip Unicode from strict handle fields, so use a plainer style there if needed.",
      },
      {
        q: "Are these real fonts or images?",
        a: "They're real Unicode characters, not images. That means they copy and paste as text and stay selectable and searchable.",
      },
    ],
    stylize: true,
    parts: {
      prefixes: [
        "Lunar", "Velvet", "Mist", "Hazel", "Aero", "Soft", "Pale", "Dusk",
        "Faded", "Muted", "Sage", "Pastel", "Echo", "Drift", "Solace", "Aura",
        "Wilted", "Static", "Glass", "Opal", "Cinder", "Marble",
      ],
      cores: [
        "Bloom", "Haze", "Wave", "Petal", "Frost", "Aura", "Glow", "Tide",
        "Dream", "Ash", "Rose", "Vapor", "Noir", "Pixel", "Velour", "Lace",
        "Ember", "Halo", "Mirage", "Satin", "Eclipse", "Ivory",
      ],
      suffixes: ["", "_", ".", "x", "07", "13", "00", "xo", "ii", "vii", "z", "01"],
    },
  },
  {
    slug: "discord-names",
    label: "Discord Names",
    keyword: "discord username generator",
    title: "Discord Username Generator – Cool Styled Names",
    description:
      "Generate cool Discord names with stylish Unicode fonts — script, serif, monospace, fraktur, and more. Hit Regenerate and copy your favorite.",
    h1: "Discord Username Generator",
    intro:
      "Cool Discord names run through real Unicode fonts — script, serif, monospace, fraktur. Perfect for nicknames and server display names. Tap any row to copy.",
    about: [
      {
        heading: "Styled names on Discord",
        body:
          "Discord display names and server nicknames accept the full Unicode range, so stylized fonts look great there. Each name here is built from a word pool and run through a real style transform — the card label names the style used.",
      },
      {
        heading: "Username vs. display name",
        body:
          "Discord's new account username is lowercase and restricted, but your display name and per-server nickname can use these fonts freely. Set the styled version as your nickname for the look without breaking your handle.",
      },
    ],
    faq: [
      {
        q: "Can I use a styled font as my Discord username?",
        a: "Discord's base username is lowercase and limited, but your display name and server nicknames accept Unicode fonts, which is where these names shine.",
      },
      {
        q: "Will friends see the styled name correctly?",
        a: "On modern devices, yes. These are standard Unicode characters; only very old systems missing certain fonts might show a fallback box for the most exotic styles.",
      },
    ],
    stylize: true,
    parts: {
      prefixes: [
        "Void", "Cyber", "Neon", "Glitch", "Hyper", "Rogue", "Nova", "Quantum",
        "Astro", "Vortex", "Phantom", "Synth", "Pulse", "Crypt", "Onyx", "Zen",
        "Spectre", "Binary", "Drift", "Solar", "Hex", "Flux",
      ],
      cores: [
        "Gamer", "Mage", "Knight", "Otaku", "Wraith", "Pilot", "Coder", "Ghost",
        "Sage", "Raider", "Hacker", "Oracle", "Bard", "Rebel", "Hunter", "Nomad",
        "Witch", "Drone", "Cipher", "Vandal", "Specter", "Ronin",
      ],
      suffixes: ["", "_", ".", "x", "07", "404", "256", "00", "gg", "tv", "exe", "v2"],
    },
  },
  {
    slug: "minecraft-names",
    label: "Minecraft Names",
    keyword: "minecraft name generator",
    title: "Minecraft Name Generator – Random Cool Gamertags",
    description:
      "Generate random Minecraft usernames that fit the rules — plain letters, numbers, and underscore only. Hit Regenerate and copy your favorite gamertag.",
    h1: "Minecraft Name Generator",
    intro:
      "Random Minecraft usernames built from blocky, adventurous words. Plain alphanumeric with underscores, so they fit Minecraft's username rules. Tap any row to copy.",
    about: [
      {
        heading: "Minecraft username rules",
        body:
          "Minecraft (Java and Bedrock) usernames allow letters, numbers, and underscores, 3 to 16 characters — no Unicode fonts. This generator keeps every name within those limits so it works in-game and on servers.",
      },
      {
        heading: "Picking a survivable name",
        body:
          "Mix a theme prefix with a craft or mob word and an optional tag. If your pick is taken, regenerate or append a number suffix to find a free variant for your Microsoft account.",
      },
    ],
    faq: [
      {
        q: "Can Minecraft names have special characters?",
        a: "No. Minecraft usernames are limited to letters, numbers, and underscores. All names here stay plain so they're valid for account and server use.",
      },
      {
        q: "What's the max length for a Minecraft name?",
        a: "16 characters. The combinations here are kept short enough to stay within Minecraft's limit when you copy them.",
      },
    ],
    stylize: false,
    parts: {
      prefixes: [
        "Creeper", "Diamond", "Ender", "Redstone", "Nether", "Obsidian", "Pixel", "Cobble",
        "Block", "Mossy", "Glow", "Frost", "Lava", "Quartz", "Iron", "Golden",
        "Crafty", "Bedrock", "Emerald", "Spawn", "Mob", "Pickaxe",
      ],
      cores: [
        "Miner", "Crafter", "Builder", "Slayer", "Warden", "Golem", "Pillager", "Steve",
        "Wither", "Zombie", "Skeleton", "Villager", "Knight", "Digger", "Hunter", "Forge",
        "Raider", "Smith", "Phantom", "Drake", "Ghast", "Strider",
      ],
      suffixes: ["", "_", "MC", "TNT", "64", "256", "07", "99", "HD", "Pro", "GG", "01"],
    },
  },
  {
    slug: "twitter-names",
    label: "Twitter Names",
    keyword: "twitter username generator",
    title: "Twitter Username Generator – Catchy @Handle Ideas",
    description:
      "Generate catchy Twitter (X) username ideas — short, clean, plain handles ready to claim. Hit Regenerate and copy your favorite @name.",
    h1: "Twitter Username Generator",
    intro:
      "Catchy, clean Twitter and X handle ideas built from punchy words and short tails. Plain alphanumeric so they fit the @username rules. Tap any row to copy.",
    about: [
      {
        heading: "What makes a good handle",
        body:
          "Strong Twitter handles are short, memorable, and easy to type. This generator pairs a punchy prefix with a clean core word and an optional small tail, keeping the result tidy and brandable.",
      },
      {
        heading: "Twitter handle rules",
        body:
          "X usernames allow letters, numbers, and underscores, up to 15 characters — no fonts or symbols. Everything here stays plain so you can paste it straight into the handle field and check availability.",
      },
    ],
    faq: [
      {
        q: "Can a Twitter handle use special fonts?",
        a: "No. The @username field on X only accepts letters, numbers, and underscores. Stylized fonts can go in your display name but not the handle itself.",
      },
      {
        q: "How long can my Twitter handle be?",
        a: "Up to 15 characters. These suggestions are kept short so they fit the limit and stay easy to remember.",
      },
    ],
    stylize: false,
    parts: {
      prefixes: [
        "The", "Real", "Just", "Daily", "Mr", "Ms", "Its", "Hey",
        "Team", "Ask", "Pure", "Big", "Lil", "Hot", "Top", "Pro",
        "Wild", "Bold", "Fresh", "Prime", "Swift", "Vivid",
      ],
      cores: [
        "Vibes", "Takes", "Thoughts", "Mood", "Buzz", "Banter", "Quill", "Pixel",
        "Pulse", "Chatter", "Wit", "Spark", "Echo", "Static", "Notes", "Loop",
        "Signal", "Feed", "Drift", "Scoop", "Memo", "Spiel",
      ],
      suffixes: ["", "_", "x", "07", "HQ", "Live", "Daily", "01", "TV", "Co", "99", "Now"],
    },
  },
];

export const NAME_BY_SLUG: Record<string, NameCategory> = Object.fromEntries(
  NAME_CATEGORIES.map((c) => [c.slug, c])
);
