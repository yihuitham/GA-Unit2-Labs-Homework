import React from "react";
import {
  useHasSearchedContext,
  useQueryContext,
} from "../context/TVMazeContext";

function SearchBar() {
  const [query, setQuery] = useQueryContext();
  const [hasSearched, setHasSearched] = useHasSearchedContext();
  function handleQueryChange(e) {
    setQuery(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setHasSearched(true);
    console.log(hasSearched);
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
