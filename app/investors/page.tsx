import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investors — Kayak AI",
  description: "Investor relations for Kayak AI.",
};

export default function InvestorsPage() {
  return (
    <section className="pt-32 pb-24 text-center min-h-[70vh] flex items-center justify-center">
      <div className="container max-w-md">
        <div className="text-5xl mb-4">📈</div>
        <div className="section-tag mx-auto mb-4">Investor Relations</div>
        <h1 className="text-3xl font-bold mb-4">Coming Soon</h1>
        <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
          Our investor portal is currently under development. For institutional investor inquiries, please contact our leadership team directly.
        </p>
        <Link href="/contact" className="btn-primary">
          Contact Leadership
        </Link>
      </div>
    </section>
  );
}
