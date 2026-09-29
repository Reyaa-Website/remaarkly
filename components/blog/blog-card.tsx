import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { Calendar, Clock, ArrowRight, User, PawPrint } from 'lucide-react';

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    featuredImage?: string | null;
    category?: string | null;
    author?: string | null;
    readTime?: string | null;
    publishedAt?: Date | string | null;
  };
}

export function BlogCard({ post }: BlogCardProps) {
  const displayImage = post.featuredImage || '/images/pet-travel-airport.jpg';

  return (
    <article className="flex flex-col rounded-2xl border border-slate-200/80 bg-white overflow-hidden hover:shadow-xl hover:border-indigo-500/40 transition-all duration-300 group">
      {/* Featured Image */}
      <Link href={`/blog/${post.slug}`} className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 block">
        <img
          src={displayImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {post.category && (
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold border border-white/10 flex items-center gap-1.5">
            <PawPrint className="w-3 h-3 text-indigo-300" />
            <span>{post.category}</span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {/* Metadata */}
          <div className="flex items-center gap-3 text-xs text-slate-500">
            {post.publishedAt && (
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
            )}
            {post.readTime && (
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2 leading-snug">
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h3>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </div>

        {/* Card Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
            <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-[10px]">
              {post.author ? post.author[0] : <PawPrint className="w-3 h-3 text-indigo-600" />}
            </div>
            <span>{post.author || 'PetRoute Team'}</span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 group-hover:translate-x-1 transition-transform"
          >
            <span>Read</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
