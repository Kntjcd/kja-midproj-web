"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme:       Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme:       "light",
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  // Apply theme class on DOM only — no setState inside effect
  useEffect(() => {
    const stored      = localStorage.getItem("kja-theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const resolved    = stored ?? (prefersDark ? "dark" : "light");

    // Only touch the DOM — do NOT call setTheme here
    document.documentElement.classList.toggle("dark", resolved === "dark");

    // Sync React state using a timeout so it's outside the effect body
    const id = setTimeout(() => setTheme(resolved), 0);
    return () => clearTimeout(id);
  }, []);

  function toggleTheme() {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem("kja-theme", next);
      document.documentElement.classList.toggle("dark", next === "dark");
      return next;
    });
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}