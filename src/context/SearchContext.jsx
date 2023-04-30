import React from "react";
import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

export const SearchContext = createContext();

export function SearchContextProvider({ children }) {
  const [showSpecialSearchBar, setShowSpecialSearchBar] = useState(false);

  return (
    <SearchContext.Provider value={{ showSpecialSearchBar, setShowSpecialSearchBar }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}

SearchContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};