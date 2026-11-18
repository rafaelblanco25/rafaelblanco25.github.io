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

export const ASSETS = {
  profileHero,
  profileAbout,
  rbCv,
  englishIcon,
  spanishIcon,
  venezuelaFlag,
  euFlag,
};

const SHARED_SKILLS = [
  {
    name: "Python",
    icon: pythonIcon,
    groupKey: "languages",
    roles: ["data-scientist", "full-stack", "computer-engineer", "researcher"],
    badge: "Core",
  },
  {
    name: "JavaScript",
    icon: javascriptIcon,
    groupKey: "languages",
    roles: ["full-stack", "computer-engineer", "researcher"],
  },
  {
    name: "SQL",
    icon: psqlIcon,
    groupKey: "languages",
    roles: ["data-scientist", "full-stack", "computer-engineer"],
  },
  {
    name: "C#",
    icon: csharpIcon,
    groupKey: "languages",
    roles: ["computer-engineer", "researcher"],
  },
  {
    name: "C++",
    icon: cppIcon,
    groupKey: "languages",
    roles: ["computer-engineer"],
  },
  {
    name: "C",
    icon: cIcon,
    groupKey: "languages",
    roles: ["computer-engineer"],
  },
  {
    name: "Java",
    icon: javaIcon,
    groupKey: "languages",
    roles: ["computer-engineer"],
  },
  {
    name: "R",
    icon: rIcon,
    groupKey: "languages",
    roles: ["data-scientist", "researcher"],
  },
  {
    name: "Pandas",
    icon: pandasIcon,
    groupKey: "data_ai",
    roles: ["data-scientist", "researcher"],
  },
  {
    name: "NumPy",
    icon: numpyIcon,
    groupKey: "data_ai",
    roles: ["data-scientist", "researcher"],
  },
  {
    name: "Scikit-learn",
    icon: pythonIcon,
    groupKey: "data_ai",
    roles: ["data-scientist"],
    badge: "ML",
  },
  {
    name: "TensorFlow",
    icon: tensorflowIcon,
    groupKey: "data_ai",
    roles: ["data-scientist"],
  },
  {
    name: "Keras",
    icon: tensorflowIcon,
    groupKey: "data_ai",
    roles: ["data-scientist"],
    badge: "DL",
  },
  {
    name: "Jupyter Notebook",
    icon: jupyterIcon,
    groupKey: "data_ai",
    roles: ["data-scientist", "researcher"],
  },
  {
    name: "P5.js",
    icon: javascriptIcon,
    groupKey: "data_ai",
    roles: ["data-scientist", "researcher"],
    badge: "InfoVis",
  },
  {
    name: "Excel",
    icon: excelIcon,
    groupKey: "data_ai",
    roles: ["data-scientist"],
  },
  {
    name: "React",
    icon: reactIcon,
    groupKey: "web",
    roles: ["full-stack", "computer-engineer"],
  },
  {
    name: "Django",
    icon: djangoIcon,
    groupKey: "web",
    roles: ["full-stack", "computer-engineer"],
  },
  {
    name: "Flask",
    icon: pythonIcon,
    groupKey: "web",
    roles: ["full-stack", "researcher"],
    badge: "IEEE",
  },
  {
    name: "HTML5",
    icon: htmlIcon,
    groupKey: "web",
    roles: ["full-stack", "computer-engineer", "researcher"],
  },
  {
    name: "CSS3",
    icon: cssIcon,
    groupKey: "web",
    roles: ["full-stack", "computer-engineer", "researcher"],
  },
  {
    name: "Tailwind CSS",
    icon: cssIcon,
    groupKey: "web",
    roles: ["full-stack"],
  },
  {
    name: "Bootstrap",
    icon: cssIcon,
    groupKey: "web",
    roles: ["full-stack"],
  },
  {
    name: "OpenLayers",
    icon: javascriptIcon,
    groupKey: "web",
    roles: ["full-stack", "researcher"],
    badge: "GeoVis",
  },
  {
    name: "Google Maps API",
    icon: javascriptIcon,
    groupKey: "web",
    roles: ["full-stack", "researcher"],
    badge: "GeoVis",
  },
  {
    name: "PostgreSQL",
    icon: psqlIcon,
    groupKey: "cloud_sim",
    roles: ["full-stack", "computer-engineer", "data-scientist"],
  },
  {
    name: "Neo4j (Graphs)",
    icon: databaseServiceIcon,
    groupKey: "cloud_sim",
    roles: ["data-scientist", "computer-engineer"],
  },
  {
    name: "Docker",
    icon: dockerIcon,
    groupKey: "cloud_sim",
    roles: ["full-stack", "computer-engineer"],
  },
  {
    name: "Kubernetes",
    icon: kubernetesIcon,
    groupKey: "cloud_sim",
    roles: ["full-stack", "computer-engineer"],
  },
  {
    name: "AWS",
    icon: awsIcon,
    groupKey: "cloud_sim",
    roles: ["full-stack", "computer-engineer"],
  },
  {
    name: "Git & GitHub",
    icon: gitIcon,
    groupKey: "cloud_sim",
    roles: ["full-stack", "computer-engineer", "data-scientist"],
  },
  {
    name: "Unity3D",
    icon: unityIcon,
    groupKey: "cloud_sim",
    roles: ["computer-engineer", "researcher"],
    badge: "Sim",
  },
  {
    name: "LaTeX",
    icon: latexIcon,
    groupKey: "research_pub",
    roles: ["researcher"],
  },
  {
    name: "Overleaf",
    icon: overleafIcon,
    groupKey: "research_pub",
    roles: ["researcher"],
  },
];

export const CONTENT = {
  es: {
    meta: {
      title:
        "Rafael Blanco | Científico de Datos, Ingeniero en Computación & Portafolio",
      classesTitle:
        "Clases de Matemática y Programación en Isla de Margarita y Online | Rafael Blanco",
    },
    nav: {
      portfolioLinks: [
        { label: "Sobre Mí & Skills", href: "#about" },
        { label: "Proyectos & Papers", href: "#research" },
        { label: "Experiencia", href: "#experience" },
        { label: "Educación", href: "#education" },
        { label: "Certificaciones", href: "#courses" },
        { label: "Servicios", href: "#services" },
      ],
      switchToClasses: "Academia & Clases",
      switchToPortfolio: "← Volver al Portafolio",
      cvButton: "CV (PDF)",
      contactButton: "Contactar",
      bookClassButton: "Reservar Clase",
      openMenuLabel: "Abrir menú de navegación",
      closeMenuLabel: "Cerrar menú de navegación",
    },
    profile: {
      name: "Rafael Blanco",
      greeting: "Hola, mi nombre es",
      availabilityBadge:
        "Disponible para Oportunidades en Data Science, Ingeniería de Software e I+D",
      headline:
        "Científico de Datos, Ingeniero en Computación, Desarrollador Full-Stack e Investigador",
      subheadline:
        "Doble titulación franco-venezolana (USB + Télécom SudParis / Institut Polytechnique de Paris) y trayectoria de investigación en Inria (Francia), UPC (España) y Ubisoft. Especializado en transformar datos complejos, algoritmos y modelos predictivos en productos de software escalables.",
      roles: [
        "Científico de Datos",
        "Ingeniero en Computación",
        "Desarrollador Web Full-Stack",
        "Investigador I+D",
      ],
      bioTitle: "Quién Soy",
      bio: "Soy Ingeniero en Computación con sólida trayectoria en Ciencia de Datos, Inteligencia Artificial, Desarrollo Web Full-Stack e Investigación Científica en centros europeos. Me apasiona resolver problemas complejos mediante código limpio, arquitecturas modernas y modelos analíticos rigurosos que generen impacto real.",
      heroImage: profileHero,
      aboutImage: profileAbout,
      email: "rblancog25@gmail.com",
      whatsappNumber: "",
      cvUrl: rbCv,
      ctaProjects: "Ver Proyectos y Publicaciones",
      ctaCv: "Descargar CV (PDF)",
      ctaContact: "Enviar Correo",
      ctaClassesLink: "¿Buscas clases personalizadas? Ir a Academia & Cursos →",
      portraitCaptionLeft: "M.Sc. & Ing. Computación",
      portraitCaptionRight: "USB · IP Paris · UPC",
      metrics: [
        {
          value: "4",
          label: "Publicaciones Arbitradas",
          detail: "Nature Scientific Reports, IEEE TVCG, CGF & IEEE VIS",
        },
        {
          value: "Doble Título",
          label: "Ingeniería & Maestría M.Sc.",
          detail: "USB (GPA 4.3/5) + Télécom SudParis / IP Paris (GPA 4.4/5)",
        },
        {
          value: "I+D Europa",
          label: "Experiencia Internacional",
          detail: "Inria (París), UPC (Barcelona) & Ubisoft (Bordeaux)",
        },
        {
          value: "34+ Skills",
          label: "Stack Multidisciplinario",
          detail: "Python, React, Django, TensorFlow, SQL, Docker, Unity3D",
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
      languagesTag: "Comunicación Internacional",
      languagesTitle: "Idiomas",
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
    },
    aboutSection: {
      tag: "Sobre Mí & Stack Técnico",
      title: "Perfil Profesional, Habilidades e Idiomas",
      ecosystemTitle: "Ecosistema de Tecnologías",
      ecosystemSubtitle:
        "Filtra las tecnologías según la especialidad o explora el stack completo.",
      categories: [
        { id: "all", label: "Todas las Tecnologías" },
        { id: "data-scientist", label: "Ciencia de Datos & IA" },
        { id: "full-stack", label: "Desarrollo Web Full-Stack" },
        { id: "computer-engineer", label: "Ingeniería, Cloud & Simulación" },
        { id: "researcher", label: "Investigación & Visualización" },
      ],
      groupNames: {
        languages: "Lenguajes de Programación",
        data_ai: "Ciencia de Datos & Machine Learning",
        web: "Desarrollo Web & APIs",
        cloud_sim: "Bases de Datos, Cloud & Simulación",
        research_pub: "Investigación & Publicación Científica",
      },
      skills: SHARED_SKILLS,
    },
    researchSection: {
      tag: "Proyectos & Publicaciones Científicas",
      title: "Investigación Aplicada, Sistemas Interactivos y Artículos Arbitrados",
      subtitle:
        "Proyectos de investigación y desarrollo publicados en revistas y conferencias internacionales de alto impacto: Nature Scientific Reports, IEEE TVCG, Computer Graphics Forum (CGF) e IEEE VIS.",
      items: [
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
          journal:
            "IEEE Transactions on Visualization and Computer Graphics (TVCG)",
          title:
            "Do You Believe Your (Social Media) Data? A Personal Story on Location Data Biases, Errors, and Plausibility as Well as Their Visualization",
          description:
            "Análisis crítico y herramientas visuales interactivas web para identificar sesgos, errores de geolocalización y plausibilidad en datos espaciales extraídos de redes sociales.",
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
            "Aplicación web y exploración visual de hábitats ecológicos de plantas carnívoras a partir de metadatos e imágenes georreferenciadas compartidas en redes sociales.",
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
      ],
    },
    experienceSection: {
      tag: "Experiencia Profesional & I+D",
      title: "Centros de Investigación e Industria",
      subtitle:
        "Trayectoria de investigación y desarrollo en Francia trabajando en visualización de datos, realidad aumentada, visión por computador y algoritmos para videojuegos.",
      items: [
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
      ],
    },
    educationSection: {
      tag: "Formación Académica",
      title: "Trayectoria Universitaria Internacional",
      subtitle:
        "Formación de doble titulación entre Venezuela y Francia, e investigación doctoral en España dentro del programa europeo Marie Skłodowska-Curie (H2020 CLIPE).",
      items: [
        {
          institution: "Universitat Politècnica de Catalunya (UPC)",
          location: "Barcelona, España",
          degree:
            "2 Años en el Programa de Doctorado CLIPE (Horizonte 2020 MSCA-ITN)",
          details:
            "Investigación doctoral en simulación de multitudes virtuales y comportamiento humano.",
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
          details:
            "Formación rigurosa en ingeniería de software, algoritmos, sistemas y matemáticas.",
          year: "Sept. 2013 - Ago. 2020",
          gpa: "GPA 4.3 / 5.0",
          logos: [{ name: "Universidad Simón Bolívar", src: usbLogo }],
        },
      ],
    },
    coursesSection: {
      tag: "Certificaciones & Especializaciones",
      title: "Formación Continua en IA, Ciencia de Datos y Visualización",
      viewCourseLabel: "Ver curso",
      items: [
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
      ],
    },
    servicesSection: {
      tag: "Servicios & Capacidades",
      title: "Soluciones Tecnológicas, Consultoría I+D y Formación",
      subtitle:
        "Cuatro pilares donde combino ingeniería de software, ciencia de datos e investigación científica para generar valor.",
      pillars: [
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
          icons: [
            webServiceIcon,
            apiServiceIcon,
            databaseServiceIcon,
            cloudServiceIcon,
          ],
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
          title: "Academia, Clases & Mentorías Personalizadas",
          badge: "Isla de Margarita & Online",
          description:
            "Cursos modulares y asesorías personalizadas en Matemática de Bachillerato, Matemática Preuniversitaria, Habilidad Cuantitativa e Introducción a la Programación.",
          icons: [teachingServiceIcon, learningServiceIcon],
          deliverables: [
            "Clases presenciales 1-a-1 o grupales en la Isla de Margarita",
            "Clases online en vivo con pizarra digital y seguimiento práctico",
            "Preparación preuniversitaria con metodología Grupo Escalera",
          ],
          isClassesRouteCta: true,
          ctaLabel: "Ir al portal de Clases y Cursos →",
        },
      ],
    },
    classesSection: {
      tag: "Academia, Cursos & Asesorías",
      title: "Clases Presenciales en Isla de Margarita y Online",
      subtitle:
        "Matemática de Bachillerato, Preparación Preuniversitaria (Metodología Grupo Escalera) e Introducción a la Programación",
      intro:
        "Formación personalizada en la Isla de Margarita y online en vivo. Fui integrante y preparador del reconocido Grupo Escalera, combinando la metodología de preparación preuniversitaria venezolana con mi formación como Ingeniero en Computación (USB) y Magíster en Francia (Télécom SudParis / IP Paris).",
      backToPortfolioLabel: "← Ver Portafolio de Ingeniería e Investigación",
      credentialBanner: {
        badge: "Experiencia Docente Comprobada",
        title: "Ex-Preparador del Grupo Escalera · Ingeniero USB (GPA 4.3/5.0)",
        description:
          "Conozco de primera mano los temarios, el nivel de exigencia y los métodos de resolución estratégica de pruebas de admisión (USB, UCV, UCAB, UNIMET, UDO) y de los primeros semestres universitarios en Ingeniería, Ciencias, Arquitectura y Medicina.",
        ctaButton: "Armar mi plan de clases ↓",
      },
      modalityGroupRatio: "1-a-1 · Grupos reducidos",
      catalogTitle: "Catálogo de Cursos y Asesorías por Área",
      catalogSubtitle:
        "Haz clic sobre las clases de cada tarjeta para solicitar el curso completo o únicamente los temas específicos que necesites.",
      filterTabs: [
        { id: "all", label: "Todas las modalidades" },
        { id: "presencial", label: "📍 Presencial (Margarita)" },
        { id: "online", label: "💻 Online en Vivo" },
      ],
      modalityActiveText: {
        all: "Presencial en Margarita / Online",
        presencial: "Presencial en Isla de Margarita",
        online: "Online en Vivo",
      },
      labels: {
        targetAudience: "Dirigido a: ",
        fullCourseButton: (count) => `✓ Curso Completo (${count} clases)`,
        fullCourseSummary: (count) => `Curso Completo (${count} clases)`,
        defaultOpenSummary: "Curso Completo o clases a convenir",
        defaultTutoringSummary: "Asesoría personalizada (1ero a 5to año)",
        yourSelection: "Tu selección: ",
        whatsappBtn: "Solicitar por WhatsApp",
        emailBtn: "Solicitar por Correo",
        quickInquiryTag: "Consulta Personalizada",
        quickInquiryTitle:
          "¿Quieres inscribir un curso o agendar una asesoría de Bachillerato?",
        quickInquirySubtitle:
          "Indica el curso o año de bachillerato, tu modalidad preferida (Isla de Margarita u Online) y los temas que necesitas reforzar.",
        courseFieldLabel: "Área o Curso",
        modalityFieldLabel: "Modalidad Preferida",
        modalityOptions: [
          {
            value: "Presencial en Isla de Margarita",
            label: "📍 Presencial en Isla de Margarita",
          },
          { value: "Online en Vivo", label: "💻 Online en Vivo" },
          {
            value: "Híbrida (Presencial en Margarita + Online)",
            label: "🔄 Híbrida (Margarita + Online)",
          },
        ],
        noteFieldLabel:
          "Tema del colegio, universidad a la que aspiras o clases que te interesan (opcional)",
        notePlaceholder:
          "Ej. Mi hijo cursa 3er año y ve factorización / Me preparo para entrar a Ingeniería y quiero el curso completo...",
        sendWhatsappBtn: "Enviar Consulta por WhatsApp",
        sendEmailBtn: (email) => `Enviar Consulta por Correo (${email})`,
        waIntro:
          "Hola Rafael, vi tu página web y me interesa recibir información sobre tus clases.",
        waCourse: "Área / Curso",
        waModality: "Modalidad",
        waSelection: "Clases / Nivel de interés",
        waNote: "Tema o detalle adicional",
        mailSubjectPrefix: "Consulta de Clases",
        mailGreeting:
          "Hola Rafael,\n\nMe gustaría consultar disponibilidad y detalles para clases personalizadas:",
        mailClosing: "¡Muchas gracias!",
      },
      modalities: [
        {
          id: "presencial",
          badge: "📍 Isla de Margarita",
          title: "Modalidad Presencial (Isla de Margarita)",
          description:
            "Clases individuales (1-a-1) o en grupos reducidos en la Isla de Margarita. Explicaciones detalladas en persona, seguimiento paso a paso del cuaderno/guía del alumno y práctica supervisada.",
          highlights: [
            "Atención 1-a-1 o en grupos pequeños de estudio",
            "Adaptado al ritmo del estudiante y a su colegio o universidad",
            "Resolución guiada de guías de ejercicios y exámenes previos",
          ],
        },
        {
          id: "online",
          badge: "💻 Online en Vivo",
          title: "Modalidad Online en Vivo",
          description:
            "Sesiones interactivas por videollamada con pizarra digital paso a paso, material de apoyo descargable y la misma cercanía de una clase presencial desde cualquier lugar.",
          highlights: [
            "100% en vivo con pizarra interactiva y resolución en tiempo real",
            "Entrega de apuntes digitales, guías de ejercicios y código de la clase",
            "Horarios flexibles para asesorías puntuales o cursos completos",
          ],
        },
      ],
      programs: [
        {
          id: "mat-bachillerato",
          category: "Bachillerato · 1ero a 5to Año",
          formatType: "Asesoría Personalizada (A medida)",
          title: "Matemática para Bachillerato (Ciencias y Humanidades)",
          modality: ["presencial", "online"],
          modalityLabel: "Presencial en Margarita / Online",
          level: "1er, 2do, 3er, 4to y 5to Año de Bachillerato",
          targetAudience:
            "Estudiantes de educación media (Ciencias o Humanidades) que buscan reforzar las clases de su colegio, comprender los temas a fondo y mejorar sus calificaciones.",
          description:
            "Clases complementarias a las dictadas en el colegio. No siguen un temario rígido predefinido: cada asesoría se adapta exactamente al tema, guía o evaluación que el alumno esté viendo en su institución educativa, con explicaciones pacientes, detalladas y personalizadas.",
          selectionHint:
            "Selecciona el año que cursa el estudiante (puedes indicar el tema exacto de su colegio al enviar la consulta):",
          allowFullCourse: false,
          modules: [
            {
              id: "bach-1",
              code: "1er Año",
              title:
                "1er Año — Aritmética, Enteros (ℤ), Fracciones (ℚ), Ecuaciones Iniciales y Geometría Básica",
            },
            {
              id: "bach-2",
              code: "2do Año",
              title:
                "2do Año — Polinomios, Productos Notables, Funciones Afines y Congruencia de Triángulos",
            },
            {
              id: "bach-3",
              code: "3er Año",
              title:
                "3er Año — Números Reales (ℝ), Radicales, Factorización, Ecuación de 2do Grado, Sistemas y Pitágoras/Thales",
            },
            {
              id: "bach-4",
              code: "4to Año",
              title:
                "4to Año (Ciencias / Humanidades) — Funciones, Trigonometría, Logaritmos, Progresiones, Vectores y Estadística",
            },
            {
              id: "bach-5",
              code: "5to Año",
              title:
                "5to Año (Ciencias / Humanidades) — Polinomios Avanzados, Matrices/Determinantes, Geometría Analítica (Cónicas), Combinatoria e Intro al Cálculo",
            },
          ],
        },
        {
          id: "mat-preuniversitaria",
          category: "Preparación Preuniversitaria",
          formatType: "Curso por Clases Definidas (Completo o por Tema)",
          title: "Matemática Preuniversitaria",
          modality: ["presencial", "online"],
          modalityLabel: "Presencial en Margarita / Online",
          level: "5to Año · Graduados de Bachillerato · Nuevo Ingreso Universitario",
          targetAudience:
            "Aspirantes a Ingeniería, Arquitectura, Medicina, Ciencias, Economía y carreras afines que desean entrar a la universidad con bases sólidas y superar con éxito el primer semestre.",
          description:
            "Curso estructurado bajo el enfoque de programas preuniversitarios de excelencia (Grupo Escalera / Propedéutico Benjamín Franklin). Está dividido en clases definidas e independientes: el alumno puede cursar el programa completo o solicitar únicamente los módulos específicos que necesite reforzar.",
          selectionHint:
            "Elige 'Curso Completo' o marca las clases específicas que deseas cursar:",
          allowFullCourse: true,
          modules: [
            {
              id: "mpre-1",
              code: "Clase 1",
              title:
                "Conjuntos Numéricos (ℕ, ℤ, ℚ, ℝ), Operaciones con Fracciones, Potenciación, Radicación y Racionalización",
            },
            {
              id: "mpre-2",
              code: "Clase 2",
              title:
                "Polinomios: Operaciones, Productos Notables, División Sintética (Ruffini) y Teorema del Resto",
            },
            {
              id: "mpre-3",
              code: "Clase 3",
              title:
                "Factorización Completa y Simplificación de Fracciones Algebraicas",
            },
            {
              id: "mpre-4",
              code: "Clase 4",
              title:
                "Ecuaciones Lineales, Cuadráticas, con Radicales, Valor Absoluto y Sistemas de Ecuaciones",
            },
            {
              id: "mpre-5",
              code: "Clase 5",
              title:
                "Desigualdades, Intervalos e Inecuaciones (Lineales, Cuadráticas, Racionales y con Valor Absoluto)",
            },
            {
              id: "mpre-6",
              code: "Clase 6",
              title:
                "Funciones Reales: Dominio, Rango, Gráficas, Función Lineal, Cuadrática, Exponencial y Logarítmica",
            },
            {
              id: "mpre-7",
              code: "Clase 7",
              title:
                "Geometría Plana, Espacial y Analítica (Triángulos, Círculos, Áreas, Volúmenes, Recta y Cónicas Básicas)",
            },
            {
              id: "mpre-8",
              code: "Clase 8",
              title:
                "Trigonometría: Círculo Trigonométrico, Razones, Identidades, Ecuaciones, Ley del Seno y del Coseno",
            },
          ],
        },
        {
          id: "hab-cuantitativa",
          category: "Aptitud Académica · Metodología Grupo Escalera",
          formatType: "Curso por Clases Definidas (Completo o por Tema)",
          title: "Habilidad Cuantitativa Preuniversitaria",
          modality: ["presencial", "online"],
          modalityLabel: "Presencial en Margarita / Online",
          level: "Pruebas de Admisión · Aptitud Académica · Razonamiento Lógico",
          targetAudience:
            "Estudiantes que se preparan para exámenes de admisión universitaria (USB, UCV, UCAB, UNIMET, UDO, etc.) o pruebas estandarizadas de aptitud numérica.",
          description:
            "Basado directamente en mi experiencia como integrante y preparador del Grupo Escalera. Desarrolla agilidad mental, descarte estratégico y planteamiento rápido de problemas sin calculadora. Puedes inscribir el curso completo o elegir clases puntuales.",
          selectionHint:
            "Elige 'Curso Completo' o marca las clases específicas que deseas cursar:",
          allowFullCourse: true,
          modules: [
            {
              id: "hcuant-1",
              code: "Clase 1",
              title:
                "Aritmética Estratégica y Teoría de Números (Divisibilidad, Primos, MCM, MCD y Restos)",
            },
            {
              id: "hcuant-2",
              code: "Clase 2",
              title:
                "Razones, Proporciones, Magnitudes Directas/Inversas, Regla de Tres y Porcentajes Sucesivos",
            },
            {
              id: "hcuant-3",
              code: "Clase 3",
              title:
                "Traducción al Lenguaje Algebraico y Problemas Clásicos (Edades, Móviles, Mezclas y Trabajo Conjunto)",
            },
            {
              id: "hcuant-4",
              code: "Clase 4",
              title:
                "Sucesiones Numéricas, Alfanuméricas, Series, Operadores Matemáticos y Reconocimiento de Patrones",
            },
            {
              id: "hcuant-5",
              code: "Clase 5",
              title:
                "Razonamiento Geométrico y Espacial Rápido (Áreas Sombreadas, Proporciones en Figuras y Ángulos)",
            },
            {
              id: "hcuant-6",
              code: "Clase 6",
              title:
                "Principios de Conteo, Análisis Combinatorio (Permutaciones, Variaciones, Combinaciones) y Probabilidades",
            },
            {
              id: "hcuant-7",
              code: "Clase 7",
              title:
                "Estadística Básica (Media, Mediana, Moda), Interpretación de Gráficos/Tablas y Suficiencia de Datos",
            },
          ],
        },
        {
          id: "intro-programacion",
          category: "Computación & Programación",
          formatType: "Curso por Clases Definidas (Completo o por Tema)",
          title: "Introducción a la Programación y a la Computación",
          modality: ["presencial", "online"],
          modalityLabel: "Presencial en Margarita / Online",
          level: "Desde Cero · Preuniversitario · 1er Año de Universidad",
          targetAudience:
            "Jóvenes de bachillerato, futuros estudiantes de Ingeniería/Computación o principiantes que quieren aprender a pensar como programadores desde cero.",
          description:
            "Organizado bajo el mismo esquema modular por clases definidas: puedes tomar el curso completo desde cero o solicitar clases específicas para reforzar temas puntuales de tu materia universitaria de programación.",
          selectionHint:
            "Elige 'Curso Completo' o marca las clases específicas que deseas cursar:",
          allowFullCourse: true,
          modules: [
            {
              id: "prog-1",
              code: "Clase 1",
              title:
                "Fundamentos de Computación, Pensamiento Algorítmico, Lógica Proposicional y Diagramas/Pseudocódigo",
            },
            {
              id: "prog-2",
              code: "Clase 2",
              title:
                "Variables, Tipos de Datos, Operadores, Expresiones y Entrada/Salida (Python / C)",
            },
            {
              id: "prog-3",
              code: "Clase 3",
              title:
                "Estructuras Condicionales y Control de Decisiones (if, else, elif, condicionales anidados)",
            },
            {
              id: "prog-4",
              code: "Clase 4",
              title:
                "Estructuras Iterativas / Ciclos (while, for), Contadores, Acumuladores y Corridas en Frío (Trazas)",
            },
            {
              id: "prog-5",
              code: "Clase 5",
              title:
                "Funciones, Procedimientos, Paso de Parámetros, Alcance de Variables y Diseño Modular",
            },
            {
              id: "prog-6",
              code: "Clase 6",
              title:
                "Estructuras de Datos Iniciales: Arreglos/Listas, Matrices (2D) y Manejo de Cadenas de Texto (Strings)",
            },
            {
              id: "prog-7",
              code: "Clase 7",
              title:
                "Algoritmos Clásicos (Búsqueda, Ordenamiento Básico), Resolución de Problemas y Proyecto Práctico",
            },
          ],
        },
      ],
    },
    footer: {
      tagline:
        "Ingeniero en Computación · Científico de Datos · Desarrollador Web Full-Stack · Investigador I+D.",
      rights: "Todos los derechos reservados.",
      backToTop: "Volver arriba ↑",
    },
  },

  en: {
    meta: {
      title:
        "Rafael Blanco | Data Scientist, Computer Engineer & Full-Stack Developer",
      classesTitle:
        "Math & Programming Tutoring (Isla de Margarita & Online) | Rafael Blanco",
    },
    nav: {
      portfolioLinks: [
        { label: "About & Skills", href: "#about" },
        { label: "Projects & Research", href: "#research" },
        { label: "Experience", href: "#experience" },
        { label: "Education", href: "#education" },
        { label: "Certifications", href: "#courses" },
        { label: "Services", href: "#services" },
      ],
      switchToClasses: "Academy & Tutoring",
      switchToPortfolio: "← Back to Portfolio",
      cvButton: "CV (PDF)",
      contactButton: "Contact",
      bookClassButton: "Book a Class",
      openMenuLabel: "Open navigation menu",
      closeMenuLabel: "Close navigation menu",
    },
    profile: {
      name: "Rafael Blanco",
      greeting: "Hello, my name is",
      availabilityBadge:
        "Open to Data Science, Software Engineering & R&D Opportunities",
      headline:
        "Data Scientist, Computer Engineer, Full-Stack Developer & Researcher",
      subheadline:
        "French-Venezuelan double-degree engineer (USB + Télécom SudParis / Institut Polytechnique de Paris) with R&D experience at Inria (France), UPC (Spain), and Ubisoft. Specialized in turning complex data, algorithms, and predictive models into scalable software products.",
      roles: [
        "Data Scientist",
        "Computer Engineer",
        "Full-Stack Web Developer",
        "R&D Researcher",
      ],
      bioTitle: "Who Am I",
      bio: "I am a Computer Engineer with a strong track record in Data Science, Artificial Intelligence, Full-Stack Web Development, and Scientific Research at leading European institutions. I enjoy solving complex engineering problems through clean code, modern architectures, and rigorous analytical models that deliver measurable impact.",
      heroImage: profileHero,
      aboutImage: profileAbout,
      email: "rblancog25@gmail.com",
      whatsappNumber: "",
      cvUrl: rbCv,
      ctaProjects: "Explore Projects & Research",
      ctaCv: "Download CV (PDF)",
      ctaContact: "Email Me",
      ctaClassesLink: "Looking for 1-on-1 tutoring or courses? Visit Academy & Tutoring →",
      portraitCaptionLeft: "M.Sc. & B.Sc. Computer Science",
      portraitCaptionRight: "USB · IP Paris · UPC",
      metrics: [
        {
          value: "4",
          label: "Peer-Reviewed Publications",
          detail: "Nature Scientific Reports, IEEE TVCG, CGF & IEEE VIS",
        },
        {
          value: "Double Degree",
          label: "B.Sc. & M.Sc. Computer Science",
          detail: "USB (GPA 4.3/5) + Télécom SudParis / IP Paris (GPA 4.4/5)",
        },
        {
          value: "European R&D",
          label: "International Experience",
          detail: "Inria (Paris), UPC (Barcelona) & Ubisoft (Bordeaux)",
        },
        {
          value: "34+ Skills",
          label: "Multidisciplinary Stack",
          detail: "Python, React, Django, TensorFlow, SQL, Docker, Unity3D",
        },
      ],
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
          label: "CV (PDF)",
          ariaLabel: "View Rafael Blanco CV in PDF",
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
      languagesTag: "International Communication",
      languagesTitle: "Languages",
      languages: [
        {
          name: "Spanish",
          level: "Native",
          percent: 100,
          flag: spanishIcon,
        },
        {
          name: "English",
          level: "Full Professional Proficiency (C1/C2)",
          percent: 90,
          flag: englishIcon,
        },
        {
          name: "French",
          level: "Elementary / Basic (A2)",
          percent: 30,
          flag: frenchIcon,
        },
      ],
    },
    aboutSection: {
      tag: "About Me & Technical Stack",
      title: "Professional Profile, Skills & Languages",
      ecosystemTitle: "Technology Ecosystem",
      ecosystemSubtitle:
        "Filter technologies by domain or explore the complete technical stack.",
      categories: [
        { id: "all", label: "All Technologies" },
        { id: "data-scientist", label: "Data Science & AI" },
        { id: "full-stack", label: "Full-Stack Web Dev" },
        { id: "computer-engineer", label: "Engineering, Cloud & Simulation" },
        { id: "researcher", label: "Research & Visualization" },
      ],
      groupNames: {
        languages: "Programming Languages",
        data_ai: "Data Science & Machine Learning",
        web: "Web Development & APIs",
        cloud_sim: "Databases, Cloud & Simulation",
        research_pub: "Research & Scientific Publishing",
      },
      skills: SHARED_SKILLS,
    },
    researchSection: {
      tag: "Projects & Scientific Publications",
      title: "Applied Research, Interactive Systems & Peer-Reviewed Papers",
      subtitle:
        "Research and engineering projects published in top-tier international venues: Nature Scientific Reports, IEEE TVCG, Computer Graphics Forum (CGF), and IEEE VIS.",
      items: [
        {
          image: crowdSimulationImage,
          type: "Research Paper",
          journal: "Nature — Scientific Reports",
          title:
            "Simulating real-life scenarios to better understand the spread of diseases under different contexts",
          description:
            "Agent-based computational simulation of everyday scenarios to model and analyze infectious disease transmission across different policies and spatial contexts.",
          year: 2024,
          links: [
            {
              label: "Read on Nature",
              icon: linkPaperIcon,
              link: "https://www.nature.com/articles/s41598-024-52903-w",
            },
          ],
          technologies: ["Unity3D", "C#", "Python", "Agent Simulation"],
        },
        {
          image: virtualCrowdsImage,
          type: "State of the Art (STAR)",
          journal: "Computer Graphics Forum (CGF) — Eurographics",
          title: "Authoring Virtual Crowds: A Survey",
          description:
            "Comprehensive literature review covering paradigms, tools, and algorithms for authoring, editing, and controlling virtual crowds in computer animation and simulation.",
          year: 2022,
          links: [
            {
              label: "Read Paper (Wiley)",
              icon: linkPaperIcon,
              link: "https://onlinelibrary.wiley.com/doi/abs/10.1111/cgf.14506",
            },
          ],
          technologies: ["Crowd Simulation", "Computer Graphics", "AI"],
        },
        {
          image: cp2Image,
          type: "Journal Paper",
          journal:
            "IEEE Transactions on Visualization and Computer Graphics (TVCG)",
          title:
            "Do You Believe Your (Social Media) Data? A Personal Story on Location Data Biases, Errors, and Plausibility as Well as Their Visualization",
          description:
            "Critical analysis and interactive web visualization tools designed to uncover geolocation biases, errors, and plausibility in social media spatial datasets.",
          year: 2022,
          links: [
            {
              label: "Read on IEEE Xplore",
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
          type: "Scientific Poster",
          journal: "IEEE Conference on Visualization (IEEE VIS 2019, Vancouver)",
          title:
            "Exploring carnivorous plant habitats based on images from social media",
          description:
            "Web application and visual exploration system for analyzing ecological habitats of carnivorous plants using georeferenced social media images and metadata.",
          year: 2019,
          links: [
            {
              label: "View on HAL Inria",
              icon: linkPaperIcon,
              link: "https://inria.hal.science/hal-02196764/",
            },
            {
              label: "IEEE VIS Info",
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
      ],
    },
    experienceSection: {
      tag: "Professional & R&D Experience",
      title: "Research Institutes & Industry",
      subtitle:
        "Research and development experience in France working on data visualization, augmented reality, computer vision, and game development algorithms.",
      items: [
        {
          company: "Ubisoft Bordeaux",
          role: "Research Intern",
          year: "Oct. 2022 - Dec. 2022",
          location: "Bordeaux, France",
          description:
            "Research and development of algorithms for game development and simulation in an industrial production environment.",
          highlights: [
            "Designed and implemented experimental algorithms for video game development.",
            "Bridged computer graphics and simulation research techniques into production workflows.",
          ],
          logo: ubisoftLogo,
        },
        {
          company: "Inria — AVIZ Team (Ember Project)",
          role: "Research Intern",
          year: "Mar. 2020 - Aug. 2020",
          location: "Gif-sur-Yvette (Paris), France",
          description:
            "Conducted research on situated visualizations and how digital traces can be surfaced in the physical world to support users in everyday activities.",
          highlights: [
            "Performed a structured literature review, defined a design space for situated visualizations of digital traces, and prototyped and evaluated an interactive system.",
            "Designed and implemented an embedded Augmented Reality (AR) data representation to display nutritional facts on dishes.",
            "Developed and evaluated a novel method to log calorie and nutrient intake on dishes using Computer Vision and pointing interaction.",
          ],
          logo: inriaLogo,
        },
      ],
    },
    educationSection: {
      tag: "Academic Background",
      title: "International University Education",
      subtitle:
        "Double-degree engineering education between Venezuela and France, followed by doctoral research in Spain within the European Marie Skłodowska-Curie Actions (H2020 CLIPE).",
      items: [
        {
          institution: "Polytechnic University of Catalonia (UPC)",
          location: "Barcelona, Spain",
          degree: "2 Years of the CLIPE PhD Program (Horizon 2020 MSCA-ITN)",
          details:
            "Doctoral research in virtual crowd simulation and human behavior modeling.",
          year: "Sept. 2020 - Feb. 2023",
          gpa: "EU H2020 CLIPE Fellowship",
          logos: [
            { name: "Polytechnic University of Catalonia", src: upcLogo },
            { name: "CLIPE EU Project", src: clipeLogo },
          ],
        },
        {
          institution: "Télécom SudParis — Institut Polytechnique de Paris",
          location: "Évry / Paris, France",
          degree:
            "M.Sc. (M1 & M2) in Computer Science for Communication Networks (Double Degree)",
          details: "Joint program with Université Paris-Saclay and Inria.",
          year: "Sept. 2018 - Aug. 2020",
          gpa: "GPA 4.4 / 5.0",
          logos: [
            { name: "Télécom SudParis", src: tspLogo },
            { name: "Institut Polytechnique de Paris", src: ipLogo },
            { name: "Université Paris-Saclay", src: upsLogo },
            { name: "Inria", src: inriaLogo },
          ],
        },
        {
          institution: "Simón Bolívar University (USB)",
          location: "Caracas, Venezuela",
          degree: "B.Sc. in Computer Science (International Double Degree)",
          details:
            "Rigorous five-year engineering program in software engineering, algorithms, systems, and mathematics.",
          year: "Sept. 2013 - Aug. 2020",
          gpa: "GPA 4.3 / 5.0",
          logos: [{ name: "Simón Bolívar University", src: usbLogo }],
        },
      ],
    },
    coursesSection: {
      tag: "Certifications & Specializations",
      title: "Continuing Education in AI, Data Science & Visualization",
      viewCourseLabel: "View course",
      items: [
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
            "Computer Vision",
            "NLP",
            "Time Series",
            "Neural Networks",
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
          date: "May 2020",
          skills: [
            "Python",
            "Data Science",
            "Pandas & Scikit-learn",
            "SQL",
            "R",
            "Data Analysis & Visualization",
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
          date: "Apr. 2020",
          skills: [
            "Artificial Neural Networks",
            "CNN",
            "Sequence Models",
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
            "Interactive Visualization",
            "P5.js",
            "Visual Data Representation",
            "JavaScript",
          ],
        },
      ],
    },
    servicesSection: {
      tag: "Services & Capabilities",
      title: "Engineering Solutions, R&D Consulting & Training",
      subtitle:
        "Four core pillars combining software engineering, data science, and scientific research.",
      pillars: [
        {
          title: "Data Science, Machine Learning & Visualization",
          badge: "Data & AI",
          description:
            "Turning complex data into actionable insights through statistical analysis, predictive modeling, and interactive visualizations.",
          icons: [dataServiceIcon, mlServiceIcon, dataVisServiceIcon],
          deliverables: [
            "Exploratory data analysis and pipelines (Python, Pandas, R, Excel)",
            "Machine Learning and Deep Learning models (Scikit-learn, TensorFlow, Keras)",
            "Interactive and geospatial visualizations (P5.js, OpenLayers, Dashboards)",
          ],
        },
        {
          title: "Full-Stack Web Development, APIs & Cloud",
          badge: "Full-Stack Engineering",
          description:
            "Designing and building modern, fast, and scalable web applications from responsive frontend interfaces to backend APIs and cloud deployment.",
          icons: [
            webServiceIcon,
            apiServiceIcon,
            databaseServiceIcon,
            cloudServiceIcon,
          ],
          deliverables: [
            "Responsive, modern interfaces built with React, JavaScript, and Tailwind CSS",
            "Robust backend services and REST APIs using Python (Django, Flask)",
            "Relational/Graph databases (PostgreSQL, Neo4j) and containers (Docker, AWS)",
          ],
        },
        {
          title: "R&D Consulting, Simulation & Technical Writing",
          badge: "R&D & Consulting",
          description:
            "Custom algorithm development, computational simulations, and publication-grade technical/scientific writing.",
          icons: [researchServiceIcon, consultingServiceIcon, writingServiceIcon],
          deliverables: [
            "Scenario and virtual crowd simulations in Unity3D and C#",
            "Literature reviews, experimental design, and system prototyping",
            "Technical documentation and scientific editing in LaTeX / Overleaf",
          ],
        },
        {
          title: "Academy, Courses & Personalized Tutoring",
          badge: "Isla de Margarita & Online",
          description:
            "Modular courses and 1-on-1 tutoring in High School Mathematics, Pre-University Math, Quantitative Reasoning, and Intro to Programming.",
          icons: [teachingServiceIcon, learningServiceIcon],
          deliverables: [
            "In-person 1-on-1 or small-group lessons in Isla de Margarita",
            "Live online sessions with interactive whiteboard and hands-on practice",
            "University admission prep using Grupo Escalera methodology",
          ],
          isClassesRouteCta: true,
          ctaLabel: "Open Academy & Courses Portal →",
        },
      ],
    },
    classesSection: {
      tag: "Academy, Courses & Tutoring",
      title: "In-Person Classes (Isla de Margarita) & Live Online",
      subtitle:
        "High School Math, Pre-University Math & Quantitative Reasoning (Grupo Escalera Methodology), and Intro to Programming",
      intro:
        "Personalized instruction in Isla de Margarita (Venezuela) and live online worldwide. As a former member and instructor at Grupo Escalera, I combine proven pre-university preparation methods with my background as a Computer Engineer (USB) and M.Sc. graduate from France (Télécom SudParis / IP Paris).",
      backToPortfolioLabel: "← View Engineering & Research Portfolio",
      credentialBanner: {
        badge: "Proven Teaching Track Record",
        title: "Former Grupo Escalera Instructor · USB Engineer (GPA 4.3/5.0)",
        description:
          "First-hand mastery of the syllabi, academic rigor, and strategic problem-solving techniques required for university admission exams (USB, UCV, UCAB, UNIMET, UDO) and first-year university courses in Engineering, Architecture, Medicine, and Sciences.",
        ctaButton: "Build my study plan ↓",
      },
      modalityGroupRatio: "1-on-1 · Small groups",
      catalogTitle: "Course & Tutoring Catalog by Area",
      catalogSubtitle:
        "Click on individual classes inside any card to request either the full course or only the specific topics you need.",
      filterTabs: [
        { id: "all", label: "All modalities" },
        { id: "presencial", label: "📍 In-Person (Margarita)" },
        { id: "online", label: "💻 Live Online" },
      ],
      modalityActiveText: {
        all: "In-Person (Margarita) / Online",
        presencial: "In-Person in Isla de Margarita",
        online: "Live Online",
      },
      labels: {
        targetAudience: "Designed for: ",
        fullCourseButton: (count) => `✓ Full Course (${count} classes)`,
        fullCourseSummary: (count) => `Full Course (${count} classes)`,
        defaultOpenSummary: "Full Course or custom module selection",
        defaultTutoringSummary: "Custom tutoring (Grades 7 to 11 / 1st to 5th Year)",
        yourSelection: "Your selection: ",
        whatsappBtn: "Request via WhatsApp",
        emailBtn: "Request via Email",
        quickInquiryTag: "Custom Inquiry",
        quickInquiryTitle:
          "Want to enroll in a course or schedule a tutoring session?",
        quickInquirySubtitle:
          "Select the course or school year, your preferred modality (Isla de Margarita or Online), and any specific topics you want to cover.",
        courseFieldLabel: "Area or Course",
        modalityFieldLabel: "Preferred Modality",
        modalityOptions: [
          {
            value: "In-Person in Isla de Margarita",
            label: "📍 In-Person in Isla de Margarita",
          },
          { value: "Live Online", label: "💻 Live Online" },
          {
            value: "Hybrid (Margarita + Online)",
            label: "🔄 Hybrid (Margarita + Online)",
          },
        ],
        noteFieldLabel:
          "School topic, target university, or specific classes of interest (optional)",
        notePlaceholder:
          "E.g. 9th grade factoring review / Preparing for Engineering admission and interested in the full course...",
        sendWhatsappBtn: "Send Inquiry via WhatsApp",
        sendEmailBtn: (email) => `Send Inquiry via Email (${email})`,
        waIntro:
          "Hello Rafael, I visited your website and would like information about your classes.",
        waCourse: "Area / Course",
        waModality: "Modality",
        waSelection: "Selected Classes / Level",
        waNote: "Additional topic or details",
        mailSubjectPrefix: "Class Inquiry",
        mailGreeting:
          "Hello Rafael,\n\nI would like to inquire about availability and details for personalized classes:",
        mailClosing: "Thank you!",
      },
      modalities: [
        {
          id: "presencial",
          badge: "📍 Isla de Margarita",
          title: "In-Person Modality (Isla de Margarita)",
          description:
            "Individual (1-on-1) or small-group sessions in Isla de Margarita. Detailed face-to-face explanations, step-by-step review of school assignments, and supervised practice.",
          highlights: [
            "Personalized 1-on-1 or small study group attention",
            "Tailored to the student's pace and school/university syllabus",
            "Guided problem-solving with worksheets and past exams",
          ],
        },
        {
          id: "online",
          badge: "💻 Live Online",
          title: "Live Online Modality (Worldwide)",
          description:
            "Interactive video sessions with a digital whiteboard, downloadable study materials, and real-time guided practice from anywhere.",
          highlights: [
            "100% live interactive whiteboard and step-by-step problem solving",
            "Digital notes, exercise worksheets, and session code provided",
            "Flexible scheduling for single tutoring sessions or full courses",
          ],
        },
      ],
      programs: [
        {
          id: "mat-bachillerato",
          category: "High School · 1st to 5th Year",
          formatType: "Custom Tutoring (Tailored to School)",
          title: "High School Mathematics (Sciences & Humanities)",
          modality: ["presencial", "online"],
          modalityLabel: "In-Person (Margarita) / Online",
          level: "1st to 5th Year of High School (Grades 7–11)",
          targetAudience:
            "High school students (Sciences or Humanities tracks) looking to reinforce their school lessons, deeply understand concepts, and improve their grades.",
          description:
            "Complementary tutoring aligned with what the student is currently learning at school. Instead of a rigid pre-set syllabus, each session adapts directly to the student's school assignments, upcoming exams, and questions with detailed, patient explanations.",
          selectionHint:
            "Select the student's school year (you can specify the exact school topic when sending your inquiry):",
          allowFullCourse: false,
          modules: [
            {
              id: "bach-1",
              code: "1st Year",
              title:
                "1st Year — Arithmetic, Integers (ℤ), Fractions (ℚ), Basic Equations & Introductory Geometry",
            },
            {
              id: "bach-2",
              code: "2nd Year",
              title:
                "2nd Year — Polynomials, Notable Products, Linear/Affine Functions & Triangle Congruence",
            },
            {
              id: "bach-3",
              code: "3rd Year",
              title:
                "3rd Year — Real Numbers (ℝ), Radicals, Factoring, Quadratic Equations, Linear Systems & Pythagoras/Thales",
            },
            {
              id: "bach-4",
              code: "4th Year",
              title:
                "4th Year (Sciences / Humanities) — Functions, Trigonometry, Logarithms, Sequences, Vectors & Statistics",
            },
            {
              id: "bach-5",
              code: "5th Year",
              title:
                "5th Year (Sciences / Humanities) — Advanced Polynomials, Matrices/Determinants, Analytic Geometry (Conics), Combinatorics & Intro to Calculus",
            },
          ],
        },
        {
          id: "mat-preuniversitaria",
          category: "Pre-University Preparation",
          formatType: "Modular Course (Full Course or Selected Classes)",
          title: "Pre-University Mathematics",
          modality: ["presencial", "online"],
          modalityLabel: "In-Person (Margarita) / Online",
          level: "High School Seniors · Graduates · Incoming University Freshmen",
          targetAudience:
            "Future Engineering, Architecture, Medicine, Science, and Economics students who want rock-solid mathematical foundations to pass admission exams and excel in Calculus I / University Math.",
          description:
            "Structured around top Venezuelan pre-university curricula (Grupo Escalera / Propedéutico Benjamín Franklin). Divided into well-defined, standalone classes: students can take the complete course or request only the specific topics they need.",
          selectionHint:
            "Choose 'Full Course' or select the specific classes you want to take:",
          allowFullCourse: true,
          modules: [
            {
              id: "mpre-1",
              code: "Class 1",
              title:
                "Number Sets (ℕ, ℤ, ℚ, ℝ), Fractions, Exponents, Radicals & Rationalization",
            },
            {
              id: "mpre-2",
              code: "Class 2",
              title:
                "Polynomials: Operations, Notable Products, Synthetic Division (Ruffini) & Remainder Theorem",
            },
            {
              id: "mpre-3",
              code: "Class 3",
              title:
                "Complete Factoring Techniques & Algebraic Fractions Simplification",
            },
            {
              id: "mpre-4",
              code: "Class 4",
              title:
                "Linear, Quadratic, Radical & Absolute-Value Equations, and Systems of Equations",
            },
            {
              id: "mpre-5",
              code: "Class 5",
              title:
                "Inequalities, Intervals & Absolute-Value / Rational / Quadratic Inequations",
            },
            {
              id: "mpre-6",
              code: "Class 6",
              title:
                "Real Functions: Domain, Range, Graphs, Linear, Quadratic, Exponential & Logarithmic Functions",
            },
            {
              id: "mpre-7",
              code: "Class 7",
              title:
                "Plane, Solid & Analytic Geometry (Triangles, Circles, Areas, Volumes, Lines & Basic Conics)",
            },
            {
              id: "mpre-8",
              code: "Class 8",
              title:
                "Trigonometry: Unit Circle, Trigonometric Ratios, Identities, Equations, Law of Sines & Cosines",
            },
          ],
        },
        {
          id: "hab-cuantitativa",
          category: "Academic Aptitude · Grupo Escalera Methodology",
          formatType: "Modular Course (Full Course or Selected Classes)",
          title: "Pre-University Quantitative Reasoning",
          modality: ["presencial", "online"],
          modalityLabel: "In-Person (Margarita) / Online",
          level: "University Admission Exams · Quantitative Aptitude · Logic",
          targetAudience:
            "Students preparing for university admission and aptitude tests (USB, UCV, UCAB, UNIMET, UDO, etc.) or standardized quantitative reasoning exams.",
          description:
            "Directly informed by my experience as a member and instructor at Grupo Escalera. Builds mental agility, strategic elimination, and fast algebraic modeling without a calculator. Available as a complete course or individual classes.",
          selectionHint:
            "Choose 'Full Course' or select the specific classes you want to take:",
          allowFullCourse: true,
          modules: [
            {
              id: "hcuant-1",
              code: "Class 1",
              title:
                "Strategic Arithmetic & Number Theory (Divisibility, Primes, LCM, GCD & Remainders)",
            },
            {
              id: "hcuant-2",
              code: "Class 2",
              title:
                "Ratios, Proportions, Direct/Inverse Variation, Rule of Three & Successive Percentages",
            },
            {
              id: "hcuant-3",
              code: "Class 3",
              title:
                "Word-Problem Modeling & Algebraic Translation (Age, Motion, Mixture & Shared-Work Problems)",
            },
            {
              id: "hcuant-4",
              code: "Class 4",
              title:
                "Numerical & Alphanumeric Sequences, Series, Mathematical Operators & Pattern Recognition",
            },
            {
              id: "hcuant-5",
              code: "Class 5",
              title:
                "Fast Geometric & Spatial Reasoning (Shaded Areas, Figure Proportions & Angle Relationships)",
            },
            {
              id: "hcuant-6",
              code: "Class 6",
              title:
                "Counting Principles, Combinatorics (Permutations, Variations, Combinations) & Classical Probability",
            },
            {
              id: "hcuant-7",
              code: "Class 7",
              title:
                "Descriptive Statistics (Mean, Median, Mode), Chart/Table Interpretation & Data Sufficiency",
            },
          ],
        },
        {
          id: "intro-programacion",
          category: "Computer Science & Programming",
          formatType: "Modular Course (Full Course or Selected Classes)",
          title: "Introduction to Programming & Computer Science",
          modality: ["presencial", "online"],
          modalityLabel: "In-Person (Margarita) / Online",
          level: "From Scratch · Pre-University · 1st-Year University",
          targetAudience:
            "High school students, incoming Engineering/CS freshmen, or beginners who want to learn algorithmic thinking and programming from the ground up.",
          description:
            "Organized under the same modular class structure: take the complete course from scratch or request specific modules to reinforce topics from your introductory university programming course.",
          selectionHint:
            "Choose 'Full Course' or select the specific classes you want to take:",
          allowFullCourse: true,
          modules: [
            {
              id: "prog-1",
              code: "Class 1",
              title:
                "Foundations of Computing, Algorithmic Thinking, Propositional Logic, Flowcharts & Pseudocode",
            },
            {
              id: "prog-2",
              code: "Class 2",
              title:
                "Variables, Data Types, Operators, Expressions & Input/Output (Python / C)",
            },
            {
              id: "prog-3",
              code: "Class 3",
              title:
                "Conditional Control Structures & Decision Making (if, else, elif, nested conditionals)",
            },
            {
              id: "prog-4",
              code: "Class 4",
              title:
                "Iterative Structures / Loops (while, for), Counters, Accumulators & Dry-Run Tracing",
            },
            {
              id: "prog-5",
              code: "Class 5",
              title:
                "Functions, Procedures, Parameter Passing, Variable Scope & Modular Design",
            },
            {
              id: "prog-6",
              code: "Class 6",
              title:
                "Core Data Structures: Arrays/Lists, 2D Matrices & String Manipulation",
            },
            {
              id: "prog-7",
              code: "Class 7",
              title:
                "Classic Algorithms (Search, Basic Sorting), Problem-Solving Strategies & Capstone Mini-Project",
            },
          ],
        },
      ],
    },
    footer: {
      tagline:
        "Computer Engineer · Data Scientist · Full-Stack Web Developer · R&D Researcher.",
      rights: "All rights reserved.",
      backToTop: "Back to top ↑",
    },
  },
};
