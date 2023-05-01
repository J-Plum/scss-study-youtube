import React, { useEffect } from "react";
import useWindowSize from "../../helpers/useWindowSize";
import SmallsideBar from "./SmallSideBar";
import BigSideBar from "./BigSideBar";
import { useSideBar } from "../../context/SideBarContext";

export default function index() {
  const { width } = useWindowSize();
  const { isToggled, setIsToggled } = useSideBar();

  useEffect(() => {
    width <= 1320
      ? setIsToggled(false)
      : location.pathname.startsWith('/video')
      ? setIsToggled(false)
      : setIsToggled(true);
  }, [width, location.pathname, setIsToggled]);

  return (
    <>
      {location.pathname.startsWith("/video/") ? (
        isToggled ? (
          <BigSideBar />
        ) : null
      ) : width < 792 ? null : isToggled ? (
        <BigSideBar />
      ) : (
        <SmallsideBar />
      )}
    </>
  );
}
