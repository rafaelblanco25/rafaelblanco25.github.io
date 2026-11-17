import CategoryIdentifier from "./CategoryIdentifier";
import Banner from "./Banner";
import { RESEARCH } from "../data/profile";

function ResearchBanner() {
  return (
    <Banner id="research">
      <div className="w-full">
        <CategoryIdentifier
          name="Research"
          description="Scientific Publications"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
          {RESEARCH.map((research) => (
            <article
              key={research.title}
              className="bg-black shadow-md rounded-lg p-5 border-2 border-gray flex flex-col gap-3 h-full"
            >
              <div className="relative">
                <img
                  src={research.image}
                  alt={research.title}
                  loading="lazy"
                  decoding="async"
                  className="h-56 sm:h-64 w-full object-cover rounded-lg"
                />
                <span className="absolute top-2 right-2 bg-gold text-black px-2.5 py-0.5 text-xs sm:text-sm font-bold rounded-md shadow">
                  {research.year}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gold font-semibold">
                {research.type} —{" "}
                <span className="text-gray_text font-normal">
                  {research.journal}
                </span>
              </p>
              <h3 className="text-lg sm:text-xl font-bold">{research.title}</h3>
              {research.description && (
                <p className="text-sm text-gray_text">{research.description}</p>
              )}
              <div className="mt-auto pt-3 border-t border-gray/40 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {research.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gold text-black text-xs font-semibold px-2 py-1 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 ml-auto">
                  {research.links.map((item) => (
                    <a
                      key={item.link}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.label}: ${research.title}`}
                      className="inline-flex items-center gap-1.5 rounded-md border border-gray px-2.5 py-1 text-xs font-semibold text-white hover:border-gold hover:text-gold transition-colors"
                    >
                      <img
                        src={item.icon}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="h-5 w-5"
                      />
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Banner>
  );
}

export default ResearchBanner;
