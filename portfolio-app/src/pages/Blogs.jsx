import React, { useContext } from "react";
import { GlobalContext } from "../context/global";
import { blogs } from "../data/data";

const Blogs = () => {
  const { activeIndex } = useContext(GlobalContext);

  return (
    <section
      className={`container ${activeIndex === 3 && "active"}`}
      id="blogs"
    >
      <div className="blogs-content">
        <div className="main-title">
          <h2>
            My <span>Blogs</span>
            <span className="bg-text">My Blogs</span>
          </h2>
        </div>
        <div className="blogs">
          {blogs.map((data, index) => (
            <div className="blog" key={index}>
              <img src={data.img} alt={data.alt} />
              <div className="blog-text">
                <h4>{data.title}</h4>
                <p>{data.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
