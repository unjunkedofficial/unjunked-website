// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Unjunked",
  description: "Clean cookies. Big flavour. Zero junk.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
