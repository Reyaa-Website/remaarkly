import { Metadata } from 'next';
import { ContactForm } from '@/components/contact/contact-form';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ShieldCheck,
  Building,
  Sparkles
} from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Contact Remaarkly | Get in Touch with Our Team',
  description:
    'Have a question about PetRoute or the Remaarkly platform? Send us a message and our product team will be in touch.',
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-grid-pattern min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            Contact & Support
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Let’s build something <span className="text-gradient">remarkable</span> together.
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Have a question about PetRoute, customized enterprise onboarding, or technical integrations? Reach out below and our engineering & product team will reply promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Form Card */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-slate-950/90 p-6 sm:p-10 shadow-xl backdrop-blur-xl">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Send Us a Message</h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Fill out the form below. For product inquiries, our default focus is our flagship PetRoute platform.
              </p>
            </div>
            <ContactForm />
          </div>

          {/* Right: Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Info */}
            <div className="p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 shadow-lg space-y-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4">
                Direct Channels
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800/60 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">General Enquiries</div>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-xs">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800/60 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Telephone Support</div>
                    <span className="text-slate-600 dark:text-slate-400 text-xs">{siteConfig.contact.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800/60 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Support SLA</div>
                    <span className="text-slate-600 dark:text-slate-400 text-xs">Average response time under 2 business hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/40 via-slate-900 to-slate-950 border border-indigo-500/20 text-xs text-slate-300 space-y-3">
              <div className="flex items-center gap-2 font-bold text-white text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Enterprise-Grade Data Security
              </div>
              <p className="leading-relaxed text-slate-400">
                All client communications, customer portal data, and pet health records are protected with 256-bit AES encryption at rest and in transit.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
