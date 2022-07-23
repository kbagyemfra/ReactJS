import React from "react";
import { contactUs } from "../../data";

const ContactUs = () => {
  return (
    <div className="row">
      {contactUs.map((contact) => (
        <div
          className="col-md-4 col-lg-4 contact-box pt-1 d-md-block d-lg-flex d-flex"
          key={contact.id}
        >
          <div className="contact-box__info">
            <h1>{contact.reach}</h1>
            <a href="#" className="contact-box__info--title">
              {contact.title}
            </a>
            <p className="contact-box__info--subtitle"> {contact.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactUs;
