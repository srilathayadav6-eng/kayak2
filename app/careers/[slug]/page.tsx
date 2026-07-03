"use client";

import { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, MapPin, Briefcase, ArrowLeft, CheckCircle, Upload } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

const JOBS_DATA: Record<string, {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
}> = {
  "senior-fullstack-engineer": {
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Bengaluru, India",
    type: "Full-time",
    description: "Build scalable, real-time features across our enterprise AI product suite. Work with TypeScript, Next.js, and cutting-edge AI APIs.",
    responsibilities: [
      "Architect and build responsive, accessible web interfaces for enterprise AI products.",
      "Develop robust API routes and backend services in Next.js and Node.js.",
      "Integrate vector databases, LLM APIs, and real-time WebSocket communication channels.",
      "Collaborate closely with product managers, designers, and AI researchers."
    ],
    requirements: [
      "5+ years of software engineering experience.",
      "Deep expertise in React, Next.js (App Router), TypeScript, and TailwindCSS.",
      "Experience with relational databases (PostgreSQL/Prisma) and caching.",
      "Solid understanding of web performance, security standards, and WCAG accessibility."
    ],
    niceToHave: [
      "Experience with AI/LLM integrations (OpenAI, LangChain, RAG architectures).",
      "Prior work in media technology, broadcast systems, or EdTech."
    ]
  },
  "ml-engineer-nlp": {
    title: "ML Engineer — NLP / LLMs",
    department: "AI Research",
    location: "Bengaluru / Remote",
    type: "Full-time",
    description: "Fine-tune and deploy large language models for broadcast, education, and enterprise knowledge use cases.",
    responsibilities: [
      "Fine-tune open-weight LLMs (Llama, Mistral) on domain-specific corpora.",
      "Build high-throughput, low-latency inference pipelines on private GPU clusters.",
      "Optimize retrieval systems (RAG) for multi-modal and structured document search.",
      "Evaluate model performance, safety, and hallucination metrics."
    ],
    requirements: [
      "3+ years of ML engineering experience with focus on NLP.",
      "Strong proficiency in Python, PyTorch, vLLM, and Hugging Face ecosystems.",
      "Demonstrated experience building RAG pipelines and vector database integrations.",
      "M.S. or B.S. in Computer Science, AI, or related quantitative field."
    ],
    niceToHave: [
      "Publications or open-source contributions in NLP/LLMs.",
      "Experience deploying models on air-gapped / enterprise VPC infrastructure."
    ]
  },
  "product-manager-newsforge": {
    title: "Product Manager — NewsForge",
    department: "Product",
    location: "Bengaluru, India",
    type: "Full-time",
    description: "Own the product roadmap for NewsForge — our AI-native newsroom management system used by leading news channels.",
    responsibilities: [
      "Define product strategy and roadmap for NewsForge based on user research and channel feedback.",
      "Translate complex broadcast newsroom requirements into actionable engineering specs.",
      "Work daily with engineering, design, and customer success teams to ship features on time.",
      "Track adoption metrics and user satisfaction across newsroom deployments."
    ],
    requirements: [
      "4+ years of B2B SaaS product management experience.",
      "Deep understanding of media, broadcast newsroom workflows, or MOS protocols.",
      "Proven track record of shipping complex enterprise software products.",
      "Strong analytical, communication, and stakeholder management skills."
    ],
    niceToHave: [
      "Former journalist, news editor, or broadcast engineer background.",
      "Experience with AI-assisted content workflows."
    ]
  },
  "enterprise-sales-executive": {
    title: "Enterprise Sales Executive",
    department: "Sales",
    location: "Mumbai / Delhi / Bengaluru",
    type: "Full-time",
    description: "Sell Kayak AI's enterprise product suite to news networks, educational institutions, and government organizations.",
    responsibilities: [
      "Lead end-to-end sales cycles for enterprise accounts across target verticals.",
      "Build relationships with CTOs, Chief Editors, University Deans, and Procurement Leads.",
      "Deliver technical product demos in collaboration with solutions engineers.",
      "Achieve quarterly and annual revenue targets."
    ],
    requirements: [
      "5+ years in enterprise software or AI sales.",
      "Track record of closing six-figure ARR deals.",
      "Existing network in media, education, or government sectors in India.",
      "Exceptional presentation and contract negotiation skills."
    ],
    niceToHave: [
      "Experience selling AI, media management, or EdTech platforms."
    ]
  },
  "ui-ux-designer": {
    title: "UI/UX Designer",
    department: "Design",
    location: "Bengaluru, India",
    type: "Full-time",
    description: "Design enterprise AI products that are both beautiful and usable. You'll work across NewsForge, AI Tutor, and our admin interfaces.",
    responsibilities: [
      "Design end-to-end user flows, wireframes, and high-fidelity prototypes.",
      "Maintain and evolve the Kayak AI design system.",
      "Conduct user testing with journalists, teachers, and enterprise admins.",
      "Partner with engineers to ensure pixel-perfect design implementation."
    ],
    requirements: [
      "3+ years designing complex web applications (B2B/Enterprise preferred).",
      "Mastery of Figma, design tokens, and component systems.",
      "Strong portfolio demonstrating user-centric problem solving.",
      "Understanding of accessibility standards (WCAG) and dark mode ergonomics."
    ],
    niceToHave: [
      "Basic HTML/CSS/Tailwind understanding for close engineering collaboration."
    ]
  },
  "devops-engineer": {
    title: "DevOps / Infrastructure Engineer",
    department: "Engineering",
    location: "Bengaluru / Remote",
    type: "Full-time",
    description: "Build and maintain the infrastructure that powers our enterprise AI products, including private cloud deployments and CI/CD pipelines.",
    responsibilities: [
      "Manage AWS, Azure, and Kubernetes infrastructure across multi-region deployments.",
      "Implement automated private VPC and on-premise installation scripts for enterprise clients.",
      "Maintain high-availability monitoring, alert pipelines, and incident response.",
      "Optimize GPU compute infrastructure for cost and performance."
    ],
    requirements: [
      "4+ years of DevOps / Site Reliability Engineering experience.",
      "Hands-on expertise with Terraform, Docker, Kubernetes, and Helm.",
      "Strong Linux administration, networking, and security hardening skills.",
      "Experience managing CI/CD pipelines (GitHub Actions, GitLab CI)."
    ],
    niceToHave: [
      "Experience managing GPU clusters (NVIDIA Triton, KServe).",
      "SOC 2 compliance automation background."
    ]
  }
};

export default function JobDetailPage({ params }: Props) {
  const { slug } = use(params);
  const job = JOBS_DATA[slug];

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    resumeUrl: "",
    coverNote: "",
  });

  if (!job) notFound();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section
        className="pt-32 pb-16"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(124, 58, 237, 0.08) 0%, transparent 60%), var(--background)" }}
      >
        <div className="container max-w-4xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-6">
            <Link href="/careers" style={{ color: "var(--text-muted)" }}>Careers</Link>
            <ChevronRight size={14} style={{ color: "var(--text-muted)" }} />
            <span style={{ color: "var(--accent-primary)" }}>{job.department}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="badge badge-purple">{job.department}</span>
            <span className="badge badge-blue">{job.type}</span>
          </div>

          <h1 className="mb-4">{job.title}</h1>

          <div className="flex items-center gap-6 text-sm" style={{ color: "var(--text-muted)" }}>
            <span className="flex items-center gap-1.5"><MapPin size={14} /> {job.location}</span>
            <span className="flex items-center gap-1.5"><Briefcase size={14} /> {job.type}</span>
          </div>
        </div>
      </section>

      {/* Content + Apply */}
      <section className="section">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Job Description */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div>
                <h2 className="text-xl font-bold mb-4">About the Role</h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {job.description}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Key Responsibilities</h2>
                <ul className="flex flex-col gap-3">
                  {job.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <CheckCircle size={16} className="shrink-0 mt-0.5" style={{ color: "var(--accent-primary)" }} />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Requirements</h2>
                <ul className="flex flex-col gap-3">
                  {job.requirements.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <CheckCircle size={16} className="shrink-0 mt-0.5" style={{ color: "var(--accent-secondary)" }} />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {job.niceToHave.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold mb-4">Nice to Have</h2>
                  <ul className="flex flex-col gap-3">
                    {job.niceToHave.map((r, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                        <span style={{ color: "var(--accent-primary)" }}>•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Link href="/careers" className="btn-ghost inline-flex items-center gap-2 mt-4 self-start">
                <ArrowLeft size={16} /> Back to All Jobs
              </Link>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-1">
              <div className="card sticky top-24">
                <h2 className="text-lg font-bold mb-4">Apply for this Position</h2>

                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "rgba(0, 212, 255, 0.15)", color: "var(--accent-primary)" }}>
                      <CheckCircle size={28} />
                    </div>
                    <h3 className="font-bold mb-2">Application Received!</h3>
                    <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                      Thank you for applying. Our talent team will review your application and respond within 3 business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label htmlFor="app-name" className="label text-xs">Full Name *</label>
                      <input
                        id="app-name"
                        type="text"
                        required
                        className="input text-sm"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <label htmlFor="app-email" className="label text-xs">Email Address *</label>
                      <input
                        id="app-email"
                        type="email"
                        required
                        className="input text-sm"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <label htmlFor="app-phone" className="label text-xs">Phone Number *</label>
                      <input
                        id="app-phone"
                        type="tel"
                        required
                        className="input text-sm"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>

                    <div>
                      <label htmlFor="app-resume" className="label text-xs">Resume Link (PDF/Drive) *</label>
                      <input
                        id="app-resume"
                        type="url"
                        required
                        className="input text-sm"
                        placeholder="https://drive.google.com/..."
                        value={form.resumeUrl}
                        onChange={(e) => setForm({ ...form, resumeUrl: e.target.value })}
                      />
                    </div>

                    <div>
                      <label htmlFor="app-note" className="label text-xs">Cover Note / Why Kayak AI?</label>
                      <textarea
                        id="app-note"
                        className="textarea text-sm"
                        rows={3}
                        placeholder="Brief note about your relevant experience..."
                        value={form.coverNote}
                        onChange={(e) => setForm({ ...form, coverNote: e.target.value })}
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center text-sm mt-2">
                      Submit Application
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
