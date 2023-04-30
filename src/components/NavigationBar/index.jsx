import React from "react";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import SearchBar from "./SearchBar";
import { ImSearch } from "react-icons/im";
import { MdKeyboardVoice } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import useWindowSize from "../../helpers/useWindowSize";
import { useSearch } from "../../context/SearchContext";

export default function NavigationBar() {
  const { width } = useWindowSize();

  const { showSpecialSearchBar, setShowSpecialSearchBar } = useSearch();


  const specialSearchBarRender = (
    <div className="special_searchbar">
      <button onClick={() => setShowSpecialSearchBar(false)}>
        <BiArrowBack size={25} />
      </button>
      <form >
        <input
          type="text"
          name="search"
          placeholder="Search"
          autoComplete="false"
        />
        <button type="submit">
          <ImSearch size={20} data-tip="Search" data-for="navbar" />
        </button>
      </form>
      <button className="icon-container voiceIcon">
        <MdKeyboardVoice size={25} data-tip="Search with your voice" data-for="navbar" />
      </button>
    </div>
  );
  return (
    <nav className="Navbar">
      {width <= 640 && showSpecialSearchBar ? (
        specialSearchBarRender
      ) : (
        <>
          <LeftNav />
          <SearchBar />
          <RightNav />
        </>
      )}
    </nav>
  );
}
