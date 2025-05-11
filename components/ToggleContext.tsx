'use client'

import React, { createContext, useContext, useEffect, useState } from "react";

// Define types
type ToggleContextType = {
  isToggled: boolean;
  toggle: () => void;
};

// Create the context
const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

// Provider component
export const ToggleProvider = ({ children }: { children: React.ReactNode }) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => setIsToggled((prev) => !prev);

  return (
    <ToggleContext.Provider value={{ isToggled, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

// Custom hook to use the context
export const useToggle = (): ToggleContextType => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error("useToggle must be used within a ToggleProvider");
  }
  return context;
};
