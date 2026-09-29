'use client';

import * as React from 'react';
import { formatDate, formatDateTime } from '@/lib/utils';
import { 
  Search, 
  Filter, 
  Download, 
  Mail, 
  Phone, 
  Building, 
  Globe2, 
  BarChart3, 
  CheckCircle2, 
  Trash2, 
  Eye, 
  X, 
  Loader2,
  Calendar,
  MessageSquare
} from 'lucide-react';

interface Submission {
  id: string;
  type: string;
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  message?: string | null;
  productInterest?: string | null;
  monthlyVolume?: string | null;
  country?: string | null;
  isRead: boolean;
  createdAt: string | Date;
}

interface SubmissionsTableProps {
  initialSubmissions: Submission[];
}

export function SubmissionsTable({ initialSubmissions }: SubmissionsTableProps) {
  const [submissions, setSubmissions] = React.useState<Submission[]>(initialSubmissions);
  const [search, setSearch] = React.useState('');
  const [typeFilter, setTypeFilter] = React.useState<'all' | 'contact' | 'demo'>('all');
  const [statusFilter, setStatusFilter] = React.useState<'all' | 'unread' | 'read'>('all');
  const [selectedSubmission, setSelectedSubmission] = React.useState<Submission | null>(null);
  const [actionLoading, setActionLoading] = React.useState<string | null>(null);

  // Filter logic
  const filtered = submissions.filter((sub) => {
    if (typeFilter !== 'all' && sub.type !== typeFilter) return false;
    if (statusFilter === 'unread' && sub.isRead) return false;
    if (statusFilter === 'read' && !sub.isRead) return false;

    if (search.trim()) {
      const q = search.toLowerCase();
      const matchName = sub.name?.toLowerCase().includes(q);
      const matchEmail = sub.email?.toLowerCase().includes(q);
      const matchCompany = sub.company?.toLowerCase().includes(q);
      const matchMsg = sub.message?.toLowerCase().includes(q);
      const matchCountry = sub.country?.toLowerCase().includes(q);
      return matchName || matchEmail || matchCompany || matchMsg || matchCountry;
    }

    return true;
  });

  const toggleReadStatus = async (sub: Submission) => {
    const newStatus = !sub.isRead;
    setActionLoading(sub.id);

    try {
      const res = await fetch(`/api/submissions/${sub.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isRead: newStatus }),
      });

      if (res.ok) {
        setSubmissions((prev) =>
          prev.map((item) =>
            item.id === sub.id ? { ...item, isRead: newStatus } : item
          )
        );
        if (selectedSubmission?.id === sub.id) {
          setSelectedSubmission((prev) => prev ? { ...prev, isRead: newStatus } : null);
        }
      }
    } catch (err) {
      console.error('Failed to update status', err);
    } finally {
      setActionLoading(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to permanently delete this submission?')) {
      return;
    }

    setActionLoading(id);
    try {
      const res = await fetch(`/api/submissions/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setSubmissions((prev) => prev.filter((item) => item.id !== id));
        if (selectedSubmission?.id === id) {
          setSelectedSubmission(null);
        }
      }
    } catch (err) {
      console.error('Failed to delete', err);
    } finally {
      setActionLoading(null);
    }
  };

  const openDetails = (sub: Submission) => {
    setSelectedSubmission(sub);
    // If unread, mark as read automatically
    if (!sub.isRead) {
      toggleReadStatus(sub);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Controls Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, email, company, country..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Type Filter */}
          <div className="flex items-center rounded-xl bg-slate-100 p-1 border border-slate-200 text-xs">
            <button
              type="button"
              onClick={() => setTypeFilter('all')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                typeFilter === 'all'
                  ? 'bg-white text-indigo-600 shadow-xs'
                  : 'text-slate-600'
              }`}
            >
              All Types
            </button>
            <button
              type="button"
              onClick={() => setTypeFilter('demo')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                typeFilter === 'demo'
                  ? 'bg-white text-indigo-600 shadow-xs'
                  : 'text-slate-600'
              }`}
            >
              Demo Requests
            </button>
            <button
              type="button"
              onClick={() => setTypeFilter('contact')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                typeFilter === 'contact'
                  ? 'bg-white text-indigo-600 shadow-xs'
                  : 'text-slate-600'
              }`}
            >
              Contact Enquiries
            </button>
          </div>

          {/* Read Status Filter */}
          <div className="flex items-center rounded-xl bg-slate-100 p-1 border border-slate-200 text-xs">
            <button
              type="button"
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                statusFilter === 'all'
                  ? 'bg-white text-indigo-600 shadow-xs'
                  : 'text-slate-600'
              }`}
            >
              All Status
            </button>
            <button
              type="button"
              onClick={() => setStatusFilter('unread')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                statusFilter === 'unread'
                  ? 'bg-white text-indigo-600 shadow-xs'
                  : 'text-slate-600'
              }`}
            >
              Unread
            </button>
          </div>

          {/* CSV Export Button */}
          <a
            href="/api/submissions/export"
            download
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-xs"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span>Export CSV</span>
          </a>
        </div>

      </div>

      {/* Table Card */}
      <div className="rounded-2xl border border-slate-200/80 bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/70 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Type</th>
                <th className="py-3.5 px-4">Contact</th>
                <th className="py-3.5 px-4">Company & Location</th>
                <th className="py-3.5 px-4">Details</th>
                <th className="py-3.5 px-4">Date</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {filtered.length > 0 ? (
                filtered.map((sub) => {
                  const isLoading = actionLoading === sub.id;
                  return (
                    <tr
                      key={sub.id}
                      className={`hover:bg-slate-50 transition-colors ${
                        !sub.isRead ? 'bg-indigo-50/20' : ''
                      }`}
                    >
                      {/* Status / Unread Indicator */}
                      <td className="py-4 px-4">
                        <button
                          type="button"
                          onClick={() => toggleReadStatus(sub)}
                          disabled={isLoading}
                          title={sub.isRead ? 'Mark as Unread' : 'Mark as Read'}
                          className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                            sub.isRead
                              ? 'text-slate-300 hover:text-indigo-600'
                              : 'bg-indigo-600 text-white shadow-xs scale-105'
                          }`}
                        >
                          {isLoading ? (
                            <Loader2 className="w-3 h-3 animate-spin" />
                          ) : (
                            <span className="w-2 h-2 rounded-full bg-current" />
                          )}
                        </button>
                      </td>

                      {/* Type */}
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider ${
                            sub.type === 'demo'
                              ? 'bg-purple-100 text-purple-700 border border-purple-200'
                              : 'bg-sky-100 text-sky-700 border border-sky-200'
                          }`}
                        >
                          {sub.type}
                        </span>
                      </td>

                      {/* Contact */}
                      <td className="py-4 px-4">
                        <div className="font-bold text-slate-900">
                          {sub.name}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {sub.email}
                        </div>
                        {sub.phone && (
                          <div className="text-[10px] text-slate-400">
                            {sub.phone}
                          </div>
                        )}
                      </td>

                      {/* Company & Country */}
                      <td className="py-4 px-4">
                        <div className="font-medium text-slate-800">
                          {sub.company || '—'}
                        </div>
                        {sub.country && (
                          <div className="text-[11px] text-slate-500">
                            📍 {sub.country}
                          </div>
                        )}
                      </td>

                      {/* Details / Volume / Message preview */}
                      <td className="py-4 px-4 max-w-xs">
                        {sub.monthlyVolume && (
                          <div className="inline-block text-[10px] font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded mb-1">
                            📊 {sub.monthlyVolume}
                          </div>
                        )}
                        <p className="text-slate-600 truncate text-[11px]">
                          {sub.message || `Interest in ${sub.productInterest || 'PetRoute'}`}
                        </p>
                      </td>

                      {/* Date */}
                      <td className="py-4 px-4 whitespace-nowrap text-slate-500 text-[11px]">
                        {formatDate(sub.createdAt)}
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-4 text-right whitespace-nowrap space-x-1">
                        <button
                          type="button"
                          onClick={() => openDetails(sub)}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-slate-100 transition-colors"
                          title="View Full Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(sub.id)}
                          disabled={isLoading}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                          title="Delete Submission"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-500 text-xs">
                    No form submissions matching the current search & filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer info */}
        <div className="p-4 bg-slate-50/50 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
          <span>Showing {filtered.length} of {submissions.length} total entries</span>
          <span>Click any row action icon to inspect full message</span>
        </div>
      </div>

      {/* Submission Detail Drawer Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                    selectedSubmission.type === 'demo'
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-sky-100 text-sky-700'
                  }`}>
                    {selectedSubmission.type} submission
                  </span>
                  <span className="text-xs text-slate-400">
                    {formatDateTime(selectedSubmission.createdAt)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  {selectedSubmission.name}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedSubmission(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Grid of details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="text-slate-400 font-medium">Work Email</div>
                <div className="font-bold text-slate-900 break-all">
                  <a href={`mailto:${selectedSubmission.email}`} className="text-indigo-600 hover:underline">
                    {selectedSubmission.email}
                  </a>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="text-slate-400 font-medium">Phone / WhatsApp</div>
                <div className="font-bold text-slate-900">
                  {selectedSubmission.phone || 'Not provided'}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="text-slate-400 font-medium">Company Name</div>
                <div className="font-bold text-slate-900">
                  {selectedSubmission.company || 'Not provided'}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="text-slate-400 font-medium">Country / Market</div>
                <div className="font-bold text-slate-900">
                  {selectedSubmission.country || 'Global / Unspecified'}
                </div>
              </div>

              {selectedSubmission.monthlyVolume && (
                <div className="sm:col-span-2 p-3 rounded-xl bg-indigo-50/50 border border-indigo-200 text-indigo-900 font-medium">
                  📊 Estimated Volume: <strong>{selectedSubmission.monthlyVolume}</strong>
                </div>
              )}

              {selectedSubmission.productInterest && (
                <div className="sm:col-span-2 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-slate-400">Product Line Interest</div>
                  <div className="font-bold text-slate-900">{selectedSubmission.productInterest}</div>
                </div>
              )}

            </div>

            {/* Message Block */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Full Message / Enquiry Note
              </label>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-wrap">
                {selectedSubmission.message || 'No additional text provided.'}
              </div>
            </div>

            {/* Footer Action buttons */}
            <div className="pt-2 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => toggleReadStatus(selectedSubmission)}
                className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100"
              >
                Mark as {selectedSubmission.isRead ? 'Unread' : 'Read'}
              </button>

              <a
                href={`mailto:${selectedSubmission.email}?subject=Regarding your ${selectedSubmission.productInterest || 'PetRoute'} enquiry`}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-sm flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Reply via Email</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
