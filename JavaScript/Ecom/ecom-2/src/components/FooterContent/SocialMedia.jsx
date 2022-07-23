import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SocialMedia = () => {
  return (
    <div className="footer-sm" style={{ backgroundColor: "#212121" }}>
      <div className="container">
        <div className="row py-4 text-center text-white">
          <div className="col-lg-5 col-md-6 mb-4 mb-md-0 title">
            connect with us on social media
          </div>
          <div className="col-lg-7 col-md-6">
            <a href="#">
              <FacebookIcon className="icon" />
            </a>
            <a href="#">
              <InstagramIcon className="icon" />
            </a>
            <a href="#">
              <LinkedInIcon className="icon" />
            </a>
            <a href="#">
              <TwitterIcon className="icon" />
            </a>
            <a href="#">
              <YouTubeIcon className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
