import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { sliderItems } from "../data";
import SliderContent from "./SliderContent";

const Slider = () => {
  const len = sliderItems.length - 1;

  const [slideIndex, setSlideIndex] = useState(0);

  const prevSlide = () => {
    setSlideIndex(slideIndex < 1 ? len : slideIndex - 1);
    console.log(slideIndex);
  };

  const nextSlide = () =>
    setSlideIndex(slideIndex === len ? 0 : slideIndex + 1);

  return (
    <Container fluid className="slider">
      <div className="arrow right" onClick={nextSlide}>
        <ArrowForwardIosIcon />
      </div>

      <div className="slider-container">
        <SliderContent activeIndex={slideIndex} sliderImage={sliderItems} />
      </div>

      <div className="arrow left" onClick={prevSlide}>
        <ArrowBackIosIcon />
      </div>
    </Container>
  );
};

export default Slider;
