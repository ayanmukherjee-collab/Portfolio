import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Preloader from "@/components/Preloader";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const siteUrl = "https://ayan-mukherjee.is-a.dev";
const siteTitle = "Ayan Mukherjee | Software Developer Portfolio";
const siteDescription =
  "Ayan Mukherjee is a software developer and full-stack developer building web apps, mobile apps, and AI tools with React, Next.js, TypeScript, Python, and Flutter.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Ayan Mukherjee",
  },
  description: siteDescription,
  keywords: [
    "Ayan Mukherjee",
    "Ayan Mukherjee portfolio",
    "Ayan Mukherjee software developer",
    "Ayan Mukherjee full stack developer",
    "software developer portfolio",
    "full-stack developer",
    "software engineer",
    "web developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "Python developer",
    "AI engineer",
    "Flutter developer",
    "web developer portfolio",
    "AI developer portfolio",
    "Ranchi",
    "India",
  ],
  authors: [{ name: "Ayan Mukherjee", url: siteUrl }],
  creator: "Ayan Mukherjee",
  publisher: "Ayan Mukherjee",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Ayan Mukherjee Portfolio",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ayan Mukherjee software developer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
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
              givenName: "Ayan",
              familyName: "Mukherjee",
              url: siteUrl,
              image: `${siteUrl}/og-image.png`,
              description: siteDescription,
              email: "mailto:ayanmukherjee.official@gmail.com",
              telephone: "+91 62061 15536",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ranchi",
                addressCountry: "IN",
              },
              sameAs: [
                "https://github.com/ayanmukherjee-collab",
                "https://www.linkedin.com/in/ayan-vfx",
              ],
              jobTitle: "Software Developer",
              knowsAbout: [
                "Software development",
                "Full-stack development",
                "React",
                "Next.js",
                "TypeScript",
                "Python",
                "Flutter",
                "AI applications",
              ],
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
              name: "Ayan Mukherjee Portfolio",
              url: siteUrl,
              description: siteDescription,
              author: {
                "@type": "Person",
                name: "Ayan Mukherjee",
              },
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
