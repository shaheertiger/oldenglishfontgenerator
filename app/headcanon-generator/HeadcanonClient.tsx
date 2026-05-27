"use client";

import { useEffect, useState } from "react";

const NAMES = ["Alric", "Mira", "Corvin", "Isolde", "Hadrian", "Wren", "Theron", "Saela", "Edric", "Briar", "Rowan", "Lucan", "Mara", "Cassian", "Yarrow", "Nyx", "Orion", "Sable", "Vesper", "Thalia"];
const AGES = ["seventeen", "twenty-three", "thirty-one", "much older than they look", "ageless", "in their fourth life", "twelve, but lying about it"];
const VIBES = ["quietly menacing", "outwardly warm but emotionally walled-off", "anxious and bookish", "feral and protective", "weary and patient", "charismatic in a dangerous way", "soft-spoken with sharp eyes", "endlessly curious", "carefully composed"];
const FEARS = ["being forgotten", "the dark, despite everything", "their own reflection in still water", "becoming their parent", "owing someone a favour", "the sound of bells", "loving anyone back", "the truth coming out"];
const SECRETS = ["wrote letters they never sent", "can read minds when they touch bare skin", "made a deal at a crossroads at sixteen", "keeps a small bird in their pocket", "isn't actually who they say they are", "is hiding a sibling no one knows about", "has been alive for centuries", "can't see colour"];
const MOTIVES = ["finding the one who got away", "settling an old debt", "earning back a name they lost", "proving the village wrong", "burying someone properly", "keeping a quiet promise", "leaving before anyone notices"];
const COMFORTS = ["a chipped enamel cup", "a stolen pocket watch", "their grandmother's prayer beads", "an unfinished letter", "a song they can't remember the words to", "a single sprig of dried lavender", "a wolf's tooth on a leather cord"];
const ALIGNMENTS = ["lawful but tired", "chaotic with a soft heart", "neutral until provoked", "principled, occasionally violent", "good in the abstract, mean in person", "loyal to a fault"];
const QUIRKS = ["never sits with their back to a door", "talks to crows", "always has a knife and never uses it", "hums when nervous", "collects buttons", "won't say the names of the dead aloud", "sleeps with the windows open in winter"];

function pick<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)]; }

export default function HeadcanonClient() {
  const [hc, setHc] = useState<{
    name: string; age: string; vibe: string;
    fear: string; secret: string; motive: string;
    comfort: string; alignment: string; quirk: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  function regenerate() {
    setHc({
      name: pick(NAMES),
      age: pick(AGES),
      vibe: pick(VIBES),
      fear: pick(FEARS),
      secret: pick(SECRETS),
      motive: pick(MOTIVES),
      comfort: pick(COMFORTS),
      alignment: pick(ALIGNMENTS),
      quirk: pick(QUIRKS),
    });
  }

  useEffect(() => { regenerate(); }, []);

  if (!hc) return null;

  const paragraph =
`${hc.name}, ${hc.age}. ${hc.vibe}. Carries ${hc.comfort} everywhere. ${hc.quirk[0].toUpperCase() + hc.quirk.slice(1)}. Secretly ${hc.secret}. Their deepest fear is ${hc.fear}; their drive is ${hc.motive}. Alignment: ${hc.alignment}.`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(paragraph);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {}
  }

  return (
    <>
      <div className="mixer-output" style={{ marginTop: 0 }}>
        <div className="mixer-output-label">Headcanon for {hc.name}</div>
        <div className="mixer-output-text" style={{ fontSize: 17, lineHeight: 1.7 }}>
          {paragraph}
        </div>
        <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
          <button className="load-more" onClick={regenerate}>Regenerate</button>
          <button
            className="load-more"
            style={{ background: "transparent", color: "var(--text)", border: "1px solid var(--border-strong)" }}
            onClick={copy}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>

      <div className="features" style={{ marginTop: 28 }}>
        {[
          ["Vibe", hc.vibe],
          ["Quirk", hc.quirk],
          ["Fear", hc.fear],
          ["Motivation", hc.motive],
          ["Secret", hc.secret],
          ["Comfort object", hc.comfort],
          ["Alignment", hc.alignment],
          ["Age", hc.age],
        ].map(([k, v]) => (
          <div key={k} className="feature">
            <h3>{k}</h3>
            <p>{v}</p>
          </div>
        ))}
      </div>
    </>
  );
}
