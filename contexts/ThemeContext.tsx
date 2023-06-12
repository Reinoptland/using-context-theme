import { Theme } from "@/entities/theme";
import { ReactNode, createContext, useContext, useState } from "react";

export const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({ theme: "Light", toggleTheme: () => {} });
export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderComponentProps {
  children: ReactNode;
}

const ThemeProviderComponent: React.FC<ThemeProviderComponentProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("Light");
  function toggleTheme() {
    setTheme(theme === "Light" ? "Dark" : "Light");
  }

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProviderComponent;
