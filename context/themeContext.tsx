"use client";
import {
  createContext,
  useState,
  type ReactNode,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

interface ThemeContextType {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light"); // default for SSR

  // Set theme on initial mount only (client-side)
  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const initial = stored || "light";
    setTheme(initial);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(initial);
  }, []);

  // Update DOM + storage whenever theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
