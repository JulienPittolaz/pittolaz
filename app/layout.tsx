import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Julien Pittolaz - Applications web métiers",
  description:
    "Conception et développement d'applications web métiers sur mesure pour PME et organisations en Suisse romande.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
