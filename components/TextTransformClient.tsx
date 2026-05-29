"use client";

import { useMemo, useState } from "react";
import {
  toRunes,
  toHieroglyphs,
  toCuneiform,
  toPirate,
} from "@/lib/texttools";

export type TransformKind = "runes" | "hieroglyphs" | "cuneiform" | "pirate";

const CONFIG: Record<
  TransformKind,
  { fn: (s: string) => string; placeholder: string; sample: string; symbolFont: boolean }
> = {
  runes: {
    fn: toRunes,
    placeholder: "Type English text…",
    sample: "Hello world",
    symbolFont: true,
  },
  hieroglyphs: {
    fn: toHieroglyphs,
    placeholder: "Type English text…",
    sample: "Pharaoh",
    symbolFont: true,
  },
  cuneiform: {
    fn: toCuneiform,
    placeholder: "Type English text…",
    sample: "Babylon",
    symbolFont: true,
  },
  pirate: {
    fn: toPirate,
    placeholder: "Type normal English…",
    sample: "Hello my friend, where is the treasure?",
    symbolFont: false,
  },
};

const boxStyle: React.CSSProperties = {
  width: "100%",
  minHeight: 130,
  background: "var(--bg-elev)",
  color: "var(--text)",
  border: "1px solid var(--border)",
  borderRadius: 10,
  padding: "14px 16px",
  fontSize: 16,
  fontFamily: "inherit",
  outline: "none",
  resize: "vertical",
};

export default function TextTransformClient({ kind }: { kind: TransformKind }) {
  const cfg = CONFIG[kind];
  const [text, setText] = useState(cfg.sample);
  const [copied, setCopied] = useState(false);

  const output = useMemo(() => cfg.fn(text), [text, cfg]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {}
  }

  return (
    <>
      <div className="generator">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={cfg.placeholder}
          aria-label="Text to translate"
          style={boxStyle}
        />
        <div className="controls" style={{ justifyContent: "flex-end", marginTop: 12 }}>
          <button className="load-more" onClick={copy}>
            {copied ? "Copied!" : "Copy result"}
          </button>
        </div>
      </div>

      <div
        aria-label="Translation result"
        style={{
          ...boxStyle,
          marginTop: 16,
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          fontSize: cfg.symbolFont ? 30 : 16,
          lineHeight: cfg.symbolFont ? 1.6 : 1.5,
          minHeight: 90,
        }}
      >
        {output || <span style={{ color: "var(--muted)", fontSize: 16 }}>Result appears here…</span>}
      </div>
    </>
  );
}
