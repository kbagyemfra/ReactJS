import React from "react";
import { IoClose } from "react-icons/io5";

const Sidebar = ({ isOpen, toggle }) => {
  var sideStyle = { opacity: "0", visibility: "hidden" };

  if (isOpen) {
    sideStyle.opacity = "1";
    sideStyle.visibility = "visible";
  }

  //   console.log(sideStyle);

  return (
    <>
      <div className="sidebar-container" style={sideStyle} onClick={toggle}>
        {/* Close Icon */}
        <div className="icon" onClick={toggle}>
          <IoClose />
        </div>

        {/* Wrapper */}
        <div className="sidebar-wrapper">
          <div className="sidebar-menu">
            <a className="nav-link link" href="#about">
              About
            </a>
            <a className="nav-link link" href="#discover">
              Discover
            </a>
            <a className="nav-link link" href="#services">
              Services
            </a>
            <a className="nav-link link" href="/">
              Sign Up
            </a>
          </div>{" "}
          {/* SideBtn Wrapper */}
          <div className="sidebar-btn-wrapper">
            <a className="nav-link rounded-btn link-btn btn-rounded" href="/">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
