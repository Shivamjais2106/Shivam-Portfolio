import { faqs } from "@/data/profile";
import { JsonLd } from "@/components/PersonJsonLd";

// Visible Q&A + matching FAQPage schema. Answer engines (Google AI Overviews,
// ChatGPT, Perplexity) prefer short, self-contained answers that are on the page.
const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
};

export default function FAQ() {
    return (
        <section id="faq" aria-labelledby="faq-heading" className="py-32">
            <JsonLd data={faqJsonLd} />
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/3">
                        <h2 id="faq-heading" className="text-4xl font-bold sticky top-32">FAQ</h2>
                    </div>
                    <div className="md:w-2/3 space-y-4">
                        {faqs.map((f) => (
                            <details
                                key={f.question}
                                className="group p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 open:border-neonPurple/50 transition-colors"
                            >
                                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-lg font-bold">
                                    <h3>{f.question}</h3>
                                    <span className="text-neonPurple text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                                </summary>
                                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">{f.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
