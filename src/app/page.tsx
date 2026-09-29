import type { Metadata } from "next";
import HomePageClient from "@/components/home/HomePageClient";
import { JsonLd, personId, websiteId } from "@/components/PersonJsonLd";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
    alternates: { canonical: "/" },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteConfig.url}/#profilepage`,
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    isPartOf: { "@id": websiteId },
    mainEntity: { "@id": personId },
    dateModified: new Date().toISOString(),
};

export default function Home() {
    return (
        <>
            <JsonLd data={jsonLd} />
            <HomePageClient />
        </>
    );
}
