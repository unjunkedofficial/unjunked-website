const FAQS = [
  {
    q: "Why $40?",
    a: "Because we use premium ingredients, small batch production, and we include shipping. No hidden fees.",
  },
  { q: "Are they eggless?", a: "Yes. Always eggless." },
  {
    q: "Shelf life?",
    a: "Stored cool and dry, they stay fresh for weeks. We optimize for flavour first, not endless shelf life.",
  },
  {
    q: "Shipping time?",
    a: "Most orders ship quickly and arrive within a few business days depending on location.",
  },
  {
    q: "Allergens?",
    a: "Contains wheat, dairy, and nuts depending on flavour. Always check the label if you have allergies.",
  },
  {
    q: "Are they very sweet?",
    a: "No. Balanced sweetness — premium flavour without the sugar overload.",
  },
];

export default function FAQ() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <p className="text-xs font-medium tracking-[0.22em] text-zinc-600">FAQ</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
        Quick answers.
      </h2>

      <div className="mt-8 grid gap-3">
        {FAQS.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <summary className="cursor-pointer list-none font-semibold text-zinc-950">
              <span className="inline-flex items-center justify-between gap-3">
                {item.q}
                <span className="text-zinc-400 transition group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
