import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import IdBanner from "./components/IdBanner.jsx";
import AboutMeBanner from "./components/AboutMeBanner.jsx";
import ServicesBanner from "./components/ServicesBanner.jsx";
import EducationBanner from "./components/EducationBanner.jsx";
import ResearchBanner from "./components/ResearchBanner.jsx";
import ExperienceBanner from "./components/ExperienceBanner.jsx";

import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <div className="bg-gradient-to-r to-bordeaux from-black">
        <IdBanner />
        <AboutMeBanner />
        <ServicesBanner />
        <ExperienceBanner />
        <EducationBanner />
        <ResearchBanner />
      </div>
    </ThemeProvider>
  </StrictMode>
);

// todo
// 5. Courses
