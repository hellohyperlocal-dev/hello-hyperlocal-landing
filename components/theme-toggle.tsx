"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

const subscribe = () => () => {}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme()
  // Hydration-safe mount check: the server snapshot is false, the client
  // snapshot true, so the placeholder renders until after hydration without
  // a setState-in-effect cascade.
  const mounted = React.useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  )

  if (!mounted) {
    return (
      <div
        className={`flex h-8 w-14 cursor-pointer items-center justify-between rounded-full border border-border bg-muted/60 p-1 opacity-50 ${className}`}
        aria-hidden="true"
      >
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-background shadow-xs" />
      </div>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative inline-flex h-9 w-16 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-muted p-1 transition-colors duration-200 ease-in-out hover:bg-muted/80 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${className}`}
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle light and dark mode"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span
        className={`pointer-events-none flex h-7 w-7 transform items-center justify-center rounded-full bg-background shadow-md ring-0 transition duration-200 ease-in-out ${
          isDark
            ? "bg-onyx text-radioactive-grass translate-x-7"
            : "text-dark-spruce translate-x-0 bg-white"
        }`}
      >
        {isDark ? (
          <Moon className="h-4 w-4 text-[#7ED957]" />
        ) : (
          <Sun className="h-4 w-4 text-[#1C472A]" />
        )}
      </span>
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
