import type {
  Metadata,
  Viewport,
} from "next";

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

  description:
    "Smart Wedding Experience Ecosystem",

  manifest: "/manifest.json",

  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Wedora",
  },

  formatDetection: {
    telephone: false,
  },

  icons: {
    apple: "/icons/icon-192.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",

  initialScale: 1,

  maximumScale: 1,

  userScalable: false,

  viewportFit: "cover",

  themeColor: "#FAF7F2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`
          ${inter.variable}
          ${cormorant.variable}

          overflow-hidden
          bg-[#FAF7F2]
          text-[#111111]
          antialiased
          overscroll-none
        `}
      >
        {children}
      </body>
    </html>
  );
}