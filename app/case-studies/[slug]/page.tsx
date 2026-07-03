import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

const CASE_STUDIES_DATA: Record<string, {
  title: string;
  client: string;
  industry: string;
  product: string;
  emoji: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { value: string; label: string }[];
}> = {
  "national-news-network-newsforge": {
    title: "How a National News Network Cut Production Time by 40% with NewsForge",
    client: "Major Indian News Channel",
    industry: "News Channels",
    product: "NewsForge",
    emoji: "📡",
    challenge: "With over 200 journalists publishing stories across TV rundowns, digital portals, and social media channels, the network suffered from disconnected legacy systems. Rundowns were updated manually, transcription took hours, and breaking news coverage had a 15-minute delay from ingest to live playout.",
    solution: "The network deployed Kayak AI's NewsForge as its unified newsroom operating system. Live video ingest automatically triggers real-time multi-lingual AI transcription. Editors script stories directly in NewsForge with AI writing assistance, and rundowns sync seamlessly with broadcast automation systems via MOS protocol.",
    results: [
      "40% reduction in story production time from raw feed to live broadcast.",
      "60% decrease in manual transcription labor costs.",
      "Instant multi-format export to YouTube, X, and Web simultaneously."
    ],
    metrics: [
      { value: "40%", label: "Faster Production" },
      { value: "60%", label: "Less Manual Work" },
      { value: "3x", label: "Social Reach" }
    ]
  },
  "state-education-board-ai-tutor": {
    title: "State Education Board Improves Student Outcomes Across 500 Schools",
    client: "State Education Authority",
    industry: "Education",
    product: "AI Tutor",
    emoji: "🎓",
    challenge: "The board faced severe educational disparities across urban and rural schools. Rural schools suffered from high student-to-teacher ratios, making personalized feedback and remedial learning virtually impossible.",
    solution: "Kayak AI rolled out AI Tutor to 500 state schools. Students receive personalized, interactive tutoring adapted to their learning pace and language preference. Teachers use the AI Tutor dashboard to instantly spot student knowledge gaps and track homework completion.",
    results: [
      "23% average test score improvement among bottom quartile students.",
      "Over 120,000 active monthly student users across regional languages.",
      "Teachers saved an estimated 5 hours per week on assignment grading and lesson planning."
    ],
    metrics: [
      { value: "23%", label: "Score Improvement" },
      { value: "500", label: "Schools Deployed" },
      { value: "120K", label: "Active Students" }
    ]
  },
  "broadcast-network-mam-implementation": {
    title: "Regional Broadcast Network Organizes 20 Years of Archive with AI MAM",
    client: "South Indian Broadcast Group",
    industry: "Broadcast",
    product: "Media Asset Management",
    emoji: "🗂️",
    challenge: "A 20-year tape archive digitized into cloud storage was unusable because files lacked proper metadata. Finding specific politician speeches or historical event clips required staff to manually scrub through hours of footage.",
    solution: "Kayak AI Media Asset Management (MAM) ingested over 50,000 hours of video content. Using facial recognition, OCR on lower thirds, speech-to-text, and semantic indexing, MAM automatically tagged speakers, locations, and spoken topics.",
    results: [
      "2.5 million video assets tagged with high-confidence metadata.",
      "Search time per footage request dropped from 4 hours to under 5 seconds.",
      "Resurfaced historical clips generated new licensing and documentary revenue."
    ],
    metrics: [
      { value: "2.5M", label: "Assets Tagged" },
      { value: "<5s", label: "Search Time" },
      { value: "50K", label: "Archive Hours" }
    ]
  },
  "government-knowledge-ai-deployment": {
    title: "Government Ministry Deploys Private Knowledge AI for 10,000 Staff",
    client: "Central Government Ministry",
    industry: "Government",
    product: "Knowledge AI",
    emoji: "🏛️",
    challenge: "Staff across multiple departments struggled to locate authoritative policy guidelines, procurement rules, and legal circulars distributed across hundreds of legacy databases.",
    solution: "The ministry deployed Knowledge AI on an air-gapped private cloud. All internal documents were indexed via RAG architecture, allowing staff to query policy guidelines in natural language with precise source citations.",
    results: [
      "Sub-second policy resolution for 10,000 daily staff users.",
      "100% compliance with strict data sovereignty and security regulations.",
      "Drastic reduction in internal support tickets and policy misunderstandings."
    ],
    metrics: [
      { value: "10K", label: "Daily Users" },
      { value: "98%", label: "Query Accuracy" },
      { value: "100%", label: "Air-Gapped" }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(CASE_STUDIES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = CASE_STUDIES_DATA[slug];
  if (!cs) return {};
  return {
    title: `${cs.title} — Kayak AI Case Study`,
    description: cs.challenge,
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const cs = CASE_STUDIES_DATA[slug];

  if (!cs) notFound();

  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0, 212, 255, 0.08) 0%, transparent 60%), var(--background)" }}
      >
        <div className="container max-w-4xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-6">
            <Link href="/case-studies" style={{ color: "var(--text-muted)" }}>Case Studies</Link>
            <ChevronRight size={14} style={{ color: "var(--text-muted)" }} />
            <span style={{ color: "var(--accent-primary)" }}>{cs.industry}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="badge badge-blue">{cs.industry}</span>
            <span className="badge badge-purple">{cs.product}</span>
          </div>

          <h1 className="mb-6 text-2xl md:text-4xl font-bold leading-tight">{cs.title}</h1>

          <p className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>
            Client: <span style={{ color: "var(--text-primary)" }}>{cs.client}</span>
          </p>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="py-10" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container max-w-4xl">
          <div className="grid grid-cols-3 gap-6 text-center">
            {cs.metrics.map((m) => (
              <div key={m.label}>
                <div className="text-3xl md:text-5xl font-black gradient-text mb-1">{m.value}</div>
                <div className="text-xs md:text-sm font-medium" style={{ color: "var(--text-muted)" }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Case Study Details */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              <div>
                <div className="section-tag mb-3">01 / The Challenge</div>
                <h2 className="text-xl font-bold mb-4">The Obstacle Before Kayak AI</h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {cs.challenge}
                </p>
              </div>

              <div>
                <div className="section-tag mb-3">02 / The Solution</div>
                <h2 className="text-xl font-bold mb-4">Implementation & Workflow</h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {cs.solution}
                </p>
              </div>

              <div>
                <div className="section-tag mb-3">03 / Key Results</div>
                <h2 className="text-xl font-bold mb-4">Measurable Impact</h2>
                <ul className="flex flex-col gap-3">
                  {cs.results.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm p-3 rounded-xl" style={{ background: "var(--bg-glass)", border: "1px solid var(--border)" }}>
                      <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: "var(--accent-primary)" }} />
                      <span style={{ color: "var(--text-primary)" }}>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/case-studies" className="btn-ghost inline-flex items-center gap-2 mt-4 self-start">
                <ArrowLeft size={16} /> Back to Case Studies
              </Link>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="card sticky top-24 text-center">
                <div className="text-4xl mb-3">{cs.emoji}</div>
                <h3 className="font-bold text-lg mb-2">Want Similar Results?</h3>
                <p className="text-xs mb-6" style={{ color: "var(--text-secondary)" }}>
                  Schedule a personalized demo to discover how {cs.product} can transform your organization.
                </p>
                <Link href="/request-demo" className="btn-primary w-full justify-center text-sm mb-3">
                  Request Demo <ArrowRight size={14} />
                </Link>
                <Link href="/contact" className="btn-ghost w-full justify-center text-sm">
                  Contact Sales
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
