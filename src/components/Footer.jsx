import { useApp } from "../context/AppContext";

function Footer() {
  const { t, view, navigateTo } = useApp();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-brand-surface text-gray_text border-t border-brand-border px-4 sm:px-8 md:px-12 lg:px-20 py-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("portfolio");
              }}
              className="text-lg font-extrabold text-white hover:text-gold transition-colors"
            >
              <span className="text-gold font-mono">{"> "}</span>
              {t.profile.name}
            </a>
            <p className="text-xs sm:text-sm text-gray_text max-w-md">
              {t.footer.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-medium">
            {view === "portfolio" ? (
              <>
                {t.nav.portfolioLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="/clases"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("classes");
                  }}
                  className="text-gold font-semibold hover:underline"
                >
                  🎓 {t.nav.switchToClasses}
                </a>
              </>
            ) : (
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("portfolio");
                }}
                className="text-gold font-semibold hover:underline"
              >
                {t.nav.switchToPortfolio}
              </a>
            )}
          </div>
        </div>

        <div className="pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <p className="text-center sm:text-left">
            © {currentYear}{" "}
            <span className="text-white font-semibold">{t.profile.name}</span>.{" "}
            {t.footer.rights}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 font-medium">
            {t.profile.socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="hover:text-gold transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gold font-semibold hover:underline"
            >
              {t.footer.backToTop}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
