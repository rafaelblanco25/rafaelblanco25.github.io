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
  greeting: "Hola, soy",
  headline:
    "Ingeniero en Computación, Científico de Datos, Desarrollador Full-Stack e Investigador",
  subheadline:
    "Formación franco-venezolana (USB + Télécom SudParis / IP Paris) y experiencia en investigación en Inria (Francia), UPC (España) y Ubisoft. Desarrollo soluciones tecnológicas basadas en datos e imparto formación personalizada presencial en la Isla de Margarita y online.",
  roles: [
    "Científico de Datos",
    "Ingeniero en Computación",
    "Desarrollador Web Full-Stack",
    "Investigador & Profesor",
  ],
  bio: "Soy Ingeniero en Computación con sólida trayectoria en Ciencia de Datos, Inteligencia Artificial, Desarrollo Web Full-Stack e Investigación Científica en centros europeos. Me apasiona resolver problemas complejos mediante código limpio y modelos analíticos, así como formar a estudiantes y profesionales a través de mentorías prácticas y clases personalizadas.",
  heroImage: profileHero,
  aboutImage: profileAbout,
  email: "rblancog25@gmail.com",
  whatsappNumber: "",
  locationBadge: "Isla de Margarita, Venezuela (Presencial) & Online Global",
  cvUrl: rbCv,
  metrics: [
    {
      value: "4",
      label: "Publicaciones Científicas",
      detail: "Nature Scientific Reports, IEEE TVCG, CGF & IEEE VIS",
    },
    {
      value: "Doble Título",
      label: "Ingeniería & Maestría M.Sc.",
      detail: "USB (Venezuela) + Télécom SudParis / IP Paris (Francia)",
    },
    {
      value: "I+D Europa",
      label: "Experiencia Internacional",
      detail: "Inria (París), UPC (Barcelona) & Ubisoft (Bordeaux)",
    },
    {
      value: "Presencial & Online",
      label: "Clases y Mentorías",
      detail: "Isla de Margarita (1-a-1 / Grupos) y Remoto en Vivo",
    },
  ],
  socialLinks: [
    {
      label: "Correo",
      ariaLabel: "Enviar correo electrónico a Rafael Blanco",
      href: "mailto:rblancog25@gmail.com",
      icon: mailIcon,
      external: false,
      roundedBg: false,
    },
    {
      label: "GitHub",
      ariaLabel: "Perfil de GitHub de Rafael Blanco",
      href: "https://github.com/rafaelblanco25",
      icon: githubIcon,
      external: true,
      roundedBg: true,
    },
    {
      label: "LinkedIn",
      ariaLabel: "Perfil de LinkedIn de Rafael Blanco",
      href: "https://www.linkedin.com/in/rblancog25/",
      icon: linkedinIcon,
      external: true,
      roundedBg: false,
    },
    {
      label: "CV (PDF)",
      ariaLabel: "Ver CV de Rafael Blanco en PDF",
      href: rbCv,
      icon: cvIcon,
      external: true,
      roundedBg: false,
    },
  ],
  citizenships: [
    { label: "Ciudadano Venezolano", flag: venezuelaFlag },
    { label: "Ciudadano Europeo", flag: euFlag },
  ],
  languages: [
    {
      name: "Español",
      level: "Nativo",
      percent: 100,
      flag: spanishIcon,
    },
    {
      name: "Inglés",
      level: "Competencia Profesional Completa (C1/C2)",
      percent: 90,
      flag: englishIcon,
    },
    {
      name: "Francés",
      level: "Principiante / Básico (A2)",
      percent: 30,
      flag: frenchIcon,
    },
  ],
};

export const NAV_LINKS = [
  { label: "Clases & Cursos", href: "#classes", highlight: true },
  { label: "Sobre Mí & Skills", href: "#about" },
  { label: "Servicios", href: "#services" },
  { label: "Experiencia", href: "#experience" },
  { label: "Educación", href: "#education" },
  { label: "Publicaciones", href: "#research" },
  { label: "Certificaciones", href: "#courses" },
];

export const CLASSES_DATA = {
  title: "Clases Presenciales en Isla de Margarita y Online",
  subtitle: "Formación Personalizada, Nivelación Universitaria y Mentorías Técnicas",
  intro:
    "Aprende directamente con un Ingeniero e Investigador con experiencia en universidades y centros de I+D europeos. Clases adaptadas a tu nivel — desde iniciación hasta nivel universitario y profesional.",
  modalities: [
    {
      id: "presencial",
      badge: "📍 Isla de Margarita",
      title: "Modalidad Presencial (Isla de Margarita)",
      description:
        "Sesiones individuales (1-a-1) o en grupos reducidos en la Isla de Margarita. Ideal para seguimiento cercano, práctica guiada paso a paso y formación para estudiantes o profesionales locales.",
      highlights: [
        "Atención personalizada 1-a-1 o grupos pequeños",
        "Horarios flexibles adaptados a tu disponibilidad",
        "Práctica directa en tu equipo con ejercicios reales",
      ],
    },
    {
      id: "online",
      badge: "💻 Online en Vivo",
      title: "Modalidad Online (Cualquier país)",
      description:
        "Clases interactivas en vivo por videollamada con pantalla compartida, pizarra digital, repositorio de código de cada sesión y acompañamiento continuo.",
      highlights: [
        "100% en vivo (sin videos pregrabados genéricos)",
        "Material práctico, notebooks y código descargable",
        "Asesoría para proyectos, pruebas técnicas y tesis",
      ],
    },
  ],
  programs: [
    {
      id: "prog-fundamentos",
      category: "Programación & Algoritmos",
      title: "Programación desde Cero hasta Nivel Universitario",
      modality: ["presencial", "online"],
      modalityLabel: "Presencial en Margarita / Online",
      level: "Principiante · Intermedio · Universitario",
      description:
        "Domina la lógica de programación, estructuras de datos, programación orientada a objetos y resolución de problemas algorítmicos con bases sólidas de ingeniería.",
      topics: ["Python", "C / C++", "C# / Java", "Estructuras de Datos", "Algoritmos", "Git"],
    },
    {
      id: "data-ai",
      category: "Ciencia de Datos & IA",
      title: "Data Science, Machine Learning y Análisis de Datos",
      modality: ["presencial", "online"],
      modalityLabel: "Presencial en Margarita / Online",
      level: "Intermedio · Universitario · Profesional",
      description:
        "Aprende a limpiar, analizar, visualizar y modelar datos reales. Desde análisis con Excel, SQL y Python hasta modelos predictivos y redes neuronales.",
      topics: [
        "Python (Pandas, NumPy)",
        "Scikit-learn",
        "TensorFlow / Keras",
        "SQL & R",
        "Visualización de Datos",
        "Excel Analítico",
      ],
    },
    {
      id: "web-fullstack",
      category: "Desarrollo Web",
      title: "Desarrollo Web Full-Stack Moderno",
      modality: ["presencial", "online"],
      modalityLabel: "Presencial en Margarita / Online",
      level: "Principiante · Intermedio · Proyectos",
      description:
        "Construye páginas y aplicaciones web completas desde el diseño de interfaz responsiva hasta el backend, APIs y bases de datos relacionales.",
      topics: [
        "HTML5 & CSS3",
        "JavaScript & React",
        "Tailwind CSS & Bootstrap",
        "Python (Django / Flask)",
        "PostgreSQL & APIs",
      ],
    },
    {
      id: "academico-tesis",
      category: "Apoyo Universitario & Investigación",
      title: "Nivelación Académica, Tesis y Redacción Científica",
      modality: ["presencial", "online"],
      modalityLabel: "Presencial en Margarita / Online",
      level: "Bachillerato · Universitario · Postgrado",
      description:
        "Refuerzo en asignaturas de Computación e Ingeniería, asesoría técnica para trabajos de grado/proyectos, simulación en Unity3D y edición profesional en LaTeX.",
      topics: [
        "Materias de Computación",
        "Asesoría de Tesis / Proyectos",
        "LaTeX & Overleaf",
        "Unity3D & Simulación",
        "Inglés Técnico / Papers",
      ],
    },
  ],
};

export const SKILL_CATEGORIES = [
  { id: "all", label: "Todas las Tecnologías" },
  { id: "data-scientist", label: "Ciencia de Datos & IA" },
  { id: "full-stack", label: "Desarrollo Web Full-Stack" },
  { id: "computer-engineer", label: "Ingeniería, Cloud & Simulación" },
  { id: "researcher", label: "Investigación & Visualización" },
];

export const SKILLS_LIST = [
  {
    name: "Python",
    icon: pythonIcon,
    group: "Lenguajes de Programación",
    roles: ["data-scientist", "full-stack", "computer-engineer", "researcher"],
    badge: "Core",
  },
  {
    name: "JavaScript",
    icon: javascriptIcon,
    group: "Lenguajes de Programación",
    roles: ["full-stack", "computer-engineer", "researcher"],
  },
  {
    name: "SQL",
    icon: psqlIcon,
    group: "Lenguajes de Programación",
    roles: ["data-scientist", "full-stack", "computer-engineer"],
  },
  {
    name: "C#",
    icon: csharpIcon,
    group: "Lenguajes de Programación",
    roles: ["computer-engineer", "researcher"],
  },
  {
    name: "C++",
    icon: cppIcon,
    group: "Lenguajes de Programación",
    roles: ["computer-engineer"],
  },
  {
    name: "C",
    icon: cIcon,
    group: "Lenguajes de Programación",
    roles: ["computer-engineer"],
  },
  {
    name: "Java",
    icon: javaIcon,
    group: "Lenguajes de Programación",
    roles: ["computer-engineer"],
  },
  {
    name: "R",
    icon: rIcon,
    group: "Lenguajes de Programación",
    roles: ["data-scientist", "researcher"],
  },
  {
    name: "Pandas",
    icon: pandasIcon,
    group: "Ciencia de Datos & Machine Learning",
    roles: ["data-scientist", "researcher"],
  },
  {
    name: "NumPy",
    icon: numpyIcon,
    group: "Ciencia de Datos & Machine Learning",
    roles: ["data-scientist", "researcher"],
  },
  {
    name: "Scikit-learn",
    icon: pythonIcon,
    group: "Ciencia de Datos & Machine Learning",
    roles: ["data-scientist"],
    badge: "CV",
  },
  {
    name: "TensorFlow",
    icon: tensorflowIcon,
    group: "Ciencia de Datos & Machine Learning",
    roles: ["data-scientist"],
  },
  {
    name: "Keras",
    icon: tensorflowIcon,
    group: "Ciencia de Datos & Machine Learning",
    roles: ["data-scientist"],
    badge: "CV",
  },
  {
    name: "Jupyter Notebook",
    icon: jupyterIcon,
    group: "Ciencia de Datos & Machine Learning",
    roles: ["data-scientist", "researcher"],
  },
  {
    name: "P5.js",
    icon: javascriptIcon,
    group: "Ciencia de Datos & Machine Learning",
    roles: ["data-scientist", "researcher"],
    badge: "InfoVis",
  },
  {
    name: "Excel Analítico",
    icon: excelIcon,
    group: "Ciencia de Datos & Machine Learning",
    roles: ["data-scientist"],
  },
  {
    name: "React",
    icon: reactIcon,
    group: "Desarrollo Web & APIs",
    roles: ["full-stack", "computer-engineer"],
  },
  {
    name: "Django",
    icon: djangoIcon,
    group: "Desarrollo Web & APIs",
    roles: ["full-stack", "computer-engineer"],
  },
  {
    name: "Flask",
    icon: pythonIcon,
    group: "Desarrollo Web & APIs",
    roles: ["full-stack", "researcher"],
    badge: "Papers IEEE",
  },
  {
    name: "HTML5",
    icon: htmlIcon,
    group: "Desarrollo Web & APIs",
    roles: ["full-stack", "computer-engineer", "researcher"],
  },
  {
    name: "CSS3",
    icon: cssIcon,
    group: "Desarrollo Web & APIs",
    roles: ["full-stack", "computer-engineer", "researcher"],
  },
  {
    name: "Tailwind CSS",
    icon: cssIcon,
    group: "Desarrollo Web & APIs",
    roles: ["full-stack"],
  },
  {
    name: "Bootstrap",
    icon: cssIcon,
    group: "Desarrollo Web & APIs",
    roles: ["full-stack"],
    badge: "CV",
  },
  {
    name: "OpenLayers",
    icon: javascriptIcon,
    group: "Desarrollo Web & APIs",
    roles: ["full-stack", "researcher"],
    badge: "GeoVis",
  },
  {
    name: "Google Maps API",
    icon: javascriptIcon,
    group: "Desarrollo Web & APIs",
    roles: ["full-stack", "researcher"],
    badge: "GeoVis",
  },
  {
    name: "PostgreSQL",
    icon: psqlIcon,
    group: "Bases de Datos, Cloud & Simulación",
    roles: ["full-stack", "computer-engineer", "data-scientist"],
  },
  {
    name: "Neo4j (Grafos)",
    icon: databaseServiceIcon,
    group: "Bases de Datos, Cloud & Simulación",
    roles: ["data-scientist", "computer-engineer"],
    badge: "CV",
  },
  {
    name: "Docker",
    icon: dockerIcon,
    group: "Bases de Datos, Cloud & Simulación",
    roles: ["full-stack", "computer-engineer"],
  },
  {
    name: "Kubernetes",
    icon: kubernetesIcon,
    group: "Bases de Datos, Cloud & Simulación",
    roles: ["full-stack", "computer-engineer"],
  },
  {
    name: "AWS",
    icon: awsIcon,
    group: "Bases de Datos, Cloud & Simulación",
    roles: ["full-stack", "computer-engineer"],
  },
  {
    name: "Git & GitHub",
    icon: gitIcon,
    group: "Bases de Datos, Cloud & Simulación",
    roles: ["full-stack", "computer-engineer", "data-scientist"],
  },
  {
    name: "Unity3D",
    icon: unityIcon,
    group: "Bases de Datos, Cloud & Simulación",
    roles: ["computer-engineer", "researcher"],
    badge: "Simulación",
  },
  {
    name: "LaTeX",
    icon: latexIcon,
    group: "Investigación & Publicación Científica",
    roles: ["researcher"],
  },
  {
    name: "Overleaf",
    icon: overleafIcon,
    group: "Investigación & Publicación Científica",
    roles: ["researcher"],
  },
];

export const SERVICE_PILLARS = [
  {
    title: "Ciencia de Datos, Machine Learning & Visualización",
    badge: "Data & AI",
    description:
      "Transformo datos complejos en decisiones estratégicas mediante análisis estadístico, modelos predictivos y visualizaciones interactivas.",
    icons: [dataServiceIcon, mlServiceIcon, dataVisServiceIcon],
    deliverables: [
      "Análisis exploratorio y limpieza de datos (Python, Pandas, R, Excel)",
      "Modelos de Machine Learning y Deep Learning (Scikit-learn, TensorFlow, Keras)",
      "Visualizaciones interactivas y geoespaciales (P5.js, OpenLayers, Dashboards)",
    ],
  },
  {
    title: "Desarrollo Web Full-Stack, APIs & Cloud",
    badge: "Full-Stack Engineering",
    description:
      "Diseño y construcción de aplicaciones web modernas, rápidas y escalables, desde la interfaz de usuario hasta la base de datos y el despliegue.",
    icons: [webServiceIcon, apiServiceIcon, databaseServiceIcon, cloudServiceIcon],
    deliverables: [
      "Interfaces modernas y responsivas con React, JavaScript y Tailwind CSS",
      "Backends robustos e integración de APIs con Python (Django, Flask)",
      "Bases de datos SQL/Grafos (PostgreSQL, Neo4j) y contenedores (Docker, AWS)",
    ],
  },
  {
    title: "Investigación I+D, Simulación & Consultoría Técnica",
    badge: "R&D & Consulting",
    description:
      "Desarrollo de algoritmos a medida, simulaciones computacionales y redacción técnica/científica con estándares internacionales.",
    icons: [researchServiceIcon, consultingServiceIcon, writingServiceIcon],
    deliverables: [
      "Simulación de escenarios y multitudes virtuales en Unity3D y C#",
      "Revisión de literatura, diseño experimental y prototipado de sistemas",
      "Documentación técnica y edición científica en LaTeX / Overleaf",
    ],
  },
  {
    title: "Formación, Clases & Mentorías Personalizadas",
    badge: "Isla de Margarita & Online",
    description:
      "Enseñanza práctica de programación, ciencia de datos, desarrollo web y materias universitarias de computación, presencial en Margarita u online.",
    icons: [teachingServiceIcon, learningServiceIcon],
    deliverables: [
      "Clases presenciales 1-a-1 o grupales en la Isla de Margarita",
      "Mentorías online en vivo con seguimiento de código y proyectos",
      "Asesoría de tesis, trabajos de grado y nivelación universitaria",
    ],
    ctaHref: "#classes",
    ctaLabel: "Ver programas de clases →",
  },
];

export const EXPERIENCE = [
  {
    company: "Ubisoft Bordeaux",
    role: "Investigador Interno (Research Intern)",
    year: "Oct. 2022 - Dic. 2022",
    location: "Bordeaux, Francia",
    description:
      "Investigación y desarrollo de algoritmos aplicados al desarrollo de videojuegos y simulación en entorno industrial.",
    highlights: [
      "Diseño e implementación de algoritmos experimentales para desarrollo de videojuegos.",
      "Transferencia de técnicas de investigación en computación gráfica y simulación hacia flujos de producción.",
    ],
    logo: ubisoftLogo,
  },
  {
    company: "Inria — Equipo AVIZ (Proyecto Ember)",
    role: "Investigador Interno (Research Intern)",
    year: "Mar. 2020 - Ago. 2020",
    location: "Gif-sur-Yvette (París), Francia",
    description:
      "Investigación sobre visualizaciones situadas (Situated Visualizations) y cómo las trazas digitales pueden integrarse en el entorno físico para apoyar actividades cotidianas.",
    highlights: [
      "Revisión estructurada de la literatura, definición del espacio de diseño de visualizaciones situadas, prototipado y evaluación.",
      "Diseño e implementación de representaciones de datos embebidas con Realidad Aumentada (AR) para mostrar información nutricional sobre alimentos.",
      "Desarrollo y evaluación de un método con Visión por Computador (Computer Vision) e interacción por apuntamiento para registrar calorías y nutrientes.",
    ],
    logo: inriaLogo,
  },
];

export const EDUCATION = [
  {
    institution: "Universitat Politècnica de Catalunya (UPC)",
    location: "Barcelona, España",
    degree: "2 Años en el Programa de Doctorado CLIPE (Horizonte 2020 MSCA-ITN)",
    details: "Investigación doctoral en simulación de multitudes virtuales y comportamiento humano.",
    year: "Sept. 2020 - Feb. 2023",
    gpa: "Beca Europea H2020 CLIPE",
    logos: [
      { name: "Universitat Politècnica de Catalunya", src: upcLogo },
      { name: "Proyecto Europeo CLIPE", src: clipeLogo },
    ],
  },
  {
    institution: "Télécom SudParis — Institut Polytechnique de Paris",
    location: "Évry / París, Francia",
    degree:
      "Maestría (M1 y M2) en Ciencias de la Computación para Redes de Comunicación (Doble Titulación)",
    details: "Programa conjunto con Université Paris-Saclay e Inria.",
    year: "Sept. 2018 - Ago. 2020",
    gpa: "GPA 4.4 / 5.0",
    logos: [
      { name: "Télécom SudParis", src: tspLogo },
      { name: "Institut Polytechnique de Paris", src: ipLogo },
      { name: "Université Paris-Saclay", src: upsLogo },
      { name: "Inria", src: inriaLogo },
    ],
  },
  {
    institution: "Universidad Simón Bolívar (USB)",
    location: "Caracas, Venezuela",
    degree: "Ingeniería de la Computación (Doble Titulación Internacional)",
    details: "Formación rigurosa en ingeniería de software, algoritmos, sistemas y matemáticas.",
    year: "Sept. 2013 - Ago. 2020",
    gpa: "GPA 4.3 / 5.0",
    logos: [{ name: "Universidad Simón Bolívar", src: usbLogo }],
  },
];

export const COURSES = [
  {
    name: "DeepLearning.AI TensorFlow Developer Professional Certificate",
    institution: "DeepLearning.AI · Coursera",
    icons: [
      { name: "Coursera", icon: courseraLogo },
      { name: "DeepLearning.AI", icon: dlaiLogo },
    ],
    link: "https://www.coursera.org/professional-certificates/tensorflow-in-practice",
    date: "Jul. 2020",
    skills: [
      "Deep Learning",
      "TensorFlow",
      "Keras",
      "Visión por Computador",
      "NLP",
      "Series Temporales",
      "Redes Neuronales",
    ],
  },
  {
    name: "IBM Data Science Professional Certificate",
    institution: "IBM · Coursera",
    icons: [
      { name: "Coursera", icon: courseraLogo },
      { name: "IBM", icon: ibmLogo },
    ],
    link: "https://www.coursera.org/professional-certificates/ibm-data-science",
    date: "May. 2020",
    skills: [
      "Python",
      "Ciencia de Datos",
      "Pandas & Scikit-learn",
      "SQL",
      "R",
      "Análisis y Visualización",
      "Machine Learning",
    ],
  },
  {
    name: "Deep Learning Specialization",
    institution: "DeepLearning.AI · Coursera",
    icons: [
      { name: "Coursera", icon: courseraLogo },
      { name: "DeepLearning.AI", icon: dlaiLogo },
    ],
    link: "https://www.coursera.org/specializations/deep-learning",
    date: "Abr. 2020",
    skills: [
      "Redes Neuronales Artificiales",
      "CNN",
      "Modelos de Secuencia",
      "Deep Learning",
      "Python",
    ],
  },
  {
    name: "Interactive Information Visualization",
    institution: "Université Paris-Sud (Paris-Saclay)",
    icons: [{ name: "Université Paris-Saclay / Paris-Sud", icon: upsLogo }],
    link: null,
    date: "Feb. 2019",
    skills: [
      "Visualización Interactiva",
      "P5.js",
      "Representación Visual de Datos",
      "JavaScript",
    ],
  },
];

export const RESEARCH = [
  {
    image: crowdSimulationImage,
    type: "Artículo de Investigación",
    journal: "Nature — Scientific Reports",
    title:
      "Simulating real-life scenarios to better understand the spread of diseases under different contexts",
    description:
      "Simulación computacional de escenarios cotidianos mediante agentes virtuales para modelar y analizar la propagación de enfermedades infecciosas bajo distintas medidas y contextos espaciales.",
    year: 2024,
    links: [
      {
        label: "Ver en Nature",
        icon: linkPaperIcon,
        link: "https://www.nature.com/articles/s41598-024-52903-w",
      },
    ],
    technologies: ["Unity3D", "C#", "Python", "Simulación de Agentes"],
  },
  {
    image: virtualCrowdsImage,
    type: "Estado del Arte (STAR)",
    journal: "Computer Graphics Forum (CGF) — Eurographics",
    title: "Authoring Virtual Crowds: A Survey",
    description:
      "Revisión exhaustiva de la literatura sobre herramientas, paradigmas y algoritmos para la creación, edición y control de multitudes virtuales en animación y simulación.",
    year: 2022,
    links: [
      {
        label: "Ver Artículo (Wiley)",
        icon: linkPaperIcon,
        link: "https://onlinelibrary.wiley.com/doi/abs/10.1111/cgf.14506",
      },
    ],
    technologies: ["Simulación de Multitudes", "Computación Gráfica", "IA"],
  },
  {
    image: cp2Image,
    type: "Artículo en Revista",
    journal: "IEEE Transactions on Visualization and Computer Graphics (TVCG)",
    title:
      "Do You Believe Your (Social Media) Data? A Personal Story on Location Data Biases, Errors, and Plausibility as Well as Their Visualization",
    description:
      "Análisis crítico y herramientas visuales interactivas para identificar sesgos, errores de geolocalización y plausibilidad en datos espaciales extraídos de redes sociales.",
    year: 2022,
    links: [
      {
        label: "Ver en IEEE Xplore",
        icon: linkPaperIcon,
        link: "https://ieeexplore.ieee.org/abstract/document/9676662",
      },
    ],
    technologies: [
      "Python",
      "Flask",
      "JavaScript",
      "OpenLayers",
      "Google Maps API",
      "HTML/CSS",
    ],
  },
  {
    image: cp1Image,
    type: "Póster Científico",
    journal: "IEEE Conference on Visualization (IEEE VIS 2019, Vancouver)",
    title:
      "Exploring carnivorous plant habitats based on images from social media",
    description:
      "Exploración visual de hábitats ecológicos de plantas carnívoras a partir de metadatos e imágenes georreferenciadas compartidas en redes sociales.",
    year: 2019,
    links: [
      {
        label: "Ver en HAL Inria",
        icon: linkPaperIcon,
        link: "https://inria.hal.science/hal-02196764/",
      },
      {
        label: "Info IEEE VIS",
        icon: linkInfoIcon,
        link: "https://ieeevis.org/year/2019/info/posters",
      },
    ],
    technologies: [
      "Python",
      "Flask",
      "JavaScript",
      "OpenLayers",
      "Google Maps API",
    ],
  },
];
