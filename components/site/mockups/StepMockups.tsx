import Image from "next/image";
import { ArrowRight, MapPin, Search, ShieldCheck } from "lucide-react";

// Decorative app-screen previews rendered inside the phone frame. Always aria-hidden by the caller.

function StatusBar() {
  return (
    <div className="flex h-6 w-full shrink-0 select-none items-center justify-between px-4 pt-1.5 text-[10px] font-semibold tracking-tight text-[#0e0f0c]">
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <div className="flex h-2 items-end gap-[1px]">
          <div className="h-[3px] w-[2px] rounded-xs bg-[#0e0f0c]" />
          <div className="h-[4.5px] w-[2px] rounded-xs bg-[#0e0f0c]" />
          <div className="h-[6px] w-[2px] rounded-xs bg-[#0e0f0c]" />
          <div className="h-[7.5px] w-[2px] rounded-xs bg-[#0e0f0c]" />
        </div>
        <div className="flex h-2 w-3.5 items-center rounded-[2px] border border-[#0e0f0c] p-[0.5px]">
          <div className="h-full w-full rounded-[0.5px] bg-[#0e0f0c]" />
        </div>
      </div>
    </div>
  );
}

function ScreenHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="border-b border-[#0e0f0c]/5 px-3.5 pb-1.5 pt-2">
      <span className="block text-[8px] font-bold uppercase tracking-[0.14em] text-[#5C6656]">{kicker}</span>
      <p className="m-0 font-sans text-[14px] font-bold leading-tight tracking-tight text-[#0e0f0c]">{title}</p>
    </div>
  );
}

export function Step1Mockup() {
  return (
    <div className="flex flex-1 flex-col bg-[#FCFAF7] text-left">
      <StatusBar />
      <ScreenHeader kicker="Welcome to Hello Hyperlocal" title="Select Your Suburb" />
      <div className="space-y-2 p-3">
        <div className="relative">
          <div className="w-full rounded-[12px] bg-[#EBEBEB] py-2 pl-7 pr-2.5 text-[10px] font-bold text-[#0e0f0c]">
            Linden, Johannesburg
          </div>
          <Search className="absolute left-2.5 top-2.5 h-3 w-3 text-[#5C6656]" />
        </div>
        <div className="flex items-center justify-between rounded-[14px] border border-[#054d28]/15 bg-[#e2f6d5] p-2">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1C472A]">
              <MapPin className="h-3 w-3 text-[#7ED957]" />
            </div>
            <div>
              <span className="block text-[11px] font-bold leading-tight text-[#054d28]">Linden</span>
              <span className="text-[8px] text-[#054d28]/80">Ward 99 · Johannesburg</span>
            </div>
          </div>
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#1C472A] text-[9px] font-bold text-white">✓</span>
        </div>
        <div className="flex items-center justify-between rounded-[12px] border border-[#0e0f0c]/5 bg-white p-2 opacity-70">
          <div className="flex items-center gap-2">
            <MapPin className="h-3 w-3 text-[#868685]" />
            <span className="text-[10px] font-bold text-[#0e0f0c]">Greenside</span>
          </div>
          <span className="text-[8px] text-[#868685]">0.8 km away</span>
        </div>
        <div className="flex w-full items-center justify-center gap-1.5 rounded-full bg-[#1C472A] py-2 text-[10.5px] font-bold text-white">
          <span>Unlock Linden Feed</span>
          <ArrowRight className="h-3 w-3 text-[#7ED957]" />
        </div>
      </div>
    </div>
  );
}

export function Step2Mockup() {
  return (
    <div className="flex flex-1 flex-col bg-[#FCFAF7] text-left">
      <StatusBar />
      <ScreenHeader kicker="Trust & Safety" title="Resident Verification" />
      <div className="space-y-2 p-3">
        <div className="space-y-1.5 rounded-[16px] bg-[#1C472A] p-3 text-center text-white">
          <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-[#7ED957]/20 text-[#7ED957] ring-2 ring-[#7ED957]">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <span className="block text-[8px] font-bold uppercase tracking-wider text-[#7ED957]">100% Address Verified</span>
          <span className="block text-[13px] font-bold leading-tight">Sarah van der Merwe</span>
          <span className="block text-[9px] text-white/80">4th Avenue · Linden Block 4</span>
          <div className="flex items-center justify-between border-t border-white/15 pt-1.5 text-[8px] text-white/90">
            <span>Verified Resident Pass</span>
            <span className="font-bold text-[#7ED957]">ID: #LND-9904</span>
          </div>
        </div>
        {["Proof of physical address confirmed", "Ward 99 municipal alerts enabled"].map((line) => (
          <div key={line} className="flex items-center gap-2 rounded-[10px] border border-[#0e0f0c]/5 bg-white p-1.5 text-[9px] font-semibold text-[#0e0f0c]">
            <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#e2f6d5] text-[8px] font-bold text-[#054d28]">✓</span>
            <span>{line}</span>
          </div>
        ))}
        <div className="w-full rounded-full bg-[#7ED957] py-2 text-center text-[10.5px] font-bold text-[#0e0f0c]">
          Verification Complete ✓
        </div>
      </div>
    </div>
  );
}

export function Step3Mockup() {
  return (
    <div className="flex flex-1 flex-col bg-[#FCFAF7] text-left">
      <StatusBar />
      <div className="flex items-center justify-between border-b border-[#0e0f0c]/5 px-3.5 pb-1.5 pt-2">
        <div>
          <span className="block text-[8px] font-bold uppercase tracking-[0.14em] text-[#5C6656]">Linden Community</span>
          <p className="m-0 font-sans text-[14px] font-bold leading-tight tracking-tight text-[#0e0f0c]">Discover &amp; Connect</p>
        </div>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1C472A] text-[10px] font-bold text-white">S</div>
      </div>
      <div className="space-y-2 p-3">
        <div className="flex gap-2 rounded-[14px] border border-[#0e0f0c]/5 bg-white p-2">
          <div className="relative h-12 w-14 shrink-0 overflow-hidden rounded-xl bg-[#EBEBEB]">
            <Image src="/photography/goddess-cafe-linden.jpg" alt="" fill sizes="56px" className="object-cover" />
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <div>
              <span className="block text-[10px] font-bold text-[#0e0f0c]">Goddess Café</span>
              <span className="text-[8px] text-[#868685]">4th Ave · 15% Resident Perk</span>
            </div>
            <span className="w-fit rounded-full bg-[#e2f6d5] px-1.5 py-0.5 text-[7.5px] font-bold text-[#054d28]">Claim Perk Pass →</span>
          </div>
        </div>
        <div className="space-y-1 rounded-[14px] bg-[#1C472A] p-2.5 text-white">
          <span className="inline-block rounded-full bg-[#7ED957] px-2 py-0.5 text-[7.5px] font-black uppercase text-[#0e0f0c]">This Saturday</span>
          <span className="block text-[10.5px] font-bold leading-tight">Linden Village Craft Market</span>
          <span className="block text-[8px] text-white/80">8am to 1pm · 4th Ave · 142 neighbours going</span>
        </div>
      </div>
    </div>
  );
}

export const STEP_MOCKUPS = [Step1Mockup, Step2Mockup, Step3Mockup];
