import React, { createContext, useContext, useState } from "react";

const QueryContext = createContext();
const HasSearchedContext = createContext();

function useQueryContext() {
  return useContext(QueryContext);
}

function useHasSearchedContext() {
  return useContext(HasSearchedContext);
}

function TVMazeContextProvider({ children }) {
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  return (
    <QueryContext.Provider value={[query, setQuery]}>
      <HasSearchedContext.Provider value={[hasSearched, setHasSearched]}>
        {children}
      </HasSearchedContext.Provider>
    </QueryContext.Provider>
  );
}

export { TVMazeContextProvider, useQueryContext, useHasSearchedContext };
