import type { Metadata, Viewport } from "next";

import {
  Inter,
  Cormorant_Garamond,
} from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Wedora",
  description: "Smart Wedding Experience Ecosystem",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FAF7F2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en">

      <body
        className={`
          ${inter.variable}
          ${cormorant.variable}

          bg-[#FAF7F2]
          text-[#111111]

          antialiased
          overflow-x-hidden
        `}
      >

        {children}

      </body>

    </html>

  );

}