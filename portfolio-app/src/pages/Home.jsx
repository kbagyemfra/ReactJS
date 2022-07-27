import React, { useContext } from "react";
import { GlobalContext } from "../context/global";
import Buttons from "../components/Buttons";
import About from "./About";
import Blogs from "./Blogs";
import Contactz from "./Contact";
import Portfolio from "./Portfolio";
import Title from "./Title";

const Home = () => {
  const { lightToggle } = useContext(GlobalContext);

  return (
    <>
      <div className={`main ${lightToggle ? "light-mode" : false}`}>
        <Title />
        <About />
        <Portfolio />
        <Blogs />
        <Contactz />
        {/* <!-- Side Buttons --> */}
        <Buttons />
      </div>
    </>
  );
};

export default Home;
