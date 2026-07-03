"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, Play, ChevronRight } from "lucide-react";
import { PRODUCTS, INDUSTRIES, WHY_KAYAK, COMPANY_STATS } from "@/lib/data";

// ─── Particle Canvas ────────────────────────────────────────────────────────

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const prefersReducedMotion = typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  useEffect(() => {
    if (prefersReducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: {
      x: number; y: number; vx: number; vy: number; size: number; opacity: number;
    }[] = [];

    const COUNT = Math.min(80, Math.floor((width * height) / 12000));

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.1,
      });
    }

    let mouse = { x: -1000, y: -1000 };
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.addEventListener("mousemove", onMouseMove);

    const MAX_DIST = 120;
    const MOUSE_DIST = 150;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Update + draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < MOUSE_DIST) {
          p.x += (dx / d) * 0.5;
          p.y += (dy / d) * 0.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
        ctx.fill();
      }

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animRef.current = requestAnimationFrame(draw);
    }

    draw();

    const onResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animRef.current);
      canvas.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.7,
      }}
    />
  );
}

// ─── Animated Counter ────────────────────────────────────────────────────────

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) { setCount(value); return; }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * value * 10) / 10);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="stat-number">
      {Number.isInteger(value) ? Math.round(count) : count.toFixed(1)}
      {suffix}
    </span>
  );
}

// ─── Section Reveal ──────────────────────────────────────────────────────────

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Blog Posts (mock data until CMS) ────────────────────────────────────────

const MOCK_POSTS = [
  {
    slug: "kayak-ai-launches-newsforge-2-0",
    title: "Kayak AI Launches NewsForge 2.0 with Advanced AI Automation",
    excerpt: "The latest version of NewsForge brings real-time AI transcription, automated rundown generation, and MOS 3.0 support to newsrooms worldwide.",
    category: "Updates",
    date: "2026-06-28",
    readTime: 4,
    image: null,
  },
  {
    slug: "future-of-ai-in-education",
    title: "The Future of AI in Education: Personalization at Scale",
    excerpt: "How adaptive AI tutoring systems are transforming learning outcomes for millions of students across diverse educational contexts.",
    category: "Education",
    date: "2026-06-20",
    readTime: 7,
    image: null,
  },
  {
    slug: "enterprise-rag-private-knowledge",
    title: "Why Enterprise RAG Must Be Built on Private Infrastructure",
    excerpt: "The critical considerations for deploying retrieval-augmented generation in enterprise environments where data sovereignty is non-negotiable.",
    category: "AI",
    date: "2026-06-12",
    readTime: 6,
    image: null,
  },
];

// ─── Main Home Page ───────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="hero-section" aria-label="Hero">
        <ParticleCanvas />

        {/* Grid background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 grid-pattern"
          style={{ opacity: 0.4 }}
        />

        <div className="container relative z-10 text-center py-32 pt-40">
          <div
            className="section-tag mx-auto mb-8"
            style={{ animationDelay: "0ms", animation: "fadeUp 0.6s ease forwards" }}
          >
            🚀 The Future of Enterprise AI
          </div>

          <h1
            className="mb-6 font-black"
            style={{
              animation: "fadeUp 0.6s ease 100ms both",
              maxWidth: "900px",
              margin: "0 auto 24px",
            }}
          >
            Building the Future of{" "}
            <span className="gradient-text">Enterprise AI</span>
          </h1>

          <p
            className="text-lg md:text-xl mb-10 mx-auto"
            style={{
              maxWidth: "640px",
              animation: "fadeUp 0.6s ease 200ms both",
              color: "var(--text-secondary)",
            }}
          >
            Kayak AI powers next-generation newsrooms, personalized education, intelligent media management, and enterprise knowledge systems — all built on a unified AI platform.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ animation: "fadeUp 0.6s ease 300ms both" }}
          >
            <Link href="/products" className="btn-primary text-base px-8 py-3.5">
              Explore Products <ArrowRight size={18} />
            </Link>
            <Link href="/request-demo" className="btn-ghost text-base px-8 py-3.5">
              <Play size={16} />
              Request Demo
            </Link>
          </div>

          {/* Floating badges */}
          <div
            className="flex flex-wrap items-center justify-center gap-3 mt-12"
            style={{ animation: "fadeUp 0.6s ease 400ms both" }}
          >
            {["Enterprise-Grade Security", "99.9% SLA Uptime", "Private AI Deployment", "24/7 Support"].map((badge) => (
              <span key={badge} className="badge badge-blue">
                ✓ {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background: "linear-gradient(to bottom, transparent, var(--background))",
          }}
        />
      </section>

      {/* ── Trusted By ───────────────────────────────────────────── */}
      <section className="py-16" aria-label="Trusted by leading organizations">
        <div className="container">
          <FadeInSection>
            <p
              className="text-center text-sm font-semibold uppercase tracking-widest mb-8"
              style={{ color: "var(--text-muted)" }}
            >
              Trusted by leading organizations
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {["NewsNetwork", "EduGlobal", "MediaFirst", "BroadcastPro", "GovTech", "TechCorp"].map((name) => (
                <div
                  key={name}
                  className="transition-all duration-300"
                  style={{ color: "var(--text-muted)", fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.02em" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
                >
                  {name}
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      <div className="divider" />

      {/* ── Stats ────────────────────────────────────────────────── */}
      <section className="py-20" aria-label="Company statistics">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {COMPANY_STATS.map((stat, i) => (
              <FadeInSection key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="mt-2 text-sm font-medium" style={{ color: "var(--text-muted)" }}>
                    {stat.label}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── Company Overview ──────────────────────────────────────── */}
      <section className="section" aria-labelledby="overview-heading">
        <div className="container">
          <FadeInSection>
            <div className="text-center mb-16">
              <div className="section-tag mx-auto">Who We Are</div>
              <h2 id="overview-heading" className="mt-4">
                AI Built for the <span className="gradient-text">Real World</span>
              </h2>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🎯",
                title: "Our Mission",
                body: "To make enterprise-grade AI accessible to every organization — not just the ones with hundred-person data science teams.",
              },
              {
                icon: "🔭",
                title: "Our Vision",
                body: "A world where AI handles the repetitive, so your teams can focus on the creative, strategic, and human.",
              },
              {
                icon: "⚡",
                title: "Our Approach",
                body: "We build products that work out of the box, integrate with your existing tools, and scale with your organization.",
              },
              {
                icon: "🌍",
                title: "Our Values",
                body: "Transparency in AI decisions. Privacy by design. Accessibility for all teams. Excellence without compromise.",
              },
            ].map((item, i) => (
              <FadeInSection key={item.title} delay={i * 80}>
                <div className="card h-full">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {item.body}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products Preview ──────────────────────────────────────── */}
      <section
        className="section"
        style={{ background: "var(--bg-secondary)" }}
        aria-labelledby="products-heading"
      >
        <div className="container">
          <FadeInSection>
            <div className="text-center mb-16">
              <div className="section-tag mx-auto">Our Products</div>
              <h2 id="products-heading" className="mt-4">
                Six Products. <span className="gradient-text">One Platform.</span>
              </h2>
              <p className="mt-4 mx-auto" style={{ maxWidth: "560px", color: "var(--text-secondary)" }}>
                From breaking news to personalized learning — Kayak AI products work independently or together as a unified enterprise AI ecosystem.
              </p>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product, i) => (
              <FadeInSection key={product.slug} delay={i * 60}>
                <Link href={`/products/${product.slug}`} className="product-card block" aria-label={`${product.name} — ${product.tagline}`}>
                  {product.badge && (
                    <span className="badge badge-blue mb-4 inline-block">{product.badge}</span>
                  )}
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>
                    {product.tagline}
                  </p>
                  <div
                    className="flex items-center gap-1 text-sm font-medium"
                    style={{ color: product.color }}
                  >
                    Learn more <ChevronRight size={14} />
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
          <FadeInSection delay={400}>
            <div className="text-center mt-12">
              <Link href="/products" className="btn-ghost">
                View All Products <ArrowRight size={16} />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── Industries ────────────────────────────────────────────── */}
      <section className="section" aria-labelledby="industries-heading">
        <div className="container">
          <FadeInSection>
            <div className="text-center mb-16">
              <div className="section-tag mx-auto">Industries</div>
              <h2 id="industries-heading" className="mt-4">
                Built for Every <span className="gradient-text">Industry</span>
              </h2>
            </div>
          </FadeInSection>
          <div className="flex flex-wrap justify-center gap-4">
            {INDUSTRIES.map((industry, i) => (
              <FadeInSection key={industry.slug} delay={i * 50}>
                <Link
                  href={`/solutions/${industry.slug}`}
                  className="flex items-center gap-3 px-5 py-3 rounded-full transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "var(--bg-glass)",
                    border: "1px solid var(--border)",
                    color: "var(--text-secondary)",
                    backdropFilter: "blur(8px)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border-accent)";
                    el.style.color = "var(--accent-primary)";
                    el.style.boxShadow = "var(--shadow-glow)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border)";
                    el.style.color = "var(--text-secondary)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <span className="text-xl">{industry.icon}</span>
                  <span className="font-medium text-sm">{industry.name}</span>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Kayak AI ──────────────────────────────────────────── */}
      <section
        className="section"
        style={{ background: "var(--bg-secondary)" }}
        aria-labelledby="why-heading"
      >
        <div className="container">
          <FadeInSection>
            <div className="text-center mb-16">
              <div className="section-tag mx-auto">Why Kayak AI</div>
              <h2 id="why-heading" className="mt-4">
                The Enterprise AI <span className="gradient-text">Difference</span>
              </h2>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_KAYAK.map((item, i) => (
              <FadeInSection key={item.title} delay={i * 60}>
                <div className="card h-full">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {item.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest News ───────────────────────────────────────────── */}
      <section className="section" aria-labelledby="news-heading">
        <div className="container">
          <FadeInSection>
            <div className="flex items-end justify-between mb-12">
              <div>
                <div className="section-tag">Latest News</div>
                <h2 id="news-heading" className="mt-4">
                  From Our <span className="gradient-text">Blog</span>
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden md:flex items-center gap-2 text-sm font-medium"
                style={{ color: "var(--accent-primary)" }}
              >
                View all posts <ArrowRight size={14} />
              </Link>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MOCK_POSTS.map((post, i) => (
              <FadeInSection key={post.slug} delay={i * 80}>
                <Link href={`/blog/${post.slug}`} className="blog-card">
                  <div
                    className="h-40 flex items-center justify-center text-5xl"
                    style={{ background: "var(--bg-tertiary)" }}
                  >
                    {post.category === "Updates" ? "📢" : post.category === "Education" ? "🎓" : "🤖"}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="badge badge-blue">{post.category}</span>
                      <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                        {post.readTime} min read
                      </span>
                    </div>
                    <h3 className="text-base font-semibold leading-snug mb-2">{post.title}</h3>
                    <p className="text-sm line-clamp-2" style={{ color: "var(--text-secondary)" }}>
                      {post.excerpt}
                    </p>
                    <p className="text-xs mt-3" style={{ color: "var(--text-muted)" }}>
                      {post.date}
                    </p>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link href="/blog" className="btn-ghost">
              View all posts <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────── */}
      <section
        className="py-24"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(0, 212, 255, 0.12) 0%, transparent 70%), var(--bg-secondary)",
          borderTop: "1px solid var(--border)",
        }}
        aria-labelledby="cta-heading"
      >
        <div className="container text-center">
          <FadeInSection>
            <div className="section-tag mx-auto mb-6">Get Started Today</div>
            <h2 id="cta-heading" className="mb-4" style={{ maxWidth: "700px", margin: "0 auto 16px" }}>
              Ready to Transform Your{" "}
              <span className="gradient-text">Organization with AI?</span>
            </h2>
            <p className="mb-10 mx-auto" style={{ maxWidth: "500px", color: "var(--text-secondary)" }}>
              Join leading organizations using Kayak AI to streamline operations, reduce costs, and unlock new capabilities with enterprise AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/request-demo" className="btn-primary text-base px-8 py-3.5">
                Request a Demo <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn-ghost text-base px-8 py-3.5">
                Talk to Sales
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
