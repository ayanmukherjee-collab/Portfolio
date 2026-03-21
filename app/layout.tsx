import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Preloader from "@/components/Preloader";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ayanmukherjee.com"),
  title: {
    default: "Ayan Mukherjee — Product Designer & Developer",
    template: "%s | Ayan Mukherjee",
  },
  description:
    "Portfolio of Ayan Mukherjee — product designer and full-stack developer crafting high-fidelity digital interfaces and immersive web experiences.",
  keywords: [
    "Ayan Mukherjee",
    "portfolio",
    "product designer",
    "full-stack developer",
    "UI/UX designer",
    "React developer",
    "Next.js",
    "web design",
    "case studies",
  ],
  authors: [{ name: "Ayan Mukherjee", url: "https://ayanmukherjee.com" }],
  creator: "Ayan Mukherjee",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayanmukherjee.com",
    siteName: "Ayan Mukherjee",
    title: "Ayan Mukherjee — Product Designer & Developer",
    description:
      "Portfolio of Ayan Mukherjee — product designer and full-stack developer crafting high-fidelity digital interfaces and immersive web experiences.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ayan Mukherjee — Product Designer & Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayan Mukherjee — Product Designer & Developer",
    description:
      "Portfolio of Ayan Mukherjee — product designer and full-stack developer crafting high-fidelity digital interfaces and immersive web experiences.",
    images: ["/og-image.png"],
    creator: "@ayanmukherjee",
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
      <body className={`${poppins.className} min-h-screen bg-[#0b0b0d] text-white selection:bg-white/20`}>
        <Preloader />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
