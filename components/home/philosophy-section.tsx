import Link from 'next/link';
import { ArrowRight, CheckCircle2, Compass, Layers, Shield } from 'lucide-react';

export function PhilosophySection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
              The Remaarkly Thesis
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Why generic software fails high-consequence industries
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Standard CRM and logistics tools assume that every transaction follows a clean, linear pipeline. But in live animal logistics and specialized freight, a single regulatory shift or temperature spike can disrupt an entire itinerary.
            </p>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              At <strong className="text-slate-900 dark:text-white font-semibold">Remaarkly</strong>, we build vertical software that deeply understands the domain from day one. Zero complex customizations, zero fragile plug-ins — just instant operational clarity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/50">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Domain-Native Logic</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Pre-configured with industry regulations, crate dimensions, and veterinary protocols.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/50">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Complete Ecosystem</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Unifies sales, operations, pet parents, and global overseas partner brokers.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
              >
                <span>Read our founding story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Architecture Blueprint Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/20 rounded-full blur-2xl" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-mono text-indigo-300 uppercase tracking-wider">Remaarkly Architecture</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">v2.4 Active</span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">Vertical Core Engine</div>
                      <div className="text-[11px] text-slate-300">Automated Compliance & Tariffs</div>
                    </div>
                    <span className="text-xs font-mono text-sky-400">100% Native</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">PetRoute Live Ops</div>
                      <div className="text-[11px] text-slate-300">Enquiry • Booking • Dispatch</div>
                    </div>
                    <span className="text-xs font-mono text-emerald-400">Live Production</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">Multi-Portal Mesh</div>
                      <div className="text-[11px] text-slate-300">Customer • Global Agent • Admin</div>
                    </div>
                    <span className="text-xs font-mono text-indigo-400">Real-Time Sync</span>
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-300 leading-relaxed">
                  Every product developed under the Remaarkly umbrella adheres to rigorous benchmarks for security, domain precision, and operational speed.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
