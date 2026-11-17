import { Fragment } from "react";
import Banner from "./Banner";
import { PROFILE } from "../data/profile";

function IdBanner() {
  return (
    <Banner first={true} id="top">
      <div className="my-auto flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <div>
            <p className="text-gray_text font-sans text-base sm:text-lg">
              {PROFILE.greeting}
            </p>
            <h1 className="text-white font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl py-2">
              {PROFILE.name}
            </h1>
          </div>
          <img
            src={PROFILE.heroImage}
            alt={`${PROFILE.name} portrait`}
            decoding="async"
            className="rounded-lg w-28 h-28 sm:w-36 sm:h-36 shrink-0 object-cover md:hidden"
          />
        </div>

        <div className="flex gap-2 flex-wrap items-center">
          <span className="text-gold font-bold text-xl" aria-hidden="true">
            {">"}
          </span>
          {PROFILE.roles.map((role, index) => (
            <Fragment key={role}>
              {index > 0 && (
                <span className="text-gold font-bold text-xl" aria-hidden="true">
                  |
                </span>
              )}
              <p className="text-white text-base sm:text-lg">{role}</p>
            </Fragment>
          ))}
        </div>

        <div className="flex gap-4 flex-wrap items-center my-2">
          {PROFILE.socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              aria-label={item.ariaLabel}
              className="hover:scale-110 transition-transform duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold rounded-full"
            >
              <img
                src={item.icon}
                alt=""
                decoding="async"
                className={
                  "w-10 h-10" + (item.roundedBg ? " bg-white rounded-full" : "")
                }
              />
            </a>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-1">
          {PROFILE.citizenships.map((citizenship) => (
            <div
              key={citizenship.label}
              className="inline-flex items-center gap-2 rounded-full border border-gray px-3 py-1 text-xs sm:text-sm text-gray_text"
            >
              <img
                src={citizenship.flag}
                alt=""
                decoding="async"
                className="w-5 h-5 rounded-full object-cover"
              />
              <span>{citizenship.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="my-auto shrink-0">
        <img
          src={PROFILE.heroImage}
          alt={`${PROFILE.name} portrait`}
          decoding="async"
          className="rounded-lg md:w-60 md:h-60 lg:w-72 lg:h-72 object-cover hidden md:block"
        />
      </div>
    </Banner>
  );
}

export default IdBanner;
