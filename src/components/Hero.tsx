import { Phone, MessageCircle, MapPin, CheckCircle2 } from "lucide-react";
import { HOME_DETAILS } from "../data/homeData";

export function Hero() {
  const whatsappUrl = `https://wa.me/${HOME_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    "Hello Siva Prakash Old Age Home, I would like to inquire about admission and room availability for my family member."
  )}`;

  return (
    <section className="bg-stone-50 py-12 sm:py-16 lg:py-20 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800">
              <span className="w-5 h-0.5 bg-amber-700 inline-block" />
              <span>Elder Care & Assisted Living Sanctuary</span>
            </div>

            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-[1.18]">
              Where Elders Are Loved, Respected & Tenderly Cared For.
            </h1>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-xl">
              Located in the quiet, green setting of Honest Residency, Bowrampet,{" "}
              <strong className="text-stone-800 font-semibold">Siva Prakash Old Age Home</strong>{" "}
              provides compassionate 24/7 nursing, doctor supervision, wholesome pure-veg South Indian meals,
              and a peaceful family environment.
            </p>

            {/* 4 Minimal Highlights */}
            <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs text-stone-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>24/7 Skilled Nursing Care</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pure Veg South Indian Food</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Doctor Visits & Hospital Tie-up</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Wheelchair & Bedridden Support</span>
              </div>
            </div>

            {/* Direct WhatsApp & Call CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-sm hover:shadow transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contact via WhatsApp</span>
              </a>

              <a
                href={`tel:${HOME_DETAILS.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 px-5 py-3.5 rounded-xl font-medium text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-amber-700" />
                <span>Call {HOME_DETAILS.phoneDisplay}</span>
              </a>
            </div>

            {/* Address */}
            <div className="flex items-center gap-1.5 text-xs text-stone-500 pt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />
              <span>Honest Residency, Bowrampet, Hyderabad 500043</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200 aspect-[4/3] bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80"
                alt="Compassionate Indian elder care at Siva Prakash Old Age Home, Bowrampet, Hyderabad"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white text-xs">
                <span className="font-semibold block text-amber-300">Siva Prakash Old Age Home</span>
                <span>Bowrampet, Hyderabad · Established 2016</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
