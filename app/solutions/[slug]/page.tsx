import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { INDUSTRIES, PRODUCTS } from "@/lib/data";
import { ArrowRight, ChevronRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) return {};
  return {
    title: `${industry.name} AI Solutions — Kayak AI`,
    description: industry.description,
  };
}

const INDUSTRY_CONTENT: Record<string, {
  challenges: string[];
  solutions: string;
  products: string[];
}> = {
  "news-channels": {
    challenges: [
      "Managing high-volume story flow under constant breaking news pressure",
      "Integrating legacy broadcast hardware with modern digital workflows",
      "Reducing reliance on manual transcription and translation in multilingual environments",
      "Meeting OTT and social publishing deadlines alongside live broadcasts",
    ],
    solutions: "NewsForge automates the full newsroom workflow from story assignment to playout, while our MAM system organizes your media library with AI-powered tagging. AI Video Editing creates digital-ready clips automatically, and Broadcast Suite handles multi-channel distribution seamlessly.",
    products: ["newsforge", "mam", "broadcast-suite", "ai-editing"],
  },
  education: {
    challenges: [
      "Delivering personalized learning at scale with limited teaching staff",
      "Keeping students engaged in hybrid and remote learning environments",
      "Tracking individual student progress across diverse learning styles",
      "Managing knowledge bases and curriculum materials efficiently",
    ],
    solutions: "AI Tutor provides personalized learning paths for every student while giving teachers deep analytics. Knowledge AI turns your institution's content library into an always-available intelligent assistant for students and staff.",
    products: ["ai-tutor", "knowledge-ai"],
  },
  government: {
    challenges: [
      "Managing large volumes of policy documents and institutional knowledge",
      "Providing citizens and staff with quick access to accurate information",
      "Ensuring compliance with data sovereignty and security regulations",
      "Training staff efficiently across distributed departments",
    ],
    solutions: "Knowledge AI provides secure, private AI deployment options that keep sensitive government data on your infrastructure, with semantic search across all policy documents, regulations, and operational procedures.",
    products: ["knowledge-ai", "mam"],
  },
  corporate: {
    challenges: [
      "Knowledge silos preventing efficient internal information sharing",
      "Onboarding and training at scale across distributed teams",
      "Managing large volumes of corporate media and communications",
      "Supporting remote work with accessible knowledge systems",
    ],
    solutions: "Knowledge AI connects to your existing tools (SharePoint, Confluence, Notion) to create an intelligent layer over your organizational knowledge. AI Tutor powers scalable training programs adapted to each employee.",
    products: ["knowledge-ai", "ai-tutor"],
  },
  healthcare: {
    challenges: [
      "Secure management of sensitive patient and clinical media",
      "Efficient retrieval of medical images, reports, and documentation",
      "Training clinical staff with personalized, up-to-date content",
      "Meeting HIPAA and regional compliance requirements",
    ],
    solutions: "Our MAM system handles medical media with full audit trails and access controls. Knowledge AI creates secure clinical knowledge bases with on-premise deployment for full data sovereignty.",
    products: ["mam", "knowledge-ai"],
  },
  broadcast: {
    challenges: [
      "Managing complex multi-channel broadcast operations with limited staff",
      "Integrating live production with OTT and streaming platforms",
      "Automating routine broadcast operations to reduce human error",
      "Meeting latency and reliability requirements for live broadcast",
    ],
    solutions: "Broadcast Suite provides end-to-end automation from production scheduling to multi-platform distribution. MAM organizes your media library while AI Editing handles the growing demand for digital content.",
    products: ["broadcast-suite", "newsforge", "mam", "ai-editing"],
  },
  publishing: {
    challenges: [
      "Managing large archives of digital and print media assets",
      "Meeting demand for multimedia content across digital channels",
      "Automating repetitive content tagging and metadata tasks",
      "Maintaining editorial consistency across distributed teams",
    ],
    solutions: "MAM provides AI-powered organization for your entire media archive. NewsForge's content workflows adapt to publishing environments, and Knowledge AI helps editorial teams stay aligned on style and content standards.",
    products: ["mam", "newsforge", "knowledge-ai"],
  },
};

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) notFound();

  const content = INDUSTRY_CONTENT[slug] || {
    challenges: [],
    solutions: "Contact us to learn how Kayak AI can address your specific industry challenges.",
    products: [],
  };

  const relevantProducts = PRODUCTS.filter((p) => content.products.includes(p.slug));

  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0, 212, 255, 0.08) 0%, transparent 60%), var(--background)" }}
        aria-labelledby="industry-heading"
      >
        <div className="container">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8">
            <Link href="/solutions" style={{ color: "var(--text-muted)" }}>Solutions</Link>
            <ChevronRight size={14} style={{ color: "var(--text-muted)" }} />
            <span style={{ color: "var(--accent-primary)" }}>{industry.name}</span>
          </nav>
          <div className="text-6xl mb-4">{industry.icon}</div>
          <h1 id="industry-heading" className="mb-4">
            AI for <span className="gradient-text">{industry.name}</span>
          </h1>
          <p className="text-xl" style={{ maxWidth: "640px", color: "var(--text-secondary)" }}>
            {industry.description}
          </p>
        </div>
      </section>

      {/* Challenges */}
      <section className="section" aria-labelledby="challenges-heading">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-tag">The Challenge</div>
              <h2 id="challenges-heading" className="mt-4 mb-8">
                What {industry.name} <span className="gradient-text">Struggle With</span>
              </h2>
              <div className="flex flex-col gap-4">
                {content.challenges.map((challenge, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl" style={{ background: "var(--bg-glass)", border: "1px solid var(--border)" }}>
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                      style={{ background: "rgba(239, 68, 68, 0.15)", color: "#f87171" }}
                    >
                      {i + 1}
                    </div>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="section-tag">The Solution</div>
              <h2 className="mt-4 mb-6">
                How <span className="gradient-text">Kayak AI</span> Helps
              </h2>
              <p className="mb-8" style={{ color: "var(--text-secondary)" }}>{content.solutions}</p>
              <Link href="/request-demo" className="btn-primary">
                See It In Action <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant Products */}
      {relevantProducts.length > 0 && (
        <section
          className="section"
          style={{ background: "var(--bg-secondary)" }}
          aria-labelledby="products-heading"
        >
          <div className="container">
            <div className="text-center mb-12">
              <div className="section-tag mx-auto">Recommended</div>
              <h2 id="products-heading" className="mt-4">
                Products for <span className="gradient-text">{industry.name}</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {relevantProducts.map((product) => (
                <Link key={product.slug} href={`/products/${product.slug}`} className="card flex gap-4" style={{ textDecoration: "none" }}>
                  <div className="text-3xl shrink-0">{product.icon}</div>
                  <div>
                    <h3 className="font-bold mb-1">{product.name}</h3>
                    <p className="text-xs" style={{ color: "var(--text-secondary)" }}>{product.tagline}</p>
                    <div className="flex items-center gap-1 mt-3 text-xs font-medium" style={{ color: "var(--accent-primary)" }}>
                      Learn more <ChevronRight size={12} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container">
          <h2 className="mb-4">
            Ready to Transform Your <span className="gradient-text">{industry.name} Operations?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/request-demo" className="btn-primary">Request Demo <ArrowRight size={16} /></Link>
            <Link href="/contact" className="btn-ghost">Talk to Sales</Link>
          </div>
        </div>
      </section>
    </>
  );
}
