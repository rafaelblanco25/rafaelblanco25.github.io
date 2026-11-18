import { useState } from "react";
import Banner from "./Banner";
import CategoryIdentifier from "./CategoryIdentifier";
import { useApp } from "../context/AppContext";

function buildWhatsAppUrl(
  labels,
  whatsappNumber,
  programTitle,
  modalityText,
  selectedModulesText,
  extraNote
) {
  const message =
    `${labels.waIntro}\n\n` +
    `• ${labels.waCourse}: ${programTitle}\n` +
    `• ${labels.waModality}: ${modalityText}\n` +
    (selectedModulesText
      ? `• ${labels.waSelection}: ${selectedModulesText}\n`
      : "") +
    (extraNote ? `• ${labels.waNote}: ${extraNote}\n` : "");

  const encoded = encodeURIComponent(message);
  if (whatsappNumber) {
    return `https://wa.me/${whatsappNumber}?text=${encoded}`;
  }
  return `https://api.whatsapp.com/send?text=${encoded}`;
}

function buildMailtoUrl(
  labels,
  email,
  programTitle,
  modalityText,
  selectedModulesText,
  extraNote
) {
  const subject = encodeURIComponent(
    `${labels.mailSubjectPrefix} (${modalityText}) — ${programTitle}`
  );
  const body = encodeURIComponent(
    `${labels.mailGreeting}\n\n` +
      `- ${labels.waCourse}: ${programTitle}\n` +
      `- ${labels.waModality}: ${modalityText}\n` +
      (selectedModulesText
        ? `- ${labels.waSelection}: ${selectedModulesText}\n`
        : "") +
      (extraNote ? `- ${labels.waNote}: ${extraNote}\n` : "") +
      `\n${labels.mailClosing}`
  );
  return `mailto:${email}?subject=${subject}&body=${body}`;
}

function ClassesBanner() {
  const { t, navigateTo } = useApp();
  const c = t.classesSection;
  const p = t.profile;
  const L = c.labels;

  const [selectedModality, setSelectedModality] = useState("all");

  const [selectedByProgram, setSelectedByProgram] = useState({
    "mat-bachillerato": [],
    "mat-preuniversitaria": ["ALL"],
    "hab-cuantitativa": ["ALL"],
    "intro-programacion": ["ALL"],
  });

  const [formProgramId, setFormProgramId] = useState(c.programs[0].id);
  const [formModalityIdx, setFormModalityIdx] = useState(0);
  const [formNote, setFormNote] = useState("");

  const toggleModule = (program, modId) => {
    setSelectedByProgram((prev) => {
      const current = prev[program.id] || [];
      if (modId === "ALL") {
        return { ...prev, [program.id]: ["ALL"] };
      }
      const withoutAll = current.filter((id) => id !== "ALL");
      const exists = withoutAll.includes(modId);
      const next = exists
        ? withoutAll.filter((id) => id !== modId)
        : [...withoutAll, modId];
      return {
        ...prev,
        [program.id]:
          next.length === 0 && program.allowFullCourse ? ["ALL"] : next,
      };
    });
  };

  const formatSelectionSummary = (program) => {
    const selectedIds = selectedByProgram[program.id] || [];
    if (selectedIds.includes("ALL")) {
      return L.fullCourseSummary(program.modules.length);
    }
    if (selectedIds.length === 0) {
      return program.allowFullCourse
        ? L.defaultOpenSummary
        : L.defaultTutoringSummary;
    }
    const labels = program.modules
      .filter((m) => selectedIds.includes(m.id))
      .map((m) => `${m.code} (${m.title.split("—")[0].split(":")[0].trim()})`);
    return labels.join(", ");
  };

  const filteredPrograms =
    selectedModality === "all"
      ? c.programs
      : c.programs.filter((prog) => prog.modality.includes(selectedModality));

  const selectedFormProgram =
    c.programs.find((prog) => prog.id === formProgramId) || c.programs[0];

  const selectedFormModalityText =
    L.modalityOptions[formModalityIdx]?.value || L.modalityOptions[0].value;

  return (
    <Banner first={true} id="classes">
      <div className="mb-6">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigateTo("portfolio");
          }}
          className="inline-flex items-center gap-2 rounded-lg border border-brand-border bg-brand-surface px-3.5 py-2 text-xs sm:text-sm font-semibold text-gray_text hover:border-gold hover:text-white transition-colors"
        >
          <span>{c.backToPortfolioLabel}</span>
        </a>
      </div>

      <CategoryIdentifier
        name={c.tag}
        description={c.title}
        subtitle={c.intro}
      />

      {/* Credential Banner (Grupo Escalera + USB) */}
      <div className="rounded-2xl border border-gold/40 bg-brand-surface p-5 sm:p-6 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/30 px-3 py-0.5 text-xs font-mono font-bold text-gold">
            <span>★ {c.credentialBanner.badge}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-white">
            {c.credentialBanner.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray_text leading-relaxed max-w-4xl">
            {c.credentialBanner.description}
          </p>
        </div>
        <a
          href="#reserva-rapida"
          className="shrink-0 rounded-xl bg-gold px-4 py-2.5 text-xs sm:text-sm font-bold text-black hover:bg-white transition-colors"
        >
          {c.credentialBanner.ctaButton}
        </a>
      </div>

      {/* Modality Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        {c.modalities.map((mod) => {
          const isPresencial = mod.id === "presencial";
          return (
            <div
              key={mod.id}
              className={
                "rounded-2xl border p-6 flex flex-col justify-between gap-4 transition-colors " +
                (isPresencial
                  ? "border-gold/50 bg-brand-surface"
                  : "border-brand-border bg-brand-surface")
              }
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span
                    className={
                      "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold " +
                      (isPresencial
                        ? "bg-gold text-black"
                        : "bg-bordeaux text-white")
                    }
                  >
                    {mod.badge}
                  </span>
                  <span className="text-xs font-mono text-gray_text">
                    {c.modalityGroupRatio}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{mod.title}</h3>
                <p className="text-sm text-gray_text leading-relaxed">
                  {mod.description}
                </p>
              </div>

              <ul className="space-y-1.5 pt-3 border-t border-brand-border">
                {mod.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xs sm:text-sm text-white/90"
                  >
                    <span className="text-gold font-bold" aria-hidden="true">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            {c.catalogTitle}
          </h3>
          <p className="text-xs sm:text-sm text-gray_text mt-0.5">
            {c.catalogSubtitle}
          </p>
        </div>
        <div
          className="inline-flex flex-wrap gap-2 rounded-xl border border-brand-border bg-brand-surface p-1.5"
          role="group"
          aria-label={c.catalogTitle}
        >
          {c.filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedModality(tab.id)}
              className={
                "rounded-lg px-3 py-1.5 text-xs sm:text-sm font-semibold transition-colors " +
                (selectedModality === tab.id
                  ? "bg-gold text-black"
                  : "text-gray_text hover:text-white")
              }
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Program Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {filteredPrograms.map((program) => {
          const activeModalityText =
            c.modalityActiveText[selectedModality] || c.modalityActiveText.all;

          const currentSelection = selectedByProgram[program.id] || [];
          const isFullCourse = currentSelection.includes("ALL");
          const summaryText = formatSelectionSummary(program);

          return (
            <article
              key={program.id}
              className="rounded-2xl border border-brand-border bg-brand-surface p-6 flex flex-col gap-4 hover:border-gold/60 transition-colors"
            >
              {/* Top Badges */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="rounded-md bg-bordeaux px-2.5 py-1 text-xs font-semibold text-white">
                  {program.category}
                </span>
                <span className="rounded-md border border-gold/30 bg-gold/10 px-2.5 py-1 font-mono text-xs text-gold font-semibold">
                  {program.formatType}
                </span>
              </div>

              {/* Title & Audience */}
              <div>
                <h4 className="text-xl font-bold text-white">
                  {program.title}
                </h4>
                <p className="text-xs font-mono text-gold mt-1">
                  {program.level} · {program.modalityLabel}
                </p>
              </div>

              <p className="text-sm text-gray_text leading-relaxed">
                {program.description}
              </p>

              <div className="rounded-xl border border-brand-border bg-brand-bg/60 p-3 text-xs text-gray_text">
                <span className="font-semibold text-white">
                  {L.targetAudience}
                </span>
                {program.targetAudience}
              </div>

              {/* Interactive Syllabus / Class Selector */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <p className="text-xs font-semibold text-white">
                    {program.selectionHint}
                  </p>
                  {program.allowFullCourse && (
                    <button
                      type="button"
                      onClick={() => toggleModule(program, "ALL")}
                      className={
                        "rounded-lg px-2.5 py-1 text-xs font-mono font-bold transition-colors " +
                        (isFullCourse
                          ? "bg-gold text-black"
                          : "border border-brand-border bg-brand-elevated text-gray_text hover:text-white")
                      }
                    >
                      {L.fullCourseButton(program.modules.length)}
                    </button>
                  )}
                </div>

                <div className="space-y-1.5 max-h-72 overflow-y-auto pr-1">
                  {program.modules.map((mod) => {
                    const isSelected =
                      isFullCourse || currentSelection.includes(mod.id);
                    return (
                      <button
                        key={mod.id}
                        type="button"
                        onClick={() => toggleModule(program, mod.id)}
                        className={
                          "w-full text-left rounded-xl border px-3 py-2 text-xs transition-colors flex items-start gap-2.5 " +
                          (isSelected
                            ? "border-gold/60 bg-brand-elevated text-white"
                            : "border-brand-border bg-brand-bg/40 text-gray_text hover:border-brand-border hover:text-white")
                        }
                      >
                        <span
                          className={
                            "mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border text-[10px] font-bold " +
                            (isSelected
                              ? "border-gold bg-gold text-black"
                              : "border-gray text-transparent")
                          }
                          aria-hidden="true"
                        >
                          ✓
                        </span>
                        <div className="flex-1">
                          <span className="font-mono font-bold text-gold mr-1.5">
                            {mod.code}:
                          </span>
                          <span>{mod.title}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Selection Summary & CTAs */}
              <div className="mt-auto pt-4 border-t border-brand-border space-y-3">
                <p className="text-xs text-gray_text">
                  <span className="font-semibold text-white">
                    {L.yourSelection}
                  </span>
                  <span className="text-gold font-medium">{summaryText}</span>
                </p>

                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={buildWhatsAppUrl(
                      L,
                      p.whatsappNumber,
                      program.title,
                      activeModalityText,
                      summaryText
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-3.5 py-2.5 text-xs sm:text-sm font-bold text-black hover:bg-emerald-400 transition-colors"
                  >
                    <span>{L.whatsappBtn}</span>
                  </a>
                  <a
                    href={buildMailtoUrl(
                      L,
                      p.email,
                      program.title,
                      activeModalityText,
                      summaryText
                    )}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-brand-border bg-brand-elevated px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:border-gold hover:text-gold transition-colors"
                  >
                    <span>{L.emailBtn}</span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Interactive Booking / Inquiry Builder */}
      <div
        id="reserva-rapida"
        className="rounded-2xl border border-gold/40 bg-brand-surface p-6 sm:p-8 scroll-mt-24"
      >
        <div className="max-w-3xl mb-6">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold">
            {">"} {L.quickInquiryTag}
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
            {L.quickInquiryTitle}
          </h3>
          <p className="text-sm text-gray_text mt-1">{L.quickInquirySubtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <label className="flex flex-col gap-1.5 text-xs font-semibold text-gray_text">
            <span>{L.courseFieldLabel}</span>
            <select
              value={formProgramId}
              onChange={(e) => setFormProgramId(e.target.value)}
              className="rounded-xl border border-brand-border bg-brand-elevated px-3 py-2.5 text-sm text-white focus:border-gold focus:outline-none"
            >
              {c.programs.map((prog) => (
                <option key={prog.id} value={prog.id}>
                  {prog.title}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1.5 text-xs font-semibold text-gray_text">
            <span>{L.modalityFieldLabel}</span>
            <select
              value={formModalityIdx}
              onChange={(e) => setFormModalityIdx(Number(e.target.value))}
              className="rounded-xl border border-brand-border bg-brand-elevated px-3 py-2.5 text-sm text-white focus:border-gold focus:outline-none"
            >
              {L.modalityOptions.map((opt, idx) => (
                <option key={opt.value} value={idx}>
                  {opt.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="flex flex-col gap-1.5 text-xs font-semibold text-gray_text mb-5">
          <span>{L.noteFieldLabel}</span>
          <input
            type="text"
            value={formNote}
            onChange={(e) => setFormNote(e.target.value)}
            placeholder={L.notePlaceholder}
            className="rounded-xl border border-brand-border bg-brand-elevated px-3.5 py-2.5 text-sm text-white placeholder:text-gray_text/60 focus:border-gold focus:outline-none"
          />
        </label>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={buildWhatsAppUrl(
              L,
              p.whatsappNumber,
              selectedFormProgram.title,
              selectedFormModalityText,
              formatSelectionSummary(selectedFormProgram),
              formNote
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-black hover:bg-emerald-400 transition-colors"
          >
            <span>{L.sendWhatsappBtn}</span>
          </a>
          <a
            href={buildMailtoUrl(
              L,
              p.email,
              selectedFormProgram.title,
              selectedFormModalityText,
              formatSelectionSummary(selectedFormProgram),
              formNote
            )}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-bold text-black hover:bg-white transition-colors"
          >
            <span>{L.sendEmailBtn(p.email)}</span>
          </a>
        </div>
      </div>
    </Banner>
  );
}

export default ClassesBanner;
