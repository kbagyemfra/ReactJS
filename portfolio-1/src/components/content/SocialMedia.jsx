import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsWhatsapp,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="social" style={{ backgroundColor: "#212121" }}>
      <div className="container">
        <div className="row py-4 text-center text-white">
          {/* <div className="col-lg-5 col-md-6 mb-4 mb-md-0 title">
            connect with us on social media
          </div> */}
          <div className="col-lg-7 col-md-6 icons">
            <a href="#home">
              <BsFacebook className="icon" />
            </a>
            <a href="#home">
              <BsInstagram className="icon" />
            </a>
            <a href="#home">
              <BsLinkedin className="icon" />
            </a>
            <a href="#home">
              <BsTwitter className="icon" />
            </a>
            <a href="#home">
              <BsWhatsapp className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
