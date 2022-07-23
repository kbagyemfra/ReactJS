import React from "react";
import { Container } from "react-bootstrap";
import NewsletterContent from "./NewsletterContent/NewsletterContent";

const Newsletter = () => {
  return (
    <>
      <Container fluid className="newsletter">
        <h1>Newsletter</h1>
        <h5>Get timely updates from your favorite products</h5>
        <NewsletterContent />
      </Container>{" "}
      <div
        style={{ backgroundColor: "white", width: "100%", height: "1vh" }}
      ></div>
    </>
  );
};

export default Newsletter;
