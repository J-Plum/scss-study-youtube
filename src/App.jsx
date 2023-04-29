import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import SideBar from "./components/SideBar";


function App() {
  return (
    <>
      <NavigationBar />
      <SideBar/>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
