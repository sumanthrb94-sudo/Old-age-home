import { Check, ArrowUpRight, Bath, Home, Sparkles, Utensils, HeartHandshake, Tv } from "lucide-react";
import { ROOMS, HOME_DETAILS } from "../data/homeData";

export function LivingOptionsSection() {
  const getLink = (r: typeof ROOMS[number]) =>
    `https://wa.me/${HOME_DETAILS.whatsappNumber}?text=${encodeURIComponent(
      `Hello, I would like to enquire about ${r.title} (${r.price} ${r.billingUnit}) at Siva Prakash Old Age Home, Bowrampet.`
    )}`;

  return (
    <section id="rooms" className="bg-[#f1e5d5] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow text-[#762f35]">Stay & Accommodation options</p>
          <h2 className="mt-3 font-editorial text-4xl text-[#27221f] sm:text-5xl">
            A living space tailored to <span className="text-[#d97732]">every need.</span>
          </h2>
          <p className="mt-4 text-base leading-7 text-[#766a61]">
            From budget-friendly shared accommodations to fully personalized NRI luxury suites with private caretakers,
            every room provides a caring, safe, and homely sanctuary.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {ROOMS.map((room) => {
            const isFeatured = room.featured;
            const isPopular = room.popular;

            return (
              <article
                key={room.id}
                className={`relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isFeatured
                    ? "ring-2 ring-[#d97732] shadow-[#d97732]/10"
                    : isPopular
                    ? "ring-2 ring-[#176f70] shadow-[#176f70]/10"
                    : "border border-[#eadfd2]"
                }`}
              >
                {/* Popular or Featured Badge Banner */}
                {(isFeatured || isPopular || room.badge) && (
                  <div
                    className={`px-4 py-1.5 text-center text-[11px] font-extrabold uppercase tracking-wider text-white ${
                      isFeatured
                        ? "bg-gradient-to-r from-[#d97732] to-[#b35919]"
                        : isPopular
                        ? "bg-[#176f70]"
                        : "bg-[#762f35]"
                    }`}
                  >
                    {isFeatured ? "✨ " + room.badge : isPopular ? "⭐ " + room.badge : room.badge}
                  </div>
                )}

                {/* Room Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={room.imageUrl}
                    alt={room.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 rounded-full bg-[#27221f]/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {room.layout}
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  {/* Price */}
                  <div className="mb-3">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-editorial text-3xl font-bold text-[#762f35]">
                        {room.price}
                      </span>
                      <span className="text-xs font-medium text-[#766a61]">
                        {room.billingUnit}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-editorial text-xl font-bold leading-snug text-[#27221f]">
                    {room.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-[#766a61]">
                    {room.description}
                  </p>

                  {/* Key Highlights Pill Box */}
                  <div className="mt-4 space-y-2 rounded-2xl bg-[#fbf6ed] p-3 text-xs text-[#52463f] border border-[#eee3d5]">
                    <div className="flex items-center gap-2 font-medium">
                      <Bath className="h-4 w-4 shrink-0 text-[#176f70]" />
                      <span>{room.bathroomInfo}</span>
                    </div>
                    <div className="flex items-center gap-2 font-medium">
                      <Tv className="h-4 w-4 shrink-0 text-[#d97732]" />
                      <span>{room.amenities.slice(0, 3).join(", ")}</span>
                    </div>
                  </div>

                  {/* Special Food Callout (For Suite / NRI) */}
                  {room.food && (
                    <div className="mt-3 rounded-xl bg-amber-50/80 p-2.5 text-xs text-amber-900 border border-amber-200/70">
                      <div className="flex items-start gap-1.5">
                        <Utensils className="h-3.5 w-3.5 mt-0.5 shrink-0 text-[#d97732]" />
                        <div>
                          <strong className="font-semibold block text-[11px] text-[#b35919]">
                            {room.id === "nri-luxury" ? "Customized Gourmet Menu:" : "Special Premium Meals:"}
                          </strong>
                          <p className="text-[11px] leading-4 text-amber-900/90">{room.food}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Special Caretaker Service Callout (For NRI) */}
                  {room.specialService && (
                    <div className="mt-2 rounded-xl bg-teal-50/80 p-2.5 text-xs text-teal-900 border border-teal-200/70">
                      <div className="flex items-start gap-1.5">
                        <HeartHandshake className="h-3.5 w-3.5 mt-0.5 shrink-0 text-[#176f70]" />
                        <div>
                          <strong className="font-semibold block text-[11px] text-[#125c5d]">
                            Dedicated Personal Caretaker:
                          </strong>
                          <p className="text-[11px] leading-4 text-teal-900/90">{room.specialService}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Features List */}
                  <div className="my-5 space-y-2 border-t border-[#eadfd2] pt-4 text-xs text-[#615650]">
                    {room.features.map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 mt-0.5 shrink-0 text-[#176f70]" />
                        <span className="leading-tight">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={getLink(room)}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-auto flex items-center justify-center gap-2 rounded-full py-3 text-xs font-bold transition-colors ${
                      isFeatured
                        ? "bg-[#d97732] text-white hover:bg-[#b35919]"
                        : isPopular
                        ? "bg-[#176f70] text-white hover:bg-[#125c5d]"
                        : "bg-[#762f35] text-white hover:bg-[#5e242a]"
                    }`}
                  >
                    Enquire Availability <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
