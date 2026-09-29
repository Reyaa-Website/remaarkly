'use client';

import * as React from 'react';
import Link from 'next/link';
import { 
  FileText, 
  CheckCircle2, 
  Plane, 
  HeartHandshake, 
  Globe, 
  ArrowRight, 
  Check, 
  Sparkles,
  Shield,
  Clock,
  Building2,
  Lock,
  ChevronRight,
  ExternalLink,
  Laptop,
  PawPrint,
  Dog,
  Cat,
  Luggage,
  Camera
} from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function PetRouteShowcase() {
  const [activeTab, setActiveTab] = React.useState('enquiry');

  const modules = [
    {
      id: 'enquiry',
      title: 'Enquiry & Quoting',
      badge: 'Dynamic Rates',
      icon: FileText,
      image: '/images/cat-travel-airport.jpg',
      petTag: 'In-Cabin & Cargo Approved',
      tagline: 'Generate accurate, route-optimized pet relocation quotes in seconds',
      description: 'Stop spending 45 minutes manually calculating crate sizes, airline freight tariffs, and vet fees. PetRoute calculates IATA Container Requirement 1 crate specs and produces interactive quotes that clients can accept online with e-signatures.',
      features: [
        'Automatic IATA CR-82 crate dimension & volume calculator',
        'Multi-currency dynamic freight & vet cost breakdown',
        'Instant branded quote PDFs & interactive client accept links',
        'Custom margin rules & surcharges for high-season routing',
      ],
      preview: {
        title: 'Instant Quote Generator #QT-7721',
        subtitle: 'Route: New York (JFK) → Frankfurt (FRA) • Pet: 1x British Shorthair (4.2 kg)',
        highlight: 'Calculated Crate: IATA Series 200 In-Cabin • Margin: 34%',
        items: [
          { label: 'Lufthansa Cargo Live Animal Freight', val: '$1,240.00' },
          { label: 'USDA APHIS Endorsement Fee', val: '$180.00' },
          { label: 'JFK ARC Comfort Care & Vet Check', val: '$220.00' },
          { label: 'Frankfurt Airport Border Inspection', val: '€195.00' },
        ],
        total: '$2,150.00 USD',
      },
    },
    {
      id: 'booking',
      title: 'Booking & Compliance',
      badge: 'Zero-Error Protocols',
      icon: CheckCircle2,
      image: '/images/pet-vet-compliance.jpg',
      petTag: 'Veterinary Clearance Active',
      tagline: 'Never miss a rabies titer window or government permit deadline',
      description: 'Dynamic veterinary checklists adapted to the destination country requirements (USDA, DEFRA, Singapore NParks, Australia DAFF, Japan MAFF). Automated timers alert coordinators of titer test waiting windows.',
      features: [
        'Built-in regulatory rulebooks for 120+ destinations',
        'Rabies Blood Titer (RNATT) countdown & quarantine waiver tracking',
        'Automated document checklists for microchip, vet certs & permits',
        'Staff task delegation and multi-stage verification signoffs',
      ],
      preview: {
        title: 'Compliance Milestone Tracker #BK-4019',
        subtitle: 'Destination: Sydney, Australia (DAFF Strict Protocol)',
        highlight: 'RNATT 180-Day Waiting Period: Active (Day 114 / 180)',
        items: [
          { label: 'ISO 11784/11785 Microchip Verification', val: 'Verified ✓' },
          { label: 'RNATT Blood Sample & Lab Report', val: '0.98 IU/ml (Passed) ✓' },
          { label: 'DAFF Import Permit Application', val: 'Granted (#AU-882) ✓' },
          { label: 'Mickleham Quarantine Facility Slot', val: 'Confirmed (Bay 14) ✓' },
        ],
        total: 'All 7 Pre-Flight Gates Cleared',
      },
    },
    {
      id: 'operations',
      title: 'Operations & Cargo',
      badge: 'Live Flight Dispatch',
      icon: Plane,
      image: '/images/pet-travel-airport.jpg',
      petTag: 'Airport Animal Reception Center',
      tagline: 'Coordinate air cargo, ground transit, and temperature safety',
      description: 'PetRoute integrates directly with airline flight schedules and temperature embargo data. Track cargo booking references (AWB), dispatch ground drivers for airport runs, and compile customs clearance packets in one click.',
      features: [
        'Live flight departure/arrival tracking & webhook status updates',
        'Airline ramp ambient temperature safety threshold warnings',
        'Ground transport driver dispatching with GPS checkpoint capture',
        '1-Click customs clearance packet generation with all barcodes',
      ],
      preview: {
        title: 'Operations & Cargo Manifest #OPS-9932',
        subtitle: 'Flight: Emirates SkyCargo EK 008 (Dubai DXB Transit)',
        highlight: 'Hold Temperature: 21°C • Layover ARC Confirmed',
        items: [
          { label: 'Air Waybill (AWB) #176-90812344', val: 'Issued ✓' },
          { label: 'DXB Animal Care Oasis Booking', val: 'Confirmed (3h Layover)' },
          { label: 'Origin Ground Courier (Van #04)', val: 'Picked Up (08:30 AM)' },
          { label: 'Destination Customs Agent Packet', val: 'Dispatched via Portal' },
        ],
        total: 'Status: Aircraft Boarded',
      },
    },
    {
      id: 'customer-portal',
      title: 'Customer Portal',
      badge: 'Pet Parent Peace of Mind',
      icon: HeartHandshake,
      image: '/images/pet-family-arrival.jpg',
      petTag: 'Airport Lounge Reunion Verified',
      tagline: 'Give anxious pet parents 24/7 transparent live updates',
      description: 'Reduce inbound phone calls by 70%. Pet parents get a modern, mobile-friendly portal where handlers post comfort-break photos, flight tracking updates, and verified health paperwork.',
      features: [
        'Live comfort-break photo feed & transit status updates',
        'Interactive step-by-step relocation progress timeline',
        'Secure digital document vault (health certs, permits, receipts)',
        'Built-in direct messaging with dedicated relocation coordinator',
      ],
      preview: {
        title: 'Pet Parent Portal: Pip & Milo’s Journey',
        subtitle: 'Clients: Sarah & Tom Jenkins • Coordinator: Emma Watson',
        highlight: 'Latest Update: "Pip arrived happily at the VIP lounge!"',
        items: [
          { label: 'Photo Uploaded from Arrival Lounge', val: '📸 View 4 Photos' },
          { label: 'Flight Status (BA 182 to LHR)', val: 'Landed (Gate Opened)' },
          { label: 'Digital Import Permit PDF', val: 'Available in Vault' },
          { label: 'Direct Coordinator Support Chat', val: 'Online (Avg reply 4m)' },
        ],
        total: 'Customer Satisfaction Rating: 5.0 ★★★★★',
      },
    },
    {
      id: 'agent-portal',
      title: 'Agent & Partner Portal',
      badge: 'Global Partner Network',
      icon: Globe,
      image: '/images/pet-travel-airport.jpg',
      petTag: 'Global Customs Broker Network',
      tagline: 'Collaborate seamlessly with overseas handling partners',
      description: 'Grant restricted, secure access to your network of origin and destination customs brokers, quarantine liaisons, and airline cargo handlers worldwide.',
      features: [
        'Shipment-specific secure agent guest access with zero setup',
        'Destination customs clearance handover documents & airway bills',
        'B2B cost settlement & disbursement expense tracking',
        'Global network directory with rating and reliability metrics',
      ],
      preview: {
        title: 'Global Agent Collaboration Hub',
        subtitle: 'Partner: Tokyo Paws Logistics (NRT Clearing Agent)',
        highlight: 'Consignment: 2x Golden Retrievers (AWB 016-7738291)',
        items: [
          { label: 'Japan Animal Quarantine Service (AQS) Packet', val: 'Uploaded & Approved' },
          { label: 'Narita Customs Terminal 2 Handover', val: 'Scheduled (14:00 JST)' },
          { label: 'Local Import Fee Disbursement', val: '¥85,000 Invoiced' },
          { label: 'Doorstep Delivery to Minato-ku', val: 'Assigned Driver Tanaka' },
        ],
        total: 'Handover Completed Successfully',
      },
    },
  ];

  const currentModule = modules.find((m) => m.id === activeTab) || modules[0];

  return (
    <section id="petroute" className="py-24 relative overflow-hidden bg-slate-50/50">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Flagship SaaS Product
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Meet <span className="text-gradient">PetRoute</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            The comprehensive Operating System engineered specifically for Pet Import, Export, and Relocation Management companies worldwide.
          </p>
        </div>

        {/* 5-Module Tab Switcher */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {modules.map((m) => {
            const Icon = m.icon;
            const isActive = m.id === activeTab;
            return (
              <button
                key={m.id}
                onClick={() => setActiveTab(m.id)}
                type="button"
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 border ${
                  isActive
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/25'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-indigo-600'}`} />
                <span>{m.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Module Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl border border-slate-200/90 bg-white/95 p-6 sm:p-10 shadow-xl backdrop-blur-xl">
          
          {/* Left Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-600 text-xs font-semibold">
              {currentModule.badge}
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
              {currentModule.tagline}
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {currentModule.description}
            </p>

            {/* Feature bullets */}
            <div className="space-y-3 pt-2">
              {currentModule.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/request-demo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-sky-500 hover:from-indigo-500 hover:to-sky-400 shadow-md shadow-indigo-500/20 transition-all text-sm"
              >
                <span>Request {currentModule.title} Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Live Interactive UI Mockup */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Live Pet Travel Photography Card */}
            <div className="relative h-48 sm:h-52 rounded-2xl overflow-hidden border border-slate-200/90 shadow-md group">
              <img
                src={currentModule.image}
                alt={currentModule.preview.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
              
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/95 text-slate-900 backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                  <PawPrint className="w-3.5 h-3.5 text-indigo-600" />
                  <span>{currentModule.petTag}</span>
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                <div className="font-semibold flex items-center gap-1.5 truncate max-w-[260px] sm:max-w-sm">
                  <Plane className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="truncate">{currentModule.preview.subtitle}</span>
                </div>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500 text-white font-bold shrink-0">
                  IATA Verified
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 shadow-md overflow-hidden">
              
              {/* Header */}
              <div className="px-4 py-3 bg-slate-200/70 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-400/80" />
                  <span className="ml-1 text-xs font-semibold text-slate-700 truncate max-w-[200px] sm:max-w-xs">
                    {currentModule.preview.title}
                  </span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 border border-indigo-500/20">
                  Live Engine
                </span>
              </div>

              {/* Body */}
              <div className="p-5 space-y-4">
                <div className="text-xs text-slate-500 font-medium">
                  {currentModule.preview.subtitle}
                </div>

                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-700">
                  ⚡ {currentModule.preview.highlight}
                </div>

                {/* List items */}
                <div className="space-y-2">
                  {currentModule.preview.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-white border border-slate-200/80 flex items-center justify-between text-xs"
                    >
                      <span className="text-slate-600 font-medium">{item.label}</span>
                      <span className="font-semibold text-slate-900">{item.val}</span>
                    </div>
                  ))}
                </div>

                {/* Footer summary */}
                <div className="pt-2 flex items-center justify-between border-t border-slate-200 text-xs">
                  <span className="text-slate-500 font-medium">Summary Status</span>
                  <span className="font-bold text-emerald-600">{currentModule.preview.total}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
