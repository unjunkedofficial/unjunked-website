export default function SocialProofStrip() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 md:px-6">
      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-sm font-medium text-zinc-950">
            ⭐ 4.8/5 from 1,200+ customers
          </div>

          <div className="grid gap-2 text-sm text-zinc-700 md:grid-cols-3 md:gap-6">
            <div className="truncate">“Actually clean. You can taste it.”</div>
            <div className="truncate">“Not too sweet. Super premium feel.”</div>
            <div className="truncate">“Best with chai. Zero weird aftertaste.”</div>
          </div>
        </div>
      </div>
    </section>
  );
}
