"use client";

import { useState } from "react";
import { Plus, Users, FileText, CheckCircle, Clock } from "lucide-react";

const JOBS = [
  { id: "J-1", title: "Senior Full-Stack Engineer", dept: "Engineering", location: "Bengaluru", status: "Open", applicants: 14 },
  { id: "J-2", title: "ML Engineer — NLP / LLMs", dept: "AI Research", location: "Bengaluru / Remote", status: "Open", applicants: 28 },
  { id: "J-3", title: "Product Manager — NewsForge", dept: "Product", location: "Bengaluru", status: "Open", applicants: 9 },
  { id: "J-4", title: "Enterprise Sales Executive", dept: "Sales", location: "Mumbai / Delhi", status: "Open", applicants: 11 },
  { id: "J-5", title: "UI/UX Designer", dept: "Design", location: "Bengaluru", status: "Closed", applicants: 42 },
];

const APPLICANTS = [
  { id: "A-1", name: "Aarav Sharma", job: "Senior Full-Stack Engineer", email: "aarav@gmail.com", resume: "https://drive.google.com/...", date: "2026-07-02", status: "New" },
  { id: "A-2", name: "Kavya Patel", job: "ML Engineer — NLP", email: "kavya@iitb.ac.in", resume: "https://drive.google.com/...", date: "2026-07-01", status: "Reviewing" },
  { id: "A-3", name: "Rohan Varma", job: "Product Manager — NewsForge", email: "rohan.v@yahoo.com", resume: "https://drive.google.com/...", date: "2026-06-30", status: "Shortlisted" },
];

export default function AdminJobsPage() {
  const [tab, setTab] = useState<"jobs" | "applicants">("jobs");

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Careers & Applicants Manager</h1>
          <p className="text-sm text-[var(--text-secondary)]">Manage job openings and review incoming candidate applications.</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setTab("jobs")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold ${tab === "jobs" ? "bg-[var(--accent-primary)] text-[#050810]" : "btn-ghost"}`}
          >
            Job Postings ({JOBS.length})
          </button>
          <button
            onClick={() => setTab("applicants")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold ${tab === "applicants" ? "bg-[var(--accent-primary)] text-[#050810]" : "btn-ghost"}`}
          >
            Applicants ({APPLICANTS.length})
          </button>
        </div>
      </div>

      {tab === "jobs" ? (
        <div className="card">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold">Active Job Postings</h2>
            <button className="btn-primary text-xs py-2 px-4 flex items-center gap-1">
              <Plus size={14} /> Add New Job
            </button>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Department</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Applicants</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {JOBS.map((j) => (
                  <tr key={j.id}>
                    <td className="font-semibold">{j.title}</td>
                    <td><span className="badge badge-purple">{j.dept}</span></td>
                    <td>{j.location}</td>
                    <td>
                      <span className={`badge ${j.status === "Open" ? "badge-green" : "badge-blue"}`}>{j.status}</span>
                    </td>
                    <td className="font-bold text-cyan-400">{j.applicants}</td>
                    <td>
                      <button className="text-xs text-[var(--accent-primary)] hover:underline">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="card">
          <h2 className="text-lg font-bold mb-6">Submitted Applications</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Applicant Name</th>
                  <th>Applied For</th>
                  <th>Email</th>
                  <th>Resume</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {APPLICANTS.map((a) => (
                  <tr key={a.id}>
                    <td className="font-semibold">{a.name}</td>
                    <td>{a.job}</td>
                    <td className="text-xs text-[var(--accent-primary)]">{a.email}</td>
                    <td>
                      <a href={a.resume} target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-400 underline">
                        View Resume ↗
                      </a>
                    </td>
                    <td>
                      <span className="badge badge-blue">{a.status}</span>
                    </td>
                    <td className="text-xs text-[var(--text-muted)]">{a.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
