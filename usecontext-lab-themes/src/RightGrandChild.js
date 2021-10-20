import React from "react";
import { useThemeContext } from "./ThemeContext";

export default function RightGrandChild() {
  return <div style={useThemeContext()}>Right Grandchild</div>;
}
