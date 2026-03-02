import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-4 pt-6 md:px-6 md:pt-10">
      <div className="relative overflow-hidden rounded-3xl border border-zinc-200 shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
        {/* 16:9 hero */}
        <div className="relative aspect-[16/9]">
          <Image
            src="/hero.jpg"
            alt="Unjunked cookies hero image"
            fill
            priority
            className="object-cover"
          />

          {/* gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-transparent to-transparent" />
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
          <p className="text-xs font-medium tracking-[0.22em] text-zinc-700">
            PREMIUM • CLEAN LABEL • SMALL BATCH
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
            Reinventing Cookies — Without the Junk.
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-700 md:text-base">
            Premium Indian-inspired cookies made with real ingredients. Small batch.
            Shipping included.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#shop"
              className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              Build Your $40 Box
            </a>
            <a
              href="#ingredients"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-950 shadow-sm transition hover:bg-zinc-50"
            >
              See Ingredients
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
