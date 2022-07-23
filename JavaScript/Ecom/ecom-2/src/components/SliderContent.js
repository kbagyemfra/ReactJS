import React from "react";

const SliderContent = (props) => {
  const { activeIndex, sliderImage } = props;

  // console.log(sliderImage);

  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.img} alt="" />
          <div className="info">
            <h1 className="slide-title">{slide.title}</h1>
            <p className="slide-text">{slide.desc}</p>
            <button className="btn">Shop Now</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SliderContent;
