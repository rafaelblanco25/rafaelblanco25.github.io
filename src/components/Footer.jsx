import { PROFILE } from "../data/profile";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-gray_text border-t-2 border-gray px-4 sm:px-10 md:px-20 lg:px-32 py-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center sm:text-left">
          © {currentYear}{" "}
          <span className="text-white font-semibold">{PROFILE.name}</span>. All
          rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
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
          <a href="#top" className="text-gold hover:underline">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
