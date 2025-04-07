import coursera from "../assets/courses/coursera.svg.png";
import deep_learning from "../assets/courses/dlai.png";
import ibm from "../assets/courses/ibm.png";
import link_icon from "../assets/courses/link.png";

import Banner from "./Banner";
import CategoryIdentifier from "./CategoryIdentifier";

import { Tooltip } from "@material-tailwind/react";

function CoursesBanner() {
  const courses = [
    {
      name: "Deep Learning Specialization",
      institution: "Coursera",
      icons: [
        { name: "Coursera", icon: coursera },
        { name: "DeepLearning.AI", icon: deep_learning },
      ],
      link: "https://www.coursera.org/specializations/deep-learning",
      date: "Apr. 2020",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Artificial Neural Networks",
        "Python",
      ],
    },
    {
      name: "IBM Data Science Professional Certificate",
      institution: "Coursera",
      icons: [
        { name: "Coursera", icon: coursera },
        { name: "IBM", icon: ibm },
      ],
      link: "https://www.coursera.org/professional-certificates/ibm-data-science",
      date: "May 2020",
      skills: [
        "Python",
        "Data Science",
        "R",
        "Data Analysis",
        "Machine Learning",
        "Big Data",
        "Algorithms",
        "SQL",
      ],
    },
    {
      name: "DeepLearning.AI TensorFlow Developer Professional Certificate",
      institution: "Coursera",
      icons: [
        { name: "Coursera", icon: coursera },
        { name: "DeepLearning.AI", icon: deep_learning },
      ],
      link: "https://www.coursera.org/professional-certificates/tensorflow-in-practice",
      date: "Jul. 2020",
      skills: [
        "DeepLearning",
        "TensorFlow",
        "Forecasting",
        "Natural Language Processing",
        "Computer Vision",
        "Artificial Neural Networks",
        "Machine Learning",
      ],
    },
  ];
  return (
    <Banner>
      <div className="w-full">
        <CategoryIdentifier
          name="Courses"
          description="Courses And Certifications"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.reverse().map((course, index) => (
            <CourseCard
              key={index}
              name={course.name}
              institution={course.institution}
              icons={course.icons}
              link={course.link}
              date={course.date}
              skills={course.skills}
            />
          ))}
        </div>
      </div>
    </Banner>
  );
}
export default CoursesBanner;

function CourseCard({ name, institution, icons, link, date, skills }) {
  return (
    <div className="bg-black rounded-lg p-4 shadow-lg border-2 border-gray text-white flex flex-col gap-2 relative h-fit my-auto">
      <LogoList logos={icons} />
      <h3 className="text-white text-xl font-bold mx-auto text-center">
        {name}
      </h3>
      <p className="text-white bg-coursera p-1 font-semibold rounded-md w-fit">
        {institution}
      </p>
      <p className="absolute top-2 right-2 bg-gold text-black p-1 font-bold rounded-md">
        {date}
      </p>
      <a href={link} target="_blank" className="absolute top-12 right-2">
        <Tooltip content="Link to Course">
          <img
            src={link_icon}
            alt="Link"
            className="h-8 w-8 hover:scale-105 transition-transform duration-300 bg-white rounded-full"
          />
        </Tooltip>
      </a>
      <div className="flex flex-wrap gap-2 mt-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gold text-black text-xs font-semibold px-2 py-1 rounded-lg"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
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
              src={logo.icon}
              alt={logo.name}
              className="h-16 w-16 rounded-full object-contain"
            />
          </div>
        </Tooltip>
      ))}
    </div>
  );
}
