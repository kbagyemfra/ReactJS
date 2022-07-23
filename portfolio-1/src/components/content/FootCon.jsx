import React from "react";

const FootCon = (props) => {
  const { topLine, sub1, sub2, sub3, sub4, sub5, goTo } = props;

  return (
    <>
      <div className="foot-items">
        <div className="link-header">{topLine}</div>
        <div className="footer-link">{sub1}</div>
        <div className="footer-link">{sub2}</div>
        <div className="footer-link">{sub3}</div>
        <div className="footer-link">{sub4}</div>
        <div className="footer-link">{sub5}</div>
      </div>
    </>
  );
};

export default FootCon;
