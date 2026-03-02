import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Unjunked | Cookies. Without the junk.",
  description:
    "Premium clean-ingredient cookies. Real flavors. No artificial nonsense.",
  metadataBase: new URL("https://unjunked.com"),
  openGraph: {
    title: "Unjunked | Cookies. Without the junk.",
    description:
      "Premium clean-ingredient cookies. Real flavors. No artificial nonsense.",
    url: "https://unjunked.com",
    siteName: "Unjunked",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
