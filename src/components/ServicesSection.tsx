import { Stethoscope, Utensils, ShieldCheck, Heart } from "lucide-react";
import { CORE_SERVICES } from "../data/homeData";

export function ServicesSection() {
  const iconMap: Record<string, typeof Stethoscope> = {
    Stethoscope,
    Utensils,
    ShieldCheck,
    Heart,
  };

  return (
    <section id="services" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow text-[#d97732]">Comprehensive Elder Care</p>
          <h2 className="mt-2 font-editorial text-3xl sm:text-4xl text-[#27221f]">
            Everyday care, done with <span className="text-[#176f70]">dignity & patience.</span>
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#766a61]">
            From active independent living to specialized bedside care, our dedicated staff provides warmth, safety,
            and complete medical peace of mind.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CORE_SERVICES.map((s, i) => {
            const Icon = iconMap[s.icon] || Heart;
            return (
              <article
                key={s.id}
                className="flex flex-col rounded-3xl border border-[#eadfd2] bg-[#fbf6ed] p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#762f35]/5"
              >
                <div className="mb-6 flex items-start justify-between">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                      s.accent === "teal"
                        ? "bg-[#d9eeee] text-[#176f70]"
                        : s.accent === "maroon"
                        ? "bg-[#f1dfe0] text-[#762f35]"
                        : s.accent === "mustard"
                        ? "bg-[#f8e8bf] text-[#9a6b15]"
                        : "bg-[#f8dcc2] text-[#b45720]"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-editorial text-2xl text-[#dfd0bf]">0{i + 1}</span>
                </div>
                <h3 className="font-editorial text-xl text-[#27221f]">{s.title}</h3>
                <p className="mt-2 text-xs leading-5 text-[#766a61]">{s.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
