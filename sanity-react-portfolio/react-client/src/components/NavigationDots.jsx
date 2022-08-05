import React from "react";

const NavigationDots = ({ active }) => {
  const titles = ["home", "about", "work", "skills", "contact"];

  return (
    <div className="app__navigation">
      {titles.map((title, index) => (
        <a
          href={`#${title}`}
          key={title + index}
          className="app__navigation-dot"
          style={active === title ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
