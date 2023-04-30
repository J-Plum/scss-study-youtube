import React from "react";
import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

export const SideBarContext = createContext();

export function SideBarContextProvider({ children }) {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SideBarContext.Provider value={{ isToggled, setIsToggled }}>
      {children}
    </SideBarContext.Provider>
  );
}

export function useSideBar() {
  return useContext(SideBarContext);
}

SideBarContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
