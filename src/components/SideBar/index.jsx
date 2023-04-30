import React from "react";
import useWindowSize from "../../helpers/useWindowSize";
import SmallsideBar from "./SmallSideBar";
import BigSideBar from "./BigSideBar";

export default function index() {
  const { width } = useWindowSize();

  return <>{width < 792 ? null : width < 1250 ? <SmallsideBar /> : <BigSideBar />}</>;
}
