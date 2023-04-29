import React from 'react';
import LeftNav from './LeftNav'
import RightNav from "./RightNav";
import SearchBar from "./SearchBar";

export default function NavigationBar() {
  return <nav>
    <LeftNav />
    <SearchBar />
    <RightNav />
  </nav>;
}

