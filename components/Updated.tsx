import Link from "next/link";
import { lastModified } from "@/lib/lastmod";

/** "Updated <date> · Old English Font Generator" line, from the copy file's last commit. */
export default function Updated({ file, note }: { file: string; note?: string }) {
  const iso = lastModified(file);
  if (!iso) return null;
  const date = new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
  return (
    <p className="updated">
      Updated <time dateTime={iso.slice(0, 10)}>{date}</time> · by <Link href="/about">Old English Font Generator</Link>
      {note ? ` · ${note}` : ""}
    </p>
  );
}
