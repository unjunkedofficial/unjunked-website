import "./globals.css";

export const metadata = {
  title: "Unjunked — Global Flavours, Zero Junk",
  description:
    "Premium cookies made with real ingredients. No palm oil. No artificial preservatives or colours. Whole wheat flour. Eggless.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
