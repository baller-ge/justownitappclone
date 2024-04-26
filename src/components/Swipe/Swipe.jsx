import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideOne from "../../assets/products/SlideOne.jpg";
import SlideTwo from "../../assets/products/SlideTwo.jpg"

const Swipe = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
    afterChange: (current) => {
      setCurrentSlide(current);
      currentSlide
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="w-full shadow-md h-120 bg-white rounded-sm mt-4 sm:mt-10">
      <div className="carousel-root bg-white rounded-md">
        <div className="carousel carousel-slider" style={{ width: "100%" }}>
          <ul className="control-dots">
            <li className="dot" value="0" role="button" tabIndex="0" aria-label="slide item 1"></li>
            <li className="dot" value="1" role="button" tabIndex="0" aria-label="slide item 2"></li>
          </ul>
          <button type="button" aria-label="previous slide / item" className="control-arrow control-prev"></button>
          <div className="slider-wrapper axis-horizontal">
            <Slider {...settings}>
              <div className="slide">
                <img loading="lazy" src={SlideOne} alt="slider" className="object-cover bg-center bg-no-repeat h-80 w-full" />
              </div>
              <div className="slide">
                <img loading="lazy" src={SlideTwo} alt="slider" className="object-cover bg-center bg-no-repeat h-80 w-full" />
              </div>
            </Slider>
          </div>
          <button type="button" aria-label="next slide / item" className="control-arrow control-next"></button>
          <p className="carousel-status">1 of 2</p>
        </div>
      </div>
    </div>
  );
};

export default Swipe;