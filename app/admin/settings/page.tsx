import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import { getCurrentAdmin } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { SettingsForm } from '@/components/admin/settings-form';
import { Settings } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Site Settings | Remaarkly Admin',
};

export const dynamic = 'force-dynamic';

export default async function AdminSettingsPage() {
  const admin = await getCurrentAdmin();
  if (!admin) {
    redirect('/admin/login');
  }

  const settingsList = await prisma.siteSetting.findMany();
  const settingsMap: Record<string, string> = {};
  for (const s of settingsList) {
    settingsMap[s.key] = s.value;
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
          <Settings className="w-3.5 h-3.5" />
          Configuration
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Site Settings
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Update global contact email, office details, social profile links, and live announcements.
        </p>
      </div>

      <SettingsForm initialSettings={settingsMap} />
    </div>
  );
}
