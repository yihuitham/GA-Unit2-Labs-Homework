import React from "react";
import { useLightContext } from "../contexts/lightContext";

function Lights() {
  const [lightState, dispatch] = useLightContext();
  const styles = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "1px solid",
    background: lightState.color,
  };

  return <div style={styles}></div>;
}

export default Lights;
