import Banner from "./Banner";
import { PROFILE } from "../data/profile";

function IdBanner() {
  return (
    <Banner first={true} id="top">
      <div className="flex flex-col gap-10 lg:gap-14">
        {/* Top Hero Row */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="flex-1 flex flex-col gap-5 text-left">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 w-fit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs sm:text-sm font-semibold text-emerald-300">
                {PROFILE.locationBadge}
              </span>
            </div>

            <div>
              <p className="text-gold font-mono font-semibold text-sm sm:text-base mb-1">
                {PROFILE.greeting}
              </p>
              <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
                {PROFILE.name}
              </h1>
              <p className="text-lg sm:text-xl font-bold text-white/90 mt-3 leading-snug">
                {PROFILE.headline}
              </p>
            </div>

            <p className="text-gray_text text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
              {PROFILE.subheadline}
            </p>

            {/* Roles Chips */}
            <div className="flex flex-wrap gap-2">
              {PROFILE.roles.map((role) => (
                <span
                  key={role}
                  className="rounded-lg border border-brand-border bg-brand-surface px-3 py-1 text-xs sm:text-sm font-medium text-white"
                >
                  <span className="text-gold font-mono mr-1.5">{">"}</span>
                  {role}
                </span>
              ))}
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#classes"
                className="inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm sm:text-base font-bold text-black shadow-lg shadow-gold/10 hover:bg-white transition-colors"
              >
                <span>Clases en Margarita y Online</span>
                <span aria-hidden="true">→</span>
              </a>
              <a
                href={PROFILE.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-brand-border bg-brand-surface px-5 py-3 text-sm sm:text-base font-semibold text-white hover:border-gold hover:text-gold transition-colors"
              >
                <span>Descargar CV (PDF)</span>
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-brand-border bg-brand-surface px-4 py-3 text-sm sm:text-base font-semibold text-gray_text hover:border-gold hover:text-white transition-colors"
              >
                <span>Contactar</span>
              </a>
            </div>

            {/* Social Icons & Citizenships */}
            <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-brand-border/80">
              <div className="flex items-center gap-3">
                {PROFILE.socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    aria-label={item.ariaLabel}
                    className="inline-flex items-center gap-2 rounded-lg border border-brand-border bg-brand-surface px-2.5 py-1.5 text-xs font-medium text-gray_text hover:border-gold hover:text-white transition-colors"
                  >
                    <img
                      src={item.icon}
                      alt=""
                      decoding="async"
                      className={
                        "w-5 h-5" +
                        (item.roundedBg ? " bg-white rounded-full p-0.5" : "")
                      }
                    />
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {PROFILE.citizenships.map((citizenship) => (
                  <div
                    key={citizenship.label}
                    className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-surface/70 px-3 py-1 text-xs text-gray_text"
                  >
                    <img
                      src={citizenship.flag}
                      alt=""
                      decoding="async"
                      className="w-4 h-4 rounded-full object-cover"
                    />
                    <span>{citizenship.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Portrait Card */}
          <div className="shrink-0">
            <div className="relative rounded-2xl border-2 border-brand-border bg-brand-surface p-2 shadow-2xl">
              <img
                src={PROFILE.heroImage}
                alt={`Retrato de ${PROFILE.name}`}
                decoding="async"
                className="rounded-xl w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover"
              />
              <div className="mt-2.5 flex items-center justify-between rounded-lg bg-brand-elevated px-3 py-2 text-xs">
                <span className="font-mono text-gold font-semibold">
                  M.Sc. & Ing. Computación
                </span>
                <span className="text-gray_text">USB · IP Paris · UPC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROFILE.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-brand-border bg-brand-surface p-5 flex flex-col justify-between gap-1 hover:border-gold/50 transition-colors"
            >
              <span className="font-mono text-2xl sm:text-3xl font-extrabold text-gold">
                {metric.value}
              </span>
              <h2 className="text-sm sm:text-base font-bold text-white mt-1">
                {metric.label}
              </h2>
              <p className="text-xs text-gray_text leading-relaxed">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Banner>
  );
}

export default IdBanner;
