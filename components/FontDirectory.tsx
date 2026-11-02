"use client";

import { useEffect, useState } from "react";
import { cssHref, GROUP_LABEL, specimenUrl, type RealFont } from "@/lib/realfonts";

// Live preview of the visitor's text in real open-licence fonts.
// The Google Fonts stylesheet is injected after hydration so it never blocks
// first paint; cards have a fixed preview height to avoid layout shift.
export default function FontDirectory({
  fonts,
  sample,
  compact = false,
  placeholder = "Type to preview in every font…",
  notes,
}: {
  notes?: Record<string, string>;
  fonts: RealFont[];
  sample: string;
  compact?: boolean;
  placeholder?: string;
}) {
  const [text, setText] = useState("");
  useEffect(() => {
    const id = "gf-" + fonts.map((f) => f.family).join("|");
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = cssHref(fonts);
    document.head.appendChild(link);
  }, [fonts]);

  const shown = text.trim() || sample;

  return (
    <div className="fontdir">
      {!compact && (
        <div className="input-row">
          <textarea
            rows={1}
            value={text}
            maxLength={80}
            placeholder={placeholder}
            aria-label="Text to preview in each font"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      )}
      <ul className={`font-cards ${compact ? "compact" : ""}`}>
        {fonts.map((f) => (
          <li key={f.family} className="font-card">
            <div className="font-preview" style={{ fontFamily: `"${f.family}", serif`, fontWeight: f.weight }}>
              {shown}
            </div>
            <div className="font-meta">
              <strong>{f.family}</strong>
              {!compact && (
                <span>
                  {GROUP_LABEL[f.group]} · {f.designers} · SIL OFL
                </span>
              )}
            </div>
            {!compact && <p className="font-blurb">{notes?.[f.family] ?? f.blurb}</p>}
            {!compact && (
              <a className="font-dl" href={specimenUrl(f)} target="_blank" rel="noopener">
                Download free on Google Fonts ↗
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
