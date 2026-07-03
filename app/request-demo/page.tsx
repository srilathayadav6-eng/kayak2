"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Check, Building, ListChecks, Calendar } from "lucide-react";
import { PRODUCTS, INDUSTRIES } from "@/lib/data";

type Step = 1 | 2 | 3;

const STEPS = [
  { id: 1, label: "Company Info", icon: Building },
  { id: 2, label: "Requirements", icon: ListChecks },
  { id: 3, label: "Schedule", icon: Calendar },
];

export default function RequestDemoPage() {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    // Step 1
    companyName: "",
    employees: "",
    industry: "",
    name: "",
    email: "",
    phone: "",
    // Step 2
    productInterest: [] as string[],
    useCase: "",
    // Step 3
    preferredTime: "",
    timezone: "IST",
  });

  const update = (key: keyof typeof form, value: string | string[]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleProduct = (slug: string) => {
    const current = form.productInterest;
    update("productInterest", current.includes(slug)
      ? current.filter((s) => s !== slug)
      : [...current, slug]
    );
  };

  const handleSubmit = async () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "rgba(0, 212, 255, 0.1)", border: "1px solid var(--accent-primary)" }}>
            <Check size={40} style={{ color: "var(--accent-primary)" }} />
          </div>
          <h1 className="text-3xl font-bold mb-4">Demo Requested!</h1>
          <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
            Thank you, <strong style={{ color: "var(--text-primary)" }}>{form.name}</strong>! Our team will reach out to {form.email} within 1 business day to confirm your demo time.
          </p>
          <Link href="/" className="btn-primary">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section
        className="pt-32 pb-8"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(124, 58, 237, 0.08) 0%, transparent 60%), var(--background)" }}
      >
        <div className="container max-w-3xl">
          <div className="section-tag mx-auto text-center">Request a Demo</div>
          <h1 id="demo-heading" className="mt-4 mb-2 text-center">
            See Kayak AI in <span className="gradient-text">Action</span>
          </h1>
          <p className="text-center mb-10" style={{ color: "var(--text-secondary)" }}>
            Schedule a personalized demo with our product team.
          </p>

          {/* Progress indicator */}
          <div className="flex items-center gap-0 mb-12">
            {STEPS.map((s, i) => (
              <div key={s.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all"
                    style={{
                      background: step >= s.id ? "var(--accent-primary)" : "var(--bg-glass)",
                      border: "2px solid " + (step >= s.id ? "var(--accent-primary)" : "var(--border)"),
                      color: step >= s.id ? "#050810" : "var(--text-muted)",
                    }}
                  >
                    {step > s.id ? <Check size={16} /> : s.id}
                  </div>
                  <span className="text-xs font-medium hidden sm:block" style={{ color: step >= s.id ? "var(--accent-primary)" : "var(--text-muted)" }}>
                    {s.label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className="h-0.5 flex-1 mx-2"
                    style={{ background: step > s.id ? "var(--accent-primary)" : "var(--border)" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container max-w-3xl">
          <div className="card">

            {/* ── Step 1: Company Info ── */}
            {step === 1 && (
              <div>
                <h2 className="text-xl font-bold mb-6">Tell us about your organization</h2>
                <div className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="demo-name" className="label">Your Name *</label>
                      <input id="demo-name" type="text" className="input" placeholder="Full name" required
                        value={form.name} onChange={(e) => update("name", e.target.value)} />
                    </div>
                    <div>
                      <label htmlFor="demo-email" className="label">Work Email *</label>
                      <input id="demo-email" type="email" className="input" placeholder="you@company.com" required
                        value={form.email} onChange={(e) => update("email", e.target.value)} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="demo-company" className="label">Company Name *</label>
                      <input id="demo-company" type="text" className="input" placeholder="Your organization"
                        value={form.companyName} onChange={(e) => update("companyName", e.target.value)} />
                    </div>
                    <div>
                      <label htmlFor="demo-phone" className="label">Phone</label>
                      <input id="demo-phone" type="tel" className="input" placeholder="+91 98765 43210"
                        value={form.phone} onChange={(e) => update("phone", e.target.value)} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="demo-employees" className="label">Company Size *</label>
                      <select id="demo-employees" className="select" value={form.employees} onChange={(e) => update("employees", e.target.value)}>
                        <option value="">Select size</option>
                        <option value="1-50">1–50 employees</option>
                        <option value="51-200">51–200 employees</option>
                        <option value="201-1000">201–1,000 employees</option>
                        <option value="1001-5000">1,001–5,000 employees</option>
                        <option value="5000+">5,000+ employees</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="demo-industry" className="label">Industry *</label>
                      <select id="demo-industry" className="select" value={form.industry} onChange={(e) => update("industry", e.target.value)}>
                        <option value="">Select industry</option>
                        {INDUSTRIES.map((i) => (
                          <option key={i.slug} value={i.slug}>{i.name}</option>
                        ))}
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-8">
                  <button
                    id="demo-next-1"
                    className="btn-primary"
                    onClick={() => setStep(2)}
                    disabled={!form.name || !form.email || !form.companyName}
                  >
                    Next: Requirements <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* ── Step 2: Requirements ── */}
            {step === 2 && (
              <div>
                <h2 className="text-xl font-bold mb-6">What are you looking for?</h2>
                <div className="flex flex-col gap-6">
                  <div>
                    <label className="label">Which products interest you? (Select all that apply)</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
                      {PRODUCTS.map((p) => (
                        <button
                          key={p.slug}
                          type="button"
                          onClick={() => toggleProduct(p.slug)}
                          className="flex items-center gap-2 p-3 rounded-xl text-sm font-medium text-left transition-all"
                          style={{
                            background: form.productInterest.includes(p.slug) ? "rgba(0, 212, 255, 0.1)" : "var(--bg-tertiary)",
                            border: "1px solid " + (form.productInterest.includes(p.slug) ? "var(--accent-primary)" : "var(--border)"),
                            color: form.productInterest.includes(p.slug) ? "var(--accent-primary)" : "var(--text-secondary)",
                          }}
                        >
                          <span>{p.icon}</span>
                          <span>{p.name}</span>
                          {form.productInterest.includes(p.slug) && <Check size={14} className="ml-auto shrink-0" />}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="demo-usecase" className="label">Describe your use case</label>
                    <textarea
                      id="demo-usecase"
                      className="textarea"
                      placeholder="What problem are you trying to solve? What does success look like for you?"
                      rows={4}
                      value={form.useCase}
                      onChange={(e) => update("useCase", e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-8">
                  <button id="demo-back-2" className="btn-ghost" onClick={() => setStep(1)}>
                    <ArrowLeft size={16} /> Back
                  </button>
                  <button id="demo-next-2" className="btn-primary" onClick={() => setStep(3)}>
                    Next: Schedule <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* ── Step 3: Schedule ── */}
            {step === 3 && (
              <div>
                <h2 className="text-xl font-bold mb-6">Choose a convenient time</h2>
                <div className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="demo-time" className="label">Preferred Time Slot</label>
                    <select id="demo-time" className="select" value={form.preferredTime} onChange={(e) => update("preferredTime", e.target.value)}>
                      <option value="">Select a time slot</option>
                      <option value="morning">Morning (9 AM – 12 PM IST)</option>
                      <option value="afternoon">Afternoon (12 PM – 3 PM IST)</option>
                      <option value="evening">Evening (3 PM – 6 PM IST)</option>
                      <option value="anytime">Anytime — let your team decide</option>
                    </select>
                  </div>
                  <div
                    className="p-6 rounded-xl text-center"
                    style={{ background: "var(--accent-glow)", border: "1px solid var(--border-accent)" }}
                  >
                    <div className="text-3xl mb-2">📅</div>
                    <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                      After submission, our team will send a calendar invite to <strong>{form.email}</strong> within 1 business day to confirm the exact time.
                    </p>
                  </div>

                  {/* Summary */}
                  <div className="p-4 rounded-xl" style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border)" }}>
                    <h3 className="text-sm font-semibold mb-3" style={{ color: "var(--text-muted)" }}>YOUR REQUEST SUMMARY</h3>
                    <div className="flex flex-col gap-1.5 text-sm">
                      <div><span style={{ color: "var(--text-muted)" }}>Name:</span> <span style={{ color: "var(--text-primary)" }}>{form.name}</span></div>
                      <div><span style={{ color: "var(--text-muted)" }}>Company:</span> <span style={{ color: "var(--text-primary)" }}>{form.companyName}</span></div>
                      <div><span style={{ color: "var(--text-muted)" }}>Products:</span> <span style={{ color: "var(--text-primary)" }}>{form.productInterest.length ? form.productInterest.join(", ") : "Not specified"}</span></div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-8">
                  <button id="demo-back-3" className="btn-ghost" onClick={() => setStep(2)}>
                    <ArrowLeft size={16} /> Back
                  </button>
                  <button id="demo-submit" className="btn-primary" onClick={handleSubmit}>
                    <Check size={16} /> Submit Demo Request
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
