import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — Kayak AI",
  description: "Cookie policy explaining how cookies are used on the Kayak AI website.",
};

export default function CookiesPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="container max-w-3xl">
        <h1 className="mb-6">Cookie Policy</h1>
        <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>Last updated: June 1, 2026</p>
        
        <div className="flex flex-col gap-6 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          <p>
            Kayak AI uses cookies and similar tracking technologies to improve performance, analyze site traffic, and optimize your browsing experience.
          </p>

          <h2 className="text-lg font-bold text-white mt-4">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your browser or device when you visit web pages. They enable website features such as remembering session states and user preferences.
          </p>

          <h2 className="text-lg font-bold text-white mt-4">2. Cookies We Use</h2>
          <ul className="list-disc pl-5 flex flex-col gap-1">
            <li><strong>Essential Cookies:</strong> Necessary for fundamental site navigation and security.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site (Google Analytics, Clarity).</li>
            <li><strong>Functional Cookies:</strong> Remember preferences such as theme settings and form auto-fills.</li>
          </ul>

          <h2 className="text-lg font-bold text-white mt-4">3. Managing Cookies</h2>
          <p>
            You can modify your browser settings to decline or delete cookies at any time. Note that disabling essential cookies may impact site functionality.
          </p>
        </div>
      </div>
    </section>
  );
}
