import { useState } from "react";
import Skill from "./Skill";
import CategoryIdentifier from "./CategoryIdentifier";
import Banner from "./Banner";
import { useApp } from "../context/AppContext";

function AboutMeBanner() {
  const { t } = useApp();
  const p = t.profile;
  const s = t.aboutSection;

  const [activeCategory, setActiveCategory] = useState("all");

  const visibleSkills =
    activeCategory === "all"
      ? s.skills
      : s.skills.filter((skill) => skill.roles.includes(activeCategory));

  const groupKeys = Array.from(new Set(visibleSkills.map((sk) => sk.groupKey)));

  return (
    <Banner id="about">
      <CategoryIdentifier name={s.tag} description={s.title} />

      {/* Bio + Languages Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
        {/* Bio Card */}
        <div className="lg:col-span-7 rounded-2xl border border-brand-border bg-brand-surface p-6 flex flex-col sm:flex-row items-center gap-6">
          <img
            src={p.aboutImage}
            alt={p.name}
            loading="lazy"
            decoding="async"
            className="rounded-xl w-32 h-32 sm:w-40 sm:h-40 object-cover shrink-0 border border-brand-border"
          />
          <div className="space-y-3 text-left">
            <h3 className="text-xl font-bold text-white">{p.bioTitle}</h3>
            <p className="text-gray_text text-sm sm:text-base leading-relaxed">
              {p.bio}
            </p>
          </div>
        </div>

        {/* Languages Card with Proficiency Bars */}
        <div className="lg:col-span-5 rounded-2xl border border-brand-border bg-brand-surface p-6 flex flex-col justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-gold">
              {">"} {p.languagesTag}
            </span>
            <h3 className="text-xl font-bold text-white mt-1">
              {p.languagesTitle}
            </h3>
          </div>
          <div className="space-y-4">
            {p.languages.map((lang) => (
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
              {s.ecosystemTitle} ({visibleSkills.length})
            </h3>
            <p className="text-xs sm:text-sm text-gray_text mt-1">
              {s.ecosystemSubtitle}
            </p>
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label={s.ecosystemTitle}
          >
            {s.categories.map((cat) => (
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
          {groupKeys.map((gKey) => {
            const items = visibleSkills.filter((sk) => sk.groupKey === gKey);
            return (
              <div
                key={gKey}
                className="rounded-xl border border-brand-border bg-brand-bg/60 p-4 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-gold">
                    {s.groupNames[gKey]}
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
