import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unjunked — Premium Indian-inspired cookies",
  description:
    "Reinventing Cookies — Without the Junk. Premium Indian-inspired cookies made with real ingredients. Small batch. Shipping included.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-zinc-950 antialiased">
        {children}
      </body>
    </html>
  );
}
