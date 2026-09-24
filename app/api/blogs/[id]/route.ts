import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentAdmin } from '@/lib/auth';
import { slugify } from '@/lib/utils';

interface Context {
  params: Promise<{ id: string }>;
}

// GET single blog by ID
export async function GET(req: NextRequest, { params }: Context) {
  try {
    const { id } = await params;
    const post = await prisma.blogPost.findUnique({
      where: { id },
    });

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json({ blog: post });
  } catch (error: any) {
    console.error('Fetch single blog error:', error);
    return NextResponse.json({ error: 'Failed to fetch blog post' }, { status: 500 });
  }
}

// PUT / PATCH: Update blog post (Admin only)
export async function PUT(req: NextRequest, { params }: Context) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
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

    const existingPost = await prisma.blogPost.findUnique({
      where: { id },
    });

    if (!existingPost) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    const newSlug = slug ? slugify(slug) : (title ? slugify(title) : existingPost.slug);

    // Check if new slug conflicts with another post
    if (newSlug !== existingPost.slug) {
      const conflict = await prisma.blogPost.findUnique({
        where: { slug: newSlug },
      });
      if (conflict && conflict.id !== id) {
        return NextResponse.json(
          { error: 'A post with this slug already exists' },
          { status: 400 }
        );
      }
    }

    const postStatus = status || existingPost.status;
    let publishedAt = existingPost.publishedAt;
    if (postStatus === 'published' && !existingPost.publishedAt) {
      publishedAt = new Date();
    }

    const updated = await prisma.blogPost.update({
      where: { id },
      data: {
        title: title !== undefined ? title.trim() : existingPost.title,
        slug: newSlug,
        content: content !== undefined ? content.trim() : existingPost.content,
        excerpt: excerpt !== undefined ? excerpt?.trim() : existingPost.excerpt,
        featuredImage: featuredImage !== undefined ? featuredImage?.trim() : existingPost.featuredImage,
        seoTitle: seoTitle !== undefined ? seoTitle?.trim() : existingPost.seoTitle,
        seoDescription: seoDescription !== undefined ? seoDescription?.trim() : existingPost.seoDescription,
        category: category !== undefined ? category : existingPost.category,
        author: author !== undefined ? author : existingPost.author,
        readTime: readTime !== undefined ? readTime : existingPost.readTime,
        status: postStatus,
        publishedAt,
      },
    });

    return NextResponse.json({ success: true, blog: updated });
  } catch (error: any) {
    console.error('Update blog error:', error);
    return NextResponse.json({ error: 'Failed to update blog post' }, { status: 500 });
  }
}

// DELETE: Delete blog post (Admin only)
export async function DELETE(req: NextRequest, { params }: Context) {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    await prisma.blogPost.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: 'Blog post deleted' });
  } catch (error: any) {
    console.error('Delete blog error:', error);
    return NextResponse.json({ error: 'Failed to delete blog post' }, { status: 500 });
  }
}
