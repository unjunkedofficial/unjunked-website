// app/page.js

const BRAND = {
  bg: "#FAF7F2",          // premium off-white
  text: "#111111",
  muted: "#5F6368",
  border: "#E7E0D6",
  accent: "#F4A261",      // mango accent
  accentSoft: "#FFF1E6",
  dark: "#1C1C1C",
  white: "#FFFFFF",
};

const CONTACT_EMAIL = "info@ghalleyholdings.com";

// IMPORTANT:
// These image files must exist in /public exactly as named below.
const products = [
  {
    id: "mango-saffron",
    name: "Mango Saffron",
    oneLiner: "Bright mango with a saffron finish. Clean and addictive.",
    image: "/mango.jpg",
  },
  {
    id: "masala-chai",
    name: "Masala Chai",
    oneLiner: "Warm chai spices with a smooth, bakery-style bite.",
    image: "/masala.jpg",
  },
  {
    id: "cardamom-butterscotch",
    name: "Cardamom Butterscotch",
    oneLiner: "Aromatic cardamom and a rich butterscotch note. Premium.",
    image: "/cardamom.jpg",
  },
  {
    id: "pistachio-cashew",
    name: "Pistachio & Cashew",
    oneLiner: "Nutty, buttery, and satisfying with real pistachio-cashew character.",
    image: "/cashew.jpg",
  },
];

export default function Page() {
  return (
    <main style={S.page}>
      {/* HEADER */}
      <header style={S.header}>
        <div style={S.headerInner}>
          <div style={S.brand}>
            <div style={S.logoBox}>U</div>
            <div>
              <div style={S.brandName}>Unjunked</div>
              <div style={S.brandTag}>Clean snacks, done right</div>
            </div>
          </div>

          <nav style={S.nav}>
            <a style={S.navLink} href="#promise">Promise</a>
            <a style={S.navLink} href="#products">Products</a>
            <a style={S.navLink} href="#why">Why</a>
            <a style={S.navLink} href="#founders">Founders</a>
            <a style={S.navLink} href="#retail">Retail</a>
          </nav>

          <div style={S.headerCtas}>
            <a style={S.btnOutline} href="#products">See the line</a>
            <a style={S.btn} href="#retail">Shop now</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section style={S.hero}>
        <div style={S.wrap}>
          <div style={S.heroGrid}>
            <div>
              <div style={S.badge}>Snacks. Unjunked.</div>
              <h1 style={S.h1}>
                Real ingredients.
                <br />
                No fillers.
                <br />
                No nonsense.
              </h1>
              <p style={S.lead}>
                Ingredient lists shouldn’t read like chemistry textbooks.
                Unjunked keeps it simple — and keeps the flavour.
              </p>

              <div style={S.row}>
                <a style={S.btn} href="#retail">Shop now</a>
                <a style={S.btnOutline} href="#promise">Our promise</a>
              </div>

              <div style={S.pills}>
                <span style={S.pill}>No artificial anything</span>
                <span style={S.pill}>Real ingredients</span>
                <span style={S.pill}>Flavor without compromise</span>
              </div>
            </div>

            <div>
              <div style={S.heroImage}>
                {/* If your hero file is hero.jpg instead, change to /hero.jpg */}
                <img
                  src="/hero.jpeg"
                  alt="Unjunked lifestyle"
                  style={S.imgCoverHero}
                />
                <div style={S.heroOverlay} />
              </div>

              <div style={S.heroCards}>
                <div style={S.miniCard}>
                  <div style={S.miniTitle}>What we don’t use</div>
                  <div style={S.miniText}>
                    Artificial flavours, preservatives, filler ingredients.
                  </div>
                </div>
                <div style={S.miniCard}>
                  <div style={S.miniTitle}>What you get</div>
                  <div style={S.miniText}>
                    A short, clean list — and a cookie that still tastes like a treat.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section id="promise" style={S.section}>
        <div style={S.sectionHead}>
          <div style={S.eyebrow}>Our promise</div>
          <h2 style={S.h2}>Clean label — actually clean.</h2>
          <p style={S.desc}>
            Simple ingredients. Transparent choices. Premium taste — without the junk.
          </p>
        </div>

        <div style={S.grid3}>
          <div style={S.card}>
            <div style={S.cardIcon}>✓</div>
            <div style={S.cardTitle}>No artificial anything</div>
            <div style={S.cardBody}>
              No artificial flavours, colours, or preservatives. Period.
            </div>
          </div>

          <div style={S.card}>
            <div style={S.cardIcon}>✓</div>
            <div style={S.cardTitle}>Real ingredients</div>
            <div style={S.cardBody}>
              Short lists you can stand behind — built for trust and repeat purchase.
            </div>
          </div>

          <div style={S.card}>
            <div style={S.cardIcon}>✓</div>
            <div style={S.cardTitle}>Flavour without compromise</div>
            <div style={S.cardBody}>
              Global flavour profiles that feel premium, not “diet”.
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" style={S.sectionAlt}>
        <div style={S.sectionHead}>
          <div style={S.eyebrow}>The line</div>
          <h2 style={S.h2}>Four flavours. One standard.</h2>
          <p style={S.desc}>Clean ingredients, premium taste, modern packaging.</p>
        </div>

        <div style={S.grid4}>
          {products.map((p) => (
            <div key={p.id} style={S.productCard}>
              <div style={S.productImgBox}>
                <img src={p.image} alt={p.name} style={S.imgContainProduct} />
              </div>

              <div style={S.productName}>{p.name}</div>
              <div style={S.productDesc}>{p.oneLiner}</div>

              <div style={S.rowTight}>
                <a style={S.btnSmall} href="#retail">View details</a>
                <a style={S.btnSmallOutline} href="#retail">Shop</a>
              </div>
            </div>
          ))}
        </div>

        <div style={S.bannerBar}>
          <div>
            <div style={S.bannerTitle}>Bundle-ready (optional)</div>
            <div style={S.bannerText}>
              Add bundles + subscriptions when you’re ready. The site is built for it.
            </div>
          </div>
          <a style={S.btnOutline} href="#retail">Explore bundles</a>
        </div>
      </section>

      {/* WHY */}
      <section id="why" style={S.section}>
        <div style={S.sectionHead}>
          <div style={S.eyebrow}>Why Unjunked</div>
          <h2 style={S.h2}>Because most snacks hide the junk.</h2>
          <p style={S.desc}>
            We designed Unjunked to be the opposite: transparent, clean, and premium.
          </p>
        </div>

        <div style={S.grid2}>
          <div style={S.panel}>
            <div style={S.cardTitle}>The problem</div>
            <p style={S.p}>
              Many snacks rely on artificial flavours, preservatives, and filler ingredients
              to imitate taste and extend shelf life.
            </p>
            <p style={S.p}>
              That’s why ingredient lists often read like chemistry textbooks.
            </p>

            <div style={S.ruleBox}>
              <div style={S.ruleTitle}>Unjunked rule</div>
              <div style={S.ruleText}>If you can’t pronounce it, we don’t use it.</div>
            </div>
          </div>

          <div style={S.panel}>
            <div style={S.cardTitle}>The solution</div>

            <div style={S.miniGrid}>
              <div style={S.miniTile}>
                <div style={S.miniTitle}>Short lists</div>
                <div style={S.miniText}>Fewer ingredients. Clear choices.</div>
              </div>
              <div style={S.miniTile}>
                <div style={S.miniTitle}>Transparent</div>
                <div style={S.miniText}>You should know what you’re eating.</div>
              </div>
              <div style={S.miniTile}>
                <div style={S.miniTitle}>Premium taste</div>
                <div style={S.miniText}>Clean doesn’t mean boring.</div>
              </div>
              <div style={S.miniTile}>
                <div style={S.miniTitle}>Retail-ready</div>
                <div style={S.miniText}>Built for scale and velocity.</div>
              </div>
            </div>

            <a style={{ ...S.btn, display: "inline-block", marginTop: 14 }} href="#products">
              Explore flavours
            </a>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section id="founders" style={S.section}>
        <div style={S.sectionHead}>
          <div style={S.eyebrow}>Founders</div>
          <h2 style={S.h2}>Built by people who care what goes inside.</h2>
          <p style={S.desc}>Not a marketing angle — a real standard.</p>
        </div>

        <div style={S.founderBox}>
          <div style={S.founderNames}>
            <div style={S.nameLine}>Andy Ghalley — CEO & Co-Founder</div>
            <div style={S.nameLine}>Chitwan Ghalley — Co-Founder & President</div>
          </div>

          <div style={S.founderCopy}>
            <p style={S.p}>
              Unjunked started with a simple frustration: why do so many everyday snacks
              hide behind long ingredient lists and unnecessary additives?
            </p>
            <p style={S.p}>
              As founders, we wanted snacks we’d confidently bring into our own home —
              made with real ingredients, without artificial fillers, and without compromising on flavour.
            </p>
            <p style={S.p}>
              What began as a conversation around clean labels became a commitment.
              Every Unjunked product reflects our belief that transparency matters, taste matters,
              and simplicity wins.
            </p>
            <p style={S.p}>
              We’re building Unjunked as a long-term brand — one that earns trust on shelf and
              in households across North America.
            </p>
            <div style={S.signature}>— Andy & Chitwan</div>
          </div>
        </div>
      </section>

      {/* RETAIL + WHOLESALE */}
      <section id="retail" style={S.sectionAlt2}>
        <div style={S.sectionHead}>
          <div style={S.eyebrow}>Retail</div>
          <h2 style={S.h2}>Built to win on shelf.</h2>
          <p style={S.desc}>
            A clean-label product with premium differentiation — designed for mainstream consumers.
          </p>
        </div>

        <div style={S.grid2}>
          <div style={S.panel}>
            <div style={S.cardTitle}>Available at select retailers</div>
            <p style={S.p}>Add retailer logos here (or “coming soon”).</p>

            <div style={S.logoGrid}>
              <div style={S.logoBox}>Retailer</div>
              <div style={S.logoBox}>Retailer</div>
              <div style={S.logoBox}>Retailer</div>
            </div>

            <div style={{ marginTop: 14, color: BRAND.muted, fontSize: 12, lineHeight: 1.6 }}>
              Tip: Replace these with real logos once you’re ready. Keep them monochrome for a premium look.
            </div>
          </div>

          <div style={S.panel}>
            <div style={S.cardTitle}>Wholesale inquiry</div>
            <p style={S.p}>
              Tell us your region, store count, and timeline — we’ll respond quickly.
            </p>

            <div style={S.form}>
              <input style={S.input} placeholder="Name" />
              <input style={S.input} placeholder="Company" />
              <input style={S.input} placeholder="Email" />
              <input style={S.input} placeholder="Message (region, stores, timeline)" />
              <a style={{ ...S.btn, textAlign: "center" }} href={`mailto:${CONTACT_EMAIL}?subject=Unjunked%20Wholesale%20Inquiry`}>
                Email us
              </a>
              <div style={S.smallMuted}>Direct: {CONTACT_EMAIL}</div>
            </div>
          </div>
        </div>
      </section>

      {/* EMAIL SIGNUP */}
      <section style={S.section}>
        <div style={S.emailBox}>
          <div>
            <div style={S.emailTitle}>Join the Unjunked Movement.</div>
            <div style={S.emailText}>Drops, updates, and early access. No spam.</div>
          </div>

          <div style={S.emailRow}>
            <input style={S.input} placeholder="Email" />
            <a style={S.btnAsButtonLink} href={`mailto:${CONTACT_EMAIL}?subject=Unjunked%20Newsletter%20Signup`}>
              Join
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={S.footer}>
        <div style={S.footerInner}>
          <div>
            <div style={S.footerBrand}>Unjunked</div>
            <div style={S.smallMuted}>Clean snacks, done right.</div>
            <div style={{ marginTop: 10 }}>
              <a style={S.footerLinkInline} href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
          </div>

          <div style={S.footerCols}>
            <div>
              <div style={S.footerTitle}>Shop</div>
              <a style={S.footerLink} href="#products">Cookies</a>
              <a style={S.footerLink} href="#retail">Bundles</a>
            </div>
            <div>
              <div style={S.footerTitle}>Company</div>
              <a style={S.footerLink} href="#why">Why Unjunked</a>
              <a style={S.footerLink} href="#founders">Founders</a>
            </div>
            <div>
              <div style={S.footerTitle}>Contact</div>
              <a style={S.footerLink} href={`mailto:${CONTACT_EMAIL}`}>Email</a>
              <a style={S.footerLink} href="#retail">Wholesale</a>
            </div>
          </div>
        </div>

        <div style={S.footerBottom}>© {new Date().getFullYear()} Unjunked. All rights reserved.</div>
      </footer>
    </main>
  );
}

/* -------------------- STYLES -------------------- */
const S = {
  page: {
    background: BRAND.bg,
    color: BRAND.text,
    fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
  },

  wrap: { maxWidth: 1120, margin: "0 auto", padding: "0 18px" },

  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: "rgba(250, 247, 242, 0.92)",
    backdropFilter: "blur(10px)",
    borderBottom: `1px solid ${BRAND.border}`,
  },
  headerInner: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "14px 18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 14,
    flexWrap: "wrap",
  },

  brand: { display: "flex", alignItems: "center", gap: 10 },
  logoBox: {
    width: 38,
    height: 38,
    borderRadius: 14,
    background: BRAND.accentSoft,
    border: `1px solid ${BRAND.border}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
    color: BRAND.dark,
  },
  brandName: { fontWeight: 950, fontSize: 14 },
  brandTag: { fontSize: 12, color: BRAND.muted },

  nav: { display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" },
  navLink: { color: BRAND.muted, textDecoration: "none", fontSize: 14, fontWeight: 750 },

  headerCtas: { display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" },

  btn: {
    background: BRAND.dark,
    color: "#fff",
    padding: "12px 16px",
    borderRadius: 14,
    textDecoration: "none",
    fontWeight: 900,
    fontSize: 14,
    display: "inline-block",
    boxShadow: "0 10px 22px rgba(0,0,0,0.10)",
  },
  btnOutline: {
    background: BRAND.white,
    color: BRAND.dark,
    padding: "12px 16px",
    borderRadius: 14,
    border: `1px solid ${BRAND.border}`,
    textDecoration: "none",
    fontWeight: 900,
    fontSize: 14,
    display: "inline-block",
  },

  hero: {
    background: `linear-gradient(180deg, ${BRAND.accentSoft} 0%, ${BRAND.bg} 78%)`,
    borderBottom: `1px solid ${BRAND.border}`,
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: 28,
    padding: "52px 0",
  },

  badge: {
    display: "inline-block",
    fontSize: 12,
    padding: "8px 12px",
    borderRadius: 999,
    background: BRAND.white,
    border: `1px solid ${BRAND.border}`,
    fontWeight: 950,
  },
  h1: {
    margin: "14px 0 0",
    fontSize: 54,
    lineHeight: 1.02,
    letterSpacing: -1.2,
    fontWeight: 950,
  },
  lead: { marginTop: 14, color: BRAND.muted, fontSize: 16, lineHeight: 1.7, maxWidth: 540 },

  row: { display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap", alignItems: "center" },
  rowTight: { display: "flex", gap: 10, marginTop: 12, flexWrap: "wrap", alignItems: "center" },

  pills: { display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" },
  pill: {
    background: BRAND.white,
    border: `1px solid ${BRAND.border}`,
    padding: "8px 12px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 750,
    color: BRAND.dark,
  },

  heroImage: {
    width: "100%",
    aspectRatio: "4/3",
    borderRadius: 22,
    overflow: "hidden",
    border: `1px solid ${BRAND.border}`,
    background: BRAND.white,
    position: "relative",
    boxShadow: "0 18px 40px rgba(0,0,0,0.08)",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.00) 0%, rgba(0,0,0,0.06) 100%)",
    pointerEvents: "none",
  },
  imgCoverHero: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  heroCards: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 },
  miniCard: {
    borderRadius: 18,
    border: `1px solid ${BRAND.border}`,
    background: "rgba(255,255,255,0.80)",
    padding: 14,
  },
  miniTitle: { fontWeight: 950, fontSize: 13 },
  miniText: { marginTop: 6, color: BRAND.muted, fontSize: 13, lineHeight: 1.5 },

  section: { maxWidth: 1120, margin: "0 auto", padding: "60px 18px" },
  sectionAlt: {
    background: BRAND.accentSoft,
    padding: "72px 18px",
    borderTop: `1px solid ${BRAND.border}`,
    borderBottom: `1px solid ${BRAND.border}`,
  },
  sectionAlt2: {
    background: BRAND.bg,
    padding: "72px 18px",
    borderTop: `1px solid ${BRAND.border}`,
    borderBottom: `1px solid ${BRAND.border}`,
  },

  sectionHead: { textAlign: "center", maxWidth: 780, margin: "0 auto" },
  eyebrow: {
    display: "inline-block",
    padding: "7px 12px",
    borderRadius: 999,
    background: BRAND.white,
    border: `1px solid ${BRAND.border}`,
    fontSize: 12,
    fontWeight: 950,
  },
  h2: { margin: "14px 0 0", fontSize: 38, letterSpacing: -0.8, fontWeight: 950 },
  desc: { marginTop: 10, color: BRAND.muted, fontSize: 16, lineHeight: 1.7 },

  grid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 14,
    marginTop: 28,
    maxWidth: 1120,
    marginLeft: "auto",
    marginRight: "auto",
  },
  grid3: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 14,
    marginTop: 28,
    maxWidth: 1120,
    marginLeft: "auto",
    marginRight: "auto",
  },
  grid4: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 14,
    marginTop: 28,
    maxWidth: 1120,
    marginLeft: "auto",
    marginRight: "auto",
  },

  card: {
    background: BRAND.white,
    border: `1px solid ${BRAND.border}`,
    borderRadius: 22,
    padding: 18,
    boxShadow: "0 14px 30px rgba(0,0,0,0.06)",
  },
  cardIcon: {
    width: 34,
    height: 34,
    borderRadius: 14,
    background: BRAND.accentSoft,
    border: `1px solid ${BRAND.border}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 950,
    color: BRAND.dark,
  },
  cardTitle: { marginTop: 12, fontWeight: 950, fontSize: 16 },
  cardBody: { marginTop: 8, color: BRAND.muted, fontSize: 14, lineHeight: 1.7 },

  productCard: {
    background: BRAND.white,
    border: `1px solid ${BRAND.border}`,
    borderRadius: 22,
    padding: 14,
    boxShadow: "0 14px 30px rgba(0,0,0,0.06)",
  },
  // Square box, padded, and use "contain" so packaging doesn't crop.
  productImgBox: {
    width: "100%",
    aspectRatio: "1 / 1",
    borderRadius: 18,
    overflow: "hidden",
    border: `1px solid ${BRAND.border}`,
    background: BRAND.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px",
  },
  imgContainProduct: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    display: "block",
  },
  productName: { marginTop: 12, fontWeight: 950, fontSize: 16 },
  productDesc: { marginTop: 6, color: BRAND.muted, fontSize: 14, lineHeight: 1.6 },

  btnSmall: {
    background: BRAND.dark,
    color: "#fff",
    padding: "10px 12px",
    borderRadius: 14,
    textDecoration: "none",
    fontWeight: 900,
    fontSize: 13,
    display: "inline-block",
  },
  btnSmallOutline: {
    background: BRAND.white,
    color: BRAND.dark,
    padding: "10px 12px",
    borderRadius: 14,
    border: `1px solid ${BRAND.border}`,
    textDecoration: "none",
    fontWeight: 900,
    fontSize: 13,
    display: "inline-block",
  },

  bannerBar: {
    marginTop: 22,
    maxWidth: 1120,
    marginLeft: "auto",
    marginRight: "auto",
    background: BRAND.white,
    border: `1px solid ${BRAND.border}`,
    borderRadius: 22,
    padding: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 14,
    flexWrap: "wrap",
    boxShadow: "0 14px 30px rgba(0,0,0,0.06)",
  },
  bannerTitle: { fontWeight: 950 },
  bannerText: { color: BRAND.muted, marginTop: 6, lineHeight: 1.6 },

  panel: {
    background: BRAND.white,
    border: `1px solid ${BRAND.border}`,
    borderRadius: 22,
    padding: 18,
    boxShadow: "0 14px 30px rgba(0,0,0,0.06)",
  },

  p: { margin: "10px 0", color: BRAND.muted, lineHeight: 1.7 },

  ruleBox: {
    marginTop: 12,
    border: `1px solid ${BRAND.border}`,
    background: BRAND.accentSoft,
    borderRadius: 18,
    padding: 14,
  },
  ruleTitle: { fontSize: 12, fontWeight: 950, color: BRAND.text },
  ruleText: { marginTop: 6, fontWeight: 950, color: BRAND.text },

  miniGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 },
  miniTile: {
    background: BRAND.white,
    border: `1px solid ${BRAND.border}`,
    borderRadius: 18,
    padding: 14,
  },

  founderBox: {
    maxWidth: 900,
    margin: "28px auto 0",
    background: BRAND.white,
    border: `1px solid ${BRAND.border}`,
    borderRadius: 22,
    padding: 22,
    boxShadow: "0 16px 36px rgba(0,0,0,0.07)",
  },
  founderNames: { paddingBottom: 14, borderBottom: `1px solid ${BRAND.border}` },
  nameLine: { fontWeight: 950, fontSize: 14 },
  founderCopy: { marginTop: 14 },
  signature: { marginTop: 16, fontWeight: 950 },

  logoGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginTop: 14 },
  logoBox: {
    background: BRAND.accentSoft,
    border: `1px solid ${BRAND.border}`,
    borderRadius: 16,
    padding: 18,
    textAlign: "center",
    color: BRAND.muted,
    fontWeight: 850,
  },

  form: { marginTop: 14, display: "grid", gap: 10 },
  input: {
    width: "100%",
    padding: "12px 12px",
    borderRadius: 14,
    border: `1px solid ${BRAND.border}`,
    fontSize: 14,
    outline: "none",
    background: BRAND.white,
    color: BRAND.text,
  },

  btnAsButtonLink: {
    background: BRAND.dark,
    color: "#fff",
    padding: "12px 14px",
    borderRadius: 14,
    border: "none",
    fontWeight: 950,
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
    textAlign: "center",
    minWidth: 90,
    boxShadow: "0 10px 22px rgba(0,0,0,0.10)",
  },

  smallMuted: { fontSize: 12, color: BRAND.muted },

  emailBox: {
    maxWidth: 1120,
    margin: "0 auto",
    background: `linear-gradient(135deg, ${BRAND.white} 0%, ${BRAND.accentSoft} 100%)`,
    border: `1px solid ${BRAND.border}`,
    borderRadius: 22,
    padding: 22,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    flexWrap: "wrap",
    boxShadow: "0 16px 36px rgba(0,0,0,0.07)",
  },
  emailTitle: { fontSize: 20, fontWeight: 950 },
  emailText: { marginTop: 6, color: BRAND.muted },
  emailRow: { display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" },

  footer: { borderTop: `1px solid ${BRAND.border}`, padding: "34px 18px" },
  footerInner: {
    maxWidth: 1120,
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    gap: 18,
    flexWrap: "wrap",
  },
  footerBrand: { fontWeight: 950 },
  footerCols: { display: "grid", gridTemplateColumns: "repeat(3, minmax(140px, 1fr))", gap: 18 },
  footerTitle: { fontWeight: 950 },
  footerLink: { display: "block", color: BRAND.muted, textDecoration: "none", marginTop: 10, fontWeight: 750 },
  footerLinkInline: { color: BRAND.text, textDecoration: "none", fontWeight: 850 },
  footerBottom: { maxWidth: 1120, margin: "18px auto 0", fontSize: 12, color: BRAND.muted },

  // Note: true mobile breakpoints require a CSS file.
  // This layout still behaves decently because header/nav/buttons wrap.
};
