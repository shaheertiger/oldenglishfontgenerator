"use client";

import { useEffect, useState } from "react";

const ADJ = ["damp", "starless", "frostbitten", "windless", "ash-grey", "silver", "moonless", "fog-thick", "rain-soaked", "iron-cold"];
const PLACES = ["the abbey ruins", "the coastal road", "an empty chapel", "the old mill", "the silent forest", "a half-frozen field", "the abandoned harbour", "an unmarked grave", "the back of the inn"];
const NAMES = ["Mira", "Corvin", "Wren", "Edric", "Isolde", "Lucan", "Sable", "Theron", "Vesper", "Rowan"];
const ITEMS = ["a key with no lock", "a folded letter, unopened", "their mother's prayer beads", "a wolf's tooth on a leather cord", "a sealed silver locket", "a coin from a country that no longer exists", "a feather warm to the touch"];
const PLACE2 = ["under the dead oak", "beneath the broken floor", "inside the well", "wrapped in a stranger's coat", "between two stones at the threshold"];
const VERBS = ["change everything", "ruin them", "save someone they hadn't met yet", "settle the old debt", "bring the watchers back", "answer a question they'd stopped asking", "cost a name"];
const CLOSERS = [
  "They did not sleep that night.",
  "The bells rang once, then stopped.",
  "By morning the snow had hidden every step they'd taken.",
  "Somewhere far off, a dog began to bark, and would not stop.",
  "They folded it carefully into their coat and walked on.",
  "Nothing in the village changed; everything in them did.",
];

function pick<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)]; }

export default function StoryClient() {
  const [story, setStory] = useState("");
  const [copied, setCopied] = useState(false);

  function regenerate() {
    const name = pick(NAMES);
    const text =
      `On a ${pick(ADJ)} night in ${pick(PLACES)}, ${name} found ${pick(ITEMS)} ${pick(PLACE2)}. ` +
      `They knew, the way you know a coming storm, that it would ${pick(VERBS)}. ` +
      pick(CLOSERS);
    setStory(text);
  }

  useEffect(() => { regenerate(); }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(story);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {}
  }

  return (
    <div className="mixer-output" style={{ marginTop: 0 }}>
      <div className="mixer-output-label">Story seed</div>
      <div className="mixer-output-text" style={{ fontSize: 18, lineHeight: 1.75 }}>{story}</div>
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
  );
}
