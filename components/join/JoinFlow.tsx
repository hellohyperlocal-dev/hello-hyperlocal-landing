"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { submitRegistration, type RegistrationRole } from "@/lib/registrations";
import { FormError } from "@/components/site/forms/Fields";
import { SuccessState } from "@/components/site/forms/SuccessState";
import { CtaLink } from "@/components/site/ui/CtaLink";
import { JoinShell } from "./JoinShell";
import { TypeChooser } from "./TypeChooser";
import { residentSteps } from "./steps/ResidentSteps";
import { businessSteps } from "./steps/BusinessSteps";
import { EMPTY_FORM, type JoinForm, type JoinType } from "./types";

function parseType(value: string | null): JoinType | null {
  return value === "resident" || value === "business" ? value : null;
}

export function JoinFlow() {
  const router = useRouter();
  const params = useSearchParams();

  const type = parseType(params.get("type"));
  const stepParam = Number(params.get("step") ?? "1");

  const [form, setForm] = useState<JoinForm>(EMPTY_FORM);
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const [error, setError] = useState<string | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const steps = type === "resident" ? residentSteps(form, set) : type === "business" ? businessSteps(form, set) : [];
  // Clamp rather than 404 on a hand-edited ?step= that is out of range.
  const step = type ? Math.min(Math.max(Number.isFinite(stepParam) ? stepParam : 1, 1), steps.length) : 0;
  const current = type ? steps[step - 1] : null;

  function set<K extends keyof JoinForm>(key: K, value: JoinForm[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  // The URL is the source of truth for where you are, so refresh and browser Back
  // behave the way people expect mid-form.
  const go = (nextType: JoinType | null, nextStep: number) => {
    const query = nextType ? `?type=${nextType}&step=${nextStep}` : "";
    router.replace(`/join${query}`, { scroll: false });
  };

  // Move focus to the new step's heading: without this, a keyboard or screen reader
  // user stays parked on a button that no longer exists.
  useEffect(() => {
    headingRef.current?.focus();
  }, [type, step, status]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!type) return;

    if (step < steps.length) {
      go(type, step + 1);
      return;
    }

    setStatus("submitting");
    setError(null);

    const roles: RegistrationRole[] =
      type === "resident"
        ? ["resident", "founding_neighbour"]
        : form.founding === "yes"
          ? ["business", "founding_business"]
          : ["business"];

    const result = await submitRegistration({
      roles,
      contact:
        type === "resident"
          ? {
              firstName: form.firstName,
              lastName: form.lastName,
              email: form.email,
              mobile: form.mobile,
            }
          : { fullName: form.contactPerson, email: form.email, mobile: form.mobile },
      suburb: type === "resident" ? form.suburb : undefined,
      interests: type === "resident" ? form.interests : undefined,
      business:
        type === "business"
          ? {
              name: form.businessName,
              address: form.businessAddress,
              wantsWindowSticker: form.founding === "yes" && form.wantsWindowSticker,
            }
          : undefined,
      consentAt: new Date().toISOString(),
    });

    if (!result.ok) {
      setError(result.error);
      setStatus("idle");
      return;
    }

    setStatus("done");
  };

  if (status === "done") {
    const name = type === "resident" ? form.firstName : form.contactPerson;
    return (
      <JoinShell step={1} total={1}>
        <SuccessState
          badge={type === "resident" ? "Founding Neighbour" : "Business Registered"}
          heading={name ? `Welcome to Hello Linden, ${name}!` : "Welcome to Hello Linden!"}
          resetLabel="Register someone else"
          onReset={() => {
            setForm(EMPTY_FORM);
            setStatus("idle");
            go(null, 1);
          }}
        >
          <p className="m-0">
            You&apos;re on the list. When Hello Linden launches in 2026, sign in to the app with{" "}
            <span className="font-bold text-hh-onyx">{form.email}</span> — your details will already
            be there, so there&apos;s nothing to fill in twice.
          </p>
          <p className="m-0">
            <Link href="/" className="font-bold text-hh-hunter underline underline-offset-4">
              Back to the home page
            </Link>
          </p>
        </SuccessState>
      </JoinShell>
    );
  }

  if (!type || !current) {
    return (
      <JoinShell step={0} total={4}>
        <TypeChooser headingRef={headingRef} onChoose={(chosen) => go(chosen, 1)} />
      </JoinShell>
    );
  }

  return (
    <JoinShell
      step={step}
      total={steps.length}
      onBack={() => (step === 1 ? go(null, 1) : go(type, step - 1))}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current.key}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          {/* A form per step, so Enter advances and the browser blocks an invalid step. */}
          <form onSubmit={onSubmit} className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className="m-0 text-[14px] font-bold leading-5 text-hh-hunter">
                Step {step} of {steps.length}
              </p>
              <h1
                ref={headingRef}
                tabIndex={-1}
                className="m-0 type-h2 text-hh-onyx focus:outline-none"
              >
                {current.title}
              </h1>
              {current.description ? (
                <p className="m-0 type-body text-hh-muted">{current.description}</p>
              ) : null}
            </div>

            {current.body}

            <FormError message={error} />

            <CtaLink
              type="submit"
              surface="light"
              disabled={status === "submitting"}
              className="w-full"
            >
              {status === "submitting"
                ? "Registering…"
                : (current.submitLabel ?? "Continue")}
            </CtaLink>
          </form>
        </motion.div>
      </AnimatePresence>
    </JoinShell>
  );
}
