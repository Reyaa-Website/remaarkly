import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import { getCurrentAdmin } from '@/lib/auth';
import { notFound, redirect } from 'next/navigation';
import { BlogForm } from '@/components/admin/blog-form';

export const metadata: Metadata = {
  title: 'Edit Blog Article | Remaarkly Admin',
};

export const dynamic = 'force-dynamic';

interface EditBlogPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditBlogPage({ params }: EditBlogPageProps) {
  const admin = await getCurrentAdmin();
  if (!admin) {
    redirect('/admin/login');
  }

  const { id } = await params;
  const post = await prisma.blogPost.findUnique({
    where: { id },
  });

  if (!post) {
    notFound();
  }

  return (
    <div>
      <BlogForm initialData={post} />
    </div>
  );
}
