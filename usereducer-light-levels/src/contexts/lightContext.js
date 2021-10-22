import React, { createContext, useContext, useReducer } from "react";
import lightData from "../lightData";

const NameContext = createContext();
const ColorContext = createContext();

const nameArray = lightData.map((element) => element.name);
const lightColorArray = lightData.map((element) => element.color);

const colorReducer = (state, action) => {
  switch (action) {
    case "off":
      return lightColorArray[0];
    case "low":
      return lightColorArray[1];
    case "med":
      return lightColorArray[2];
    case "high":
      return lightColorArray[3];
    default:
      return lightColorArray[0];
  }
};

function useNameContext() {
  return useContext(NameContext);
}

function useColorContext() {
  return useContext(ColorContext);
}

function LightProvider({ children }) {
  const [colorState, dispatch] = useReducer(colorReducer, lightColorArray[0]);
  console.log(nameArray, lightColorArray);
  return (
    <ColorContext.Provider value={[colorState, dispatch]}>
      <NameContext.Provider value={nameArray}>{children}</NameContext.Provider>
    </ColorContext.Provider>
  );
}

export { LightProvider, useNameContext, useColorContext };
