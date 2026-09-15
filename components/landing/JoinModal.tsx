"use client";

import React, { useEffect } from "react";
import { X, UserCheck, Store, ArrowRight, Sparkles } from "lucide-react";
import { EyebrowPill } from "@/components/ui/EyebrowPill";

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResident: () => void;
  onSelectBusiness: () => void;
}

export function JoinModal({
  isOpen,
  onClose,
  onSelectResident,
  onSelectBusiness,
}: JoinModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="join-modal-title"
      aria-describedby="join-modal-desc"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0e0f0c]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Surface */}
      <div className="relative w-full max-w-lg rounded-[32px] bg-white dark:bg-[#151F17] p-6 sm:p-8 shadow-2xl border border-[#0e0f0c]/10 dark:border-white/10 text-left space-y-6 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F5F5] dark:bg-white/10 text-[#0e0f0c] dark:text-white hover:bg-[#EBEBEB] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C472A] dark:focus-visible:ring-[#7ED957]"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="space-y-3 pr-8">
          <EyebrowPill icon={Sparkles} variant="standard">
            Join Hello Linden
          </EyebrowPill>
          <h2
            id="join-modal-title"
            className="text-heading-32 sm:text-heading-40 font-bold text-[#0e0f0c] dark:text-white tracking-tight"
          >
            How would you like to get involved?
          </h2>
          <p
            id="join-modal-desc"
            className="text-copy-16 text-[#454745] dark:text-[#99A893] leading-relaxed"
          >
            Select your path below to join our early founding community ahead of our 2026 launch.
          </p>
        </div>

        {/* Selection Cards */}
        <div className="grid grid-cols-1 gap-4 pt-2">
          
          {/* Choice 1: Resident / Founding Neighbour */}
          <button
            type="button"
            onClick={() => {
              onClose();
              onSelectResident();
            }}
            className="group flex items-start gap-4 p-5 rounded-[24px] bg-[#FCFAF7] dark:bg-[#1C281F] border border-[#0e0f0c]/8 dark:border-white/10 hover:border-[#7ED957] hover:shadow-md transition-all text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C472A] dark:focus-visible:ring-[#7ED957]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e2f6d5] dark:bg-[#1C472A] text-[#054d28] dark:text-[#7ED957]">
              <UserCheck className="h-6 w-6" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-heading-18 font-bold text-[#0e0f0c] dark:text-white group-hover:text-[#054d28] dark:group-hover:text-[#7ED957] transition-colors">
                  I&apos;m a Resident
                </span>
                <ArrowRight className="h-4 w-4 text-[#868685] group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-copy-14 text-[#454745] dark:text-[#99A893]">
                Become one of our first 1,000 Founding Neighbours. Discover nearby events, local business specials, and community updates.
              </p>
            </div>
          </button>

          {/* Choice 2: Business / Founding Business */}
          <button
            type="button"
            onClick={() => {
              onClose();
              onSelectBusiness();
            }}
            className="group flex items-start gap-4 p-5 rounded-[24px] bg-[#FCFAF7] dark:bg-[#1C281F] border border-[#0e0f0c]/8 dark:border-white/10 hover:border-[#7ED957] hover:shadow-md transition-all text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C472A] dark:focus-visible:ring-[#7ED957]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#7ED957] text-[#0e0f0c]">
              <Store className="h-6 w-6" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-heading-18 font-bold text-[#0e0f0c] dark:text-white group-hover:text-[#054d28] dark:group-hover:text-[#7ED957] transition-colors">
                  I&apos;m a Local Business
                </span>
                <ArrowRight className="h-4 w-4 text-[#868685] group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-copy-14 text-[#454745] dark:text-[#99A893]">
                Register your interest as a Founding Business. Get visible to local residents, receive window stickers, and shape launch perks.
              </p>
            </div>
          </button>

        </div>

        {/* Footer Note */}
        <p className="text-xs text-center text-[#868685] pt-2">
          No immediate payment or subscription required. 100% free for residents.
        </p>

      </div>
    </div>
  );
}
