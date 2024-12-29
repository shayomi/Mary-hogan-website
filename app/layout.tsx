/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Metadata, Viewport } from "next";

import "./globals.scss";
import { kodchasan } from "./font";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://maryhogan.vercel.app/"),
  title: {
    default: "Mary Hogan",
    template: "%s | Mary Hogan",
  },
  description:
    "I design and develop websites for anyone interested in taking advantage of the digital world",
  keywords: [
    "Mary",
    "Hogan",
    "UIUX designer",
    "Designer",
    "React js",
    "SEO",
    "Designs",
  ],
  authors: [{ name: "Adegoroye Sayo" }],
  openGraph: {
    title: "Mary Hogan",
    description:
      "I design  for anyone interested in taking advantage of the digital world",
    type: "website",
    // @ts-ignore
    local: "en_US",
    siteName: "Mary Hogan",
  },

  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kodchasan.className}>
        <div>
          <Header />

          <main>{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
