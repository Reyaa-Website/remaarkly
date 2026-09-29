export const siteConfig = {
  name: 'Remaarkly',
  tagline: 'Engineered Software Systems for Mission-Critical Operations',
  description:
    'Remaarkly builds specialized, high-utility SaaS platforms. Our flagship solution, PetRoute, powers pet import, export, and international relocation logistics worldwide.',
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://remaarkly.com',
  links: {
    twitter: 'https://twitter.com/remaarkly',
    linkedin: 'https://linkedin.com/company/remaarkly',
    github: 'https://github.com/remaarkly',
  },
  contact: {
    email: 'hello@remaarkly.com',
    support: 'support@remaarkly.com',
    phone: '+1 (800) 555-PETS',
    address: 'San Francisco, CA & London, UK',
  },
  petroute: {
    name: 'PetRoute',
    badge: 'Flagship SaaS Product',
    headline: 'The Complete Operating System for Pet Relocation & Live Animal Logistics',
    description:
      'Purpose-built for pet import and export agencies, relocation coordinators, and freight specialists. Manage international compliance, instant quotations, airline cargo dispatch, and real-time pet parent updates in one unified workspace.',
    modules: [
      {
        id: 'enquiry',
        title: 'Intelligent Enquiry & Quoting',
        badge: 'Instant Quoting',
        description: 'Capture inbound leads, calculate route-specific pricing, airline container sizes, and generate high-converting digital proposals in seconds.',
        features: [
          'Dynamic multi-currency fee schedules',
          'Automatic IATA CR-82 crate sizing calculation',
          'Route mileage & airline freight estimators',
          'Interactive online quotes with e-signatures',
        ],
        iconName: 'FileText',
      },
      {
        id: 'booking',
        title: 'Smart Booking & Compliance',
        badge: 'Zero-Error Protocols',
        description: 'Turn accepted quotes into structured relocation files with country-specific veterinary milestones, permits, and timeline checklists.',
        features: [
          'Automatic DEFRA, USDA, NParks & DAFF rulebooks',
          'Rabies titer testing (RNATT) countdown tracker',
          'Import & Export permit document generation',
          'Task delegation & milestone deadline alerts',
        ],
        iconName: 'CheckCircle2',
      },
      {
        id: 'operations',
        title: 'Operations & Cargo Manifests',
        badge: 'Live Flight Dispatch',
        description: 'End-to-end flight booking coordination, ground transport dispatching, temperature embargo checks, and airway bill manifest creation.',
        features: [
          'Real-time flight tracking & status webhooks',
          'Airline ambient ramp temperature alerts',
          'Customs clearance packet assembly',
          'Origin & destination ground driver dispatch',
        ],
        iconName: 'Plane',
      },
      {
        id: 'customer-portal',
        title: 'Dedicated Customer Portal',
        badge: 'Pet Parent Peace of Mind',
        description: 'Give pet parents high-trust transparency with live photo updates, milestone progress tracking, and digital document vaults.',
        features: [
          'Live comfort-break photo & video uploads',
          'Step-by-step visual transit timeline',
          'Digital health certificate & permit storage',
          'Direct messaging with relocation coordinator',
        ],
        iconName: 'HeartHandshake',
      },
      {
        id: 'agent-portal',
        title: 'Global Agent & Partner Portal',
        badge: 'Worldwide Network',
        description: 'Seamlessly coordinate with destination customs brokers, overseas handling partners, and quarantine stations with secure data sharing.',
        features: [
          'Secure guest partner access per shipment',
          'B2B cost split & disbursement accounting',
          'Destination customs clearance handover',
          'Standardized global handover notes',
        ],
        iconName: 'Globe',
      },
    ],
  },
};
