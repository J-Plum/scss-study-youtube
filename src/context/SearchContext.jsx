import React from "react";
import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

export const SearchContext = createContext();

export function SearchContextProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState({
    input: "",
    videos: [],
  });

  const [showSpecialSearchBar, setShowSpecialSearchBar] = useState(false);

  return (
    <SearchContext.Provider
      value={{ showSpecialSearchBar, setShowSpecialSearchBar, searchQuery, setSearchQuery }}
    >
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
