function IconCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className="mt-1 h-9 w-9 rounded-xl bg-zinc-950/5 ring-1 ring-zinc-950/10" />
        <div>
          <div className="font-semibold text-zinc-950">{title}</div>
          <div className="mt-1 text-sm leading-relaxed text-zinc-700">{desc}</div>
        </div>
      </div>
    </div>
  );
}

export default function WhyUnjunked() {
  return (
    <section id="founders" className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        <div>
          <p className="text-xs font-medium tracking-[0.22em] text-zinc-600">
            WHY UNJUNKED EXISTS
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
            Clean ingredients shouldn’t be a luxury.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-700 md:text-base">
            Most cookies are engineered for shelf life and margins — not people.
            Unjunked is built different: premium Indian-inspired flavour, small batch
            production, and a clean label you can actually trust.
          </p>
        </div>

        <div className="grid gap-4">
          <IconCard
            title="No Palm Oil"
            desc="No cheap oils, no shortcuts. Just real ingredients that belong in your kitchen."
          />
          <IconCard
            title="Nothing Artificial"
            desc="No artificial preservatives or colours. No mystery ‘flavour’ chemistry."
          />
          <IconCard
            title="Whole Grain Goodness"
            desc="Whole wheat flour for depth, texture, and a more satisfying bite."
          />
        </div>
      </div>
    </section>
  );
}
