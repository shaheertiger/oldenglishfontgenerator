"use client";

import { useMemo, useState } from "react";
import { toRoman, fromRoman } from "@/lib/texttools";

type Dir = "to-roman" | "to-number";

const boxStyle: React.CSSProperties = {
  width: "100%",
  background: "var(--bg-elev)",
  color: "var(--text)",
  border: "1px solid var(--border)",
  borderRadius: 10,
  padding: "14px 16px",
  fontSize: 18,
  fontFamily: "inherit",
  outline: "none",
};

const ghost: React.CSSProperties = {
  background: "transparent",
  color: "var(--text)",
  border: "1px solid var(--border-strong)",
};

export default function RomanClient() {
  const [dir, setDir] = useState<Dir>("to-roman");
  const [value, setValue] = useState("2026");
  const [copied, setCopied] = useState(false);

  const { output, error } = useMemo(() => {
    if (dir === "to-roman") {
      const n = Number(value.trim());
      if (value.trim() === "" || Number.isNaN(n)) return { output: "", error: "" };
      const r = toRoman(n);
      return r
        ? { output: r, error: "" }
        : { output: "", error: "Enter a whole number from 1 to 3999." };
    }
    if (value.trim() === "") return { output: "", error: "" };
    const n = fromRoman(value);
    return n != null
      ? { output: String(n), error: "" }
      : { output: "", error: "That isn’t a valid Roman numeral." };
  }, [value, dir]);

  function switchDir(next: Dir) {
    if (next === dir) return;
    setDir(next);
    setValue(next === "to-roman" ? "2026" : "MMXXVI");
  }

  async function copy() {
    if (!output) return;
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
            style={dir === "to-roman" ? undefined : ghost}
            onClick={() => switchDir("to-roman")}
          >
            Number → Roman
          </button>
          <button
            className="load-more"
            style={dir === "to-number" ? undefined : ghost}
            onClick={() => switchDir("to-number")}
          >
            Roman → Number
          </button>
        </div>

        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          inputMode={dir === "to-roman" ? "numeric" : "text"}
          placeholder={dir === "to-roman" ? "Enter 1–3999…" : "Enter a Roman numeral…"}
          aria-label="Value to convert"
          style={boxStyle}
        />

        <div className="controls" style={{ justifyContent: "flex-end", marginTop: 12 }}>
          <button className="load-more" onClick={copy} disabled={!output}>
            {copied ? "Copied!" : "Copy result"}
          </button>
        </div>
      </div>

      <div
        aria-label="Result"
        style={{
          ...boxStyle,
          marginTop: 16,
          minHeight: 64,
          fontSize: 28,
          letterSpacing: dir === "to-roman" ? 2 : 0,
          display: "flex",
          alignItems: "center",
          wordBreak: "break-word",
        }}
      >
        {output ? (
          output
        ) : (
          <span style={{ color: error ? "#e06c6c" : "var(--muted)", fontSize: 16 }}>
            {error || "Result appears here…"}
          </span>
        )}
      </div>
    </>
  );
}
