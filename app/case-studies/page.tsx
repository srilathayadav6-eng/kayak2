import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies — Kayak AI",
  description: "See how leading organizations use Kayak AI to transform their operations with enterprise AI.",
};

const CASE_STUDIES = [
  {
    slug: "national-news-network-newsforge",
    title: "How a National News Network Cut Production Time by 40% with NewsForge",
    client: "Major Indian News Channel",
    industry: "News Channels",
    challenge: "A 24/7 news channel with 200+ journalists was struggling with rundown chaos and slow turnaround times for breaking news coverage.",
    results: ["40% reduction in story production time", "60% less time spent on manual transcription", "3x faster social media publishing workflow"],
    metrics: [{ value: "40%", label: "Faster Production" }, { value: "60%", label: "Less Manual Work" }],
    product: "newsforge",
    emoji: "📡",
  },
  {
    slug: "state-education-board-ai-tutor",
    title: "State Education Board Improves Student Outcomes Across 500 Schools",
    client: "State Education Authority",
    industry: "Education",
    challenge: "Rolling out personalized education support across a diverse student population spanning urban and rural schools with very different resource levels.",
    results: ["23% improvement in test scores for bottom quartile students", "500 schools onboarded in 6 months", "Teachers report 30% more time for mentoring"],
    metrics: [{ value: "23%", label: "Score Improvement" }, { value: "500", label: "Schools Served" }],
    product: "ai-tutor",
    emoji: "🎓",
  },
  {
    slug: "broadcast-network-mam-implementation",
    title: "Regional Broadcast Network Organizes 20 Years of Archive with AI MAM",
    client: "South Indian Broadcast Group",
    industry: "Broadcast",
    challenge: "A 20-year tape archive being digitized had no consistent metadata strategy. Finding specific footage took days.",
    results: ["2.5 million assets tagged automatically", "Search time reduced from days to seconds", "Licensing revenue increased from resurfaced archive content"],
    metrics: [{ value: "2.5M", label: "Assets Tagged" }, { value: "<5s", label: "Search Time" }],
    product: "mam",
    emoji: "🗂️",
  },
  {
    slug: "government-knowledge-ai-deployment",
    title: "Government Ministry Deploys Private Knowledge AI for 10,000 Staff",
    client: "Central Government Ministry",
    industry: "Government",
    challenge: "Policy documents, circulars, and procedural guides were scattered across dozens of systems, making it nearly impossible for staff to find authoritative answers quickly.",
    results: ["10,000 staff using the system daily", "Fully air-gapped private deployment", "Policy query resolution time: 45 minutes → under 30 seconds"],
    metrics: [{ value: "10K", label: "Daily Users" }, { value: "98%", label: "Query Accuracy" }],
    product: "knowledge-ai",
    emoji: "🏛️",
  },
];

const INDUSTRIES = ["All", "News Channels", "Education", "Broadcast", "Government"];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(16, 185, 129, 0.08) 0%, transparent 60%), var(--background)" }}
        aria-labelledby="case-studies-heading"
      >
        <div className="container">
          <div className="section-tag">Case Studies</div>
          <h1 id="case-studies-heading" className="mt-4 mb-6">
            Real Results from <span className="gradient-text">Real Organizations</span>
          </h1>
          <p className="text-xl" style={{ maxWidth: "560px", color: "var(--text-secondary)" }}>
            See how leading organizations across media, education, and government have transformed their operations with Kayak AI.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="container py-4">
          <div className="flex items-center gap-3 flex-wrap">
            {INDUSTRIES.map((ind) => (
              <button
                key={ind}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
                style={{
                  background: ind === "All" ? "var(--accent-primary)" : "var(--bg-glass)",
                  color: ind === "All" ? "#050810" : "var(--text-secondary)",
                  border: "1px solid " + (ind === "All" ? "var(--accent-primary)" : "var(--border)"),
                }}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section" aria-label="Case studies">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((cs) => (
              <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="card flex flex-col" style={{ textDecoration: "none" }}>
                <div
                  className="h-40 rounded-xl flex items-center justify-center text-7xl mb-5"
                  style={{ background: "var(--bg-tertiary)" }}
                >
                  {cs.emoji}
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="badge badge-blue">{cs.industry}</span>
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>{cs.client}</span>
                </div>
                <h2 className="text-lg font-bold mb-3 leading-snug flex-1">{cs.title}</h2>
                <div className="flex gap-4 mt-4 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-2xl font-black" style={{ color: "var(--accent-primary)" }}>{m.value}</div>
                      <div className="text-xs" style={{ color: "var(--text-muted)" }}>{m.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1 mt-4 text-sm font-medium" style={{ color: "var(--accent-primary)" }}>
                  Read case study <ChevronRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <h2 className="mb-4">
            Become Our Next <span className="gradient-text">Success Story</span>
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
