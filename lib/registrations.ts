import { registerAction } from "@/app/join/actions";

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
    /** Street address. Category is chosen in the app, not here — see migration 0008. */
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
  /** Anti-spam honeypot. Must stay empty; a real person never sees the field. */
  website?: string;
}

export type RegistrationResult = { ok: true } | { ok: false; error: string };

/**
 * Single entry point for every website sign-up. Hands off to the server action,
 * which writes to the shared Supabase `registrations` table — the same database the
 * app reads, so a website registration becomes an app account without re-registering.
 */
export async function submitRegistration(
  payload: RegistrationPayload,
): Promise<RegistrationResult> {
  return registerAction(payload);
}
