import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { images } from "../img-import";
import { urlFor, client } from "../client";
import { AppWrap } from "../wrapper";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  // const abouts = [
  //   {
  //     title: "Web Development",
  //     description: "I have a little over 1 year of experince with Web",
  //     imgUrl: images.about01,
  //   },
  //   {
  //     title: "Front End Development",
  //     description:
  //       "I have a little over 1 year of experince with Front End Applications",
  //     imgUrl: images.about02,
  //   },
  //   {
  //     title: "Back End Development",
  //     description: "I have a little over 1 year of experince with Back End",
  //     imgUrl: images.about03,
  //   },
  // ];

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>
      <div className="profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            {/* <img src={about.imgUrl} alt={about.title} /> */}
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "about");
