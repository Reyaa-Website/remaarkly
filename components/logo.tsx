import * as React from 'react';
import { PawPrint } from 'lucide-react';

interface LogoProps {
  className?: string;
  iconClassName?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', iconClassName = '', size = 'md' }: LogoProps) {
  const sizeMap = {
    sm: { box: 'w-8 h-8 rounded-lg', icon: 'w-4 h-4' },
    md: { box: 'w-10 h-10 rounded-xl', icon: 'w-5 h-5' },
    lg: { box: 'w-12 h-12 rounded-2xl', icon: 'w-6 h-6' },
  };

  const current = sizeMap[size] || sizeMap.md;

  return (
    <div
      className={`relative ${current.box} bg-gradient-to-tr from-indigo-600 via-indigo-500 to-sky-400 p-[2px] shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200 shrink-0 ${className}`}
    >
      <div className="w-full h-full bg-slate-900 rounded-[inherit] flex items-center justify-center relative overflow-hidden">
        <PawPrint className={`${current.icon} text-white transition-transform duration-200 group-hover:rotate-6 ${iconClassName}`} />
      </div>
    </div>
  );
}
