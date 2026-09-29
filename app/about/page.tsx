import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Building2, 
  ShieldCheck, 
  HeartHandshake, 
  Sparkles, 
  Target, 
  Compass, 
  ArrowRight,
  Plane,
  Layers,
  Users2,
  PawPrint,
  Dog,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Remaarkly | Family-Founded Software Engineering',
  description:
    'Learn about Remaarkly, a family-founded software engineering laboratory building specialized software engines for complex industries, beginning with our flagship product PetRoute.',
};

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Obsessive Domain Depth',
      description: 'We don’t build generic CRUD apps. We embed ourselves in the exact regulations, workflows, and terminology of the industries we serve.',
    },
    {
      icon: ShieldCheck,
      title: 'Zero-Tolerance for Fragility',
      description: 'When software manages live animal journeys or compliance-critical freight, downtime or data inconsistency is unacceptable.',
    },
    {
      icon: HeartHandshake,
      title: 'Long-Term Stewardship',
      description: 'As a family-founded company, we are building for generational endurance, sustainable growth, and genuine partner relationships rather than short-term hype.',
    },
    {
      icon: Sparkles,
      title: 'Frictionless Experience',
      description: 'Complex logic behind the scenes should produce radical simplicity on the surface for operators, customers, and global partners.',
    },
  ];

  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <PawPrint className="w-3.5 h-3.5" />
            Our Story & Principles
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            Engineering clarity for the world’s most <span className="text-gradient">complex operations</span>.
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            Remaarkly is an independent, family-founded software company dedicated to building specialized software architectures that solve intricate logistics and regulatory challenges.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Why We Started Remaarkly
            </h2>

            <p className="text-slate-600 leading-relaxed text-base">
              Remaarkly was founded by a family of engineers and domain specialists who saw first-hand how legacy horizontal software fails businesses operating in specialized sectors.
            </p>

            <p className="text-slate-600 leading-relaxed text-base">
              Too many companies are forced to stitch together generic CRMs, unencrypted spreadsheets, and rigid ERPs that know nothing about veterinary timelines, airline container requirements, or country-specific import regulations.
            </p>

            <p className="text-slate-600 leading-relaxed text-base">
              We started Remaarkly with a simple conviction: <em>build software that speaks the exact language of the industry from the very first click</em>.
            </p>

            <div className="p-4 rounded-xl bg-indigo-50/80 border border-indigo-100 text-sm text-indigo-900 font-medium">
              💡 As an independent, family-owned business, our roadmap is guided by customer success and product longevity, not external vanity metrics.
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl space-y-6 relative overflow-hidden">
              
              {/* Pet Travel Photo Banner */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-slate-200 bg-slate-100">
                <img
                  src="/images/pet-vet-compliance.jpg"
                  alt="Veterinarian performing pet compliance inspection"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-indigo-600 text-white">
                      <PawPrint className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-bold tracking-tight">IATA Live Animals (LAR) Compliant</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-sky-300">
                    40+ Global Hubs
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-sky-500 text-white flex items-center justify-center shadow-md">
                  <PawPrint className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Flagship Solution: PetRoute</h3>
                  <p className="text-xs text-slate-500">Live Animal Logistics & Compliance OS</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                PetRoute is our first market-proven product. Built from the ground up for international pet relocation agencies, it connects quote generation, DEFRA/USDA rulebooks, live flight dispatch, and dedicated customer transparency portals into a single pane of glass.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">5 Modules</div>
                  <div className="text-slate-500">Enquiry to Handover</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">Global Reach</div>
                  <div className="text-slate-500">40+ International Hubs</div>
                </div>
              </div>

              <Link
                href="/petroute"
                className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 hover:underline pt-2"
              >
                <span>Learn more about PetRoute</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Guiding Principles Grid */}
        <div id="philosophy" className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Core Principles
            </h2>
            <h3 className="text-3xl font-extrabold text-slate-900">
              How We Build at Remaarkly
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-8 rounded-2xl border border-slate-200/80 bg-white hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {v.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center rounded-3xl bg-slate-100 border border-slate-200 p-10 sm:p-14">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Want to partner with us or see PetRoute in action?
          </h3>
          <p className="text-slate-600 max-w-xl mx-auto mb-6 text-sm sm:text-base">
            We are always eager to collaborate with progressive freight specialists and industry leaders.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/request-demo"
              className="px-6 py-3 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-500/20 text-sm"
            >
              Request a Demo
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl font-semibold text-slate-800 bg-white border border-slate-200 text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
