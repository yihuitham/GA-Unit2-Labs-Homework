import React from "react";
import { useHasSearchedContext } from "../context/TVMazeContext";
import Results from "./Results";
import SearchBar from "./SearchBar";

function Home() {
  const [hasSearched, setHasSearched] = useHasSearchedContext();
  return (
    <div className="home">
      <h1>React TV Maze</h1>
      {!hasSearched ? <SearchBar /> : <Results />}
    </div>
  );
}

export default Home;
