'use client';

import * as React from 'react';
import { 
  Save, 
  Loader2, 
  CheckCircle2, 
  AlertCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Megaphone,
  Building,
  Share2
} from 'lucide-react';
import { TwitterIcon, LinkedinIcon, GithubIcon } from '@/components/icons';

interface SettingsFormProps {
  initialSettings: Record<string, string>;
}

export function SettingsForm({ initialSettings }: SettingsFormProps) {
  const [settings, setSettings] = React.useState({
    contact_email: initialSettings.contact_email || 'hello@remaarkly.com',
    support_email: initialSettings.support_email || 'support@remaarkly.com',
    contact_phone: initialSettings.contact_phone || '+1 (800) 555-PETS',
    office_location: initialSettings.office_location || 'San Francisco, CA & London, UK',
    twitter_url: initialSettings.twitter_url || 'https://twitter.com/remaarkly',
    linkedin_url: initialSettings.linkedin_url || 'https://linkedin.com/company/remaarkly',
    github_url: initialSettings.github_url || 'https://github.com/remaarkly',
    banner_announcement: initialSettings.banner_announcement || 'Announcing PetRoute 2.0: The unified Operating System for Global Pet Relocation & Logistics',
  });

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState('');
  const [error, setError] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');

    try {
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to update settings');
      }

      setSuccess('Site settings updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An error occurred while saving settings');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">
      
      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 flex items-center gap-3 text-xs">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center gap-3 text-xs">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{success}</span>
        </div>
      )}

      {/* Contact & Support Section */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-5">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
          <Building className="w-4 h-4 text-indigo-600" />
          Contact & Corporate Info
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Primary Contact Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                name="contact_email"
                value={settings.contact_email}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Customer Support Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                name="support_email"
                value={settings.support_email}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Telephone Number
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                name="contact_phone"
                value={settings.contact_phone}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Office Locations
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                name="office_location"
                value={settings.office_location}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-5">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
          <Share2 className="w-4 h-4 text-indigo-600" />
          Social & Brand Profiles
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              X / Twitter URL
            </label>
            <div className="relative">
              <span className="text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2">
                <TwitterIcon className="w-4 h-4" />
              </span>
              <input
                type="url"
                name="twitter_url"
                value={settings.twitter_url}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              LinkedIn Company URL
            </label>
            <div className="relative">
              <span className="text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2">
                <LinkedinIcon className="w-4 h-4" />
              </span>
              <input
                type="url"
                name="linkedin_url"
                value={settings.linkedin_url}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              GitHub URL
            </label>
            <div className="relative">
              <span className="text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2">
                <GithubIcon className="w-4 h-4" />
              </span>
              <input
                type="url"
                name="github_url"
                value={settings.github_url}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Global Announcement Message */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
          <Megaphone className="w-4 h-4 text-indigo-600" />
          Global Product Announcement
        </h3>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Announcement Text
          </label>
          <textarea
            rows={2}
            name="banner_announcement"
            value={settings.banner_announcement}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-500/25 transition-all disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Saving changes...</span>
            </>
          ) : (
            <>
              <Save className="w-4 h-4" />
              <span>Save Site Settings</span>
            </>
          )}
        </button>
      </div>

    </form>
  );
}
