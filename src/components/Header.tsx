import { useState } from "react";
import { Phone, Menu, X, HeartHandshake, MapPin, ShieldCheck } from "lucide-react";
import { HOME_DETAILS } from "../data/homeData";

interface HeaderProps {
  onOpenCompliance?: () => void;
}

export function Header({ onOpenCompliance }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="pattern-band h-2" aria-hidden="true" />
      <header className="sticky top-0 z-40 border-b border-[#e9dccb] bg-[#fbf6ed]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Brand Logo & Name */}
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#762f35] text-[#f8d79b] shadow-sm">
              <HeartHandshake className="h-6 w-6" />
            </div>
            <div>
              <span className="font-editorial block text-xl font-bold leading-none text-[#762f35]">
                {HOME_DETAILS.name}
              </span>
              <span className="mt-1 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#7b7068]">
                {HOME_DETAILS.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-7 text-sm font-semibold text-[#615650] lg:flex">
            <a href="#services" className="hover:text-[#762f35] transition-colors">
              Care Services
            </a>
            <a href="#rooms" className="hover:text-[#762f35] transition-colors">
              Stay & Pricing
            </a>
            <a href="#gallery" className="hover:text-[#762f35] transition-colors">
              Life Here
            </a>
            <a href="#location" className="hover:text-[#762f35] transition-colors">
              Campus Visit
            </a>
            <button
              onClick={onOpenCompliance}
              className="flex items-center gap-1.5 text-xs font-bold text-[#176f70] hover:text-[#125c5d] bg-[#176f70]/10 px-3 py-1.5 rounded-full transition-colors"
            >
              <ShieldCheck className="h-3.5 w-3.5" /> Govt. Approvals & Tax
            </button>
          </nav>

          {/* Single High-Converting Header Action (Direct Call) */}
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href={`tel:${HOME_DETAILS.phoneRaw}`}
              className="flex items-center gap-2 rounded-full border border-[#d9c6b1] bg-white px-4 py-2 text-xs font-bold text-[#762f35] hover:border-[#762f35] shadow-xs transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-[#d97732]" />
              <span>{HOME_DETAILS.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${HOME_DETAILS.phoneRaw}`}
              className="flex items-center gap-1.5 rounded-full border border-[#d9c6b1] bg-white px-3 py-1.5 text-xs font-bold text-[#762f35]"
            >
              <Phone className="h-3.5 w-3.5 text-[#d97732]" /> Call
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full p-2 text-[#762f35]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-[#e9dccb] bg-[#fbf6ed] px-5 py-4 lg:hidden">
            <div className="flex flex-col gap-3 text-sm font-bold text-[#615650]">
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>
                Care Services
              </a>
              <a href="#rooms" onClick={() => setMobileMenuOpen(false)}>
                Stay & Pricing
              </a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>
                Life Here
              </a>
              <a href="#location" onClick={() => setMobileMenuOpen(false)}>
                Campus Visit
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenCompliance) onOpenCompliance();
                }}
                className="flex items-center gap-2 text-left text-xs font-bold text-[#176f70] py-1"
              >
                <ShieldCheck className="h-4 w-4" /> View Govt. Approvals & Tax Info (GST / PAN)
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
