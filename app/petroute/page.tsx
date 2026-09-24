import { Metadata } from 'next';
import Link from 'next/link';
import { 
  FileText, 
  CheckCircle2, 
  Plane, 
  HeartHandshake, 
  Globe, 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  ShieldCheck, 
  LogIn, 
  Building2, 
  Clock, 
  Check, 
  DollarSign,
  Users2,
  Lock,
  Workflow
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'PetRoute — Pet Import & Export Management, Simplified',
  description:
    'PetRoute is the complete SaaS platform for pet relocation agencies and import/export operators. Manage enquiries, bookings, operations, customer portals, and agent referrals in one place.',
};

export default function PetRoutePage() {
  const modules = [
    {
      id: 'enquiry',
      title: 'Enquiry Management',
      tagline: 'Capture and track new customer enquiries',
      icon: FileText,
      description:
        'Capture inbound leads directly from your website, calculate route tariffs and crate sizing in seconds, and automatically generate professional quote proposals with e-signatures.',
      bullets: [
        'Instant multi-currency quote generator',
        'Automatic IATA CR-82 crate calculation',
        'Automated lead follow-ups & conversion analytics',
        'Direct webform API & email intake sync',
      ],
      badge: 'Module 1',
    },
    {
      id: 'booking',
      title: 'Booking Management',
      tagline: 'Manage import/export bookings end-to-end',
      icon: CheckCircle2,
      description:
        'Turn accepted quotes into structured relocation dockets. Access country-specific veterinary milestone checklists, import/export permit trackers, and regulatory rulebooks.',
      bullets: [
        'DEFRA, USDA, NParks & DAFF rulebook checklists',
        'Rabies blood titer (RNATT) 180-day countdown timers',
        'Microchip & veterinary health certificate validation',
        'Stage-by-stage verification task delegation',
      ],
      badge: 'Module 2',
    },
    {
      id: 'operations',
      title: 'Operations Dashboard',
      tagline: 'Internal team view of all active bookings and tasks',
      icon: Plane,
      description:
        'Give your operations team total visibility over every live pet journey. Monitor flight schedules, cargo airway bills (AWB), airport ground transit, and temperature safety thresholds.',
      bullets: [
        'Live flight departure & arrival tracking webhooks',
        'Airline ramp ambient temperature alerts & embargoes',
        '1-Click customs clearance documentation packets',
        'Ground transport driver dispatching with GPS milestones',
      ],
      badge: 'Module 3',
    },
    {
      id: 'customer-portal',
      title: 'Customer Portal',
      tagline: 'Customers track their pet’s relocation status in real time',
      icon: HeartHandshake,
      description:
        'Give pet parents complete peace of mind with a branded, mobile-responsive portal. Share comfort-break photos, flight milestones, and verified travel documents.',
      bullets: [
        'Live comfort-break photo & video updates',
        'Step-by-step interactive transit progression timeline',
        'Digital document vault for health certs and permits',
        'Direct in-app messaging with relocation coordinators',
      ],
      badge: 'Module 4',
    },
    {
      id: 'agent-portal',
      title: 'Agent Portal',
      tagline: 'Referral agents submit enquiries and track their bookings',
      icon: Globe,
      description:
        'Collaborate with overseas handling partners, local clearing brokers, and referral agents. Share customs documents, track consignment milestones, and settle disbursements.',
      bullets: [
        'Secure restricted partner guest access per shipment',
        'Origin & destination customs clearance handovers',
        'B2B cost sharing & multi-currency disbursement tracking',
        'Global agency directory with partner ratings',
      ],
      badge: 'Module 5',
    },
  ];

  const targetAudiences = [
    {
      icon: Building2,
      title: 'Pet Relocation Agencies',
      description:
        'Full-service international pet moving companies managing complex door-to-door relocations across multiple continents.',
    },
    {
      icon: Plane,
      title: 'Import & Export Operators',
      description:
        'Specialized live animal cargo handlers, airport transit lounges, and customs brokers facilitating international clearance.',
    },
    {
      icon: Workflow,
      title: 'Freight Forwarding Specialists',
      description:
        'Logistics firms expanding their vertical capabilities into high-compliance, temperature-regulated live animal transport.',
    },
  ];

  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-grid-pattern min-h-screen">
      
      {/* Radiant Glowing Orbs */}
      <div className="hero-glow top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-indigo-500/20 via-sky-500/20 to-teal-500/20 dark:from-indigo-600/30 dark:via-sky-500/25 dark:to-teal-500/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-6 mb-20">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-xs font-semibold text-indigo-700 dark:text-indigo-300 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span>Product Overview • Powered by Remaarkly</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            PetRoute — Pet Import & Export Management,{' '}
            <span className="text-gradient">simplified</span>.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            The dedicated SaaS operating system for pet relocation agencies and live animal transport coordinators. Eliminate spreadsheet chaos and manage enquiries, bookings, flight operations, customer portals, and partner agents in one unified platform.
          </p>

          {/* Action Buttons: Request Demo (with ?product=PetRoute) + Login (external) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/request-demo?product=PetRoute"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 hover:from-indigo-500 hover:to-sky-400 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all text-base"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://app.remaarkly.com/login"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-base"
            >
              <LogIn className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>PetRoute Login</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* Trust badges */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>IATA Live Animals Regulations (LAR) Compliant</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-indigo-500" />
              <span>Zero-Downtime SaaS Architecture</span>
            </div>
          </div>
        </div>

        {/* 2. Five Core Modules Section */}
        <div className="space-y-12 mb-28">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Complete Feature Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Five purpose-built modules in one workspace
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Every step of the pet relocation lifecycle — from the first web enquiry to final doorstep delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {modules.map((mod, idx) => {
              const Icon = mod.icon;
              const isHeroCard = idx === 0 || idx === 1;

              return (
                <div
                  key={mod.id}
                  className={`rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-950 p-8 shadow-lg hover:border-indigo-500/40 transition-all flex flex-col justify-between ${
                    idx < 2 ? 'lg:col-span-6' : 'lg:col-span-4'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800/60 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400">
                        {mod.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {mod.title}
                      </h3>
                      <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                        {mod.tagline}
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {mod.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                      {mod.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link
                      href={`/request-demo?product=PetRoute&module=${mod.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
                    >
                      <span>Explore {mod.title} in demo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Who It's For Section */}
        <div className="mb-28 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 p-8 sm:p-14">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Industry Fit
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Who PetRoute is built for
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Engineered specifically for teams navigating live animal transport regulations and freight forwarding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {targetAudiences.map((aud, idx) => {
              const Icon = aud.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80 space-y-4 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {aud.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {aud.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Pricing Section (No numbers shown, private per-pet pricing) */}
        <div className="mb-28 max-w-4xl mx-auto">
          <div className="rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6 text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-indigo-200">
                <DollarSign className="w-3.5 h-3.5 text-indigo-300" />
                Custom Tiered Plans
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Simple, transparent pricing based on your shipment volume
              </h2>

              <p className="text-sm sm:text-base text-indigo-200/90 max-w-xl mx-auto leading-relaxed">
                Because pet relocation requirements vary widely based on domestic versus international routes, airline dockets, and partner portal seats, we provide tailored licensing with zero hidden costs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left text-xs">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="font-bold text-white">Starter Agency</div>
                  <div className="text-slate-400">Up to 25 shipments/mo</div>
                </div>
                <div className="p-4 rounded-xl bg-white/10 border border-indigo-400/40 space-y-1">
                  <div className="font-bold text-indigo-300">Growth Specialist</div>
                  <div className="text-slate-300">25 - 100 shipments/mo</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="font-bold text-white">Global Enterprise</div>
                  <div className="text-slate-400">100+ shipments & API</div>
                </div>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact?product=PetRoute"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-slate-950 bg-white hover:bg-slate-100 shadow-lg text-sm"
                >
                  <span>Request Custom Pricing</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/request-demo?product=PetRoute"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 text-sm"
                >
                  <span>Schedule Platform Demo</span>
                  <ArrowUpRight className="w-4 h-4 text-indigo-300" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* 5. Bottom Conversion Banner */}
        <div className="rounded-3xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Ready to streamline your pet relocation operations?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Join leading relocation agencies and freight forwarders using PetRoute.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/request-demo?product=PetRoute"
              className="px-6 py-3 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md text-xs sm:text-sm"
            >
              Request a Demo
            </Link>
            <a
              href="https://app.remaarkly.com/login"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm flex items-center gap-1.5"
            >
              <span>Login</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
