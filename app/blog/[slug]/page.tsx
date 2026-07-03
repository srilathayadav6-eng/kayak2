import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, User, Clock, Calendar, ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

const BLOG_POSTS: Record<string, {
  title: string;
  category: string;
  author: string;
  authorTitle: string;
  date: string;
  readTime: number;
  emoji: string;
  excerpt: string;
  content: string;
}> = {
  "kayak-ai-launches-newsforge-2-0": {
    title: "Kayak AI Launches NewsForge 2.0 with Advanced AI Automation",
    category: "Updates",
    author: "Arjun Sharma",
    authorTitle: "CEO & Co-Founder",
    date: "June 28, 2026",
    readTime: 4,
    emoji: "📢",
    excerpt: "The latest version of NewsForge brings real-time AI transcription, automated rundown generation, and MOS 3.0 support to newsrooms worldwide.",
    content: `
## What's New in NewsForge 2.0

After six months of intensive development and beta testing with twelve newsroom partners, we're proud to release NewsForge 2.0 — our most significant update since launch.

### Real-time AI Transcription

The most requested feature is finally here. NewsForge 2.0 includes a built-in transcription engine that works in real-time as audio and video is ingested. No more waiting for transcripts to come back from third-party services.

Our transcription model has been fine-tuned on broadcast audio — including noisy field recordings, multiple accents, and technical journalism terminology — achieving 94% accuracy on our benchmark dataset.

### Automated Rundown Generation

AI-assisted rundown generation reduces the time a producer spends building the daily rundown by an average of 40%. The system suggests story order based on news value scoring, audience engagement patterns, and segment timing constraints.

Producers retain full control — AI suggestions are always recommendations, never automatic.

### MOS 3.0 Support

Full MOS 3.0 protocol implementation means NewsForge now integrates with the latest generation of broadcast hardware and automation systems without custom middleware.

## Upgrade Path

All existing NewsForge customers will be migrated automatically over the next 30 days. No action required. Your rundowns, templates, and integrations will all carry over.

Contact your account manager with any questions about the upgrade timeline.
    `,
  },
  "future-of-ai-in-education": {
    title: "The Future of AI in Education: Personalization at Scale",
    category: "Education",
    author: "Priya Mehta",
    authorTitle: "CTO & Co-Founder",
    date: "June 20, 2026",
    readTime: 7,
    emoji: "🎓",
    excerpt: "How adaptive AI tutoring systems are transforming learning outcomes for millions of students across diverse educational contexts.",
    content: `
## The Problem with One-Size-Fits-All Education

Every student learns differently. Some grasp concepts quickly through visual diagrams; others need repetition and worked examples. Some excel with abstract theory; others need real-world applications first.

Traditional classroom education, by necessity, optimizes for the average. A teacher with 35 students cannot provide 35 individualized learning paths. But AI can.

## What Adaptive Learning Actually Means

True adaptive learning isn't just changing the difficulty of questions. It means:

- **Identifying knowledge gaps** before they compound into larger misunderstandings
- **Adjusting explanation style** based on what a student has responded well to historically
- **Pacing** — slowing down on concepts where a student is struggling, accelerating past mastered material
- **Motivation-aware scaffolding** — recognizing when a student is frustrated and offering encouragement before remediation

## What We're Learning from the Data

After 18 months running AI Tutor across 400+ schools, here's what we've learned:

Students who use AI Tutor for more than 3 sessions per week show **23% improvement in test scores** compared to control groups. But the distribution matters — students in the bottom quartile of initial performance see the largest gains.

This makes intuitive sense. Personalized AI attention is most valuable for students who are furthest from the average that classroom teaching optimizes for.

## The Role of Teachers

A common fear is that AI tutors will replace teachers. The opposite is happening. Teachers using AI Tutor report spending **less time on remedial explanation** and **more time on higher-order discussion and mentoring** — the parts of teaching that require human judgment and emotional intelligence.

AI handles the rote. Humans handle the meaningful.
    `,
  },
  "enterprise-rag-private-knowledge": {
    title: "Why Enterprise RAG Must Be Built on Private Infrastructure",
    category: "AI",
    author: "Priya Mehta",
    authorTitle: "CTO & Co-Founder",
    date: "June 12, 2026",
    readTime: 6,
    emoji: "🤖",
    excerpt: "The critical considerations for deploying retrieval-augmented generation in enterprise environments where data sovereignty is non-negotiable.",
    content: `
## The RAG Opportunity

Retrieval-Augmented Generation (RAG) is arguably the most commercially valuable AI technique of the current era. It solves the fundamental limitation of large language models — their training cutoff and lack of organization-specific knowledge — by letting them query a live knowledge base before generating responses.

The business case is clear: instead of employees searching SharePoint, asking colleagues, or giving up on finding information, they ask an AI that actually knows your organization's documentation.

## The Privacy Problem with Hosted RAG

Most RAG services available today send your documents to an external provider for embedding, storage, and retrieval. Your confidential legal documents, internal strategy memos, HR policies, and technical specifications all pass through infrastructure you don't control.

For many enterprise contexts — government, healthcare, financial services, defense — this is a hard blocker. It's not a risk to be managed; it's a category of deployment that's simply not available.

## The Private RAG Architecture

The solution is to run the complete RAG pipeline on your own infrastructure:

1. **Embedding model** — runs on your GPU, converts your documents into vector representations that never leave your network
2. **Vector database** — stores embeddings on your own storage, queryable only by systems you control
3. **LLM** — runs on your inference hardware or on a private cloud instance, using either open-weight models or API calls to providers via private endpoints
4. **Retrieval layer** — the query→embedding→similarity search→context injection pipeline operates entirely within your perimeter

This is exactly how Knowledge AI is deployed for customers with data sovereignty requirements.

## Performance Considerations

Private deployment doesn't mean compromised performance. With appropriate hardware (modern GPU servers), private RAG systems can handle hundreds of concurrent queries with sub-second latency on million-document corpora.

The bottleneck for most enterprises isn't compute — it's document preparation, chunking strategy, and embedding quality. These are engineering problems, not hardware problems.
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(BLOG_POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];
  if (!post) return {};
  return {
    title: `${post.title} — Kayak AI Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "Kayak AI" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section
        className="pt-32 pb-16"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0, 212, 255, 0.06) 0%, transparent 60%), var(--background)" }}
      >
        <div className="container max-w-3xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8">
            <Link href="/blog" style={{ color: "var(--text-muted)" }}>Blog</Link>
            <ChevronRight size={14} style={{ color: "var(--text-muted)" }} />
            <span style={{ color: "var(--accent-primary)" }}>{post.category}</span>
          </nav>

          <span className="badge badge-blue mb-4 inline-block">{post.category}</span>
          <h1 className="mb-6">{post.title}</h1>

          <div className="flex items-center gap-6 text-sm" style={{ color: "var(--text-muted)" }}>
            <span className="flex items-center gap-1.5">
              <User size={14} />
              <strong style={{ color: "var(--text-secondary)" }}>{post.author}</strong>
              <span>· {post.authorTitle}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {post.readTime} min read
            </span>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <div className="container max-w-3xl mb-12">
        <div
          className="w-full h-64 rounded-2xl flex items-center justify-center text-9xl"
          style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}
        >
          {post.emoji}
        </div>
      </div>

      {/* Content */}
      <article className="container max-w-3xl pb-24">
        <p className="text-xl mb-8 font-medium" style={{ color: "var(--text-secondary)" }}>
          {post.excerpt}
        </p>
        <div
          className="prose-kayak"
          style={{
            color: "var(--text-secondary)",
            lineHeight: "1.8",
          }}
        >
          {post.content.split("\n").map((line, i) => {
            if (line.startsWith("## ")) {
              return <h2 key={i} className="text-2xl font-bold mt-10 mb-4" style={{ color: "var(--text-primary)" }}>{line.slice(3)}</h2>;
            }
            if (line.startsWith("### ")) {
              return <h3 key={i} className="text-xl font-semibold mt-8 mb-3" style={{ color: "var(--text-primary)" }}>{line.slice(4)}</h3>;
            }
            if (line.startsWith("- **")) {
              const match = line.match(/- \*\*(.+?)\*\* — (.+)/);
              if (match) {
                return (
                  <div key={i} className="flex gap-2 mb-2">
                    <span style={{ color: "var(--accent-primary)" }}>•</span>
                    <span>
                      <strong style={{ color: "var(--text-primary)" }}>{match[1]}</strong> — {match[2]}
                    </span>
                  </div>
                );
              }
            }
            if (line.startsWith("- ")) {
              return (
                <div key={i} className="flex gap-2 mb-2">
                  <span style={{ color: "var(--accent-primary)" }}>•</span>
                  <span>{line.slice(2)}</span>
                </div>
              );
            }
            if (line.match(/\*\*(.+?)\*\*/)) {
              return (
                <p key={i} className="mb-4" dangerouslySetInnerHTML={{
                  __html: line.replace(/\*\*(.+?)\*\*/g, '<strong style="color: var(--text-primary)">$1</strong>')
                }} />
              );
            }
            if (line.trim()) {
              return <p key={i} className="mb-4">{line}</p>;
            }
            return null;
          })}
        </div>

        <div className="mt-12 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white"
              style={{ background: "var(--gradient-brand)" }}
            >
              {post.author.split(" ").map(n => n[0]).join("")}
            </div>
            <div>
              <div className="font-semibold">{post.author}</div>
              <div className="text-sm" style={{ color: "var(--text-muted)" }}>{post.authorTitle}, Kayak AI</div>
            </div>
          </div>
        </div>

        <Link href="/blog" className="btn-ghost mt-8 inline-flex">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </article>
    </>
  );
}
