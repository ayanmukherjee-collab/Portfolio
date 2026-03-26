import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CLI-AI — Zero-Setup Terminal Code Generator",
    description:
        "Case study on CLI-AI: a zero-setup, terminal-first AI code generator accessible via a single curl command. No installation, no API keys on the client — just curl and a filename.",
    alternates: {
        canonical: "https://ayan-mukherjee.is-a.dev/works/cli-ai",
    },
    openGraph: {
        title: "CLI-AI — Zero-Setup Terminal Code Generator | Ayan Mukherjee",
        description:
            "Case study on CLI-AI: a zero-setup, terminal-first AI code generator accessible via a single curl command. No installation, no API keys on the client — just curl and a filename.",
        url: "https://ayan-mukherjee.is-a.dev/works/cli-ai",
    },
    twitter: {
        title: "CLI-AI — Zero-Setup Terminal Code Generator | Ayan Mukherjee",
        description:
            "Case study on CLI-AI: a zero-setup, terminal-first AI code generator accessible via a single curl command. No installation, no API keys on the client — just curl and a filename.",
    },
};

export default function CliAiLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
