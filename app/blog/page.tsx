import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search, Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Kayak AI",
  description: "Insights on enterprise AI, media technology, EdTech, broadcast automation, and knowledge management from the Kayak AI team.",
};

const POSTS = [
  {
    slug: "kayak-ai-launches-newsforge-2-0",
    title: "Kayak AI Launches NewsForge 2.0 with Advanced AI Automation",
    excerpt: "The latest version of NewsForge brings real-time AI transcription, automated rundown generation, and MOS 3.0 support to newsrooms worldwide.",
    category: "Updates",
    author: "Arjun Sharma",
    date: "June 28, 2026",
    readTime: 4,
    emoji: "📢",
  },
  {
    slug: "future-of-ai-in-education",
    title: "The Future of AI in Education: Personalization at Scale",
    excerpt: "How adaptive AI tutoring systems are transforming learning outcomes for millions of students across diverse educational contexts.",
    category: "Education",
    author: "Priya Mehta",
    date: "June 20, 2026",
    readTime: 7,
    emoji: "🎓",
  },
  {
    slug: "enterprise-rag-private-knowledge",
    title: "Why Enterprise RAG Must Be Built on Private Infrastructure",
    excerpt: "The critical considerations for deploying retrieval-augmented generation in enterprise environments where data sovereignty is non-negotiable.",
    category: "AI",
    author: "Priya Mehta",
    date: "June 12, 2026",
    readTime: 6,
    emoji: "🤖",
  },
  {
    slug: "broadcast-automation-2026",
    title: "Broadcast Automation in 2026: What's Changed and What Hasn't",
    excerpt: "A deep dive into the state of broadcast automation: what AI has genuinely transformed vs. where human expertise remains irreplaceable.",
    category: "Broadcast",
    author: "Rohit Verma",
    date: "June 5, 2026",
    readTime: 8,
    emoji: "📺",
  },
  {
    slug: "mam-ai-tagging-accuracy",
    title: "How We Achieved 98.7% Accuracy in AI-Powered Media Tagging",
    excerpt: "The technical journey behind our media asset management's face recognition and auto-tagging system — from data collection to production deployment.",
    category: "Technology",
    author: "Ananya Patel",
    date: "May 28, 2026",
    readTime: 10,
    emoji: "🗂️",
  },
  {
    slug: "knowledge-ai-enterprise-search",
    title: "Building Enterprise Search That Actually Works",
    excerpt: "Why keyword search fails enterprise knowledge bases and how semantic RAG-based search changes the equation fundamentally.",
    category: "AI",
    author: "Priya Mehta",
    date: "May 15, 2026",
    readTime: 7,
    emoji: "🧠",
  },
];

const CATEGORIES = ["All", "AI", "Broadcast", "Education", "Technology", "Updates"];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0, 212, 255, 0.07) 0%, transparent 60%), var(--background)" }}
        aria-labelledby="blog-heading"
      >
        <div className="container">
          <div className="section-tag">Blog</div>
          <h1 id="blog-heading" className="mt-4 mb-6">
            Insights from <span className="gradient-text">Kayak AI</span>
          </h1>
          <p className="text-lg" style={{ maxWidth: "520px", color: "var(--text-secondary)" }}>
            Deep dives on enterprise AI, media technology, EdTech innovation, and the future of broadcast.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="container py-4">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="relative mr-2">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--text-muted)" }} />
              <input
                type="search"
                placeholder="Search posts..."
                className="input pl-9 py-2 text-sm"
                style={{ width: "220px" }}
                aria-label="Search blog posts"
              />
            </div>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
                style={{
                  background: cat === "All" ? "var(--accent-primary)" : "var(--bg-glass)",
                  color: cat === "All" ? "#050810" : "var(--text-secondary)",
                  border: "1px solid " + (cat === "All" ? "var(--accent-primary)" : "var(--border)"),
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section" aria-label="Blog posts">
        <div className="container">
          {/* Featured post */}
          <Link href={`/blog/${POSTS[0].slug}`} className="blog-card mb-8 grid grid-cols-1 md:grid-cols-2" style={{ display: "grid" }}>
            <div
              className="h-64 md:h-auto flex items-center justify-center text-8xl"
              style={{ background: "var(--bg-tertiary)" }}
            >
              {POSTS[0].emoji}
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="badge badge-blue">{POSTS[0].category}</span>
                <span className="badge badge-purple">Featured</span>
              </div>
              <h2 className="text-2xl font-bold mb-3">{POSTS[0].title}</h2>
              <p className="mb-6" style={{ color: "var(--text-secondary)" }}>{POSTS[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm" style={{ color: "var(--text-muted)" }}>
                <span className="flex items-center gap-1"><User size={12} /> {POSTS[0].author}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {POSTS[0].readTime} min read</span>
                <span>{POSTS[0].date}</span>
              </div>
            </div>
          </Link>

          {/* Posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.slice(1).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                <div
                  className="h-44 flex items-center justify-center text-6xl"
                  style={{ background: "var(--bg-tertiary)" }}
                >
                  {post.emoji}
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="badge badge-blue">{post.category}</span>
                    <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                      {post.readTime} min read
                    </span>
                  </div>
                  <h2 className="text-base font-semibold leading-snug mb-2">{post.title}</h2>
                  <p className="text-sm line-clamp-2 mb-4" style={{ color: "var(--text-secondary)" }}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs" style={{ color: "var(--text-muted)" }}>
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
