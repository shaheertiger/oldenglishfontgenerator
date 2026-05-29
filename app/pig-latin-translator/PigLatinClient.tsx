"use client";

import { useMemo, useState } from "react";
import { toPigLatin, fromPigLatin } from "@/lib/texttools";

type Dir = "encode" | "decode";

const boxStyle: React.CSSProperties = {
  width: "100%",
  minHeight: 140,
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

export default function PigLatinClient() {
  const [dir, setDir] = useState<Dir>("encode");
  const [text, setText] = useState("Hello friends, welcome to the club!");
  const [copied, setCopied] = useState(false);

  const output = useMemo(
    () => (dir === "encode" ? toPigLatin(text) : fromPigLatin(text)),
    [text, dir]
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
      <div className="generator">
        <div className="controls" style={{ gap: 8, marginBottom: 12 }}>
          <button
            className="load-more"
            style={dir === "encode" ? undefined : ghost}
            onClick={() => setDir("encode")}
          >
            English → Pig Latin
          </button>
          <button
            className="load-more"
            style={dir === "decode" ? undefined : ghost}
            onClick={() => setDir("decode")}
          >
            Pig Latin → English
          </button>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={dir === "encode" ? "Type English text…" : "Type Pig Latin text…"}
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
        style={{ ...boxStyle, marginTop: 16, whiteSpace: "pre-wrap", minHeight: 100 }}
      >
        {output || <span style={{ color: "var(--muted)" }}>Result appears here…</span>}
      </div>
    </>
  );
}

const ghost: React.CSSProperties = {
  background: "transparent",
  color: "var(--text)",
  border: "1px solid var(--border-strong)",
};
