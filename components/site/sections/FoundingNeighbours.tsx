"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { submitRegistration } from "@/lib/registrations";
import { PROGRESS } from "@/lib/progress";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";
import { CtaLink } from "@/components/site/ui/CtaLink";
import { CheckboxField, FormError, SelectField, TextField } from "@/components/site/forms/Fields";
import { SuccessState } from "@/components/site/forms/SuccessState";

const NEIGHBOUR_COUNT = PROGRESS.neighbours.count;

const BENEFITS = [
  "Discover events, markets & school activities nearby",
  "Find vetted local businesses & exclusive resident specials",
  "Receive trusted suburb information & emergency advisories",
  "Follow local civic initiatives & community projects",
  "Discover hidden gems & local recommendations",
  "Earn rewards for exploring & supporting your suburb",
];

const PERKS = [
  "Numbered Founding Badge",
  "Early app access prior to public launch",
  "Invitations to community launch events",
  "Direct input into platform development",
  "Opportunities to test new features",
];

const SUBURBS = [
  { value: "Linden", label: "Linden, Johannesburg" },
  { value: "Greenside", label: "Greenside" },
  { value: "Parkhurst", label: "Parkhurst" },
  { value: "Melville", label: "Melville" },
  { value: "Other", label: "Other Suburb" },
];

const INTERESTS = [
  "Local Business Specials & Deals",
  "Community Events & Markets",
  "Safety & Municipal Advisories",
  "School & Youth Activities",
  "Volunteering & Civic Projects",
  "Buy & Sell Marketplace",
];

const EMPTY = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  suburb: "Linden",
  interests: [] as string[],
  consent: false,
};

export function FoundingNeighbours() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const [error, setError] = useState<string | null>(null);
  const [number, setNumber] = useState(NEIGHBOUR_COUNT + 1);

  const toggleInterest = (interest: string) =>
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) return;
    setStatus("submitting");
    setError(null);
    const result = await submitRegistration({
      roles: ["resident", "founding_neighbour"],
      contact: {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        mobile: form.mobile,
      },
      suburb: form.suburb,
      interests: form.interests,
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
    <section id="founding-neighbours" className="relative bg-hh-forest py-[100px] split:py-[130px]">
      <span id="residents" aria-hidden="true" className="absolute top-0 block h-0" />
      <div className="site-container flex flex-col items-start gap-[60px] xl:flex-row xl:gap-[100px]">
        <div className="flex w-full flex-1 flex-col items-start gap-10">
          <div className="flex flex-col items-start gap-5">
            <SectionEyebrow label="For Residents & Founding Neighbours" tone="dark" />
            <h2 className="m-0 type-h2 text-white">Become a Founding Neighbour</h2>
            <p className="m-0 max-w-[620px] type-body-lg text-hh-mint">
              We are recognizing the first 1,000 residents who register early. Help shape Hello
              Linden before launch and get early platform access.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="m-0 type-h3 text-white">Everything happening in Linden, in one place.</h3>
            <p className="m-0 type-body text-hh-mint">
              Hello Linden brings your suburb together without noise or spam. You control what you
              follow and discover.
            </p>
          </div>

          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-chip bg-hh-lime text-hh-onyx">
                  <Check aria-hidden className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="type-body text-white">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 border-l-2 border-hh-lime py-1 pl-[18px]">
            <p className="m-0 text-[16px] font-bold leading-6 text-hh-lime">
              Founding Neighbour Recognition (First 1,000)
            </p>
            <ul className="m-0 flex list-none flex-col gap-1 p-0">
              {PERKS.map((perk) => (
                <li key={perk} className="text-[16px] leading-6 text-hh-mint">
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full rounded-card bg-white p-6 split:p-10 xl:w-[560px] xl:shrink-0">
          {status === "done" ? (
            <SuccessState
              badge={`Founding Neighbour #${number} Confirmed`}
              heading={`Welcome to Hello Linden, ${form.firstName}!`}
              resetLabel="Register another family member"
              onReset={reset}
            >
              <p className="m-0">
                Thank you for joining our founding community. We&apos;ve sent a confirmation email to{" "}
                <span className="font-bold text-hh-onyx">{form.email}</span> with your Founding
                Member details.
              </p>
              <p className="m-0">
                When the Hello Linden app launches in 2026, you will be able to log in directly with
                this email without re-registering.
              </p>
            </SuccessState>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-5" aria-labelledby="neighbour-form-title">
              <div className="flex flex-col gap-2 border-b border-hh-rule-dark pb-5">
                <span className="w-fit rounded-chip bg-hh-mint px-3 py-1 text-[14px] font-bold leading-5 text-hh-hunter">
                  Pre-Launch Registration
                </span>
                <h3 id="neighbour-form-title" className="m-0 type-h3 text-hh-onyx">
                  Register as a Founding Neighbour
                </h3>
                <p className="m-0 text-[15px] leading-[22px] text-hh-muted">
                  100% free. Your address data remains private and protected under POPIA.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <TextField
                  label="First Name"
                  required
                  autoComplete="given-name"
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  placeholder="e.g. Riley"
                />
                <TextField
                  label="Last Name"
                  required
                  autoComplete="family-name"
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  placeholder="e.g. Smith"
                />
                <TextField
                  label="Email Address"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="riley@example.com"
                />
                <TextField
                  label="Mobile Number"
                  type="tel"
                  autoComplete="tel"
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  placeholder="082 123 4567"
                />
              </div>

              <SelectField
                label="Your Suburb"
                options={SUBURBS}
                value={form.suburb}
                onChange={(e) => setForm({ ...form, suburb: e.target.value })}
              />

              <fieldset className="m-0 flex flex-col gap-3 border-0 p-0">
                <legend className="mb-3 text-[14px] font-bold leading-5 text-hh-onyx">
                  What are you most interested in? (Select all that apply)
                </legend>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {INTERESTS.map((interest) => (
                    <CheckboxField
                      key={interest}
                      boxed
                      checked={form.interests.includes(interest)}
                      onChange={() => toggleInterest(interest)}
                    >
                      {interest}
                    </CheckboxField>
                  ))}
                </div>
              </fieldset>

              {/* POPIA consent: explicit opt-in, never pre-ticked. */}
              <CheckboxField
                required
                checked={form.consent}
                onChange={(e) => setForm({ ...form, consent: e.target.checked })}
              >
                I agree to receive Hello Linden updates and for my details to be used as described in
                the{" "}
                <a href="/privacy" className="font-bold text-hh-hunter underline underline-offset-2">
                  Privacy Policy
                </a>
                .
              </CheckboxField>

              <FormError message={error} />

              <CtaLink type="submit" surface="light" disabled={status === "submitting"} className="w-full">
                {status === "submitting" ? "Registering…" : "Become a Founding Neighbour"}
              </CtaLink>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
