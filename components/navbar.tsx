'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './logo';
import { 
  Sparkles, 
  Menu, 
  X, 
  ChevronRight, 
  Compass, 
  ShieldCheck, 
  ArrowUpRight,
  Layers,
  PlaneTakeoff,
  PawPrint
} from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav on route change
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'PetRoute', href: '/petroute', badge: 'Flagship' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Logo size="md" />
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-slate-900 flex items-center gap-1.5">
                Remaarkly
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block"></span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-500 -mt-1 flex items-center gap-1">
                Pet Logistics OS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 px-3 py-1.5 rounded-full border border-slate-200/60 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-indigo-600 bg-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  {link.name}
                  {link.badge && (
                    <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-indigo-100 text-indigo-600 border border-indigo-200">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/request-demo"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 hover:from-indigo-500 hover:to-sky-400 shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-200 active:scale-[0.98]"
            >
              <span>Request a Demo</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl border border-slate-200 bg-white/80 text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200 shadow-xl transition-all">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-slate-800 hover:bg-slate-100 flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    {link.name}
                    {link.badge && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-600">
                        {link.badge}
                      </span>
                    )}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              ))}
              
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <Link
                  href="/request-demo"
                  className="w-full py-3 px-4 rounded-xl text-center text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-sky-500 shadow-md shadow-indigo-500/20"
                >
                  Request a Demo
                </Link>
                <Link
                  href="/admin/login"
                  className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-medium text-slate-500 hover:text-slate-800"
                >
                  Admin Portal Login →
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
