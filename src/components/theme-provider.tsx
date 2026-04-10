"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type ThemeContextValue = { theme: Theme; toggle: () => void };

const ThemeContext = createContext<ThemeContextValue | null>(null);
const STORAGE_KEY = "portfolio-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  // Sync React state with what the inline script already applied to <html>
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(stored ?? (prefersDark ? "dark" : "light"));
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";

    // Apply class + state directly (not via effect) so the View Transition
    // callback captures the final DOM state synchronously.
    const apply = () => {
      document.documentElement.classList.toggle("dark", next === "dark");
      localStorage.setItem(STORAGE_KEY, next);
      setTheme(next);
    };

    // View Transitions API: takes a full-page screenshot before and after
    // the DOM change, then cross-fades the two as a single image.
    // Every pixel changes at exactly the same time — no "wave" effect.
    if (typeof document.startViewTransition === "function") {
      document.startViewTransition(apply);
    } else {
      apply();
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}
