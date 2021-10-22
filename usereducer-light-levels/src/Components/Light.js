import React from "react";
import { useColorContext } from "../contexts/lightContext";

function Lights() {
  const [colorState, dispatch] = useColorContext();
  const styles = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "1px solid",
    background: colorState,
  };

  console.log(colorState);

  return <div style={styles}></div>;
}

export default Lights;
