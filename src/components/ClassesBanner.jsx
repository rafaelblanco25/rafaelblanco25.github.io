import { useState } from "react";
import Banner from "./Banner";
import CategoryIdentifier from "./CategoryIdentifier";
import { CLASSES_DATA, PROFILE } from "../data/profile";

function buildWhatsAppUrl(programTitle, modalityText, levelText, extraNote) {
  const message =
    `Hola Rafael, vi tu página web y me interesa recibir información sobre tus clases.\n\n` +
    `• Programa / Tema: ${programTitle}\n` +
    `• Modalidad: ${modalityText}\n` +
    (levelText ? `• Nivel actual: ${levelText}\n` : "") +
    (extraNote ? `• Detalles: ${extraNote}\n` : "");

  const encoded = encodeURIComponent(message);
  if (PROFILE.whatsappNumber) {
    return `https://wa.me/${PROFILE.whatsappNumber}?text=${encoded}`;
  }
  return `https://api.whatsapp.com/send?text=${encoded}`;
}

function buildMailtoUrl(programTitle, modalityText, levelText, extraNote) {
  const subject = encodeURIComponent(
    `Consulta de Clases (${modalityText}) — ${programTitle}`
  );
  const body = encodeURIComponent(
    `Hola Rafael,\n\nMe gustaría consultar disponibilidad y tarifas para clases personalizadas:\n\n` +
      `- Programa / Tema: ${programTitle}\n` +
      `- Modalidad preferida: ${modalityText}\n` +
      (levelText ? `- Nivel actual: ${levelText}\n` : "") +
      (extraNote ? `- Comentarios adicionales: ${extraNote}\n` : "") +
      `\n¡Gracias!`
  );
  return `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
}

function ClassesBanner() {
  const [selectedModality, setSelectedModality] = useState("all");
  const [formProgram, setFormProgram] = useState(CLASSES_DATA.programs[0].title);
  const [formModality, setFormModality] = useState(
    "Presencial en Isla de Margarita"
  );
  const [formLevel, setFormLevel] = useState("Principiante / Desde cero");
  const [formNote, setFormNote] = useState("");

  const filteredPrograms =
    selectedModality === "all"
      ? CLASSES_DATA.programs
      : CLASSES_DATA.programs.filter((prog) =>
          prog.modality.includes(selectedModality)
        );

  return (
    <Banner id="classes">
      <CategoryIdentifier
        name="Academia & Mentorías"
        description={CLASSES_DATA.title}
        subtitle={CLASSES_DATA.intro}
      />

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

              <ul className="space-y-1.5 pt-2 border-t border-brand-border">
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
        <h3 className="text-lg sm:text-xl font-bold text-white">
          Áreas de Enseñanza y Programas
        </h3>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {filteredPrograms.map((program) => {
          const activeModalityText =
            selectedModality === "presencial"
              ? "Presencial en Isla de Margarita"
              : selectedModality === "online"
              ? "Online en Vivo"
              : "Presencial en Margarita / Online";

          return (
            <article
              key={program.id}
              className="rounded-2xl border border-brand-border bg-brand-surface p-6 flex flex-col gap-4 hover:border-gold/60 transition-colors"
            >
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="rounded-md bg-bordeaux px-2.5 py-1 text-xs font-semibold text-white">
                  {program.category}
                </span>
                <span className="font-mono text-xs text-gold font-semibold">
                  {program.modalityLabel}
                </span>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  {program.title}
                </h4>
                <p className="text-xs font-mono text-gray_text mt-1">
                  Nivel: {program.level}
                </p>
              </div>

              <p className="text-sm text-gray_text leading-relaxed">
                {program.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {program.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-md border border-brand-border bg-brand-elevated px-2.5 py-1 text-xs font-medium text-white"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-brand-border flex flex-wrap items-center gap-2.5">
                <a
                  href={buildWhatsAppUrl(program.title, activeModalityText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-3.5 py-2.5 text-xs sm:text-sm font-bold text-black hover:bg-emerald-400 transition-colors"
                >
                  <span>Consultar por WhatsApp</span>
                </a>
                <a
                  href={buildMailtoUrl(program.title, activeModalityText)}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-brand-border bg-brand-elevated px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:border-gold hover:text-gold transition-colors"
                >
                  <span>Consultar por Correo</span>
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {/* Interactive Booking / Inquiry Builder */}
      <div className="rounded-2xl border border-gold/40 bg-brand-surface p-6 sm:p-8">
        <div className="max-w-3xl mb-6">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold">
            {">"} Reserva o Consulta Rápida
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
            ¿Buscas una clase a tu medida en Margarita u Online?
          </h3>
          <p className="text-sm text-gray_text mt-1">
            Selecciona el área, la modalidad y tu nivel actual para generar tu
            consulta directa por WhatsApp o correo electrónico.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <label className="flex flex-col gap-1.5 text-xs font-semibold text-gray_text">
            <span>Programa o Materia</span>
            <select
              value={formProgram}
              onChange={(e) => setFormProgram(e.target.value)}
              className="rounded-xl border border-brand-border bg-brand-elevated px-3 py-2.5 text-sm text-white focus:border-gold focus:outline-none"
            >
              {CLASSES_DATA.programs.map((p) => (
                <option key={p.id} value={p.title}>
                  {p.title}
                </option>
              ))}
              <option value="Tutoría personalizada / Otra materia de Computación">
                Tutoría personalizada / Otra materia
              </option>
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

          <label className="flex flex-col gap-1.5 text-xs font-semibold text-gray_text">
            <span>Nivel o Objetivo</span>
            <select
              value={formLevel}
              onChange={(e) => setFormLevel(e.target.value)}
              className="rounded-xl border border-brand-border bg-brand-elevated px-3 py-2.5 text-sm text-white focus:border-gold focus:outline-none"
            >
              <option value="Principiante / Desde cero">
                Principiante / Desde cero
              </option>
              <option value="Universitario / Nivelación de materia">
                Universitario / Nivelación
              </option>
              <option value="Tesis / Proyecto o Trabajo de Grado">
                Tesis / Proyecto académico
              </option>
              <option value="Profesional / Especialización técnica">
                Profesional / Especialización
              </option>
            </select>
          </label>
        </div>

        <label className="flex flex-col gap-1.5 text-xs font-semibold text-gray_text mb-5">
          <span>Objetivo o duda específica (opcional)</span>
          <input
            type="text"
            value={formNote}
            onChange={(e) => setFormNote(e.target.value)}
            placeholder="Ej. Necesito preparar un examen de Python / Quiero aprender Ciencia de Datos desde cero en Porlamar..."
            className="rounded-xl border border-brand-border bg-brand-elevated px-3.5 py-2.5 text-sm text-white placeholder:text-gray_text/60 focus:border-gold focus:outline-none"
          />
        </label>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={buildWhatsAppUrl(
              formProgram,
              formModality,
              formLevel,
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
              formProgram,
              formModality,
              formLevel,
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
