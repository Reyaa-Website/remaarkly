import Link from 'next/link';
import { Logo } from '@/components/logo';
import { 
  ArrowUpRight, 
  ShieldCheck, 
  Heart, 
  Sparkles,
  Mail,
  Phone,
  MapPin,
  PawPrint,
  PlaneTakeoff
} from 'lucide-react';
import { TwitterIcon, LinkedinIcon, GithubIcon } from '@/components/icons';
import { siteConfig } from '@/lib/site-config';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/80 bg-slate-50/50 backdrop-blur-sm relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-indigo-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-200">
          
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <Logo size="sm" />
              <span className="font-bold text-xl tracking-tight text-slate-900 flex items-center gap-1.5">
                Remaarkly
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block"></span>
              </span>
            </Link>

            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              Engineering purpose-built SaaS architectures for high-complexity industries. Flagship platform <strong className="text-slate-900 font-semibold">PetRoute</strong> powers end-to-end pet import and export logistics worldwide.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                All Systems Operational
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:bg-slate-100 transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:bg-slate-100 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:bg-slate-100 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: PetRoute Modules */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-slate-900 mb-4">
              PetRoute Modules
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/petroute" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Enquiry Management
                </Link>
              </li>
              <li>
                <Link href="/petroute" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Booking Management
                </Link>
              </li>
              <li>
                <Link href="/petroute" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Operations Dashboard
                </Link>
              </li>
              <li>
                <Link href="/petroute" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Customer Portal
                </Link>
              </li>
              <li>
                <Link href="/petroute" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Agent Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-slate-900 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  About Remaarkly
                </Link>
              </li>
              <li>
                <Link href="/about#philosophy" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Our Philosophy
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Blog & Industry Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Contact & Support
                </Link>
              </li>
              <li>
                <Link href="/request-demo" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Request a Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact info & Portal */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-slate-900 mb-4">
              Connect
            </h4>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-indigo-600 break-all">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <span>{siteConfig.contact.address}</span>
              </div>
              <div className="pt-2">
                <Link
                  href="/admin/login"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-indigo-600 border border-slate-200 rounded-lg px-2.5 py-1.5 bg-white/60"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Admin Console
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1.5">
            <PawPrint className="w-3.5 h-3.5 text-indigo-500" />
            <span>© {currentYear} Remaarkly Inc. All rights reserved. PetRoute is a registered product of Remaarkly.</span>
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-900">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-900">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-slate-900">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
