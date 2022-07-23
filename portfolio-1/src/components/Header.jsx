import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = ({ toggle }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOnClick = (index) => {
    console.log(activeIndex);
    setActiveIndex(index); // remove the curly braces
  };

  const titles = ["about", "discover", "services"];
  const title = titles.map((title, index) => {
    return (
      <Link
        className={`nav-link link ${activeIndex === index ? "green-bar" : " "}`}
        // className={`nav-link link`}
        to={`${title}`}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        key={index}
        onClick={() => handleOnClick(index)}
      >
        {title}
      </Link>
    );
  });

  return (
    <>
      <div className="nave">
        <div className="nav-container">
          <div className="nav-logo">
            <Link
              className="navbar-brand"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
            >
              Paraguay Expo
            </Link>
          </div>

          <div className="mobile-icon" onClick={toggle}>
            <FaBars />
          </div>

          <div className="navbar-nav menu">{title}</div>
          <div className="sign-up">
            <a className="nav-link nave-btn btn-rounded" href="/">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
