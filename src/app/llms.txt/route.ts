import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";
import { awards, certifications, education, experience, faqs, shortBio, skills } from "@/data/profile";

export const dynamic = "force-static";

// llms.txt (https://llmstxt.org) — a plain-markdown summary that AI assistants and
// answer engines can read to describe and cite this portfolio accurately.
export function GET() {
    const base = siteConfig.url;
    const major = projects.filter((p) => (p.category ?? "major") === "major");
    const mini = projects.filter((p) => p.category === "mini");

    const body = `# ${siteConfig.name}

> ${shortBio}

- Role: ${siteConfig.jobTitle}
- Location: ${siteConfig.location}
- Email: ${siteConfig.email}
- Resume: ${base}${siteConfig.resumePath}
- Profiles: ${siteConfig.profiles.join(", ")}

## Experience

${experience
    .map((r) => `- **${r.title}**, ${r.company} (${r.startDate} – ${r.endDate}): ${r.summary}`)
    .join("\n")}

## Education

- ${education.degree}, ${education.institution} (${education.years})

## Skills

${Object.entries(skills)
    .map(([group, list]) => `- ${group[0].toUpperCase()}${group.slice(1)}: ${list.join(", ")}`)
    .join("\n")}

## Projects

${major
    .map((p) => `- [${p.title.trim()}](${base}/projects/${p.slug}): ${p.desc} Tech: ${p.tech.join(", ")}.${p.liveUrl ? ` Live: ${p.liveUrl}` : ""}`)
    .join("\n")}

## Certifications & Awards

${certifications.map((c) => `- ${c.name} — ${c.issuer}`).join("\n")}
${awards.map((a) => `- ${a}`).join("\n")}

## FAQ

${faqs.map((f) => `### ${f.question}\n${f.answer}`).join("\n\n")}

## Pages

- [Home](${base}/)
- [About](${base}/about)
- [Projects](${base}/projects)
- [Contact](${base}/contact)

## Optional

${mini.map((p) => `- [${p.title.trim()}](${base}/projects/${p.slug}): ${p.desc}`).join("\n")}
`;

    return new Response(body, {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
}
