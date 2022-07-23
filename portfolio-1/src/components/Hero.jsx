import React from "react";
import Video from "../videos/video.mp4";

import { MdEast } from "react-icons/md";

const Hero = () => {
  return (
    <>
      <div className="hero-container" id="home">
        {/* Hero Background */}
        <div className="hero-bg">
          <video src={Video} className="video-bg" autoPlay loop muted></video>
        </div>

        {/* Content */}
        <div className="hero-content">
          <h1 className="hero">Virtual Banking Made</h1>
          <p className="hero-p">Sign up for a new account today</p>

          {/* Hero btn Wrapper */}
          <div className="btn-wrapper">
            <div className="btn-rounded btn">
              Get Started <MdEast className="arrow" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
