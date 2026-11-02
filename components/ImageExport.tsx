"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Renders text with real OFL blackletter typefaces (UnifrakturCook and
// UnifrakturMaguntia, self-hosted in /public/fonts) onto a canvas, either on
// a plain background or on a skin-tone forearm mockup, and exports PNG/SVG.

const FONTS = {
  cook: { family: "UnifrakturCook", file: "/fonts/UnifrakturCook-Bold.ttf", label: "UnifrakturCook (heavy)" },
  maguntia: { family: "UnifrakturMaguntia", file: "/fonts/UnifrakturMaguntia-Book.ttf", label: "UnifrakturMaguntia (classic)" },
} as const;
type FontKey = keyof typeof FONTS;

const SKIN = {
  "Skin — light": "#f1d3bd",
  "Skin — medium": "#d9a77f",
  "Skin — tan": "#b9825a",
  "Skin — brown": "#8b5a3c",
  "Skin — deep": "#5b3a29",
};
const PLAIN = {
  White: "#ffffff",
  Parchment: "#f3e7c9",
  Black: "#111111",
  Transparent: "transparent",
};

const W = 1200;
const H = 600;

function shade(hex: string, amt: number) {
  const n = parseInt(hex.slice(1), 16);
  const c = (v: number) => Math.max(0, Math.min(255, Math.round(v + amt)));
  return `rgb(${c(n >> 16)},${c((n >> 8) & 255)},${c(n & 255)})`;
}

export default function ImageExport({ mode, defaultText }: { mode: "tattoo" | "plain"; defaultText: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [text, setText] = useState(defaultText);
  const [font, setFont] = useState<FontKey>("cook");
  const backgrounds = mode === "tattoo" ? { ...SKIN } : { ...PLAIN };
  const [bg, setBg] = useState(Object.keys(backgrounds)[mode === "tattoo" ? 1 : 0]);
  const [ink, setInk] = useState(mode === "tattoo" ? "#1b1b1f" : "#121110");
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const f = FONTS[font];
    if (loaded[f.family]) return;
    const face = new FontFace(f.family, `url(${f.file})`);
    face
      .load()
      .then((ff) => {
        document.fonts.add(ff);
        setLoaded((l) => ({ ...l, [f.family]: true }));
      })
      .catch(() => setLoaded((l) => ({ ...l, [f.family]: true })));
  }, [font, loaded]);

  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean).slice(0, 4);

  const draw = useCallback(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const color = (backgrounds as Record<string, string>)[bg];
    ctx.clearRect(0, 0, W, H);

    if (mode === "tattoo") {
      ctx.fillStyle = "#e9e4dc";
      ctx.fillRect(0, 0, W, H);
      // forearm: a long rounded band with side shading
      const g = ctx.createLinearGradient(0, 70, 0, 530);
      g.addColorStop(0, shade(color, -38));
      g.addColorStop(0.18, color);
      g.addColorStop(0.55, shade(color, 12));
      g.addColorStop(0.85, color);
      g.addColorStop(1, shade(color, -45));
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(-40, 110);
      ctx.bezierCurveTo(400, 70, 800, 80, W + 40, 130);
      ctx.lineTo(W + 40, 500);
      ctx.bezierCurveTo(800, 545, 400, 540, -40, 520);
      ctx.closePath();
      ctx.fill();
    } else if (color !== "transparent") {
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, W, H);
    }

    const fam = FONTS[font].family;
    const maxW = W * 0.84;
    const lh = (size: number) => size * 1.15;
    let size = 150;
    const fits = (s: number) => {
      ctx.font = `${s}px "${fam}", serif`;
      return lines.every((l) => ctx.measureText(l).width <= maxW) && lines.length * lh(s) <= H * 0.6;
    };
    while (size > 24 && !fits(size)) size -= 4;
    ctx.font = `${size}px "${fam}", serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = ink;
    if (mode === "tattoo") ctx.globalAlpha = 0.9;
    const top = H / 2 - ((lines.length - 1) * lh(size)) / 2;
    lines.forEach((l, i) => ctx.fillText(l, W / 2, top + i * lh(size)));
    ctx.globalAlpha = 1;
  }, [backgrounds, bg, font, ink, lines, mode]);

  useEffect(() => {
    draw();
  }, [draw, loaded]);

  function slug() {
    return (lines[0] || "old-english").toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 40);
  }

  function downloadPng() {
    canvasRef.current?.toBlob((b) => {
      if (!b) return;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(b);
      a.download = `${slug()}.png`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    }, "image/png");
  }

  async function downloadSvg() {
    const f = FONTS[font];
    const buf = await fetch(f.file).then((r) => r.arrayBuffer());
    let bin = "";
    new Uint8Array(buf).forEach((b) => (bin += String.fromCharCode(b)));
    const b64 = btoa(bin);
    const color = (PLAIN as Record<string, string>)[bg] ?? "transparent";
    const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const size = Math.min(150, Math.floor((W * 0.84) / Math.max(...lines.map((l) => l.length), 1) * 1.9));
    const top = H / 2 - ((lines.length - 1) * size * 1.15) / 2;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<style>@font-face{font-family:"${f.family}";src:url(data:font/ttf;base64,${b64}) format("truetype");}</style>
${color !== "transparent" ? `<rect width="100%" height="100%" fill="${color}"/>` : ""}
${lines
  .map(
    (l, i) =>
      `<text x="${W / 2}" y="${top + i * size * 1.15}" font-family="${f.family}" font-size="${size}" fill="${ink}" text-anchor="middle" dominant-baseline="middle">${esc(l)}</text>`
  )
  .join("\n")}
</svg>`;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
    a.download = `${slug()}.svg`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }

  return (
    <div className="export">
      <canvas
        ref={canvasRef}
        width={W}
        height={H}
        role="img"
        aria-label={`Preview of "${lines.join(" ")}" in ${FONTS[font].family}`}
      />
      <div className="export-controls">
        <label>
          Text (up to 4 lines)
          <textarea rows={2} value={text} onChange={(e) => setText(e.target.value)} maxLength={120} />
        </label>
        <label>
          Typeface
          <select value={font} onChange={(e) => setFont(e.target.value as FontKey)}>
            {Object.entries(FONTS).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
        </label>
        <label>
          {mode === "tattoo" ? "Skin tone" : "Background"}
          <select value={bg} onChange={(e) => setBg(e.target.value)}>
            {Object.keys(backgrounds).map((k) => (
              <option key={k}>{k}</option>
            ))}
          </select>
        </label>
        <label>
          Ink colour
          <input type="color" value={ink} onChange={(e) => setInk(e.target.value)} />
        </label>
      </div>
      <div className="export-actions">
        <button type="button" className="load-more" onClick={downloadPng}>Download PNG</button>
        {mode === "plain" && (
          <button type="button" className="icon-btn" onClick={downloadSvg}>Download SVG</button>
        )}
      </div>
    </div>
  );
}
