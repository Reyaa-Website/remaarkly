import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import { BlogCard } from '@/components/blog/blog-card';
import { BookOpen, Sparkles, Search } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog & Industry Insights | Remaarkly & PetRoute',
  description:
    'Read our latest articles on global pet relocation logistics, IATA LAR compliance, veterinary regulations, and vertical SaaS engineering.',
};

export const revalidate = 0; // Fresh DB data on load

interface BlogPageProps {
  searchParams: Promise<{ category?: string; search?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category, search } = await searchParams;

  const where: any = {
    status: 'published',
  };

  if (category && category !== 'All') {
    where.category = category;
  }

  if (search) {
    where.OR = [
      { title: { contains: search } },
      { excerpt: { contains: search } },
      { content: { contains: search } },
    ];
  }

  const posts = await prisma.blogPost.findMany({
    where,
    orderBy: { publishedAt: 'desc' },
  });

  // Fetch unique categories
  const allPublishedPosts = await prisma.blogPost.findMany({
    where: { status: 'published' },
    select: { category: true },
  });
  const categories = ['All', ...Array.from(new Set(allPublishedPosts.map((p) => p.category).filter(Boolean)))];

  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-grid-pattern min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            Remaarkly Dispatch
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Insights, Regulations & <span className="text-gradient">Industry Analysis</span>
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Expert articles on international live animal freight forwarding, compliance automation, veterinary travel mandates, and software architecture.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = (!category && cat === 'All') || category === cat;
            const href = cat === 'All' ? '/blog' : `/blog?category=${encodeURIComponent(cat as string)}`;
            return (
              <Link
                key={cat}
                href={href}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/20'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </Link>
            );
          })}
        </div>

        {/* Blog Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 max-w-lg mx-auto space-y-4">
            <BookOpen className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">No articles found</h3>
            <p className="text-sm text-slate-500">
              There are no published articles matching this filter. Check back soon or reset filters.
            </p>
            <Link
              href="/blog"
              className="inline-block px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold"
            >
              View All Articles
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
