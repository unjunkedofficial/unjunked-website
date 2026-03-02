// app/page.js

const EMAIL = "info@ghalleyholdings.com";

/**
 * Images expected in /public:
 * hero.jpeg  (you currently have hero.jpeg)
 * mango.jpg
 * masala.jpg
 * cardamom.jpg
 * cashew.jpg
 */
const products = [
  {
    id: "mango-saffron",
    name: "Mango Saffron",
    oneLiner: "Bright mango with a saffron finish. Clean and addictive.",
    image: "/mango.jpg",
    badge: "Best-seller energy",
  },
  {
    id: "masala-chai",
    name: "Masala Chai",
    oneLiner: "Warm chai spice, bakery-style bite. Cozy but premium.",
    image: "/masala.jpg",
    badge: "Chai lovers",
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
            <a href="#why">Why</a>
            <a href="#founders">Founders</a>
            <a href="#retail">Retail</a>
          </div>

          <div className="navCtas">
            <a className="btn btnGhost" href="#products">See the line</a>
            <a className="btn btnPrimary" href="#retail">Shop now</a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="heroGrid">
            <div>
              <div className="kicker">
                <span className="dot" />
                Snacks. Unjunked.
              </div>

              <h1 className="h1">
                Real ingredients.
                <br />
                No fillers.
                <br />
                No nonsense.
              </h1>

              <p className="sub">
                Ingredient lists shouldn’t read like chemistry textbooks.
                Unjunked keeps it simple — and keeps the flavour.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
                <a className="btn btnPrimary" href="#retail">Shop now</a>
                <a className="btn btnGhost" href="#promise">Our promise</a>
              </div>

              <div className="pills">
                <span className="pill">No artificial anything</span>
                <span className="pill">Real ingredients</span>
                <span className="pill">Global flavours</span>
              </div>
            </div>

            <div>
              <div className="heroCard">
                <img className="heroImg" src="/hero.jpeg" alt="Unjunked lifestyle" />
                <div className="heroGlow" />
              </div>

              <div className="heroMiniGrid">
                <div className="mini">
                  <h4>What we don’t use</h4>
                  <p>Artificial flavours, preservatives, filler ingredients.</p>
                </div>
                <div className="mini">
                  <h4>What you get</h4>
                  <p>A short clean list and a cookie that still hits.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="marqueeWrap">
          <div className="marquee">
            <span>ZERO JUNK</span>
            <span className="accent">REAL INGREDIENTS</span>
            <span>PREMIUM TASTE</span>
            <span className="accent">GLOBAL FLAVOURS</span>
            <span>BUILT FOR SHELF</span>
            <span className="accent">MADE FOR HOMES</span>

            {/* repeat to make the loop seamless */}
            <span>ZERO JUNK</span>
            <span className="accent">REAL INGREDIENTS</span>
            <span>PREMIUM TASTE</span>
            <span className="accent">GLOBAL FLAVOURS</span>
            <span>BUILT FOR SHELF</span>
            <span className="accent">MADE FOR HOMES</span>
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
              Premium taste, modern packaging, and ingredient lists you can defend — in one glance.
            </div>
          </div>

          <div className="grid3">
            <div className="feature">
              <div className="featureTop">
                <div className="badgeIcon">✓</div>
                <div className="eyebrow">No artificial</div>
              </div>
              <h3>No artificial anything</h3>
              <p>No artificial flavours, colours, or preservatives. Just real food decisions.</p>
            </div>

            <div className="feature">
              <div className="featureTop">
                <div className="badgeIcon">✓</div>
                <div className="eyebrow">Transparency</div>
              </div>
              <h3>Real ingredients</h3>
              <p>Short lists you can stand behind — made for ingredient-conscious households.</p>
            </div>

            <div className="feature">
              <div className="featureTop">
                <div className="badgeIcon">✓</div>
                <div className="eyebrow">Flavour</div>
              </div>
              <h3>Flavor without compromise</h3>
              <p>Global flavour profiles that feel premium — not “healthy and sad”.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="sectionAlt">
        <div className="container">
          <div className="sectionHead">
            <div className="eyebrow">The line</div>
            <div className="h2">Four flavours. One standard.</div>
            <div className="desc">If it doesn’t make the ingredient list better, it doesn’t go in.</div>
          </div>

          <div className="grid4">
            {products.map((p) => (
              <div className="card" key={p.id}>
                <div className="imgBox">
                  <img src={p.image} alt={p.name} />
                </div>
                <div className="cardTitle">{p.name}</div>
                <div className="cardText">{p.oneLiner}</div>

                <div className="cardActions">
                  <a className="btn btnPrimary" href="#retail" style={{ padding: "10px 12px", borderRadius: 14, fontSize: 13 }}>
                    View details
                  </a>
                  <a className="btn btnGhost" href="#retail" style={{ padding: "10px 12px", borderRadius: 14, fontSize: 13 }}>
                    Shop
                  </a>
                </div>

                <div style={{ marginTop: 10, color: "#7a6f66", fontWeight: 900, fontSize: 12 }}>
                  {p.badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="section">
        <div className="container">
          <div className="sectionHead">
            <div className="eyebrow">Why Unjunked</div>
            <div className="h2">Because most snacks hide the junk.</div>
            <div className="desc">We built Unjunked to be the opposite: transparent, clean, and premium.</div>
          </div>

          <div className="grid2">
            <div className="panel">
              <h3>The problem</h3>
              <p>Most snacks lean on artificial flavours, preservatives, and filler ingredients to imitate taste.</p>
              <p>That’s why ingredient lists often read like chemistry textbooks.</p>
              <div className="rule">
                <small>Unjunked rule</small>
                <strong>If you can’t pronounce it, we don’t use it.</strong>
              </div>
            </div>

            <div className="panel">
              <h3>The upgrade</h3>
              <p>Short lists. Real ingredients. Premium taste. Modern packaging. Built for scale.</p>
              <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
                <div className="pill">Short lists</div>
                <div className="pill">Ingredient transparency</div>
                <div className="pill">Premium flavour profiles</div>
                <div className="pill">Retail-ready design</div>
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
              <a className="btn btnGhost" href={`mailto:${EMAIL}?subject=Unjunked%20Inquiry`}>
                Contact us
              </a>
            </div>

            <div style={{ marginTop: 14, color: "var(--muted)", lineHeight: 1.8 }}>
              <p>
                Unjunked started with a simple frustration: why do so many everyday snacks hide behind long ingredient lists
                and unnecessary additives?
              </p>
              <p>
                As founders, we wanted snacks we’d confidently bring into our own home — made with real ingredients, without
                artificial fillers, and without compromising on flavour.
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
        </div>
      </section>

      {/* RETAIL */}
      <section id="retail" className="section">
        <div className="container">
          <div className="sectionHead">
            <div className="eyebrow">Retail</div>
            <div className="h2">Designed to win on shelf.</div>
            <div className="desc">Retail credibility + clean ingredient story = repeat purchase.</div>
          </div>

          <div className="grid2">
            <div className="panel">
              <h3>Available at select retailers</h3>
              <p>Add your retailer logos here (or “coming soon”). Keep them monochrome for premium feel.</p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginTop: 14 }}>
                <div className="pill" style={{ textAlign: "center" }}>Retailer</div>
                <div className="pill" style={{ textAlign: "center" }}>Retailer</div>
                <div className="pill" style={{ textAlign: "center" }}>Retailer</div>
              </div>
            </div>

            <div className="panel">
              <h3>Wholesale inquiry</h3>
              <p>Region, store count, timeline — we respond fast.</p>

              <div className="form">
                <input className="input" placeholder="Name" />
                <input className="input" placeholder="Company" />
                <input className="input" placeholder="Email" />
                <input className="input" placeholder="Message (region, stores, timeline)" />
                <a className="btn btnPrimary" href={`mailto:${EMAIL}?subject=Unjunked%20Wholesale%20Inquiry`} style={{ textAlign: "center" }}>
                  Email us
                </a>
                <div className="small">Direct: {EMAIL}</div>
              </div>
            </div>
          </div>

          <div className="emailBox">
            <div>
              <div className="emailTitle">Join the Unjunked Movement.</div>
              <div className="emailText">Drops, updates, and early access. No spam.</div>
            </div>

            <div className="emailRow">
              <input className="input" placeholder="Email" />
              <a className="btn btnPrimary" href={`mailto:${EMAIL}?subject=Unjunked%20Newsletter%20Signup`}>
                Join
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footerInner">
          <div>
            <div style={{ fontWeight: 980 }}>Unjunked</div>
            <div style={{ color: "var(--muted)", marginTop: 6 }}>Clean snacks, done right.</div>
            <div style={{ marginTop: 10 }}>
              <a className="btn btnGhost" href={`mailto:${EMAIL}`}>info@ghalleyholdings.com</a>
            </div>
          </div>

          <div className="footerCols">
            <div>
              <div className="footerTitle">Explore</div>
              <a className="footerLink" href="#products">Flavours</a>
              <a className="footerLink" href="#promise">Promise</a>
              <a className="footerLink" href="#why">Why</a>
            </div>
            <div>
              <div className="footerTitle">Company</div>
              <a className="footerLink" href="#founders">Founders</a>
              <a className="footerLink" href="#retail">Wholesale</a>
            </div>
            <div>
              <div className="footerTitle">Contact</div>
              <a className="footerLink" href={`mailto:${EMAIL}`}>{EMAIL}</a>
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
