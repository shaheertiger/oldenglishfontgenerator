"use client";

import { useEffect, useState } from "react";
import { ALL_STYLES } from "@/lib/fonts";

const ADJECTIVES = [
  "dark", "silent", "midnight", "ashen", "crimson", "obsidian", "wild",
  "lost", "feral", "iron", "velvet", "raven", "frost", "cinder", "hollow",
  "shadow", "blood", "ruin", "thorn", "echo", "winter", "rogue", "wraith",
  "stoic", "ember", "haunted", "lunar", "molten", "noble", "fallen",
];
const NOUNS = [
  "king", "wolf", "saint", "knight", "ghost", "raven", "monk", "duke",
  "lord", "rider", "blade", "crow", "viper", "abbot", "warden", "scribe",
  "thane", "smith", "exile", "heir", "throne", "oath", "hallow", "shroud",
  "wraith", "warlock", "reaper", "hunter", "verse", "scion",
];
const SUFFIXES = ["", "_", ".", "x", "00", "07", "13", "_xv", "_ix", ""];

const STYLE_POOL = [
  "gothic-classic",
  "gothic-bold",
  "blackletter",
  "blackletter-bold",
  "medieval-script",
  "script",
  "script-bold",
  "small-caps",
  "double-struck",
  "monospace",
  "fraktur-spaced",
];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomBase(): string {
  const a = pick(ADJECTIVES);
  const n = pick(NOUNS);
  const s = pick(SUFFIXES);
  const join = Math.random() < 0.4 ? "_" : "";
  return `${a}${join}${n}${s}`;
}

export default function UsernameClient() {
  const [items, setItems] = useState<{ id: string; base: string; styled: string; styleName: string }[]>([]);
  const [copied, setCopied] = useState<string | null>(null);

  function regenerate() {
    const next = Array.from({ length: 12 }, (_, i) => {
      const base = randomBase();
      const sid = STYLE_POOL[i % STYLE_POOL.length];
      const s = ALL_STYLES[sid] ?? ALL_STYLES["gothic-classic"];
      return { id: `${i}-${base}`, base, styled: s.transform(base), styleName: s.name };
    });
    setItems(next);
  }

  useEffect(() => { regenerate(); }, []);

  async function copy(value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      setTimeout(() => setCopied((c) => (c === value ? null : c)), 1400);
    } catch {}
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", margin: "0 0 24px" }}>
        <button className="load-more" onClick={regenerate}>Regenerate</button>
      </div>
      <div className="results">
        {items.map((u) => (
          <div
            key={u.id}
            className="style-card"
            onClick={() => copy(u.styled)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                copy(u.styled);
              }
            }}
          >
            <div className="left">
              <div className="name">{u.styleName}</div>
              <div className="preview">{u.styled}</div>
            </div>
            <button
              className={`icon-btn ${copied === u.styled ? "copied" : ""}`}
              onClick={(e) => { e.stopPropagation(); copy(u.styled); }}
              aria-label="Copy username"
            >
              {copied === u.styled ? "✓" : "⧉"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
