"use client";

import { CheckboxField, SelectField, TextField } from "@/components/site/forms/Fields";
import { INTERESTS, NEIGHBOUR_PERKS, SUBURBS } from "@/lib/join-options";
import type { JoinForm, SetField, StepDef } from "../types";

export function residentSteps(form: JoinForm, set: SetField): StepDef[] {
  const toggleInterest = (interest: string) =>
    set(
      "interests",
      form.interests.includes(interest)
        ? form.interests.filter((i) => i !== interest)
        : [...form.interests, interest],
    );

  return [
    {
      key: "name",
      title: "First, what should we call you?",
      description: "Neighbours only ever see your first name and surname initial.",
      body: (
        <div className="flex flex-col gap-4">
          <TextField
            label="First Name"
            required
            autoComplete="given-name"
            autoFocus
            value={form.firstName}
            onChange={(e) => set("firstName", e.target.value)}
            placeholder="e.g. Riley"
          />
          <TextField
            label="Last Name"
            required
            autoComplete="family-name"
            value={form.lastName}
            onChange={(e) => set("lastName", e.target.value)}
            placeholder="e.g. Smith"
          />
        </div>
      ),
    },
    {
      key: "contact",
      title: "How can we reach you?",
      description:
        "Your email is how you'll sign into the app at launch, so you won't register again.",
      body: (
        <div className="flex flex-col gap-4">
          <TextField
            label="Email Address"
            type="email"
            required
            autoComplete="email"
            autoFocus
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="riley@example.com"
          />
          <TextField
            label="Mobile Number (optional)"
            type="tel"
            autoComplete="tel"
            value={form.mobile}
            onChange={(e) => set("mobile", e.target.value)}
            placeholder="082 123 4567"
          />
        </div>
      ),
    },
    {
      key: "suburb",
      title: "Where do you live, and what interests you?",
      body: (
        <div className="flex flex-col gap-6">
          <SelectField
            label="Your Suburb"
            value={form.suburb}
            onChange={(e) => set("suburb", e.target.value)}
            options={SUBURBS.map((s) => ({ value: s.value, label: s.label }))}
          />

          <fieldset className="m-0 border-0 p-0">
            <legend className="mb-3 p-0 text-[14px] font-bold leading-5 text-hh-onyx">
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
        </div>
      ),
    },
    {
      key: "consent",
      title: "You're about to become a Founding Neighbour",
      description: `One of the first ${1000} residents helping shape Hello Linden before launch.`,
      submitLabel: "Become a Founding Neighbour",
      body: (
        <div className="flex flex-col gap-6">
          <ul className="m-0 flex list-none flex-col gap-2 rounded-card bg-hh-mint p-5 text-[15px] leading-[22px] text-hh-onyx">
            {NEIGHBOUR_PERKS.map((perk) => (
              <li key={perk}>{perk}</li>
            ))}
          </ul>

          {/* POPIA consent: explicit opt-in, never pre-ticked. */}
          <CheckboxField
            required
            checked={form.consent}
            onChange={(e) => set("consent", e.target.checked)}
          >
            I agree to receive Hello Linden updates and for my details to be used as described in the{" "}
            <a href="/privacy" className="font-bold text-hh-hunter underline underline-offset-2">
              Privacy Policy
            </a>
            .
          </CheckboxField>
        </div>
      ),
    },
  ];
}
