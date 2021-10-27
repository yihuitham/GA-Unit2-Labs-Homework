import React from "react";
import {
  useHasSearchedContext,
  useQueryContext,
  useResultsContext,
} from "../context/TVMazeContext";

function SearchBar() {
  const [query, setQuery] = useQueryContext();
  const [hasSearched, setHasSearched] = useHasSearchedContext();
  const [fetchResults, setFetchResults] = useResultsContext();
  const url = `https://api.tvmaze.com/search/shows?q=${query}`;
  // const filteredResults = showsData.filter((element) => {
  //   return element.show.name.toLowerCase().includes(query.toLowerCase());
  // });

  const getResults = async () => {
    const response = await fetch(url);
    const data = await response.json();
    if (response.ok) {
      console.log("data", data);
      setFetchResults(data);
    } else {
      console.log("error >>>", data);
    }
  };

  function handleQueryChange(e) {
    setQuery(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setHasSearched(true);
    // console.log(hasSearched);
    getResults();
  }
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <input
        name="search"
        type="text"
        placeholder="Enter a show name.."
        onChange={handleQueryChange}
      />
      <input value="Search" type="submit" />
    </form>
  );
}

export default SearchBar;
