import React from "react";
import homeImg from "../../assets/images/homeSlide.jpg";
import Heading from "../../helpers/Headings/Heading";
import Highlight from "../../helpers/HighLight/Highlight";
import BlockQuote from "../BlockQuote/BlockQuote";
import "./intro.css";

function Intro() {
  return (
    <div className="lb_intro_wrap">
      <div className="container">
        <div className="row">
          <div className="col l8 s12">
            <Highlight title="WELCOME TO" />
            <Heading title="BHASMAN EQUIPMENTS" />
            <p>
            <strong>Bhasman Machineries Private Limited</strong> was founded by Mr. M P Bhaskar who has a vast experience of 30+ years in the field of hydraulic and pneumatics with hands on experience on most of the earthmoving, construction, and mining machineries.
            </p>
            <a class="btn red waves-effect waves-light " href="/about">Read More</a>
            {/* <p>
              BHASMAN EQUIPMENTS offers a broad range of sophisticated equipments
              which provide an easy and holistic solution for various types of
              construction and demolition needs. Our equipments are being used
              in various types of mines and construction sites.
            </p>
            <p>
              We are proud of both BHASMAN INDIA and BHASMAN SINGAPORE divisions
              which keep adding value to the organization as a whole.
            </p> */}
          </div>
          <div className="col l4 s12">
          <section>
              <img src={homeImg} alt="" className="responsive-img" />
            </section>
            
          </div>
        </div>
      </div>

      <BlockQuote />
    </div>
  );
}

export default Intro;
