import { useEffect, useState } from "react";
import { Collapse, IconButton, Navbar } from "@material-tailwind/react";
import { NAV_LINKS, PROFILE } from "../data/profile";

export function NavBar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {NAV_LINKS.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            onClick={() => setOpenNav(false)}
            className="block py-1 text-sm font-semibold text-gray_text hover:text-gold transition-colors duration-200"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <Navbar
      aria-label="Primary navigation"
      className="sticky top-0 z-50 h-max max-w-full rounded-none border-0 border-b border-gray bg-black/95 px-4 py-3 text-white backdrop-blur-md lg:px-12"
    >
      <div className="flex items-center justify-between">
        <a
          href="#top"
          className="text-lg font-extrabold tracking-tight text-white hover:text-gold transition-colors"
        >
          <span className="text-gold">{"> "}</span>
          {PROFILE.name}
        </a>
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">{navList}</div>
          <a
            href={PROFILE.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-block rounded-md bg-gold px-3 py-1.5 text-sm font-bold text-black hover:bg-white transition-colors"
          >
            CV
          </a>
          <IconButton
            variant="text"
            aria-label={openNav ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={openNav}
            className="ml-auto h-6 w-6 text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav((prev) => !prev)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
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
                className="h-6 w-6"
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
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <div className="pt-2">
          {navList}
          <a
            href={PROFILE.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpenNav(false)}
            className="mt-2 inline-block w-full rounded-md bg-gold px-3 py-2 text-center text-sm font-bold text-black hover:bg-white transition-colors"
          >
            View CV (PDF)
          </a>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;
