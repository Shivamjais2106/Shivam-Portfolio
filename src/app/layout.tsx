import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import PersonJsonLd from "@/components/PersonJsonLd";
import { siteConfig } from "@/data/site";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    ],
};

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    applicationName: `${siteConfig.name} Portfolio`,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "technology",
    formatDetection: { telephone: false },
    alternates: {
        types: {
            "text/plain": "/llms.txt",
        },
    },
    openGraph: {
        type: "profile",
        firstName: "Shivam",
        lastName: "Jaiswal",
        locale: "en_IN",
        siteName: siteConfig.name,
        title: siteConfig.title,
        description: siteConfig.description,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.title,
        description: siteConfig.description,
        creator: siteConfig.twitterHandle,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en-IN" suppressHydrationWarning>
            <body className={`${inter.className} selection:bg-cyber-neon selection:text-black`}>
                <PersonJsonLd />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <CursorGlow />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
