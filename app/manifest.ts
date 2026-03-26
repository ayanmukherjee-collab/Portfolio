import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Ayan Mukherjee — Product Developer & AI Systems Builder",
        short_name: "Ayan Mukherjee",
        description:
            "Portfolio of Ayan Mukherjee — product developer and AI systems builder crafting full-stack web applications, cross-platform mobile apps, and custom AI solutions.",
        start_url: "/",
        display: "standalone",
        background_color: "#0b0b0d",
        theme_color: "#0b0b0d",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
            {
                src: "/favicon-96x96.png",
                sizes: "96x96",
                type: "image/png",
            },
            {
                src: "/web-app-manifest-192x192.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "maskable",
            },
            {
                src: "/web-app-manifest-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable",
            },
        ],
    };
}
