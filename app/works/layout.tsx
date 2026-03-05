import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Works",
    description:
        "A collection of case studies and experimental projects by Ayan Mukherjee — spanning AI applications, developer tooling, cryptography, and indoor navigation.",
    openGraph: {
        title: "Works | Ayan Mukherjee",
        description:
            "A collection of case studies and experimental projects by Ayan Mukherjee — spanning AI applications, developer tooling, cryptography, and indoor navigation.",
        url: "https://ayanmukherjee.com/works",
    },
    twitter: {
        title: "Works | Ayan Mukherjee",
        description:
            "A collection of case studies and experimental projects by Ayan Mukherjee — spanning AI applications, developer tooling, cryptography, and indoor navigation.",
    },
};

export default function WorksLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
