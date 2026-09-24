import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentAdmin } from '@/lib/auth';
import { slugify } from '@/lib/utils';

// GET: List blogs
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const all = searchParams.get('all') === 'true';

    // If 'all' is requested, verify admin
    if (all) {
      const admin = await getCurrentAdmin();
      if (!admin) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }

      const blogs = await prisma.blogPost.findMany({
        orderBy: { createdAt: 'desc' },
      });

      return NextResponse.json({ blogs });
    }

    // Public request: only published blogs
    const blogs = await prisma.blogPost.findMany({
      where: { status: 'published' },
      orderBy: { publishedAt: 'desc' },
    });

    return NextResponse.json({ blogs });
  } catch (error: any) {
    console.error('Fetch blogs error:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

// POST: Create a blog post (Admin protected)
export async function POST(req: NextRequest) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const {
      title,
      slug,
      content,
      excerpt,
      featuredImage,
      seoTitle,
      seoDescription,
      category,
      author,
      readTime,
      status,
    } = body;

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      );
    }

    const generatedSlug = slug ? slugify(slug) : slugify(title);

    // Check if slug already exists
    const existing = await prisma.blogPost.findUnique({
      where: { slug: generatedSlug },
    });

    const finalSlug = existing ? `${generatedSlug}-${Date.now().toString().slice(-4)}` : generatedSlug;

    const postStatus = status === 'published' ? 'published' : 'draft';
    const publishedAt = postStatus === 'published' ? new Date() : null;

    const newPost = await prisma.blogPost.create({
      data: {
        title: title.trim(),
        slug: finalSlug,
        content: content.trim(),
        excerpt: excerpt ? excerpt.trim() : null,
        featuredImage: featuredImage ? featuredImage.trim() : null,
        seoTitle: seoTitle ? seoTitle.trim() : title.trim(),
        seoDescription: seoDescription ? seoDescription.trim() : (excerpt ? excerpt.trim() : null),
        category: category || 'Product & Industry',
        author: author || admin.name || 'Remaarkly Team',
        readTime: readTime || '4 min read',
        status: postStatus,
        publishedAt,
      },
    });

    return NextResponse.json({ success: true, blog: newPost }, { status: 201 });
  } catch (error: any) {
    console.error('Create blog error:', error);
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    );
  }
}
