import { useState, useEffect } from "react";

/**
 * Manages dark/light theme state.
 * Persists preference to localStorage and applies data-theme to <html>.
 * Returns { theme, toggleTheme, isDark }
 */
function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Read saved preference; default to dark
    const saved = localStorage.getItem("portfolio-theme") || "dark";
    // Set immediately (synchronously) so CSS kicks in before first React paint
    document.documentElement.setAttribute("data-theme", saved);
    return saved;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme, isDark: theme === "dark" };
}

export default useTheme;
