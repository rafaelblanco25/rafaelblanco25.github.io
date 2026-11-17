import { useEffect, useState } from "react";
import { NAV_LINKS, PROFILE } from "../data/profile";

export function NavBar() {
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

  return (
    <nav
      aria-label="Navegación principal"
      className="sticky top-0 z-50 w-full border-b border-brand-border bg-brand-bg/90 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-3.5 flex items-center justify-between gap-4">
        <a
          href="#top"
          className="text-lg font-extrabold tracking-tight text-white hover:text-gold transition-colors flex items-center gap-1.5"
        >
          <span className="text-gold font-mono">{">"}</span>
          <span>{PROFILE.name}</span>
        </a>

        <ul className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={
                  item.highlight
                    ? "inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-bold text-gold hover:bg-gold hover:text-black transition-colors"
                    : "text-sm font-medium text-gray_text hover:text-white transition-colors"
                }
              >
                {item.highlight && (
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                    aria-hidden="true"
                  />
                )}
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <a
            href="#classes"
            className="hidden sm:inline-flex items-center rounded-lg bg-gold px-3.5 py-1.5 text-xs sm:text-sm font-bold text-black hover:bg-white transition-colors"
          >
            Reservar Clase
          </a>
          <a
            href={PROFILE.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center rounded-lg border border-brand-border bg-brand-surface px-3 py-1.5 text-xs sm:text-sm font-semibold text-white hover:border-gold hover:text-gold transition-colors"
          >
            CV (PDF)
          </a>
          <button
            type="button"
            aria-label={openNav ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={openNav}
            onClick={() => setOpenNav((prev) => !prev)}
            className="inline-flex lg:hidden items-center justify-center rounded-lg border border-brand-border bg-brand-surface p-2 text-white hover:border-gold"
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
        <div className="lg:hidden border-t border-brand-border bg-brand-surface px-4 py-4 space-y-3">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpenNav(false)}
                  className={
                    "block rounded-lg px-3 py-2 text-sm font-semibold transition-colors " +
                    (item.highlight
                      ? "bg-gold/15 text-gold border border-gold/30"
                      : "text-gray_text hover:bg-brand-elevated hover:text-white")
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-brand-border">
            <a
              href="#classes"
              onClick={() => setOpenNav(false)}
              className="w-full rounded-lg bg-gold px-4 py-2.5 text-center text-sm font-bold text-black hover:bg-white transition-colors"
            >
              Reservar Clase (Margarita / Online)
            </a>
            <a
              href={PROFILE.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpenNav(false)}
              className="w-full rounded-lg border border-brand-border bg-brand-elevated px-4 py-2.5 text-center text-sm font-semibold text-white hover:border-gold transition-colors"
            >
              Ver CV (PDF)
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
