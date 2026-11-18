import CategoryIdentifier from "./CategoryIdentifier";
import Banner from "./Banner";
import { useApp } from "../context/AppContext";

function EducationBanner() {
  const { t } = useApp();
  const ed = t.educationSection;

  return (
    <Banner id="education">
      <CategoryIdentifier
        name={ed.tag}
        description={ed.title}
        subtitle={ed.subtitle}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {ed.items.map((edu) => (
          <EducationCard key={edu.institution} edu={edu} />
        ))}
      </div>
    </Banner>
  );
}

function EducationCard({ edu }) {
  return (
    <article className="rounded-2xl border border-brand-border bg-brand-surface p-6 flex flex-col gap-4 hover:border-gold/60 transition-colors h-full">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <span className="rounded-lg border border-gold/30 bg-gold/10 px-2.5 py-1 font-mono text-xs font-bold text-gold">
          {edu.gpa}
        </span>
        <span className="bg-brand-elevated border border-brand-border text-white font-mono px-2.5 py-1 text-xs font-semibold rounded-lg">
          {edu.year}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2 pt-1">
        {edu.logos.map((logo) => (
          <div
            key={logo.name}
            title={logo.name}
            className="inline-flex items-center gap-2 rounded-xl border border-brand-border bg-brand-elevated px-2.5 py-1.5"
          >
            <img
              src={logo.src}
              alt={logo.name}
              loading="lazy"
              decoding="async"
              className="h-7 w-7 rounded-full bg-white p-0.5 object-contain shrink-0"
            />
            <span className="text-xs font-medium text-gray_text">
              {logo.name}
            </span>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-lg sm:text-xl font-bold text-white">
          {edu.institution}
        </h3>
        <p className="text-xs sm:text-sm font-mono text-gold mt-0.5">
          {edu.location}
        </p>
      </div>

      <p className="text-sm sm:text-base font-semibold text-white/95">
        {edu.degree}
      </p>

      {edu.details && (
        <p className="text-xs sm:text-sm text-gray_text mt-auto pt-3 border-t border-brand-border">
          {edu.details}
        </p>
      )}
    </article>
  );
}

export default EducationBanner;
