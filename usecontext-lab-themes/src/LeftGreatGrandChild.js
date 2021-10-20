import React from "react";
import { useThemeContext } from "./ThemeContext";

export default function LeftGreatGrandChild(props) {
  return (
    <div style={useThemeContext()}>
      <p>Left Great Grandchild</p>
    </div>
  );
}
