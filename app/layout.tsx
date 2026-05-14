import type { Metadata } from "next";
import Script from "next/script";
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
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EMMGD2VKR8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EMMGD2VKR8');
          `}
        </Script>
      </body>
    </html>
  );
}
