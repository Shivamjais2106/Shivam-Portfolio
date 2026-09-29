import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

// AI / answer-engine crawlers are explicitly allowed so the portfolio can be
// cited by ChatGPT, Claude, Perplexity, Gemini and Copilot (GEO / AEO).
const aiCrawlers = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-SearchBot",
    "Claude-User",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended",
    "Applebot-Extended",
    "Bingbot",
    "CCBot",
];

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            { userAgent: "*", allow: "/", disallow: "/api/" },
            { userAgent: aiCrawlers, allow: "/", disallow: "/api/" },
        ],
        sitemap: `${siteConfig.url}/sitemap.xml`,
        host: siteConfig.url,
    };
}
