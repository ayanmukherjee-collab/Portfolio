import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Steganography - Cybersecurity Project Case Study",
    description:
        "Case study by Ayan Mukherjee on a steganography and cybersecurity project for hiding encrypted data inside image pixels using LSB-based techniques.",
    alternates: {
        canonical: "https://ayan-mukherjee.is-a.dev/works/stenography",
    },
    openGraph: {
        title: "Steganography - Cybersecurity Project Case Study | Ayan Mukherjee",
        description:
            "Case study by Ayan Mukherjee on a steganography and cybersecurity project for hiding encrypted data inside image pixels using LSB-based techniques.",
        url: "https://ayan-mukherjee.is-a.dev/works/stenography",
    },
    twitter: {
        title: "Steganography - Cybersecurity Project Case Study | Ayan Mukherjee",
        description:
            "Case study by Ayan Mukherjee on a steganography and cybersecurity project for hiding encrypted data inside image pixels using LSB-based techniques.",
    },
};

export default function StenographyLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
