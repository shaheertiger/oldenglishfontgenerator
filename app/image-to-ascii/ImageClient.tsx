"use client";

import { useRef, useState } from "react";

const RAMP = " .:-=+*#%@";

export default function ImageClient() {
  const [output, setOutput] = useState<string>("");
  const [width, setWidth] = useState(80);
  const [inverted, setInverted] = useState(false);
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  function handleFile(file: File | null | undefined) {
    if (!file) return;
    const img = new Image();
    img.onload = () => render(img);
    img.src = URL.createObjectURL(file);
  }

  function render(img: HTMLImageElement) {
    const canvas = canvasRef.current ?? document.createElement("canvas");
    canvasRef.current = canvas;
    const aspect = img.height / img.width;
    // chars are taller than wide; compensate ~0.5
    const w = Math.max(20, Math.min(200, Math.floor(width)));
    const h = Math.max(1, Math.floor(w * aspect * 0.5));
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(img, 0, 0, w, h);
    const data = ctx.getImageData(0, 0, w, h).data;
    const ramp = inverted ? [...RAMP].reverse().join("") : RAMP;

    let out = "";
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const i = (y * w + x) * 4;
        const r = data[i], g = data[i + 1], b = data[i + 2];
        const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        const idx = Math.min(ramp.length - 1, Math.floor(lum * ramp.length));
        out += ramp[idx];
      }
      out += "\n";
    }
    setOutput(out);
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
        <div style={{ display: "grid", gap: 12 }}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFile(e.target.files?.[0])}
            style={{ color: "var(--muted)" }}
          />
          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <label style={{ color: "var(--muted)", fontSize: 14 }}>
              Width:{" "}
              <input
                type="range"
                min={20}
                max={200}
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
              />{" "}
              {width} chars
            </label>
            <label style={{ color: "var(--muted)", fontSize: 14 }}>
              <input
                type="checkbox"
                checked={inverted}
                onChange={(e) => setInverted(e.target.checked)}
              />{" "}
              Invert
            </label>
            <button className="btn" onClick={copy} disabled={!output}>
              {copied ? "Copied!" : "Copy ASCII"}
            </button>
          </div>
        </div>
      </div>

      {output ? (
        <pre
          style={{
            marginTop: 20,
            background: "var(--panel)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            padding: 20,
            overflow: "auto",
            fontSize: 8,
            lineHeight: 1,
            color: "var(--text)",
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          }}
        >
          {output}
        </pre>
      ) : (
        <p style={{ color: "var(--muted)", marginTop: 20 }}>
          Choose an image to convert. Everything runs in your browser — your
          photo is never uploaded anywhere.
        </p>
      )}
    </>
  );
}
