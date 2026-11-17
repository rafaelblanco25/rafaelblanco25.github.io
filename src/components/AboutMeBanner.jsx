import { useState } from "react";
import Skill from "./Skill";
import CategoryIdentifier from "./CategoryIdentifier";
import Banner from "./Banner";
import { PROFILE, SKILL_CATEGORIES, SKILLS_LIST } from "../data/profile";

function AboutMeBanner() {
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleSkills =
    activeCategory === "all"
      ? SKILLS_LIST
      : SKILLS_LIST.filter((skill) => skill.roles.includes(activeCategory));

  const groups = Array.from(new Set(visibleSkills.map((s) => s.group)));

  return (
    <Banner id="about">
      <CategoryIdentifier
        name="Sobre Mí & Stack Técnico"
        description="Perfil Profesional, Habilidades e Idiomas"
      />

      {/* Bio + Languages Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
        {/* Bio Card */}
        <div className="lg:col-span-7 rounded-2xl border border-brand-border bg-brand-surface p-6 flex flex-col sm:flex-row items-center gap-6">
          <img
            src={PROFILE.aboutImage}
            alt={PROFILE.name}
            loading="lazy"
            decoding="async"
            className="rounded-xl w-32 h-32 sm:w-40 sm:h-40 object-cover shrink-0 border border-brand-border"
          />
          <div className="space-y-3 text-left">
            <h3 className="text-xl font-bold text-white">Quién Soy</h3>
            <p className="text-gray_text text-sm sm:text-base leading-relaxed">
              {PROFILE.bio}
            </p>
          </div>
        </div>

        {/* Languages Card with Proficiency Bars */}
        <div className="lg:col-span-5 rounded-2xl border border-brand-border bg-brand-surface p-6 flex flex-col justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-gold">
              {">"} Comunicación Internacional
            </span>
            <h3 className="text-xl font-bold text-white mt-1">Idiomas</h3>
          </div>
          <div className="space-y-4">
            {PROFILE.languages.map((lang) => (
              <div key={lang.name} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2 font-semibold text-white">
                    <img
                      src={lang.flag}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="w-5 h-5 rounded-full object-cover"
                    />
                    <span>{lang.name}</span>
                  </div>
                  <span className="text-gray_text text-xs">{lang.level}</span>
                </div>
                <div className="h-2 w-full rounded-full bg-brand-elevated overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gold transition-all duration-500"
                    style={{ width: `${lang.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Skills Matrix */}
      <div className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl font-bold text-white">
              Ecosistema de Tecnologías ({visibleSkills.length})
            </h3>
            <p className="text-xs sm:text-sm text-gray_text mt-1">
              Filtra las tecnologías según la especialidad o explora el stack
              completo.
            </p>
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filtrar tecnologías por especialidad"
          >
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={
                  "rounded-lg px-3 py-1.5 text-xs sm:text-sm font-semibold transition-colors " +
                  (activeCategory === cat.id
                    ? "bg-gold text-black"
                    : "border border-brand-border bg-brand-elevated text-gray_text hover:text-white")
                }
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((groupName) => {
            const items = visibleSkills.filter((s) => s.group === groupName);
            return (
              <div
                key={groupName}
                className="rounded-xl border border-brand-border bg-brand-bg/60 p-4 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-gold">
                    {groupName}
                  </h4>
                  <span className="text-xs font-mono text-gray_text">
                    {items.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Skill key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Banner>
  );
}

export default AboutMeBanner;
