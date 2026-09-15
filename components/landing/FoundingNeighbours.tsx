"use client";

import React, { useState } from "react";
import { Users, CheckCircle2, ShieldCheck, Heart, Sparkles, Send, Award, Calendar, Bell, MapPin } from "lucide-react";
import { EyebrowPill } from "@/components/ui/EyebrowPill";
import { submitRegistration } from "@/lib/registrations";

const RESIDENT_BENEFITS = [
  "Discover events, markets & school activities nearby",
  "Find vetted local businesses & exclusive resident specials",
  "Receive trusted suburb information & emergency advisories",
  "Follow local civic initiatives & community projects",
  "Discover hidden gems & local recommendations",
  "Earn rewards for exploring & supporting your suburb",
];

const INTEREST_OPTIONS = [
  "Local Business Specials & Deals",
  "Community Events & Markets",
  "Safety & Municipal Advisories",
  "School & Youth Activities",
  "Volunteering & Civic Projects",
  "Buy & Sell Marketplace",
];

export function FoundingNeighbours() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    suburb: "Linden",
    interests: [] as string[],
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [neighbourNumber, setNeighbourNumber] = useState(328);

  const handleCheckboxChange = (interest: string) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(interest);
      return {
        ...prev,
        interests: exists
          ? prev.interests.filter((i) => i !== interest)
          : [...prev.interests, interest],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.consent) return;
    const result = await submitRegistration({
      roles: ["resident", "founding_neighbour"],
      contact: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        mobile: formData.mobile,
      },
      suburb: formData.suburb,
      interests: formData.interests,
      consentAt: new Date().toISOString(),
    });
    if (!result.ok) return;
    setNeighbourNumber((prev) => prev + 1);
    setSubmitted(true);
  };

  return (
    <section id="founding-neighbours" className="w-full py-20 sm:py-28 bg-[#FCFAF7] dark:bg-[#111A13] text-[#0e0f0c] dark:text-[#FCFAF7] transition-colors duration-200">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
          <EyebrowPill icon={Users} variant="standard">
            For Residents & Founding Neighbours
          </EyebrowPill>
          <h2 className="text-heading-32 sm:text-heading-48 lg:text-heading-50 font-bold text-[#1C472A] dark:text-[#7ED957] tracking-tight">
            Become a Founding Neighbour
          </h2>
          <p className="text-copy-18 text-[#454745] dark:text-[#99A893] leading-relaxed">
            We are recognizing the first 1,000 residents who register early. Help shape Hello Linden before launch and get early platform access.
          </p>
        </div>

        {/* 2-Column Layout: Benefits vs Registration Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Value Prop & Founding Perks */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            <div className="space-y-4">
              <span className="text-label-12 font-bold uppercase tracking-widest text-[#054d28] dark:text-[#7ED957] bg-[#e2f6d5] dark:bg-[#1C472A] px-3 py-1 rounded-full border border-[#054d28]/10 inline-block">
                What Residents Get
              </span>
              <h3 className="text-heading-28 sm:text-heading-32 font-bold text-[#0e0f0c] dark:text-white">
                Everything happening in Linden, in one place.
              </h3>
              <p className="text-copy-16 text-[#454745] dark:text-[#99A893]">
                Hello Linden brings your suburb together without noise or spam. You control what you follow and discover.
              </p>
            </div>

            {/* Benefit Checklist */}
            <div className="space-y-3">
              {RESIDENT_BENEFITS.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1C472A] dark:bg-[#7ED957] text-[#7ED957] dark:text-[#0e0f0c] mt-0.5">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-copy-16 text-[#0e0f0c] dark:text-[#FCFAF7]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Founding Perks Box */}
            <div className="p-6 rounded-[28px] bg-white dark:bg-[#151F17] border border-[#0e0f0c]/8 dark:border-white/10 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-[#054d28] dark:text-[#7ED957]" />
                <span className="text-heading-18 font-bold text-[#0e0f0c] dark:text-white">
                  Founding Neighbour Recognition (First 1,000)
                </span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#454745] dark:text-[#99A893] list-disc list-inside">
                <li>Numbered Founding Badge</li>
                <li>Early app access prior to public launch</li>
                <li>Invitations to community launch events</li>
                <li>Direct input into platform development</li>
                <li>Opportunities to test new features</li>
              </ul>
            </div>

          </div>

          {/* Right Column: Interactive Registration Form / Confirmation */}
          <div className="lg:col-span-6">
            <div className="rounded-[32px] bg-white dark:bg-[#151F17] p-6 sm:p-8 shadow-xl border border-[#0e0f0c]/10 dark:border-white/10 text-left space-y-6">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="space-y-1 border-b border-[#0e0f0c]/5 dark:border-white/5 pb-4">
                    <span className="text-xs font-mono font-bold text-[#054d28] dark:text-[#7ED957] bg-[#e2f6d5] dark:bg-[#1C472A] px-2.5 py-0.5 rounded-full inline-block">
                      Pre-Launch Registration
                    </span>
                    <h3 className="text-heading-24 font-bold text-[#0e0f0c] dark:text-white">
                      Register as a Founding Neighbour
                    </h3>
                    <p className="text-xs text-[#868685]">
                      100% free. Your address data remains private and protected under POPIA.
                    </p>
                  </div>

                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-label-12 font-bold text-[#0e0f0c] dark:text-white">First Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="e.g. Riley"
                        className="w-full rounded-2xl bg-[#F5F5F5] dark:bg-[#1C281F] px-4 py-3 text-sm text-[#0e0f0c] dark:text-white border border-transparent focus:border-[#7ED957] focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-label-12 font-bold text-[#0e0f0c] dark:text-white">Last Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="e.g. Smith"
                        className="w-full rounded-2xl bg-[#F5F5F5] dark:bg-[#1C281F] px-4 py-3 text-sm text-[#0e0f0c] dark:text-white border border-transparent focus:border-[#7ED957] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-label-12 font-bold text-[#0e0f0c] dark:text-white">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="riley@example.com"
                        className="w-full rounded-2xl bg-[#F5F5F5] dark:bg-[#1C281F] px-4 py-3 text-sm text-[#0e0f0c] dark:text-white border border-transparent focus:border-[#7ED957] focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-label-12 font-bold text-[#0e0f0c] dark:text-white">Mobile Number</label>
                      <input
                        type="tel"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        placeholder="082 123 4567"
                        className="w-full rounded-2xl bg-[#F5F5F5] dark:bg-[#1C281F] px-4 py-3 text-sm text-[#0e0f0c] dark:text-white border border-transparent focus:border-[#7ED957] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Suburb Selection */}
                  <div className="space-y-1">
                    <label className="text-label-12 font-bold text-[#0e0f0c] dark:text-white">Your Suburb</label>
                    <select
                      value={formData.suburb}
                      onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                      className="w-full rounded-2xl bg-[#F5F5F5] dark:bg-[#1C281F] px-4 py-3 text-sm text-[#0e0f0c] dark:text-white border border-transparent focus:border-[#7ED957] focus:outline-none"
                    >
                      <option value="Linden">Linden, Johannesburg</option>
                      <option value="Greenside">Greenside</option>
                      <option value="Parkhurst">Parkhurst</option>
                      <option value="Melville">Melville</option>
                      <option value="Other">Other Suburb</option>
                    </select>
                  </div>

                  {/* Interests Checkboxes */}
                  <div className="space-y-2 pt-2">
                    <label className="text-label-12 font-bold text-[#0e0f0c] dark:text-white block">
                      What are you most interested in? (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {INTEREST_OPTIONS.map((option) => (
                        <label
                          key={option}
                          className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F5F5F5] dark:bg-[#1C281F] cursor-pointer hover:bg-[#e2f6d5] dark:hover:bg-[#1C472A] transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(option)}
                            onChange={() => handleCheckboxChange(option)}
                            className="rounded accent-[#1C472A]"
                          />
                          <span className="text-[#0e0f0c] dark:text-white">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* POPIA consent: must be an explicit opt-in, never pre-ticked */}
                  <label className="flex items-start gap-2 pt-1 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 rounded accent-[#1C472A]"
                    />
                    <span className="text-xs text-[#454745] dark:text-[#99A893]">
                      I agree to receive Hello Linden updates and for my details to be used as described in the{" "}
                      <a href="/privacy" className="underline hover:text-[#0e0f0c] dark:hover:text-white">
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#7ED957] py-4 text-button-14 font-bold text-[#0e0f0c] hover:bg-[#cdffad] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C472A]"
                    >
                      <Send className="h-4 w-4" />
                      <span>Become a Founding Neighbour</span>
                    </button>
                  </div>

                </form>
              ) : (
                /* Success Confirmation State */
                <div className="space-y-6 text-center py-8 animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-[#e2f6d5] dark:bg-[#1C472A] text-[#054d28] dark:text-[#7ED957]">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-[#054d28] dark:text-[#7ED957] bg-[#e2f6d5] dark:bg-[#1C472A] px-3 py-1 rounded-full">
                      Founding Neighbour #{neighbourNumber} Confirmed
                    </span>
                    <h3 className="text-heading-28 font-bold text-[#0e0f0c] dark:text-white">
                      Welcome to Hello Linden, {formData.firstName}!
                    </h3>
                    <p className="text-copy-16 text-[#454745] dark:text-[#99A893] max-w-md mx-auto">
                      Thank you for joining our founding community. We&apos;ve sent a confirmation email to <span className="font-semibold text-[#0e0f0c] dark:text-white">{formData.email}</span> with your Founding Member details.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F5F5F5] dark:bg-[#1C281F] text-xs text-[#868685] max-w-sm mx-auto">
                    When the Hello Linden app launches in 2026, you will be able to log in directly with this email without re-registering.
                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#054d28] dark:text-[#7ED957] underline hover:opacity-80"
                  >
                    Register another family member
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
