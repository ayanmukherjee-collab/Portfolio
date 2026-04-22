import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Works - Software Projects & Case Studies",
    description:
        "Explore software projects and case studies by Ayan Mukherjee, including AI apps, developer tools, cybersecurity work, and web development projects.",
    alternates: {
        canonical: "https://ayan-mukherjee.is-a.dev/works",
    },
    openGraph: {
        title: "Works - Software Projects & Case Studies | Ayan Mukherjee",
        description:
            "Explore software projects and case studies by Ayan Mukherjee, including AI apps, developer tools, cybersecurity work, and web development projects.",
        url: "https://ayan-mukherjee.is-a.dev/works",
    },
    twitter: {
        title: "Works - Software Projects & Case Studies | Ayan Mukherjee",
        description:
            "Explore software projects and case studies by Ayan Mukherjee, including AI apps, developer tools, cybersecurity work, and web development projects.",
    },
};

export default function WorksLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
