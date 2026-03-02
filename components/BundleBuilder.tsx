"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Product = {
  id: string;
  name: string;
  weight: string;
  desc: string;
  image: string;
};

const PRODUCTS: Product[] = [
  {
    id: "pistachio-cashew",
    name: "Pistachio & Cashew",
    weight: "300g",
    desc: "Creamy nut duo. Smooth, balanced finish.",
    image: "/pistachio.jpg",
  },
  {
    id: "masala-chai",
    name: "Masala Chai",
    weight: "300g",
    desc: "Warm spices. Comforting crunch.",
    image: "/masala.jpg",
  },
  {
    id: "cardamom-butterscotch",
    name: "Cardamom Butterscotch",
    weight: "300g",
    desc: "Butterscotch depth + cardamom lift.",
    image: "/cardamom.jpg",
  },
  {
    id: "mango-saffron",
    name: "Mango & Saffron",
    weight: "300g",
    desc: "Alphonso mango + real saffron aroma.",
    image: "/mango.jpg",
  },
];

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function ProductCard({
  product,
  selectedCount,
  max,
  isSelected,
  onToggle,
}: {
  product: Product;
  selectedCount: number;
  max: number;
  isSelected: boolean;
  onToggle: () => void;
}) {
  const atLimit = selectedCount >= max && !isSelected;

  return (
    <article className="group rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="relative overflow-hidden rounded-xl bg-zinc-50 ring-1 ring-zinc-200">
        <div className="relative aspect-[4/3]">
          <Image
            src={product.image}
            alt={`${product.name} cookie box`}
            fill
            className="object-contain p-4 transition duration-300 group-hover:scale-[1.02]"
          />
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold tracking-tight text-zinc-950">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-zinc-700">{product.desc}</p>
        </div>

        <span className="shrink-0 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700">
          {product.weight}
        </span>
      </div>

      <button
        type="button"
        onClick={onToggle}
        disabled={atLimit}
        aria-disabled={atLimit}
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
}

export default function BundleBuilder() {
  const MAX = 4;
  const [selected, setSelected] = useState<Record<string, boolean>>({});

  const selectedCount = useMemo(
    () => Object.values(selected).filter(Boolean).length,
    [selected]
  );

  const canCheckout = selectedCount === MAX;

  function toggle(id: string) {
    setSelected((prev) => {
      const next = { ...prev };
      const current = !!next[id];

      if (current) {
        next[id] = false;
        return next;
      }

      // add
      const count = Object.values(next).filter(Boolean).length;
      if (count >= MAX) return prev;
      next[id] = true;
      return next;
    });
  }

  const stickyLabel =
    selectedCount < MAX
      ? `Select ${clamp(MAX - selectedCount, 0, MAX)} more`
      : "Bundle complete";

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
        {PRODUCTS.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            selectedCount={selectedCount}
            max={MAX}
            isSelected={!!selected[p.id]}
            onToggle={() => toggle(p.id)}
          />
        ))}
      </div>

      {/* Sticky bottom bar */}
      <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="pointer-events-auto flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white/90 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.12)] backdrop-blur md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between gap-4 md:justify-start">
              <div>
                <div className="text-sm font-semibold text-zinc-950">
                  $40 — Shipping Included
                </div>
                <div className="text-xs text-zinc-600">{stickyLabel}</div>
              </div>

              <div className="md:hidden rounded-full bg-zinc-950 px-3 py-1 text-xs font-semibold text-white">
                {selectedCount} / {MAX}
              </div>
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
                // Placeholder action; connect to Shopify later
                alert("Checkout ready. Connect Shopify when you’re ready.");
              }}
              aria-disabled={!canCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
