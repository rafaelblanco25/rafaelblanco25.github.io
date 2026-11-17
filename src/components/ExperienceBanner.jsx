import CategoryIdentifier from "./CategoryIdentifier";
import Banner from "./Banner";
import { EXPERIENCE } from "../data/profile";

function ExperienceBanner() {
  return (
    <Banner id="experience">
      <div className="w-full">
        <CategoryIdentifier
          name="Experience"
          description="Companies I Have Worked For"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
    <div className="bg-black p-5 rounded-lg shadow-md flex flex-col border-2 border-gray gap-3 h-full">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <span className="text-white bg-bordeaux px-2.5 py-1 text-xs sm:text-sm font-semibold rounded-md">
          {role}
        </span>
        <span className="bg-gold text-black px-2.5 py-1 text-xs sm:text-sm font-bold rounded-md">
          {year}
        </span>
      </div>
      <img
        src={logo}
        alt={`${company} logo`}
        loading="lazy"
        decoding="async"
        className="w-20 h-20 mx-auto rounded-full bg-white object-contain p-1"
      />
      <h3 className="text-xl font-semibold text-white text-center">
        {company} — {location}
      </h3>
      <p className="text-gray_text text-sm sm:text-base">{description}</p>
      {highlights?.length > 0 && (
        <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-gray_text">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExperienceBanner;
