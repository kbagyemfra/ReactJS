import React from "react";
import { motion } from "framer-motion";
import { images } from "../img-import";
import AppWrap from "../wrapper/AppWrap";

const Hero = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div className="hero app__flex">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="hero-info"
        >
          <div className="hero-badge">
            <div className="badge-cmp hero__flex">
              <span>👋</span>
              <div style={{ marginLeft: 20 }}>
                <p className="p-text">Hello, I am</p>
                <h1 className="head-text">Kojo</h1>
              </div>
            </div>

            <div className="tag-cmp hero__flex">
              <p className="p-text">Web Developer</p>
              <p className="p-text">Freelancer</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="hero-img"
        >
          <img src={images.profile} alt="profile_bg" />
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={images.circle}
            alt="profile_circle"
            className="overlay_circle"
          />
        </motion.div>

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="hero-circles"
        >
          {[images.javascript, images.react2, images.sass].map(
            (circle, index) => (
              <div className="circle-cmp app__flex" key={`circle-${index}`}>
                <img
                  src={circle}
                  alt="profile_bg"
                  className={`circle-${index}`}
                />
              </div>
            )
          )}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Hero, "home");
