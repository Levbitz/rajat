import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import BannerOne from "../../assets/images/banners/banner1.png";
import BannerTwo from "../../assets/images/banners/banner3.png";
import BannerThree from "../../assets/images/banners/banner3.png";
import "./slider.css";

function Slider() {
  return (
    <Carousel
      infiniteLoop={true}
      autoPlay={true}
      showIndicators={false}
      showThumbs={false}
      stopOnHover={true}
      showIndicators={false}
    >
      <div>
        <img src={BannerOne} />
      </div>
      <div>
        <img src={BannerTwo} />
      </div>
      <div>
        <img src={BannerThree} />
      </div>
    </Carousel>
  );
}

export default Slider;
