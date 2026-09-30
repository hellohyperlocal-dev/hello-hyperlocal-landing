"use client";

import { Dialog } from "@base-ui/react/dialog";
import { useReducedMotion } from "motion/react";
import { X } from "lucide-react";

interface VideoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  videoSrc?: string;
  title?: string;
}

export function VideoModal({
  open,
  onOpenChange,
  videoSrc = "/video/Promo Video .mp4",
  title = "Hello Linden introduction",
}: VideoModalProps) {
  const reduceMotion = useReducedMotion();

  return (
    <Dialog.Root open={open} onOpenChange={(next) => onOpenChange(next)}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md" />
        <Dialog.Popup
          aria-label={title}
          className="fixed left-1/2 top-1/2 z-[101] w-[calc(100%-32px)] max-w-5xl -translate-x-1/2 -translate-y-1/2 bg-transparent p-0 focus:outline-none"
        >
          <Dialog.Title className="sr-only">{title}</Dialog.Title>

          {/* Clean Theater Video Container */}
          <div className="relative aspect-video w-full max-h-[85vh] overflow-hidden rounded-[12px] bg-black shadow-2xl sm:rounded-[16px]">
            {/* Floating Close Button */}
            <Dialog.Close
              aria-label="Close video"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-all hover:bg-black/90 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-lime"
            >
              <X className="h-5 w-5" />
            </Dialog.Close>

            <video
              key={videoSrc}
              src={videoSrc}
              controls
              playsInline
              preload="metadata"
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
