import React, { useContext } from "react";
import { GlobalContext } from "../context/global";

const Buttons = () => {
  const { activeIndex, setActiveIndex, lightToggle, setLightToggle } =
    useContext(GlobalContext);

  const handleOnClick = (index) => {
    // console.log(index);
    // console.log(activeIndex);
    setActiveIndex(index); // remove the curly braces
  };

  const toggleTheme = () => {
    setLightToggle(!lightToggle);
  };

  const iconz = ["home", "user", "briefcase", "newspaper", "envelope-open"];

  return (
    <>
      <div className="controls">
        {iconz.map((names, index) => (
          <div
            className={`control ${
              activeIndex === index ? "active-btn" : "inactive-btn"
            }`}
            key={index}
            onClick={() => handleOnClick(index)}
          >
            <i className={`fas fa-${names}`}></i>
          </div>
        ))}
      </div>

      {/* <!-- Switch Btn --> */}
      <div className="theme-btn" onClick={toggleTheme}>
        <i className="fas fa-adjust"></i>
      </div>
    </>
  );
};

export default Buttons;
