import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { formatDate } from '@/lib/utils';
import { MarkdownView } from '@/components/blog/markdown-view';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Share2, 
  Sparkles, 
  User, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({
    where: { slug },
  });

  if (!post) {
    return {
      title: 'Article Not Found | Remaarkly',
    };
  }

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt || undefined,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt || undefined,
      images: post.featuredImage ? [post.featuredImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({
    where: { slug },
  });

  if (!post || post.status !== 'published') {
    notFound();
  }

  // Fetch recent other posts
  const relatedPosts = await prisma.blogPost.findMany({
    where: {
      status: 'published',
      id: { not: post.id },
    },
    take: 2,
    orderBy: { publishedAt: 'desc' },
  });

  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-grid-pattern min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Post Header */}
        <div className="space-y-4 mb-10">
          {post.category && (
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              {post.category}
            </span>
          )}

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            {post.title}
          </h1>

          {/* Meta Bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 pt-2 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
                {post.author ? post.author[0] : 'R'}
              </div>
              <span className="font-semibold text-slate-900 dark:text-slate-200">{post.author || 'Remaarkly Team'}</span>
            </div>

            <span>•</span>

            {post.publishedAt && (
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
            )}

            <span>•</span>

            {post.readTime && (
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            )}
          </div>
        </div>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="mb-12 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-lg bg-slate-100 dark:bg-slate-900">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-[320px] sm:h-[450px] object-cover"
            />
          </div>
        )}

        {/* Excerpt Callout */}
        {post.excerpt && (
          <div className="p-6 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-800/60 mb-10 text-base sm:text-lg font-medium text-slate-800 dark:text-indigo-200 leading-relaxed italic">
            "{post.excerpt}"
          </div>
        )}

        {/* Main Article Body */}
        <div className="article-body">
          <MarkdownView content={post.content} />
        </div>

        {/* Bottom Post CTA Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-indigo-900 to-slate-950 text-white border border-indigo-500/30 shadow-xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-indigo-200">
            <Sparkles className="w-3.5 h-3.5" />
            Built for Pet Transport Professionals
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold">
            See how PetRoute transforms pet relocation operations
          </h3>
          <p className="text-sm text-indigo-200/90 max-w-xl">
            Streamline your quote generation, airline container compliance, flight manifests, and customer tracking in one unified SaaS workspace.
          </p>
          <div className="pt-2">
            <Link
              href="/request-demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-950 bg-white hover:bg-slate-100 text-sm"
            >
              <span>Schedule a Live Walkthrough</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
