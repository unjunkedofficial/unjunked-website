"use client";

import { useMemo, useState } from "react";

const EMAIL = "info@ghalleyholdings.com";
const UNIT_SIZE = "300g";
const BUNDLE_PRICE = 30;

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
  const [selected, setSelected] = useState([]); // product ids
  const picked = useMemo(() => PRODUCTS.filter((p) => selected.includes(p.id)), [selected]);
  const pickedCount = selected.length;

  function togglePick(id) {
    setSelected((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 3) return prev;
      return [...prev, id];
    });
  }

  const mailto = useMemo(() => {
    const picks = picked.map((p) => p.name).join(", ") || "Not selected yet";
    const subject = encodeURIComponent(`Unjunked Cookies — Pick 3 ($${BUNDLE_PRICE})`);
    const body = encodeURIComponent(
      `Hi Unjunked team,\n\nI'd like to order the Pick 3 bundle ($${BUNDLE_PRICE}).\n\nPicks: ${picks}\nSize: ${UNIT_SIZE} each\n\nName:\nPhone:\nCity/Postal Code:\n\nThanks!`
    );
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }, [picked]);

  const canCheckout = pickedCount === 3;

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
              <div className="chip">
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
                Premium ingredients. Logistics included. No filler ingredients.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
                <a className="btn btnPrimary" href="#bundle">Pick 3 for ${BUNDLE_PRICE}</a>
                <a className="btn btnGhost" href="#products">Explore flavours</a>
              </div>

              <div className="pills">
                <span className="pill">{UNIT_SIZE} each</span>
                <span className="pill">Small batch production</span>
                <span className="pill">Quality ingredients</span>
                <span className="pill">Always fresh</span>
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

          {/* Trust bar */}
          <div className="trustBar">
            <div className="container trustInner">
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <span className="stat">Pick 3 • ${BUNDLE_PRICE}</span>
                <span className="stat">{UNIT_SIZE} each</span>
                <span className="stat">Small batch</span>
                <span className="stat">Always fresh</span>
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
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
              Ingredient lists you can stand behind. Flavours you’ll crave.
            </div>
          </div>

          <div className="grid3">
            <div className="feature">
              <div className="featureTop">
                <div className="badgeIcon">✓</div>
                <div className="eyebrow">No artificial</div>
              </div>
              <h3>No artificial anything</h3>
              <p>No artificial flavours, colours, or preservatives. Period.</p>
            </div>

            <div className="feature">
              <div className="featureTop">
                <div className="badgeIcon">✓</div>
                <div className="eyebrow">Transparency</div>
              </div>
              <h3>Real ingredients</h3>
              <p>Short lists. Quality ingredients. No filler ingredients.</p>
            </div>

            <div className="feature">
              <div className="featureTop">
                <div className="badgeIcon">✓</div>
                <div className="eyebrow">Taste</div>
              </div>
              <h3>Big flavour</h3>
              <p>Global flavour profiles designed to taste premium — not “healthy and boring”.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FLAVOURS */}
      <section id="products" className="sectionAlt">
        <div className="container">
          <div className="sectionHead">
            <div className="eyebrow">The line</div>
            <div className="h2">Four flavours. One standard.</div>
            <div className="desc">Pick your favourites. Then build your Pick 3 box.</div>
          </div>

          <div className="grid4">
            {PRODUCTS.map((p) => {
              const isSelected = selected.includes(p.id);
              return (
                <div className="card" key={p.id}>
                  <div className="imgBox">
                    <img src={p.image} alt={p.name} />
                  </div>

                  <div className="cardTitle">{p.name}</div>
                  <div className="cardText">{p.oneLiner}</div>
                  <div className="cardBadge">{p.badge} • {UNIT_SIZE}</div>

                  <div className="cardActions">
                    <button
                      className={`btn ${isSelected ? "btnPrimary" : "btnGhost"}`}
                      style={{ padding: "10px 12px", borderRadius: 14, fontSize: 13 }}
                      onClick={() => togglePick(p.id)}
                    >
                      {isSelected ? "Picked" : "Pick"}
                    </button>
                    <a
                      className="btn btnGhost"
                      style={{ padding: "10px 12px", borderRadius: 14, fontSize: 13 }}
                      href="#bundle"
                    >
                      Build box
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bundle bar */}
          <section id="bundle" className="bundleBar">
            <div>
              <div className="bundleTitle">Pick 3 for ${BUNDLE_PRICE}</div>
              <div className="bundleText">
                {UNIT_SIZE} each. Premium ingredients + logistics included. Small-batch made to keep it fresh.
              </div>
              <div style={{ marginTop: 10, display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                <span className="counter">Selected: {pickedCount}/3</span>
                <span className="selectHint">{pickedCount < 3 ? "Pick 3 to enable checkout" : "Ready to order"}</span>
              </div>
            </div>

            <div className="bundleRight">
              <a className="btn btnGhost" href="#products">Keep picking</a>
              <a
                className="btn btnPrimary"
                href={mailto}
                style={{
                  opacity: canCheckout ? 1 : 0.5,
                  pointerEvents: canCheckout ? "auto" : "none",
                }}
              >
                Order via email
              </a>
            </div>
          </section>
        </div>
      </section>

      {/* WHY $30 */}
      <section id="whyprice" className="section">
        <div className="container">
          <div className="sectionHead">
            <div className="eyebrow">Why it’s $30</div>
            <div className="h2">We know it’s premium.</div>
            <div className="desc">
              The difference is in the inputs — and in the experience. This is built to feel worth it.
            </div>
          </div>

          <div className="grid2">
            <div className="panel">
              <h3>Quality ingredients</h3>
              <p>
                We source for flavour and quality, not the cheapest possible formulation.
                That’s the point — and you taste it.
              </p>
              <div className="rule">
                <small>What this means</small>
                <strong>Better inputs, better flavour, better product.</strong>
              </div>
            </div>

            <div className="panel">
              <h3>Logistics included</h3>
              <p>
                Real food isn’t free to move. Storage, handling, and logistics are part of delivering a premium experience.
              </p>
              <div className="rule">
                <small>What this means</small>
                <strong>We price it honestly — and make it worth it.</strong>
              </div>
            </div>

            <div className="panel">
              <h3>Small-batch freshness</h3>
              <p>
                We keep production tight so cookies stay fresh every single time. No “old batch” experience.
              </p>
              <div className="rule">
                <small>What this means</small>
                <strong>Freshness is built-in, not hoped for.</strong>
              </div>
            </div>

            <div className="panel">
              <h3>Modern premium packaging</h3>
              <p>
                Shelf presence matters. Unjunked is designed to look premium and feel premium.
              </p>
              <div className="rule">
                <small>What this means</small>
                <strong>People pick it up — then repeat buy it.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section id="founders" className="sectionAlt">
        <div className="container">
          <div className="sectionHead">
            <div className="eyebrow">Founders</div>
            <div className="h2">Built by people who care what goes inside.</div>
            <div className="desc">Not a marketing angle — a real standard we hold ourselves to.</div>
          </div>

          <div className="founderBox">
            <div className="founderHeader">
              <div className="names">
                Andy Ghalley — CEO & Co-Founder
                <br />
                Chitwan Ghalley — Co-Founder & President
              </div>
              <a className="btn btnGhost" href={`mailto:${EMAIL}?subject=Unjunked%20Inquiry`}>Contact</a>
            </div>

            <div style={{ marginTop: 14, color: "var(--muted)", lineHeight: 1.8 }}>
              <p>
                Unjunked started with a simple frustration: why do so many everyday snacks hide behind long ingredient lists
                and unnecessary additives?
              </p>
              <p>
                As founders, we wanted cookies we’d confidently bring into our own home — made with real ingredients,
                without artificial fillers, and without compromising on flavour.
              </p>
              <p>
                What began as a conversation around clean labels became a commitment. Every Unjunked product reflects our belief
                that transparency matters, taste matters, and simplicity wins.
              </p>
              <p>
                We’re building Unjunked as a long-term brand — one that earns trust on shelf and in households across North America.
              </p>
              <div className="signature">— Andy & Chitwan</div>
            </div>
          </div>

          <div className="emailBox">
            <div>
              <div className="emailTitle">Want updates and drops?</div>
              <div className="emailText">Join the Unjunked list. No spam. Just launches and early access.</div>
            </div>

            <div className="emailRow">
              <input className="input" placeholder="Email" />
              <a className="btn btnPrimary" href={`mailto:${EMAIL}?subject=Unjunked%20Newsletter%20Signup`}>Join</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footerInner">
          <div>
            <div style={{ fontWeight: 1000 }}>Unjunked</div>
            <div style={{ color: "var(--muted)", marginTop: 6 }}>Clean snacks, done right.</div>
            <div style={{ marginTop: 10 }}>
              <a className="btn btnGhost" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </div>

          <div className="footerCols">
            <div>
              <div className="footerTitle">Explore</div>
              <a className="footerLink" href="#products">Flavours</a>
              <a className="footerLink" href="#bundle">Pick 3</a>
              <a className="footerLink" href="#whyprice">Why $30</a>
            </div>
            <div>
              <div className="footerTitle">Company</div>
              <a className="footerLink" href="#promise">Promise</a>
              <a className="footerLink" href="#founders">Founders</a>
            </div>
            <div>
              <div className="footerTitle">Contact</div>
              <a className="footerLink" href={`mailto:${EMAIL}`}>Email us</a>
            </div>
          </div>
        </div>

        <div className="container footerBottom">
          © {new Date().getFullYear()} Unjunked. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
