/* eslint-disable react/prop-types */
import React from "react";
import { ImSearch } from "react-icons/im";
import { MdKeyboardVoice } from "react-icons/md";
import { useSearch } from "../../../context/SearchContext";
import useWindowSize from "../../../helpers/useWindowSize";

export default function SearchBar({ onChange, onSubmit }) {
  const { width } = useWindowSize();
  const { searchQuery, setShowSpecialSearchBar } = useSearch();

  return (
    <div className={`SearchBar  ${width <= 640 ? "smallSearch" : ""}`}>
      {width > 640 ? (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="search"
            value={searchQuery.value}
            onChange={onChange}
            placeholder="Search"
            autoComplete="false"
          />
          <button type="submit">
            <ImSearch size={20} data-tip="Search" data-for="navbar" />
          </button>
        </form>
      ) : (
        <button className="icon-container searchIcon" onClick={() => setShowSpecialSearchBar(true)}>
          <ImSearch size={20} data-tip="Search" data-for="navbar" />
        </button>
      )}

      <button className="icon-container voiceIcon">
        <MdKeyboardVoice size={25} data-tip="Search with your voice" data-for="navbar" />
      </button>
    </div>
  );
}
