import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Kayak AI — Enterprise AI for Media, Education & Beyond",
    template: "%s | Kayak AI",
  },
  description:
    "Kayak AI builds enterprise-grade AI products for newsrooms, education, media asset management, broadcast automation, and knowledge systems.",
  keywords: ["enterprise AI", "newsroom AI", "media AI", "education AI", "broadcast automation", "knowledge management"],
  authors: [{ name: "Kayak AI" }],
  creator: "Kayak AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kayak.ai",
    siteName: "Kayak AI",
    title: "Kayak AI — Enterprise AI for Media, Education & Beyond",
    description:
      "Building the future of enterprise AI — products for newsrooms, education, media, and beyond.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kayak AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kayak AI — Enterprise AI for Media, Education & Beyond",
    description: "Building the future of enterprise AI.",
    creator: "@kayakai",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
