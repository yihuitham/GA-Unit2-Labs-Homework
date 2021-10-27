import React, { createContext, useContext, useState } from "react";

const QueryContext = createContext();
const HasSearchedContext = createContext();
const Results = createContext();

function useQueryContext() {
  return useContext(QueryContext);
}

function useHasSearchedContext() {
  return useContext(HasSearchedContext);
}

function useResultsContext() {
  return useContext(Results);
}

function TVMazeContextProvider({ children }) {
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [fetchResults, setFetchResults] = useState([]);
  return (
    <QueryContext.Provider value={[query, setQuery]}>
      <HasSearchedContext.Provider value={[hasSearched, setHasSearched]}>
        <Results.Provider value={[fetchResults, setFetchResults]}>
          {children}
        </Results.Provider>
      </HasSearchedContext.Provider>
    </QueryContext.Provider>
  );
}

export {
  TVMazeContextProvider,
  useQueryContext,
  useHasSearchedContext,
  useResultsContext,
};
