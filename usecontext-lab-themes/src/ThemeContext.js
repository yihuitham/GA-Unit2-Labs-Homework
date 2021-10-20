import React, { createContext, useContext, useState } from "react";

const themes = {
  light: {
    background: "lightblue",
    color: "black"
  },
  dark: {
    background: "#222222",
    color: "white"
  }
};

let dark = false;

const ThemeContext = createContext();
const ToggleTheme = createContext();

function useThemeContext() {
  return useContext(ThemeContext);
}

function useToggleTheme() {
  return useContext(ToggleTheme);
}

function ThemeProvider({ children }) {
  const [activeTheme, setActiveTheme] = useState(themes.light);

  const toggleTheme = () => {
    dark = !dark;
    dark ? setActiveTheme(themes.dark) : setActiveTheme(themes.light);
  };

  return (
    <ThemeContext.Provider value={activeTheme}>
      <ToggleTheme.Provider value={toggleTheme}>
        {children}
      </ToggleTheme.Provider>
    </ThemeContext.Provider>
  );
}

export { useThemeContext, useToggleTheme, ThemeProvider };
