import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import ReactTooltip from "react-tooltip";

import {
  // urlFor,
  client,
} from "../client";
// import { AppWrap } from "../wrapper";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <>
      {experiences.map((experience) => {
        console.log("Hello");

        return (
          // <motion.div className="skills-exp-item" key={experience.year}>
          //   <div className="skills-exp-year">
          //     <p className="bold-text">{experience.year}</p>
          //   </div>
          //   <motion.div className="skills-exp-works">
          //     {experience.works.map((work) => (
          //       <>
          //         <motion.div
          //           whileInView={{ opacity: [0, 1] }}
          //           transition={{ duration: 0.5 }}
          //           className="skills-exp-work"
          //           data-tip
          //           data-for={work.name}
          //           key={work.name}
          //         >
          //           <h4 className="bold-text">{work.name}</h4>
          //           <p className="p-text">{work.company}</p>
          //         </motion.div>
          //         <ReactTooltip
          //           id={work.name}
          //           effect="solid"
          //           arrowColor="#fff"
          //           className="skills-tooltip"
          //         >
          //           {work.desc}
          //         </ReactTooltip>
          //       </>
          //     ))}
          //   </motion.div>
          // </motion.div>
          <h1>hello</h1>
        );
      })}
    </>
  );
};

export default Experience;
