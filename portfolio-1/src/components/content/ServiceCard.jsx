import React from "react";

const ServiceCard = (props) => {
  const { img, topLine, description } = props;

  // console.log(props);

  return (
    <>
      {/* Card */}
      <div className="card">
        <img src={img} alt="img" className="card-icon" />
        <h2 className="card-head">{topLine}</h2>
        <div className="card-desc">{description}</div>
      </div>
    </>
  );
};

export default ServiceCard;
