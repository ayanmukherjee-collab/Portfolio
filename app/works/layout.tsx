import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Works — Selected Projects & Case Studies",
    description:
        "Explore Ayan Mukherjee's portfolio of projects — AI web applications, terminal-based developer tools, cryptographic security tools, and indoor navigation engines.",
    alternates: {
        canonical: "https://ayan-mukherjee.is-a.dev/works",
    },
    openGraph: {
        title: "Works — Selected Projects & Case Studies | Ayan Mukherjee",
        description:
            "Explore Ayan Mukherjee's portfolio of projects — AI web applications, terminal-based developer tools, cryptographic security tools, and indoor navigation engines.",
        url: "https://ayan-mukherjee.is-a.dev/works",
    },
    twitter: {
        title: "Works — Selected Projects & Case Studies | Ayan Mukherjee",
        description:
            "Explore Ayan Mukherjee's portfolio of projects — AI web applications, terminal-based developer tools, cryptographic security tools, and indoor navigation engines.",
    },
};

export default function WorksLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
