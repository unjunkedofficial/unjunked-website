// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Unjunked",
  description: "Clean snacks, done right.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
