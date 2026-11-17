import { NAV_LINKS, PROFILE } from "../data/profile";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-brand-surface text-gray_text border-t border-brand-border px-4 sm:px-8 md:px-12 lg:px-20 py-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <a
              href="#top"
              className="text-lg font-extrabold text-white hover:text-gold transition-colors"
            >
              <span className="text-gold font-mono">{"> "}</span>
              {PROFILE.name}
            </a>
            <p className="text-xs sm:text-sm text-gray_text max-w-md">
              Ingeniero en Computación · Científico de Datos · Desarrollador Web
              Full-Stack · Clases presenciales en Isla de Margarita y Online.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <p className="text-center sm:text-left">
            © {currentYear}{" "}
            <span className="text-white font-semibold">{PROFILE.name}</span>.
            Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 font-medium">
            {PROFILE.socialLinks.map((item) => (
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
            <a href="#top" className="text-gold font-semibold hover:underline">
              Volver arriba ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
