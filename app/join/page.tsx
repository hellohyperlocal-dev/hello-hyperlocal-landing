import { Suspense } from "react";
import { JoinFlow } from "@/components/join/JoinFlow";

export const metadata = {
  title: "Join Hello Linden",
  description:
    "Register as a Founding Neighbour or add your business to Hello Linden before it launches in 2026.",
};

export default function JoinPage() {
  // JoinFlow reads ?type / ?step with useSearchParams, which must sit inside Suspense.
  return (
    <Suspense fallback={<div className="min-h-dvh bg-white" />}>
      <JoinFlow />
    </Suspense>
  );
}
