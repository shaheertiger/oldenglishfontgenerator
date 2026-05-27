"use client";

import { useMemo, useState } from "react";
import { ALL_STYLES } from "@/lib/fonts";

const STYLE_CHOICES = [
  "gothic-classic", "gothic-bold", "blackletter", "blackletter-bold",
  "script", "script-bold", "bold-serif", "italic-serif", "bold-italic-serif",
  "sans-bold", "sans-italic", "small-caps", "double-struck", "monospace",
  "bubble", "squared", "fullwidth", "fraktur-spaced",
];

type Mode = "alternate" | "stack" | "split";

function mix(text: string, aId: string, bId: string, mode: Mode): string {
  const a = ALL_STYLES[aId];
  const b = ALL_STYLES[bId];
  if (!a || !b) return text;
  if (mode === "alternate") {
    const chars = [...text];
    let out = "";
    chars.forEach((ch, i) => {
      const styled = i % 2 === 0 ? a.transform(ch) : b.transform(ch);
      out += styled;
    });
    return out;
  }
  if (mode === "stack") {
    return b.transform(a.transform(text));
  }
  // split: first half a, second half b
  const half = Math.ceil([...text].length / 2);
  const chars = [...text];
  const first = chars.slice(0, half).join("");
  const second = chars.slice(half).join("");
  return a.transform(first) + b.transform(second);
}

export default function MixerClient() {
  const [text, setText] = useState("blackletter mix");
  const [styleA, setStyleA] = useState("gothic-bold");
  const [styleB, setStyleB] = useState("script");
  const [mode, setMode] = useState<Mode>("alternate");
  const [copied, setCopied] = useState(false);

  const output = useMemo(
    () => mix(text || "blackletter mix", styleA, styleB, mode),
    [text, styleA, styleB, mode]
  );

  async function copy() {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {}
  }

  return (
    <>
      <div className="input-row">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something…"
          aria-label="Text to mix"
          rows={1}
        />
      </div>

      <div className="mixer-controls">
        <label className="mixer-field">
          <span>Style A</span>
          <select value={styleA} onChange={(e) => setStyleA(e.target.value)}>
            {STYLE_CHOICES.map((id) => (
              <option key={id} value={id}>{ALL_STYLES[id]?.name ?? id}</option>
            ))}
          </select>
        </label>
        <label className="mixer-field">
          <span>Style B</span>
          <select value={styleB} onChange={(e) => setStyleB(e.target.value)}>
            {STYLE_CHOICES.map((id) => (
              <option key={id} value={id}>{ALL_STYLES[id]?.name ?? id}</option>
            ))}
          </select>
        </label>
        <label className="mixer-field">
          <span>Mode</span>
          <select value={mode} onChange={(e) => setMode(e.target.value as Mode)}>
            <option value="alternate">Alternate letters</option>
            <option value="stack">Stack (A then B)</option>
            <option value="split">Split (first half A)</option>
          </select>
        </label>
      </div>

      <div className="mixer-output">
        <div className="mixer-output-label">Mixed output</div>
        <div className="mixer-output-text">{output}</div>
        <button className="load-more" style={{ marginTop: 16 }} onClick={copy}>
          {copied ? "Copied!" : "Copy mixed text"}
        </button>
      </div>
    </>
  );
}
