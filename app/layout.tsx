import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Preloader from "@/components/Preloader";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ayan-mukherjee.is-a.dev"),
  title: {
    default: "Ayan Mukherjee — Product Developer & AI Systems Builder",
    template: "%s | Ayan Mukherjee",
  },
  description:
    "Portfolio of Ayan Mukherjee — product developer and AI systems builder crafting full-stack web applications, cross-platform mobile apps, and custom AI solutions.",
  keywords: [
    "Ayan Mukherjee",
    "portfolio",
    "product developer",
    "AI systems builder",
    "full-stack developer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "Python",
    "Flutter developer",
    "web applications",
    "mobile apps",
    "AI solutions",
    "Ranchi",
    "India",
  ],
  authors: [{ name: "Ayan Mukherjee", url: "https://ayan-mukherjee.is-a.dev" }],
  creator: "Ayan Mukherjee",
  alternates: {
    canonical: "https://ayan-mukherjee.is-a.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ayan-mukherjee.is-a.dev",
    siteName: "Ayan Mukherjee",
    title: "Ayan Mukherjee — Product Developer & AI Systems Builder",
    description:
      "Portfolio of Ayan Mukherjee — product developer and AI systems builder shipping full-stack web applications, cross-platform mobile apps, and custom AI solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ayan Mukherjee — Product Developer & AI Systems Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayan Mukherjee — Product Developer & AI Systems Builder",
    description:
      "Portfolio of Ayan Mukherjee — product developer and AI systems builder shipping full-stack web apps, mobile apps, and custom AI solutions.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ayan Mukherjee",
              url: "https://ayan-mukherjee.is-a.dev",
              sameAs: [
                "https://github.com/ayanmukherjee-collab",
                "https://www.linkedin.com/in/ayan-vfx"
              ],
              jobTitle: "Product Developer & AI Systems Builder",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Ayan Mukherjee — Portfolio",
              url: "https://ayan-mukherjee.is-a.dev",
              description:
                "Portfolio of Ayan Mukherjee — product developer and AI systems builder shipping full-stack web applications, cross-platform mobile apps, and custom AI solutions.",
            }),
          }}
        />
      </head>
      <body className={`${poppins.className} min-h-screen bg-[#0b0b0d] text-white selection:bg-white/20`}>
        <Preloader />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
