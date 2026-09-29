'use client';

import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import confetti from 'canvas-confetti';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  User, 
  Mail, 
  Phone, 
  Building, 
  Globe2, 
  Calendar,
  Sparkles,
  BarChart3,
  Layers
} from 'lucide-react';

function DemoRequestFormInner() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get('product');

  // Determine initial product interest from query param, fallback to "General Inquiry"
  const getInitialProduct = () => {
    if (!productParam) return 'General Inquiry';
    const lower = productParam.toLowerCase();
    if (lower.includes('petroute')) return 'PetRoute';
    if (lower.includes('remaarkly') || lower.includes('platform')) return 'Remaarkly Platform';
    if (lower.includes('custom')) return 'Custom Logistics Suite';
    return productParam;
  };

  const [formData, setFormData] = React.useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    productInterest: getInitialProduct(),
    monthlyVolume: '21-50 bookings/month',
    message: '',
  });

  // Sync if query param updates dynamically
  React.useEffect(() => {
    if (productParam) {
      const lower = productParam.toLowerCase();
      if (lower.includes('petroute')) {
        setFormData((prev) => ({ ...prev, productInterest: 'PetRoute' }));
      } else {
        setFormData((prev) => ({ ...prev, productInterest: productParam }));
      }
    }
  }, [productParam]);

  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const fireConfetti = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#38bdf8', '#10b981', '#f59e0b'],
      });
    } catch (e) {
      console.warn('Confetti error:', e);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'demo',
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          productInterest: formData.productInterest,
          monthlyVolume: formData.monthlyVolume,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit demo request');
      }

      setStatus('success');
      fireConfetti();
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        country: '',
        productInterest: getInitialProduct(),
        monthlyVolume: '21-50 bookings/month',
        message: '',
      });
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'An error occurred while submitting your demo request. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="p-8 sm:p-12 rounded-3xl border border-emerald-500/30 bg-emerald-500/5 text-center space-y-5">
        <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-600 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Demo Request Confirmed!
        </h3>
        <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
          Thank you for your interest in <strong className="text-indigo-600">{formData.productInterest || 'PetRoute'}</strong>. Our product specialist has received your requirements and will reach out within 2 hours to coordinate your live platform walkthrough.
        </p>
        <div className="p-4 rounded-xl bg-white/80 border border-slate-200 text-xs text-slate-500 max-w-md mx-auto">
          📅 A personalized invitation and demo calendar link have been dispatched to your email.
        </div>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="px-6 py-2.5 rounded-xl text-sm font-semibold bg-white border border-slate-200 text-slate-800 hover:bg-slate-50"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === 'error' && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 flex items-center gap-3 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
            Your Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Eleanor Rigby"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            />
          </div>
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
            Company / Agency Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="company"
              name="company"
              type="text"
              required
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Trans-Atlantic Pet Travel"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Work Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
            Work Email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="eleanor@petlogistics.com"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
            Phone / WhatsApp <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 234-5678"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Country */}
        <div>
          <label htmlFor="country" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
            Primary Operating Country <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Globe2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="country"
              name="country"
              type="text"
              required
              value={formData.country}
              onChange={handleChange}
              placeholder="e.g. United States, UK, Australia, UAE"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            />
          </div>
        </div>

        {/* Product Selection */}
        <div>
          <label htmlFor="productInterest" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
            Product Interested In <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              id="productInterest"
              name="productInterest"
              value={formData.productInterest}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-medium"
            >
              <option value="PetRoute">PetRoute — Pet Relocation & Logistics OS</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Remaarkly Platform">Remaarkly Platform & Partnerships</option>
              <option value="Custom Logistics Suite">Custom Specialized Logistics</option>
            </select>
          </div>
        </div>
      </div>

      {/* Monthly Booking Volume */}
      <div>
        <label htmlFor="monthlyVolume" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
          Estimated Monthly Booking Volume <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <BarChart3 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <select
            id="monthlyVolume"
            name="monthlyVolume"
            value={formData.monthlyVolume}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-medium"
          >
            <option value="1-20 bookings/month">1 - 20 pet shipments / month</option>
            <option value="21-50 bookings/month">21 - 50 pet shipments / month</option>
            <option value="51-100 bookings/month">51 - 100 pet shipments / month</option>
            <option value="100+ bookings/month">100+ pet shipments / month</option>
            <option value="New agency setup">Starting a new pet relocation agency</option>
          </select>
        </div>
      </div>

      {/* Special Requirements / Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
          Specific modules you are most interested in exploring
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="e.g. Crate sizing calculation, DEFRA export automated milestones, agent portal for our overseas customs handlers..."
          className="w-full p-4 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 hover:from-indigo-500 hover:to-sky-400 shadow-xl shadow-indigo-500/25 hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-200 flex items-center justify-center gap-2 text-base disabled:opacity-50"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Scheduling your walkthrough...</span>
          </>
        ) : (
          <>
            <Calendar className="w-5 h-5" />
            <span>Schedule Live Demo Walkthrough</span>
          </>
        )}
      </button>
    </form>
  );
}

export function DemoRequestForm() {
  return (
    <React.Suspense fallback={<div className="p-8 text-center text-xs text-slate-500 animate-pulse">Loading demo request form...</div>}>
      <DemoRequestFormInner />
    </React.Suspense>
  );
}
