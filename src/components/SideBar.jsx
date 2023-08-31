import React from "react";
import "../styles/SideBar.css";
import { FcGraduationCap } from "react-icons/fc";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <i>
            <FcGraduationCap />
          </i>
          <h2>Yasar</h2>
        </div>
      </div>
    </>
  );
};

export default SideBar;
