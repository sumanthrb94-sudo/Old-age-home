import { HeartHandshake, Phone, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { HOME_DETAILS, LEGAL_DETAILS } from "../data/homeData";

export function Footer() {
  const whatsappUrl = `https://wa.me/${HOME_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    "Hello, I would like to enquire about Siva Prakash Old Age Home."
  )}`;

  return (
    <footer className="bg-[#27221f] py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-start md:justify-between">
        {/* Brand & Society */}
        <div className="max-w-md">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#762f35] text-[#f8d79b]">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <div>
              <p className="font-editorial text-xl">{HOME_DETAILS.name}</p>
              <p className="text-xs text-white/60">
                {LEGAL_DETAILS.registeredName}
              </p>
            </div>
          </div>

          <p className="mt-3 text-xs leading-5 text-white/50">
            A registered non-profit society & senior home committed to dignified assisted living, medical care, and
            homely warmth for elders in Hyderabad.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] text-[#f8d79b]/90">
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-[#86d1cb]" /> Reg No: {HOME_DETAILS.societyRegNo}
            </span>
            <span>•</span>
            <span>GSTIN: {HOME_DETAILS.gstin}</span>
            <span>•</span>
            <span>PAN: {HOME_DETAILS.pan}</span>
          </div>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col gap-3 text-xs font-semibold text-white/80">
          <p className="text-[11px] font-bold uppercase tracking-wider text-white/40">Direct Contact</p>
          <a href={`tel:${HOME_DETAILS.phoneRaw}`} className="flex items-center gap-2 hover:text-[#f8d79b]">
            <Phone className="h-4 w-4 text-[#d97732]" /> {HOME_DETAILS.phoneDisplay}
          </a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#86d1cb] hover:text-white">
            <MessageCircle className="h-4 w-4" /> WhatsApp Enquiries
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
        <span>© {new Date().getFullYear()} {LEGAL_DETAILS.registeredName}. All rights reserved.</span>
        <span>Registered under Telangana Societies Registration Act, 2001 · Proprietor: {LEGAL_DETAILS.proprietor}</span>
      </div>
    </footer>
  );
}
