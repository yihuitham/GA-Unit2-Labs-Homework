import React from "react";
import LeftGreatGrandChild from "./LeftGreatGrandChild";

export default function LeftGrandChild(props) {
  return (
    <div style={{ background: "white" }}>
      Left Grandchild
      <LeftGreatGrandChild />
    </div>
  );
}
