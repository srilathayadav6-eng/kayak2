import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Kayak AI",
  description:
    "Learn about Kayak AI — our story, mission, leadership team, and the vision driving enterprise AI innovation in media, education, and beyond.",
};

const timeline = [
  { year: "2022", title: "Founded", description: "Kayak AI incorporated with a mission to democratize enterprise AI for media and education." },
  { year: "2023", title: "NewsForge Launch", description: "Launched NewsForge 1.0 — India's first AI-native newsroom management system." },
  { year: "2023", title: "First Enterprise Clients", description: "Signed first 10 enterprise clients across news channels and educational institutions." },
  { year: "2024", title: "AI Tutor & MAM", description: "Expanded product portfolio with AI Tutor and Media Asset Management platforms." },
  { year: "2024", title: "Series A", description: "Closed Series A funding to accelerate product development and market expansion." },
  { year: "2025", title: "Global Expansion", description: "Expanded to Southeast Asia and Middle East markets with localized AI capabilities." },
  { year: "2026", title: "Full Platform", description: "All 6 products live on unified Kayak AI platform serving 50+ enterprise clients globally." },
];

const leadership = [
  { name: "Arjun Sharma", title: "CEO & Co-Founder", bio: "Former CTO at a leading Indian news network. 15 years building media technology at scale.", linkedin: "#", initials: "AS" },
  { name: "Priya Mehta", title: "CTO & Co-Founder", bio: "PhD in Machine Learning from IIT Bombay. Previously led AI research at a global technology firm.", linkedin: "#", initials: "PM" },
  { name: "Rohit Verma", title: "VP of Product", bio: "Product leader with experience spanning broadcast, EdTech, and enterprise SaaS platforms.", linkedin: "#", initials: "RV" },
  { name: "Ananya Patel", title: "VP of Engineering", bio: "Full-stack engineering leader with expertise in distributed systems and real-time media processing.", linkedin: "#", initials: "AP" },
  { name: "Vikram Singh", title: "VP of Sales", bio: "Enterprise sales leader with 12 years in AI, media technology, and government procurement.", linkedin: "#", initials: "VS" },
  { name: "Sneha Krishnan", title: "Head of Design", bio: "Interaction designer passionate about making enterprise AI tools beautiful and intuitive.", linkedin: "#", initials: "SK" },
];

const stats = [
  { value: "6+", label: "AI Products" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "7", label: "Industries" },
  { value: "3+", label: "Countries" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(124, 58, 237, 0.1) 0%, transparent 60%), var(--background)",
        }}
        aria-labelledby="about-heading"
      >
        <div className="container text-center">
          <div className="section-tag mx-auto">Our Story</div>
          <h1 id="about-heading" className="mt-4 mb-6">
            Built by Builders, <span className="gradient-text">For Builders</span>
          </h1>
          <p className="text-xl mx-auto" style={{ maxWidth: "640px", color: "var(--text-secondary)" }}>
            Kayak AI was founded by technologists who spent years frustrated by the gap between what AI could do and what enterprise products actually delivered. So we built what we wished existed.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="stat-number">{stat.value}</div>
                <p className="text-sm mt-2" style={{ color: "var(--text-muted)" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section" aria-labelledby="story-heading">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-tag">Our Story</div>
              <h2 id="story-heading" className="mt-4 mb-6">
                Why We <span className="gradient-text">Built Kayak AI</span>
              </h2>
              <div className="flex flex-col gap-4" style={{ color: "var(--text-secondary)" }}>
                <p>
                  When our founders worked inside Indian news networks and educational institutions, they saw the same problem everywhere: teams drowning in repetitive work that AI could handle, but no enterprise-grade AI product they could trust with their operations.
                </p>
                <p>
                  Existing solutions were either too generic (built for Silicon Valley workflows, not Indian newsrooms), too expensive (priced for US enterprise budgets), or too immature (cool demos that broke in production).
                </p>
                <p>
                  Kayak AI was built from day one with a different philosophy: AI that works the way your organization actually works. Domain-specific. Reliable. Secure. And built to scale.
                </p>
              </div>
            </div>
            <div
              className="rounded-2xl p-12 text-center"
              style={{ background: "var(--bg-glass)", border: "1px solid var(--border)" }}
            >
              <div className="text-6xl mb-6">🚀</div>
              <div className="section-tag mx-auto mb-4">Our Mission</div>
              <p className="text-lg font-medium" style={{ color: "var(--text-primary)" }}>
                To make enterprise-grade AI accessible to every organization — not just the ones with hundred-person data science teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="section"
        style={{ background: "var(--bg-secondary)" }}
        aria-labelledby="timeline-heading"
      >
        <div className="container">
          <div className="text-center mb-16">
            <div className="section-tag mx-auto">Our Journey</div>
            <h2 id="timeline-heading" className="mt-4">
              Milestones That <span className="gradient-text">Shaped Us</span>
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="timeline">
              {timeline.map((item) => (
                <div key={item.year} className="timeline-item">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="badge badge-blue">{item.year}</span>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section" aria-labelledby="leadership-heading">
        <div className="container">
          <div className="text-center mb-16">
            <div className="section-tag mx-auto">Leadership</div>
            <h2 id="leadership-heading" className="mt-4">
              The Team Behind <span className="gradient-text">Kayak AI</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((person) => (
              <div key={person.name} className="card text-center">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4"
                  style={{ background: "var(--gradient-brand)", color: "white" }}
                >
                  {person.initials}
                </div>
                <h3 className="text-lg font-semibold">{person.name}</h3>
                <p className="text-sm font-medium mb-3" style={{ color: "var(--accent-primary)" }}>
                  {person.title}
                </p>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{person.bio}</p>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium"
                  style={{ color: "var(--accent-primary)" }}
                >
                  LinkedIn →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section
        className="section"
        style={{ background: "var(--bg-secondary)" }}
        aria-labelledby="culture-heading"
      >
        <div className="container">
          <div className="text-center mb-16">
            <div className="section-tag mx-auto">Culture & Values</div>
            <h2 id="culture-heading" className="mt-4">
              How We <span className="gradient-text">Work</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "🔍", title: "Relentless Clarity", description: "We obsess over making complex AI decisions transparent and explainable — to our clients and within our own teams." },
              { icon: "🛡️", title: "Privacy by Design", description: "Security and privacy are not features we add. They're the foundation everything else is built on." },
              { icon: "⚡", title: "Speed with Quality", description: "We ship fast without sacrificing reliability. Every feature that ships to production has been battle-tested." },
              { icon: "🤝", title: "Customer Partnership", description: "We don't have customers — we have partners. Their success is our success, and that changes how we build." },
            ].map((item) => (
              <div key={item.title} className="card flex gap-4">
                <div className="text-3xl shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center" aria-labelledby="about-cta">
        <div className="container">
          <h2 id="about-cta" className="mb-4">
            Join Us on the <span className="gradient-text">Journey</span>
          </h2>
          <p className="mb-8 mx-auto" style={{ maxWidth: "480px", color: "var(--text-secondary)" }}>
            We're hiring exceptional people who want to build AI that makes a real difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/careers" className="btn-primary">
              View Open Roles <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-ghost">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
