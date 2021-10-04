import React from "react";
import { Parallax } from "react-parallax";
import paroBg from "../../assets/images/topbanners/aboutTop.png";
import "./topbanner.css";

function Topbanner() {
  return (
    <Parallax
      style={{ height: 450 }}
      bgImage={paroBg}
      bgImageAlt="the cat"
      strength={500}
    ></Parallax>
  );
}

export default Topbanner;
