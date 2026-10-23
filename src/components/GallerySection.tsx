import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { GALLERY_PHOTOS, GalleryItem } from "../data/homeData";
import { EASE, FadeIn, Stagger, TextEffect } from "./ui/motion";

const tile = {
  hidden: { opacity: 0, scale: 0.92, y: 30, filter: "blur(10px)" },
  show: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease: EASE }, transitionEnd: { filter: "none" } },
};

export function GallerySection() {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="bg-[#fbf6ed] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <FadeIn as="p" y={12} className="eyebrow text-[#d97732]">A glimpse of life here</FadeIn>
            <TextEffect
              as="h2"
              text="The everyday is *beautiful.*"
              accentClassName="text-[#762f35]"
              className="mt-3 font-editorial text-4xl text-[#27221f] sm:text-5xl"
            />
          </div>
          <FadeIn as="p" delay={0.25} y={14} className="max-w-sm text-sm leading-7 text-[#766a61]">
            Chai on the verandah, a good meal, a round of carrom — the little things make a home.
          </FadeIn>
        </div>

        <Stagger stagger={0.09} amount={0.1} className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
          {GALLERY_PHOTOS.map((photo, i) => (
            <motion.button
              key={photo.id}
              variants={tile}
              onClick={() => setActive(photo)}
              className={`group relative overflow-hidden rounded-2xl text-left ${
                i === 0 ? "col-span-2 row-span-2 aspect-square sm:aspect-auto" : "aspect-square"
              }`}
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#27221f]/80 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white transition-transform duration-500 ease-out group-hover:-translate-y-1 sm:p-5">
                <p className="font-editorial text-lg leading-tight">{photo.title}</p>
                <p className="mt-1 hidden text-[11px] text-white/75 sm:block">{photo.subtitle}</p>
              </div>
            </motion.button>
          ))}
        </Stagger>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-[#27221f]/90 p-4"
            onClick={() => setActive(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="relative max-w-4xl overflow-hidden rounded-3xl bg-[#fbf6ed]"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-3 top-3 z-10 rounded-full bg-[#27221f]/70 p-2 text-white"
                aria-label="Close image"
              >
                <X className="h-5 w-5" />
              </button>
              <img src={active.imageUrl} alt={active.title} className="max-h-[72vh] w-full object-contain" />
              <div className="p-5">
                <p className="font-editorial text-2xl text-[#762f35]">{active.title}</p>
                <p className="mt-1 text-sm text-[#766a61]">{active.subtitle}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
