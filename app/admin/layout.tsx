import { getCurrentAdmin } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { AdminSidebar } from '@/components/admin/admin-sidebar';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const admin = await getCurrentAdmin();

  // If not logged in, we let the children render (which will be /admin/login)
  // or if inside a protected sub-page, we handle it
  if (!admin) {
    return <div className="min-h-screen bg-slate-50 dark:bg-slate-950">{children}</div>;
  }

  // Count unread submissions for sidebar badge
  const unreadCount = await prisma.formSubmission.count({
    where: { isRead: false },
  });

  return (
    <div className="min-h-screen bg-slate-50/70 dark:bg-slate-950 flex flex-col md:flex-row">
      <AdminSidebar user={admin} unreadCount={unreadCount} />
      <main className="flex-1 min-w-0 p-6 sm:p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
