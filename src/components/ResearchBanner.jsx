import CategoryIdentifier from "./CategoryIdentifier";
import Banner from "./Banner";
import { useApp } from "../context/AppContext";

function ResearchBanner() {
  const { t } = useApp();
  const r = t.researchSection;

  return (
    <Banner id="research">
      <CategoryIdentifier
        name={r.tag}
        description={r.title}
        subtitle={r.subtitle}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
        {r.items.map((research) => (
          <article
            key={research.title}
            className="rounded-2xl border border-brand-border bg-brand-surface p-6 flex flex-col gap-4 hover:border-gold/60 transition-colors h-full"
          >
            <div className="relative overflow-hidden rounded-xl border border-brand-border">
              <img
                src={research.image}
                alt={research.title}
                loading="lazy"
                decoding="async"
                className="h-52 sm:h-60 w-full object-cover"
              />
              <span className="absolute top-3 right-3 bg-gold text-black font-mono px-3 py-1 text-xs font-bold rounded-lg shadow">
                {research.year}
              </span>
              <span className="absolute bottom-3 left-3 bg-bordeaux/95 text-white px-3 py-1 text-xs font-semibold rounded-lg shadow">
                {research.type}
              </span>
            </div>

            <div>
              <p className="text-xs font-mono font-semibold text-gold">
                {research.journal}
              </p>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1 leading-snug">
                {research.title}
              </h3>
            </div>

            {research.description && (
              <p className="text-sm text-gray_text leading-relaxed">
                {research.description}
              </p>
            )}

            <div className="mt-auto pt-4 border-t border-brand-border flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {research.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-brand-border bg-brand-elevated px-2.5 py-1 text-xs font-medium text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 ml-auto">
                {research.links.map((item) => (
                  <a
                    key={item.link}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.label}: ${research.title}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-gold px-3.5 py-2 text-xs font-bold text-black hover:bg-white transition-colors"
                  >
                    <img
                      src={item.icon}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-4 w-4"
                    />
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Banner>
  );
}

export default ResearchBanner;
