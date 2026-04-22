import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Supercharge - AI Chat App Case Study",
    description:
        "Case study by Ayan Mukherjee on Supercharge, an AI chat app with persistent memory, BYOK model support, and a custom context system built with PML.",
    alternates: {
        canonical: "https://ayan-mukherjee.is-a.dev/works/supercharge",
    },
    openGraph: {
        title: "Supercharge - AI Chat App Case Study | Ayan Mukherjee",
        description:
            "Case study by Ayan Mukherjee on Supercharge, an AI chat app with persistent memory, BYOK model support, and a custom context system built with PML.",
        url: "https://ayan-mukherjee.is-a.dev/works/supercharge",
    },
    twitter: {
        title: "Supercharge - AI Chat App Case Study | Ayan Mukherjee",
        description:
            "Case study by Ayan Mukherjee on Supercharge, an AI chat app with persistent memory, BYOK model support, and a custom context system built with PML.",
    },
};

export default function SuperchargeLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
