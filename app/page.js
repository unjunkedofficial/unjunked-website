"use client";

import { useMemo, useState } from "react";

export default function Page() {
  return (
    <main id="top">
      <Header />
      <Hero />
      <SocialProof />
      <Why />
      <Bundle />
      <Ingredients />
      <Comparison />
      <SmallBatch />
      <FAQ />
      <Footer />
    </main>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  return (
    <header className="header">
      <div className="container headerInner">
        <a className="brand" href="#top" aria-label="Unjunked Home">
          Unjunked
        </a>

        <nav className="nav">
          <a href="#shop">Shop</a>
          <a href="#ingredients">Transparency</a>
          <a href="#founders">Founders</a>
        </nav>

        <a className="btnPrimary" href="#shop">
          Shop $40 Bundle
        </a>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="container section">
      <div className="heroCard">
        <div className="heroMedia">
          {/* Put hero.jpg in /public */}
          <img className="heroImg" src="/hero.jpg" alt="Unjunked hero" />
          <div className="heroOverlay" />
        </div>

        <div className="heroContent">
          <p className="eyebrow">PREMIUM • CLEAN LABEL • SMALL BATCH</p>
          <h1 className="h1">Reinventing Cookies — Without the Junk.</h1>
          <p className="lead">
            Premium Indian-inspired cookies made with real ingredients. Small batch.
            Shipping included.
          </p>

          <div className="ctaRow">
            <a className="btnPrimary" href="#shop">
              Build Your $40 Box
            </a>
            <a className="btnGhost" href="#ingredients">
              See Ingredients
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Social Proof ---------------- */
function SocialProof() {
  return (
    <section className="container section">
      <div className="strip">
        <div className="stripLeft">⭐ 4.8/5 from 1,200+ customers</div>
        <div className="stripRight">
          <span>“Actually clean. You can taste it.”</span>
          <span>“Not too sweet. Super premium feel.”</span>
          <span>“Best with chai. Zero weird aftertaste.”</span>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why ---------------- */
function Why() {
  return (
    <section id="founders" className="container section">
      <div className="twoCol">
        <div>
          <p className="eyebrow">WHY UNJUNKED EXISTS</p>
          <h2 className="h2">Clean ingredients shouldn’t be a luxury.</h2>
          <p className="copy">
            Most cookies are engineered for shelf life and margins — not people.
            Unjunked is premium Indian-inspired flavour, small batch production, and a
            clean label you can trust.
          </p>
        </div>

        <div className="cards3">
          <Card title="No Palm Oil" desc="No cheap oils. No shortcuts." />
          <Card title="Nothing Artificial" desc="No artificial preservatives or colours." />
          <Card title="Whole Grain Goodness" desc="Whole wheat flour for depth and bite." />
        </div>
      </div>
    </section>
  );
}

function Card({ title, desc }) {
  return (
    <div className="card">
      <div className="dot" />
      <div>
        <div className="cardTitle">{title}</div>
        <div className="cardDesc">{desc}</div>
      </div>
    </div>
  );
}

/* ---------------- Bundle ---------------- */
const PRODUCTS = [
  { id: "pistachio", name: "Pistachio & Cashew", weight: "300g", desc: "Creamy nut duo. Smooth finish.", img: "/pistachio.jpg" },
  { id: "masala", name: "Masala Chai", weight: "300g", desc: "Warm spices. Comfort crunch.", img: "/masala.jpg" },
  { id: "cardamom", name: "Cardamom Butterscotch", weight: "300g", desc: "Butterscotch depth + cardamom lift.", img: "/cardamom.jpg" },
  { id: "mango", name: "Mango & Saffron", weight: "300g", desc: "Alphonso mango + real saffron aroma.", img: "/mango.jpg" },
];

function Bundle() {
  const MAX = 4;
  const [sel, setSel] = useState({});

  const count = useMemo(() => Object.values(sel).filter(Boolean).length, [sel]);
  const canCheckout = count === MAX;

  function toggle(id) {
    setSel((prev) => {
      const next = { ...prev };
      const isOn = !!next[id];
      if (isOn) {
        next[id] = false;
        return next;
      }
      const currentCount = Object.values(next).filter(Boolean).length;
      if (currentCount >= MAX) return prev;
      next[id] = true;
      return next;
    });
  }

  return (
    <section id="shop" className="container section">
      <div className="bundleHead">
        <div>
          <p className="eyebrow">PRODUCT BUNDLE BUILDER</p>
          <h2 className="h2">Build your $40 box.</h2>
          <p className="copy">
            Choose any 4 flavours. Premium ingredients, small batch, shipping included.
          </p>
        </div>

        <div className="counter">
          <span>Bundle</span>
          <b>{count} / {MAX}</b>
        </div>
      </div>

      <div className="grid4">
        {PRODUCTS.map((p) => {
          const isSelected = !!sel[p.id];
          const atLimit = count >= MAX && !isSelected;

          return (
            <div key={p.id} className="product">
              <div className="media">
                <img className="productImg" src={p.img} alt={p.name} />
              </div>

              <div className="productTop">
                <div className="productName">{p.name}</div>
                <div className="badge">{p.weight}</div>
              </div>

              <div className="productDesc">{p.desc}</div>

              <button
                className={`btn ${isSelected ? "btnDark" : "btnLight"} ${atLimit ? "btnDisabled" : ""}`}
                disabled={atLimit}
                onClick={() => toggle(p.id)}
              >
                {isSelected ? "Added (Remove)" : "Add to Bundle"}
              </button>
            </div>
          );
        })}
      </div>

      <div className="stickyBar">
        <div>
          <div className="stickyTitle">$40 — Shipping Included</div>
          <div className="stickySub">
            {count < MAX ? `Select ${MAX - count} more` : "Bundle complete"}
          </div>
        </div>

        <button
          className={`btn ${canCheckout ? "btnDark" : "btnLight btnDisabled"}`}
          disabled={!canCheckout}
          onClick={() => canCheckout && alert("Checkout placeholder. Connect Shopify later.")}
        >
          Checkout
        </button>
      </div>
    </section>
  );
}

/* ---------------- Ingredients ---------------- */
function Ingredients() {
  const items = [
    { t: "Alphonso Mango", d: "Bright, real fruit flavour." },
    { t: "Real Saffron", d: "Aromatic depth." },
    { t: "Stone-ground Cardamom", d: "Fresh lift." },
    { t: "Whole Wheat Flour", d: "Whole grain texture." },
    { t: "Premium Butter", d: "Rich body." },
  ];

  return (
    <section id="ingredients" className="container section">
      <p className="eyebrow">INGREDIENT TRANSPARENCY</p>
      <h2 className="h2">Real ingredients. No filler logic.</h2>
      <div className="grid5">
        {items.map((x) => (
          <div key={x.t} className="mini">
            <div className="dot" />
            <div className="cardTitle">{x.t}</div>
            <div className="cardDesc">{x.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Comparison ---------------- */
function Comparison() {
  const rows = [
    ["Palm oil", "❌", "✅ No palm oil"],
    ["Artificial flavors", "❌", "✅ Real spices"],
    ["Preservatives", "❌", "✅ None"],
    ["Refined flour", "❌", "✅ Whole grain"],
  ];

  return (
    <section className="container section">
      <p className="eyebrow">COMPARISON</p>
      <h2 className="h2">Built Different.</h2>

      <div className="table">
        <div className="tHead">
          <div />
          <div>Regular Cookies</div>
          <div>Unjunked</div>
        </div>
        {rows.map((r) => (
          <div key={r[0]} className="tRow">
            <div className="tLabel">{r[0]}</div>
            <div>{r[1]}</div>
            <div className="tStrong">{r[2]}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Small Batch ---------------- */
function SmallBatch() {
  return (
    <section className="beige">
      <div className="container section center">
        <h2 className="h2 big">Small Batch Production</h2>
        <p className="copy">
          Made fresh in controlled batches to protect flavour and texture.
        </p>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    ["Why $40?", "Premium ingredients, small batch production, and shipping included. No hidden fees."],
    ["Are they eggless?", "Yes. Always eggless."],
    ["Shelf life?", "Stored cool and dry, they stay fresh for weeks."],
    ["Shipping time?", "Most orders arrive within a few business days depending on location."],
    ["Allergens?", "Contains wheat, dairy, and nuts depending on flavour. Always check the label."],
    ["Are they very sweet?", "No. Balanced sweetness without sugar overload."],
  ];

  return (
    <section className="container section">
      <p className="eyebrow">FAQ</p>
      <h2 className="h2">Quick answers.</h2>

      <div className="faq">
        {faqs.map(([q, a]) => (
          <details key={q} className="faqItem">
            <summary className="faqQ">{q}</summary>
            <div className="faqA">{a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div>
          <div className="brand">Unjunked</div>
          <div className="footLine">
            Instagram:{" "}
            <a href="https://instagram.com/unjunked.official" target="_blank" rel="noreferrer">
              @unjunked.official
            </a>
          </div>
          <div className="footLine">
            Email: <a href="mailto:info@ghalleyholdings.com">info@ghalleyholdings.com</a>
          </div>
        </div>

        <div className="footLinks">
          <a href="#shop">Shop</a>
          <a href="#ingredients">Transparency</a>
          <a href="#founders">Founders</a>
          <a href="#wholesale">Wholesale</a>
          <a href="#terms">Terms</a>
          <a href="#refund">Refund Policy</a>
        </div>
      </div>

      <div className="container footCopy">© {new Date().getFullYear()} Unjunked</div>
    </footer>
  );
}
