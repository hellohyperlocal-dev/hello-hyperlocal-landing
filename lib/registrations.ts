export type RegistrationRole =
  | "resident"
  | "business"
  | "founding_neighbour"
  | "founding_business"
  | "partner_interest"
  | "general_enquiry";

export interface RegistrationPayload {
  roles: RegistrationRole[];
  contact: {
    firstName?: string;
    lastName?: string;
    fullName?: string;
    email: string;
    mobile?: string;
  };
  suburb?: string;
  interests?: string[];
  business?: {
    name: string;
    category?: string;
    address?: string;
    wantsWindowSticker?: boolean;
  };
  partner?: {
    organisation: string;
    inquiryType: string;
  };
  enquiry?: {
    topic: string;
    message: string;
  };
  /** ISO timestamp of the explicit opt-in, or null when none was given. */
  consentAt: string | null;
}

export interface RegistrationRecord extends RegistrationPayload {
  source: "website";
  submittedAt: string;
}

export type RegistrationResult =
  | { ok: true; record: RegistrationRecord }
  | { ok: false; error: string };

/**
 * Single entry point for every website sign-up. The app will read the same
 * records, so email is normalised here to match app accounts later.
 * No backend is connected yet: this resolves locally until the shared
 * Supabase schema exists.
 */
export async function submitRegistration(
  payload: RegistrationPayload,
): Promise<RegistrationResult> {
  const email = payload.contact.email.trim().toLowerCase();
  if (!email) return { ok: false, error: "An email address is required." };

  const record: RegistrationRecord = {
    ...payload,
    contact: { ...payload.contact, email },
    source: "website",
    submittedAt: new Date().toISOString(),
  };

  if (process.env.NODE_ENV !== "production") {
    console.info("[registrations] captured", record);
  }

  return { ok: true, record };
}
