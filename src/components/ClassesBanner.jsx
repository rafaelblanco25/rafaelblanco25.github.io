import { useState } from "react";
import Banner from "./Banner";
import CategoryIdentifier from "./CategoryIdentifier";
import { CLASSES_DATA, PROFILE } from "../data/profile";

function buildWhatsAppUrl(
  programTitle,
  modalityText,
  selectedModulesText,
  extraNote
) {
  const message =
    `Hola Rafael, vi tu página web y me interesa recibir información sobre tus clases.\n\n` +
    `• Área / Curso: ${programTitle}\n` +
    `• Modalidad: ${modalityText}\n` +
    (selectedModulesText ? `• Clases / Nivel de interés: ${selectedModulesText}\n` : "") +
    (extraNote ? `• Tema o detalle adicional: ${extraNote}\n` : "");

  const encoded = encodeURIComponent(message);
  if (PROFILE.whatsappNumber) {
    return `https://wa.me/${PROFILE.whatsappNumber}?text=${encoded}`;
  }
  return `https://api.whatsapp.com/send?text=${encoded}`;
}

function buildMailtoUrl(
  programTitle,
  modalityText,
  selectedModulesText,
  extraNote
) {
  const subject = encodeURIComponent(
    `Consulta de Clases (${modalityText}) — ${programTitle}`
  );
  const body = encodeURIComponent(
    `Hola Rafael,\n\nMe gustaría consultar disponibilidad y detalles para clases personalizadas:\n\n` +
      `- Área / Curso: ${programTitle}\n` +
      `- Modalidad preferida: ${modalityText}\n` +
      (selectedModulesText
        ? `- Clases / Nivel de interés: ${selectedModulesText}\n`
        : "") +
      (extraNote ? `- Tema o comentarios adicionales: ${extraNote}\n` : "") +
      `\n¡Muchas gracias!`
  );
  return `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
}

function ClassesBanner() {
  const [selectedModality, setSelectedModality] = useState("all");

  // Map: programId -> array of selected module IDs (or ["ALL"] for full course)
  const [selectedByProgram, setSelectedByProgram] = useState({
    "mat-bachillerato": [],
    "mat-preuniversitaria": ["ALL"],
    "hab-cuantitativa": ["ALL"],
    "intro-programacion": ["ALL"],
  });

  // Bottom quick-builder form state
  const [formProgramId, setFormProgramId] = useState(
    CLASSES_DATA.programs[0].id
  );
  const [formModality, setFormModality] = useState(
    "Presencial en Isla de Margarita"
  );
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
      return `Curso Completo (${program.modules.length} clases)`;
    }
    if (selectedIds.length === 0) {
      return program.allowFullCourse
        ? "Curso Completo o clases a convenir"
        : "Asesoría personalizada (1ero a 5to año)";
    }
    const labels = program.modules
      .filter((m) => selectedIds.includes(m.id))
      .map((m) => `${m.code} (${m.title.split("—")[0].split(":")[0].trim()})`);
    return labels.join(", ");
  };

  const filteredPrograms =
    selectedModality === "all"
      ? CLASSES_DATA.programs
      : CLASSES_DATA.programs.filter((prog) =>
          prog.modality.includes(selectedModality)
        );

  const selectedFormProgram =
    CLASSES_DATA.programs.find((p) => p.id === formProgramId) ||
    CLASSES_DATA.programs[0];

  return (
    <Banner id="classes">
      <CategoryIdentifier
        name="Academia, Cursos & Asesorías"
        description={CLASSES_DATA.title}
        subtitle={CLASSES_DATA.intro}
      />

      {/* Credential Banner (Grupo Escalera + USB) */}
      <div className="rounded-2xl border border-gold/40 bg-brand-surface p-5 sm:p-6 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/30 px-3 py-0.5 text-xs font-mono font-bold text-gold">
            <span>★ {CLASSES_DATA.credentialBanner.badge}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-white">
            {CLASSES_DATA.credentialBanner.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray_text leading-relaxed max-w-4xl">
            {CLASSES_DATA.credentialBanner.description}
          </p>
        </div>
        <a
          href="#reserva-rapida"
          className="shrink-0 rounded-xl bg-gold px-4 py-2.5 text-xs sm:text-sm font-bold text-black hover:bg-white transition-colors"
        >
          Armar mi plan de clases ↓
        </a>
      </div>

      {/* Modality Cards (Presencial en Isla de Margarita + Online) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        {CLASSES_DATA.modalities.map((mod) => {
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
                    1-a-1 · Grupos reducidos
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
            Catálogo de Cursos y Asesorías por Área
          </h3>
          <p className="text-xs sm:text-sm text-gray_text mt-0.5">
            Puedes hacer clic sobre las clases de cada tarjeta para solicitar el
            curso completo o únicamente los temas que necesites.
          </p>
        </div>
        <div
          className="inline-flex flex-wrap gap-2 rounded-xl border border-brand-border bg-brand-surface p-1.5"
          role="group"
          aria-label="Filtrar clases por modalidad"
        >
          {[
            { id: "all", label: "Todas las modalidades" },
            { id: "presencial", label: "📍 Presencial (Margarita)" },
            { id: "online", label: "💻 Online en Vivo" },
          ].map((tab) => (
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
            selectedModality === "presencial"
              ? "Presencial en Isla de Margarita"
              : selectedModality === "online"
              ? "Online en Vivo"
              : "Presencial en Margarita / Online";

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
                <span className="font-semibold text-white">Dirigido a: </span>
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
                      ✓ Curso Completo ({program.modules.length} clases)
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
                    Tu selección:{" "}
                  </span>
                  <span className="text-gold font-medium">{summaryText}</span>
                </p>

                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={buildWhatsAppUrl(
                      program.title,
                      activeModalityText,
                      summaryText
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-3.5 py-2.5 text-xs sm:text-sm font-bold text-black hover:bg-emerald-400 transition-colors"
                  >
                    <span>Solicitar por WhatsApp</span>
                  </a>
                  <a
                    href={buildMailtoUrl(
                      program.title,
                      activeModalityText,
                      summaryText
                    )}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-brand-border bg-brand-elevated px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:border-gold hover:text-gold transition-colors"
                  >
                    <span>Solicitar por Correo</span>
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
            {">"} Consulta Personalizada
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
            ¿Quieres inscribir un curso o agendar una asesoría de Bachillerato?
          </h3>
          <p className="text-sm text-gray_text mt-1">
            Indica el curso o año de bachillerato, tu modalidad preferida (Isla
            de Margarita u Online) y los temas que necesitas reforzar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <label className="flex flex-col gap-1.5 text-xs font-semibold text-gray_text">
            <span>Área o Curso</span>
            <select
              value={formProgramId}
              onChange={(e) => setFormProgramId(e.target.value)}
              className="rounded-xl border border-brand-border bg-brand-elevated px-3 py-2.5 text-sm text-white focus:border-gold focus:outline-none"
            >
              {CLASSES_DATA.programs.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1.5 text-xs font-semibold text-gray_text">
            <span>Modalidad Preferida</span>
            <select
              value={formModality}
              onChange={(e) => setFormModality(e.target.value)}
              className="rounded-xl border border-brand-border bg-brand-elevated px-3 py-2.5 text-sm text-white focus:border-gold focus:outline-none"
            >
              <option value="Presencial en Isla de Margarita">
                📍 Presencial en Isla de Margarita
              </option>
              <option value="Online en Vivo">💻 Online en Vivo</option>
              <option value="Híbrida (Presencial en Margarita + Online)">
                🔄 Híbrida (Margarita + Online)
              </option>
            </select>
          </label>
        </div>

        <label className="flex flex-col gap-1.5 text-xs font-semibold text-gray_text mb-5">
          <span>
            Tema del colegio, universidad a la que aspiras o clases que te
            interesan (opcional)
          </span>
          <input
            type="text"
            value={formNote}
            onChange={(e) => setFormNote(e.target.value)}
            placeholder="Ej. Mi hijo cursa 3er año y ve factorización / Me preparo para entrar a Ingeniería y quiero el curso completo..."
            className="rounded-xl border border-brand-border bg-brand-elevated px-3.5 py-2.5 text-sm text-white placeholder:text-gray_text/60 focus:border-gold focus:outline-none"
          />
        </label>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={buildWhatsAppUrl(
              selectedFormProgram.title,
              formModality,
              formatSelectionSummary(selectedFormProgram),
              formNote
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-black hover:bg-emerald-400 transition-colors"
          >
            <span>Enviar Consulta por WhatsApp</span>
          </a>
          <a
            href={buildMailtoUrl(
              selectedFormProgram.title,
              formModality,
              formatSelectionSummary(selectedFormProgram),
              formNote
            )}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-bold text-black hover:bg-white transition-colors"
          >
            <span>Enviar Consulta por Correo ({PROFILE.email})</span>
          </a>
        </div>
      </div>
    </Banner>
  );
}

export default ClassesBanner;
