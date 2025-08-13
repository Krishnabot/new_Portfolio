import { useEffect, useState } from "react";

type Theme = "light" | "dark";
const STORAGE_KEY = "theme";

function systemPrefersDark() {
  const m = window.matchMedia?.("(prefers-color-scheme: dark)");
  return !!m?.matches;
}

function getInitialTheme(): Theme {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    // ignore LocalStorage errors
  }
  return systemPrefersDark() ? "dark" : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");

    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // iGnore localStorage errors
    }
  }, [theme]);

  useEffect(() => {
    const mql = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mql) return;

    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return;

    const handler = (e: MediaQueryListEvent) =>
      setTheme(e.matches ? "dark" : "light");

    mql.addEventListener?.("change", handler);
    return () => mql.removeEventListener?.("change", handler);
  }, []);

  return { resolvedTheme: theme, setTheme };
}
