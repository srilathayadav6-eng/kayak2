"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, Lock, Mail, ArrowRight } from "lucide-react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "/admin";
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[var(--background)]">
      <div className="card max-w-md w-full p-8 border border-[var(--border)] shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 bg-[var(--gradient-brand)]">
            <Zap size={24} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold">Kayak AI Admin</h1>
          <p className="text-xs text-[var(--text-muted)] mt-1">Sign in to access CMS content management</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="label text-xs">Admin Email</label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
              <input
                type="email"
                required
                className="input text-sm pl-9"
                placeholder="admin@kayak.ai"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="label text-xs">Password</label>
            <div className="relative">
              <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
              <input
                type="password"
                required
                className="input text-sm pl-9"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="btn-primary w-full justify-center text-sm mt-2">
            Sign In to Dashboard <ArrowRight size={16} />
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/" className="text-xs text-[var(--text-muted)] hover:text-white">
            ← Back to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}
