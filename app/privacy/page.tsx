import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Kayak AI",
  description: "Privacy policy for Kayak AI corporate website and products.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="container max-w-3xl">
        <h1 className="mb-6">Privacy Policy</h1>
        <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>Last updated: June 1, 2026</p>
        
        <div className="flex flex-col gap-6 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          <p>
            At Kayak AI (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), we respect your privacy and are committed to protecting the personal data of our users, clients, and website visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
          </p>

          <h2 className="text-lg font-bold text-white mt-4">1. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when submitting contact forms, requesting product demos, or applying for job openings. This includes your name, work email address, phone number, company name, and job application materials (resumes).
          </p>

          <h2 className="text-lg font-bold text-white mt-4">2. How We Use Your Information</h2>
          <p>
            We use your information solely to:
          </p>
          <ul className="list-disc pl-5 flex flex-col gap-1">
            <li>Respond to your inquiries and schedule product demonstrations.</li>
            <li>Process job applications for current employment opportunities.</li>
            <li>Send technical notices, updates, security alerts, and support messages.</li>
            <li>Improve and optimize our corporate website performance.</li>
          </ul>

          <h2 className="text-lg font-bold text-white mt-4">3. Enterprise Data & AI Models</h2>
          <p>
            For client enterprise deployments (NewsForge, AI Tutor, MAM, Knowledge AI), customer data uploaded to product instances is processed under strict customer agreements. <strong>We do not use customer proprietary data to train shared public foundation models.</strong>
          </p>

          <h2 className="text-lg font-bold text-white mt-4">4. Data Security</h2>
          <p>
            We implement robust administrative, technical, and physical security measures (including end-to-end encryption in transit and at rest) to protect your personal data from unauthorized access or disclosure.
          </p>

          <h2 className="text-lg font-bold text-white mt-4">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact our Data Protection Officer at <a href="mailto:privacy@kayak.ai" style={{ color: "var(--accent-primary)" }}>privacy@kayak.ai</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
