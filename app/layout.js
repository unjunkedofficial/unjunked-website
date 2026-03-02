import "./globals.css";

export const metadata = {
  title: "Unjunked — Global Flavours, Zero Junk",
  description:
    "Premium Indian-inspired cookies made with real ingredients. Small batch. Shipping included.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
