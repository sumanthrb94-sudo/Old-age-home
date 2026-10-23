import { useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Phone, Menu, X, HeartHandshake, ShieldCheck } from "lucide-react";
import { HOME_DETAILS } from "../data/homeData";
import { EASE } from "./ui/motion";

const NAV = [
  { href: "#services", label: "Care Services" },
  { href: "#rooms", label: "Stay & Pricing" },
  { href: "#gallery", label: "Life Here" },
  { href: "#location", label: "Campus Visit" },
];

interface HeaderProps {
  onOpenCompliance?: () => void;
}

export function Header({ onOpenCompliance }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <>
      <div className="pattern-band h-2" aria-hidden="true" />
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="sticky top-0 z-40 border-b border-[#e9dccb] bg-[#fbf6ed]/95 backdrop-blur-md"
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Brand Logo & Name */}
          <a href="#top" className="group flex items-center gap-3">
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.15 }}
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#762f35] text-[#f8d79b] shadow-sm transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105"
            >
              <HeartHandshake className="h-6 w-6" />
            </motion.div>
            <div>
              <span className="font-editorial block text-xl font-bold leading-none text-[#762f35]">
                {HOME_DETAILS.name}
              </span>
              <span className="mt-1 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#7b7068]">
                {HOME_DETAILS.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-7 text-sm font-semibold text-[#615650] lg:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="mm-link hover:text-[#762f35] transition-colors">
                {n.label}
              </a>
            ))}
            <button
              onClick={onOpenCompliance}
              className="flex items-center gap-1.5 text-xs font-bold text-[#176f70] hover:text-[#125c5d] bg-[#176f70]/10 px-3 py-1.5 rounded-full transition-colors"
            >
              <ShieldCheck className="h-3.5 w-3.5" /> Govt. Approvals & Tax
            </button>
          </nav>

          {/* Single High-Converting Header Action (Direct Call) */}
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href={`tel:${HOME_DETAILS.phoneRaw}`}
              className="flex items-center gap-2 rounded-full border border-[#d9c6b1] bg-white px-4 py-2 text-xs font-bold text-[#762f35] hover:border-[#762f35] shadow-xs transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-[#d97732]" />
              <span>{HOME_DETAILS.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${HOME_DETAILS.phoneRaw}`}
              className="flex sm:hidden items-center gap-1.5 rounded-full border border-[#d9c6b1] bg-white px-3 py-1.5 text-xs font-bold text-[#762f35]"
            >
              <Phone className="h-3.5 w-3.5 text-[#d97732]" /> Call
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full p-2 text-[#762f35]"
              aria-label="Toggle navigation menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileMenuOpen ? "x" : "menu"}
                  className="block"
                  initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? <X /> : <Menu />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence initial={false}>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden border-t border-[#e9dccb] bg-[#fbf6ed] lg:hidden"
          >
            <motion.div
              className="flex flex-col gap-3 px-5 py-4 text-sm font-bold text-[#615650]"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } } }}
            >
              {NAV.map((n) => (
                <motion.a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMobileMenuOpen(false)}
                  variants={{ hidden: { opacity: 0, x: -14 }, show: { opacity: 1, x: 0 } }}
                >
                  {n.label}
                </motion.a>
              ))}
              <motion.button
                variants={{ hidden: { opacity: 0, x: -14 }, show: { opacity: 1, x: 0 } }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenCompliance) onOpenCompliance();
                }}
                className="flex items-center gap-2 text-left text-xs font-bold text-[#176f70] py-1"
              >
                <ShieldCheck className="h-4 w-4" /> View Govt. Approvals & Tax Info (GST / PAN)
              </motion.button>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>

        {/* reading progress */}
        <motion.div
          aria-hidden="true"
          style={{ scaleX: progress }}
          className="absolute inset-x-0 -bottom-px h-0.5 origin-left bg-gradient-to-r from-[#762f35] via-[#d97732] to-[#f1c27a]"
        />
      </motion.header>
    </>
  );
}
