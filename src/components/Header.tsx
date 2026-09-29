import { useState } from "react";
import { Phone, MessageCircle, Menu, X, HeartHandshake, MapPin } from "lucide-react";
import { HOME_DETAILS } from "../data/homeData";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${HOME_DETAILS.whatsappNumber}?text=${encodeURIComponent("Namaste, I would like to enquire about admission and elder care at Siva Prakash Old Age Home, Bowrampet.")}`;
  return <>
    <div className="pattern-band h-2" aria-hidden="true" />
    <header className="sticky top-0 z-50 border-b border-[#e9dccb] bg-[#fbf6ed]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#762f35] text-[#f8d79b] shadow-sm"><HeartHandshake className="h-5 w-5" /></div><div><span className="font-editorial block text-xl leading-none text-[#762f35]">Siva Prakash</span><span className="mt-1 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#7b7068]"><MapPin className="h-3 w-3 text-[#d97732]" /> Bowrampet, Hyderabad</span></div></a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-[#615650] md:flex"><a href="#services" className="hover:text-[#762f35]">Our care</a><a href="#rooms" className="hover:text-[#762f35]">Stay options</a><a href="#gallery" className="hover:text-[#762f35]">Life here</a><a href="#location" className="hover:text-[#762f35]">Visit us</a></nav>
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href={`tel:${HOME_DETAILS.phoneRaw}`}
            className="flex items-center gap-2 rounded-full border border-[#d9c6b1] bg-white px-4 py-2 text-xs font-bold text-[#762f35] hover:border-[#762f35] shadow-xs"
          >
            <Phone className="h-3.5 w-3.5 text-[#d97732]" /> {HOME_DETAILS.phoneDisplay}
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#176f70] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#125c5d]"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
        <div className="flex items-center gap-2 md:hidden"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-full bg-[#176f70] px-3 py-2 text-xs font-bold text-white"><MessageCircle className="inline h-3.5 w-3.5" /> <span className="ml-1">Chat</span></a><button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-full p-2 text-[#762f35]" aria-label="Toggle menu">{mobileMenuOpen ? <X /> : <Menu />}</button></div>
      </div>
      {mobileMenuOpen && <div className="border-t border-[#e9dccb] bg-[#fbf6ed] px-5 py-4 md:hidden"><div className="flex flex-col gap-3 text-sm font-bold text-[#615650]"><a href="#services" onClick={() => setMobileMenuOpen(false)}>Our care</a><a href="#rooms" onClick={() => setMobileMenuOpen(false)}>Stay options</a><a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Life here</a><a href="#location" onClick={() => setMobileMenuOpen(false)}>Visit us</a></div><a href={`tel:${HOME_DETAILS.phoneRaw}`} className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-[#d9c6b1] py-3 text-xs font-bold text-[#762f35]"><Phone className="h-4 w-4" /> {HOME_DETAILS.phoneDisplay}</a></div>}
    </header>
  </>;
}
