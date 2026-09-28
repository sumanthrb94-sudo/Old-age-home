import { Stethoscope, Utensils, ShieldCheck, Heart, MessageCircle } from "lucide-react";
import { CORE_SERVICES, HOME_DETAILS } from "../data/homeData";

export function ServicesSection() {
  const iconMap: Record<string, typeof Stethoscope> = {
    Stethoscope,
    Utensils,
    ShieldCheck,
    Heart,
  };

  const getWhatsAppLink = (title: string) => {
    return `https://wa.me/${HOME_DETAILS.whatsappNumber}?text=${encodeURIComponent(
      `Hello Siva Prakash Old Age Home, I would like to inquire about your "${title}" service.`
    )}`;
  };

  return (
    <section id="services" className="py-14 sm:py-18 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
            Our Care Services
          </p>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-900">
            Dedicated Care for Every Stage of Elder Life
          </h2>
          <p className="mt-2 text-sm text-stone-600">
            From active independent elders needing companionship to high-dependency bedridden care, our staff is available round-the-clock.
          </p>
        </div>

        {/* 4 Clean Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CORE_SERVICES.map((s) => {
            const Icon = iconMap[s.icon] || Heart;
            return (
              <div
                key={s.id}
                className="bg-stone-50 rounded-2xl p-6 border border-stone-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white border border-stone-200 text-amber-800 flex items-center justify-center mb-4 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-editorial text-lg font-bold text-stone-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-200/80">
                  <a
                    href={getWhatsAppLink(s.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire this care on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
