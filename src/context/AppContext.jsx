/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { ASSETS, CONTENT } from "../data/profile";

const AppContext = createContext(null);

function detectViewFromLocation() {
  const path = window.location.pathname.toLowerCase().replace(/\/+$/, "");
  const hash = window.location.hash.toLowerCase();
  const params = new URLSearchParams(window.location.search);
  if (
    path.endsWith("/clases") ||
    path.endsWith("/classes") ||
    hash.startsWith("#/clases") ||
    hash.startsWith("#/classes") ||
    params.get("view") === "clases" ||
    params.get("view") === "classes"
  ) {
    return "classes";
  }
  return "portfolio";
}

export function AppProvider({ children }) {
  const [view, setView] = useState(() => detectViewFromLocation());
  const [userChoseLang, setUserChoseLang] = useState(false);
  const [lang, setLangState] = useState(() => {
    const initialView = detectViewFromLocation();
    return initialView === "classes" ? "es" : "en";
  });

  const setLang = (nextLang) => {
    setUserChoseLang(true);
    setLangState(nextLang);
  };

  const navigateTo = (targetView, hash = "") => {
    const targetPath =
      targetView === "classes"
        ? `/clases${hash}`
        : `/${hash}`;
    window.history.pushState({}, "", targetPath);
    setView(targetView);
    if (!userChoseLang) {
      setLangState(targetView === "classes" ? "es" : "en");
    }
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const onPopState = () => {
      const nextView = detectViewFromLocation();
      setView(nextView);
      if (!userChoseLang) {
        setLangState(nextView === "classes" ? "es" : "en");
      }
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [userChoseLang]);

  useEffect(() => {
    const dict = CONTENT[lang];
    document.documentElement.lang = lang;
    const isClasses = view === "classes";
    document.title = isClasses ? dict.meta.classesTitle : dict.meta.title;

    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) {
      descEl.setAttribute(
        "content",
        isClasses ? dict.meta.classesDescription : dict.meta.description
      );
    }

    const canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonicalEl) {
      canonicalEl.setAttribute(
        "href",
        isClasses
          ? "https://rafaelblanco25.github.io/clases"
          : "https://rafaelblanco25.github.io/"
      );
    }
  }, [lang, view]);

  const value = {
    lang,
    setLang,
    view,
    navigateTo,
    t: CONTENT[lang],
    assets: ASSETS,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useApp must be used within AppProvider");
  }
  return ctx;
}
