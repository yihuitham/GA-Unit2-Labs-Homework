import React from "react";

export default function (props) {
  let stopColor;
  let slowColor;
  let goColor;
  switch (props.light) {
    case "stop":
      stopColor = "red";
      slowColor = "#111";
      goColor = "#111";
      break;

    case "slow":
      stopColor = "#111";
      slowColor = "orange";
      goColor = "#111";
      break;

    case "go":
      stopColor = "#111";
      slowColor = "#111";
      goColor = "green";
      break;

    default:
      stopColor = "#111";
      slowColor = "#111";
      goColor = "#111";
      break;
  }
  return (
    <div id="traffic-lights">
      <div
        className="bulb"
        style={{
          backgroundColor: stopColor
        }}
      ></div>
      <div
        className="bulb"
        style={{
          backgroundColor: slowColor
        }}
      ></div>
      <div
        className="bulb"
        style={{
          backgroundColor: goColor
        }}
      ></div>
    </div>
  );
}
