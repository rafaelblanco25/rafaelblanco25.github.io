import profile from "../assets/profile.jpg";
import github from "../assets/contact/github.png";
import linkedin from "../assets/contact/linkedin.png";
import mail from "../assets/contact/mail.png";
import cv from "../assets/contact/cv.png";
import rb_cv from "../assets/cv/rb-cv-2025.pdf";

import venezuelan_flag from "../assets/countries/venezuela.png";
import eu_flag from "../assets/countries/eu.png";

import { Tooltip } from "@material-tailwind/react";
import Banner from "./Banner";

function IdBanner() {
  return (
    <Banner first={true}>
      {/* <div className="bg-gradient-to-r from-black to-gray px-6 lg:px-20 flex  sm:gap-4 md:gap-10 lg:gap-20 items-center justify-center w-full py-20 lg:py-32 border-b-2 border-gold"> */}
      <div className="my-auto">
        <p className="text-white font-sans text-lg"> Hello, My Name Is </p>
        <p className="text-white font-sans font-extrabold text-6xl py-4">
          Rafael Blanco
        </p>
        <div className="flex gap-2 flex-wrap">
          <p className="text-gold font-bold text-xl my-auto">{">"}</p>
          <p className="text-white my-auto text-lg">Data Scientist</p>
          <p className="text-gold font-bold text-xl my-auto">{"|"}</p>
          <p className="text-white my-auto text-lg">Computer Engineer</p>
          <p className="text-gold font-bold text-xl my-auto">{"|"}</p>
          <p className="text-white my-auto text-lg">Full Stack Web Developer</p>
          <p className="text-gold font-bold text-xl my-auto">{"|"}</p>
          <p className="text-white my-auto text-lg">Researcher</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <a href="mailto:rblancog25@gmail.com">
            <img src={mail} alt="mail" className="w-10 h-10 my-4 mx-2" />
          </a>
          <a href="https://github.com/rafaelblanco25" target="_blank">
            <img
              src={github}
              alt="github"
              className="w-10 h-10 my-4 mx-2 bg-white rounded-full"
            />
          </a>
          <a href="https://www.linkedin.com/in/rblancog25/" target="_blank">
            <img
              src={linkedin}
              alt="linkedin"
              className="w-10 h-10 my-4 mx-2"
            />
          </a>
          <a href={rb_cv} target="_blank">
            <img src={cv} alt="cv" className="w-10 h-10 my-4 mx-2" />
          </a>
        </div>
        <div className="flex gap-2">
          <Tooltip content="Venezuelan Citizen">
            <img
              src={venezuelan_flag}
              alt="venezuelan flag"
              className="w-10 h-10 my-4 mx-2"
            />
          </Tooltip>
          <Tooltip content="European Citizen">
            <img src={eu_flag} alt="eu flag" className="w-10 h-10 my-4 mx-2" />
          </Tooltip>
        </div>
      </div>
      <div className="my-auto">
        <img
          src={profile}
          alt="rafael"
          className="rounded-lg w-40 h-40 min-w-40 min-h-40 lg:w-72 lg:h-72 md:w-60 md:h-60 sm:w-40 sm:h-40"
        />
      </div>
      {/* </div> */}
    </Banner>
  );
}

export default IdBanner;
