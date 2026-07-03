"use client";

import { useState } from "react";
import { Upload, Image as ImageIcon, Copy, Check, Trash2 } from "lucide-react";

const INITIAL_MEDIA = [
  { id: "m1", name: "newsforge-hero.png", size: "1.2 MB", type: "image/png", url: "/og-image.png" },
  { id: "m2", name: "ai-tutor-dashboard.jpg", size: "850 KB", type: "image/jpeg", url: "/og-image.png" },
  { id: "m3", name: "kayak-ai-logo.svg", size: "12 KB", type: "image/svg+xml", url: "/og-image.png" },
  { id: "m4", name: "broadcast-suite-diagram.png", size: "2.1 MB", type: "image/png", url: "/og-image.png" },
];

export default function AdminMediaPage() {
  const [media, setMedia] = useState(INITIAL_MEDIA);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyUrl = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Media Library</h1>
          <p className="text-sm text-[var(--text-secondary)]">Upload and manage media assets (images, graphics, diagrams) used across products, blogs, and pages.</p>
        </div>
        <button className="btn-primary text-xs py-2.5 px-4 flex items-center gap-2">
          <Upload size={14} /> Upload Asset
        </button>
      </div>

      {/* Drag & Drop Upload Zone */}
      <div className="border-2 border-dashed border-[var(--border-hover)] rounded-2xl p-8 text-center mb-8 bg-[var(--bg-glass)] hover:border-[var(--accent-primary)] transition-all cursor-pointer">
        <Upload size={32} className="mx-auto mb-2 text-[var(--accent-primary)]" />
        <p className="text-sm font-semibold mb-1">Click to upload or drag and drop media files</p>
        <p className="text-xs text-[var(--text-muted)]">PNG, JPG, SVG, WebP, GIF up to 10MB</p>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {media.map((item) => (
          <div key={item.id} className="card p-3 flex flex-col gap-2 group">
            <div className="h-32 rounded-lg bg-[var(--bg-tertiary)] flex items-center justify-center text-4xl overflow-hidden relative">
              <ImageIcon className="text-[var(--text-muted)]" size={32} />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-2">
                <button
                  onClick={() => copyUrl(item.id, item.url)}
                  className="p-2 rounded-lg bg-white/20 text-white hover:bg-white/40"
                  title="Copy URL"
                >
                  {copiedId === item.id ? <Check size={14} /> : <Copy size={14} />}
                </button>
                <button className="p-2 rounded-lg bg-red-500/30 text-red-300 hover:bg-red-500/50" title="Delete">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold truncate">{item.name}</div>
              <div className="text-[10px] text-[var(--text-muted)]">{item.size}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
