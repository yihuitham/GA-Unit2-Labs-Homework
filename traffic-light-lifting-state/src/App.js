import React, { useState } from "react";
import TrafficLight from "./components/TrafficLight";

export default function App() {
  const [light, setlight] = useState("");

  const stop = () => {
    setlight("stop");
  };
  const slow = () => {
    setlight("slow");
  };
  const go = () => {
    setlight("go");
  };

  return (
    <>
      <div className="App">
        <h1>Traffic Light</h1>
      </div>
      <section>
        <div id="control-panel">
          <h2 id="stop" className="button" onClick={stop}>
            Stop
          </h2>
          <h2 id="slow" className="button" onClick={slow}>
            Slow
          </h2>
          <h2 id="go" className="button" onClick={go}>
            Go
          </h2>
        </div>
        <TrafficLight light = {light}/>
      </section>
    </>
  );
}
