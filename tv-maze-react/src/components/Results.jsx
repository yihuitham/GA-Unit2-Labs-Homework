import React, { useState } from "react";
import showsData from "../showsData";
import Result from "./Result";
import {
  useHasSearchedContext,
  useQueryContext,
  useResultsContext,
} from "../context/TVMazeContext";

function Results() {
  const [query, setQuery] = useQueryContext();
  const [hasSearched, setHasSearched] = useHasSearchedContext();
  const url = `https://api.tvmaze.com/search/shows?q=${query}`;
  const [fetchResults, setFetchResults] = useResultsContext();
  // const filteredResults = showsData.filter((element) => {
  //   return element.show.name.toLowerCase().includes(query.toLowerCase());
  // });

  // const getResults = async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   if (response.ok) {
  //     console.log("data", data);
  //     setFetchResults(data);
  //   } else {
  //     console.log("error >>>", data);
  //   }
  // };
  // // getResults();
  // console.log("line 28", fetchResults);

  console.log(query);
  const checkResults = fetchResults.filter(
    (element) => element.show.image !== null
  );
  console.log(checkResults.length);
  const generateResults = checkResults.map((element, index) => {
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
