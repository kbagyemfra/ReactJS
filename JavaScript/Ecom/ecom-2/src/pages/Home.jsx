import React from "react";
import Announce from "../components/Announce";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Nave from "../components/Nave";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Announce />
      <Nave />
      <Slider />
      <Categories />
      <Products />
      <Footer />
    </>
  );
};

export default Home;
