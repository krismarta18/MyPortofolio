"use client";

import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

function setTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");

  try {
    localStorage.setItem("theme", theme);
  } catch {
    // ignore
  }
}

export function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={() => {
        const currentlyDark = document.documentElement.classList.contains("dark");
        const nextTheme: Theme = currentlyDark ? "light" : "dark";
        setTheme(nextTheme);
      }}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/5 text-zinc-950 transition hover:bg-black/10 dark:border-white/15 dark:bg-white/5 dark:text-zinc-50 dark:hover:border-white/25 dark:hover:bg-white/10"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <Sun className="hidden h-4 w-4 dark:block" />
      <Moon className="block h-4 w-4 dark:hidden" />
    </button>
  );
}
