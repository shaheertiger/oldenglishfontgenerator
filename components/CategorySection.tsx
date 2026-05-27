import Link from "next/link";
import { pickStyles } from "@/lib/fonts";

type Props = {
  title: string;
  description: string;
  href: string;
  styles: string[];
  sample?: string;
  browseLabel?: string;
};

export default function CategorySection({
  title,
  description,
  href,
  styles,
  sample = "Type your text",
  browseLabel,
}: Props) {
  const items = pickStyles(styles).map((s) => ({
    id: s.id,
    name: s.name,
    output: s.transform(sample),
  }));

  return (
    <section className="cat-section">
      <div className="cat-head">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Link href={href} className="cat-browse">
          {browseLabel ?? `Browse all ${title.toLowerCase()} →`}
        </Link>
      </div>
      <div className="cat-grid">
        {items.map((s) => (
          <Link href={href} key={s.id} className="cat-card">
            <div className="cat-card-eyebrow">{s.name}</div>
            <div className="cat-card-preview">{s.output}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
