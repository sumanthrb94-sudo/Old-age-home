import { Phone, MessageCircle, MapPin, CheckCircle2, ArrowUpRight } from "lucide-react";
import { HOME_DETAILS } from "../data/homeData";

export function Hero() {
  const whatsappUrl = `https://wa.me/${HOME_DETAILS.whatsappNumber}?text=${encodeURIComponent("Namaste, I would like to enquire about admission and room availability for my family member.")}`;
  return <section id="top" className="overflow-hidden bg-[#fbf6ed]">
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-12 lg:py-24">
      <div className="relative z-10 lg:col-span-6">
        <p className="eyebrow mb-5 flex items-center gap-3 text-[#d97732]"><span className="h-px w-8 bg-[#d97732]" /> Hyderabad elder care, with heart</p>
        <p className="mb-4 font-editorial text-lg text-[#762f35]">{HOME_DETAILS.teluguName}</p>
        <h1 className="font-editorial text-5xl leading-[.98] text-[#27221f] sm:text-7xl">A home for the <span className="text-[#762f35]">golden years.</span></h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-[#6d625a] sm:text-lg">In Bowrampet, we bring together the warmth of a family home, the steadiness of professional care, and the easy rhythm of Hyderabad living.</p>
        <div className="mt-8 flex flex-wrap gap-3"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#762f35] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#762f35]/15 hover:bg-[#5e242a]">Start a conversation <ArrowUpRight className="h-4 w-4" /></a><a href={`tel:${HOME_DETAILS.phoneRaw}`} className="inline-flex items-center gap-2 rounded-full border border-[#d9c6b1] px-5 py-3.5 text-sm font-bold text-[#762f35] hover:border-[#762f35]"><Phone className="h-4 w-4" /> {HOME_DETAILS.phoneDisplay}</a></div>
        <div className="mt-8 grid max-w-lg grid-cols-2 gap-x-5 gap-y-3 border-t border-[#e4d5c3] pt-5 text-xs font-semibold text-[#6d625a]"><div className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#176f70]" /> 24/7 trained support</div><div className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#176f70]" /> Pure veg meals</div><div className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#176f70]" /> Doctor visits</div><div className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#176f70]" /> Family-like living</div></div>
        <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#8a7c70]"><MapPin className="h-4 w-4 text-[#d97732]" /> Honest Residency, Bowrampet · Hyderabad 500043</div>
      </div>
      <div className="relative lg:col-span-6"><div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-[#d97732]/30" /><div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] rounded-tr-[5rem] border-8 border-white bg-[#eadcc9] shadow-2xl shadow-[#762f35]/10"><img src="/images/hero-hyderabad-care.jpg" alt="Caregiver and elder sharing a warm moment on the verandah" className="h-full w-full object-cover" fetchPriority="high" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#27221f]/75 to-transparent p-6 pt-20 text-white"><p className="font-editorial text-2xl">Care that feels like home.</p><p className="mt-1 text-xs font-semibold text-[#f8d79b]">Bowrampet · Hyderabad · Since 2016</p></div></div><div className="absolute -bottom-5 -left-5 rounded-2xl border border-[#e4d5c3] bg-white px-5 py-4 shadow-xl"><p className="font-editorial text-2xl text-[#762f35]">24/7</p><p className="text-[10px] font-bold uppercase tracking-wider text-[#7b7068]">care & companionship</p></div></div>
    </div><div className="pattern-band h-3" aria-hidden="true" />
  </section>;
}
