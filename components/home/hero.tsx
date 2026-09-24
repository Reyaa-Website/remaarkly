import Link from 'next/link';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Plane, 
  HeartHandshake, 
  CheckCircle2, 
  ArrowUpRight,
  TrendingUp,
  Globe2
} from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Radiant Glowing Orbs */}
      <div className="hero-glow top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-indigo-500/20 via-sky-500/20 to-purple-500/20 dark:from-indigo-600/30 dark:via-sky-500/25 dark:to-purple-600/25" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-8">
          <Link
            href="#petroute"
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-indigo-200/80 dark:border-indigo-800/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm hover:border-indigo-400 dark:hover:border-indigo-600 transition-all duration-200 group"
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
            <span className="text-indigo-600 dark:text-indigo-400 font-bold">Remaarkly Product Spotlight</span>
            <span className="text-slate-400 dark:text-slate-600">|</span>
            <span className="text-slate-600 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center gap-1">
              PetRoute Flagship Suite
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Main Title & Tagline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Specialized Software for{' '}
            <span className="text-gradient">Mission-Critical</span>{' '}
            Industries.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Remaarkly architects purpose-built vertical SaaS. We replace fragmented spreadsheets and legacy tools with unified operating systems tailored to the world’s most intricate operations.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/request-demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 hover:from-indigo-500 hover:to-sky-400 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-200 text-base"
            >
              <span>Schedule a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#petroute"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80 shadow-sm transition-all duration-200 text-base"
            >
              <span>Explore PetRoute OS</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>

          {/* Social Proof / Trust metrics */}
          <div className="pt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-medium text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>IATA LAR & DEFRA Compliant Workflows</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-sky-500" />
              <span>Adopted Across 40+ International Hubs</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-indigo-500" />
              <span>Zero-Downtime SaaS Architecture</span>
            </div>
          </div>
        </div>

        {/* Floating Showcase Mockup Preview Card */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500/30 via-sky-500/30 to-purple-500/30 rounded-3xl blur-xl opacity-75 dark:opacity-50" />
          
          <div className="relative rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Top window bar */}
            <div className="px-5 py-3.5 bg-slate-100/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                <span className="ml-2 text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Plane className="w-3 h-3 text-indigo-500" />
                  PetRoute Command Center • Live Relocation Docket #PR-8924 (London LHR → Singapore SIN)
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                In Flight: SQ 317 • 3h to Touchdown
              </div>
            </div>

            {/* Dashboard Snapshot Grid */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Metric 1 */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Pet Profile & Crate</div>
                  <div className="mt-2 flex items-center justify-between">
                    <div>
                      <div className="text-base font-bold text-slate-900 dark:text-white">Barnaby (Golden Retriever)</div>
                      <div className="text-xs text-slate-500">Weight: 28.4 kg • IATA Crate Size #500</div>
                    </div>
                    <span className="text-2xl">🐕</span>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" /> CR-82 Reinforced Crate Verified
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Veterinary & Quarantine</div>
                  <div className="mt-2 flex items-center justify-between">
                    <div>
                      <div className="text-base font-bold text-slate-900 dark:text-white">NParks Import Permit</div>
                      <div className="text-xs text-slate-500">RNATT Titer: 2.45 IU/ml (Passed)</div>
                    </div>
                    <span className="text-2xl">📋</span>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Sembawang Quarantine Bay Reserved
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Pet Parent Live Portal</div>
                  <div className="mt-2 flex items-center justify-between">
                    <div>
                      <div className="text-base font-bold text-slate-900 dark:text-white">Active Portal Session</div>
                      <div className="text-xs text-slate-500">Latest Photo: Heathrow Animal Lounge</div>
                    </div>
                    <span className="text-2xl">📸</span>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-sky-600 dark:text-sky-400 font-medium">
                    <HeartHandshake className="w-3.5 h-3.5" /> Customer viewed update 12m ago
                  </div>
                </div>

              </div>

              {/* Live Timeline Step Flow */}
              <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Live Flight & Handling Milestone Progression
                  </span>
                  <span className="text-xs font-medium text-slate-500">Step 4 of 6 Completed</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300">
                    <div className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400">1. Vet Clearance</div>
                    <div className="text-xs font-semibold mt-0.5 truncate">UK DEFRA Stamped</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300">
                    <div className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400">2. LHR Check-In</div>
                    <div className="text-xs font-semibold mt-0.5 truncate">HARC Comfort Break</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300">
                    <div className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400">3. Cargo Loading</div>
                    <div className="text-xs font-semibold mt-0.5 truncate">Temp: 19°C (AVIH Hold)</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-indigo-500/15 border border-indigo-500/40 text-indigo-700 dark:text-indigo-300 animate-pulse">
                    <div className="text-[10px] uppercase font-bold text-indigo-600 dark:text-indigo-400">4. In-Flight</div>
                    <div className="text-xs font-semibold mt-0.5 truncate">SQ 317 En Route</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400">
                    <div className="text-[10px] uppercase font-bold text-slate-400">5. Changi Clearance</div>
                    <div className="text-xs font-semibold mt-0.5 truncate">Agent Handover</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
