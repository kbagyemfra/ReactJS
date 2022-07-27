import React, { useContext } from "react";
import FormBox from "../components/Form";
import { GlobalContext } from "../context/global";
import { blogs, contact, contactIcons } from "../data/data";

const Contactz = () => {
  const { activeIndex } = useContext(GlobalContext);

  return (
    <>
      <section
        className={`container contact ${activeIndex === 4 && "active"}`}
        id="contact"
      >
        <div className="contact-container">
          {/* Main Title */}
          <div className="main-title">
            <h2>
              Contact <span>Me</span>
              <span className="bg-text">Contact</span>
            </h2>
          </div>
          {/* Content */}
          <div className="contact-content-con">
            <div className="left-contact">
              {/*  */}
              <h4>Contact me here</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                laborum numquam? Quam excepturi perspiciatis quas quasi.
              </p>
              <div className="contact-info">
                {contact.map((data, index) => (
                  <div className="contact-item" key={index}>
                    <div className="icon">
                      <i className={data.class}></i>
                      <span>{data.span}</span>
                    </div>
                    <p>{data.desc}</p>
                  </div>
                ))}
              </div>
              <div className="contact-icons">
                <div className="contact-icon">
                  {contactIcons.map((data, index) => (
                    <a href={data.href} target={data.target} key={index}>
                      <i className={data.class}></i>
                    </a>
                  ))}
                </div>
              </div>
              {/*  */}
            </div>

            <div className="right-contact">
              <FormBox />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactz;
