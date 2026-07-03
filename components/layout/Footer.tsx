"use client";

import Link from "next/link";
import { PRODUCTS, INDUSTRIES } from "@/lib/data";
import { Zap, Mail, Globe, Share2, MessageSquare, Video } from "lucide-react";

const footerLinks = {
  Products: PRODUCTS.map((p) => ({ name: p.name, href: `/products/${p.slug}` })),
  Solutions: INDUSTRIES.map((i) => ({ name: i.name, href: `/solutions/${i.slug}` })),
  Company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Careers", href: "/careers" },
    { name: "Investors", href: "/investors" },
    { name: "Press", href: "/blog?category=press" },
  ],
  Resources: [
    { name: "Enterprise AI", href: "/enterprise-ai" },
    { name: "Documentation", href: "#" },
    { name: "Security", href: "/security" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

const socialLinks = [
  { icon: Share2, href: "https://twitter.com/kayakai", label: "Twitter" },
  { icon: Globe, href: "https://linkedin.com/company/kayakai", label: "LinkedIn" },
  { icon: MessageSquare, href: "https://github.com/kayakai", label: "GitHub" },
  { icon: Video, href: "https://youtube.com/@kayakai", label: "YouTube" },
  { icon: Mail, href: "mailto:hello@kayak.ai", label: "Email" },
];

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="container">
        {/* Top section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label="Kayak AI">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "var(--gradient-brand)" }}
              >
                <Zap size={18} className="text-white" />
              </div>
              <span className="font-bold text-xl" style={{ color: "var(--text-primary)" }}>
                Kayak <span className="gradient-text">AI</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
              Building the future of enterprise AI — products for newsrooms, education, media, and beyond.
            </p>

            {/* Newsletter */}
            <div>
              <p className="text-sm font-medium mb-3" style={{ color: "var(--text-secondary)" }}>
                Stay updated
              </p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="input text-sm flex-1"
                  aria-label="Email for newsletter"
                />
                <button type="submit" className="btn-primary text-sm py-2.5 px-4 whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    background: "var(--bg-glass)",
                    border: "1px solid var(--border)",
                    color: "var(--text-muted)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-primary)";
                    (e.currentTarget as HTMLElement).style.color = "var(--accent-primary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                  }}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                {title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="py-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Kayak AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { name: "Privacy", href: "/privacy" },
              { name: "Terms", href: "/terms" },
              { name: "Cookies", href: "/cookies" },
              { name: "Security", href: "/security" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm transition-colors hover:text-white"
                style={{ color: "var(--text-muted)" }}
              >
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
