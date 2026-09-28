import { Check, MessageCircle } from "lucide-react";
import { ROOMS, HOME_DETAILS } from "../data/homeData";

export function LivingOptionsSection() {
  const getWhatsAppRoomLink = (title: string, price: string) => {
    return `https://wa.me/${HOME_DETAILS.whatsappNumber}?text=${encodeURIComponent(
      `Hello Siva Prakash Old Age Home, I would like to inquire about availability for "${title}" (${price}) at Bowrampet.`
    )}`;
  };

  return (
    <section id="rooms" className="py-14 sm:py-18 bg-stone-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
            Living Accommodations
          </p>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-900">
            Comfortable, Clean & Senior-Friendly Rooms
          </h2>
          <p className="mt-2 text-sm text-stone-600">
            All rooms include 4 daily pure-vegetarian meals, daily housekeeping, 24/7 nursing/attendant supervision, and laundry.
          </p>
        </div>

        {/* 3 Room Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ROOMS.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
                  <img
                    src={room.imageUrl}
                    alt={room.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2.5 right-2.5 bg-amber-900/90 text-amber-100 text-xs font-bold px-2.5 py-1 rounded backdrop-blur-xs">
                    {room.pricePerMonth}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-editorial text-lg font-bold text-stone-900 mb-1">
                    {room.title}
                  </h3>
                  <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                    {room.description}
                  </p>

                  <div className="space-y-1.5 text-xs text-stone-700 pt-2 border-t border-stone-100">
                    {room.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href={getWhatsAppRoomLink(room.title, room.pricePerMonth)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
