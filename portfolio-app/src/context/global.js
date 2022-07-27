import { useState, createContext } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightToggle, setLightToggle] = useState(false);

  //   const handleOnClick = (index) => {
  //     // console.log(index);
  //     console.log(activeIndex);
  //     setActiveIndex(index); // remove the curly braces
  //   };

  //   const dataId = ["home", "about", "portfolio", "blogs", "contact"];
  //   const iconz = ["home", "user", "briefcase", "newspaper", "envelope-open"];

  return (
    <GlobalContext.Provider
      value={{ activeIndex, setActiveIndex, lightToggle, setLightToggle }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
