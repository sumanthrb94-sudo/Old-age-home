import { HeartHandshake, Phone, MapPin, ExternalLink, MessageCircle } from "lucide-react";
import { HOME_DETAILS } from "../data/homeData";

export function Footer() {
  const whatsappUrl = `https://wa.me/${HOME_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    "Hello Siva Prakash Old Age Home, I would like to inquire about admissions and care facilities."
  )}`;

  return (
    <footer className="bg-stone-900 text-stone-400 py-10 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-amber-800 flex items-center justify-center text-white shrink-0">
            <HeartHandshake className="w-5 h-5 text-amber-200" />
          </div>
          <div>
            <span className="font-editorial text-base font-bold text-white block">
              Siva Prakash Old Age Home
            </span>
            <span className="text-xs text-stone-400">
              Honest Residency, Bowrampet, Hyderabad 500043
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex items-center gap-4 text-xs">
          <a
            href={`tel:${HOME_DETAILS.phoneRaw}`}
            className="text-stone-300 hover:text-white flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{HOME_DETAILS.phoneDisplay}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-medium"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <a
            href={HOME_DETAILS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-stone-200 flex items-center gap-1"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Map</span>
          </a>
        </div>

      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 mt-6 border-t border-stone-800/80 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} Siva Prakash Old Age Home, Hyderabad. All rights reserved.
      </div>
    </footer>
  );
}
