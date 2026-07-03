import type { Metadata } from "next";
import { ShieldCheck, Lock, Server, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Security & Compliance — Kayak AI",
  description: "Enterprise security architecture, data protection, and compliance standards at Kayak AI.",
};

export default function SecurityPage() {
  return (
    <>
      <section
        className="pt-32 pb-16 text-center"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0, 212, 255, 0.08) 0%, transparent 60%), var(--background)" }}
      >
        <div className="container max-w-3xl">
          <div className="section-tag mx-auto">Security First</div>
          <h1 className="mt-4 mb-4">Enterprise Security Architecture</h1>
          <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
            How Kayak AI protects your data with rigorous security controls, encryption standards, and flexible deployment models.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="card flex gap-4">
              <ShieldCheck size={32} className="shrink-0" style={{ color: "var(--accent-primary)" }} />
              <div>
                <h2 className="text-lg font-bold mb-2">Encryption Standards</h2>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  All data in transit is encrypted using TLS 1.3. Data at rest is secured using AES-256 encryption across all storage tiers.
                </p>
              </div>
            </div>

            <div className="card flex gap-4">
              <Lock size={32} className="shrink-0" style={{ color: "var(--accent-secondary)" }} />
              <div>
                <h2 className="text-lg font-bold mb-2">Identity & Access Management</h2>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  Granular Role-Based Access Control (RBAC), SAML 2.0 / Single Sign-On (SSO) integration, and mandatory Multi-Factor Authentication (MFA).
                </p>
              </div>
            </div>

            <div className="card flex gap-4">
              <Server size={32} className="shrink-0" style={{ color: "#34d399" }} />
              <div>
                <h2 className="text-lg font-bold mb-2">Air-Gapped & VPC Options</h2>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  Support for fully air-gapped deployments and client-owned Virtual Private Clouds (VPC) on AWS, Azure, and Google Cloud.
                </p>
              </div>
            </div>

            <div className="card flex gap-4">
              <FileCheck size={32} className="shrink-0" style={{ color: "#f59e0b" }} />
              <div>
                <h2 className="text-lg font-bold mb-2">Audits & Governance</h2>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  Comprehensive audit logging for all system actions, automated vulnerability scanning, and ongoing SOC 2 Type II readiness.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl text-center" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}>
            <h2 className="text-xl font-bold mb-3">Report a Security Vulnerability</h2>
            <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: "var(--text-secondary)" }}>
              If you believe you have discovered a security vulnerability in any Kayak AI product or infrastructure, please contact our security team.
            </p>
            <a href="mailto:security@kayak.ai" className="btn-primary">
              Email Security Team
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
