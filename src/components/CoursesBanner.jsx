import linkIcon from "../assets/courses/link.webp";
import Banner from "./Banner";
import CategoryIdentifier from "./CategoryIdentifier";
import { COURSES } from "../data/profile";

function CoursesBanner() {
  return (
    <Banner id="courses">
      <CategoryIdentifier
        name="Certificaciones & Especializaciones"
        description="Formación Continua en IA, Ciencia de Datos y Visualización"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {COURSES.map((course) => (
          <CourseCard key={course.name} course={course} />
        ))}
      </div>
    </Banner>
  );
}

function CourseCard({ course }) {
  return (
    <article className="rounded-2xl border border-brand-border bg-brand-surface p-6 text-white flex flex-col gap-4 hover:border-gold/60 transition-colors h-full">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <span className="text-white bg-coursera px-3 py-1 text-xs font-semibold rounded-lg">
          {course.institution}
        </span>
        <div className="flex items-center gap-2">
          <span className="bg-brand-elevated border border-brand-border text-gold font-mono px-2.5 py-1 text-xs font-bold rounded-lg">
            {course.date}
          </span>
          {course.link && (
            <a
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver certificación ${course.name}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-brand-border bg-brand-elevated px-2.5 py-1 text-xs font-semibold text-white hover:border-gold hover:text-gold transition-colors"
            >
              <img
                src={linkIcon}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-4 w-4 bg-white rounded-full p-0.5"
              />
              <span>Ver curso</span>
            </a>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex -space-x-2 shrink-0">
          {course.icons.map((logo) => (
            <div
              key={logo.name}
              title={logo.name}
              className="bg-white rounded-full p-1.5 border-2 border-brand-surface"
            >
              <img
                src={logo.icon}
                alt={logo.name}
                loading="lazy"
                decoding="async"
                className="h-9 w-9 rounded-full object-contain"
              />
            </div>
          ))}
        </div>
        <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
          {course.name}
        </h3>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-brand-border">
        {course.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md bg-gold/15 border border-gold/30 text-gold text-xs font-semibold px-2.5 py-1"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

export default CoursesBanner;
