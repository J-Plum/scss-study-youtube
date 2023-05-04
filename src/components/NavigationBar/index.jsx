import React from "react";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import SearchBar from "./SearchBar/index";
import { ImSearch } from "react-icons/im";
import { MdKeyboardVoice } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import useWindowSize from "../../helpers/useWindowSize";
import { useSearch } from "../../context/SearchContext";
import { search } from "../../api/axios";
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const { width } = useWindowSize();
  const { searchQuery, setSearchQuery, showSpecialSearchBar, setShowSpecialSearchBar } =
    useSearch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchQuery({
      ...searchQuery,
      input: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchQuery.input !== "") {
      search(searchQuery.input).then((res) => {
        setSearchQuery({ ...searchQuery, videos: res });
      });
      navigate(`results/${searchQuery.input}`);
    }
  };

  const specialSearchBarRender = (
    <div className="special_searchbar">
      <button onClick={() => setShowSpecialSearchBar(false)}>
        <BiArrowBack size={25} />
      </button>
      <form onSubmit={handleSubmit}>
        <input
          value={searchQuery.input}
          onChange={handleChange}
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
          <SearchBar onChange={handleChange} onSubmit={handleSubmit} />
          <RightNav />
        </>
      )}
    </nav>
  );
}
