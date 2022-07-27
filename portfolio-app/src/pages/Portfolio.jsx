import React, { memo, useContext } from "react";
import { GlobalContext } from "../context/global";
import { portfolio } from "../data/data";

const Portfolio = () => {
  const { activeIndex } = useContext(GlobalContext);

  return (
    <section
      className={`container ${activeIndex === 2 && "active"}`}
      id="portfolio"
    >
      <div className="main-title">
        <h2>
          My <span>Portfolio</span>
          <span className="bg-text">My Work</span>
        </h2>
      </div>
      <p className="port-text">
        Here is some of my work that I've done in various programming languages.
      </p>
      <div className="portfolios">
        {portfolio.map((data, index) => (
          <div className="portfolio-item" key={index}>
            <div className="image">
              <img src={data.img} alt={data.alt} />
            </div>
            <div className="hover-items">
              <h2>{data.title}</h2>
              <h3>{data.subtitle}</h3>
              <div className="icons">
                <a href={data.href} className="icon">
                  {data.media.map((social, index) => {
                    console.log(data.href);

                    return (
                      // <a href={d} className=""></a>
                      <i className={`fab fa-${social}`} key={index}></i>
                    );
                  })}
                  {/* <i className="fab fa-github"></i> */}
                </a>
                {/* <a href="#" className="icon">
                <i className="fab fa-behance"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-youtube"></i>
              </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
