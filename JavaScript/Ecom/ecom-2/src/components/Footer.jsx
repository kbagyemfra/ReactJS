import React from "react";
import CompanyInfo from "./FooterContent/CompanyInfo";
import ContactUs from "./FooterContent/ContactUs";
import CopyRight from "./FooterContent/CopyRight";
import SocialMedia from "./FooterContent/SocialMedia";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <ContactUs />
        </div>

        <SocialMedia />
        <CompanyInfo />
        <CopyRight />
      </footer>

      {/* <!-- BACK TO TOP BUTTON  --> */}

      <a href="#" className="shadow rounded-circle back-to-top">
        <KeyboardArrowUpIcon className="icon" />
      </a>
    </>
  );
};

export default Footer;
