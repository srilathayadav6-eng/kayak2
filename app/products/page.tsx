import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS } from "@/lib/data";
import { ChevronRight, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Products — Kayak AI",
  description:
    "Explore all Kayak AI products: NewsForge, AI Tutor, MAM, AI Video Editing, Broadcast Automation, and Knowledge AI — the enterprise AI platform for media, education, and beyond.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20 text-center"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(0, 212, 255, 0.08) 0%, transparent 60%), var(--background)",
        }}
        aria-labelledby="products-page-heading"
      >
        <div className="container">
          <div className="section-tag mx-auto">Our Products</div>
          <h1 id="products-page-heading" className="mt-4 mb-6">
            The Kayak AI <span className="gradient-text">Product Suite</span>
          </h1>
          <p className="text-xl mx-auto" style={{ maxWidth: "600px", color: "var(--text-secondary)" }}>
            Six purpose-built AI products. Each powerful independently. Even more powerful together.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section" aria-label="All products">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <div
                key={product.slug}
                className="card flex flex-col"
                style={{ borderLeft: `3px solid ${product.color}` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{product.icon}</div>
                  {product.badge && (
                    <span className="badge badge-blue">{product.badge}</span>
                  )}
                </div>
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                <p className="text-sm font-medium mb-3" style={{ color: product.color }}>
                  {product.tagline}
                </p>
                <p className="text-sm flex-1 mb-6" style={{ color: "var(--text-secondary)" }}>
                  {product.description}
                </p>
                <div className="flex gap-3 mt-auto">
                  <Link
                    href={`/products/${product.slug}`}
                    className="btn-primary text-sm py-2 px-4 flex-1 justify-center"
                  >
                    Learn More <ChevronRight size={14} />
                  </Link>
                  <Link
                    href={`/request-demo?product=${product.slug}`}
                    className="btn-ghost text-sm py-2 px-4"
                  >
                    Demo
                  </Link>
                </div>
              </div>
            ))}

            {/* Coming Soon */}
            {["AI Analytics", "Enterprise Hub"].map((name) => (
              <div
                key={name}
                className="card flex flex-col items-center justify-center text-center min-h-64"
                style={{ opacity: 0.5, borderStyle: "dashed" }}
              >
                <div className="text-4xl mb-4">🔮</div>
                <h2 className="text-lg font-bold mb-2">{name}</h2>
                <span className="badge badge-purple">Coming Soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare CTA */}
      <section
        className="py-20 text-center"
        style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
      >
        <div className="container">
          <h2 className="mb-4">
            Not Sure Which Product Is <span className="gradient-text">Right for You?</span>
          </h2>
          <p className="mb-8 mx-auto" style={{ maxWidth: "500px", color: "var(--text-secondary)" }}>
            Our solutions team will help you identify the best combination of Kayak AI products for your specific use case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-demo" className="btn-primary">
              Request a Demo <ArrowRight size={16} />
            </Link>
            <Link href="/solutions" className="btn-ghost">
              Browse by Industry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
