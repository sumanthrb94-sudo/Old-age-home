import { useState } from "react";
import { Phone, MessageCircle, MapPin, CheckCircle2, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { HOME_DETAILS } from "../data/homeData";

const HERO_IMAGES = [
  {
    url: "/images/hero-hyderabad-care.jpg",
    label: "Attentive & Loving Bedside Care",
    badge: "24/7 Dedicated Support",
  },
  {
    url: "/images/gallery-verandah.jpg",
    label: "Peaceful Verandah & Courtyard",
    badge: "Bowrampet Campus",
  },
  {
    url: "/images/gallery-meals.jpg",
    label: "Wholesome South Indian Veg Meals",
    badge: "Fresh & Diabetic-Friendly",
  },
  {
    url: "/images/room-private-deluxe.jpg",
    label: "Clean Senior-Friendly Living Rooms",
    badge: "Comfort & Dignity",
  },
];

export function Hero() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const whatsappUrl = `https://wa.me/${HOME_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    "Namaste, I would like to enquire about admission and room availability at Siva Prakash Old Age Home."
  )}`;

  const activeImage = HERO_IMAGES[activeImageIndex];

  return (
    <section id="top" className="overflow-hidden bg-[#fbf6ed] pt-4 sm:pt-6">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Top Hero Image Section - Prominent & Engaging */}
        <div className="relative mb-8 sm:mb-12">
          {/* Main Hero Image */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-3xl border-4 border-white bg-[#eadcc9] shadow-xl sm:rounded-[2.5rem]">
            <img
              src={activeImage.url}
              alt={activeImage.label}
              className="h-full w-full object-cover transition-all duration-700 ease-in-out"
              fetchPriority="high"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#27221f]/85 via-[#27221f]/30 to-transparent" />

            {/* Top Badges on Image */}
            <div className="absolute left-4 top-4 flex flex-wrap gap-2 sm:left-6 sm:top-6">
              <span className="flex items-center gap-1.5 rounded-full bg-[#762f35]/90 px-3.5 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-[#f8d79b]" />
                {activeImage.badge}
              </span>
              <span className="hidden rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-bold text-[#27221f] backdrop-blur-md sm:inline-flex">
                Honest Residency, Bowrampet
              </span>
            </div>

            {/* Bottom Caption on Image */}
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 text-white flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#f8d79b]">
                  {HOME_DETAILS.teluguName} · Hyderabad
                </p>
                <h2 className="mt-1 font-editorial text-2xl sm:text-4xl text-white">
                  {activeImage.label}
                </h2>
              </div>
              <div className="rounded-2xl bg-white/15 px-4 py-2 text-xs font-semibold backdrop-blur-md text-white border border-white/20 self-start sm:self-auto">
                Stay options starting at <span className="text-[#f8d79b] font-bold text-sm">₹5,000 / month</span>
              </div>
            </div>
          </div>

          {/* Quick Hero Image Selector Bar */}
          <div className="mt-3 grid grid-cols-4 gap-2 sm:gap-4">
            {HERO_IMAGES.map((img, idx) => (
              <button
                key={img.url}
                onClick={() => setActiveImageIndex(idx)}
                className={`group relative flex items-center gap-2 overflow-hidden rounded-xl border p-1 text-left transition-all ${
                  activeImageIndex === idx
                    ? "border-[#762f35] bg-white ring-2 ring-[#762f35]/20 shadow-sm"
                    : "border-[#e4d5c3] bg-white/60 hover:bg-white"
                }`}
              >
                <img
                  src={img.url}
                  alt={img.label}
                  className="h-10 w-12 sm:h-12 sm:w-16 rounded-lg object-cover"
                />
                <span className="hidden sm:inline-block text-[11px] font-bold leading-tight text-[#4b4039] line-clamp-2">
                  {img.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Conversion-Focused Hero Headline & Direct Contact Block */}
        <div className="grid gap-10 pb-16 sm:pb-20 lg:grid-cols-12 lg:items-center">
          {/* Core Proposition */}
          <div className="lg:col-span-7">
            <p className="eyebrow mb-3 flex items-center gap-2 text-[#d97732]">
              <span className="h-px w-6 bg-[#d97732]" /> Direct Admissions & Personalized Care
            </p>
            <h1 className="font-editorial text-4xl leading-[1.05] text-[#27221f] sm:text-6xl">
              A peaceful home where elders are treated like <span className="text-[#762f35]">family.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#6d625a] sm:text-lg">
              Located in calm Bowrampet, Hyderabad, we combine professional round-the-clock nursing with the warmth of
              home-cooked meals, daily prayers, and genuine companionship.
            </p>

            {/* Trust Highlights */}
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs font-semibold text-[#5a4e46] sm:grid-cols-4">
              <div className="flex items-center gap-2 rounded-xl bg-white p-2.5 border border-[#e8dccf]">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#176f70]" />
                <span>24/7 Trained Staff</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white p-2.5 border border-[#e8dccf]">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#176f70]" />
                <span>Pure Veg Meals</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white p-2.5 border border-[#e8dccf]">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#176f70]" />
                <span>Doctor Visits</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white p-2.5 border border-[#e8dccf]">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#176f70]" />
                <span>From ₹5,000/mo</span>
              </div>
            </div>

            <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#8a7c70]">
              <MapPin className="h-4 w-4 text-[#d97732] shrink-0" />
              {HOME_DETAILS.address}
            </p>
          </div>

          {/* High-Converting Streamlined Contact Card - Direct, No Clutter */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border-2 border-[#762f35]/20 bg-white p-6 sm:p-8 shadow-xl shadow-[#762f35]/10">
              <div className="mb-4">
                <span className="rounded-full bg-[#762f35]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#762f35]">
                  Direct Management Contact
                </span>
                <h3 className="mt-2 font-editorial text-2xl text-[#27221f]">
                  Speak directly with us
                </h3>
                <p className="mt-1 text-xs leading-5 text-[#766a61]">
                  Call or WhatsApp directly to check room availability, schedule a visit, or discuss care requirements.
                </p>
              </div>

              {/* Prominent Phone Number Display */}
              <div className="my-5 rounded-2xl bg-[#fbf6ed] p-4 text-center border border-[#eadfd2]">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#8a7c70]">
                  Immediate Enquiries & Admissions
                </p>
                <a
                  href={`tel:${HOME_DETAILS.phoneRaw}`}
                  className="mt-1 block font-editorial text-3xl font-bold tracking-tight text-[#762f35] hover:text-[#5e242a]"
                >
                  {HOME_DETAILS.phoneDisplay}
                </a>
              </div>

              {/* Streamlined Primary CTAs */}
              <div className="flex flex-col gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2.5 rounded-full bg-[#176f70] py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#125c5d]"
                >
                  <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
                </a>
                <a
                  href={`tel:${HOME_DETAILS.phoneRaw}`}
                  className="flex items-center justify-center gap-2 rounded-full border-2 border-[#762f35] py-3 text-sm font-bold text-[#762f35] hover:bg-[#762f35] hover:text-white"
                >
                  <Phone className="h-4 w-4" /> Call {HOME_DETAILS.phoneDisplay}
                </a>
              </div>

              {/* Reassurance Subtext */}
              <p className="mt-4 text-center text-[11px] font-medium text-[#8a7c70]">
                ✓ Open 24/7 for emergency admissions & visits
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pattern-band h-3" aria-hidden="true" />
    </section>
  );
}
