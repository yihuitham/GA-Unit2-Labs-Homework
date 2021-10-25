import React from "react";

function Result(props) {
  return (
    <>
      <div className="result">
        <img src={props.img} alt={props.title} />
        <h4>{props.title}</h4>
      </div>
    </>
  );
}

export default Result;
