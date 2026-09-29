import { HeartHandshake, Phone, MapPin, ShieldCheck } from "lucide-react";
import { HOME_DETAILS, LEGAL_DETAILS } from "../data/homeData";

interface FooterProps {
  onOpenCompliance?: () => void;
}

export function Footer({ onOpenCompliance }: FooterProps) {
  return (
    <footer className="bg-[#27221f] py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-start md:justify-between">
        {/* Brand & Mission */}
        <div className="max-w-md">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#762f35] text-[#f8d79b]">
              <HeartHandshake className="h-6 w-6" />
            </div>
            <div>
              <p className="font-editorial text-xl font-bold">{HOME_DETAILS.name}</p>
              <p className="text-xs text-white/60">{HOME_DETAILS.tagline}</p>
            </div>
          </div>

          <p className="mt-3 text-xs leading-5 text-white/60">
            Providing compassionate full-time assisted living at our Bowrampet campus and dedicated patient care directly
            at your doorstep in Hyderabad.
          </p>

          {/* Quick Legal Credentials with clickable popup */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
            <button
              onClick={onOpenCompliance}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/20 px-3 py-1.5 text-[11px] font-bold text-[#86d1cb] transition-colors"
            >
              <ShieldCheck className="h-4 w-4" />
              <span>Govt. Reg No: {HOME_DETAILS.societyRegNo} · GST & PAN Verified</span>
            </button>
          </div>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col gap-3 text-xs font-semibold text-white/80">
          <p className="text-[11px] font-bold uppercase tracking-wider text-white/40">Direct Contact</p>
          <a href={`tel:${HOME_DETAILS.phoneRaw}`} className="flex items-center gap-2 hover:text-[#f8d79b]">
            <Phone className="h-4 w-4 text-[#d97732]" /> {HOME_DETAILS.phoneDisplay}
          </a>
          <a href={HOME_DETAILS.googleMapsUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#f8d79b]">
            <MapPin className="h-4 w-4 text-[#d97732]" /> Campus: {HOME_DETAILS.address}
          </a>
          <p className="text-[11px] text-white/50 max-w-xs">
            Reg. Office: {LEGAL_DETAILS.registeredOffice}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 px-5 pt-6 text-xs text-white/40 sm:px-8 flex flex-col sm:flex-row sm:justify-between gap-2">
        <span>© {new Date().getFullYear()} {HOME_DETAILS.name}. {LEGAL_DETAILS.registeredName}.</span>
        <span>Proprietor: {LEGAL_DETAILS.proprietor} · GSTIN: {HOME_DETAILS.gstin}</span>
      </div>
    </footer>
  );
}
