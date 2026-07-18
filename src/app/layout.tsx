import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import { siteConfig } from "@/data/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    alternates: {
        canonical: siteConfig.url,
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        siteName: siteConfig.name,
        title: siteConfig.title,
        description: siteConfig.description,
        images: [{ url: "/profile.jpeg", width: 800, height: 800, alt: siteConfig.name }],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.title,
        description: siteConfig.description,
        images: ["/profile.jpeg"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} selection:bg-cyber-neon selection:text-black`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: siteConfig.name,
                            url: siteConfig.url,
                            image: `${siteConfig.url}/profile.jpeg`,
                            jobTitle: "Full Stack Developer",
                            email: siteConfig.email,
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "Bhopal",
                                addressCountry: "IN",
                            },
                            sameAs: [
                                "https://www.linkedin.com/in/shivam-jaiswal-37a951369",
                                "https://github.com/Shivamjais2106",
                            ],
                        }),
                    }}
                />
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