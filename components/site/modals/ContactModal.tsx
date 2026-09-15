"use client";

import { useState } from "react";
import { submitRegistration } from "@/lib/registrations";
import { Modal } from "@/components/site/ui/Modal";
import { CtaLink } from "@/components/site/ui/CtaLink";
import { FormError, SelectField, TextAreaField, TextField } from "@/components/site/forms/Fields";

const TOPICS = [
  "General Inquiry",
  "Resident Verification",
  "Data & Privacy",
  "Local Merchant Partnership",
  "Community Initiative",
].map((t) => ({ value: t, label: t }));

const EMPTY = { name: "", email: "", suburb: "Linden", topic: TOPICS[0].value, message: "" };

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      setForm(EMPTY);
      setStatus("idle");
      setError(null);
    }
    onOpenChange(next);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    // A reply to a question, not a marketing opt-in, so no consent timestamp.
    const result = await submitRegistration({
      roles: ["general_enquiry"],
      contact: { fullName: form.name, email: form.email },
      suburb: form.suburb,
      enquiry: { topic: form.topic, message: form.message },
      consentAt: null,
    });
    if (!result.ok) {
      setError(result.error);
      setStatus("idle");
      return;
    }
    setStatus("done");
  };

  if (status === "done") {
    return (
      <Modal open={open} onOpenChange={handleOpenChange} title="Message received!">
        <div role="status" className="flex flex-col items-start gap-6">
          <p className="m-0 type-body text-hh-muted">
            Thank you, <strong className="text-hh-onyx">{form.name || "neighbour"}</strong>. Our local
            community desk has received your message and will respond to{" "}
            <strong className="text-hh-onyx">{form.email}</strong> shortly.
          </p>
          <CtaLink surface="light" onClick={() => handleOpenChange(false)}>
            Done
          </CtaLink>
        </div>
      </Modal>
    );
  }

  return (
    <Modal
      open={open}
      onOpenChange={handleOpenChange}
      title="Send us a message"
      description="Have a question about resident verification, suburb boundaries, or platform features? Our team is here to help."
    >
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <TextField
            label="Your Name"
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="e.g. Liam K."
          />
          <TextField
            label="Suburb"
            value={form.suburb}
            onChange={(e) => setForm({ ...form, suburb: e.target.value })}
            placeholder="e.g. Linden"
          />
        </div>
        <TextField
          label="Email Address"
          type="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="you@example.co.za"
        />
        <SelectField
          label="Topic"
          options={TOPICS}
          value={form.topic}
          onChange={(e) => setForm({ ...form, topic: e.target.value })}
        />
        <TextAreaField
          label="Message"
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="How can we help your neighbourhood?"
        />
        <FormError message={error} />
        <CtaLink type="submit" surface="light" disabled={status === "submitting"} className="w-full">
          {status === "submitting" ? "Sending…" : "Send message"}
        </CtaLink>
      </form>
    </Modal>
  );
}
