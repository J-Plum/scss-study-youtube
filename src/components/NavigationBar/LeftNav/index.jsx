import React from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import imgUrl from "../../../assets/logo.png";
import { useSideBar } from "../../../context/SideBarContext";

export default function index() {
  const { isToggled, setIsToggled } = useSideBar();


  const handleToggleSidebar = () => {
    setIsToggled(!isToggled);
  }
  return (
    <div className="menu-logo">
      <button className="icon-container burgetMenu" onClick={handleToggleSidebar}>
        <IoMenu size={25} />
      </button>
      <div className="logo-container">
        <Link>
          <img src={imgUrl} alt="youtube logo" />
        </Link>
      </div>
    </div>
  );
}
