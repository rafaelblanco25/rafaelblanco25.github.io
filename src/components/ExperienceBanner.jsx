import CategoryIdentifier from "./CategoryIdentifier";
import inria from "../assets/education/inria.png";
import ubisoft from "../assets/experience/ubisoft.png";

import Banner from "./Banner";

function ExperienceBanner() {
  const experienceData = [
    {
      company: "Inria",
      role: "Research Intern",
      year: "Mar. 2020 - Aug. 2020",
      location: "Paris, France",
      description: "Conducting research on situated visualizations.",
      logo: inria,
    },
    {
      company: "Ubisoft",
      role: "Research Intern",
      year: "Oct. 2022 - Dec. 2022",
      location: "Bordeaux, France",
      description: "Developing a algorithms for game development.",
      logo: ubisoft,
    },
  ];

  return (
    <Banner>
      <div className="w-full">
        <CategoryIdentifier
          name="Experience"
          description="Companies I Have Worked For"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {experienceData.map((exp, index) => (
            <ExperienceCard
              key={index}
              company={exp.company}
              role={exp.role}
              year={exp.year}
              location={exp.location}
              description={exp.description}
              logo={exp.logo}
            />
          ))}
        </div>
      </div>
    </Banner>
  );
}

function ExperienceCard({ company, role, year, location, description, logo }) {
  return (
    <div className="bg-black p-4 rounded-lg shadow-md flex flex-col border-2 border-gray relative gap-2">
      <img
        src={logo}
        alt={`${company} logo`}
        className="w-20 h-20  mx-auto rounded-full bg-white object-contain"
      />
      <h3 className="text-xl font-semibold text-white mx-auto">
        {company} - {location}
      </h3>
      <p className="text-white bg-bordeaux p-1 font-semibold rounded-md w-fit">
        {role}
      </p>
      {/* <p className="text-white">{year}</p> */}
      {/* <p className="text-white">{location}</p> */}
      <p className="text-white">{description}</p>
      <div className="flex flex-col gap-1 top-2 right-2 absolute">
        <p className="bg-gold text-black p-1 font-bold rounded-md">{year}</p>
      </div>
    </div>
  );
}

export default ExperienceBanner;
