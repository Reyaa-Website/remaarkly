import { 
  ShieldCheck, 
  Zap, 
  Workflow, 
  Lock, 
  Smartphone, 
  Share2, 
  Sliders, 
  FileCheck2, 
  Building,
  PawPrint,
  PlaneTakeoff,
  Camera,
  Luggage,
  Dog
} from 'lucide-react';

export function FeaturesGrid() {
  const features = [
    {
      icon: PawPrint,
      title: 'Automated IATA Compliance Engine',
      description: 'Zero human guesswork for crate sizing (CR-82), ventilation requirements, and breed-specific airline embargoes.',
    },
    {
      icon: Lock,
      title: 'Enterprise Role-Based Permissions',
      description: 'Granular access controls for relocation coordinators, flight dispatchers, accountants, and destination agents.',
    },
    {
      icon: PlaneTakeoff,
      title: 'Multi-Leg Transport Workflows',
      description: 'Coordinate vet visits, origin ground transport, air cargo handling, customs clearance, and quarantine handover seamlessly.',
    },
    {
      icon: Camera,
      title: 'Mobile Photo & Milestone App',
      description: 'Ground staff and airport runners can snap comfort-break photos directly into the docket for instant client notification.',
    },
    {
      icon: Share2,
      title: 'Multi-Currency Global Accounting',
      description: 'Invoice clients in USD/GBP/EUR while settling overseas destination handling agent disbursements in local currency.',
    },
    {
      icon: Zap,
      title: 'Direct API & Webhook Integrations',
      description: 'Connect PetRoute into your existing accounting software, website contact forms, or custom freight management systems.',
    },
  ];

  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold tracking-wider uppercase text-indigo-600">
            Engineered For Reliability
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built for the rigorous demands of international live logistics
          </p>
          <p className="text-sm sm:text-base text-slate-600">
            Every module in PetRoute is designed alongside veteran pet transport managers to eliminate errors and simplify scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-slate-200/80 bg-white hover:shadow-lg transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
