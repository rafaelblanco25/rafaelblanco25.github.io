import CategoryIdentifier from "./CategoryIdentifier";
import cp1 from "../assets/research/cp-1.jpeg";
import cp2 from "../assets/research/cp-2.jpeg";
import virtual_crowds from "../assets/research/virtual-crowds-survey.jpeg";
import crowd_simulation from "../assets/research/crowd-simulation.png";
import link_paper from "../assets/research/links/paper.png";
import link_info from "../assets/research/links/information.png";

import Banner from "./Banner";

function ResearchBanner() {
  const researchData = [
    {
      image: cp1,
      type: "Poster",
      journal: "IEEE Conference on Visualization (IEEE VIS 2019)",
      title:
        "Exploring carnivorous plant habitats based on images from social media",
      description: "",
      year: 2019,
      links: [
        {
          icon: link_paper,
          link: "https://inria.hal.science/hal-02196764/",
        },
        {
          icon: link_info,
          link: "https://ieeevis.org/year/2019/info/posters",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "Flask",
        "Google Maps API",
        "OpenLayer",
      ],
    },
    {
      image: cp2,
      type: "Paper",
      journal:
        "IEEE Transactions on Visualization and Computer Graphics (TVCG)",
      title:
        "Do You Believe Your (Social Media) Data? A Personal Story on Location Data Biases, Errors, and Plausibility as Well as Their Visualization",
      description: "",
      year: 2022,
      links: [
        {
          icon: link_paper,
          link: "https://ieeexplore.ieee.org/abstract/document/9676662",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "Flask",
        "Google Maps API",
        "OpenLayer",
      ],
    },
    {
      image: virtual_crowds,
      type: "State of the Art",
      journal: "Computer Graphics Forum (CGF)",
      title: "Authoring Virtual Crowds: A Survey",
      description: "",
      year: 2022,
      links: [
        {
          icon: link_paper,
          link: "https://onlinelibrary.wiley.com/doi/abs/10.1111/cgf.14506",
        },
      ],
      technologies: [],
    },
    {
      image: crowd_simulation,
      type: "Paper",
      journal: "Scientific Reports",
      title:
        "Simulating real-life scenarios to better understand the spread of diseases under different contexts",
      description: "",
      year: 2024,
      links: [
        {
          icon: link_paper,
          link: "https://www.nature.com/articles/s41598-024-52903-w",
        },
      ],
      technologies: ["Unity3D", "C#", "Python"],
    },
  ];

  return (
    <Banner>
      <div className="w-full">
        <CategoryIdentifier
          name="Research"
          description="Scientific Publications"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white">
          {researchData.reverse().map((research, index) => (
            <div
              key={index}
              className="bg-black shadow-md rounded-lg p-4 border-2 border-gray flex flex-col gap-1 relative"
            >
              <img
                src={research.image}
                alt={research.title}
                className="h-64 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold">{research.title}</h3>
              <p className="text-sm text-gray_text">
                {research.type} - {research.journal}
              </p>
              <p className="text-sm">{research.description}</p>
              <div className="flex gap-2 mt-2 absolute bottom-2 right-2">
                {research.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={link.icon} alt="Link" className="h-8 w-8" />
                  </a>
                ))}
              </div>
              <p className="absolute top-2 right-2 bg-gold text-black p-1 font-bold rounded-md">
                {research.year}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {research.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gold text-black text-xs font-semibold px-2 py-1 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Banner>
  );
}

export default ResearchBanner;
