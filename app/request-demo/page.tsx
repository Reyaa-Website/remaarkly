import { Metadata } from 'next';
import { DemoRequestForm } from '@/components/demo/demo-request-form';
import { 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Plane, 
  ShieldCheck, 
  FileText, 
  HeartHandshake,
  Users,
  PawPrint,
  Dog,
  Cat,
  Camera,
  Globe
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Request a Demo | PetRoute by Remaarkly',
  description:
    'Experience how PetRoute streamlines international pet relocation, DEFRA/USDA compliance, automated quotations, and customer portals. Schedule a 1-on-1 walkthrough.',
};

export default function RequestDemoPage() {
  const agendaItems = [
    {
      icon: Dog,
      title: 'Automated IATA Crate Sizing & Instant Quotes',
      desc: 'Calculate precise crate specifications (CR-82) and route costs in seconds.',
    },
    {
      icon: ShieldCheck,
      title: 'Dynamic Country Regulatory Checklists',
      desc: 'See how automated rules keep rabies titer tests and health certs on track.',
    },
    {
      icon: Plane,
      title: 'Air Cargo & Live Flight Dispatch Operations',
      desc: 'Coordinate airline bookings, temperature limits, and customs packets.',
    },
    {
      icon: Camera,
      title: 'Branded Pet Parent Transparency Portal',
      desc: 'Provide comfort-break photo feeds, flight tracking, and document vaults.',
    },
    {
      icon: Globe,
      title: 'Global Agent Collaboration Network',
      desc: 'Grant secure partner access to overseas clearing agents & quarantine liaisons.',
    },
  ];

  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-grid-pattern min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <PawPrint className="w-3.5 h-3.5" />
            Live 1-on-1 Walkthrough
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            See <span className="text-gradient">PetRoute</span> in action.
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            Discover why international pet relocation agencies and freight forwarders trust PetRoute to manage every stage of live animal transit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Interactive Demo Request Form */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-200/80 bg-white/95 p-6 sm:p-10 shadow-xl backdrop-blur-xl">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Schedule Your Walkthrough</h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Tell us about your agency and monthly volume so we can tailor the live environment to your routes.
              </p>
            </div>
            <DemoRequestForm />
          </div>

          {/* Right: What You'll Discover */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual Photo Card */}
            <div className="rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-lg p-3">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-slate-100">
                <img
                  src="/images/cat-travel-airport.jpg"
                  alt="Pet Travel In-Cabin Comfort"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <div className="flex items-center gap-1.5 text-xs font-semibold">
                    <PawPrint className="w-3.5 h-3.5 text-indigo-300" />
                    <span>Live Comfort Updates in Action</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    Live Demo Ready
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl border border-slate-200/80 bg-white shadow-lg space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                What We’ll Cover in 30 Minutes
              </h3>

              <div className="space-y-4">
                {agendaItems.map((item, idx) => {
                  const AgendaIcon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 text-sm">
                      <div className="w-6 h-6 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                        <AgendaIcon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">{item.title}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 border border-indigo-500/30 text-white space-y-4">
              <div className="flex items-center gap-1 text-amber-400 text-sm">
                ★★★★★
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                "PetRoute transformed our transatlantic pet relocations. We cut quotation turnaround from 40 minutes down to 90 seconds, and our pet parents love the live photo updates."
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/10 text-xs">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center font-bold text-white shadow-sm">
                  <PawPrint className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-bold">Global Animal Logistics</div>
                  <div className="text-slate-400 text-[11px]">Relocation Director, London LHR</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
