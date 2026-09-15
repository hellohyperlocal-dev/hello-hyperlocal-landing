"use client";

import React, { useState } from "react";
import { Store, CheckCircle2, Award, Send, ArrowRight, ShieldCheck, Tag, Sparkles, Building, MapPin } from "lucide-react";
import { EyebrowPill } from "@/components/ui/EyebrowPill";
import { submitRegistration } from "@/lib/registrations";

const BUSINESS_BENEFITS = [
  "Founding Business recognition",
  "Early platform access",
  "Input into how Hello Linden is developed",
  "Launch visibility",
  "Founding badge and window sticker",
  "Potential launch opportunities",
  "Priority onboarding",
];

const BUSINESS_CATEGORIES = [
  "Café / Restaurant / Bakery",
  "Retail & Boutique Shop",
  "Health & Wellness / Beauty",
  "Professional & Home Services",
  "Education & School Services",
  "Art, Craft & Creative Spot",
  "Other Local Service",
];

export function FoundingBusinesses() {
  const [formData, setFormData] = useState({
    businessName: "",
    contactPerson: "",
    email: "",
    mobile: "",
    category: "Café / Restaurant / Bakery",
    address: "",
    interestedInWindowSticker: true,
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [businessNumber, setBusinessNumber] = useState(43);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.businessName || !formData.email || !formData.consent) return;
    const result = await submitRegistration({
      roles: ["business", "founding_business"],
      contact: {
        fullName: formData.contactPerson,
        email: formData.email,
        mobile: formData.mobile,
      },
      business: {
        name: formData.businessName,
        category: formData.category,
        address: formData.address,
        wantsWindowSticker: formData.interestedInWindowSticker,
      },
      consentAt: new Date().toISOString(),
    });
    if (!result.ok) return;
    setBusinessNumber((prev) => prev + 1);
    setSubmitted(true);
  };

  return (
    <section id="businesses" className="w-full py-20 sm:py-28 bg-white dark:bg-[#0e0f0c] text-[#0e0f0c] dark:text-[#FCFAF7] transition-colors duration-200">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
          <EyebrowPill icon={Store} variant="standard">
            For Businesses & Founding Partners
          </EyebrowPill>
          <h2 className="text-heading-32 sm:text-heading-48 lg:text-heading-50 font-bold text-[#1C472A] dark:text-[#7ED957] tracking-tight">
            Put Your Business on the Neighbourhood Map
          </h2>
          <p className="text-copy-18 text-[#454745] dark:text-[#99A893] leading-relaxed">
            Hello Linden is not another directory. It is an active local ecosystem built to help independent businesses connect directly with residents living around them.
          </p>
        </div>

        {/* 2-Column Layout: Benefits vs Expression of Interest Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Business Pitch & Founding Perks */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            <div className="space-y-4">
              <span className="text-label-12 font-bold uppercase tracking-widest text-[#054d28] dark:text-[#7ED957] bg-[#e2f6d5] dark:bg-[#1C472A] px-3 py-1 rounded-full border border-[#054d28]/10 inline-block">
                Beyond a Directory
              </span>
              <h3 className="text-heading-28 sm:text-heading-32 font-bold text-[#0e0f0c] dark:text-white">
                Connect directly with neighbours who want to support local.
              </h3>
              <p className="text-copy-16 text-[#454745] dark:text-[#99A893]">
                Instead of competing against global algorithms, Hello Linden creates a dedicated space for your suburb&apos;s independent shops, cafes, and services.
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-3">
              {BUSINESS_BENEFITS.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7ED957] text-[#0e0f0c] mt-0.5 font-bold">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-copy-16 text-[#0e0f0c] dark:text-[#FCFAF7]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Founding Business Box */}
            <div className="p-6 rounded-[28px] bg-[#FCFAF7] dark:bg-[#151F17] border border-[#0e0f0c]/8 dark:border-white/10 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-[#054d28] dark:text-[#7ED957]" />
                <span className="text-heading-18 font-bold text-[#0e0f0c] dark:text-white">
                  First 100 Founding Businesses (No Pre-payment Required)
                </span>
              </div>
              <p className="text-xs text-[#454745] dark:text-[#99A893] leading-relaxed">
                Founding Businesses receive window stickers, early platform access, launch visibility, and input into business features before public launch.
              </p>
            </div>

          </div>

          {/* Right Column: EOI Registration Form / Confirmation */}
          <div className="lg:col-span-6">
            <div className="rounded-[32px] bg-[#FCFAF7] dark:bg-[#151F17] p-6 sm:p-8 shadow-xl border border-[#0e0f0c]/10 dark:border-white/10 text-left space-y-6">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="space-y-1 border-b border-[#0e0f0c]/5 dark:border-white/5 pb-4">
                    <span className="text-xs font-mono font-bold text-[#054d28] dark:text-[#7ED957] bg-[#e2f6d5] dark:bg-[#1C472A] px-2.5 py-0.5 rounded-full inline-block">
                      Founding Expression of Interest
                    </span>
                    <h3 className="text-heading-24 font-bold text-[#0e0f0c] dark:text-white">
                      Register Your Business
                    </h3>
                    <p className="text-xs text-[#868685]">
                      Register your interest to help shape Hello Linden. No payment required today.
                    </p>
                  </div>

                  {/* Business Name & Contact Person */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-label-12 font-bold text-[#0e0f0c] dark:text-white">Business Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Linden Coffee Roasters"
                        className="w-full rounded-2xl bg-white dark:bg-[#1C281F] px-4 py-3 text-sm text-[#0e0f0c] dark:text-white border border-[#0e0f0c]/10 dark:border-white/10 focus:border-[#7ED957] focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-label-12 font-bold text-[#0e0f0c] dark:text-white">Contact Person *</label>
                      <input
                        type="text"
                        required
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        placeholder="e.g. Maria Perez"
                        className="w-full rounded-2xl bg-white dark:bg-[#1C281F] px-4 py-3 text-sm text-[#0e0f0c] dark:text-white border border-[#0e0f0c]/10 dark:border-white/10 focus:border-[#7ED957] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Email & Mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-label-12 font-bold text-[#0e0f0c] dark:text-white">Business Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="maria@lindencoffee.co.za"
                        className="w-full rounded-2xl bg-white dark:bg-[#1C281F] px-4 py-3 text-sm text-[#0e0f0c] dark:text-white border border-[#0e0f0c]/10 dark:border-white/10 focus:border-[#7ED957] focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-label-12 font-bold text-[#0e0f0c] dark:text-white">Mobile / WhatsApp</label>
                      <input
                        type="tel"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        placeholder="082 987 6543"
                        className="w-full rounded-2xl bg-white dark:bg-[#1C281F] px-4 py-3 text-sm text-[#0e0f0c] dark:text-white border border-[#0e0f0c]/10 dark:border-white/10 focus:border-[#7ED957] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Category & Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-label-12 font-bold text-[#0e0f0c] dark:text-white">Business Category</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full rounded-2xl bg-white dark:bg-[#1C281F] px-4 py-3 text-sm text-[#0e0f0c] dark:text-white border border-[#0e0f0c]/10 dark:border-white/10 focus:border-[#7ED957] focus:outline-none"
                      >
                        {BUSINESS_CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-label-12 font-bold text-[#0e0f0c] dark:text-white">Street Address in Linden</label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="e.g. 4th Avenue, Linden"
                        className="w-full rounded-2xl bg-white dark:bg-[#1C281F] px-4 py-3 text-sm text-[#0e0f0c] dark:text-white border border-[#0e0f0c]/10 dark:border-white/10 focus:border-[#7ED957] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Checkbox for Window Sticker */}
                  <label className="flex items-center gap-2 pt-1 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.interestedInWindowSticker}
                      onChange={(e) => setFormData({ ...formData, interestedInWindowSticker: e.target.checked })}
                      className="rounded accent-[#1C472A]"
                    />
                    <span className="text-xs text-[#454745] dark:text-[#99A893]">
                      Yes, reserve a Founding Business window sticker &amp; launch badge for our store.
                    </span>
                  </label>

                  {/* POPIA consent: must be an explicit opt-in, never pre-ticked */}
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 rounded accent-[#1C472A]"
                    />
                    <span className="text-xs text-[#454745] dark:text-[#99A893]">
                      I agree to receive Hello Linden updates and for these details to be used as described in the{" "}
                      <a href="/privacy" className="underline hover:text-[#0e0f0c] dark:hover:text-white">
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#1C472A] dark:bg-[#7ED957] py-4 text-button-14 font-bold text-white dark:text-[#0e0f0c] hover:bg-[#054d28] dark:hover:bg-[#cdffad] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ED957]"
                    >
                      <Store className="h-4 w-4" />
                      <span>Become a Founding Business</span>
                    </button>
                  </div>

                </form>
              ) : (
                /* Success Confirmation State */
                <div className="space-y-6 text-center py-8 animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-[#7ED957] text-[#0e0f0c]">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-[#054d28] dark:text-[#7ED957] bg-[#e2f6d5] dark:bg-[#1C472A] px-3 py-1 rounded-full">
                      Founding Business #{businessNumber} Registered
                    </span>
                    <h3 className="text-heading-28 font-bold text-[#0e0f0c] dark:text-white">
                      Thank You, {formData.contactPerson}!
                    </h3>
                    <p className="text-copy-16 text-[#454745] dark:text-[#99A893] max-w-md mx-auto">
                      We have registered <span className="font-semibold text-[#0e0f0c] dark:text-white">{formData.businessName}</span> as a Founding Business for Hello Linden. We&apos;ll be in touch with onboarding details prior to launch.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#054d28] dark:text-[#7ED957] underline hover:opacity-80"
                  >
                    Submit another business location
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
