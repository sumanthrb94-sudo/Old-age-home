import { useState } from "react";
import { Phone, MessageCircle, Menu, X, HeartHandshake, MapPin } from "lucide-react";
import { HOME_DETAILS } from "../data/homeData";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${HOME_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    "Hello Siva Prakash Old Age Home, I would like to inquire about admissions and care facilities at Bowrampet, Hyderabad."
  )}`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-800 text-white flex items-center justify-center shadow-sm">
            <HeartHandshake className="w-5 h-5 text-amber-200" />
          </div>
          <div>
            <span className="font-editorial text-lg sm:text-xl font-bold tracking-tight text-stone-900 block leading-tight">
              Siva Prakash
            </span>
            <span className="text-xs text-stone-500 font-medium flex items-center gap-1">
              <MapPin className="w-3 h-3 text-amber-700" />
              <span>Bowrampet, Hyderabad</span>
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
          <a href="#services" className="hover:text-amber-800 transition-colors">Services</a>
          <a href="#rooms" className="hover:text-amber-800 transition-colors">Rooms & Fees</a>
          <a href="#gallery" className="hover:text-amber-800 transition-colors">Photos</a>
          <a href="#location" className="hover:text-amber-800 transition-colors">Location</a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${HOME_DETAILS.phoneRaw}`}
            className="text-xs font-semibold text-stone-700 hover:text-amber-800 px-3 py-2 rounded-lg border border-stone-300 hover:border-amber-800 transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-amber-700" />
            <span>Call Us</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-white bg-emerald-600 px-3 py-1.5 rounded-lg flex items-center gap-1"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-600 hover:text-stone-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 py-4 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium text-stone-700">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-1">Services</a>
            <a href="#rooms" onClick={() => setMobileMenuOpen(false)} className="py-1">Rooms & Fees</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="py-1">Photos</a>
            <a href="#location" onClick={() => setMobileMenuOpen(false)} className="py-1">Location</a>
          </div>
          <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
            <a
              href={`tel:${HOME_DETAILS.phoneRaw}`}
              className="w-full py-2 text-center text-xs font-semibold border border-stone-300 rounded-lg flex items-center justify-center gap-1.5 text-stone-800"
            >
              <Phone className="w-3.5 h-3.5 text-amber-700" />
              <span>Call: {HOME_DETAILS.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
