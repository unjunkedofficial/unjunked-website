"use client";

import { useMemo, useState } from "react";

const EMAIL = "info@ghalleyholdings.com";

// Product facts
const UNIT_SIZE = "300g";
const BUNDLE_PRICE = 30; // $30 pick 3

// Images expected in /public:
// hero.jpeg
// mango.jpg
// masala.jpg
// cardamom.jpg
// cashew.jpg
const PRODUCTS = [
  {
    id: "mango-saffron",
    name: "Mango Saffron",
    oneLiner: "Bright mango with a saffron finish. Clean and addictive.",
    image: "/mango.jpg",
    badge: "Fan favourite",
  },
  {
    id: "masala-chai",
    name: "Masala Chai",
    oneLiner: "Warm chai spice, bakery-style bite. Cozy but premium.",
    image: "/masala.jpg",
    badge: "Chai energy",
  },
  {
    id: "cardamom-butterscotch",
    name: "Cardamom Butterscotch",
    oneLiner: "Aromatic cardamom + rich butterscotch. Straight luxury.",
    image: "/cardamom.jpg",
    badge: "Premium pick",
  },
  {
    id: "pistachio-cashew",
    name: "Pistachio & Cashew",
    oneLiner: "Nutty, buttery, satisfying — real pistachio-cashew character.",
    image: "/cashew.jpg",
    badge: "Nut-forward",
  },
];

export default function Page() {
  const [selected, setSelected] = useState([]); // array of product ids

  const selectedProducts = useMemo(
    () => PRODUCTS.filter((p) => selected.includes(p.id)),
    [selected]
  );

  const canAddMore = selected.length < 3;

  function togglePick(id) {
    setSelected((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 3) return prev; // max 3
      return [...prev, id];
    });
  }

  const mailto = useMemo(() => {
    const picks = selectedProducts.map((p) => p.name).join(", ") || "Not selected yet";
    const subject = encodeURIComponent("Unjunked Cookies — Pick 3 Order");
    const body = encodeURIComponent(
      `Hi Unjunked team,\n\nI’d like to order the Pick 3 bundle ($${BUNDLE_PRICE}).\n\nPicks: ${picks}\nSize: ${UNIT_SIZE} each\n\nName:\nPhone:\nCity/Postal Code:\n\nThanks!`
    );
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }, [selectedProducts]);

  return (
    <main>
      {/* NAV */}
      <div className="navbar">
        <div className="container navInner">
          <div className="brand">
            <div className="brandMark">U</div>
            <div className="brandText">
              <div className="name">Unjunked</div>
              <div className="tag">Clean snacks, done right</div>
            </div>
          </div>

          <div className="navLinks">
            <a href="#promise">Promise</a>
            <a href="#products">Flavours</a>
            <a href="#bundle">Pick 3</a>
            <a href="#whyprice">Why $30</a>
            <a href="#founders">Founders</a>
          </div>

          <div className="navCtas">
            <a className="btn btnGhost" href="#products">See the line</a>
            <a className="btn btnPrimary" href="#bundle">Build your Pick 3</a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="heroGrid">
            <div>
              <div className="chip kicker">
                <span className="dot" />
                Small-batch cookies • Always fresh
              </div>

              <h1 className="h1">
                Clean cookies.
                <br />
                Big flavour.
                <br />
                Zero junk.
              </h1>

              <p className="sub">
                We make Unjunked in small batches so it stays fresh every single time.
                Premium ingredients. Premium flavour. No filler ingredients.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
                <a className="btn btnPrimary" href="#bundle">
                  Pick 3 for ${BUNDLE_PRICE}
                </a>
                <a className="btn btnGhost" href="#products">
                  Explore flavours
                </a>
              </div>

              <div className="pills">
                <span className="pill">{UNIT_SIZE} each</span>
                <span className="pill">Small-batch production</span>
                <span className="pill">Quality ingredients + logistics included</span>
              </div>
            </div>

            <div>
              <div className="heroCard">
                <img className="heroImg" src="/hero.jpeg" alt="Unjunked lifestyle" />
                <div className="heroGlow" />
              </div>

              <div className="heroMiniGrid">
                <div className="mini">
                  <h4>Made fresh</h4>
                  <p>Small batches so every box feels just-made.</p>
                </div>
                <div className="mini">
                  <h4>Premium by design</h4>
                  <p>Quality inputs cost more. The taste shows it.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust bar like IM8 vibe */}
          <div className="trustBar">
            <div className="container trustInner">
              <div className="trustLeft">
                <span className="stat">Pick 3 • ${BUNDLE_PRICE}</span>
                <span className="stat">{UNIT_SIZE} each</span>
                <span className="stat">Small batch</span>
                <span className="stat">Always fresh</span>
              </div>
              <div className="trustRight">
                <a className="btn btnGhost" href={`mailto:${EMAIL}?subject=Unjunked%20Cookies%20Question`}>Questions</a>
                <a className="btn btnPrimary" href="#bundle">Build your box</a>
              </div>
            </div>
          </div>

          {/* Marquee */}
          <div className="marqueeWrap">
            <div className="marquee">
              <span>SMALL BATCH</span>
              <span className="accent">MADE FRESH</span>
              <span>REAL INGREDIENTS</span>
              <span className="accent">ZERO JUNK</span>
              <span>PREMIUM FLAVOURS</span>
              <span className="accent">{UNIT_SIZE} EACH</span>

              <span>SMALL BATCH</span>
              <span className="accent">MADE FRESH</span>
              <span>REAL INGREDIENTS</span>
              <span className="accent">ZERO JUNK</span>
              <span>PREMIUM FLAVOURS</span>
              <span className="accent">{UNIT_SIZE} EACH</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section id="promise" className="section">
        <div className="container">
          <div className="sectionHead">
            <div className="eyebrow">Our promise</div>
            <div className="h2">Clean label — actually clean.</div>
            <div className="desc">
              Ingredients you can stand behind.
