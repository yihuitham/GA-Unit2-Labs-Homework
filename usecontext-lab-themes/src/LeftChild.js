import React from "react";
import LeftGrandChild from "./LeftGrandChild";
import { useThemeContext } from "./ThemeContext";

export default function LeftChild() {
  return (
    <div style={useThemeContext()}>
      Left Child
      <LeftGrandChild />
    </div>
  );
}
