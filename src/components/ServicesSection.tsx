import { useState } from "react";
import {
  HeartHandshake,
  Bed,
  Footprints,
  Accessibility,
  Bone,
  Globe,
  Soup,
  Stethoscope,
  Baby,
  Brain,
  ShieldAlert,
  ChefHat,
  Bath,
  Home,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { FACILITY_SERVICES, HOMECARE_SERVICES } from "../data/homeData";
import { EASE, FadeIn, Stagger, TextEffect, staggerItem } from "./ui/motion";

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<"facility" | "homecare">("facility");

  const iconMap: Record<string, React.ElementType> = {
    HeartHandshake,
    Bed,
    Footprints,
    Accessibility,
    Bone,
    Globe,
    Soup,
    Stethoscope,
    Baby,
    Brain,
    ShieldAlert,
    ChefHat,
    Bath,
  };

  const currentServices = activeTab === "facility" ? FACILITY_SERVICES : HOMECARE_SERVICES;

  return (
    <section id="services" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-10 max-w-3xl">
          <FadeIn as="p" y={12} className="eyebrow flex items-center gap-2 text-[#d97732]">
            <Sparkles className="h-4 w-4 text-[#d97732]" /> Complete Spectrum of Care
          </FadeIn>
          <TextEffect
            as="h2"
            text="Specialized care at our campus, *& professional help at your doorstep.*"
            accentClassName="text-[#176f70]"
            stagger={0.05}
            className="mt-2 font-editorial text-3xl sm:text-5xl text-[#27221f]"
          />
          <FadeIn as="p" delay={0.3} y={14} className="mt-3 text-sm sm:text-base leading-7 text-[#766a61]">
            Whether your family needs full-time residential elder care at Bowrampet or trusted nursing and cooking
            support at your home in Hyderabad, our compassionate staff is here 24/7.
          </FadeIn>
        </div>

        {/* Category Tabs: Facility vs Home Care */}
        <div className="mb-8 flex flex-wrap gap-3 border-b border-[#eadfd2] pb-4">
          <button
            onClick={() => setActiveTab("facility")}
            aria-pressed={activeTab === "facility"}
            className={`relative isolate flex items-center gap-2.5 rounded-2xl px-5 py-3 text-xs sm:text-sm font-bold transition-colors duration-300 ${
              activeTab === "facility" ? "text-white" : "bg-[#fbf6ed] text-[#615650] hover:bg-[#f1e5d5]"
            }`}
          >
            {activeTab === "facility" && (
              <motion.span
                layoutId="svc-tab"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
                className="absolute inset-0 -z-10 rounded-2xl bg-[#762f35] shadow-md shadow-[#762f35]/20"
              />
            )}
            <Home className="h-4 w-4" />
            <span>Part 1: Old Age Home & Facility Care</span>
            <span
              className={`rounded-full px-2 py-0.5 text-[11px] font-extrabold ${
                activeTab === "facility" ? "bg-white/20 text-white" : "bg-[#eadfd2] text-[#762f35]"
              }`}
            >
              11 Services
            </span>
          </button>

          <button
            onClick={() => setActiveTab("homecare")}
            aria-pressed={activeTab === "homecare"}
            className={`relative isolate flex items-center gap-2.5 rounded-2xl px-5 py-3 text-xs sm:text-sm font-bold transition-colors duration-300 ${
              activeTab === "homecare" ? "text-white" : "bg-[#fbf6ed] text-[#615650] hover:bg-[#f1e5d5]"
            }`}
          >
            {activeTab === "homecare" && (
              <motion.span
                layoutId="svc-tab"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
                className="absolute inset-0 -z-10 rounded-2xl bg-[#176f70] shadow-md shadow-[#176f70]/20"
              />
            )}
            <Stethoscope className="h-4 w-4" />
            <span>Part 2: Doorstep Home Care</span>
            <span
              className={`rounded-full px-2 py-0.5 text-[11px] font-extrabold ${
                activeTab === "homecare" ? "bg-white/20 text-white" : "bg-[#eadfd2] text-[#176f70]"
              }`}
            >
              4 Services
            </span>
          </button>
        </div>

        {/* Category Context Banner - Clean & Informative */}
        <div className="mb-8 rounded-2xl bg-[#fbf6ed] p-4 text-xs sm:text-sm text-[#5a4e46] border border-[#eadfd2] flex items-center gap-2.5">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-[#176f70]" />
          <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={activeTab}
            initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
            exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            {activeTab === "facility" ? (
              <>
                <strong>Facility-Based Services:</strong> Round-the-clock doctors, nurses, fowler beds, pure veg meals,
                and emergency hospital tie-ups at Honest Residency, Bowrampet.
              </>
            ) : (
              <>
                <strong>Doorstep Home Services:</strong> Background-verified nurses, experienced nannies, cooks, and
                hygiene attendants dispatched directly to your residence across Hyderabad.
              </>
            )}
          </motion.span>
          </AnimatePresence>
        </div>

        {/* Services Grid (No CTA Spam) */}
        <Stagger key={activeTab} stagger={0.06} amount={0.05} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {currentServices.map((service, index) => {
            const IconComponent = iconMap[service.icon] || HeartHandshake;
            const accentBg =
              service.accent === "teal"
                ? "bg-[#d9eeee] text-[#176f70]"
                : service.accent === "maroon"
                ? "bg-[#f1dfe0] text-[#762f35]"
                : service.accent === "mustard"
                ? "bg-[#f8e8bf] text-[#9a6b15]"
                : "bg-[#f8dcc2] text-[#b45720]";

            return (
              <motion.article
                key={service.id}
                variants={staggerItem}
                className="group flex flex-col justify-between rounded-3xl border border-[#eadfd2] bg-[#fbf6ed] p-6 transition-[translate,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-[#762f35]/5"
              >
                <div>
                  <div className="mb-5 flex items-start justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-xs transition-transform duration-300 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:-rotate-6 group-hover:scale-110 ${accentBg}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    {service.badge && (
                      <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#762f35] border border-[#eadfd2] shadow-2xs">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-editorial text-xl font-bold leading-snug text-[#27221f] group-hover:text-[#762f35] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-xs leading-5 text-[#6d625a]">
                    {service.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#eadfd2]/60 text-[11px] font-semibold text-[#8a7c70] flex items-center justify-between">
                  <span>Service #{index + 1}</span>
                  <span className="text-[#176f70] font-bold">
                    {service.category === "facility" ? "Bowrampet Campus" : "Doorstep Service"}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
