"use client";

import { useEffect, useState } from "react";

/** One click listener for every server-rendered [data-copy] button on the page
 *  (the full character tables), so hundreds of cells need no hydration. */
export default function CopyDelegate() {
  const [toast, setToast] = useState<string | null>(null);
  useEffect(() => {
    let t: ReturnType<typeof setTimeout> | undefined;
    const onClick = async (e: MouseEvent) => {
      const b = (e.target as HTMLElement).closest<HTMLElement>("[data-copy]");
      if (!b) return;
      try {
        await navigator.clipboard.writeText(b.dataset.copy ?? "");
        setToast(`Copied ${b.getAttribute("aria-label")?.replace(/^Copy /, "") ?? ""}`);
      } catch {
        setToast("Copy failed — long-press the character instead");
      }
      clearTimeout(t);
      t = setTimeout(() => setToast(null), 1400);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return <div className={`toast ${toast ? "show" : ""}`} role="status" aria-live="polite">{toast}</div>;
}
