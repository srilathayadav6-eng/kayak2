import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Briefcase, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers — Kayak AI",
  description: "Join Kayak AI and help build the future of enterprise AI. View open roles in engineering, product, sales, and design.",
};

const JOBS = [
  {
    slug: "senior-fullstack-engineer",
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Bengaluru, India",
    type: "Full-time",
    description: "Build scalable, real-time features across our enterprise AI product suite. Work with TypeScript, Next.js, and cutting-edge AI APIs.",
  },
  {
    slug: "ml-engineer-nlp",
    title: "ML Engineer — NLP / LLMs",
    department: "AI Research",
    location: "Bengaluru / Remote",
    type: "Full-time",
    description: "Fine-tune and deploy large language models for broadcast, education, and enterprise knowledge use cases.",
  },
  {
    slug: "product-manager-newsforge",
    title: "Product Manager — NewsForge",
    department: "Product",
    location: "Bengaluru, India",
    type: "Full-time",
    description: "Own the product roadmap for NewsForge — our AI-native newsroom management system used by leading news channels.",
  },
  {
    slug: "enterprise-sales-executive",
    title: "Enterprise Sales Executive",
    department: "Sales",
    location: "Mumbai / Delhi / Bengaluru",
    type: "Full-time",
    description: "Sell Kayak AI's enterprise product suite to news networks, educational institutions, and government organizations.",
  },
  {
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    location: "Bengaluru, India",
    type: "Full-time",
    description: "Design enterprise AI products that are both beautiful and usable. You'll work across NewsForge, AI Tutor, and our admin interfaces.",
  },
  {
    slug: "devops-engineer",
    title: "DevOps / Infrastructure Engineer",
    department: "Engineering",
    location: "Bengaluru / Remote",
    type: "Full-time",
    description: "Build and maintain the infrastructure that powers our enterprise AI products, including private cloud deployments and CI/CD pipelines.",
  },
];

const DEPARTMENTS = ["All", "Engineering", "AI Research", "Product", "Sales", "Design"];

const BENEFITS = [
  { icon: "💰", title: "Competitive Compensation", desc: "Industry-leading salary + equity for all full-time roles" },
  { icon: "🏥", title: "Health Insurance", desc: "Comprehensive health, dental, and vision coverage for you and family" },
  { icon: "📚", title: "Learning Budget", desc: "₹50,000/year for courses, conferences, and books" },
  { icon: "🏖️", title: "Flexible PTO", desc: "Unlimited paid time off — we trust you to manage your time" },
  { icon: "🏠", title: "Remote-Friendly", desc: "Hybrid work policy — come to the office when it matters, work from anywhere otherwise" },
  { icon: "🚀", title: "Real Impact", desc: "Work on products used by millions of students and broadcast professionals" },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(124, 58, 237, 0.1) 0%, transparent 60%), var(--background)" }}
        aria-labelledby="careers-heading"
      >
        <div className="container">
          <div className="section-tag">Join the Team</div>
          <h1 id="careers-heading" className="mt-4 mb-6">
            Build the Future of <span className="gradient-text">Enterprise AI</span>
          </h1>
          <p className="text-xl" style={{ maxWidth: "560px", color: "var(--text-secondary)" }}>
            We&apos;re a team of builders, researchers, and domain experts passionate about AI that works in the real world. Come help us build it.
          </p>
          <div className="flex items-center gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-black gradient-text">50+</div>
              <div className="text-sm" style={{ color: "var(--text-muted)" }}>Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black gradient-text">6</div>
              <div className="text-sm" style={{ color: "var(--text-muted)" }}>Open Roles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black gradient-text">3</div>
              <div className="text-sm" style={{ color: "var(--text-muted)" }}>Locations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="section" aria-labelledby="roles-heading">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="section-tag">Open Roles</div>
              <h2 id="roles-heading" className="mt-4">
                Current <span className="gradient-text">Openings</span>
              </h2>
            </div>
            <div className="flex gap-2 flex-wrap">
              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept}
                  className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
                  style={{
                    background: dept === "All" ? "var(--accent-primary)" : "var(--bg-glass)",
                    color: dept === "All" ? "#050810" : "var(--text-secondary)",
                    border: "1px solid " + (dept === "All" ? "var(--accent-primary)" : "var(--border)"),
                  }}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {JOBS.map((job) => (
              <Link
                key={job.slug}
                href={`/careers/${job.slug}`}
                className="card flex items-start justify-between gap-6 group"
                style={{ textDecoration: "none" }}
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold">{job.title}</h3>
                    <span className="badge badge-purple">{job.department}</span>
                  </div>
                  <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>{job.description}</p>
                  <div className="flex items-center gap-4 text-xs" style={{ color: "var(--text-muted)" }}>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                    <span className="flex items-center gap-1"><Briefcase size={12} /> {job.type}</span>
                  </div>
                </div>
                <div
                  className="btn-ghost text-sm py-2 px-4 shrink-0 group-hover:border-[var(--accent-primary)] group-hover:text-[var(--accent-primary)]"
                >
                  Apply <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section
        className="section"
        style={{ background: "var(--bg-secondary)" }}
        aria-labelledby="benefits-heading"
      >
        <div className="container">
          <div className="text-center mb-12">
            <div className="section-tag mx-auto">Benefits</div>
            <h2 id="benefits-heading" className="mt-4">
              Why Join <span className="gradient-text">Kayak AI</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((b) => (
              <div key={b.title} className="card">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-semibold mb-2">{b.title}</h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="section" aria-labelledby="process-heading">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <div className="section-tag mx-auto">Hiring Process</div>
            <h2 id="process-heading" className="mt-4">
              What to <span className="gradient-text">Expect</span>
            </h2>
          </div>
          <div className="flex flex-col gap-0">
            {[
              { step: 1, title: "Apply Online", desc: "Submit your resume and a brief note about why you want to join Kayak AI. We read every application." },
              { step: 2, title: "Initial Screen", desc: "A 30-minute call with our Talent team to understand your background, expectations, and answer your questions." },
              { step: 3, title: "Technical / Role Interview", desc: "A 1-hour interview relevant to your role — engineering take-home or live coding, product case study, sales roleplay, etc." },
              { step: 4, title: "Team Interview", desc: "Meet 2-3 people from the team you&apos;ll be working with. Mostly conversation — we want to know how you think." },
              { step: 5, title: "Offer", desc: "If it&apos;s a mutual fit, we&apos;ll make an offer within 48 hours. Total process: typically 2–3 weeks." },
            ].map((item, i) => (
              <div key={item.step} className="flex gap-6 pb-8">
                <div className="flex flex-col items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0"
                    style={{ background: "var(--accent-glow)", border: "1px solid var(--accent-primary)", color: "var(--accent-primary)" }}
                  >
                    {item.step}
                  </div>
                  {i < 4 && <div className="w-0.5 flex-1 mt-2" style={{ background: "var(--border)" }} />}
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
