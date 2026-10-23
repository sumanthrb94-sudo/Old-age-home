import { MapPin, Phone, MessageCircle, Clock, ArrowUpRight } from "lucide-react";
import { HOME_DETAILS } from "../data/homeData";
import { FadeIn, TextEffect } from "./ui/motion";

export function LocationSection() {
  const whatsappUrl = `https://wa.me/${HOME_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    "Namaste, I would like to visit the campus and enquire about admission."
  )}`;

  return (
    <section id="location" className="overflow-hidden bg-[#176f70] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <FadeIn as="p" y={12} className="eyebrow text-[#f8d79b]">Come say namaste</FadeIn>
            <TextEffect
              as="h2"
              text="See the home. Meet the *people.*"
              accentClassName="text-[#f8d79b]"
              className="mt-4 font-editorial text-5xl leading-tight sm:text-6xl"
            />
            <FadeIn as="p" delay={0.3} y={14} className="mt-6 text-sm leading-7 text-white/75">
              We welcome families to visit, ask every question, and experience the calm of our Bowrampet campus before
              making a decision.
            </FadeIn>
            <FadeIn delay={0.4} y={16} className="mt-8 space-y-4 border-t border-white/20 pt-6 text-sm">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-[#f8d79b]" />
                <span>{HOME_DETAILS.address}</span>
              </div>
              <div className="flex gap-3">
                <Clock className="h-5 w-5 shrink-0 text-[#f8d79b]" />
                <span>Visits: {HOME_DETAILS.visitingHours}</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.5} y={16} className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mm-shine inline-flex items-center gap-2 rounded-full bg-[#f8d79b] px-6 py-3.5 text-sm font-bold text-[#762f35] hover:bg-white"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp us
              </a>
              <a
                href={`tel:${HOME_DETAILS.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/10"
              >
                <Phone className="h-4 w-4" /> Call {HOME_DETAILS.phoneDisplay}
              </a>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} y={50} className="lg:col-span-7">
            <div className="overflow-hidden rounded-3xl border-8 border-white/10 bg-white/10 shadow-2xl">
              <iframe
                title="Siva Prakash Old Age Home location map"
                src="https://maps.google.com/maps?q=Siva+Prakash+Old+Age+Home,+Honest+Residency,+Bowrampet,+Hyderabad,+Telangana+500043&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="h-80 w-full border-0 sm:h-96"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={HOME_DETAILS.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-3 flex items-center justify-end gap-1 text-xs font-bold text-[#f8d79b]"
            >
              Open in Google Maps{" "}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
