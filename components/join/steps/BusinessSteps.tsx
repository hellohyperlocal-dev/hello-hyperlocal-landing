"use client";

import { CheckboxField, TextField } from "@/components/site/forms/Fields";
import { FOUNDING_BUSINESS_BENEFITS } from "@/lib/join-options";
import type { JoinForm, SetField, StepDef } from "../types";

/** Boxed radio, matching the boxed CheckboxField used for interests. */
function ChoiceCard({
  checked,
  onChange,
  title,
  children,
}: {
  checked: boolean;
  onChange: () => void;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <label
      className={`flex cursor-pointer items-start gap-3 rounded-card border p-4 transition-colors ${
        checked ? "border-hh-forest bg-hh-mint" : "border-hh-rule-dark bg-white hover:bg-hh-panel"
      }`}
    >
      <input
        type="radio"
        name="founding"
        required
        checked={checked}
        onChange={onChange}
        className="mt-1 h-5 w-5 shrink-0 accent-hh-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-forest focus-visible:ring-offset-2"
      />
      <span className="flex flex-col gap-1">
        <span className="type-h3 text-hh-onyx">{title}</span>
        {children ? (
          <span className="text-[15px] leading-[22px] text-hh-muted">{children}</span>
        ) : null}
      </span>
    </label>
  );
}

export function businessSteps(form: JoinForm, set: SetField): StepDef[] {
  return [
    {
      key: "business",
      title: "Tell us about your business",
      description: "You'll choose your business category in the app when you set up your profile.",
      body: (
        <TextField
          label="Business Name"
          required
          autoComplete="organization"
          autoFocus
          value={form.businessName}
          onChange={(e) => set("businessName", e.target.value)}
          placeholder="e.g. Linden Coffee Roasters"
        />
      ),
    },
    {
      key: "contact",
      title: "Who should we speak to?",
      description:
        "This email is how you'll sign into the app at launch, so you won't register again.",
      body: (
        <div className="flex flex-col gap-4">
          <TextField
            label="Contact Person"
            required
            autoComplete="name"
            autoFocus
            value={form.contactPerson}
            onChange={(e) => set("contactPerson", e.target.value)}
            placeholder="e.g. Maria Perez"
          />
          <TextField
            label="Business Email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="maria@lindencoffee.co.za"
          />
          <TextField
            label="Mobile / WhatsApp"
            type="tel"
            autoComplete="tel"
            value={form.mobile}
            onChange={(e) => set("mobile", e.target.value)}
            placeholder="082 987 6543"
          />
        </div>
      ),
    },
    {
      key: "address",
      title: "Where can neighbours find you?",
      description: "Residents use this to discover businesses near them.",
      body: (
        <TextField
          label="Street Address in Linden"
          autoComplete="street-address"
          autoFocus
          value={form.businessAddress}
          onChange={(e) => set("businessAddress", e.target.value)}
          placeholder="e.g. 4th Avenue, Linden"
        />
      ),
    },
    {
      key: "founding",
      title: "Would you like to be a Founding Business?",
      description: "The first 100 businesses helping shape Hello Linden. No payment required.",
      body: (
        <div className="flex flex-col gap-4">
          <ul className="m-0 flex list-none flex-col gap-2 rounded-card bg-hh-mint p-5 text-[15px] leading-[22px] text-hh-onyx">
            {FOUNDING_BUSINESS_BENEFITS.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>

          <div className="flex flex-col gap-3">
            <ChoiceCard
              checked={form.founding === "yes"}
              onChange={() => set("founding", "yes")}
              title="Yes, count us in"
            >
              Register our expression of interest as a Founding Business.
            </ChoiceCard>
            <ChoiceCard
              checked={form.founding === "no"}
              onChange={() => set("founding", "no")}
              title="Not right now"
            >
              Just list our business when Hello Linden launches.
            </ChoiceCard>
          </div>

          {form.founding === "yes" ? (
            <CheckboxField
              checked={form.wantsWindowSticker}
              onChange={(e) => set("wantsWindowSticker", e.target.checked)}
            >
              Yes, reserve a Founding Business window sticker &amp; launch badge for our store.
            </CheckboxField>
          ) : null}
        </div>
      ),
    },
    {
      key: "consent",
      title: "One last thing",
      submitLabel:
        form.founding === "yes" ? "Become a Founding Business" : "Register Your Business",
      body: (
        /* POPIA consent: explicit opt-in, never pre-ticked. */
        <CheckboxField
          required
          checked={form.consent}
          onChange={(e) => set("consent", e.target.checked)}
        >
          I agree to receive Hello Linden updates and for these details to be used as described in
          the{" "}
          <a href="/privacy" className="font-bold text-hh-hunter underline underline-offset-2">
            Privacy Policy
          </a>
          .
        </CheckboxField>
      ),
    },
  ];
}
