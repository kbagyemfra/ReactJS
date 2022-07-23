import React, { useState } from "react";
import Footer from "../components/Footer";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";
import { about1, about2, about3 } from "../data/data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Header toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Hero />
      <Info {...about1} />
      <Info {...about2} />
      <Info {...about3} />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
