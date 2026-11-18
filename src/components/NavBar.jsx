import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";

export function NavBar() {
  const { lang, setLang, view, navigateTo, t, assets } = useApp();
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleBrandClick = (e) => {
    e.preventDefault();
    setOpenNav(false);
    navigateTo("portfolio");
  };

  const handleSwitchView = (e, targetView) => {
    e.preventDefault();
    setOpenNav(false);
    navigateTo(targetView);
  };

  return (
    <nav
      aria-label="Primary navigation"
      className="sticky top-0 z-50 w-full border-b border-brand-border bg-brand-bg/90 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-3.5 flex items-center justify-between gap-3">
        <a
          href="/"
          onClick={handleBrandClick}
          className="text-lg font-extrabold tracking-tight text-white hover:text-gold transition-colors flex items-center gap-1.5 shrink-0"
        >
          <span className="text-gold font-mono">{">"}</span>
          <span>{t.profile.name}</span>
        </a>

        {view === "portfolio" ? (
          <ul className="hidden xl:flex items-center gap-5">
            {t.nav.portfolioLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-gray_text hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="hidden md:flex items-center">
            <a
              href="/"
              onClick={(e) => handleSwitchView(e, "portfolio")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-brand-border bg-brand-surface px-3 py-1.5 text-xs sm:text-sm font-semibold text-gray_text hover:border-gold hover:text-white transition-colors"
            >
              <span>{t.nav.switchToPortfolio}</span>
            </a>
          </div>
        )}

        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Language Switcher Pill (EN / ES with flags) */}
          <div
            className="inline-flex items-center rounded-lg border border-brand-border bg-brand-surface p-0.5"
            role="group"
            aria-label="Language selector"
          >
            <button
              type="button"
              onClick={() => setLang("en")}
              className={
                "inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-mono font-bold transition-colors " +
                (lang === "en"
                  ? "bg-gold text-black"
                  : "text-gray_text hover:text-white")
              }
              title="English"
            >
              <img
                src={assets.englishIcon}
                alt=""
                className="w-3.5 h-3.5 rounded-full object-cover"
              />
              <span>EN</span>
            </button>
            <button
              type="button"
              onClick={() => setLang("es")}
              className={
                "inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-mono font-bold transition-colors " +
                (lang === "es"
                  ? "bg-gold text-black"
                  : "text-gray_text hover:text-white")
              }
              title="Español"
            >
              <img
                src={assets.spanishIcon}
                alt=""
                className="w-3.5 h-3.5 rounded-full object-cover"
              />
              <span>ES</span>
            </button>
          </div>

          {view === "portfolio" ? (
            <>
              <a
                href="/clases"
                onClick={(e) => handleSwitchView(e, "classes")}
                className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-gold/40 bg-gold/10 px-3 py-1.5 text-xs sm:text-sm font-bold text-gold hover:bg-gold hover:text-black transition-colors"
              >
                <span aria-hidden="true">🎓</span>
                <span>{t.nav.switchToClasses}</span>
              </a>
              <a
                href={t.profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center rounded-lg bg-gold px-3 py-1.5 text-xs sm:text-sm font-bold text-black hover:bg-white transition-colors"
              >
                {t.nav.cvButton}
              </a>
            </>
          ) : (
            <a
              href="#reserva-rapida"
              className="hidden sm:inline-flex items-center rounded-lg bg-gold px-3.5 py-1.5 text-xs sm:text-sm font-bold text-black hover:bg-white transition-colors"
            >
              {t.nav.bookClassButton}
            </a>
          )}

          <button
            type="button"
            aria-label={
              openNav ? t.nav.closeMenuLabel : t.nav.openMenuLabel
            }
            aria-expanded={openNav}
            onClick={() => setOpenNav((prev) => !prev)}
            className="inline-flex xl:hidden items-center justify-center rounded-lg border border-brand-border bg-brand-surface p-2 text-white hover:border-gold"
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {openNav && (
        <div className="xl:hidden border-t border-brand-border bg-brand-surface px-4 py-4 space-y-3">
          {view === "portfolio" ? (
            <>
              <ul className="flex flex-col gap-1.5">
                {t.nav.portfolioLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpenNav(false)}
                      className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray_text hover:bg-brand-elevated hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-brand-border">
                <a
                  href="/clases"
                  onClick={(e) => handleSwitchView(e, "classes")}
                  className="w-full rounded-lg border border-gold/40 bg-gold/15 px-4 py-2.5 text-center text-sm font-bold text-gold hover:bg-gold hover:text-black transition-colors"
                >
                  🎓 {t.nav.switchToClasses}
                </a>
                <a
                  href={t.profile.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpenNav(false)}
                  className="w-full rounded-lg bg-gold px-4 py-2.5 text-center text-sm font-bold text-black hover:bg-white transition-colors"
                >
                  {t.nav.cvButton}
                </a>
              </div>
            </>
          ) : (
            <div className="flex flex-col gap-2">
              <a
                href="/"
                onClick={(e) => handleSwitchView(e, "portfolio")}
                className="w-full rounded-lg border border-brand-border bg-brand-elevated px-4 py-2.5 text-center text-sm font-semibold text-white hover:border-gold transition-colors"
              >
                {t.nav.switchToPortfolio}
              </a>
              <a
                href="#reserva-rapida"
                onClick={() => setOpenNav(false)}
                className="w-full rounded-lg bg-gold px-4 py-2.5 text-center text-sm font-bold text-black hover:bg-white transition-colors"
              >
                {t.nav.bookClassButton}
              </a>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default NavBar;
