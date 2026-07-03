"use client";

import { useState } from "react";
import { Download, Filter, Search, Check, Mail, Phone, Building } from "lucide-react";

const LEADS_DATA = [
  { id: "L-101", name: "Rajesh Kumar", email: "rajesh@republictv.com", phone: "+91 98200 12345", company: "Republic TV Network", type: "Demo Request", products: "NewsForge, MAM", status: "New", date: "2026-07-03" },
  { id: "L-102", name: "Anita Sharma", email: "asharma@dpsglobal.edu", phone: "+91 98111 22334", company: "DPS Global School", type: "Demo Request", products: "AI Tutor", status: "Contacted", date: "2026-07-02" },
  { id: "L-103", name: "Dr. Vikram Seth", email: "vseth@aiims.gov.in", phone: "+91 98765 00000", company: "AIIMS Dept of Med", type: "Contact Form", products: "Knowledge AI", status: "Qualified", date: "2026-07-01" },
  { id: "L-104", name: "Suresh Menon", email: "suresh@sunnetwork.in", phone: "+91 98400 55667", company: "Sun Network", type: "Demo Request", products: "Broadcast Suite", status: "New", date: "2026-06-30" },
  { id: "L-105", name: "Meera Nair", email: "mnair@keralatv.in", phone: "+91 94470 11223", company: "Kerala TV News", type: "Contact Form", products: "NewsForge", status: "Closed", date: "2026-06-28" },
];

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState(LEADS_DATA);
  const [filterStatus, setFilterStatus] = useState("All");

  const exportCSV = () => {
    const headers = ["Lead ID", "Name", "Email", "Phone", "Company", "Type", "Products", "Status", "Date"];
    const rows = leads.map((l) => [l.id, l.name, l.email, l.phone, l.company, l.type, l.products, l.status, l.date]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.map((c) => `"${c}"`).join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `kayak_ai_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const updateStatus = (id: string, newStatus: string) => {
    setLeads(leads.map((l) => (l.id === id ? { ...l, status: newStatus } : l)));
  };

  const filtered = filterStatus === "All" ? leads : leads.filter((l) => l.status === filterStatus);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Leads & Demo Requests</h1>
          <p className="text-sm text-[var(--text-secondary)]">View, filter, manage lead statuses, and export leads to CSV for CRM sync.</p>
        </div>
        <button onClick={exportCSV} className="btn-primary text-xs py-2.5 px-4 flex items-center gap-2">
          <Download size={14} /> Export CSV
        </button>
      </div>

      <div className="card">
        <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
          <div className="relative w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input type="search" placeholder="Search leads..." className="input text-xs pl-9 py-2" />
          </div>

          <div className="flex items-center gap-2">
            <Filter size={14} className="text-[var(--text-muted)]" />
            <span className="text-xs text-[var(--text-muted)]">Status Filter:</span>
            {["All", "New", "Contacted", "Qualified", "Closed"].map((st) => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  filterStatus === st
                    ? "bg-[var(--accent-primary)] text-[#050810]"
                    : "bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-white/5"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name / Email</th>
                <th>Company</th>
                <th>Type</th>
                <th>Products</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((lead) => (
                <tr key={lead.id}>
                  <td className="text-xs font-mono text-[var(--text-muted)]">{lead.id}</td>
                  <td>
                    <div className="font-semibold text-sm">{lead.name}</div>
                    <div className="text-xs text-[var(--accent-primary)]">{lead.email}</div>
                  </td>
                  <td>
                    <div className="text-sm font-medium">{lead.company}</div>
                    <div className="text-xs text-[var(--text-muted)]">{lead.phone}</div>
                  </td>
                  <td><span className="badge badge-purple">{lead.type}</span></td>
                  <td className="text-xs">{lead.products}</td>
                  <td>
                    <select
                      value={lead.status}
                      onChange={(e) => updateStatus(lead.id, e.target.value)}
                      className="bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-md text-xs py-1 px-2 text-[var(--text-primary)] outline-none cursor-pointer"
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Qualified">Qualified</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </td>
                  <td className="text-xs text-[var(--text-muted)]">{lead.date}</td>
                  <td>
                    <a href={`mailto:${lead.email}`} className="btn-ghost text-xs py-1 px-2.5 flex items-center gap-1">
                      <Mail size={12} /> Contact
                    </a>
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
