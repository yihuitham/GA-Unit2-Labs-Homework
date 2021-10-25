import React from "react";
import { useHasSearchedContext } from "../context/TVMazeContext";

function SearchBar() {
  const [hasSearched, setHasSearched] = useHasSearchedContext();
  function handleSubmit(e) {
    e.preventDefault();
    setHasSearched(true);
    console.log(hasSearched);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name="search" type="text" placeholder="Enter a show name.." />
      <input value="Search" type="submit" />
    </form>
  );
}

export default SearchBar;
