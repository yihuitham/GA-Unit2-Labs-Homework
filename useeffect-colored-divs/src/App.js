import React, { useEffect, useState } from "react";
import "./styles.css";
import ColoredDiv from "./ColoredDiv";

export default function App() {
  const [colors, setColors] = useState(["lightgreen", "pink", "lightblue"]);
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  const colorsArr = colors.map((d, i) => {
    return <ColoredDiv color={d} key={i} index={i} width={width}/>;
  });

  const addNewColor = () => {
    setColors([...colors,"white"]);
    console.log(colors);
    
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
  },[]);

  return (
    <div className="App">
      <h1>Current Window Width: {width}</h1>
      <div className="colored-divs">{colorsArr}</div>
      <button 
      onClick={addNewColor}
      >Add New Color</button>
    </div>
  );
}
