import { useState, useEffect, useCallback, createContext, useContext } from "react";

type Theme = "light" | "dark" | "liquid-glass" | "y2k";

const ThemeContext = createContext<{ theme: Theme; setTheme: (t: Theme) => void }>({
  theme: "light",
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("focuscoin-theme") as Theme;
      if (stored) return stored;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "liquid-glass", "y2k");
    if (theme === "dark") root.classList.add("dark");
    if (theme === "liquid-glass") root.classList.add("liquid-glass");
    if (theme === "y2k") root.classList.add("y2k");
    localStorage.setItem("focuscoin-theme", theme);
  }, [theme]);

  const setTheme = useCallback((t: Theme) => setThemeState(t), []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
