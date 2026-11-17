import { Tooltip } from "@material-tailwind/react";
import linkIcon from "../assets/courses/link.webp";
import Banner from "./Banner";
import CategoryIdentifier from "./CategoryIdentifier";
import { COURSES } from "../data/profile";

function CoursesBanner() {
  return (
    <Banner id="courses">
      <div className="w-full">
        <CategoryIdentifier
          name="Courses"
          description="Courses And Certifications"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COURSES.map((course) => (
            <CourseCard
              key={course.name}
              name={course.name}
              institution={course.institution}
              icons={course.icons}
              link={course.link}
              date={course.date}
              skills={course.skills}
            />
          ))}
        </div>
      </div>
    </Banner>
  );
}
export default CoursesBanner;

function CourseCard({ name, institution, icons, link, date, skills }) {
  return (
    <div className="bg-black rounded-lg p-5 shadow-lg border-2 border-gray text-white flex flex-col gap-3 h-full">
      <div className="flex items-center justify-between gap-2">
        <p className="text-white bg-coursera px-2.5 py-0.5 text-xs sm:text-sm font-semibold rounded-md">
          {institution}
        </p>
        <div className="flex items-center gap-2">
          <span className="bg-gold text-black px-2.5 py-0.5 text-xs sm:text-sm font-bold rounded-md">
            {date}
          </span>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open course ${name}`}
              className="rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              <Tooltip content="Link to Course">
                <img
                  src={linkIcon}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-8 w-8 hover:scale-105 transition-transform duration-300 bg-white rounded-full"
                />
              </Tooltip>
            </a>
          )}
        </div>
      </div>
      <LogoList logos={icons} />
      <h3 className="text-white text-lg sm:text-xl font-bold text-center">
        {name}
      </h3>
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-gold text-black text-xs font-semibold px-2 py-1 rounded-lg"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function LogoList({ logos }) {
  return (
    <div className="flex -space-x-2 items-center justify-center">
      {logos.map((logo) => (
        <Tooltip key={logo.name} content={logo.name}>
          <button
            type="button"
            aria-label={logo.name}
            className="bg-white rounded-full p-2 border-2 border-black hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold transition-transform duration-300"
          >
            <img
              src={logo.icon}
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
