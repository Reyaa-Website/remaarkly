import { Metadata } from 'next';
import { getCurrentAdmin } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { BlogForm } from '@/components/admin/blog-form';

export const metadata: Metadata = {
  title: 'Write New Article | Remaarkly Admin',
};

export const dynamic = 'force-dynamic';

export default async function NewBlogPage() {
  const admin = await getCurrentAdmin();
  if (!admin) {
    redirect('/admin/login');
  }

  return (
    <div>
      <BlogForm />
    </div>
  );
}
