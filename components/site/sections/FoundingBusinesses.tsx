"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { submitRegistration } from "@/lib/registrations";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";
import { CtaLink } from "@/components/site/ui/CtaLink";
import { CheckboxField, FormError, SelectField, TextField } from "@/components/site/forms/Fields";
import { SuccessState } from "@/components/site/forms/SuccessState";

// Must match the business count shown in the Progress bar.
const BUSINESS_COUNT = 42;

const BENEFITS = [
  "Founding Business recognition",
  "Early platform access",
  "Input into how Hello Linden is developed",
  "Launch visibility",
  "Founding badge and window sticker",
  "Potential launch opportunities",
  "Priority onboarding",
];

const CATEGORIES = [
  "Café / Restaurant / Bakery",
  "Retail & Boutique Shop",
  "Health & Wellness / Beauty",
  "Professional & Home Services",
  "Education & School Services",
  "Art, Craft & Creative Spot",
  "Other Local Service",
].map((c) => ({ value: c, label: c }));

const EMPTY = {
  businessName: "",
  contactPerson: "",
  email: "",
  mobile: "",
  category: CATEGORIES[0].value,
  address: "",
  wantsWindowSticker: true,
  consent: false,
};

export function FoundingBusinesses() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const [error, setError] = useState<string | null>(null);
  const [number, setNumber] = useState(BUSINESS_COUNT + 1);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) return;
    setStatus("submitting");
    setError(null);
    const result = await submitRegistration({
      roles: ["business", "founding_business"],
      contact: { fullName: form.contactPerson, email: form.email, mobile: form.mobile },
      business: {
        name: form.businessName,
        category: form.category,
        address: form.address,
        wantsWindowSticker: form.wantsWindowSticker,
      },
      consentAt: new Date().toISOString(),
    });
    if (!result.ok) {
      setError(result.error);
      setStatus("idle");
      return;
    }
    setStatus("done");
  };

  const reset = () => {
    setNumber((n) => n + 1);
    setForm(EMPTY);
    setStatus("idle");
  };

  return (
    <section id="businesses" className="relative bg-hh-warm py-[100px] split:py-[130px]">
      <span id="business" aria-hidden="true" className="absolute top-0 block h-0" />
      <div className="site-container flex flex-col items-start gap-[60px] xl:flex-row xl:gap-[100px]">
        <div className="flex w-full flex-1 flex-col items-start gap-10">
          <div className="flex flex-col items-start gap-5">
            <SectionEyebrow label="For Businesses & Founding Partners" tone="light" />
            <h2 className="m-0 type-h2 text-hh-onyx">Put Your Business on the Neighbourhood Map</h2>
            <p className="m-0 max-w-[620px] type-body-lg text-hh-muted">
              Hello Linden is not another directory. It is an active local ecosystem built to help
              independent businesses connect directly with residents living around them.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="m-0 type-h3 text-hh-onyx">
              Connect directly with neighbours who want to support local.
            </h3>
            <p className="m-0 type-body text-hh-muted">
              Instead of competing against global algorithms, Hello Linden creates a dedicated space
              for your suburb&apos;s independent shops, cafes, and services.
            </p>
          </div>

          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-chip bg-hh-forest text-hh-lime">
                  <Check aria-hidden className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="type-body text-hh-onyx">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2 border-l-2 border-hh-hunter py-1 pl-[18px]">
            <p className="m-0 text-[16px] font-bold leading-6 text-hh-hunter">
              First 100 Founding Businesses (No Pre-payment Required)
            </p>
            <p className="m-0 text-[16px] leading-6 text-hh-muted">
              Founding Businesses receive window stickers, early platform access, launch visibility,
              and input into business features before public launch.
            </p>
          </div>
        </div>

        <div className="w-full rounded-card border border-hh-rule-dark bg-white p-6 split:p-10 xl:w-[560px] xl:shrink-0">
          {status === "done" ? (
            <SuccessState
              badge={`Founding Business #${number} Registered`}
              heading={`Thank You, ${form.contactPerson}!`}
              resetLabel="Submit another business location"
              onReset={reset}
            >
              <p className="m-0">
                We have registered <span className="font-bold text-hh-onyx">{form.businessName}</span>{" "}
                as a Founding Business for Hello Linden. We&apos;ll be in touch with onboarding details
                prior to launch.
              </p>
            </SuccessState>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-5" aria-labelledby="business-form-title">
              <div className="flex flex-col gap-2 border-b border-hh-rule-dark pb-5">
                <span className="w-fit rounded-chip bg-hh-mint px-3 py-1 text-[14px] font-bold leading-5 text-hh-hunter">
                  Founding Expression of Interest
                </span>
                <h3 id="business-form-title" className="m-0 type-h3 text-hh-onyx">
                  Register Your Business
                </h3>
                <p className="m-0 text-[15px] leading-[22px] text-hh-muted">
                  Register your interest to help shape Hello Linden. No payment required today.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <TextField
                  label="Business Name"
                  required
                  autoComplete="organization"
                  value={form.businessName}
                  onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                  placeholder="e.g. Linden Coffee Roasters"
                />
                <TextField
                  label="Contact Person"
                  required
                  autoComplete="name"
                  value={form.contactPerson}
                  onChange={(e) => setForm({ ...form, contactPerson: e.target.value })}
                  placeholder="e.g. Maria Perez"
                />
                <TextField
                  label="Business Email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="maria@lindencoffee.co.za"
                />
                <TextField
                  label="Mobile / WhatsApp"
                  type="tel"
                  autoComplete="tel"
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  placeholder="082 987 6543"
                />
                <SelectField
                  label="Business Category"
                  options={CATEGORIES}
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                />
                <TextField
                  label="Street Address in Linden"
                  autoComplete="street-address"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  placeholder="e.g. 4th Avenue, Linden"
                />
              </div>

              <CheckboxField
                checked={form.wantsWindowSticker}
                onChange={(e) => setForm({ ...form, wantsWindowSticker: e.target.checked })}
              >
                Yes, reserve a Founding Business window sticker &amp; launch badge for our store.
              </CheckboxField>

              {/* POPIA consent: explicit opt-in, never pre-ticked. */}
              <CheckboxField
                required
                checked={form.consent}
                onChange={(e) => setForm({ ...form, consent: e.target.checked })}
              >
                I agree to receive Hello Linden updates and for these details to be used as described
                in the{" "}
                <a href="/privacy" className="font-bold text-hh-hunter underline underline-offset-2">
                  Privacy Policy
                </a>
                .
              </CheckboxField>

              <FormError message={error} />

              <CtaLink type="submit" surface="light" disabled={status === "submitting"} className="w-full">
                {status === "submitting" ? "Registering…" : "Become a Founding Business"}
              </CtaLink>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
