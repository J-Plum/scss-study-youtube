import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import SideBar from "./components/SideBar";
import { SearchContextProvider } from "./context/SearchContext";

function App() {
  return (
    <>
      <SearchContextProvider>
        <NavigationBar />
        <SideBar />
        <main>
          <Outlet />
        </main>
      </SearchContextProvider>
    </>
  );
}

export default App;
