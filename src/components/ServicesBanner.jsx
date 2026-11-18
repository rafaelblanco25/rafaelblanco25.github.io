import CategoryIdentifier from "./CategoryIdentifier";
import Banner from "./Banner";
import { useApp } from "../context/AppContext";

function ServicesBanner() {
  const { t, navigateTo } = useApp();
  const sv = t.servicesSection;
  const p = t.profile;

  return (
    <Banner id="services">
      <CategoryIdentifier
        name={sv.tag}
        description={sv.title}
        subtitle={sv.subtitle}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sv.pillars.map((pillar) => (
          <ServicePillarCard
            key={pillar.title}
            pillar={pillar}
            sv={sv}
            profile={p}
            navigateTo={navigateTo}
          />
        ))}
      </div>
    </Banner>
  );
}

function ServicePillarCard({ pillar, sv, profile, navigateTo }) {
  const waText = sv.waServiceIntro
    ? sv.waServiceIntro(pillar.title)
    : pillar.title;
  const waHref = profile.whatsappNumber
    ? `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(waText)}`
    : `https://api.whatsapp.com/send?text=${encodeURIComponent(waText)}`;
  const mailHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    pillar.title
  )}`;

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

      {pillar.isClassesRouteCta ? (
        <div className="pt-2">
          <a
            href="/clases"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("classes");
            }}
            className="inline-flex items-center text-xs sm:text-sm font-bold text-gold hover:underline"
          >
            {pillar.ctaLabel}
          </a>
        </div>
      ) : (
        <div className="pt-2 flex flex-wrap items-center gap-2.5">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/40 px-3 py-1.5 text-xs font-bold text-emerald-300 hover:bg-emerald-500 hover:text-black transition-colors"
          >
            <span>{sv.whatsappCtaLabel}</span>
          </a>
          <a
            href={mailHref}
            className="inline-flex items-center gap-1.5 rounded-lg border border-brand-border bg-brand-elevated px-3 py-1.5 text-xs font-semibold text-gray_text hover:border-gold hover:text-white transition-colors"
          >
            <span>{sv.emailCtaLabel}</span>
          </a>
        </div>
      )}
    </article>
  );
}

export default ServicesBanner;
