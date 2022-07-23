import React from "react";
import FootCon from "./content/FootCon";
import { foot1, social } from "../data/footer.js";
import SocialMedia from "./content/SocialMedia";
import CopyRight from "./content/CopyRight";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-wrapper">
          <div className="link-container">
            <div className="link-wrapper">
              <FootCon {...foot1} />
              <FootCon {...social} />
              <FootCon {...foot1} />
              <FootCon {...social} />
            </div>
          </div>
        </div>
      </div>
      <SocialMedia />
      <CopyRight />
    </>
  );
};

export default Footer;
