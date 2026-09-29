'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Logo } from '../logo';
import { 
  LayoutDashboard, 
  Inbox, 
  BookOpen, 
  Settings, 
  ExternalLink, 
  LogOut, 
  ShieldCheck, 
  Sparkles,
  ChevronRight,
  Layers,
  PawPrint
} from 'lucide-react';

interface AdminSidebarProps {
  user: {
    email: string;
    name?: string;
    role: string;
  };
  unreadCount?: number;
}

export function AdminSidebar({ user, unreadCount = 0 }: AdminSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = React.useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/admin/login');
      router.refresh();
    } catch (e) {
      console.error(e);
      setLoggingOut(false);
    }
  };

  const navItems = [
    {
      name: 'Dashboard',
      href: '/admin',
      icon: LayoutDashboard,
      exact: true,
    },
    {
      name: 'Submissions Inbox',
      href: '/admin/submissions',
      icon: Inbox,
      badge: unreadCount > 0 ? `${unreadCount} new` : undefined,
    },
    {
      name: 'Blog Management',
      href: '/admin/blogs',
      icon: BookOpen,
    },
    {
      name: 'Site Settings',
      href: '/admin/settings',
      icon: Settings,
    },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between shrink-0 h-screen sticky top-0">
      
      {/* Top Brand */}
      <div>
        <div className="p-5 border-b border-slate-200 flex items-center justify-between">
          <Link href="/admin" className="flex items-center gap-2.5 group">
            <Logo size="sm" />
            <div>
              <div className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                Remaarkly
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-600 font-semibold uppercase">
                  Admin
                </span>
              </div>
              <div className="text-[10px] text-slate-400">Control Center</div>
            </div>
          </Link>
        </div>

        {/* Nav list */}
        <nav className="p-4 space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.exact
              ? pathname === item.href
              : pathname.startsWith(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-indigo-100 text-indigo-600'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom User info & Public link */}
      <div className="p-4 border-t border-slate-200 space-y-3">
        <Link
          href="/"
          target="_blank"
          className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors border border-slate-200/60"
        >
          <span className="flex items-center gap-2">
            <ExternalLink className="w-3.5 h-3.5" />
            View Live Site
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        </Link>

        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
          <div className="truncate pr-2">
            <div className="text-xs font-bold text-slate-900 truncate">
              {user.name || 'Admin'}
            </div>
            <div className="text-[11px] text-slate-400 truncate">{user.email}</div>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
            title="Logout"
            className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>

    </aside>
  );
}
