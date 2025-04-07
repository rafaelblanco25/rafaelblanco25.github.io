import CategoryIdentifier from "./CategoryIdentifier";
import usb from "../assets/education/usb.svg.png";
import tsp from "../assets/education/tsp.jpeg";
import ip from "../assets/education/ip.svg.png";
import ups from "../assets/education/ups.svg.png";
import inria from "../assets/education/inria.png";
import upc from "../assets/education/upc.png";
import clipe from "../assets/education/clipe.jpeg";

import { Tooltip } from "@material-tailwind/react";

import Banner from "./Banner";

function EducationBanner() {
  const educationData = [
    {
      institution: "Simón Bolívar University",
      location: "Caracas, Venezuela",
      degree: "Bachelor in Computer Science (Double Degree)",
      year: 2020,
      logos: [{ name: "Simón Bolívar University", src: usb }],
    },
    {
      institution: "Télécom SudParis - Institute Polytechnique de Paris",
      location: "Paris, France",
      degree:
        "Master of Science in Computer Science for Telecommunication Networks (Double Degree)",
      year: 2020,
      logos: [
        { name: "Télécom SudParis", src: tsp },
        { name: "Institute Polytechnique de Paris", src: ip },
        { name: "Université Paris-Saclay", src: ups },
        { name: "Inria", src: inria },
      ],
    },
    {
      institution: "Polytechnic University of Catalonia",
      location: "Barcelona, Spain",
      degree: "Unfinished PhD in Computer Science",
      year: 2023,
      logos: [
        { name: "Polytechnic University of Catalonia", src: upc },
        { name: "CLIPE Project", src: clipe },
      ],
    },
  ];
  return (
    <Banner>
      <div className="w-full">
        <CategoryIdentifier
          name="Education"
          description="Academic Background And Qualifications"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {educationData.map((edu, index) => (
            <EducationCard
              key={index}
              institution={edu.institution}
              location={edu.location}
              degree={edu.degree}
              year={edu.year}
              logos={edu.logos}
            />
          ))}
        </div>
      </div>
    </Banner>
  );
}

function LogoList({ logos }) {
  return (
    <div className="flex -space-x-2 items-center justify-center mb-4">
      {logos.map((logo, index) => (
        <Tooltip key={index} content={logo.name}>
          <div className="bg-white rounded-full p-2 border-2 border-black hover:scale-105 transition-transform duration-300">
            <img
              key={index}
              src={logo.src}
              alt={logo.name}
              className="h-16 w-16 rounded-full object-contain"
            />
          </div>
        </Tooltip>
      ))}
    </div>
  );
}

function EducationCard({ institution, location, degree, year, logos }) {
  return (
    <div className="bg-black shadow-md rounded-lg p-4 border-2 border-gray text-white flex flex-col gap-1 relative h-fit my-auto">
      <LogoList logos={logos} />
      <h3 className="text-lg font-semibold text-center">{institution}</h3>
      <p className="text-center">{location}</p>
      <p className="text-gray_text mt-2">{degree}</p>
      <p className="absolute top-2 right-2 bg-gold text-black p-1 font-bold rounded-md">
        {year}
      </p>
    </div>
  );
}

export default EducationBanner;
