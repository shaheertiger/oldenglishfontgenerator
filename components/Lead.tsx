"use client";

import { useState, type ReactNode } from "react";

/** Intro paragraph. On phones it shows two lines and a "More" toggle so the
 *  tool stays above the fold; the full text is always in the HTML. */
export default function Lead({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <p className={`lead${open ? "" : " clamp"}`}>{children}</p>
      {!open && (
        <button type="button" className="lead-more" onClick={() => setOpen(true)}>
          More
        </button>
      )}
    </>
  );
}
