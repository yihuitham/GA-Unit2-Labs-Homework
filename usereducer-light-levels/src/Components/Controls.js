import React from "react";
import { useLightContext } from "../contexts/lightContext";

function Controls(props) {
  const [lightState, dispatch] = useLightContext();

  const lightButtons = props.controls.map((d, i) => {
    return (
      <button key={i} onClick={() => dispatch(d)}>
        {d}
      </button>
    );
  });

  return (
    <>
      <div className="controls">{lightButtons}</div>
    </>
  );
}

export default Controls;
