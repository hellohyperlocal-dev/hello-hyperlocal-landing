"use server";

import { getSupabaseAdmin } from "@/lib/supabase-admin";
import type {
  RegistrationPayload,
  RegistrationResult,
  RegistrationRole,
} from "@/lib/registrations";

const ROLES: RegistrationRole[] = [
  "resident",
  "business",
  "founding_neighbour",
  "founding_business",
  "partner_interest",
  "general_enquiry",
];

// Server actions are reachable by direct POST, not just through our own UI, so
// everything is re-validated here rather than trusting the client.
const MAX = { short: 120, long: 2000 } as const;

const GENERIC_ERROR = "Something went wrong on our side. Please try again in a moment.";

function clean(value: string | undefined, limit: number = MAX.short) {
  const trimmed = value?.trim();
  if (!trimmed) return null;
  return trimmed.slice(0, limit);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value) && value.length <= MAX.short;
}

export async function registerAction(payload: RegistrationPayload): Promise<RegistrationResult> {
  // Honeypot: hidden field, only a bot fills it. Report success so it learns nothing.
  if (payload.website) return { ok: true };

  const email = payload.contact?.email?.trim().toLowerCase() ?? "";
  if (!isEmail(email)) return { ok: false, error: "Please enter a valid email address." };

  const roles = (payload.roles ?? []).filter((role) => ROLES.includes(role));
  if (roles.length === 0) return { ok: false, error: "Please choose how you'd like to join." };

  // Marketing opt-in is required for the sign-up paths, but not for an enquiry the
  // team simply replies to.
  const needsConsent = roles.some((role) => role === "resident" || role === "business");
  if (needsConsent && !payload.consentAt) {
    return { ok: false, error: "Please tick the consent box so we know we may contact you." };
  }

  const admin = getSupabaseAdmin();
  if (!admin) {
    console.error("[registrations] SUPABASE_URL / SUPABASE_SECRET_KEY are not configured");
    return { ok: false, error: GENERIC_ERROR };
  }

  // Read first so roles merge instead of overwrite: someone who registered as a
  // resident and later registers a business should end up holding both.
  const { data: existing, error: readError } = await admin
    .from("registrations")
    .select("id, roles")
    .eq("email", email)
    .maybeSingle();

  if (readError) {
    console.error("[registrations] lookup failed", readError);
    return { ok: false, error: GENERIC_ERROR };
  }

  const mergedRoles = Array.from(
    new Set([...((existing?.roles as RegistrationRole[]) ?? []), ...roles]),
  );

  // Only send fields that have a value, so a later, shorter submission never wipes
  // details captured earlier.
  const row: Record<string, unknown> = { email, roles: mergedRoles, source: "website" };

  const assign = (column: string, value: string | null) => {
    if (value !== null) row[column] = value;
  };

  assign("first_name", clean(payload.contact.firstName));
  assign("last_name", clean(payload.contact.lastName));
  assign("full_name", clean(payload.contact.fullName));
  assign("mobile", clean(payload.contact.mobile));
  assign("suburb", clean(payload.suburb));
  assign("business_name", clean(payload.business?.name));
  assign("business_address", clean(payload.business?.address));

  if (payload.interests?.length) {
    row.interests = payload.interests.slice(0, 20).map((i) => i.slice(0, MAX.short));
  }
  if (payload.business?.wantsWindowSticker) {
    row.wants_window_sticker = true;
  }
  if (payload.consentAt) {
    row.consent_at = payload.consentAt;
  }
  if (payload.partner || payload.enquiry) {
    row.details = {
      ...(payload.partner
        ? {
            organisation: clean(payload.partner.organisation),
            inquiryType: clean(payload.partner.inquiryType),
          }
        : {}),
      ...(payload.enquiry
        ? {
            topic: clean(payload.enquiry.topic),
            message: clean(payload.enquiry.message, MAX.long),
          }
        : {}),
    };
  }

  const { error: writeError } = await admin
    .from("registrations")
    .upsert(row, { onConflict: "email" });

  if (writeError) {
    console.error("[registrations] write failed", writeError);
    return { ok: false, error: GENERIC_ERROR };
  }

  // Same response whether this email was new or already on the list, so the form
  // can't be used to find out who has registered.
  return { ok: true };
}
