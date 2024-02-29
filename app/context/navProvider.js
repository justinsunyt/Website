"use client";

import { createContext, useContext, useState, useMemo } from "react";

export const NavContext = createContext({
  currentSection: "home",
  setCurrentSection: () => null,
});

export function NavProvider({ children }) {
  const [currentSection, setCurrentSection] = useState("home");
  const value = useMemo(
    () => ({
      currentSection,
      setCurrentSection,
    }),
    [currentSection, setCurrentSection]
  );

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}

export const useNav = () => useContext(NavContext);
