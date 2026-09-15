"use client";

import { Dialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: React.ReactNode;
}

/** Base UI Dialog shell: focus trap, Escape to close, scroll lock and focus return come built in. */
export function Modal({ open, onOpenChange, title, description, children }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={(next) => onOpenChange(next)}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-[100] bg-hh-onyx/70" />
        <Dialog.Popup className="fixed left-1/2 top-1/2 z-[101] flex max-h-[calc(100dvh-32px)] w-[calc(100%-32px)] max-w-[540px] -translate-x-1/2 -translate-y-1/2 flex-col overflow-y-auto rounded-card bg-white p-6 focus:outline-none split:p-10">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div className="flex flex-col gap-2">
              <Dialog.Title className="m-0 font-heading text-[28px] font-medium leading-[32px] tracking-[-1px] text-hh-onyx">
                {title}
              </Dialog.Title>
              {description ? (
                <Dialog.Description className="m-0 type-body text-hh-muted">{description}</Dialog.Description>
              ) : null}
            </div>
            <Dialog.Close
              aria-label="Close"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-button bg-hh-panel text-hh-onyx transition-colors hover:bg-hh-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-forest"
            >
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>
          {children}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
