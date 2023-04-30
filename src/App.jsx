import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import SideBar from "./components/SideBar";
import { SearchContextProvider } from "./context/SearchContext";
import { SideBarContextProvider } from "./context/SideBarContext";

function App() {
  return (
    <>
      <SearchContextProvider>
        <SideBarContextProvider>
          <NavigationBar />
          <SideBar />
          <main>
            <Outlet />
          </main>
        </SideBarContextProvider>
      </SearchContextProvider>
    </>
  );
}

export default App;
