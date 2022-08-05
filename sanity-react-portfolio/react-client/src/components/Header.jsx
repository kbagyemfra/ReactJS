import React, { useState } from "react";
import { images } from "../img-import";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const titles = ["home", "about", "work", "skills", "contact"];

  return (
    <nav className="header__navbar">
      <div className="header__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="header__navbar-links">
        {titles.map((title) => (
          <li className="header__flex p-text" key={`link-${title}`}>
            {/* <div /> */}
            <a href={`#${title}`}>{title}</a>
          </li>
        ))}
      </ul>

      <div className="header__navbar-menu">
        {/* <HiMenuAlt4 onClick={() => setToggle(true)} /> */}

        {toggle ? (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {titles.map((title) => (
                <li key={title}>
                  <a href={`#${title}`} onClick={() => setToggle(false)}>
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : (
          <HiMenuAlt4 onClick={() => setToggle(true)} />
        )}
      </div>
    </nav>
  );
};

export default Header;
