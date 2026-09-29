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
  Globe2,
  PawPrint,
  Dog,
  Luggage,
  Camera
} from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Radiant Glowing Orbs */}
      <div className="hero-glow top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-indigo-500/20 via-sky-500/20 to-purple-500/20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-8">
          <Link
            href="#petroute"
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-indigo-200/80 bg-white/80 backdrop-blur-md text-xs font-semibold text-slate-800 shadow-sm hover:border-indigo-400 transition-all duration-200 group"
          >
            <PawPrint className="w-4 h-4 text-indigo-600 animate-pulse" />
            <span className="text-indigo-600 font-bold">Remaarkly PetRoute Spotlight</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-600 group-hover:text-indigo-600 transition-colors flex items-center gap-1">
              Global Pet Relocation Logistics
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Main Title & Tagline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Specialized Software for{' '}
            <span className="text-gradient">Mission-Critical</span>{' '}
            Industries.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Remaarkly architects purpose-built operating software. We replace fragmented spreadsheets and legacy tools with unified platforms tailored to the world’s most intricate operations.
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-800 bg-white border border-slate-200 hover:bg-slate-50 shadow-sm transition-all duration-200 text-base"
            >
              <PawPrint className="w-4 h-4 text-indigo-600" />
              <span>Explore PetRoute OS</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>

          {/* Social Proof / Trust metrics */}
          <div className="pt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <PawPrint className="w-4 h-4 text-indigo-600" />
              <span>50,000+ Pets Transported Safely</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>IATA LAR & DEFRA Compliant Workflows</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-sky-500" />
              <span>Adopted Across 40+ International Hubs</span>
            </div>
          </div>
        </div>

        {/* Floating Showcase Mockup Preview Card */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500/30 via-sky-500/30 to-purple-500/30 rounded-3xl blur-xl opacity-75" />
          
          <div className="relative rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Top window bar */}
            <div className="px-5 py-3.5 bg-slate-100/80 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                <span className="ml-2 text-xs font-medium text-slate-500 flex items-center gap-1.5">
                  <Plane className="w-3 h-3 text-indigo-500" />
                  PetRoute Command Center • Live Relocation Docket #PR-8924 (London LHR → Singapore SIN)
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-[11px] font-semibold text-emerald-600 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                In Flight: SQ 317 • 3h to Touchdown
              </div>
            </div>

            {/* Dashboard Snapshot Grid */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Metric 1 */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center justify-between">
                      <span>Pet Profile & Crate</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 font-bold">IATA LAR</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div>
                        <div className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                          <Dog className="w-4 h-4 text-amber-500 shrink-0" />
                          Barnaby (Golden)
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">Weight: 28.4 kg • IATA Crate #500</div>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                        <PawPrint className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> CR-82 Reinforced Crate Verified
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center justify-between">
                      <span>Veterinary & Quarantine</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 font-bold">100% Cleared</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div>
                        <div className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                          NParks Import Permit
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">RNATT Titer: 2.45 IU/ml (Passed)</div>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-indigo-600 font-medium">
                    <Plane className="w-3.5 h-3.5 shrink-0" /> Sembawang Quarantine Bay Reserved
                  </div>
                </div>

                {/* Metric 3: Live Pet Parent Portal with Photo */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center justify-between">
                      <span>Pet Parent Live Portal</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 font-bold flex items-center gap-1">
                        <Camera className="w-2.5 h-2.5" />
                        Live Photo
                      </span>
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-indigo-200 shrink-0 shadow-xs">
                        <img
                          src="/images/pet-travel-airport.jpg"
                          alt="Barnaby at Heathrow Animal Lounge"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 inset-x-0 bg-slate-900/80 text-[8px] text-white text-center py-0.2 font-medium">
                          LHR Lounge
                        </div>
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-slate-900 truncate">Barnaby's Journey</div>
                        <div className="text-xs text-slate-500 truncate">Heathrow Comfort Break</div>
                        <div className="text-[11px] text-indigo-600 font-semibold flex items-center gap-1 mt-0.5">
                          <PawPrint className="w-3 h-3" /> Photo sent to pet parent
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-sky-600 font-medium">
                    <HeartHandshake className="w-3.5 h-3.5 shrink-0" /> Customer viewed update 12m ago
                  </div>
                </div>

              </div>

              {/* Live Timeline Step Flow */}
              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/60">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Live Flight & Handling Milestone Progression
                  </span>
                  <span className="text-xs font-medium text-slate-500">Step 4 of 6 Completed</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700">
                    <div className="text-[10px] uppercase font-bold text-emerald-600">1. Vet Clearance</div>
                    <div className="text-xs font-semibold mt-0.5 truncate">UK DEFRA Stamped</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700">
                    <div className="text-[10px] uppercase font-bold text-emerald-600">2. LHR Check-In</div>
                    <div className="text-xs font-semibold mt-0.5 truncate">HARC Comfort Break</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700">
                    <div className="text-[10px] uppercase font-bold text-emerald-600">3. Cargo Loading</div>
                    <div className="text-xs font-semibold mt-0.5 truncate">Temp: 19°C (AVIH Hold)</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-indigo-500/15 border border-indigo-500/40 text-indigo-700 animate-pulse">
                    <div className="text-[10px] uppercase font-bold text-indigo-600">4. In-Flight</div>
                    <div className="text-xs font-semibold mt-0.5 truncate">SQ 317 En Route</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-400">
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
