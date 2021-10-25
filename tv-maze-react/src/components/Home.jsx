import React from "react";
import {
  TVMazeContextProvider,
  useHasSearchedContext,
} from "../context/TVMazeContext";
import Results from "./Results";
import SearchBar from "./SearchBar";

function Home() {
  const [hasSearched, setHasSearched] = useHasSearchedContext();
  return (
    <div className="home">
      <TVMazeContextProvider>
        <h1>React TV Maze</h1>
        {!hasSearched ? <SearchBar /> : <Results />}
      </TVMazeContextProvider>
    </div>
  );
}

export default Home;
