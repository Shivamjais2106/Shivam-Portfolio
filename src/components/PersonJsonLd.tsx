import { siteConfig } from "@/data/site";
import { allSkills, awards, certifications, currentRole, education, experience, shortBio } from "@/data/profile";

const url = siteConfig.url;

export const personId = `${url}/#person`;
export const websiteId = `${url}/#website`;

export function JsonLd({ data }: { data: Record<string, unknown> }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(data).replace(/</g, "\\u003c"),
            }}
        />
    );
}

export default function PersonJsonLd() {
    const pastEmployers = experience
        .filter((role) => role !== currentRole)
        .map((role) => ({
            "@type": "Organization",
            name: role.company,
            ...(role.companyUrl && { url: role.companyUrl }),
        }));

    const data = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": websiteId,
                url,
                name: siteConfig.name,
                description: siteConfig.description,
                inLanguage: "en-IN",
                publisher: { "@id": personId },
                about: { "@id": personId },
            },
            {
                "@type": "Person",
                "@id": personId,
                name: siteConfig.name,
                givenName: "Shivam",
                familyName: "Jaiswal",
                url,
                image: `${url}/profile.jpeg`,
                email: `mailto:${siteConfig.email}`,
                jobTitle: siteConfig.jobTitle,
                description: shortBio,
                gender: "Male",
                nationality: { "@type": "Country", name: "India" },
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Bhopal",
                    addressRegion: "Madhya Pradesh",
                    addressCountry: "IN",
                },
                worksFor: {
                    "@type": "Organization",
                    name: currentRole.company,
                    url: currentRole.companyUrl,
                },
                hasOccupation: {
                    "@type": "Occupation",
                    name: currentRole.title,
                    occupationLocation: { "@type": "City", name: "Bhopal" },
                    skills: allSkills.join(", "),
                },
                alumniOf: [
                    {
                        "@type": "CollegeOrUniversity",
                        name: education.institution,
                    },
                    ...pastEmployers,
                ],
                knowsAbout: ["MERN Stack", "Full Stack Web Development", ...allSkills],
                knowsLanguage: ["English", "Hindi"],
                hasCredential: certifications.map((cert) => ({
                    "@type": "EducationalOccupationalCredential",
                    name: cert.name,
                    credentialCategory: "Certificate",
                    recognizedBy: { "@type": "Organization", name: cert.issuer },
                })),
                award: awards,
                sameAs: siteConfig.profiles,
            },
        ],
    };

    return <JsonLd data={data} />;
}
