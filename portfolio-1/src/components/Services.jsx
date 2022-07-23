import React from "react";
import { card1, card2, card3 } from "../data/service.js";
import ServiceCard from "./content/ServiceCard.jsx";

const Services = () => {
  //   console.log(card1);

  const { topLine, description, img, goTo } = card1;

  return (
    <>
      <div className="service-container" id="services">
        <h1 className="service">Our Services</h1>
        <div className="service-wrapper">
          {/* Card */}
          <ServiceCard {...card1} />
          <ServiceCard {...card2} />
          <ServiceCard {...card3} />
        </div>
      </div>
    </>
  );
};

export default Services;
