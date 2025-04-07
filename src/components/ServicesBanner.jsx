import CategoryIdentifier from "./CategoryIdentifier";
import web_icon from "../assets/services/web_icon.png";
import data_icon from "../assets/services/data_icon.png";
import ml_icon from "../assets/services/ml_icon.png";
import cloud_icon from "../assets/services/cloud_icon.png";
import research_icon from "../assets/services/research_icon.png";
import consulting_icon from "../assets/services/consulting_icon.png";
import writing_icon from "../assets/services/writing_icon.png";
import teaching_icon from "../assets/services/teaching_icon.png";
import api_icon from "../assets/services/api_icon.png";
import database_icon from "../assets/services/database_icon.png";
import learning_icon from "../assets/services/learning_icon.png";
import data_vis_icon from "../assets/services/data_vis_icon.png";

import Banner from "./Banner";

function ServicesBanner() {
  const services = [
    {
      name: "Data Analysis",
      description:
        "Analyzing data to extract meaningful insights and support decision-making.",
      icon: data_icon,
    },
    {
      name: "Data Visualization",
      description:
        "Creating visual representations of data to communicate insights effectively.",
      icon: data_vis_icon,
    },
    {
      name: "Web Development",
      description:
        "Building responsive and interactive web applications using modern technologies.",
      icon: web_icon,
    },
    {
      name: "API Development",
      description:
        "Building and integrating APIs for seamless communication between applications.",
      icon: api_icon,
    },
    {
      name: "Database Management",
      description:
        "Designing and managing databases for efficient data storage and retrieval.",
      icon: database_icon,
    },
    {
      name: "Machine Learning",
      description:
        "Developing predictive models and algorithms to solve complex problems.",
      icon: ml_icon,
    },
    {
      name: "Cloud Computing",
      description:
        "Leveraging cloud platforms to build scalable and efficient applications.",
      icon: cloud_icon,
    },
    {
      name: "Research",
      description:
        "Conducting research to advance knowledge in computer science and engineering.",
      icon: research_icon,
    },
    {
      name: "Consulting",
      description:
        "Providing expert advice and solutions to help businesses succeed.",
      icon: consulting_icon,
    },
    {
      name: "Technical Writing",
      description:
        "Creating clear and concise documentation for technical audiences.",
      icon: writing_icon,
    },
    {
      name: "Teaching",
      description:
        "Sharing knowledge and expertise through teaching and mentoring.",
      icon: teaching_icon,
    },
    {
      name: "Learning new languages, technologies and required skills",
      description:
        "Exploring new programming languages and paradigms to enhance skills. Staying updated with the latest trends and technologies in the field. Acquiring necessary skills for specific projects or roles.",
      icon: learning_icon,
    },
  ];
  return (
    <Banner>
      <div className="w-full">
        <CategoryIdentifier name="Services" description="What Can I Do" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </Banner>
  );
}

function ServiceCard({ service }) {
  return (
    <div className="bg-black rounded-lg shadow-lg p-4 border border-gray lg:hover:scale-105 lg:hover:border-gold lg:transition-transform lg:duration-300 h-fit my-auto">
      <img
        src={service.icon}
        alt={service.name}
        className="h-20 w-20 mx-auto bg-white rounded-full p-1 mb-4"
      />
      <div className="w-fit mb-4 mx-auto">
        <h3 className="lg:text-xl md:text-lg font-bold text-white sm:text-base text-center">
          {service.name}
        </h3>
      </div>
      <p className="text-gray_text sm:text-xs md:text-sm lg:text-base">
        {service.description}
      </p>
    </div>
  );
}

export default ServicesBanner;
