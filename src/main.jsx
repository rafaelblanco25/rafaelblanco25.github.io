import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NavBar from "./components/NavBar.jsx";
import IdBanner from "./components/IdBanner.jsx";
import ClassesBanner from "./components/ClassesBanner.jsx";
import AboutMeBanner from "./components/AboutMeBanner.jsx";
import ServicesBanner from "./components/ServicesBanner.jsx";
import ExperienceBanner from "./components/ExperienceBanner.jsx";
import EducationBanner from "./components/EducationBanner.jsx";
import ResearchBanner from "./components/ResearchBanner.jsx";
import CoursesBanner from "./components/CoursesBanner.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-brand-bg text-white min-h-screen flex flex-col font-sans">
      <NavBar />
      <IdBanner />
      <main className="flex-1">
        <ClassesBanner />
        <AboutMeBanner />
        <ServicesBanner />
        <ExperienceBanner />
        <EducationBanner />
        <ResearchBanner />
        <CoursesBanner />
      </main>
      <Footer />
    </div>
  </StrictMode>
);
