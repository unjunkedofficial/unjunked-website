export default function Page() {
  return (
    <main id="top">
      <header className="header">
        <div className="container headerInner">
          <div className="brand">Unjunked</div>

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

      <section className="container section">
        <div className="heroCard">
          <div className="heroMedia">
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
              <a className="btnPrimary" href="#shop">Build Your $40 Box</a>
              <a className="btnGhost" href="#ingredients">See Ingredients</a>
            </div>
          </div>
        </div>
      </section>

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

      <section id="founders" className="container section">
        <div className="twoCol">
          <div>
            <p className="eyebrow">WHY UNJUNKED EXISTS</p>
            <h2 className="h2">Clean ingredients shouldn’t be a luxury.</h2>
            <p className="copy">
              Most cookies are engineered for shelf life and margins — not people.
              Unjunked is premium Indian-inspired flavour, small batch production, and
              a clean label you can trust.
            </p>
          </div>

          <div className="cards3">
            <div className="card">
              <div className="dot" />
              <div>
                <div className="cardTitle">No Palm Oil</div>
                <div className="cardDesc">No cheap oils. No shortcuts.</div>
              </div>
            </div>
            <div className="card">
              <div className="dot" />
              <div>
                <div className="cardTitle">Nothing Artificial</div>
                <div className="cardDesc">No artificial preservatives or colours.</div>
              </div>
            </div>
            <div className="card">
              <div className="dot" />
              <div>
                <div className="cardTitle">Whole Grain Goodness</div>
                <div className="cardDesc">Whole wheat flour for depth and bite.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <b>0 / 4</b>
          </div>
        </div>

        <div className="grid4">
          <div className="product">
            <div className="media">
              <img className="productImg" src="/pistachio.jpg" alt="Pistachio & Cashew" />
            </div>
            <div className="productTop">
              <div className="productName">Pistachio & Cashew</div>
              <div className="badge">300g</div>
            </div>
            <div className="productDesc">Creamy nut duo. Smooth finish.</div>
            <button className="btn">Add to Bundle</button>
          </div>

          <div className="product">
            <div className="media">
              <img className="productImg" src="/masala.jpg" alt="Masala Chai" />
            </div>
            <div className="productTop">
              <div className="productName">Masala Chai</div>
              <div className="badge">300g</div>
            </div>
            <div className="productDesc">Warm spices. Comfort crunch.</div>
            <button className="btn">Add to Bundle</button>
          </div>

          <div className="product">
            <div className="media">
              <img className="productImg" src="/cardamom.jpg" alt="Cardamom Butterscotch" />
            </div>
            <div className="productTop">
              <div className="productName">Cardamom Butterscotch</div>
              <div className="badge">300g</div>
            </div>
            <div className="productDesc">Butterscotch depth + cardamom lift.</div>
            <button className="btn">Add to Bundle</button>
          </div>

          <div className="product">
            <div className="media">
              <img className="productImg" src="/mango.jpg" alt="Mango & Saffron" />
            </div>
            <div className="productTop">
              <div className="productName">Mango & Saffron</div>
              <div className="badge">300g</div>
            </div>
            <div className="productDesc">Alphonso mango + real saffron aroma.</div>
            <button className="btn">Add to Bundle</button>
          </div>
        </div>

        <div className="stickyBar">
          <div>
            <div className="stickyTitle">$40 — Shipping Included</div>
            <div className="stickySub">Checkout unlocks at 4 selected</div>
          </div>
          <button className="btn btnDisabled" disabled>Checkout</button>
        </div>
      </section>

      <section id="ingredients" className="container section">
        <p className="eyebrow">INGREDIENT TRANSPARENCY</p>
        <h2 className="h2">Real ingredients. No filler logic.</h2>

        <div className="grid5">
          {[
            ["Alphonso Mango", "Bright, real fruit flavour."],
            ["Real Saffron", "Aromatic depth."],
            ["Stone-ground Cardamom", "Fresh lift."],
            ["Whole Wheat Flour", "Whole grain texture."],
            ["Premium Butter", "Rich body."],
          ].map(([t, d]) => (
            <div className="mini" key={t}>
              <div className="dot" />
              <div className="cardTitle">{t}</div>
              <div className="cardDesc">{d}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <div>
            <div className="brand">Unjunked</div>
            <div className="footLine">Email: <a href="mailto:info@ghalleyholdings.com">info@ghalleyholdings.com</a></div>
            <div className="footLine">Instagram: <a href="https://instagram.com/unjunked.official" target="_blank" rel="noreferrer">@unjunked.official</a></div>
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
    </main>
  );
}
