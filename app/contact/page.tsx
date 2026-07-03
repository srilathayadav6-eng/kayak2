"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16 text-center"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0, 212, 255, 0.07) 0%, transparent 60%), var(--background)" }}
        aria-labelledby="contact-heading"
      >
        <div className="container">
          <div className="section-tag mx-auto">Contact Us</div>
          <h1 id="contact-heading" className="mt-4 mb-4">
            Let&apos;s <span className="gradient-text">Talk</span>
          </h1>
          <p className="text-xl mx-auto" style={{ maxWidth: "480px", color: "var(--text-secondary)" }}>
            Whether you have a product question, want to explore a partnership, or need enterprise support — we&apos;re here.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              <div className="card">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="font-semibold mb-2">Headquarters</h3>
                <div className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <MapPin size={14} className="shrink-0 mt-0.5" style={{ color: "var(--accent-primary)" }} />
                  <span>Kayak AI Pvt. Ltd.<br />Koramangala, Bengaluru<br />Karnataka 560034, India</span>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Contact Details</h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <Mail size={14} style={{ color: "var(--accent-primary)" }} />
                    <a href="mailto:hello@kayak.ai" style={{ color: "var(--accent-primary)" }}>hello@kayak.ai</a>
                  </div>
                  <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <Mail size={14} style={{ color: "var(--accent-primary)" }} />
                    <a href="mailto:sales@kayak.ai" style={{ color: "var(--accent-primary)" }}>sales@kayak.ai</a>
                  </div>
                  <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <Phone size={14} style={{ color: "var(--accent-primary)" }} />
                    <span>+91 80 4567 8900</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <Clock size={14} style={{ color: "var(--accent-primary)" }} />
                    <span>Mon–Fri, 9 AM – 7 PM IST</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Specific Inquiries</h3>
                <div className="flex flex-col gap-2">
                  {[
                    { label: "Enterprise Sales", email: "sales@kayak.ai" },
                    { label: "Technical Support", email: "support@kayak.ai" },
                    { label: "Partnerships", email: "partners@kayak.ai" },
                    { label: "Press & Media", email: "press@kayak.ai" },
                    { label: "Careers", email: "careers@kayak.ai" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between text-sm py-2" style={{ borderBottom: "1px solid var(--border)" }}>
                      <span style={{ color: "var(--text-secondary)" }}>{item.label}</span>
                      <a href={`mailto:${item.email}`} style={{ color: "var(--accent-primary)" }}>{item.email}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
                <form
                  id="contact-form"
                  className="flex flex-col gap-5"
                  onSubmit={(e) => e.preventDefault()}
                  noValidate
                >
                  {/* Honeypot */}
                  <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="label">Full Name *</label>
                      <input id="contact-name" type="text" className="input" placeholder="Your name" required autoComplete="name" />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="label">Work Email *</label>
                      <input id="contact-email" type="email" className="input" placeholder="you@company.com" required autoComplete="email" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-company" className="label">Company</label>
                      <input id="contact-company" type="text" className="input" placeholder="Company name" autoComplete="organization" />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="label">Phone</label>
                      <input id="contact-phone" type="tel" className="input" placeholder="+91 98765 43210" autoComplete="tel" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-type" className="label">Inquiry Type *</label>
                    <select id="contact-type" className="select" required>
                      <option value="">Select inquiry type</option>
                      <option value="sales">Sales / Enterprise Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="press">Press / Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="label">Message *</label>
                    <textarea
                      id="contact-message"
                      className="textarea"
                      placeholder="Tell us how we can help..."
                      required
                      rows={5}
                    />
                  </div>

                  <button id="contact-submit" type="submit" className="btn-primary justify-center">
                    Send Message <ArrowRight size={16} />
                  </button>

                  <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
                    We typically respond within 1 business day.{" "}
                    <Link href="/privacy" style={{ color: "var(--accent-primary)" }}>Privacy Policy</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-24">
        <div className="container">
          <div
            className="w-full h-64 rounded-2xl flex items-center justify-center text-4xl"
            style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}
          >
            <div className="text-center">
              <div className="text-5xl mb-3">📍</div>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>Koramangala, Bengaluru, India</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
