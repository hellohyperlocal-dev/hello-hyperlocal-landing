"use client";

import React, { useEffect, useRef } from "react";
import { X, Sparkles } from "lucide-react";
import { EyebrowPill } from "@/components/ui/EyebrowPill";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
      }
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
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0e0f0c]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl rounded-[32px] bg-[#0e0f0c] p-4 sm:p-6 shadow-2xl border border-white/10 text-left space-y-4 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video player"
          className="absolute -top-3 -right-3 sm:top-4 sm:right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-md transition-colors z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ED957]"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Video Header */}
        <div className="flex items-center gap-3 px-2 pt-1">
          <EyebrowPill icon={Sparkles} variant="dark">
            Hello Linden Introduction
          </EyebrowPill>
          <h2 id="video-modal-title" className="sr-only">
            Hello Hyperlocal Introduction Video
          </h2>
        </div>

        {/* Video Player Frame */}
        <div className="relative w-full aspect-video rounded-[24px] overflow-hidden bg-black border border-white/10 shadow-inner">
          <video
            ref={videoRef}
            src="/video/Hello Hyper Local.mp4"
            controls
            playsInline
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
