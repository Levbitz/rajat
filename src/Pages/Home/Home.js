import React from "react";
import Intro from "../../components/Intro/Intro";
import Navbar from "../../components/Navbar/Navbar";
import ProductHighligt from "../../components/ProductHighlight/ProductHighligt";
import Slider from "../../components/Slider/Slider";
import Tools from "../../components/Tools/Tools";

function Home() {
  return (
    <div>
      <Slider />
      <Intro />
      <ProductHighligt />
      <Tools />
    </div>
  );
}

export default Home;
