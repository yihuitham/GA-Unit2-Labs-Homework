import React, { createContext, useContext, useReducer } from "react";
import lightData from "../lightData";

const LightContext = createContext();

const lightReducer = (state, action) => {
  switch (action) {
    case "off":
      return lightData[0];
    case "low":
      return lightData[1];
    case "medium":
      return lightData[2];
    case "high":
      return lightData[3];
    default:
      return lightData[0];
  }
};

function useLightContext() {
  return useContext(LightContext);
}

function LightProvider({ children }) {
  const [lightState, dispatch] = useReducer(lightReducer, lightData[0]);
  return (
    <LightContext.Provider value={[lightState, dispatch]}>
      {children}
    </LightContext.Provider>
  );
}

export { LightProvider, useLightContext };
