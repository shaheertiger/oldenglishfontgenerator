"use client";

import { useMemo, useState } from "react";
import { ALL_STYLES } from "@/lib/fonts";

type Pick = { id: string; reason: string };

function analyze(text: string): Pick[] {
  const t = text.trim();
  if (!t) return [];
  const lower = t.toLowerCase();
  const len = [...t].length;
  const hasDigits = /\d/.test(t);
  const allCaps = t === t.toUpperCase() && /[A-Z]/.test(t);
  const hasSpaces = /\s/.test(t);

  const picks: Pick[] = [];
  const add = (id: string, reason: string) => {
    if (ALL_STYLES[id] && !picks.find((p) => p.id === id)) {
      picks.push({ id, reason });
    }
  };

  // Mood / keyword cues
  const dark = /\b(dark|blood|death|grave|night|shadow|raven|cursed|ghost|haunt|wraith|crypt)\b/.test(lower);
  const romance = /\b(love|heart|forever|always|kiss|dear|baby|honey|soul)\b/.test(lower);
  const formal = /\b(king|queen|noble|royal|crown|saint|lord|lady|hallow|cathedral)\b/.test(lower);
  const playful = /\b(lol|haha|fun|happy|silly|cute|joy|smile)\b/.test(lower);
  const techy = /\b(error|null|undefined|sudo|run|http|404|api)\b/.test(lower) || hasDigits;

  if (dark) {
    add("fraktur", "blackletter matches the dark/horror tone");
    add("gothic-bold", "heavier gothic reinforces the mood");
    add("zalgo-soft", "subtle glitch for eerie atmosphere");
    add("cursed-gothic", "fraktur with combining marks doubles down");
  }
  if (romance) {
    add("script", "flowing script reads warmer and personal");
    add("script-bold", "bold cursive carries emotional weight");
    add("italic-serif", "italic adds intimacy without going decorative");
  }
  if (formal) {
    add("fraktur", "blackletter has the ceremonial feel of a crest");
    add("double-struck", "outlined caps read as formal and engraved");
    add("small-caps", "minimal typographic upgrade for titles");
  }
  if (playful) {
    add("bubble", "circled letters read as light and friendly");
    add("bubble-filled", "filled bubbles pop in casual contexts");
    add("squared", "boxed letters look game-y and fun");
  }
  if (techy) {
    add("monospace", "monospaced shapes match technical context");
    add("double-struck", "outlined letters read as math/tech");
    if (hasDigits) add("fullwidth", "wide letters and digits in one block");
  }

  // Length cues
  if (len <= 5) {
    add("bold-serif", "short text reads stronger in heavy serif");
    add("squared", "short strings work well as boxed glyphs");
    add("bubble-filled", "compact and high-contrast for short text");
  } else if (len > 40) {
    add("italic-serif", "italic stays readable at longer lengths");
    add("small-caps", "small caps keep long text typographic");
    add("script", "script flows over longer phrases");
  }

  // Structural cues
  if (allCaps) {
    add("fraktur-bold", "all-caps input pairs well with gothic bold");
    add("small-caps", "preserves the all-caps feel with lighter weight");
    add("outline-gothic", "outlined caps read as engraved");
  }
  if (hasSpaces && len > 8) {
    add("fancy", "multi-word input benefits from a balanced style");
  }

  // Always-good defaults — fill to 8
  const defaults = ["fraktur", "script", "bold-serif", "italic-serif", "small-caps", "double-struck", "bubble", "monospace"];
  for (const id of defaults) {
    if (picks.length >= 8) break;
    add(id, "general-purpose style that fits most inputs");
  }

  return picks.slice(0, 8);
}

export default function AutoStylerClient() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const picks = useMemo(() => analyze(text || "your text here"), [text]);

  async function copy(id: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(id);
      setTimeout(() => setCopied((c) => (c === id ? null : c)), 1400);
    } catch {}
  }

  return (
    <>
      <div className="input-row">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your text and we'll suggest matching styles…"
          aria-label="Text to analyze"
          rows={1}
        />
      </div>

      <div className="results-title">Suggested styles</div>

      <div className="results">
        {picks.map((p) => {
          const s = ALL_STYLES[p.id];
          if (!s) return null;
          const out = s.transform(text || "your text here");
          return (
            <div
              key={p.id}
              className="style-card"
              onClick={() => copy(p.id, out)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") { e.preventDefault(); copy(p.id, out); }
              }}
            >
              <div className="left">
                <div className="name">{s.name} — <span style={{ textTransform: "none", letterSpacing: "normal", color: "var(--muted)" }}>{p.reason}</span></div>
                <div className="preview">{out}</div>
              </div>
              <button
                className={`icon-btn ${copied === p.id ? "copied" : ""}`}
                onClick={(e) => { e.stopPropagation(); copy(p.id, out); }}
                aria-label="Copy"
              >
                {copied === p.id ? "✓" : "⧉"}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
