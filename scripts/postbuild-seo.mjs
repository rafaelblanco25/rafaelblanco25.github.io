import fs from "node:fs";
import path from "node:path";

const distDir = path.resolve("dist");
const rootHtmlPath = path.join(distDir, "index.html");

if (!fs.existsSync(rootHtmlPath)) {
  console.error("dist/index.html not found. Run vite build first.");
  process.exit(1);
}

const baseHtml = fs.readFileSync(rootHtmlPath, "utf8");

// Copy 404.html for GitHub Pages SPA fallback
fs.writeFileSync(path.join(distDir, "404.html"), baseHtml, "utf8");

const classesTitle =
  "Clases de Matemática y Programación en Isla de Margarita y Online | Rafael Blanco";
const classesDescription =
  "Clases personalizadas de Matemática de Bachillerato (1ero a 5to año), Matemática Preuniversitaria, Habilidad Cuantitativa (Metodología Grupo Escalera) e Introducción a la Programación. Presencial en Isla de Margarita y Online en vivo. WhatsApp: +58 412-7077579.";
const classesUrl = "https://rafaelblanco25.github.io/clases";
const classesOgImage = "https://rafaelblanco25.github.io/og-clases.png";

const classesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://rafaelblanco25.github.io/clases#academy",
      name: "Rafael Blanco — Academia, Clases y Asesorías (Isla de Margarita & Online)",
      url: classesUrl,
      telephone: "+58-412-7077579",
      email: "rblancog25@gmail.com",
      description: classesDescription,
      areaServed: [
        {
          "@type": "Place",
          name: "Isla de Margarita, Nueva Esparta, Venezuela",
        },
        {
          "@type": "Country",
          name: "Venezuela",
        },
      ],
      founder: {
        "@type": "Person",
        name: "Rafael Blanco",
        jobTitle: "Ingeniero en Computación & Magíster en Ciencias de la Computación",
        alumniOf: [
          "Universidad Simón Bolívar (USB)",
          "Télécom SudParis — Institut Polytechnique de Paris",
          "Universitat Politècnica de Catalunya (UPC)",
        ],
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Catálogo de Cursos y Asesorías",
        itemListElement: [
          {
            "@type": "Course",
            name: "Matemática para Bachillerato (1er a 5to Año — Ciencias y Humanidades)",
            description:
              "Asesorías personalizadas adaptadas al tema, guía o examen del colegio del estudiante en Isla de Margarita y Online en vivo.",
            provider: {
              "@id": "https://rafaelblanco25.github.io/clases#academy",
            },
          },
          {
            "@type": "Course",
            name: "Matemática Preuniversitaria (Curso Modular de 8 Clases)",
            description:
              "Curso estructurado bajo metodología preuniversitaria (Grupo Escalera / Propedéutico) desde conjuntos numéricos y factorización hasta funciones, geometría y trigonometría.",
            provider: {
              "@id": "https://rafaelblanco25.github.io/clases#academy",
            },
          },
          {
            "@type": "Course",
            name: "Habilidad Cuantitativa Preuniversitaria (Metodología Grupo Escalera)",
            description:
              "Preparación para pruebas de admisión universitaria (USB, UCV, UCAB, UNIMET, UDO) con técnicas de agilidad mental y resolución estratégica sin calculadora.",
            provider: {
              "@id": "https://rafaelblanco25.github.io/clases#academy",
            },
          },
          {
            "@type": "Course",
            name: "Introducción a la Programación y a la Computación (Python / C)",
            description:
              "Curso modular desde cero en pensamiento algorítmico, lógica, estructuras de control, funciones y estructuras de datos para bachillerato y primer año universitario.",
            provider: {
              "@id": "https://rafaelblanco25.github.io/clases#academy",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cómo funcionan las clases presenciales en la Isla de Margarita?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Las sesiones presenciales son individuales (1-a-1) o en grupos reducidos de compañeros. Coordinamos directamente por WhatsApp (+58 412-7077579) la ubicación y el horario más conveniente en la isla, trabajando paso a paso sobre las guías del colegio, exámenes previos o el temario preuniversitario.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué necesito para ver clases en la modalidad Online en Vivo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Solo necesitas computador, tablet o teléfono con conexión a internet. Las clases son 100% en vivo por videollamada utilizando pizarra digital interactiva donde ves cada desarrollo paso a paso en tiempo real y recibes los apuntes digitales al finalizar.",
          },
        },
        {
          "@type": "Question",
          name: "¿Debo inscribir un curso completo o puedo solicitar clases puntuales?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tienes total flexibilidad: en Bachillerato nos adaptamos al examen o guía de tu colegio, y en los cursos Preuniversitarios y de Programación puedes cursar el programa completo o seleccionar únicamente los módulos específicos que necesites reforzar.",
          },
        },
      ],
    },
  ],
};

let classesHtml = baseHtml
  .replace(/<title>[\s\S]*?<\/title>/, `<title>${classesTitle}</title>`)
  .replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${classesDescription}" />`
  )
  .replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${classesUrl}" />`
  )
  .replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${classesTitle}" />`
  )
  .replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${classesDescription}" />`
  )
  .replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${classesUrl}" />`
  )
  .replace(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:image" content="${classesOgImage}" />`
  )
  .replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${classesTitle}" />`
  )
  .replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${classesDescription}" />`
  )
  .replace(
    /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:image" content="${classesOgImage}" />`
  )
  .replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">${JSON.stringify(classesJsonLd)}</script>`
  );

for (const routeFolder of ["clases", "classes"]) {
  const routeDir = path.join(distDir, routeFolder);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, "index.html"), classesHtml, "utf8");
}

console.log("Generated SEO-optimized dist/clases/index.html, dist/classes/index.html, and dist/404.html");
