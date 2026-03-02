export default function Comparison() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <p className="text-xs font-medium tracking-[0.22em] text-zinc-600">
        COMPARISON
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
        Built Different.
      </h2>

      <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
        <div className="grid grid-cols-3 border-b border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-950">
          <div />
          <div>Regular Cookies</div>
          <div>Unjunked</div>
        </div>

        {[
          { label: "Palm oil", left: "❌", right: "✅ No palm oil" },
          { label: "Artificial flavors", left: "❌", right: "✅ Real spices" },
          { label: "Preservatives", left: "❌", right: "✅ None" },
          { label: "Flour", left: "❌ Refined flour", right: "✅ Whole grain" },
        ].map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-3 items-center px-4 py-4 text-sm"
          >
            <div className="font-medium text-zinc-950">{row.label}</div>
            <div className="text-zinc-700">{row.left}</div>
            <div className="font-medium text-zinc-950">{row.right}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
