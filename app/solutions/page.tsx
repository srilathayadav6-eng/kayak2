import type { Metadata } from "next";
import Link from "next/link";
import { INDUSTRIES, PRODUCTS } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions by Industry — Kayak AI",
  description:
    "Kayak AI solutions for news channels, education, government, corporate, healthcare, broadcast, and publishing industries.",
};

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20 text-center"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(124, 58, 237, 0.1) 0%, transparent 60%), var(--background)" }}
        aria-labelledby="solutions-heading"
      >
        <div className="container">
          <div className="section-tag mx-auto">Solutions</div>
          <h1 id="solutions-heading" className="mt-4 mb-6">
            AI Built for <span className="gradient-text">Your Industry</span>
          </h1>
          <p className="text-xl mx-auto" style={{ maxWidth: "600px", color: "var(--text-secondary)" }}>
            Kayak AI products are purpose-built for the workflows, compliance requirements, and operational realities of specific industries.
          </p>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="section" aria-label="Industry solutions">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((industry) => {
              // Map each industry to relevant products
              const relevantProducts = {
                "news-channels": ["newsforge", "mam", "broadcast-suite", "ai-editing"],
                education: ["ai-tutor", "knowledge-ai"],
                government: ["knowledge-ai", "mam"],
                corporate: ["knowledge-ai", "ai-tutor"],
                healthcare: ["mam", "knowledge-ai"],
                broadcast: ["broadcast-suite", "newsforge", "mam", "ai-editing"],
                publishing: ["mam", "newsforge", "knowledge-ai"],
              }[industry.slug] || [];

              return (
                <Link
                  key={industry.slug}
                  href={`/solutions/${industry.slug}`}
                  className="card flex flex-col group"
                  style={{ textDecoration: "none" }}
                >
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h2 className="text-xl font-bold mb-2">{industry.name}</h2>
                  <p className="text-sm flex-1 mb-5" style={{ color: "var(--text-secondary)" }}>
                    {industry.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {relevantProducts.map((slug) => {
                      const p = PRODUCTS.find((x) => x.slug === slug);
                      return p ? (
                        <span key={slug} className="badge badge-blue text-xs">
                          {p.icon} {p.name}
                        </span>
                      ) : null;
                    })}
                  </div>
                  <div className="flex items-center gap-1 mt-4 text-sm font-medium" style={{ color: "var(--accent-primary)" }}>
                    Explore solutions <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <h2 className="mb-4">
            Don&apos;t See Your <span className="gradient-text">Industry?</span>
          </h2>
          <p className="mb-8 mx-auto" style={{ maxWidth: "480px", color: "var(--text-secondary)" }}>
            Our AI platform is flexible and can be adapted for virtually any industry. Reach out to discuss your specific use case.
          </p>
          <Link href="/contact" className="btn-primary">
            Talk to Our Team <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
