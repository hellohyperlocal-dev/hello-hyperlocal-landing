"use client";

import { useState } from "react";
import { submitRegistration } from "@/lib/registrations";
import { Modal } from "@/components/site/ui/Modal";
import { CtaLink } from "@/components/site/ui/CtaLink";
import { FormError, SelectField, TextField } from "@/components/site/forms/Fields";

const INQUIRY_TYPES = [
  { value: "Strategic Partner", label: "Strategic Brand Partner" },
  { value: "Community Org", label: "Community Org / School / LCA" },
  { value: "Investor", label: "Strategic Investor" },
  { value: "Media", label: "Media & Press" },
];

const EMPTY = { name: "", org: "", email: "", role: INQUIRY_TYPES[0].value };

interface PartnerModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PartnerModal({ open, onOpenChange }: PartnerModalProps) {
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
    // An enquiry the team replies to, not a marketing opt-in, so no consent timestamp.
    const result = await submitRegistration({
      roles: ["partner_interest"],
      contact: { fullName: form.name, email: form.email },
      partner: { organisation: form.org, inquiryType: form.role },
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
      <Modal open={open} onOpenChange={handleOpenChange} title="Inquiry Received">
        <div role="status" className="flex flex-col items-start gap-6">
          <p className="m-0 type-body text-hh-muted">
            Thank you, <strong className="text-hh-onyx">{form.name}</strong>. Our founding team will
            review your inquiry and share our prospectus shortly via{" "}
            <strong className="text-hh-onyx">{form.email}</strong>.
          </p>
          <CtaLink surface="light" onClick={() => handleOpenChange(false)}>
            Close window
          </CtaLink>
        </div>
      </Modal>
    );
  }

  return (
    <Modal
      open={open}
      onOpenChange={handleOpenChange}
      title="Partner With Hello Hyperlocal"
      description="Request our partnership prospectus or schedule a founding discussion."
    >
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <TextField
          label="Your Full Name"
          required
          autoComplete="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="e.g. David Williams"
        />
        <TextField
          label="Organization / Brand"
          required
          autoComplete="organization"
          value={form.org}
          onChange={(e) => setForm({ ...form, org: e.target.value })}
          placeholder="e.g. Linden Community Association / Brand"
        />
        <TextField
          label="Email Address"
          type="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="david@example.co.za"
        />
        <SelectField
          label="Inquiry Type"
          options={INQUIRY_TYPES}
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        />
        <FormError message={error} />
        <CtaLink type="submit" surface="light" disabled={status === "submitting"} className="w-full">
          {status === "submitting" ? "Sending…" : "Request Prospectus"}
        </CtaLink>
      </form>
    </Modal>
  );
}
