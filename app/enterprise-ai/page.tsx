import type { Metadata } from "next";
import Link from "next/link";
import { ENTERPRISE_AI_CONCEPTS } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise AI — Kayak AI",
  description:
    "Understand enterprise AI concepts: RAG, LLMs, workflow automation, knowledge search, private AI, and agentic AI — and how Kayak AI implements them.",
};

export default function EnterpriseAIPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20 text-center"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(124, 58, 237, 0.12) 0%, transparent 60%), var(--background)" }}
        aria-labelledby="enterprise-ai-heading"
      >
        <div className="container">
          <div className="section-tag mx-auto">Enterprise AI</div>
          <h1 id="enterprise-ai-heading" className="mt-4 mb-6">
            AI That Works in the <span className="gradient-text">Real Enterprise</span>
          </h1>
          <p className="text-xl mx-auto" style={{ maxWidth: "640px", color: "var(--text-secondary)" }}>
            Enterprise AI isn&apos;t about chatbots. It&apos;s about transforming how your organization captures, manages, and acts on knowledge — at scale, securely, reliably.
          </p>
        </div>
      </section>

      {/* Concepts */}
      <section className="section" aria-labelledby="concepts-heading">
        <div className="container">
          <div className="text-center mb-16">
            <div className="section-tag mx-auto">Core Concepts</div>
            <h2 id="concepts-heading" className="mt-4">
              The Technology Behind <span className="gradient-text">Kayak AI</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ENTERPRISE_AI_CONCEPTS.map((concept, i) => (
              <div key={concept.title} className="card flex gap-5">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: "var(--accent-glow)", border: "1px solid var(--border-accent)" }}
                >
                  {concept.icon}
                </div>
                <div>
                  <h2 className="text-lg font-bold mb-2">{concept.title}</h2>
                  <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
                    {concept.description}
                  </p>
                  <Link
                    href={concept.link}
                    className="text-sm font-medium flex items-center gap-1"
                    style={{ color: "var(--accent-primary)" }}
                  >
                    See how we implement it <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private AI section */}
      <section
        className="section"
        style={{ background: "var(--bg-secondary)" }}
        aria-labelledby="private-ai-heading"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-tag">Private AI</div>
              <h2 id="private-ai-heading" className="mt-4 mb-6">
                Your Data Stays <span className="gradient-text">Yours</span>
              </h2>
              <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
                In enterprise environments, data sovereignty isn&apos;t optional — it&apos;s mandatory. Every Kayak AI product can be deployed on your own infrastructure, ensuring sensitive information never touches external servers.
              </p>
              <p style={{ color: "var(--text-secondary)" }}>
                Our private AI deployment model gives you the full power of state-of-the-art AI models without the compliance risk of sending proprietary data to third-party APIs.
              </p>
              <div className="flex flex-col gap-3 mt-8">
                {[
                  "On-premise deployment in your own data center",
                  "VPC deployment on AWS, Azure, or Google Cloud",
                  "Air-gapped installation for maximum security",
                  "No data sent to external AI providers",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <span style={{ color: "var(--accent-primary)" }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div
              className="rounded-2xl p-8 grid grid-cols-2 gap-4"
              style={{ background: "var(--bg-glass)", border: "1px solid var(--border)" }}
            >
              {[
                { icon: "🏛️", label: "Government", desc: "Full air-gap" },
                { icon: "🏥", label: "Healthcare", desc: "HIPAA compliant" },
                { icon: "🏦", label: "Finance", desc: "SOC 2 Type II" },
                { icon: "📡", label: "Broadcast", desc: "On-premise" },
              ].map((item) => (
                <div key={item.label} className="text-center p-4 rounded-xl" style={{ background: "var(--bg-tertiary)" }}>
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="font-semibold text-sm">{item.label}</div>
                  <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container">
          <h2 className="mb-4">
            Ready to Deploy <span className="gradient-text">Enterprise AI?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/request-demo" className="btn-primary">Request Demo <ArrowRight size={16} /></Link>
            <Link href="/products/knowledge-ai" className="btn-ghost">Explore Knowledge AI</Link>
          </div>
        </div>
      </section>
    </>
  );
}
