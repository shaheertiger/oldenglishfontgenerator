"use client";

import { useMemo, useState } from "react";
import { toMorse, fromMorse } from "@/lib/texttools";

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

export default function MorseClient() {
  const [dir, setDir] = useState<Dir>("encode");
  const [text, setText] = useState("SOS help");
  const [copied, setCopied] = useState(false);

  const output = useMemo(
    () => (dir === "encode" ? toMorse(text) : fromMorse(text)),
    [text, dir]
  );

  function switchDir(next: Dir) {
    if (next === dir) return;
    setDir(next);
    setText(next === "encode" ? "SOS help" : "... --- ... / .... . .-.. .--.");
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
            Text → Morse
          </button>
          <button
            className="load-more"
            style={dir === "decode" ? undefined : ghost}
            onClick={() => switchDir("decode")}
          >
            Morse → Text
          </button>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={dir === "encode" ? "Type text…" : "Paste morse: dots, dashes, / between words…"}
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
