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
  Users
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Request a Demo | PetRoute by Remaarkly',
  description:
    'Experience how PetRoute streamlines international pet relocation, DEFRA/USDA compliance, automated quotations, and customer portals. Schedule a 1-on-1 walkthrough.',
};

export default function RequestDemoPage() {
  const agendaItems = [
    {
      title: 'Automated IATA Crate Sizing & Instant Quotes',
      desc: 'Calculate precise crate specifications (CR-82) and route costs in seconds.',
    },
    {
      title: 'Dynamic Country Regulatory Checklists',
      desc: 'See how automated rules keep rabies titer tests and health certs on track.',
    },
    {
      title: 'Air Cargo & Live Flight Dispatch Operations',
      desc: 'Coordinate airline bookings, temperature limits, and customs packets.',
    },
    {
      title: 'Branded Pet Parent Transparency Portal',
      desc: 'Provide comfort-break photo feeds, flight tracking, and document vaults.',
    },
    {
      title: 'Global Agent Collaboration Network',
      desc: 'Grant secure partner access to overseas clearing agents & quarantine liaisons.',
    },
  ];

  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-grid-pattern min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            Live 1-on-1 Walkthrough
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            See <span className="text-gradient">PetRoute</span> in action.
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Discover why international pet relocation agencies and freight forwarders trust PetRoute to manage every stage of live animal transit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Interactive Demo Request Form */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-slate-950/90 p-6 sm:p-10 shadow-xl backdrop-blur-xl">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Schedule Your Walkthrough</h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Tell us about your agency and monthly volume so we can tailor the live environment to your routes.
              </p>
            </div>
            <DemoRequestForm />
          </div>

          {/* Right: What You'll Discover */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 shadow-lg space-y-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                What We’ll Cover in 30 Minutes
              </h3>

              <div className="space-y-4">
                {agendaItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">{item.title}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
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
                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-white">
                  GL
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
