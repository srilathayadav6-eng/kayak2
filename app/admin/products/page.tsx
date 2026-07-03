"use client";

import { useState } from "react";
import { PRODUCTS } from "@/lib/data";
import { Package, Edit2, Save, Check } from "lucide-react";

export default function AdminProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [tagline, setTagline] = useState(selectedProduct.tagline);
  const [description, setDescription] = useState(selectedProduct.description);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Product Content Manager</h1>
          <p className="text-sm text-[var(--text-secondary)]">Edit product details, hero content, features, sub-modules, and FAQs without code deploys.</p>
        </div>
        {saved && (
          <span className="badge badge-green flex items-center gap-1">
            <Check size={14} /> Product content updated!
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Product selector sidebar */}
        <div className="card lg:col-span-1 flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase text-[var(--text-muted)] mb-2">Select Product</span>
          {PRODUCTS.map((p) => (
            <button
              key={p.slug}
              onClick={() => {
                setSelectedProduct(p);
                setTagline(p.tagline);
                setDescription(p.description);
              }}
              className={`flex items-center gap-3 p-3 rounded-xl text-sm font-medium text-left transition-all ${
                selectedProduct.slug === p.slug
                  ? "bg-[var(--accent-glow)] text-[var(--accent-primary)] border border-[var(--border-accent)]"
                  : "hover:bg-white/5 text-[var(--text-secondary)]"
              }`}
            >
              <span className="text-xl">{p.icon}</span>
              <span>{p.name}</span>
            </button>
          ))}
        </div>

        {/* Product Content Form */}
        <div className="card lg:col-span-3">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--border)]">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{selectedProduct.icon}</span>
              <div>
                <h2 className="text-xl font-bold">{selectedProduct.name}</h2>
                <span className="text-xs text-[var(--text-muted)]">Slug: /products/{selectedProduct.slug}</span>
              </div>
            </div>
            <button onClick={handleSave} className="btn-primary text-xs py-2.5 px-5 flex items-center gap-2">
              <Save size={14} /> Save Changes
            </button>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <label className="label">Tagline</label>
              <input type="text" className="input" value={tagline} onChange={(e) => setTagline(e.target.value)} />
            </div>

            <div>
              <label className="label">Product Description</label>
              <textarea className="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div>
              <label className="label mb-2">Product Features ({selectedProduct.features.length} configured)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedProduct.features.map((f, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border)] text-sm flex items-start gap-2">
                    <span className="text-lg">{f.icon}</span>
                    <div>
                      <div className="font-semibold text-xs">{f.title}</div>
                      <div className="text-[11px] text-[var(--text-muted)]">{f.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
