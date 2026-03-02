"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export default function Page() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <SocialProofStrip />
      <WhyUnjunked />
      <BundleBuilder />
      <IngredientTransparency />
      <Comparison />
      <SmallBatch />
      <FAQ />
      <Footer />
    </main>
  );
}

/* ------------------------- HEADER ------------------------- */
function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#top" className="text-sm font-semibold tracking-tight text-zinc-950">
          Unjunked
        </a>

        <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
          <a className="transition hover:text-zinc-950" href="#shop">Shop</a>
          <a className="transition hover:text-zinc-950" href="#ingredients">Transparency</a>
          <a className="transition hover:text-zinc-950" href="#founders">Founders</a>
        </nav>

        <a
          href="#shop"
          className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
        >
          Shop $40 Bundle
        </a>
      </div>
    </header>
  );
}

/* -------------------------- HERO -------------------------- */
function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-4 pt-6 md:px-6 md:pt-10">
      <div className="relative overflow-hidden rounded-3xl border border-zinc-200 shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
        <div className="relative aspect-[16/9]">
          <Image
            src="/hero.jpg"
            alt="Unjunked cookies hero image"
            fill
            priority
            className="object-cover"
          />
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
            Premium Indian-inspired cookies made with real ingredients. Small batch. Shipping included.
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

/* -------------------- SOCIAL PROOF STRIP ------------------- */
function SocialProofStrip() {
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

/* ---------------------- WHY UNJUNKED ---------------------- */
function WhyUnjunked() {
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
            Unjunked is premium Indian-inspired flavour, small batch production,
            and a clean label you can actually trust.
          </p>
        </div>

        <div className="grid gap-4">
          <IconCard title="No Palm Oil" desc="No cheap oils, no shortcuts. Just real ingredients." />
          <IconCard title="Nothing Artificial" desc="No artificial preservatives or colours. No mystery chemistry." />
          <IconCard title="Whole Grain Goodness" desc="Whole wheat flour for depth, texture, and bite." />
        </div>
      </div>
    </section>
  );
}

function IconCard({ title, desc }) {
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

/* -------------------- PRODUCT BUNDLE BUILDER -------------------- */
const PRODUCTS = [
  { id: "pistachio", name: "Pistachio & Cashew", weight: "300g", desc: "Creamy nut duo. Smooth finish.", image: "/pistachio.jpg" },
  { id: "masala", name: "Masala Chai", weight: "300g", desc: "Warm spices. Comfort crunch.", image: "/masala.jpg" },
  { id: "cardamom", name: "Cardamom Butterscotch", weight: "300g", desc: "Butterscotch depth + cardamom lift.", image: "/cardamom.jpg" },
  { id: "mango", name: "Mango & Saffron", weight: "300g", desc: "Alphonso mango + real saffron aroma.", image: "/mango.jpg" },
];

function BundleBuilder() {
  const MAX = 4;
  const [selected, setSelected] = useState({});

  const selectedCount = useMemo(
    () => Object.values(selected).filter(Boolean).length,
    [selected]
  );

  const canCheckout = selectedCount === MAX;

  function toggle(id) {
    setSelected((prev) => {
      const next = { ...prev };
      const isOn = !!next[id];

      if (isOn) {
        next[id] = false;
        return next;
      }

      const count = Object.values(next).filter(Boolean).length;
      if (count >= MAX) return prev;
      next[id] = true;
      return next;
    });
  }

  const helper =
    selectedCount < MAX ? `Select ${MAX - selectedCount} more` : "Bundle complete";

  return (
    <section id="shop" className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-medium tracking-[0.22em] text-zinc-600">
            PRODUCT BUNDLE BUILDER
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
            Build your $40 box.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-700 md:text-base">
            Choose any 4 flavours. Premium ingredients, small batch, shipping included.
          </p>
        </div>

        <div className="inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white px-4 py-2 shadow-sm">
          <span className="text-sm font-medium text-zinc-950">Bundle</span>
          <span className="rounded-full bg-zinc-950 px-3 py-1 text-xs font-semibold text-white">
            {selectedCount} / {MAX} selected
          </span>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PRODUCTS.map((p) => {
          const isSelected = !!selected[p.id];
          const atLimit = selectedCount >= MAX && !isSelected;
          return (
            <article
              key={p.id}
              className="group rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <div className="relative overflow-hidden rounded-xl bg-zinc-50 ring-1 ring-zinc-200">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={p.image}
                    alt={`${p.name} cookie box`}
                    fill
                    className="object-contain p-4 transition duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-zinc-950">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-700">{p.desc}</p>
                </div>
                <span className="shrink-0 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700">
                  {p.weight}
                </span>
              </div>

              <button
                type="button"
                onClick={() => toggle(p.id)}
                disabled={atLimit}
                className={[
                  "mt-4 w-full rounded-full px-4 py-2.5 text-sm font-medium transition",
                  isSelected
                    ? "bg-zinc-950 text-white hover:opacity-90"
                    : "border border-zinc-300 bg-white text-zinc-950 hover:bg-zinc-50",
                  atLimit ? "opacity-40 cursor-not-allowed" : "",
                ].join(" ")}
              >
                {isSelected ? "Added (Remove)" : "Add to Bundle"}
              </button>
            </article>
          );
        })}
      </div>

      {/* Sticky checkout bar */}
      <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="pointer-events-auto flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white/90 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.12)] backdrop-blur md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-semibold text-zinc-950">
                $40 — Shipping Included
              </div>
              <div className="text-xs text-zinc-600">{helper}</div>
            </div>

            <button
              type="button"
              disabled={!canCheckout}
              className={[
                "w-full rounded-full px-5 py-3 text-sm font-semibold transition md:w-auto",
                canCheckout
                  ? "bg-zinc-950 text-white hover:opacity-90"
                  : "bg-zinc-200 text-zinc-500 cursor-not-allowed",
              ].join(" ")}
              onClick={() => {
                if (!canCheckout) return;
                alert("Checkout ready. Connect Shopify when you’re ready.");
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- INGREDIENT TRANSPARENCY ---------------- */
function IngredientTransparency() {
  const items = [
    { title: "Alphonso Mango", desc: "Bright, real fruit flavour — not candy-sweet." },
    { title: "Real Saffron", desc: "Aromatic depth. Premium warmth." },
    { title: "Stone-ground Cardamom", desc: "Fresh lift, clean finish." },
    { title: "Whole Wheat Flour", desc: "Whole grain texture you can feel." },
    { title: "Premium Butter", desc: "Rich body without heaviness." },
  ];

  return (
    <section id="ingredients" className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <p className="text-xs font-medium tracking-[0.22em] text-zinc-600">
        INGREDIENT TRANSPARENCY
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
        Real ingredients. No filler logic.
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-700 md:text-base">
        We keep the label clean and the flavour loud — because additives aren’t for you.
        They’re for shelf life and margins.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {items.map((i) => (
          <div
            key={i.title}
            className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="h-10 w-10 rounded-xl bg-zinc-950/5 ring-1 ring-zinc-950/10" />
            <div className="mt-4 font-semibold text-zinc-950">{i.title}</div>
            <div className="mt-1 text-sm leading-relaxed text-zinc-700">{i.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- COMPARISON TABLE -------------------- */
function Comparison() {
  const rows = [
    { label: "Palm oil", left: "❌", right: "✅ No palm oil" },
    { label: "Artificial flavors", left: "❌", right: "✅ Real spices" },
    { label: "Preservatives", left: "❌", right: "✅ None" },
    { label: "Flour", left: "❌ Refined flour", right: "✅ Whole grain" },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <p className="text-xs font-medium tracking-[0.22em] text-zinc-600">COMPARISON</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
        Built Different.
      </h2>

      <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
        <div className="grid grid-cols-3 border-b border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-950">
          <div />
          <div>Regular Cookies</div>
          <div>Unjunked</div>
        </div>

        {rows.map((r) => (
          <div key={r.label} className="grid grid-cols-3 items-center px-4 py-4 text-sm">
            <div className="font-medium text-zinc-950">{r.label}</div>
            <div className="text-zinc-700">{r.left}</div>
            <div className="font-medium text-zinc-950">{r.right}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- SMALL BATCH SECTION -------------------- */
function SmallBatch() {
  return (
    <section className="bg-[#f6f1ea]">
      <div className="mx-auto max-w-6xl px-4 py-14 text-center md:px-6 md:py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
          Small Batch Production
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-700 md:text-base">
          Made fresh in controlled batches to protect flavour and texture.
        </p>
      </div>
    </section>
  );
}

/* --------------------------- FAQ --------------------------- */
function FAQ() {
  const faqs = [
    { q: "Why $40?", a: "Premium ingredients, small batch production, and shipping included. No hidden fees." },
    { q: "Are they eggless?", a: "Yes. Always eggless." },
    { q: "Shelf life?", a: "Stored cool and dry, they stay fresh for weeks. We optimize for flavour first." },
    { q: "Shipping time?", a: "Most orders arrive within a few business days depending on location." },
    { q: "Allergens?", a: "Contains wheat, dairy, and nuts depending on flavour. Always check the label." },
    { q: "Are they very sweet?", a: "No. Balanced sweetness — premium flavour without sugar overload." },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <p className="text-xs font-medium tracking-[0.22em] text-zinc-600">FAQ</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
        Quick answers.
      </h2>

      <div className="mt-8 grid gap-3">
        {faqs.map((item) => (
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

/* -------------------------- FOOTER -------------------------- */
function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <div className="text-lg font-semibold tracking-tight text-zinc-950">
              Unjunked
            </div>
            <div className="mt-2 text-sm text-zinc-700">
              Instagram:{" "}
              <a
                className="underline underline-offset-4 hover:text-zinc-950"
                href="https://instagram.com/unjunked.official"
                target="_blank"
                rel="noreferrer"
              >
                @unjunked.official
              </a>
            </div>
            <div className="mt-1 text-sm text-zinc-700">
              Email:{" "}
              <a
                className="underline underline-offset-4 hover:text-zinc-950"
                href="mailto:info@ghalleyholdings.com"
              >
                info@ghalleyholdings.com
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm text-zinc-700 md:justify-self-end md:text-right">
            <a className="transition hover:text-zinc-950" href="#shop">Shop</a>
            <a className="transition hover:text-zinc-950" href="#ingredients">Transparency</a>
            <a className="transition hover:text-zinc-950" href="#founders">Founders</a>
            <a className="transition hover:text-zinc-950" href="#wholesale">Wholesale</a>
            <a className="transition hover:text-zinc-950" href="#terms">Terms</a>
            <a className="transition hover:text-zinc-950" href="#refund">Refund Policy</a>
          </div>
        </div>

        <div className="mt-10 text-xs text-zinc-500">
          © {new Date().getFullYear()} Unjunked. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
