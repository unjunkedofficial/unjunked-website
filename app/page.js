const products = [
  { name: "Mango", desc: "Bright, fruity, clean." },
  { name: "Masala", desc: "Warm spice. No nonsense." },
  { name: "Cardamom", desc: "Floral, smooth, premium." },
  { name: "Cashew", desc: "Nutty, rich, satisfying." },
];

export default function Page() {
  return (
    <main style={styles.page}>
      {/* Top Nav */}
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.brand}>
            <div style={styles.logo}>U</div>
            <div>
              <div style={styles.brandName}>Unjunked</div>
              <div style={styles.brandTag}>Clean snacks, done right</div>
            </div>
          </div>

          <nav style={styles.nav}>
            <a style={styles.navLink} href="#promise">Promise</a>
            <a style={styles.navLink} href="#products">Products</a>
            <a style={styles.navLink} href="#why">Why</a>
            <a style={styles.navLink} href="#retail">Retail</a>
          </nav>

          <div style={styles.headerCtas}>
            <a style={styles.btnOutline} href="#products">See ingredients</a>
            <a style={styles.btn} href="#products">Shop now</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroInner}>
          <div style={styles.heroLeft}>
            <div style={styles.badge}>Snacks. Unjunked.</div>
            <h1 style={styles.h1}>
              Real ingredients.
              <br />No fillers.
              <br />No nonsense.
            </h1>
            <p style={styles.lead}>
              Ingredient lists shouldn’t read like chemistry textbooks. Unjunked keeps it simple — and keeps the flavour.
            </p>

            <div style={styles.heroButtons}>
              <a style={styles.btn} href="#products">Shop now</a>
              <a style={styles.btnOutline} href="#why">See ingredients</a>
            </div>

            <div style={styles.pills}>
              <div style={styles.pill}>No artificial anything</div>
              <div style={styles.pill}>Real ingredients</div>
              <div style={styles.pill}>Flavor without compromise</div>
            </div>
          </div>

          <div style={styles.heroRight}>
            <div style={styles.heroImage}>
              <div style={styles.placeholderText}>Add hero lifestyle image later</div>
            </div>

            <div style={styles.heroCards}>
              <div style={styles.card}>
                <div style={styles.cardTitle}>What we don’t use</div>
                <div style={styles.cardText}>Artificial flavours, preservatives, filler ingredients.</div>
              </div>
              <div style={styles.card}>
                <div style={styles.cardTitle}>What you get</div>
                <div style={styles.cardText}>A short, clean list — and a cookie that still tastes like a treat.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section id="promise" style={styles.section}>
        <div style={styles.sectionHead}>
          <div style={styles.sectionEyebrow}>Our promise</div>
          <h2 style={styles.h2}>Clean label — actually clean.</h2>
          <p style={styles.sectionDesc}>Simple ingredients. Transparent choices. The snack you’d trust in your own kitchen.</p>
        </div>

        <div style={styles.grid3}>
          <div style={styles.bigCard}>
            <div style={styles.bigCardTitle}>No artificial anything</div>
            <div style={styles.bigCardText}>No artificial flavours, colours, or preservatives — because you shouldn’t need a decoder ring.</div>
          </div>
          <div style={styles.bigCard}>
            <div style={styles.bigCardTitle}>Real ingredients</div>
            <div style={styles.bigCardText}>Ingredients you recognize. Short lists you can stand behind.</div>
          </div>
          <div style={styles.bigCard}>
            <div style={styles.bigCardTitle}>Flavor first</div>
            <div style={styles.bigCardText}>Clean doesn’t mean boring. We build flavour you’ll crave — without the junk.</div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" style={{ ...styles.section, background: "#fafafa", borderTop: "1px solid #eee" }}>
        <div style={styles.sectionHead}>
          <div style={styles.sectionEyebrow}>Shop the line</div>
          <h2 style={styles.h2}>Cookies with a clean ingredient list.</h2>
          <p style={styles.sectionDesc}>Four flavours. One standard: don’t add junk.</p>
        </div>

        <div style={styles.grid4}>
          {products.map((p) => (
            <div key={p.name} style={styles.productCard}>
              <div style={styles.productImage}>
                <div style={styles.placeholderText}>Add product image</div>
              </div>
              <div style={styles.productName}>{p.name}</div>
              <div style={styles.productDesc}>{p.desc}</div>
              <div style={styles.productBtns}>
                <a style={styles.btnSmall} href="#retail">View details</a>
                <a style={styles.btnSmallOutline} href="#retail">Shop</a>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.bundleBar}>
          <div>
            <div style={{ fontWeight: 700 }}>Bundle-ready (optional)</div>
            <div style={{ color: "#666", marginTop: 4, fontSize: 14 }}>
              Set this up when you want it: bundles + subscriptions for top flavours.
            </div>
          </div>
          <a style={styles.btnOutline} href="#retail">Explore bundles</a>
        </div>
      </section>

      {/* Why */}
      <section id="why" style={styles.section}>
        <div style={styles.sectionHead}>
          <div style={styles.sectionEyebrow}>Why this exists</div>
          <h2 style={styles.h2}>Because most snacks hide the junk.</h2>
          <p style={styles.sectionDesc}>Unjunked is built around one rule: if you can’t justify an ingredient, don’t use it.</p>
        </div>

        <div style={styles.grid2}>
          <div style={styles.bigPanel}>
            <div style={styles.bigCardTitle}>The problem</div>
            <p style={{ margin: "10px 0", color: "#666" }}>
              Many snacks rely on artificial flavours, preservatives, and fillers to imitate taste.
            </p>
            <p style={{ margin: "10px 0", color: "#666" }}>
              That’s why ingredient lists often read like chemistry textbooks.
            </p>
            <div style={styles.ruleBox}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#111" }}>Unjunked rule</div>
              <div style={{ marginTop: 6, fontWeight: 700 }}>"If you can’t pronounce it, we don’t use it."</div>
            </div>
          </div>

          <div style={styles.bigPanel}>
            <div style={styles.bigCardTitle}>The solution</div>
            <div style={styles.miniGrid}>
              <div style={styles.miniCard}>
                <div style={styles.miniTitle}>Short lists</div>
                <div style={styles.miniText}>Fewer ingredients. Clear choices.</div>
              </div>
              <div style={styles.miniCard}>
                <div style={styles.miniTitle}>Transparent</div>
                <div style={styles.miniText}>You should know what you’re eating.</div>
              </div>
              <div style={styles.miniCard}>
                <div style={styles.miniTitle}>Premium taste</div>
                <div style={styles.miniText}>Clean ingredients, still indulgent.</div>
              </div>
              <div style={styles.miniCard}>
                <div style={styles.miniTitle}>Retail-ready</div>
                <div style={styles.miniText}>Built for scale and velocity.</div>
              </div>
            </div>

            <a style={{ ...styles.btn, display: "inline-block", marginTop: 14 }} href="#products">
              See the ingredients
            </a>
          </div>
        </div>
      </section>

      {/* Retail */}
      <section id="retail" style={{ ...styles.section, background: "#fafafa", borderTop: "1px solid #eee" }}>
        <div style={styles.sectionHead}>
          <div style={styles.sectionEyebrow}>Retail</div>
          <h2 style={styles.h2}>Built to win on shelf.</h2>
          <p style={styles.sectionDesc}>A clean-label product with premium differentiation — designed for mainstream consumers.</p>
        </div>

        <div style={styles.grid2}>
          <div style={styles.bigPanel}>
            <div style={styles.bigCardTitle}>Available at select retailers</div>
            <p style={{ marginTop: 10, color: "#666" }}>
              Add your retailer logos here (or “coming soon”).
            </p>
            <div style={styles.logoGrid}>
              <div style={styles.logoBox}>Retailer logo</div>
              <div style={styles.logoBox}>Retailer logo</div>
              <div style={styles.logoBox}>Retailer logo</div>
            </div>
          </div>

          <div style={styles.bigPanel}>
            <div style={styles.bigCardTitle}>Wholesale inquiry</div>
            <div style={styles.form}>
              <input style={styles.input} placeholder="Name" />
              <input style={styles.input} placeholder="Company" />
              <input style={styles.input} placeholder="Email" />
              <input style={styles.input} placeholder="Message (region, stores, timeline)" />
              <button style={styles.btnAsButton}>Submit inquiry</button>
              <div style={{ fontSize: 12, color: "#777" }}>
                Later we can connect this to email/CRM.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div>
            <div style={{ fontWeight: 800 }}>Unjunked</div>
            <div style={{ color: "#777", marginTop: 6 }}>Clean snacks, done right.</div>
          </div>

          <div style={styles.footerCols}>
            <div>
              <div style={styles.footerTitle}>Shop</div>
              <a style={styles.footerLink} href="#products">Cookies</a>
              <a style={styles.footerLink} href="#products">Bundles</a>
            </div>
            <div>
              <div style={styles.footerTitle}>Company</div>
              <a style={styles.footerLink} href="#why">Why Unjunked</a>
              <a style={styles.footerLink} href="#retail">Wholesale</a>
            </div>
            <div>
              <div style={styles.footerTitle}>Contact</div>
              <div style={{ color: "#777", marginTop: 10 }}>hello@unjunked.com</div>
              <div style={{ color: "#777", marginTop: 6 }}>@unjunked.official</div>
            </div>
          </div>
        </div>

        <div style={styles.footerBottom}>
          © {new Date().getFullYear()} Unjunked. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

const styles = {
  page: { color: "#111", background: "#fff" },

  header: { position: "sticky", top: 0, zIndex: 20, background: "rgba(255,255,255,0.9)", backdropFilter: "blur(8px)", borderBottom: "1px solid #eee" },
  headerInner: { maxWidth: 1100, margin: "0 auto", padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14 },
  brand: { display: "flex", alignItems: "center", gap: 10 },
  logo: { width: 38, height: 38, borderRadius: 14, background: "#f2f2f2", border: "1px solid #e6e6e6", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 },
  brandName: { fontWeight: 800, fontSize: 14 },
  brandTag: { fontSize: 12, color: "#777" },

  nav: { display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" },
  navLink: { color: "#555", textDecoration: "none", fontSize: 14 },
  headerCtas: { display: "flex", gap: 10, alignItems: "center" },

  hero: { background: "linear-gradient(180deg, #f6f6f6 0%, #ffffff 70%)" },
  heroInner: { maxWidth: 1100, margin: "0 auto", padding: "48px 18px", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 28 },
  heroLeft: { minWidth: 0 },
  heroRight: { minWidth: 0 },

  badge: { display: "inline-block", fontSize: 12, padding: "8px 12px", borderRadius: 999, background: "#f2f2f2", border: "1px solid #e6e6e6", fontWeight: 700 },
  h1: { margin: "14px 0 0", fontSize: 46, lineHeight: 1.05, letterSpacing: -1, fontWeight: 900 },
  lead: { marginTop: 14, color: "#666", fontSize: 16, lineHeight: 1.6, maxWidth: 520 },

  heroButtons: { display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" },
  btn: { background: "#111", color: "#fff", padding: "12px 16px", borderRadius: 14, textDecoration: "none", fontWeight: 800, fontSize: 14 },
  btnOutline: { background: "#fff", color: "#111", padding: "12px 16px", borderRadius: 14, border: "1px solid #ddd", textDecoration: "none", fontWeight: 800, fontSize: 14 },

  pills: { display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 },
  pill: { fontSize: 12, color: "#444", background: "#fff", border: "1px solid #e6e6e6", padding: "8px 12px", borderRadius: 999 },

  heroImage: { width: "100%", aspectRatio: "4/3", borderRadius: 22, border: "1px solid #e6e6e6", background: "linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)", display: "flex", alignItems: "center", justifyContent: "center" },
  heroCards: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 },
  card: { borderRadius: 18, border: "1px solid #e6e6e6", background: "rgba(255,255,255,0.7)", padding: 14 },
  cardTitle: { fontWeight: 800, fontSize: 13 },
  cardText: { marginTop: 6, color: "#666", fontSize: 13, lineHeight: 1.5 },

  section: { maxWidth: 1100, margin: "0 auto", padding: "54px 18px" },
  sectionHead: { textAlign: "center", maxWidth: 720, margin: "0 auto" },
  sectionEyebrow: { display: "inline-block", fontSize: 12, padding: "7px 12px", borderRadius: 999, background: "#f2f2f2", border: "1px solid #e6e6e6", fontWeight: 800 },
  h2: { margin: "14px 0 0", fontSize: 34, letterSpacing: -0.5, fontWeight: 900 },
  sectionDesc: { marginTop: 10, color: "#666", fontSize: 16, lineHeight: 1.6 },

  grid3: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginTop: 28 },
  grid4: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginTop: 28 },
  grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 28 },

  bigCard: { borderRadius: 22, border: "1px solid #e6e6e6", background: "#fff", padding: 18 },
  bigCardTitle: { fontWeight: 900, fontSize: 16 },
  bigCardText: { marginTop: 8, color: "#666", fontSize: 14, lineHeight: 1.6 },

  productCard: { borderRadius: 22, border: "1px solid #e6e6e6", background: "#fff", padding: 14 },
  productImage: { width: "100%", aspectRatio: "16/10", borderRadius: 18, border: "1px solid #eee", background: "linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)", display: "flex", alignItems: "center", justifyContent: "center" },
  productName: { marginTop: 12, fontWeight: 900, fontSize: 16 },
  productDesc: { marginTop: 6, color: "#666", fontSize: 14 },
  productBtns: { display: "flex", gap: 10, marginTop: 12 },
  btnSmall: { background: "#111", color: "#fff", padding: "10px 12px", borderRadius: 14, textDecoration: "none", fontWeight: 800, fontSize: 13 },
  btnSmallOutline: { background: "#fff", color: "#111", padding: "10px 12px", borderRadius: 14, border: "1px solid #ddd", textDecoration: "none", fontWeight: 800, fontSize: 13 },

  bundleBar: { marginTop: 20, borderRadius: 22, border: "1px solid #e6e6e6", background: "#fff", padding: 18, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, flexWrap: "wrap" },

  bigPanel: { borderRadius: 22, border: "1px solid #e6e6e6", background: "#fff", padding: 18 },
  ruleBox: { marginTop: 12, borderRadius: 18, background: "#f6f6f6", border: "1px solid #ededed", padding: 14 },

  miniGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 },
  miniCard: { borderRadius: 18, border: "1px solid #ededed", background: "#fafafa", padding: 14 },
  miniTitle: { fontWeight: 900, fontSize: 13 },
  miniText: { marginTop: 6, color: "#666", fontSize: 13 },

  logoGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginTop: 14 },
  logoBox: { borderRadius: 16, border: "1px solid #ededed", background: "#fff", padding: 18, textAlign: "center", color: "#777", fontSize: 13 },

  form: { marginTop: 12, display: "grid", gap: 10 },
  input: { padding: "12px 12px", borderRadius: 14, border: "1px solid #ddd", fontSize: 14 },
  btnAsButton: { background: "#111", color: "#fff", padding: "12px 14px", borderRadius: 14, border: "none", fontWeight: 900, cursor: "pointer" },

  footer: { borderTop: "1px solid #eee", padding: "34px 18px" },
  footerInner: { maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", gap: 20, flexWrap: "wrap" },
  footerCols: { display: "grid", gridTemplateColumns: "repeat(3, minmax(120px, 1fr))", gap: 18 },
  footerTitle: { fontWeight: 900 },
  footerLink: { display: "block", color: "#777", textDecoration: "none", marginTop: 10, fontSize: 14 },
  footerBottom: { maxWidth: 1100, margin: "18px auto 0", color: "#777", fontSize: 12 },
  placeholderText: { fontSize: 12, color: "#777" },
};
