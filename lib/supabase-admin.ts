import "server-only";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// The registrations table has RLS enabled with NO policies (see migration 0008 in
// hello-hyperlocal-rebuild), so writes must come from the service role. That key is
// never exposed to the browser: this module imports "server-only", which fails the
// build if it is ever pulled into a client component, and the env vars deliberately
// have no NEXT_PUBLIC_ prefix.

let client: SupabaseClient | null = null;

/** Returns the service-role client, or null when the env vars are not configured. */
export function getSupabaseAdmin(): SupabaseClient | null {
  const url = process.env.SUPABASE_URL;
  // SUPABASE_SECRET_KEY is Supabase's current name (sb_secret_…); the legacy service_role
  // JWT name is still accepted so older environments keep working.
  const key = process.env.SUPABASE_SECRET_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) return null;
  if (client) return client;

  client = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  return client;
}
