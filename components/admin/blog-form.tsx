'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { slugify } from '@/lib/utils';
import { MarkdownView } from '@/components/blog/markdown-view';
import { 
  Save, 
  Eye, 
  ArrowLeft, 
  Loader2, 
  AlertCircle, 
  CheckCircle2, 
  Sparkles, 
  Image as ImageIcon,
  BookOpen,
  Globe,
  Trash2
} from 'lucide-react';
import Link from 'next/link';

interface BlogFormProps {
  initialData?: {
    id: string;
    title: string;
    slug: string;
    content: string;
    excerpt?: string | null;
    featuredImage?: string | null;
    seoTitle?: string | null;
    seoDescription?: string | null;
    category?: string | null;
    author?: string | null;
    readTime?: string | null;
    status: string;
  };
}

export function BlogForm({ initialData }: BlogFormProps) {
  const router = useRouter();
  const isEditing = !!initialData?.id;

  const [formData, setFormData] = React.useState({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    content: initialData?.content || '',
    excerpt: initialData?.excerpt || '',
    featuredImage: initialData?.featuredImage || '',
    seoTitle: initialData?.seoTitle || '',
    seoDescription: initialData?.seoDescription || '',
    category: initialData?.category || 'Product & Industry',
    author: initialData?.author || 'Remaarkly Team',
    readTime: initialData?.readTime || '4 min read',
    status: initialData?.status || 'draft',
  });

  const [autoSlug, setAutoSlug] = React.useState(!isEditing);
  const [showPreview, setShowPreview] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData((prev) => ({
      ...prev,
      title: val,
      slug: autoSlug ? slugify(val) : prev.slug,
      seoTitle: prev.seoTitle ? prev.seoTitle : val,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const imagePresets = [
    { label: 'Dog in Transport Crate', url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=80' },
    { label: 'Dogs Playing Outdoors', url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80' },
    { label: 'SaaS Engineering Team', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80' },
    { label: 'Happy Puppy Close-up', url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const url = isEditing ? `/api/blogs/${initialData.id}` : '/api/blogs';
      const method = isEditing ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to save post');
      }

      setSuccess('Blog post saved successfully!');
      setTimeout(() => {
        router.push('/admin/blogs');
        router.refresh();
      }, 800);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An error occurred while saving the post');
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!initialData?.id) return;
    if (!window.confirm('Are you sure you want to permanently delete this blog post?')) {
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`/api/blogs/${initialData.id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        router.push('/admin/blogs');
        router.refresh();
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      
      {/* Top action bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/blogs"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
              {isEditing ? 'Edit Blog Article' : 'Create New Blog Article'}
            </h1>
            <p className="text-xs text-slate-400">
              {isEditing ? `Managing /${formData.slug}` : 'Write and publish articles to the public blog'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setShowPreview(!showPreview)}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
          >
            <Eye className="w-4 h-4" />
            <span>{showPreview ? 'Hide Preview' : 'Show Live Preview'}</span>
          </button>

          {isEditing && (
            <button
              type="button"
              onClick={handleDelete}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              <span>Delete</span>
            </button>
          )}

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm transition-all disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            <span>{isEditing ? 'Update Article' : 'Publish Article'}</span>
          </button>
        </div>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 flex items-center gap-3 text-xs">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center gap-3 text-xs">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{success}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Title */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                Article Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={handleTitleChange}
                placeholder="e.g. Navigating International Pet Travel Regulations in 2026"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-base font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Slug */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  URL Slug
                </label>
                <label className="text-[11px] text-slate-400 flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={autoSlug}
                    onChange={(e) => setAutoSlug(e.target.checked)}
                    className="rounded text-indigo-600"
                  />
                  <span>Auto-generate from title</span>
                </label>
              </div>
              <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 overflow-hidden text-xs">
                <span className="px-3 text-slate-400 border-r border-slate-200 font-mono">
                  /blog/
                </span>
                <input
                  type="text"
                  required
                  value={formData.slug}
                  disabled={autoSlug}
                  onChange={(e) => setFormData({ ...formData, slug: slugify(e.target.value) })}
                  className="w-full px-3 py-2.5 bg-transparent text-slate-900 font-mono focus:outline-none disabled:opacity-75"
                />
              </div>
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                Summary / Excerpt
              </label>
              <textarea
                rows={2}
                value={formData.excerpt}
                onChange={handleChange}
                name="excerpt"
                placeholder="A concise 1-2 sentence overview of the article shown on cards and in search results..."
                className="w-full p-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Body Editor & Preview */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                Article Body (Markdown Supported) <span className="text-red-500">*</span>
              </label>
              <span className="text-[11px] text-slate-400 font-mono">
                Supports # H1, ## H2, ### H3, **bold**, bullet points
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <textarea
                rows={16}
                required
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Write your article in Markdown here...&#10;&#10;### Section Heading&#10;Write detailed paragraphs explaining the regulations, workflows, or platform features..."
                className="w-full p-4 rounded-xl border border-slate-200 bg-white text-slate-900 text-xs sm:text-sm font-mono leading-relaxed focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              {showPreview && (
                <div className="p-6 rounded-xl border border-indigo-200 bg-indigo-50/20 space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Live Rendered Preview
                  </div>
                  <div className="border-t border-indigo-100 pt-4">
                    <MarkdownView content={formData.content || '_No content written yet._'} />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* SEO Metadata Box */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600">
              <Globe className="w-3.5 h-3.5" />
              Search Engine Optimization (SEO)
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                  SEO Meta Title
                </label>
                <input
                  type="text"
                  name="seoTitle"
                  value={formData.seoTitle}
                  onChange={handleChange}
                  placeholder="Custom SEO title for Google & social previews"
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                  SEO Meta Description
                </label>
                <textarea
                  rows={2}
                  name="seoDescription"
                  value={formData.seoDescription}
                  onChange={handleChange}
                  placeholder="Custom SEO meta description..."
                  className="w-full p-3 rounded-xl border border-slate-200 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Sidebar Settings Area */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Status & Publication */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Publishing State
            </h3>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                Visibility Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="draft">Draft (Hidden from public site)</option>
                <option value="published">Published (Live on website)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="Product Launch">Product Launch</option>
                <option value="Industry Insights">Industry Insights</option>
                <option value="Company & Vision">Company & Vision</option>
                <option value="Customer Experience">Customer Experience</option>
                <option value="Compliance & Rules">Compliance & Rules</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Author
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Read Time
                </label>
                <input
                  type="text"
                  name="readTime"
                  value={formData.readTime}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs"
                />
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <ImageIcon className="w-3.5 h-3.5" />
              Featured Image
            </h3>

            <div>
              <label className="block text-xs text-slate-600 mb-1.5">
                Image URL (Unsplash or CDN)
              </label>
              <input
                type="url"
                name="featuredImage"
                value={formData.featuredImage}
                onChange={handleChange}
                placeholder="https://images.unsplash.com/..."
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Presets */}
            <div className="space-y-1.5 pt-1">
              <div className="text-[11px] font-semibold text-slate-500">Quick Image Presets:</div>
              <div className="grid grid-cols-2 gap-1.5">
                {imagePresets.map((preset, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setFormData({ ...formData, featuredImage: preset.url })}
                    className="p-2 text-left rounded-lg bg-slate-50 hover:bg-indigo-50 border border-slate-200 text-[10px] text-slate-600 truncate"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Preview Image thumbnail */}
            {formData.featuredImage && (
              <div className="rounded-xl overflow-hidden border border-slate-200 h-32 w-full bg-slate-100">
                <img
                  src={formData.featuredImage}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

        </div>

      </div>

    </form>
  );
}
