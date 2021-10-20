import React from "react";
import "./styles.css";
import Button from "./Button";
import LeftComp from "./LeftComp";
import RightComp from "./RightComp";
import { ThemeProvider } from "./ThemeContext";

export default function App() {
  return (
    <div className="App">
      <h2>Click the button to toggle themes</h2>
      <ThemeProvider>
        {/* <button onClick={useToggleTheme}>Toggle Themes</button> */}
        <Button />
        <div className="children">
          <LeftComp />
          <RightComp />
        </div>
      </ThemeProvider>
    </div>
  );
}
