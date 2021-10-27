import React from "react";
import showsData from "../showsData";
import Result from "./Result";
import {
  useHasSearchedContext,
  useQueryContext,
} from "../context/TVMazeContext";

function Results() {
  const [query, setQuery] = useQueryContext();
  const [hasSearched, setHasSearched] = useHasSearchedContext();
  const filteredResults = showsData.filter((element) => {
    return element.show.name.toLowerCase().includes(query.toLowerCase());
  });
  const generateResults = filteredResults.map((element, index) => {
    return (
      <Result
        key={index}
        img={element.show.image.medium}
        title={element.show.name}
      />
    );
  });

  function handleClick() {
    setHasSearched(false);
    setQuery("");
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
