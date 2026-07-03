"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X, Zap } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isAdmin = pathname.startsWith("/admin");
  if (isAdmin) return null;

  return (
    <header
      className={cn(
        "navbar",
        scrolled && "scrolled"
      )}
      role="banner"
    >
      <div className="container">
        <nav
          ref={menuRef}
          className="flex items-center justify-between w-full"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Kayak AI Home">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-brand)" }}>
              <Zap size={16} className="text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight" style={{ color: "var(--text-primary)" }}>
              Kayak <span className="gradient-text">AI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Products Dropdown */}
            <div className="relative">
              <button
                id="nav-products"
                className={cn(
                  "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  "hover:bg-white/5",
                  activeMenu === "products" ? "text-[var(--accent-primary)]" : "text-[var(--text-secondary)]"
                )}
                onClick={() => setActiveMenu(activeMenu === "products" ? null : "products")}
                aria-expanded={activeMenu === "products"}
                aria-haspopup="true"
              >
                Products
                <ChevronDown
                  size={14}
                  style={{ transition: "transform 0.2s", transform: activeMenu === "products" ? "rotate(180deg)" : "none" }}
                />
              </button>

              {activeMenu === "products" && (
                <div className="mega-menu" role="menu" aria-label="Products menu">
                  <div className="grid grid-cols-2 gap-2">
                    {NAVIGATION.products.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        role="menuitem"
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all group"
                      >
                        <span className="text-xl mt-0.5 group-hover:scale-110 transition-transform">{item.icon}</span>
                        <div>
                          <div className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{item.name}</div>
                          <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{item.tagline}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                    <Link
                      href="/products"
                      className="flex items-center gap-2 text-sm font-medium"
                      style={{ color: "var(--accent-primary)" }}
                    >
                      View all products →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                id="nav-solutions"
                className={cn(
                  "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  "hover:bg-white/5",
                  activeMenu === "solutions" ? "text-[var(--accent-primary)]" : "text-[var(--text-secondary)]"
                )}
                onClick={() => setActiveMenu(activeMenu === "solutions" ? null : "solutions")}
                aria-expanded={activeMenu === "solutions"}
              >
                Solutions
                <ChevronDown
                  size={14}
                  style={{ transition: "transform 0.2s", transform: activeMenu === "solutions" ? "rotate(180deg)" : "none" }}
                />
              </button>

              {activeMenu === "solutions" && (
                <div
                  className="mega-menu"
                  role="menu"
                  style={{ minWidth: "400px" }}
                >
                  <div className="grid grid-cols-2 gap-2">
                    {NAVIGATION.solutions.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        role="menuitem"
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all"
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Static links */}
            {NAVIGATION.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  "hover:bg-white/5",
                  pathname === item.href
                    ? "text-[var(--accent-primary)]"
                    : "text-[var(--text-secondary)]"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="btn-ghost text-sm py-2 px-5">
              Contact
            </Link>
            <Link href="/request-demo" className="btn-primary text-sm py-2 px-5">
              Request Demo
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            id="nav-mobile-toggle"
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden absolute top-full left-0 right-0 z-50 py-4"
          style={{
            background: "rgba(5, 8, 16, 0.98)",
            borderBottom: "1px solid var(--border)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="container flex flex-col gap-1">
            <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
              Products
            </div>
            {NAVIGATION.products.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all"
              >
                <span>{item.icon}</span>
                <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{item.name}</span>
              </Link>
            ))}
            <div className="divider my-3" />
            {NAVIGATION.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="p-3 rounded-xl text-sm font-medium hover:bg-white/5 transition-all"
                style={{ color: "var(--text-secondary)" }}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <Link href="/request-demo" className="btn-primary text-center justify-center">
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
