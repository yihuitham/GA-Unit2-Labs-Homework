import React from "react";
import { useNameContext, useColorContext } from "../contexts/lightContext";

function Controls(props) {
  const nameArray = useNameContext();
  const [colorState, dispatch] = useColorContext();

  const lightButtons = nameArray.map((d, i) => {
    return (
      <button
        key={i}
        onClick={() => {
          {
            dispatch(d);
          }
          console.log(d);
        }}
      >
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
