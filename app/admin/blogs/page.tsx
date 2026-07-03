"use client";

import { useState } from "react";
import { Plus, Edit, Trash2, Eye, Check, Search } from "lucide-react";

const INITIAL_POSTS = [
  { id: "1", title: "Kayak AI Launches NewsForge 2.0 with Advanced AI Automation", category: "Updates", status: "Published", author: "Arjun Sharma", date: "Jun 28, 2026" },
  { id: "2", title: "The Future of AI in Education: Personalization at Scale", category: "Education", status: "Published", author: "Priya Mehta", date: "Jun 20, 2026" },
  { id: "3", title: "Why Enterprise RAG Must Be Built on Private Infrastructure", category: "AI", status: "Published", author: "Priya Mehta", date: "Jun 12, 2026" },
  { id: "4", title: "Broadcast Automation in 2026: What's Changed and What Hasn't", category: "Broadcast", status: "Draft", author: "Rohit Verma", date: "Jun 5, 2026" },
];

export default function AdminBlogsPage() {
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState("");

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Blog Manager</h1>
          <p className="text-sm text-[var(--text-secondary)]">Create, edit, publish, and manage all corporate blog articles.</p>
        </div>
        <button onClick={() => setEditing(true)} className="btn-primary text-xs py-2.5 px-4 flex items-center gap-2">
          <Plus size={16} /> New Blog Post
        </button>
      </div>

      {editing ? (
        <div className="card max-w-3xl mb-8">
          <h2 className="text-lg font-bold mb-4">Create / Edit Blog Post</h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="label">Post Title</label>
              <input type="text" className="input" placeholder="Enter article title..." value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label">Category</label>
                <select className="select">
                  <option>AI</option>
                  <option>Broadcast</option>
                  <option>Education</option>
                  <option>Updates</option>
                </select>
              </div>
              <div>
                <label className="label">Status</label>
                <select className="select">
                  <option>Draft</option>
                  <option>Published</option>
                  <option>Scheduled</option>
                </select>
              </div>
            </div>
            <div>
              <label className="label">Body Content (Markdown / HTML)</label>
              <textarea className="textarea" rows={8} placeholder="Write your blog post body content here..." />
            </div>
            <div className="flex justify-end gap-3 mt-4">
              <button onClick={() => setEditing(false)} className="btn-ghost text-xs">Cancel</button>
              <button onClick={() => setEditing(false)} className="btn-primary text-xs">Save Post</button>
            </div>
          </div>
        </div>
      ) : null}

      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <div className="relative w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input type="search" placeholder="Search posts..." className="input text-xs pl-9 py-2" />
          </div>
          <span className="text-xs text-[var(--text-muted)]">Total {posts.length} articles</span>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Author</th>
                <th>Status</th>
                <th>Published Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td className="font-semibold">{post.title}</td>
                  <td><span className="badge badge-blue">{post.category}</span></td>
                  <td>{post.author}</td>
                  <td>
                    <span className={`badge ${post.status === "Published" ? "badge-green" : "badge-purple"}`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="text-xs text-[var(--text-muted)]">{post.date}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 hover:text-cyan-400"><Edit size={14} /></button>
                      <button className="p-1.5 hover:text-red-400"><Trash2 size={14} /></button>
                    </div>
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
