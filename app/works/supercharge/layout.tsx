import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Supercharge — AI That Actually Remembers You",
    description:
        "Case study on Supercharge: a BYOK AI chat application with a persistent memory layer powered by PML (Personal Memory Language), a custom protocol for encoding human memory into LLM-consumable format.",
    alternates: {
        canonical: "https://ayan-mukherjee.is-a.dev/works/supercharge",
    },
    openGraph: {
        title: "Supercharge — AI That Actually Remembers You | Ayan Mukherjee",
        description:
            "Case study on Supercharge: a BYOK AI chat application with a persistent memory layer powered by PML (Personal Memory Language), a custom protocol for encoding human memory into LLM-consumable format.",
        url: "https://ayan-mukherjee.is-a.dev/works/supercharge",
    },
    twitter: {
        title: "Supercharge — AI That Actually Remembers You | Ayan Mukherjee",
        description:
            "Case study on Supercharge: a BYOK AI chat application with a persistent memory layer powered by PML (Personal Memory Language), a custom protocol for encoding human memory into LLM-consumable format.",
    },
};

export default function SuperchargeLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
