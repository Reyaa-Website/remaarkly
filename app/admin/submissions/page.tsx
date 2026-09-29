import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import { getCurrentAdmin } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { SubmissionsTable } from '@/components/admin/submissions-table';
import { Inbox, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Submissions Inbox | Remaarkly Admin',
};

export const dynamic = 'force-dynamic';

export default async function AdminSubmissionsPage() {
  const admin = await getCurrentAdmin();
  if (!admin) {
    redirect('/admin/login');
  }

  const submissions = await prisma.formSubmission.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">
          <Inbox className="w-3.5 h-3.5" />
          Inbox & CRM
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Form Submissions
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Manage inbound PetRoute demo requests and general contact submissions.
        </p>
      </div>

      <SubmissionsTable initialSubmissions={submissions} />
    </div>
  );
}
