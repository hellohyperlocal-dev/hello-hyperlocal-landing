"use client";

import React, { useState } from "react";
import { Shield, Building2, FileText, Send, Sparkles, X, CheckCircle2 } from "lucide-react";
import { EyebrowPill } from "@/components/ui/EyebrowPill";
import { submitRegistration } from "@/lib/registrations";

export function PartnersInvestors() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [partnerForm, setPartnerForm] = useState({
    name: "",
    org: "",
    email: "",
    role: "Strategic Partner",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerForm.name || !partnerForm.email) return;
    // An enquiry the team replies to, not a marketing opt-in, so no consent timestamp.
    const result = await submitRegistration({
      roles: ["partner_interest"],
      contact: { fullName: partnerForm.name, email: partnerForm.email },
      partner: { organisation: partnerForm.org, inquiryType: partnerForm.role },
      consentAt: null,
    });
    if (!result.ok) return;
    setSubmitted(true);
  };

  return (
    <section id="partners" className="w-full py-20 sm:py-24 bg-[#FCFAF7] dark:bg-[#111A13] text-[#0e0f0c] dark:text-[#FCFAF7] transition-colors duration-200 border-t border-b border-[#0e0f0c]/5 dark:border-white/5">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
          <EyebrowPill icon={Building2} variant="standard">
            Partners &amp; Strategic Investors
          </EyebrowPill>
          <h2 className="text-heading-32 sm:text-heading-40 lg:text-heading-48 font-bold text-[#1C472A] dark:text-[#7ED957] tracking-tight">
            Partnering to Build Stronger Local Communities
          </h2>
          <p className="text-copy-18 text-[#454745] dark:text-[#99A893] leading-relaxed">
            We are actively holding discussions with selected founding partners, strategic brands, community organizations, and investors who share our vision.
          </p>
        </div>

        {/* Discreet Partner Card */}
        <div className="max-w-4xl mx-auto rounded-[32px] bg-white dark:bg-[#151F17] p-8 sm:p-12 shadow-lg border border-[#0e0f0c]/8 dark:border-white/10 text-left space-y-8 relative overflow-hidden">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            
            <div className="space-y-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e2f6d5] dark:bg-[#1C472A] text-[#054d28] dark:text-[#7ED957]">
                <Shield className="h-5 w-5" />
              </div>
              <h4 className="text-heading-18 font-bold text-[#0e0f0c] dark:text-white">
                Community Orgs &amp; LCA
              </h4>
              <p className="text-xs text-[#454745] dark:text-[#99A893]">
                Collaborating with local associations and schools to amplify community initiatives.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e2f6d5] dark:bg-[#1C472A] text-[#054d28] dark:text-[#7ED957]">
                <Building2 className="h-5 w-5" />
              </div>
              <h4 className="text-heading-18 font-bold text-[#0e0f0c] dark:text-white">
                Founding Brands
              </h4>
              <p className="text-xs text-[#454745] dark:text-[#99A893]">
                Aligning purpose-driven brands with high-trust hyperlocal suburb audiences.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e2f6d5] dark:bg-[#1C472A] text-[#054d28] dark:text-[#7ED957]">
                <FileText className="h-5 w-5" />
              </div>
              <h4 className="text-heading-18 font-bold text-[#0e0f0c] dark:text-white">
                Strategic Investors
              </h4>
              <p className="text-xs text-[#454745] dark:text-[#99A893]">
                Request our confidential partnership prospectus for scaling across South Africa.
              </p>
            </div>

          </div>

          {/* Action Callout */}
          <div className="pt-4 border-t border-[#0e0f0c]/5 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
            <div className="space-y-0.5">
              <span className="text-heading-18 font-bold text-[#0e0f0c] dark:text-white">
                Interested in shaping the future of South African suburbs?
              </span>
              <p className="text-xs text-[#868685]">
                Get in touch with our founding leadership team for a confidential conversation.
              </p>
            </div>
            
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#1C472A] dark:bg-[#7ED957] px-6 py-3 text-button-14 font-bold text-white dark:text-[#0e0f0c] hover:bg-[#054d28] dark:hover:bg-[#cdffad] transition-all shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ED957]"
            >
              <Send className="h-4 w-4" />
              <span>Partner With Hello</span>
            </button>
          </div>

        </div>

      </div>

      {/* Partnership Prospectus Request Modal */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          <div
            className="fixed inset-0 bg-[#0e0f0c]/60 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          />

          <div className="relative w-full max-w-lg rounded-[32px] bg-white dark:bg-[#151F17] p-6 sm:p-8 shadow-2xl border border-[#0e0f0c]/10 dark:border-white/10 text-left space-y-6 z-10 animate-in fade-in zoom-in-95 duration-200">
            
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F5F5] dark:bg-white/10 text-[#0e0f0c] dark:text-white hover:bg-[#EBEBEB]"
            >
              <X className="h-4 w-4" />
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <EyebrowPill icon={Building2} variant="standard">
                    Partnership Inquiry
                  </EyebrowPill>
                  <h3 className="text-heading-28 font-bold text-[#0e0f0c] dark:text-white pt-1">
                    Partner With Hello Hyperlocal
                  </h3>
                  <p className="text-xs text-[#868685]">
                    Request our partnership prospectus or schedule a founding discussion.
                  </p>
                </div>

                <div className="space-y-1">
                  <label className="text-label-12 font-bold text-[#0e0f0c] dark:text-white">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={partnerForm.name}
                    onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })}
                    placeholder="e.g. David Williams"
                    className="w-full rounded-2xl bg-[#F5F5F5] dark:bg-[#1C281F] px-4 py-3 text-sm text-[#0e0f0c] dark:text-white border border-transparent focus:border-[#7ED957] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-label-12 font-bold text-[#0e0f0c] dark:text-white">Organization / Brand *</label>
                  <input
                    type="text"
                    required
                    value={partnerForm.org}
                    onChange={(e) => setPartnerForm({ ...partnerForm, org: e.target.value })}
                    placeholder="e.g. Linden Community Association / Brand"
                    className="w-full rounded-2xl bg-[#F5F5F5] dark:bg-[#1C281F] px-4 py-3 text-sm text-[#0e0f0c] dark:text-white border border-transparent focus:border-[#7ED957] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-label-12 font-bold text-[#0e0f0c] dark:text-white">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={partnerForm.email}
                    onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                    placeholder="david@example.co.za"
                    className="w-full rounded-2xl bg-[#F5F5F5] dark:bg-[#1C281F] px-4 py-3 text-sm text-[#0e0f0c] dark:text-white border border-transparent focus:border-[#7ED957] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-label-12 font-bold text-[#0e0f0c] dark:text-white">Inquiry Type</label>
                  <select
                    value={partnerForm.role}
                    onChange={(e) => setPartnerForm({ ...partnerForm, role: e.target.value })}
                    className="w-full rounded-2xl bg-[#F5F5F5] dark:bg-[#1C281F] px-4 py-3 text-sm text-[#0e0f0c] dark:text-white border border-transparent focus:border-[#7ED957] focus:outline-none"
                  >
                    <option value="Strategic Partner">Strategic Brand Partner</option>
                    <option value="Community Org">Community Org / School / LCA</option>
                    <option value="Investor">Strategic Investor</option>
                    <option value="Media">Media &amp; Press</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#7ED957] py-3.5 text-button-14 font-bold text-[#0e0f0c] hover:bg-[#cdffad] transition-all"
                  >
                    <Send className="h-4 w-4" />
                    <span>Request Prospectus</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-6 text-center py-6">
                <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-[#e2f6d5] text-[#054d28]">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-heading-24 font-bold text-[#0e0f0c] dark:text-white">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-[#454745] dark:text-[#99A893]">
                    Thank you, {partnerForm.name}. Our founding team will review your inquiry and share our prospectus shortly via {partnerForm.email}.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setModalOpen(false);
                  }}
                  className="text-xs font-bold text-[#054d28] dark:text-[#7ED957] underline"
                >
                  Close window
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </section>
  );
}
