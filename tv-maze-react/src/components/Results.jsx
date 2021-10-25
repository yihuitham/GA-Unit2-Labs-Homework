import React from "react";
import showsData from "../showsData";
import Result from "./Result";
import { useHasSearchedContext } from "../context/TVMazeContext";

const generateResults = showsData.map((element) => {
  return <Result img={element.show.image.medium} title={element.show.name} />;
});

function Results() {
  const [hasSearched, setHasSearched] = useHasSearchedContext();
  function handleClick() {
    setHasSearched(false);
    console.log(hasSearched);
  }
  return (
    <>
      <button onClick={handleClick}>Search again</button>
      <div className="results">{generateResults}</div>
    </>
  );
}

export default Results;
