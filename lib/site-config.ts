/**
 * Store links for the landing page. Mirrors the `appStoreUrl` /
 * `playStoreUrl` props on the Hello Hyperlocal Landing design comp,
 * which both default to the in-page download anchor until the apps ship.
 */
export const siteConfig = {
  appStoreUrl: "#get",
  playStoreUrl: "#get",
} as const
