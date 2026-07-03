import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/data";
import { ChevronRight, ArrowRight, CheckCircle } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} — Kayak AI`,
    description: product.description,
    openGraph: {
      title: `${product.name} — Kayak AI`,
      description: product.description,
    },
  };
}

// FAQ data per product
const FAQ_MAP: Record<string, { q: string; a: string }[]> = {
  newsforge: [
    { q: "Does NewsForge support MOS protocol?", a: "Yes, NewsForge has full MOS 2.8 and MOS 3.0 protocol support, enabling seamless integration with all major broadcast hardware and NLE systems." },
    { q: "Can it integrate with existing newsroom systems?", a: "NewsForge connects to ENPS, iNews, AP ENPS, and most major newsroom systems via MOS or REST API. Custom integrations are available." },
    { q: "What languages does the AI transcription support?", a: "Our AI transcription engine supports 50+ languages including Hindi, Tamil, Telugu, Malayalam, Kannada, Marathi, and all major world languages." },
    { q: "Is NewsForge cloud-only or can it be on-premise?", a: "NewsForge is available in cloud, on-premise, and hybrid deployment configurations to match your security and latency requirements." },
  ],
  "ai-tutor": [
    { q: "What grade levels does AI Tutor support?", a: "AI Tutor supports K-12 through university level, with curriculum alignment for CBSE, ICSE, IB, and state boards." },
    { q: "Can teachers customize the AI's responses?", a: "Yes. Teachers can set topic boundaries, disable certain types of help, and customize the AI persona to match their teaching style." },
    { q: "How is student data protected?", a: "All student data is encrypted at rest and in transit. We are COPPA and FERPA compliant, with options for on-premise deployment in sensitive districts." },
    { q: "Does it work offline?", a: "Core learning content is available offline. AI features require connectivity but sync learning progress when reconnected." },
  ],
  mam: [
    { q: "What file formats does MAM support?", a: "MAM supports all broadcast-standard formats including MXF, ProRes, H.264, H.265, XDCAM, and DNxHD, plus images and documents." },
    { q: "How accurate is the face recognition?", a: "Our face recognition achieves 98.7% accuracy on our broadcast validation dataset. Custom fine-tuning is available for specific talent databases." },
    { q: "Can it integrate with existing storage systems?", a: "Yes. MAM integrates with S3, Azure Blob, Google Cloud Storage, and on-premise NAS/SAN systems." },
    { q: "What is the ingest speed?", a: "MAM can ingest and process media at up to 4x realtime speed on standard GPU hardware, faster on dedicated acceleration." },
  ],
  "ai-editing": [
    { q: "What NLEs does AI Editing integrate with?", a: "We provide export to Premiere Pro, Final Cut Pro, Avid Media Composer, and DaVinci Resolve via native XML/AAF formats." },
    { q: "How does auto-edit decide what to include?", a: "Our model analyzes face activity, audio levels, motion, and scene changes to score each clip, then assembles sequences based on your duration and style preferences." },
    { q: "Can I use my own brand templates?", a: "Yes. Upload your brand's graphics package and AI Editing will automatically apply lower thirds, end cards, and transitions using your assets." },
    { q: "Is there a frame-accurate preview before export?", a: "Yes, all AI-generated edits can be reviewed frame-by-frame in the browser-based preview before committing to export." },
  ],
  "broadcast-suite": [
    { q: "Does Broadcast Suite support live streaming?", a: "Yes. Built-in RTMP and SRT output for simultaneous broadcast and streaming to YouTube, Facebook, and custom CDNs." },
    { q: "What is the failover response time?", a: "Automated failover triggers within 50ms of signal loss, switching to backup feeds without visible interruption." },
    { q: "Can it handle multi-channel operations?", a: "Broadcast Suite is designed for multi-channel operations — manage up to 32 simultaneous channels from a single control interface." },
    { q: "Is there a hardware dependency?", a: "Broadcast Suite runs on standard server hardware. Optional hardware acceleration cards are supported for high-density deployments." },
  ],
  "knowledge-ai": [
    { q: "What document types can Knowledge AI ingest?", a: "PDF, Word, PowerPoint, Excel, plain text, HTML, Markdown, and web pages. Email and Slack integration available." },
    { q: "How do you prevent hallucinations?", a: "Every response is grounded in your specific documents with citations. The system refuses to answer questions outside the knowledge base scope." },
    { q: "Can it be deployed on our own servers?", a: "Yes. Knowledge AI is available as an on-premise or VPC deployment with the same capabilities as the cloud version." },
    { q: "How many documents can it handle?", a: "The system scales to millions of documents. We have enterprise clients with 10M+ documents indexed and sub-second query times." },
  ],
};

function FAQSection({ slug }: { slug: string }) {
  const faqs = FAQ_MAP[slug] || [];
  if (!faqs.length) return null;

  return (
    <section className="section" style={{ background: "var(--bg-secondary)" }} aria-labelledby="faq-heading">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <div className="section-tag mx-auto">FAQ</div>
          <h2 id="faq-heading" className="mt-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>
        <div>
          {faqs.map((faq, i) => (
            <details key={i} className="faq-item group">
              <summary className="faq-question list-none cursor-pointer">
                <span>{faq.q}</span>
                <ChevronRight
                  size={18}
                  className="shrink-0 transition-transform group-open:rotate-90"
                  style={{ color: "var(--accent-primary)" }}
                />
              </summary>
              <div className="px-6 pb-5">
                <p style={{ color: "var(--text-secondary)" }}>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Organization",
      name: "Kayak AI",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section
        className="pt-32 pb-20"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${product.color}18 0%, transparent 60%), var(--background)`,
        }}
        aria-labelledby={`${slug}-heading`}
      >
        <div className="container">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8">
            <Link href="/products" style={{ color: "var(--text-muted)" }}>Products</Link>
            <ChevronRight size={14} style={{ color: "var(--text-muted)" }} />
            <span style={{ color: "var(--accent-primary)" }}>{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {product.badge && (
                <span className="badge badge-blue mb-4 inline-block">{product.badge}</span>
              )}
              <div className="text-6xl mb-4">{product.icon}</div>
              <h1 id={`${slug}-heading`} className="mb-4">
                {product.name}
              </h1>
              <p className="text-xl mb-4" style={{ color: product.color, fontWeight: 600 }}>
                {product.tagline}
              </p>
              <p className="text-lg mb-8" style={{ color: "var(--text-secondary)" }}>
                {product.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/request-demo?product=${product.slug}`}
                  className="btn-primary"
                >
                  Request Demo <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn-ghost">
                  Talk to Sales
                </Link>
              </div>
            </div>
            <div
              className="rounded-2xl p-12 text-center text-8xl"
              style={{ background: `${product.color}10`, border: `1px solid ${product.color}30` }}
            >
              {product.icon}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section" aria-labelledby="features-heading">
        <div className="container">
          <div className="text-center mb-16">
            <div className="section-tag mx-auto">Features</div>
            <h2 id="features-heading" className="mt-4">
              Everything You <span className="gradient-text">Need</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature) => (
              <div key={feature.title} className="card">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key benefits */}
      <section
        className="section"
        style={{ background: "var(--bg-secondary)" }}
        aria-labelledby="benefits-heading"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-tag">Why {product.name}</div>
              <h2 id="benefits-heading" className="mt-4 mb-8">
                Built for <span className="gradient-text">Enterprise</span>
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  "Enterprise-grade reliability with 99.9% uptime SLA",
                  "Private cloud and on-premise deployment options",
                  "Role-based access control and audit logging",
                  "Dedicated support and SLA commitments",
                  "Custom model fine-tuning on your data",
                  "Open APIs and webhooks for system integration",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: product.color }} />
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "⚡", label: "Fast Deployment", desc: "Live in weeks, not months" },
                { icon: "🔒", label: "Secure", desc: "SOC 2 Type II compliant" },
                { icon: "📈", label: "Scalable", desc: "From 10 to 10,000 users" },
                { icon: "🤝", label: "Supported", desc: "24/7 enterprise support" },
              ].map((item) => (
                <div key={item.label} className="card text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="font-semibold text-sm">{item.label}</div>
                  <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection slug={slug} />

      {/* CTA */}
      <section className="py-24 text-center" aria-labelledby="product-cta">
        <div className="container">
          <div className="section-tag mx-auto mb-6">Get Started</div>
          <h2 id="product-cta" className="mb-4">
            Ready to See <span className="gradient-text">{product.name}</span> in Action?
          </h2>
          <p className="mb-8 mx-auto" style={{ maxWidth: "480px", color: "var(--text-secondary)" }}>
            Book a personalized demo and see how {product.name} can transform your workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/request-demo?product=${product.slug}`} className="btn-primary">
              Request Demo <ArrowRight size={16} />
            </Link>
            <Link href="/products" className="btn-ghost">
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
