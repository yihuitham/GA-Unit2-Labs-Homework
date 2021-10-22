import React from "react";
import { LightProvider } from "../contexts/lightContext";
import Controls from "./Controls";
import Light from "./Light";

function App() {
  const controls = ["off", "low", "medium", "high"];

  return (
    <div className="App">
      <LightProvider>
        <Controls controls={controls} />
        <Light />
      </LightProvider>
    </div>
  );
}

export default App;
