import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CLI-AI - Terminal AI Developer Tool Case Study",
    description:
        "Case study by Ayan Mukherjee on CLI-AI, a terminal-first AI developer tool accessible through a single curl command with no client-side setup.",
    alternates: {
        canonical: "https://ayan-mukherjee.is-a.dev/works/cli-ai",
    },
    openGraph: {
        title: "CLI-AI - Terminal AI Developer Tool Case Study | Ayan Mukherjee",
        description:
            "Case study by Ayan Mukherjee on CLI-AI, a terminal-first AI developer tool accessible through a single curl command with no client-side setup.",
        url: "https://ayan-mukherjee.is-a.dev/works/cli-ai",
    },
    twitter: {
        title: "CLI-AI - Terminal AI Developer Tool Case Study | Ayan Mukherjee",
        description:
            "Case study by Ayan Mukherjee on CLI-AI, a terminal-first AI developer tool accessible through a single curl command with no client-side setup.",
    },
};

export default function CliAiLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
