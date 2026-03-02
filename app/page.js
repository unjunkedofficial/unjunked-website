import { SITE } from "./config";

export default function Page() {
  const products = [
    {
      name: "Pistachio & Cashew Cookies",
      desc: "Creamy smooth and perfectly balanced. The classic nut duo.",
      badge: "300g",
      img: "/cashew.jpg",
      alt: "Unjunked Pistachio & Cashew Cookies box",
    },
    {
      name: "Masala Chai Cookies",
      desc: "A warm hug of spices with the perfect crunch. Made with real chai spices.",
      badge: "300g",
      img: "/masala.jpg",
      alt: "Unjunked Masala Chai Cookies box",
    },
    {
      name: "Cardamom Butterscotch Cookies (with Almonds)",
      desc: "Butterscotch meets bold cardamom. Pure nutty delight.",
      badge: "300g",
      img: "/cardamom.jpg",
      alt: "Unjunked Cardamom Butterscotch Cookies box",
    },
    {
      name: "Mango & Saffron Cookies",
      desc: "Crafted with Alphonso mango & real saffron. Creamy, rich, vibrant.",
      badge: "300g",
      img: "/mango.jpg",
      alt: "Unjunked Mango & Saffron Cookies box",
    },
  ];

  const checkoutHref = SITE.shopifyCheckoutUrl || "#";

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container headerInner">
          <a className="brand" href="#top" aria-label="Unjunked Home">
            <img src="/logo.jpeg" alt="Unjunked logo" className="headerLogo" />
          </a>

          <nav className="nav">
            <a href="#shop">Shop</a>
            <a href="#transparency">Transparency</a>
            <a href="#founders">Founders</a>
          </nav>

          <a className="btnPrimary" href="#shop">
            Shop $40 Bundle
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" id="top">
        <div className="container heroGrid">
          <div>
            <img src="/logo.jpeg" alt="Unjunked logo" className="heroLogo" />
            <p className="eyebrow">GLOBAL FLAVOURS, ZERO JUNK</p>

            <h1 className="h1">
              Reinventing Cookies —{" "}
              <span className="muted">Without the Junk.</span>
            </h1>

            <p className="lead">
              Premium Indian-inspired cookies made with real ingredients. No palm
              oil. No artificial preservatives or colours. Whole wheat flour.
              Eggless.
            </p>

            <div className="ctaRow">
              <a className="btnPrimary" href="#shop">
                Build your $40 box
              </a>
              <a className="btnGhost" href="#transparency">
                See transparency
              </a>
            </div>

            <div className="trustRow">
              <div className="pill">Shipping included</div>
              <div className="pill">Transparent pricing</div>
              <div className="pill">Real ingredients</div>
            </div>
          </div>

          <div className="card">
            <div className="cardTitle">The Unjunked Promise</div>
            <ul className="list">
              <li>Eggless</li>
              <li>No palm oil</li>
              <li>Nothing artificial</li>
              <li>Whole grain goodness</li>
              <li>Handmade with love</li>
            </ul>
            <div className="divider" />
            <p className="small muted">
              Additives are not for you — they’re for shelf life and bottom lines.
              We keep it clean, because you deserve better.
            </p>
          </div>
        </div>
      </section>

      {/* Shop */}
      <section className="section" id="shop">
        <div className="container">
          <div className="sectionHead">
            <div>
              <p className="eyebrow">SHOP</p>
              <h2 className="h2">$40 Bundle. Shipping included.</h2>
              <p className="sublead">
                Pick any 4 boxes, or 1 of each flavour. Same price. No surprises.
              </p>
            </div>

            <div className="priceCard">
              <div className="price">$40</div>
              <div className="small muted">All-in (shipping included)</div>
            </div>
          </div>

          <div className="grid">
            {products.map((p) => (
              <div className="product" key={p.name}>
                <div className="productImgWrap">
                  <img className="productImg" src={p.img} alt={p.alt} />
                </div>

                <div className="productTop">
                  <div className="productName">{p.name}</div>
                  <div className="badge">{p.badge}</div>
                </div>

                <div className="productDesc">{p.desc}</div>

                <a className="btnGhost full" href="#checkout">
                  Add to Bundle
                </a>
              </div>
            ))}
          </div>

          <div className="noteRow">
            <div className="note">
              <div className="noteTitle">Bundle rules</div>
              <div className="small muted">
                Your box contains exactly 4 items. Mix and match any flavours.
              </div>
            </div>
            <div className="note">
              <div className="noteTitle">Premium, but honest</div>
              <div className="small muted">
                Price includes ingredients, production, packaging, and logistics
                to your door.
              </div>
            </div>
          </div>

          {/* Shopify-ready checkout bar */}
          <div className="checkoutBar" id="checkout">
            <div>
              <div className="checkoutTitle">Checkout</div>
              <div className="small muted">
                When ready, connect Shopify by pasting your checkout URL in{" "}
                <strong>app/config.js</strong>. Everything stays clean and transparent.
              </div>
            </div>

            <a
              className="btnPrimary"
              href={checkoutHref}
              target={SITE.shopifyCheckoutUrl ? "_blank" : undefined}
              rel={SITE.shopifyCheckoutUrl ? "noreferrer" : undefined}
            >
              {SITE.shopifyCheckoutUrl ? "Go to Checkout" : "Connect Shopify"}
            </a>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="section alt" id="transparency">
        <div className="container">
          <p className="eyebrow">TRANSPARENCY</p>
          <h2 className="h2">Simple pricing. Transparent costs.</h2>

          <div className="cards">
            <div className="card">
              <div className="cardTitle">What you’re paying for</div>
              <ul className="list">
                <li>Real ingredients</li>
                <li>Ethical production</li>
                <li>Packaging</li>
                <li>Logistics to your door</li>
              </ul>
            </div>

            <div className="card">
              <div className="cardTitle">What you’re not paying for</div>
              <ul className="list">
                <li>Artificial preservatives & colours</li>
                <li>Fillers designed to cut cost</li>
                <li>Palm oil shortcuts</li>
                <li>Hidden shipping markups</li>
              </ul>
            </div>

            <div className="card">
              <div className="cardTitle">Our point of view</div>
              <p className="small muted">
                Additives are not for you, but for their bottom line.
                We built Unjunked to keep ingredients simple and flavour real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section" id="founders">
        <div className="container founders">
          <div>
            <p className="eyebrow">FOUNDERS</p>
            <h2 className="h2">Built by family. Ingredient-obsessed.</h2>

            <p className="sublead">
              I grew up around real food. Real ingredients. Real flavour. But when I
              looked at most cookies on shelves today, I saw additives and fillers
              designed to protect margins — not people.
            </p>

            <p className="sublead">
              Unjunked is simple. If it doesn’t belong in your kitchen, it doesn’t
              belong in our cookies.
            </p>

            <p className="signature">— Andy Ghalley, Co-Founder & CEO</p>
          </div>

          <div className="cards">
            <div className="card darkCard">
              <div className="cardTitle">Andy Ghalley</div>
              <p className="small mutedOnDark">Co-Founder & CEO</p>
            </div>
            <div className="card darkCard">
              <div className="cardTitle">Chitwan Ghalley</div>
              <p className="small mutedOnDark">Co-Founder & President</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footerInner">
          <div>
            <div className="brand">
              <img src="/logo.jpeg" alt="Unjunked logo" className="footerLogo" />
            </div>
            <div className="small muted">
              Contact:{" "}
              <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>
            </div>
            <div className="small muted">
              Instagram:{" "}
              <a href={SITE.instagramUrl} target="_blank" rel="noreferrer">
                @unjunked.official
              </a>
            </div>
          </div>

          <div className="small muted">© {new Date().getFullYear()} Unjunked</div>
        </div>
      </footer>
    </>
  );
}
