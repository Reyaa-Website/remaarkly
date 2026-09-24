import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Sparkles, CheckCircle } from 'lucide-react';

export function CtaBanner() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-indigo-500/30 bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 p-8 sm:p-14 text-white shadow-2xl">
          
          {/* Radiant Glow Background */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-indigo-200">
              <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
              Transform Your Pet Relocation Logistics
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Ready to automate your pet logistics operations?
            </h2>

            <p className="text-base sm:text-lg text-indigo-200/90 leading-relaxed">
              Join leading pet transport agencies, freight forwarders, and relocation coordinators worldwide. See PetRoute in action with a customized 1-on-1 walkthrough.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-indigo-200 pt-2">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Zero setup onboarding fee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Full historical data migration</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Dedicated account manager</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/request-demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-950 bg-white hover:bg-slate-100 shadow-xl transition-all text-base"
              >
                <span>Request a Tailored Demo</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all text-base"
              >
                <span>Speak to Product Specialist</span>
                <ArrowUpRight className="w-4 h-4 text-indigo-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
