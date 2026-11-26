"use client";

import { useEffect } from "react";

/** Google Analytics, loaded on the first interaction (or after 8 s) so its
 *  ~400 ms of script work doesn't block the first screen (growth plan step 5).
 *  Trade-off: GA misses visitors who leave within 8 s without touching the page;
 *  Vercel Analytics still counts every visit. To revert, load gtag with
 *  next/script in app/layout.tsx again. */
export default function DeferredGA({ id }: { id: string }) {
  useEffect(() => {
    let done = false;
    const load = () => {
      if (done) return;
      done = true;
      events.forEach((e) => window.removeEventListener(e, load));
      clearTimeout(timer);
      const w = window as unknown as { dataLayer: unknown[]; gtag: (...a: unknown[]) => void };
      w.dataLayer = w.dataLayer || [];
      w.gtag = function () { w.dataLayer.push(arguments); };
      w.gtag("js", new Date());
      w.gtag("config", id);
      const s = document.createElement("script");
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
      document.head.appendChild(s);
    };
    const events = ["pointerdown", "keydown", "scroll", "touchstart"];
    events.forEach((e) => window.addEventListener(e, load, { once: true, passive: true }));
    const timer = setTimeout(load, 8000);
    return () => { events.forEach((e) => window.removeEventListener(e, load)); clearTimeout(timer); };
  }, [id]);
  return null;
}
