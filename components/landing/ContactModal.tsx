"use client";

import React, { useEffect, useState } from "react";
import { X, CheckCircle2, MessageSquare, ArrowLeft, Mail, User, MapPin } from "lucide-react";
import { ArrowFlipIcon } from "@/components/ui/ArrowFlipIcon";
import { RollingText } from "@/components/ui/RollingText";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    suburb: "Linden",
    topic: "General Inquiry",
    message: "",
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
      aria-labelledby="contact-modal-title"
      aria-describedby="contact-modal-desc"
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
                Neighbourhood Support
              </span>
              <h2
                id="contact-modal-title"
                className="text-[24px] sm:text-[26px] font-bold tracking-tight text-brand-onyx dark:text-[#FCFAF7] m-0"
              >
                Send us a message
              </h2>
              <p
                id="contact-modal-desc"
                className="text-[13.5px] sm:text-[14px] text-brand-muted dark:text-[#99A893] mt-1 mb-0 leading-normal"
              >
                Have a question about resident verification, suburb boundaries, or platform features? Our team is here to help.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Your Name */}
                <div>
                  <label className="block text-[11.5px] font-bold uppercase tracking-wider text-brand-muted dark:text-[#99A893] mb-1">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Liam K."
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-[14px] bg-[#F5F5F5] dark:bg-[#1C2A1E] border border-black/5 dark:border-white/10 px-3.5 py-2.5 pl-9 text-[13.5px] text-[#0e0f0c] dark:text-white placeholder:text-[#868685] focus:outline-none focus:ring-2 focus:ring-[#7ED957]"
                    />
                    <User className="absolute left-3 top-3 h-3.5 w-3.5 text-[#868685]" />
                  </div>
                </div>

                {/* Suburb */}
                <div>
                  <label className="block text-[11.5px] font-bold uppercase tracking-wider text-brand-muted dark:text-[#99A893] mb-1">
                    Suburb
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. Linden"
                      value={formData.suburb}
                      onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                      className="w-full rounded-[14px] bg-[#F5F5F5] dark:bg-[#1C2A1E] border border-black/5 dark:border-white/10 px-3.5 py-2.5 pl-9 text-[13.5px] text-[#0e0f0c] dark:text-white placeholder:text-[#868685] focus:outline-none focus:ring-2 focus:ring-[#7ED957]"
                    />
                    <MapPin className="absolute left-3 top-3 h-3.5 w-3.5 text-[#868685]" />
                  </div>
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-[11.5px] font-bold uppercase tracking-wider text-brand-muted dark:text-[#99A893] mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="you@example.co.za"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-[14px] bg-[#F5F5F5] dark:bg-[#1C2A1E] border border-black/5 dark:border-white/10 px-3.5 py-2.5 pl-9 text-[13.5px] text-[#0e0f0c] dark:text-white placeholder:text-[#868685] focus:outline-none focus:ring-2 focus:ring-[#7ED957]"
                  />
                  <Mail className="absolute left-3 top-3 h-3.5 w-3.5 text-[#868685]" />
                </div>
              </div>

              {/* Inquiry Topic */}
              <div>
                <label className="block text-[11.5px] font-bold uppercase tracking-wider text-brand-muted dark:text-[#99A893] mb-1">
                  Topic
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full rounded-[14px] bg-[#F5F5F5] dark:bg-[#1C2A1E] border border-black/5 dark:border-white/10 px-3.5 py-2.5 text-[13.5px] text-[#0e0f0c] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7ED957]"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Resident Verification">Resident Verification</option>
                  <option value="Data & Privacy">Data &amp; Privacy</option>
                  <option value="Local Merchant Partnership">Local Merchant Partnership</option>
                  <option value="Community Initiative">Community Initiative</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11.5px] font-bold uppercase tracking-wider text-brand-muted dark:text-[#99A893] mb-1">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    required
                    rows={3}
                    placeholder="How can we help your neighbourhood?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-[14px] bg-[#F5F5F5] dark:bg-[#1C2A1E] border border-black/5 dark:border-white/10 p-3 text-[13.5px] text-[#0e0f0c] dark:text-white placeholder:text-[#868685] focus:outline-none focus:ring-2 focus:ring-[#7ED957] resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 rounded-full bg-[#7ED957] py-3 text-button-14 font-bold text-[#0e0f0c] shadow-sm transition-all hover:bg-[#cdffad] active:bg-[#c5edab] hover:scale-[1.01]"
                >
                  <RollingText text="Send message" />
                  <ArrowFlipIcon size={14} />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Success State */
          <div className="py-6 text-center animate-in fade-in zoom-in-95 duration-300">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#e2f6d5] dark:bg-[#1C472A] text-[#1C472A] dark:text-[#7ED957]">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="font-heading text-[22px] font-bold text-brand-onyx dark:text-[#FCFAF7] m-0 mb-2">
              Message received!
            </h3>
            <p className="text-[14px] text-brand-muted dark:text-[#99A893] max-w-sm mx-auto mb-6 leading-relaxed">
              Thank you, <strong>{formData.name || "neighbour"}</strong>. Our local community desk has received your message and will respond to <strong>{formData.email}</strong> shortly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-[#1C472A] text-white dark:bg-[#7ED957] dark:text-[#0e0f0c] px-7 py-2.5 text-button-14 font-semibold transition-all hover:opacity-90"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
