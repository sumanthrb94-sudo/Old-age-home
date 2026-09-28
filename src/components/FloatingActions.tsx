import { MessageCircle } from "lucide-react";
import { HOME_DETAILS } from "../data/homeData";

export function FloatingActions() {
  const whatsappUrl = `https://wa.me/${HOME_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    "Hello Siva Prakash Old Age Home, I would like to inquire about admissions and care at Bowrampet, Hyderabad."
  )}`;

  return (
    <>
      {/* Mobile Fixed Bottom WhatsApp CTA */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-4 py-2.5 sm:hidden shadow-lg flex items-center justify-between gap-3">
        <a
          href={`tel:${HOME_DETAILS.phoneRaw}`}
          className="flex-1 py-2.5 text-center text-xs font-bold text-stone-800 bg-stone-100 border border-stone-300 rounded-xl"
        >
          Call Helpline
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.6] py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-sm flex items-center justify-center gap-1.5"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Chat</span>
        </a>
      </div>

      {/* Desktop Floating Right WhatsApp Widget */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center group"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 text-xs font-bold transition-all duration-200">
            WhatsApp Us
          </span>
        </a>
      </div>
    </>
  );
}
