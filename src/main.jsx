import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NavBar from "./components/NavBar.jsx";
import IdBanner from "./components/IdBanner.jsx";
import AboutMeBanner from "./components/AboutMeBanner.jsx";
import ServicesBanner from "./components/ServicesBanner.jsx";
import EducationBanner from "./components/EducationBanner.jsx";
import ResearchBanner from "./components/ResearchBanner.jsx";
import ExperienceBanner from "./components/ExperienceBanner.jsx";
import CoursesBanner from "./components/CoursesBanner.jsx";
import Footer from "./components/Footer.jsx";

import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <div className="bg-puzzle-style min-h-screen flex flex-col">
        <NavBar />
        <IdBanner />
        <main className="flex-1">
          <AboutMeBanner />
          <ServicesBanner />
          <ExperienceBanner />
          <EducationBanner />
          <CoursesBanner />
          <ResearchBanner />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  </StrictMode>
);
