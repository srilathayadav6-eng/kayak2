import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Kayak AI",
  description: "Terms of service governing the use of Kayak AI website and services.",
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="container max-w-3xl">
        <h1 className="mb-6">Terms of Service</h1>
        <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>Last updated: June 1, 2026</p>
        
        <div className="flex flex-col gap-6 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          <p>
            Welcome to Kayak AI. By accessing or using our corporate website, products, or services, you agree to be bound by these Terms of Service.
          </p>

          <h2 className="text-lg font-bold text-white mt-4">1. Use of Website</h2>
          <p>
            You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else&apos;s use of the website.
          </p>

          <h2 className="text-lg font-bold text-white mt-4">2. Intellectual Property</h2>
          <p>
            All content, brand assets, product trademarks (NewsForge, AI Tutor, Kayak AI), software code, and graphics on this site are the exclusive property of Kayak AI Pvt. Ltd. and are protected by applicable intellectual property laws.
          </p>

          <h2 className="text-lg font-bold text-white mt-4">3. Enterprise Software Agreements</h2>
          <p>
            Commercial subscriptions to Kayak AI products are governed by separate Master Services Agreements (MSA) or Service Level Agreements (SLA) executed between Kayak AI and the enterprise client.
          </p>

          <h2 className="text-lg font-bold text-white mt-4">4. Limitation of Liability</h2>
          <p>
            In no event shall Kayak AI be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to or use of this corporate website.
          </p>
        </div>
      </div>
    </section>
  );
}
