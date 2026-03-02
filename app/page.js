"use client";

import { useMemo, useState } from "react";

export default function Page() {
import { useMemo, useState } from "react";

export default function Page() {
  return (
    <main id="top">
      <Header />
      <Hero />
      <Bundle />
      <Footer />
    </main>
  );
}

/* ---------------- HEADER ---------------- */
function Header() {
  return (
    <header className="header">
      <div className="container headerInner">
        <div className="brand">Unjunked</div>

        <nav className="nav">
          <a href="#shop">Shop</a>
        </nav>

        <a className="btnPrimary" href="#shop">
          Shop $40 Bundle
        </a>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="container section">
      <div className="heroCard">
        <div className="heroMedia">
          <img className="heroImg" src="/hero.jpg" alt="Unjunked hero" />
          <div className="heroOverlay" />
        </div>

        <div className="heroContent">
          <h1 className="h1">Reinventing Cookies — Without the Junk.</h1>
          <p className="lead">
            Premium Indian-inspired cookies made with real ingredients.
            Small batch. Shipping included.
          </p>

          <div className="ctaRow">
            <a className="btnPrimary" href="#shop">
              Build Your $40 Box
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- BUNDLE ---------------- */

const PRODUCTS = [
  { id: "p1", name: "Pistachio & Cashew", img: "/pistachio.jpg" },
  { id: "p2", name: "Masala Chai", img: "/masala.jpg" },
  { id: "p3", name: "Cardamom Butterscotch", img: "/cardamom.jpg" },
  { id: "p4", name: "Mango & Saffron", img: "/mango.jpg" },
];

function Bundle() {
  const MAX = 4;
  const [selected, setSelected] = useState({});

  const count = useMemo(
    () => Object.values(selected).filter(Boolean).length,
    [selected]
  );

  function toggle(id) {
    setSelected((prev) => {
      const next = { ...prev };
      const isOn = !!next[id];

      if (isOn) {
        next[id] = false;
        return next;
      }

      const current = Object.values(next).filter(Boolean).length;
      if (current >= MAX) return prev;

      next[id] = true;
      return next;
    });
  }

  return (
    <section id="shop" className="container section">
      <h2 className="h2">Build your $40 box.</h2>

      <div className="grid">
        {PRODUCTS.map((p) => {
          const isSelected = !!selected[p.id];
          const disabled = count >= MAX && !isSelected;

          return (
            <div key={p.id} className="card">
              <img src={p.img} className="productImg" alt={p.name} />
              <div className="cardTitle">{p.name}</div>

              <button
                className={`btn ${isSelected ? "btnDark" : ""}`}
                disabled={disabled}
                onClick={() => toggle(p.id)}
              >
                {isSelected ? "Added (Remove)" : "Add to Bundle"}
              </button>
            </div>
          );
        })}
      </div>

      <div className="checkoutBar">
        <div>$40 — Shipping Included</div>
        <div>{count} / {MAX} selected</div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div>
          <div className="brand">Unjunked</div>
          <div>Email: info@ghalleyholdings.com</div>
          <div>Instagram: @unjunked.official</div>
        </div>
      </div>
    </footer>
  );
}
