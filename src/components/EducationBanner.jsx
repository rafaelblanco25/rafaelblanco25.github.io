import { Tooltip } from "@material-tailwind/react";
import CategoryIdentifier from "./CategoryIdentifier";
import Banner from "./Banner";
import { EDUCATION } from "../data/profile";

function EducationBanner() {
  return (
    <Banner id="education">
      <div className="w-full">
        <CategoryIdentifier
          name="Education"
          description="Academic Background And Qualifications"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {EDUCATION.map((edu) => (
            <EducationCard
              key={edu.institution}
              institution={edu.institution}
              location={edu.location}
              degree={edu.degree}
              year={edu.year}
              logos={edu.logos}
            />
          ))}
        </div>
      </div>
    </Banner>
  );
}

function LogoList({ logos }) {
  return (
    <div className="flex -space-x-2 items-center justify-center mb-3 flex-wrap">
      {logos.map((logo) => (
        <Tooltip key={logo.name} content={logo.name}>
          <button
            type="button"
            aria-label={logo.name}
            className="bg-white rounded-full p-2 border-2 border-black hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold transition-transform duration-300"
          >
            <img
              src={logo.src}
              alt={logo.name}
              loading="lazy"
              decoding="async"
              className="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-contain"
            />
          </button>
        </Tooltip>
      ))}
    </div>
  );
}

function EducationCard({ institution, location, degree, year, logos }) {
  return (
    <div className="bg-black shadow-md rounded-lg p-5 border-2 border-gray text-white flex flex-col gap-2 h-full">
      <div className="flex justify-end">
        <span className="bg-gold text-black px-2.5 py-0.5 text-xs sm:text-sm font-bold rounded-md">
          {year}
        </span>
      </div>
      <LogoList logos={logos} />
      <h3 className="text-lg font-semibold text-center">{institution}</h3>
      <p className="text-center text-sm text-gray_text">{location}</p>
      <p className="text-gray_text text-sm sm:text-base mt-auto pt-2">{degree}</p>
    </div>
  );
}

export default EducationBanner;
