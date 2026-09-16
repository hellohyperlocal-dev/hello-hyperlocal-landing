// Single source for the analytics consent choice, shared by the banner and the GA loader.

export const CONSENT_STORAGE_KEY = "hello_hyperlocal_cookie_consent";
export const CONSENT_EVENT = "hh-consent-change";

export type ConsentChoice = "accepted" | "declined";

/**
 * Returns the stored choice, or null when the visitor hasn't answered yet.
 * "acknowledged" (from the notice-only banner used before analytics existed) counts as
 * unanswered, so those visitors are asked properly now that there is something to consent to.
 */
export function readConsent(): ConsentChoice | null {
  try {
    const value = localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === "accepted" || value === "declined" ? value : null;
  } catch {
    return null;
  }
}

/** useSyncExternalStore subscriber: fires on a choice in this tab or in another open tab. */
export function subscribeConsent(onChange: () => void) {
  window.addEventListener(CONSENT_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CONSENT_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function writeConsent(choice: ConsentChoice) {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    // Storage unavailable: the choice still applies for this page view via the event.
  }
  window.dispatchEvent(new CustomEvent<ConsentChoice>(CONSENT_EVENT, { detail: choice }));
}
