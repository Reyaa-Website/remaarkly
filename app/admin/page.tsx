import { getCurrentAdmin } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { formatDate, formatDateTime, truncate } from '@/lib/utils';
import { 
  BookOpen, 
  Inbox, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ArrowUpRight, 
  Plus, 
  Download, 
  Mail, 
  Building,
  ChevronRight,
  Eye,
  FileText
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage() {
  const admin = await getCurrentAdmin();
  if (!admin) {
    redirect('/admin/login');
  }

  // 1. Fetch stats
  const totalBlogs = await prisma.blogPost.count();
  const publishedBlogs = await prisma.blogPost.count({ where: { status: 'published' } });
  const draftBlogs = totalBlogs - publishedBlogs;

  const totalSubmissions = await prisma.formSubmission.count();
  const unreadSubmissions = await prisma.formSubmission.count({ where: { isRead: false } });
  const demoSubmissions = await prisma.formSubmission.count({ where: { type: 'demo' } });
  const contactSubmissions = await prisma.formSubmission.count({ where: { type: 'contact' } });

  // Submissions this week (last 7 days)
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  const submissionsThisWeek = await prisma.formSubmission.count({
    where: { createdAt: { gte: oneWeekAgo } },
  });

  // 2. Fetch recent submissions
  const recentSubmissions = await prisma.formSubmission.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' },
  });

  // 3. Fetch recent blogs
  const recentBlogs = await prisma.blogPost.findMany({
    take: 4,
    orderBy: { updatedAt: 'desc' },
  });

  return (
    <div className="space-y-8">
      
      {/* Top Welcome & Quick Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Admin Overview
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Welcome back, {admin.name || admin.email}. Here is the pulse of Remaarkly & PetRoute.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/blogs/new"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>New Blog Post</span>
          </Link>
          <a
            href="/api/submissions/export"
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
          >
            <Download className="w-4 h-4 text-slate-500" />
            <span>Export CSV</span>
          </a>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Total Submissions */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Total Submissions
            </span>
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600">
              <Inbox className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-slate-900">
            {totalSubmissions}
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 font-bold">
              {unreadSubmissions} unread
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-500">{demoSubmissions} Demo / {contactSubmissions} Contact</span>
          </div>
        </div>

        {/* Submissions This Week */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Activity This Week
            </span>
            <div className="p-2 rounded-xl bg-sky-50 text-sky-600">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-slate-900">
            {submissionsThisWeek}
          </div>
          <p className="text-xs text-slate-500">
            Enquiries received in the past 7 days
          </p>
        </div>

        {/* Total Blog Posts */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Blog Articles
            </span>
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-slate-900">
            {totalBlogs}
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-emerald-600 font-semibold">{publishedBlogs} Live</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-500">{draftBlogs} Drafts</span>
          </div>
        </div>

        {/* PetRoute Demo Demand */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              PetRoute Demo Pipeline
            </span>
            <div className="p-2 rounded-xl bg-purple-50 text-purple-600">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-purple-600">
            {demoSubmissions}
          </div>
          <p className="text-xs text-slate-500">
            Qualified agency demo inquiries
          </p>
        </div>

      </div>

      {/* Main Grid: Recent Submissions & Recent Blog Posts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Recent Submissions */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Inbox className="w-4 h-4 text-indigo-600" />
              Latest Form Submissions
            </h3>
            <Link
              href="/admin/submissions"
              className="text-xs font-semibold text-indigo-600 hover:underline flex items-center gap-1"
            >
              <span>View All ({totalSubmissions})</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white shadow-sm overflow-hidden">
            {recentSubmissions.length > 0 ? (
              <div className="divide-y divide-slate-100">
                {recentSubmissions.map((sub) => (
                  <div
                    key={sub.id}
                    className={`p-4 hover:bg-slate-50 transition-colors flex items-center justify-between gap-4 ${
                      !sub.isRead ? 'bg-indigo-50/30' : ''
                    }`}
                  >
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase ${
                          sub.type === 'demo'
                            ? 'bg-purple-100 text-purple-700'
                            : 'bg-sky-100 text-sky-700'
                        }`}>
                          {sub.type}
                        </span>
                        <span className="text-xs font-bold text-slate-900 truncate">
                          {sub.name}
                        </span>
                        {!sub.isRead && (
                          <span className="w-2 h-2 rounded-full bg-indigo-600 shrink-0" />
                        )}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate">
                        {sub.company ? `${sub.company} • ` : ''}{sub.email}
                      </div>
                      {sub.message && (
                        <p className="text-xs text-slate-600 truncate max-w-md">
                          "{sub.message}"
                        </p>
                      )}
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-[11px] text-slate-400">{formatDate(sub.createdAt)}</div>
                      <Link
                        href="/admin/submissions"
                        className="inline-block text-[11px] font-semibold text-indigo-600 hover:underline mt-1"
                      >
                        Inspect →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-xs text-slate-500">
                No submissions received yet.
              </div>
            )}
          </div>
        </div>

        {/* Right: Recent Blog Posts */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              Recent Articles
            </h3>
            <Link
              href="/admin/blogs"
              className="text-xs font-semibold text-indigo-600 hover:underline flex items-center gap-1"
            >
              <span>Manage Blogs</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white shadow-sm overflow-hidden divide-y divide-slate-100">
            {recentBlogs.map((blog) => (
              <div key={blog.id} className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between gap-3">
                <div className="min-w-0 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded capitalize ${
                      blog.status === 'published'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {blog.status}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 truncate">
                      {blog.title}
                    </h4>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Slug: /{blog.slug}
                  </div>
                </div>

                <Link
                  href={`/admin/blogs/${blog.id}`}
                  className="px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 shrink-0"
                >
                  Edit
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
