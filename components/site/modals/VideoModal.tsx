"use client";

import { Dialog } from "@base-ui/react/dialog";
import { useReducedMotion } from "motion/react";
import { X } from "lucide-react";

interface VideoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function VideoModal({ open, onOpenChange }: VideoModalProps) {
  const reduceMotion = useReducedMotion();

  return (
    <Dialog.Root open={open} onOpenChange={(next) => onOpenChange(next)}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-[100] bg-hh-onyx/80" />
        <Dialog.Popup className="fixed left-1/2 top-1/2 z-[101] w-[calc(100%-32px)] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-card bg-hh-onyx p-4 focus:outline-none sm:p-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <Dialog.Title className="m-0 font-heading text-[22px] font-medium leading-[26.4px] tracking-[-1px] text-white">
              Hello Linden introduction
            </Dialog.Title>
            <Dialog.Close
              aria-label="Close video"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-button bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-lime"
            >
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>

          <div className="relative aspect-video w-full overflow-hidden rounded-card bg-black">
            {/* Popup unmounts on close, which stops playback. No autoplay when reduced motion is set. */}
            <video
              src="/video/Hello Hyper Local.mp4"
              controls
              playsInline
              preload="none"
              autoPlay={!reduceMotion}
              className="h-full w-full object-contain"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
