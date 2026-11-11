import RichText from "@/components/RichText";

// FAQ answers stay visible (no collapsed <details>): the answer text is what
// AI Overviews and assistants quote, and readers shouldn't have to click.
export default function Faq({ items, heading = "Frequently Asked Questions" }: { items: { q: string; a: string }[]; heading?: string }) {
  return (
    <section className="section faq">
      <div className="container">
        <h2>{heading}</h2>
        {items.map((f) => (
          <div className="faq-item" key={f.q}>
            <h3>{f.q}</h3>
            <p><RichText text={f.a} /></p>
          </div>
        ))}
      </div>
    </section>
  );
}
