import { TrendingUp, ShieldCheck, Clock, Users } from 'lucide-react';

export function StatsSection() {
  const stats = [
    {
      value: '50,000+',
      label: 'Pets Relocated Safely',
      sublabel: 'Zero compliance quarantine rejections across tier-1 routes',
      icon: ShieldCheck,
      color: 'text-indigo-600 dark:text-indigo-400',
    },
    {
      value: '70%',
      label: 'Drop in Status Calls',
      sublabel: 'Pet parents follow live milestones & photos on their phone',
      icon: Clock,
      color: 'text-sky-600 dark:text-sky-400',
    },
    {
      value: '120+',
      label: 'Country Rulebooks',
      sublabel: 'Automated DEFRA, USDA, NParks & DAFF veterinary protocols',
      icon: TrendingUp,
      color: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      value: '3.5x',
      label: 'Faster Quote Turnaround',
      sublabel: 'Generate accurate multi-currency proposals in under 60 seconds',
      icon: Users,
      color: 'text-amber-600 dark:text-amber-400',
    },
  ];

  return (
    <section className="py-20 border-y border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 hover:border-indigo-500/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                  {stat.label}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {stat.sublabel}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
