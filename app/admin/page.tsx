"use client";

import Link from "next/link";
import { Users, FileText, Package, Eye, ArrowUpRight, CheckCircle, Clock } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Dashboard Overview</h1>
          <p className="text-sm text-[var(--text-secondary)]">Welcome back, Admin. Here is what&apos;s happening across Kayak AI today.</p>
        </div>
        <Link href="/" target="_blank" className="btn-ghost text-xs py-2 px-4 flex items-center gap-1">
          View Live Site <ArrowUpRight size={14} />
        </Link>
      </div>

      {/* Analytics Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase text-[var(--text-muted)]">Total Pageviews</span>
            <Eye size={18} className="text-cyan-400" />
          </div>
          <div className="text-3xl font-bold">142,850</div>
          <div className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
            ↑ 18.4% from last month
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase text-[var(--text-muted)]">Demo Requests</span>
            <Users size={18} className="text-purple-400" />
          </div>
          <div className="text-3xl font-bold">48</div>
          <div className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
            ↑ 12 new this week
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase text-[var(--text-muted)]">Published Blogs</span>
            <FileText size={18} className="text-amber-400" />
          </div>
          <div className="text-3xl font-bold">24</div>
          <div className="text-xs text-[var(--text-muted)] mt-2">3 drafts pending review</div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase text-[var(--text-muted)]">Active Products</span>
            <Package size={18} className="text-emerald-400" />
          </div>
          <div className="text-3xl font-bold">6</div>
          <div className="text-xs text-[var(--text-muted)] mt-2">All products operational</div>
        </div>
      </div>

      {/* Recent Leads */}
      <div className="card mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold">Recent Demo & Contact Leads</h2>
          <Link href="/admin/leads" className="text-xs text-[var(--accent-primary)] font-medium">View All Leads →</Link>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Lead Name</th>
                <th>Company / Org</th>
                <th>Type</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Rajesh Kumar", company: "Republic TV Network", type: "Demo Request", status: "New", date: "Today, 2:30 PM" },
                { name: "Anita Sharma", company: "DPS Global School", type: "Demo Request", status: "Contacted", date: "Yesterday" },
                { name: "Dr. Vikram Seth", company: "AIIMS Dept of Med", type: "Contact Form", status: "Qualified", date: "Jul 1, 2026" },
                { name: "Suresh Menon", company: "Sun Network", type: "Demo Request", status: "New", date: "Jun 30, 2026" },
              ].map((lead, i) => (
                <tr key={i}>
                  <td className="font-semibold">{lead.name}</td>
                  <td>{lead.company}</td>
                  <td><span className="badge badge-purple">{lead.type}</span></td>
                  <td>
                    <span className={`badge ${lead.status === "New" ? "badge-blue" : lead.status === "Contacted" ? "badge-purple" : "badge-green"}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="text-xs text-[var(--text-muted)]">{lead.date}</td>
                  <td>
                    <button className="text-xs text-[var(--accent-primary)] hover:underline">Manage</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
