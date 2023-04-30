import React, { useEffect } from "react";
import useWindowSize from "../../helpers/useWindowSize";
import SmallsideBar from "./SmallSideBar";
import BigSideBar from "./BigSideBar";
import { useSideBar } from "../../context/SideBarContext";

export default function index() {
  const { width } = useWindowSize();
  const { isToggled, setIsToggled } = useSideBar();

  useEffect(() => {
    width <= 1300 ? setIsToggled(false) : setIsToggled(true);
  }, [width]);
  return <>{width < 792 ? null : isToggled ? <BigSideBar /> : <SmallsideBar />}</>;
}
