import profileHero from "../assets/profile.webp";
import profileAbout from "../assets/profile-2.webp";
import rbCv from "../assets/cv/rb-cv-2025.pdf";

import githubIcon from "../assets/contact/github.webp";
import linkedinIcon from "../assets/contact/linkedin.webp";
import mailIcon from "../assets/contact/mail.webp";
import cvIcon from "../assets/contact/cv.webp";
import venezuelaFlag from "../assets/countries/venezuela.webp";
import euFlag from "../assets/countries/eu.webp";

import reactIcon from "../assets/atom.webp";
import cIcon from "../assets/c.svg.webp";
import csharpIcon from "../assets/c-sharp.webp";
import cppIcon from "../assets/c-.webp";
import cssIcon from "../assets/css.webp";
import excelIcon from "../assets/excel.webp";
import htmlIcon from "../assets/html-5.webp";
import javascriptIcon from "../assets/java-script.webp";
import pythonIcon from "../assets/python.webp";
import rIcon from "../assets/r.webp";
import jupyterIcon from "../assets/jupyter.svg.webp";
import numpyIcon from "../assets/numpy.webp";
import pandasIcon from "../assets/pandas.webp";
import tensorflowIcon from "../assets/tensor-flow.svg.webp";
import javaIcon from "../assets/java.webp";
import unityIcon from "../assets/unity.webp";
import awsIcon from "../assets/aws.webp";
import gitIcon from "../assets/git.webp";
import djangoIcon from "../assets/django.svg";
import dockerIcon from "../assets/docker.webp";
import kubernetesIcon from "../assets/kubernetes.svg.webp";
import psqlIcon from "../assets/psql.svg.webp";
import spanishIcon from "../assets/spain.webp";
import englishIcon from "../assets/usa.webp";
import frenchIcon from "../assets/france.webp";
import latexIcon from "../assets/latex.svg.webp";
import overleafIcon from "../assets/overleaf.webp";

import webServiceIcon from "../assets/services/web_icon.webp";
import dataServiceIcon from "../assets/services/data_icon.webp";
import mlServiceIcon from "../assets/services/ml_icon.webp";
import cloudServiceIcon from "../assets/services/cloud_icon.webp";
import researchServiceIcon from "../assets/services/research_icon.webp";
import consultingServiceIcon from "../assets/services/consulting_icon.webp";
import writingServiceIcon from "../assets/services/writing_icon.webp";
import teachingServiceIcon from "../assets/services/teaching_icon.webp";
import apiServiceIcon from "../assets/services/api_icon.webp";
import databaseServiceIcon from "../assets/services/database_icon.webp";
import learningServiceIcon from "../assets/services/learning_icon.webp";
import dataVisServiceIcon from "../assets/services/data_vis_icon.webp";

import inriaLogo from "../assets/education/inria.webp";
import ubisoftLogo from "../assets/experience/ubisoft.webp";
import usbLogo from "../assets/education/usb.svg.webp";
import tspLogo from "../assets/education/tsp.webp";
import ipLogo from "../assets/education/ip.svg.webp";
import upsLogo from "../assets/education/ups.svg.webp";
import upcLogo from "../assets/education/upc.webp";
import clipeLogo from "../assets/education/clipe.webp";

import courseraLogo from "../assets/courses/coursera.svg.webp";
import dlaiLogo from "../assets/courses/dlai.webp";
import ibmLogo from "../assets/courses/ibm.webp";

import cp1Image from "../assets/research/cp-1.webp";
import cp2Image from "../assets/research/cp-2.webp";
import virtualCrowdsImage from "../assets/research/virtual-crowds-survey.webp";
import crowdSimulationImage from "../assets/research/crowd-simulation.webp";
import linkPaperIcon from "../assets/research/links/paper.webp";
import linkInfoIcon from "../assets/research/links/information.webp";

export const PROFILE = {
  name: "Rafael Blanco",
  greeting: "Hello, my name is",
  roles: [
    "Data Scientist",
    "Computer Engineer",
    "Full-Stack Web Developer",
    "Researcher",
  ],
  bio: "I am a passionate computer engineer with a strong background in data science and full-stack web development. I love solving complex problems and creating innovative solutions that make a difference.",
  heroImage: profileHero,
  aboutImage: profileAbout,
  email: "rblancog25@gmail.com",
  cvUrl: rbCv,
  socialLinks: [
    {
      label: "Email",
      ariaLabel: "Send email to Rafael Blanco",
      href: "mailto:rblancog25@gmail.com",
      icon: mailIcon,
      external: false,
      roundedBg: false,
    },
    {
      label: "GitHub",
      ariaLabel: "Rafael Blanco on GitHub",
      href: "https://github.com/rafaelblanco25",
      icon: githubIcon,
      external: true,
      roundedBg: true,
    },
    {
      label: "LinkedIn",
      ariaLabel: "Rafael Blanco on LinkedIn",
      href: "https://www.linkedin.com/in/rblancog25/",
      icon: linkedinIcon,
      external: true,
      roundedBg: false,
    },
    {
      label: "CV",
      ariaLabel: "View Rafael Blanco CV (PDF)",
      href: rbCv,
      icon: cvIcon,
      external: true,
      roundedBg: false,
    },
  ],
  citizenships: [
    { label: "Venezuelan Citizen", flag: venezuelaFlag },
    { label: "European Citizen", flag: euFlag },
  ],
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Courses", href: "#courses" },
  { label: "Research", href: "#research" },
];

export const SKILL_TABS = [
  {
    value: "data-scientist",
    label: "Data Scientist",
    groups: [
      {
        names: ["Python", "Pandas", "NumPy", "TensorFlow", "Jupyter Notebook"],
        icons: [pythonIcon, pandasIcon, numpyIcon, tensorflowIcon, jupyterIcon],
      },
      { names: ["Excel"], icons: [excelIcon] },
      { names: ["R"], icons: [rIcon] },
    ],
  },
  {
    value: "computer-engineer",
    label: "Computer Engineer",
    groups: [
      {
        names: ["Python", "Java", "C", "C++", "C#"],
        icons: [pythonIcon, javaIcon, cIcon, cppIcon, csharpIcon],
      },
      { names: ["Git"], icons: [gitIcon] },
      { names: ["Docker", "Kubernetes"], icons: [dockerIcon, kubernetesIcon] },
      {
        names: ["HTML", "CSS", "JavaScript", "React"],
        icons: [htmlIcon, cssIcon, javascriptIcon, reactIcon],
      },
      { names: ["PostgreSQL"], icons: [psqlIcon] },
      { names: ["Unity3D"], icons: [unityIcon] },
      { names: ["AWS"], icons: [awsIcon] },
    ],
  },
  {
    value: "full-stack-web-developer",
    label: "Full-Stack Web Developer",
    groups: [
      {
        names: ["HTML", "CSS", "JavaScript"],
        icons: [htmlIcon, cssIcon, javascriptIcon],
      },
      { names: ["PostgreSQL"], icons: [psqlIcon] },
      { names: ["React"], icons: [reactIcon] },
      { names: ["Python", "Django"], icons: [pythonIcon, djangoIcon] },
      { names: ["Git"], icons: [gitIcon] },
      { names: ["Docker", "Kubernetes"], icons: [dockerIcon, kubernetesIcon] },
      { names: ["AWS"], icons: [awsIcon] },
    ],
  },
  {
    value: "researcher",
    label: "Researcher",
    groups: [
      { names: ["LaTeX", "Overleaf"], icons: [latexIcon, overleafIcon] },
      {
        names: [
          "English - Full professional proficiency",
          "Spanish - Native",
          "French - Beginner",
        ],
        icons: [englishIcon, spanishIcon, frenchIcon],
      },
    ],
  },
];

export const SERVICES = [
  {
    name: "Data Analysis",
    description:
      "Analyzing data to extract meaningful insights and support decision-making.",
    icon: dataServiceIcon,
  },
  {
    name: "Data Visualization",
    description:
      "Creating visual representations of data to communicate insights effectively.",
    icon: dataVisServiceIcon,
  },
  {
    name: "Web Development",
    description:
      "Building responsive and interactive web applications using modern technologies.",
    icon: webServiceIcon,
  },
  {
    name: "API Development",
    description:
      "Building and integrating APIs for seamless communication between applications.",
    icon: apiServiceIcon,
  },
  {
    name: "Database Management",
    description:
      "Designing and managing databases for efficient data storage and retrieval.",
    icon: databaseServiceIcon,
  },
  {
    name: "Machine Learning",
    description:
      "Developing predictive models and algorithms to solve complex problems.",
    icon: mlServiceIcon,
  },
  {
    name: "Cloud Computing",
    description:
      "Leveraging cloud platforms to build scalable and efficient applications.",
    icon: cloudServiceIcon,
  },
  {
    name: "Research",
    description:
      "Conducting research to advance knowledge in computer science and engineering.",
    icon: researchServiceIcon,
  },
  {
    name: "Consulting",
    description:
      "Providing expert advice and solutions to help businesses succeed.",
    icon: consultingServiceIcon,
  },
  {
    name: "Technical Writing",
    description:
      "Creating clear and concise documentation for technical audiences.",
    icon: writingServiceIcon,
  },
  {
    name: "Teaching",
    description:
      "Sharing knowledge and expertise through teaching and mentoring.",
    icon: teachingServiceIcon,
  },
  {
    name: "Learning new languages, technologies and required skills",
    description:
      "Exploring new programming languages and paradigms to enhance skills. Staying updated with the latest trends and technologies in the field. Acquiring necessary skills for specific projects or roles.",
    icon: learningServiceIcon,
  },
];

export const EXPERIENCE = [
  {
    company: "Ubisoft",
    role: "Research Intern",
    year: "Oct. 2022 - Dec. 2022",
    location: "Bordeaux, France",
    description: "Developing algorithms for game development.",
    highlights: [],
    logo: ubisoftLogo,
  },
  {
    company: "Inria (AVIZ, Ember Project)",
    role: "Research Intern",
    year: "Mar. 2020 - Aug. 2020",
    location: "Gif-sur-Yvette, France",
    description:
      "Conducted research on situated visualizations and how digital traces can support users in everyday activities.",
    highlights: [
      "Structured literature review and design space for situated visualizations of digital traces.",
      "Designed an embedded AR data representation to display nutritional facts on dishes.",
      "Implemented and evaluated calorie/nutrient logging using Computer Vision and Pointing interaction.",
    ],
    logo: inriaLogo,
  },
];

export const EDUCATION = [
  {
    institution: "Simón Bolívar University",
    location: "Caracas, Venezuela",
    degree: "Bachelor in Computer Science (Double Degree) — GPA 4.3/5.0",
    year: "2013 - 2020",
    logos: [{ name: "Simón Bolívar University", src: usbLogo }],
  },
  {
    institution: "Télécom SudParis - Institut Polytechnique de Paris",
    location: "Évry / Paris, France",
    degree:
      "M.Sc. in Computer Science for Communication Networks (Double Degree) — GPA 4.4/5.0",
    year: "2018 - 2020",
    logos: [
      { name: "Télécom SudParis", src: tspLogo },
      { name: "Institut Polytechnique de Paris", src: ipLogo },
      { name: "Université Paris-Saclay", src: upsLogo },
      { name: "Inria", src: inriaLogo },
    ],
  },
  {
    institution: "Polytechnic University of Catalonia",
    location: "Barcelona, Spain",
    degree: "2 Years of the CLIPE PhD Program in Computer Science",
    year: "2020 - 2023",
    logos: [
      { name: "Polytechnic University of Catalonia", src: upcLogo },
      { name: "CLIPE Project", src: clipeLogo },
    ],
  },
];

export const COURSES = [
  {
    name: "DeepLearning.AI TensorFlow Developer Professional Certificate",
    institution: "Coursera",
    icons: [
      { name: "Coursera", icon: courseraLogo },
      { name: "DeepLearning.AI", icon: dlaiLogo },
    ],
    link: "https://www.coursera.org/professional-certificates/tensorflow-in-practice",
    date: "Jul. 2020",
    skills: [
      "Deep Learning",
      "TensorFlow",
      "Forecasting",
      "Natural Language Processing",
      "Computer Vision",
      "Artificial Neural Networks",
      "Machine Learning",
    ],
  },
  {
    name: "IBM Data Science Professional Certificate",
    institution: "Coursera",
    icons: [
      { name: "Coursera", icon: courseraLogo },
      { name: "IBM", icon: ibmLogo },
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
    name: "Deep Learning Specialization",
    institution: "Coursera",
    icons: [
      { name: "Coursera", icon: courseraLogo },
      { name: "DeepLearning.AI", icon: dlaiLogo },
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
    name: "Interactive Information Visualization",
    institution: "Université Paris-Sud",
    icons: [{ name: "Université Paris-Saclay / Paris-Sud", icon: upsLogo }],
    link: null,
    date: "Feb. 2019",
    skills: ["Data Visualization", "P5.js", "JavaScript"],
  },
];

export const RESEARCH = [
  {
    image: crowdSimulationImage,
    type: "Paper",
    journal: "Scientific Reports",
    title:
      "Simulating real-life scenarios to better understand the spread of diseases under different contexts",
    description: "",
    year: 2024,
    links: [
      {
        label: "Paper",
        icon: linkPaperIcon,
        link: "https://www.nature.com/articles/s41598-024-52903-w",
      },
    ],
    technologies: ["Unity3D", "C#", "Python"],
  },
  {
    image: virtualCrowdsImage,
    type: "State of the Art",
    journal: "Computer Graphics Forum (CGF)",
    title: "Authoring Virtual Crowds: A Survey",
    description: "",
    year: 2022,
    links: [
      {
        label: "Paper",
        icon: linkPaperIcon,
        link: "https://onlinelibrary.wiley.com/doi/abs/10.1111/cgf.14506",
      },
    ],
    technologies: [],
  },
  {
    image: cp2Image,
    type: "Paper",
    journal: "IEEE Transactions on Visualization and Computer Graphics (TVCG)",
    title:
      "Do You Believe Your (Social Media) Data? A Personal Story on Location Data Biases, Errors, and Plausibility as Well as Their Visualization",
    description: "",
    year: 2022,
    links: [
      {
        label: "Paper",
        icon: linkPaperIcon,
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
      "OpenLayers",
    ],
  },
  {
    image: cp1Image,
    type: "Poster",
    journal: "IEEE Conference on Visualization (IEEE VIS 2019)",
    title:
      "Exploring carnivorous plant habitats based on images from social media",
    description: "",
    year: 2019,
    links: [
      {
        label: "Paper",
        icon: linkPaperIcon,
        link: "https://inria.hal.science/hal-02196764/",
      },
      {
        label: "Poster info",
        icon: linkInfoIcon,
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
      "OpenLayers",
    ],
  },
];
