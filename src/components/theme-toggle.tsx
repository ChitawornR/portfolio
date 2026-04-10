"use client";

import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="hover:cursor-pointer relative inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--background-elev)] text-[var(--accent)] transition-colors hover:border-[var(--accent)]"
    >
      <i className={`las ${isDark ? "la-sun" : "la-moon"} text-xl`} />
    </button>
  );
}
