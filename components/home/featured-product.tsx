import Link from 'next/link';
import { 
  ArrowRight, 
  Sparkles, 
  FileText, 
  CheckCircle2, 
  PlaneTakeoff, 
  HeartHandshake, 
  Globe, 
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Building2,
  PawPrint,
  Dog,
  Cat,
  Luggage,
  TicketsPlane
} from 'lucide-react';

export function FeaturedProductSection() {
  const modules = [
    {
      icon: TicketsPlane,
      title: 'Enquiry Management',
      desc: 'Capture & track inbound customer enquiries with instant quote calculations.',
    },
    {
      icon: ShieldCheck,
      title: 'Booking & Compliance',
      desc: 'Manage global import and export workflows end-to-end with regulatory compliance.',
    },
    {
      icon: PlaneTakeoff,
      title: 'Operations & Cargo',
      desc: 'Internal team view of all live dockets, flight schedules, and customs tasks.',
    },
    {
      icon: PawPrint,
      title: 'Pet Parent Portal',
      desc: 'Pet parents track relocation progress and photo updates in real time.',
    },
    {
      icon: Globe,
      title: 'Agent & Partner Portal',
      desc: 'Referral agents and destination partners submit leads and track bookings.',
    },
  ];

  return (
    <section id="featured-product" className="py-24 relative overflow-hidden bg-slate-50/70 border-y border-slate-200/80">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-gradient-to-r from-indigo-500/10 via-sky-500/10 to-purple-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider shadow-xs">
            <PawPrint className="w-3.5 h-3.5" />
            Featured Flagship Platform
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            PetRoute — <span className="text-gradient">Pet Logistics OS</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our flagship SaaS platform engineered specifically for Pet Import & Export Management companies, customs brokers, and international relocation coordinators.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Main Card */}
          <div className="md:col-span-2 lg:col-span-1 p-8 rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white border border-indigo-500/30 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/10 text-[11px] font-semibold text-indigo-200">
                <PawPrint className="w-3 h-3 text-sky-400" />
                Single Unified Workspace
              </div>
              <h3 className="text-2xl font-bold leading-tight">
                Everything your pet transport agency needs to scale.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                PetRoute eliminates disconnected spreadsheets and manual communication by connecting your sales, compliance, operations, customers, and global agent network.
              </p>

              {/* Photo spotlight banner */}
              <div className="relative h-32 rounded-2xl overflow-hidden border border-white/15 shadow-md group">
                <img
                  src="/images/pet-family-arrival.jpg"
                  alt="Pet arrival reunion at destination"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="font-semibold text-white flex items-center gap-1.5 text-[11px]">
                    <PawPrint className="w-3 h-3 text-sky-400" />
                    50,000+ Safe Relocations
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/90 text-white font-bold">
                    Zero Rejections
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <Link
                href="/petroute"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-white hover:bg-slate-100 transition-all text-sm shadow-md"
              >
                <span>Learn More About PetRoute</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/request-demo?product=PetRoute"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all text-xs"
              >
                <span>Request a Demo (Pre-selected)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-indigo-300" />
              </Link>
            </div>
          </div>

          {/* Module Mini Cards */}
          <div className="md:col-span-2 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {modules.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-indigo-500/40 transition-all group shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900">
                      {m.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>

                  <div className="pt-3">
                    <Link
                      href="/petroute"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-indigo-600 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Explore module</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
