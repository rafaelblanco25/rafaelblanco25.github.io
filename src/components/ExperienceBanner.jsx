import CategoryIdentifier from "./CategoryIdentifier";
import Banner from "./Banner";
import { EXPERIENCE } from "../data/profile";

function ExperienceBanner() {
  return (
    <Banner id="experience">
      <CategoryIdentifier
        name="Experiencia Profesional & I+D"
        description="Centros de Investigación e Industria"
        subtitle="Trayectoria de investigación y desarrollo en Francia trabajando en visualización de datos, realidad aumentada, visión por computador y algoritmos para videojuegos."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EXPERIENCE.map((exp) => (
          <ExperienceCard
            key={`${exp.company}-${exp.year}`}
            company={exp.company}
            role={exp.role}
            year={exp.year}
            location={exp.location}
            description={exp.description}
            highlights={exp.highlights}
            logo={exp.logo}
          />
        ))}
      </div>
    </Banner>
  );
}

function ExperienceCard({
  company,
  role,
  year,
  location,
  description,
  highlights,
  logo,
}) {
  return (
    <article className="rounded-2xl border border-brand-border bg-brand-surface p-6 flex flex-col gap-4 hover:border-gold/60 transition-colors h-full">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <span className="text-white bg-bordeaux px-3 py-1 text-xs font-semibold rounded-lg">
          {role}
        </span>
        <span className="bg-gold text-black font-mono px-3 py-1 text-xs font-bold rounded-lg">
          {year}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <img
          src={logo}
          alt={`Logo de ${company}`}
          loading="lazy"
          decoding="async"
          className="w-16 h-16 rounded-xl bg-white object-contain p-1.5 shrink-0"
        />
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white">{company}</h3>
          <p className="text-xs sm:text-sm font-mono text-gold">{location}</p>
        </div>
      </div>

      <p className="text-gray_text text-sm leading-relaxed">{description}</p>

      {highlights?.length > 0 && (
        <ul className="space-y-2 pt-3 border-t border-brand-border mt-auto">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-xs sm:text-sm text-white/90"
            >
              <span className="text-gold font-mono font-bold" aria-hidden="true">
                •
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default ExperienceBanner;
