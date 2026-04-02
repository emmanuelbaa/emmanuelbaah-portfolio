import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark" || 
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed bottom-6 left-6 z-[100] flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700 bg-slate-950/80 p-3 shadow-xl backdrop-blur-md transition-all hover:scale-110 text-cyan-300"
      aria-label="Toggle Theme"
    >
      {isDark ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};
