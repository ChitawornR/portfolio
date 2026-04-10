"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "profile", label: "Profile" },
  { href: "education", label: "Education" },
  { href: "activities", label: "Activities" },
  { href: "projects", label: "Projects" },
  { href: "contact", label: "Contact" },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const [active, setActive] = useState("profile");
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  // Track active section with IntersectionObserver (only when on home page).
  useEffect(() => {
    if (!isHome) return;

    const observers: IntersectionObserver[] = [];

    links.forEach(({ href }) => {
      const el = document.getElementById(href);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(href);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHome]);

  const go = (id: string) => {
    if (isHome) {
      scrollToId(id);
    } else {
      // Route back to home with the section hash and let the browser handle the anchor.
      router.push(`/#${id}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          type="button"
          onClick={() => go("profile")}
          className="hover:cursor-pointer font-mono text-sm font-bold tracking-tight text-[var(--foreground)]"
        >
          <span className="text-[var(--accent)]">&gt;_</span> chittaworn
          <span className="animate-blink text-[var(--accent)]">|</span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const isActive = isHome && active === l.href;
            return (
              <li key={l.href}>
                <button
                  type="button"
                  onClick={() => go(l.href)}
                  className={`hover:cursor-pointer relative rounded-md px-3 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                    isActive
                      ? "text-[var(--accent)]"
                      : "text-[var(--muted)] hover:text-[var(--accent)]"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-[var(--accent)]" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <ThemeToggle />
      </nav>
    </header>
  );
}
