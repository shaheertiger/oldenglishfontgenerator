import type { CharGroup } from "@/components/CharGrid";
import CopyDelegate from "@/components/CopyDelegate";

/** Server-rendered tap-to-copy character table: plain text in the HTML, no per-cell JS. */
export default function CopyGrid({ groups }: { groups: CharGroup[] }) {
  return (
    <div>
      {groups.map((g) => (
        <div key={g.label}>
          <div className="grid-label">{g.label}</div>
          <ul className="letter-grid compact">
            {g.cells.map((c) => (
              <li key={g.label + c.hint}>
                <button type="button" className="g" data-copy={c.glyph} aria-label={`Copy ${c.hint}`}>{c.glyph}</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <CopyDelegate />
    </div>
  );
}
