import React, { useContext } from "react";
import { GlobalContext } from "../context/global";

const Title = () => {
  const { activeIndex } = useContext(GlobalContext);

  return (
    <div
      className={`header container ${activeIndex === 0 && "active"}`}
      id="home"
    >
      <div className="header-content">
        <div className="left-header">
          <div className="h-shape"></div>
          <div className="image">
            <img src="img/hero.jpeg" alt="" />
          </div>
        </div>
        <div className="right-header">
          <h1 className="name">
            Hi, I'm <span>David Kojo Agyemfra </span>A Web Developer.
          </h1>
          <p>
            I'm a Web Developer, I love to create beautiful and functional
            websites. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officia, libero? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Neque blanditiis sed aut!
          </p>
          <div className="btn-con">
            <a href="#home" className="main-btn">
              <span className="btn-text">Download CV</span>
              <span className="btn-icon">
                <i className="fas fa-download"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
