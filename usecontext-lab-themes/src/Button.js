import React from "react";
import { useToggleTheme } from "./ThemeContext";

export default function Button() {
  const toggleTheme = useToggleTheme();
  return <button onClick={toggleTheme}>Toggle Themes</button>;
}
