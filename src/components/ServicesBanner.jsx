import CategoryIdentifier from "./CategoryIdentifier";
import Banner from "./Banner";
import { SERVICE_PILLARS } from "../data/profile";

function ServicesBanner() {
  return (
    <Banner id="services">
      <CategoryIdentifier
        name="Servicios Profesionales"
        description="Soluciones Tecnológicas, Consultoría y Formación"
        subtitle="Cuatro áreas clave donde combino ingeniería de software, ciencia de datos e investigación científica para generar resultados medibles."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SERVICE_PILLARS.map((pillar) => (
          <ServicePillarCard key={pillar.title} pillar={pillar} />
        ))}
      </div>
    </Banner>
  );
}

function ServicePillarCard({ pillar }) {
  return (
    <article className="rounded-2xl border border-brand-border bg-brand-surface p-6 flex flex-col gap-4 hover:border-gold/60 transition-colors h-full">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center -space-x-2">
          {pillar.icons.map((icon, idx) => (
            <div
              key={idx}
              className="h-12 w-12 rounded-full bg-white p-1.5 border-2 border-brand-surface flex items-center justify-center"
            >
              <img
                src={icon}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
        <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 font-mono text-xs font-semibold text-gold">
          {pillar.badge}
        </span>
      </div>

      <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
      <p className="text-sm text-gray_text leading-relaxed">
        {pillar.description}
      </p>

      <ul className="space-y-2 mt-auto pt-3 border-t border-brand-border">
        {pillar.deliverables.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-xs sm:text-sm text-white/90"
          >
            <span className="text-gold font-mono font-bold" aria-hidden="true">
              {">"}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {pillar.ctaHref && (
        <div className="pt-2">
          <a
            href={pillar.ctaHref}
            className="inline-flex items-center text-xs sm:text-sm font-bold text-gold hover:underline"
          >
            {pillar.ctaLabel}
          </a>
        </div>
      )}
    </article>
  );
}

export default ServicesBanner;
