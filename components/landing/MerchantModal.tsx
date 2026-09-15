"use client";

import React, { useEffect, useState } from "react";
import { X, CheckCircle2, Store, ArrowLeft, MapPin, Mail, Phone, User } from "lucide-react";
import { ArrowFlipIcon } from "@/components/ui/ArrowFlipIcon";
import { RollingText } from "@/components/ui/RollingText";

interface MerchantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MerchantModal({ isOpen, onClose }: MerchantModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    suburb: "Linden",
    contactName: "",
    email: "",
    phone: "",
    category: "Cafe & Bakery",
  });

  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (!isOpen) {
      setSubmitted(false);
    }
  }

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="merchant-modal-title"
      aria-describedby="merchant-modal-desc"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-[540px] rounded-[28px] bg-white dark:bg-[#151F17] p-6 sm:p-8 shadow-[0_16px_48px_rgba(14,15,12,0.24)] border border-black/8 dark:border-white/10 text-left my-auto animate-in zoom-in-95 duration-200">
        
        {/* Top Navigation Bar with Back link & Close Button */}
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-black/5 dark:border-white/5">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#1C472A] dark:text-[#7ED957] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C472A] dark:focus-visible:ring-[#7ED957] rounded"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to landing page</span>
          </button>

          <button
            type="button"
            aria-label="Close modal and return to landing page"
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-black/5 dark:bg-white/10 text-[#454745] dark:text-[#99A893] hover:text-[#0e0f0c] dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C472A] dark:focus-visible:ring-[#7ED957]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-5">
              <span className="inline-block rounded-full bg-[#e2f6d5] dark:bg-[#1C472A] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#054d28] dark:text-[#7ED957] mb-2">
                Local Merchant Partner
              </span>
              <h2
                id="merchant-modal-title"
                className="text-[24px] sm:text-[26px] font-bold tracking-tight text-brand-onyx dark:text-[#FCFAF7] m-0"
              >
                Register your business
              </h2>
              <p
                id="merchant-modal-desc"
                className="text-[13.5px] leading-relaxed text-brand-muted dark:text-[#99A893] mt-1 m-0"
              >
                Connect with verified neighbours who walk past your door everyday.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              {/* Business Name */}
              <div>
                <label className="block text-[11.5px] font-bold uppercase tracking-wider text-[#454745] dark:text-[#99A893] mb-1">
                  Business Name *
                </label>
                <div className="relative">
                  <Store className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#868685]" />
                  <input
                    required
                    type="text"
                    placeholder="e.g. Goddess Café, Linden Lanes"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full rounded-[14px] border border-black/10 dark:border-white/10 bg-[#F5F5F5] dark:bg-white/5 py-2.5 pl-10 pr-4 text-[13.5px] text-brand-onyx dark:text-white placeholder:text-[#868685] focus:border-[#1C472A] dark:focus:border-[#7ED957] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Suburb & Category Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11.5px] font-bold uppercase tracking-wider text-[#454745] dark:text-[#99A893] mb-1">
                    Suburb *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#868685]" />
                    <select
                      value={formData.suburb}
                      onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                      className="w-full rounded-[14px] border border-black/10 dark:border-white/10 bg-[#F5F5F5] dark:bg-[#151F17] py-2.5 pl-10 pr-8 text-[13px] text-brand-onyx dark:text-white focus:border-[#1C472A] dark:focus:border-[#7ED957] focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="Linden">Linden (Ward 99)</option>
                      <option value="Parkhurst">Parkhurst</option>
                      <option value="Greenside">Greenside</option>
                      <option value="Emmarentia">Emmarentia</option>
                      <option value="Craighall Park">Craighall Park</option>
                      <option value="Other">Other Suburb</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11.5px] font-bold uppercase tracking-wider text-[#454745] dark:text-[#99A893] mb-1">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full rounded-[14px] border border-black/10 dark:border-white/10 bg-[#F5F5F5] dark:bg-[#151F17] py-2.5 px-3.5 text-[13px] text-brand-onyx dark:text-white focus:border-[#1C472A] dark:focus:border-[#7ED957] focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="Cafe & Bakery">Café &amp; Bakery</option>
                    <option value="Restaurant & Bar">Restaurant &amp; Bar</option>
                    <option value="Retail & Boutique">Retail &amp; Boutique</option>
                    <option value="Health & Wellness">Health &amp; Wellness</option>
                    <option value="Local Artisan & Crafts">Local Artisan / Market</option>
                    <option value="Services & Trade">Services &amp; Trade</option>
                  </select>
                </div>
              </div>

              {/* Contact Person Name */}
              <div>
                <label className="block text-[11.5px] font-bold uppercase tracking-wider text-[#454745] dark:text-[#99A893] mb-1">
                  Contact Person *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#868685]" />
                  <input
                    required
                    type="text"
                    placeholder="Your name & surname"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full rounded-[14px] border border-black/10 dark:border-white/10 bg-[#F5F5F5] dark:bg-white/5 py-2.5 pl-10 pr-4 text-[13.5px] text-brand-onyx dark:text-white placeholder:text-[#868685] focus:border-[#1C472A] dark:focus:border-[#7ED957] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11.5px] font-bold uppercase tracking-wider text-[#454745] dark:text-[#99A893] mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#868685]" />
                    <input
                      required
                      type="email"
                      placeholder="name@business.co.za"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-[14px] border border-black/10 dark:border-white/10 bg-[#F5F5F5] dark:bg-white/5 py-2.5 pl-10 pr-3 text-[13px] text-brand-onyx dark:text-white placeholder:text-[#868685] focus:border-[#1C472A] dark:focus:border-[#7ED957] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11.5px] font-bold uppercase tracking-wider text-[#454745] dark:text-[#99A893] mb-1">
                    WhatsApp / Phone *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#868685]" />
                    <input
                      required
                      type="tel"
                      placeholder="082 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-[14px] border border-black/10 dark:border-white/10 bg-[#F5F5F5] dark:bg-white/5 py-2.5 pl-10 pr-3 text-[13px] text-brand-onyx dark:text-white placeholder:text-[#868685] focus:border-[#1C472A] dark:focus:border-[#7ED957] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA & Cancel Action */}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 rounded-full bg-[#7ED957] py-3 text-[14px] font-bold text-[#0e0f0c] transition-all hover:bg-[#cdffad] active:bg-[#c5edab] hover:scale-[1.01]"
                >
                  <RollingText text="Submit Merchant Application" />
                  <ArrowFlipIcon size={14} className="opacity-90" />
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full text-center py-1.5 text-[12.5px] font-medium text-[#868685] hover:text-[#0e0f0c] dark:hover:text-white transition-colors"
                >
                  Cancel &amp; return to page
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation Success View */
          <div className="py-6 text-center space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#e2f6d5] text-[#054d28]">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="font-heading text-[22px] font-bold text-brand-onyx dark:text-[#FCFAF7] m-0">
              Application Received!
            </h3>
            <p className="text-[14px] leading-relaxed text-brand-muted dark:text-[#99A893] max-w-md mx-auto m-0">
              Thank you, <strong>{formData.contactName || "partner"}</strong>. Our local merchant team will contact you at <strong>{formData.email}</strong> within 24 hours to setup your verified <strong>{formData.businessName || "store"}</strong> profile on Hello Hyperlocal.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-full bg-[#1C472A] text-white dark:bg-[#7ED957] dark:text-[#0e0f0c] px-6 py-2.5 text-[13.5px] font-bold hover:opacity-90 transition-opacity"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Return to Landing Page</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
