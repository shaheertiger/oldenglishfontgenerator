"use client";

import { useMemo, useState } from "react";
import { textToBinary, binaryToText } from "@/lib/texttools";

type Dir = "encode" | "decode";

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

const ghost: React.CSSProperties = {
  background: "transparent",
  color: "var(--text)",
  border: "1px solid var(--border-strong)",
};

const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";

export default function BinaryClient() {
  const [dir, setDir] = useState<Dir>("encode");
  const [text, setText] = useState("Hello");
  const [copied, setCopied] = useState(false);

  const output = useMemo(
    () => (dir === "encode" ? textToBinary(text) : binaryToText(text)),
    [text, dir]
  );

  function switchDir(next: Dir) {
    if (next === dir) return;
    // Seed the box with a sensible example when switching direction.
    setDir(next);
    setText(next === "encode" ? "Hello" : "01001000 01101001");
  }

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
            onClick={() => switchDir("encode")}
          >
            Text → Binary
          </button>
          <button
            className="load-more"
            style={dir === "decode" ? undefined : ghost}
            onClick={() => switchDir("decode")}
          >
            Binary → Text
          </button>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={dir === "encode" ? "Type text…" : "Paste binary (space separated)…"}
          aria-label="Input"
          style={{ ...boxStyle, fontFamily: dir === "decode" ? mono : "inherit" }}
        />

        <div className="controls" style={{ justifyContent: "flex-end", marginTop: 12 }}>
          <button className="load-more" onClick={copy}>
            {copied ? "Copied!" : "Copy result"}
          </button>
        </div>
      </div>

      <div
        aria-label="Result"
        style={{
          ...boxStyle,
          marginTop: 16,
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          fontFamily: dir === "encode" ? mono : "inherit",
        }}
      >
        {output || <span style={{ color: "var(--muted)", fontFamily: "inherit" }}>Result appears here…</span>}
      </div>
    </>
  );
}
