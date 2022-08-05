import React from "react";
import { Header } from "./components";
import { About, Footer, Hero, Skills, Work } from "./sections";

const App = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Hero />
        <About />
        <Work />
        <Skills />
        <Footer />
      </div>
    </>
  );
};

export default App;
