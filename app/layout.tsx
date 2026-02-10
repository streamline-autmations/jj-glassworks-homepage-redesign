import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JJ Glassworks | Glass & Aluminium Specialists in South Africa",
  description:
    "Family-owned glass and aluminium specialists since 1988. Aluminium windows, doors, shopfronts, shower glass, and custom glazing for residential and industrial clients in South Africa.",
  keywords:
    "glass installation, aluminium windows, aluminium doors, shopfronts, shower glass, glass cutting, glazing, South Africa, Gauteng",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
