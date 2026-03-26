import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Steganography — Cryptographic Data Hiding Case Study",
    description:
        "Case study on steganography: a cryptographic LSB embedding tool for hiding data within image pixels. Explores AI-driven steganography with GANs, steganalysis, and real-world cybersecurity implications.",
    alternates: {
        canonical: "https://ayan-mukherjee.is-a.dev/works/stenography",
    },
    openGraph: {
        title: "Steganography — Cryptographic Data Hiding | Ayan Mukherjee",
        description:
            "Deep dive into steganography: hiding information in plain sight using LSB embedding, GANs, and the digital arms race between concealment and detection.",
        url: "https://ayan-mukherjee.is-a.dev/works/stenography",
    },
    twitter: {
        title: "Steganography — Cryptographic Data Hiding | Ayan Mukherjee",
        description:
            "Deep dive into steganography: hiding information in plain sight using LSB embedding, GANs, and the digital arms race between concealment and detection.",
    },
};

export default function StenographyLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
