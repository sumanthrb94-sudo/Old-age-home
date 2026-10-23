import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Phone, MapPin, CheckCircle2, Sparkles } from "lucide-react";
import { HOME_DETAILS } from "../data/homeData";
import { BorderTrail, EASE, FadeIn, GlowEffect, SlidingNumber, Stagger, TextEffect, popItem, staggerItem } from "./ui/motion";

const SLIDE_MS = 6000;

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
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const autoplay = !paused && !reduceMotion;

  // advance the hero photo every few seconds; picking a thumbnail restarts the clock
  useEffect(() => {
    if (!autoplay) return;
    const id = window.setTimeout(() => setActiveImageIndex((i) => (i + 1) % HERO_IMAGES.length), SLIDE_MS);
    return () => window.clearTimeout(id);
  }, [activeImageIndex, autoplay]);

  const whatsappUrl = `https://wa.me/${HOME_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    "Namaste, I would like to enquire about elder care services and room availability at Siva Prakash Hospitalities."
  )}`;

  const activeImage = HERO_IMAGES[activeImageIndex];

  return (
    <section id="top" className="overflow-hidden bg-[#fbf6ed] pt-4 sm:pt-6">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Top Hero Image Section - Prominent & Engaging */}
        <div className="relative mb-8 sm:mb-12">
          {/* Main Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
            transition={{ duration: 0.9, ease: EASE }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden rounded-3xl border-4 border-white bg-[#eadcc9] shadow-xl sm:rounded-[2.5rem]"
          >
            {/* cross-fade between photos with a slow Ken Burns drift */}
            <AnimatePresence initial={false}>
              <motion.img
                key={activeImage.url}
                src={activeImage.url}
                alt={activeImage.label}
                className="absolute inset-0 h-full w-full object-cover"
                fetchPriority="high"
                initial={{ opacity: 0, scale: 1.12 }}
                animate={{ opacity: 1, scale: 1.02 }}
                exit={{ opacity: 0 }}
                transition={{ opacity: { duration: 0.9, ease: "easeInOut" }, scale: { duration: SLIDE_MS / 1000 + 1.5, ease: "linear" } }}
              />
            </AnimatePresence>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#27221f]/90 via-[#27221f]/35 to-transparent" />

            {/* Top Badges on Image */}
            <div className="absolute left-4 top-4 flex flex-wrap gap-2 sm:left-6 sm:top-6">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={activeImage.badge}
                  initial={{ opacity: 0, y: -8, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
                  exit={{ opacity: 0, y: 8, filter: "blur(6px)" }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="flex items-center gap-1.5 rounded-full bg-[#762f35]/90 px-3.5 py-1.5 text-xs font-bold text-white backdrop-blur-md"
                >
                  <Sparkles className="h-3.5 w-3.5 text-[#f8d79b]" />
                  {activeImage.badge}
                </motion.span>
              </AnimatePresence>
              <span className="hidden rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-bold text-[#27221f] backdrop-blur-md sm:inline-flex">
                Honest Residency, Bowrampet
              </span>
            </div>

            {/* Bottom Caption on Image */}
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 text-white flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4">
              <div>
                <p className="hidden sm:block text-xs font-semibold uppercase tracking-wider text-[#f8d79b]">
                  {HOME_DETAILS.name} · {HOME_DETAILS.tagline}
                </p>
                <TextEffect
                  key={activeImage.label}
                  as="h2"
                  text={activeImage.label}
                  onMount
                  delay={0.25}
                  stagger={0.05}
                  className="font-editorial text-xl leading-tight sm:mt-1 sm:text-4xl text-white"
                />
              </div>
              <div className="shrink-0 whitespace-nowrap rounded-2xl bg-white/15 px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold backdrop-blur-md text-white border border-white/20 self-start sm:self-auto">
                Stay options from{" "}
                <span className="text-[#f8d79b] font-bold text-sm">
                  <SlidingNumber value={5000} prefix="₹" /> / month
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Hero Image Selector Bar */}
          <Stagger onMount delay={0.45} stagger={0.07} className="mt-3 grid grid-cols-4 gap-2 sm:gap-4">
            {HERO_IMAGES.map((img, idx) => (
              <motion.button
                key={img.url}
                variants={staggerItem}
                onClick={() => setActiveImageIndex(idx)}
                aria-label={`Show photo: ${img.label}`}
                aria-pressed={activeImageIndex === idx}
                className={`group relative flex items-center gap-2 overflow-hidden rounded-xl border bg-white/60 p-1 text-left transition-colors hover:bg-white ${
                  activeImageIndex === idx ? "border-transparent" : "border-[#e4d5c3]"
                }`}
              >
                {/* active outline slides between thumbnails */}
                {activeImageIndex === idx && (
                  <motion.span
                    layoutId="hero-thumb"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-xl border border-[#762f35] bg-white ring-2 ring-[#762f35]/20 shadow-sm"
                  />
                )}
                <img
                  src={img.url}
                  alt=""
                  className="relative h-10 w-12 sm:h-12 sm:w-16 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="relative hidden sm:inline-block text-[11px] font-bold leading-tight text-[#4b4039] line-clamp-2">
                  {img.label}
                </span>
                {/* time left on this photo */}
                {activeImageIndex === idx && autoplay && (
                  <motion.span
                    key={`p-${activeImageIndex}`}
                    aria-hidden="true"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                    className="absolute inset-x-1 bottom-0.5 h-0.5 origin-left rounded-full bg-[#d97732]"
                  />
                )}
              </motion.button>
            ))}
          </Stagger>
        </div>

        {/* Conversion-Focused Hero Headline & Direct Contact Block */}
        <div className="grid gap-10 pb-16 sm:pb-20 lg:grid-cols-12 lg:items-center">
          {/* Core Proposition */}
          <div className="lg:col-span-7">
            <p className="eyebrow mb-3 flex items-center gap-2 text-[#d97732]">
              <motion.span
                className="h-px w-6 origin-left bg-[#d97732]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE }}
              />{" "}
              {HOME_DETAILS.tagline}
            </p>
            <TextEffect
              as="h1"
              text="A peaceful home where elders are treated like *family.*"
              accentClassName="text-[#762f35]"
              className="font-editorial text-4xl leading-[1.05] text-[#27221f] sm:text-6xl"
            />
            <FadeIn as="p" delay={0.5} y={16} className="mt-5 max-w-xl text-base leading-7 text-[#6d625a] sm:text-lg">
              At {HOME_DETAILS.name}, we provide round-the-clock nursing, specialized bedridden & rehabilitation care,
              fresh vegetarian meals, and professional doorstep home care across Hyderabad.
            </FadeIn>

            {/* Trust Highlights */}
            <Stagger delay={0.6} className="mt-6 grid grid-cols-2 gap-3 text-xs font-semibold text-[#5a4e46] sm:grid-cols-4">
              {["24/7 Trained Staff", "Pure Veg Meals", "Doctor Checkups", "Doorstep Support"].map((label) => (
                <motion.div
                  key={label}
                  variants={staggerItem}
                  className="flex items-center gap-2 rounded-xl bg-white p-2.5 border border-[#e8dccf]"
                >
                  <motion.span variants={popItem} className="shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-[#176f70]" />
                  </motion.span>
                  <span>{label}</span>
                </motion.div>
              ))}
            </Stagger>

            <FadeIn as="p" delay={0.9} y={10} className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#8a7c70]">
              <MapPin className="h-4 w-4 text-[#d97732] shrink-0" />
              {HOME_DETAILS.address}
            </FadeIn>
          </div>

          {/* High-Converting Streamlined Contact Card - Direct, No Clutter */}
          <FadeIn delay={0.3} y={40} className="lg:col-span-5">
            <div className="relative rounded-3xl border-2 border-[#762f35]/20 bg-white p-6 sm:p-8 shadow-xl shadow-[#762f35]/10">
              <BorderTrail color="#d97732" radius={24} inset={2} />
              <div className="mb-4">
                <span className="rounded-full bg-[#762f35]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#762f35]">
                  Direct Management Contact
                </span>
                <h3 className="mt-2 font-editorial text-2xl text-[#27221f]">
                  Speak directly with us
                </h3>
                <p className="mt-1 text-xs leading-5 text-[#766a61]">
                  Call or message directly to check room availability, schedule a campus visit, or request home care.
                </p>
              </div>

              {/* Prominent Phone Number Display */}
              <div className="my-5 rounded-2xl bg-[#fbf6ed] p-4 text-center border border-[#eadfd2]">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#8a7c70]">
                  Immediate Admissions & Enquiries
                </p>
                <a
                  href={`tel:${HOME_DETAILS.phoneRaw}`}
                  className="mt-1 block font-editorial text-3xl font-bold tracking-tight text-[#762f35] hover:text-[#5e242a]"
                >
                  {HOME_DETAILS.phoneDisplay}
                </a>
              </div>

              {/* Streamlined Primary CTAs with Official WhatsApp Logo */}
              <div className="flex flex-col gap-3">
                <div className="relative isolate">
                <GlowEffect className="rounded-full" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mm-shine relative flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#20ba59] transition-colors"
                >
                  <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
                </div>
                <a
                  href={`tel:${HOME_DETAILS.phoneRaw}`}
                  className="mm-shine flex items-center justify-center gap-2 rounded-full border-2 border-[#762f35] py-3 text-sm font-bold text-[#762f35] hover:bg-[#762f35] hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" /> Call {HOME_DETAILS.phoneDisplay}
                </a>
              </div>

              {/* Reassurance Subtext */}
              <p className="mt-4 text-center text-[11px] font-medium text-[#8a7c70]">
                ✓ Open 24/7 for emergency admissions & home care dispatch
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="pattern-band h-3" aria-hidden="true" />
    </section>
  );
}
