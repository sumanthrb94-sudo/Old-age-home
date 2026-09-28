import { MapPin, Phone, MessageCircle, ExternalLink, Clock } from "lucide-react";
import { HOME_DETAILS } from "../data/homeData";

export function LocationSection() {
  const whatsappUrl = `https://wa.me/${HOME_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    "Hello Siva Prakash Old Age Home, I would like to visit the campus and inquire about admission."
  )}`;

  return (
    <section id="location" className="py-14 sm:py-18 bg-stone-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
            Location & Contact
          </p>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-900">
            Visit Our Bowrampet Campus
          </h2>
          <p className="mt-2 text-sm text-stone-600">
            Located in Honest Residency, Bowrampet, away from city congestion, yet only 12–15 minutes from major hospitals.
          </p>
        </div>

        {/* 2-Column Minimal Layout: Map + Contact Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Map Embed */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-stone-300 shadow-xs h-72 sm:h-80 bg-stone-200">
              <iframe
                title="Siva Prakash Old Age Home Location Map"
                src="https://maps.google.com/maps?q=Honest+Residency,+Bowrampet,+Hyderabad,+Telangana+500043&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-stone-500">
              <span>Honest Residency, Bowrampet, Hyderabad 500043</span>
              <a
                href={HOME_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-800 font-semibold hover:underline inline-flex items-center gap-1"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Direct WhatsApp & Contact Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-xs space-y-5">
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                Direct Inquiry
              </span>
              <h3 className="font-editorial text-xl font-bold text-stone-900 mt-1">
                Have Questions? Talk to Us
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Chat with our Care Director directly on WhatsApp for room photos, fees, or to schedule a visit.
              </p>
            </div>

            <div className="space-y-2 text-xs text-stone-700 bg-stone-50 p-3.5 rounded-xl border border-stone-100">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Visiting Hours: 10:00 AM – 7:00 PM (Daily)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Near Bowrampet, Miyapur & Bachupally ORR</span>
              </div>
            </div>

            <div className="space-y-2.5 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact via WhatsApp</span>
              </a>

              <a
                href={`tel:${HOME_DETAILS.phoneRaw}`}
                className="w-full py-3 bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-semibold text-sm rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-800" />
                <span>Call {HOME_DETAILS.phoneDisplay}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
