import React from "react";
import AbtImg from "../../assets/images/aboutSlide3.png";
import Topbanner from "../../components/Topbaner/Topbanner";
import Heading from "../../helpers/Headings/Heading";
import Highlight from "../../helpers/HighLight/Highlight";
import "./about.css";

function AboutPage() {
  return (
    <div>
      <Topbanner />
      <div className="lb_abt_content_wrap ">
        <div className="row">
          
          <div className="col l7 s12">
            <section>
              <Highlight title="Who we are and what we do" />
              <Heading title="About Bhasman Machinery Pvt Ltd" />
              <p>
              Bhasman Machineries Private Limited was founded by Mr. M P Bhaskar who has a vast experience of 30+ years in the field of hydraulic and pneumatics with hands on experience on most of the earthmoving, construction, and mining machineries.
              </p>
              <p>
              The Bhasman products are designed with advanced and sophisticated technology by adding our vast experience with enormous market knowledge to make the product of reliable quality, rugged performance, with lower maintenance expenses and competitive pricing ensuring higher profitability with good ROI to our trusted users.
              </p>
              <p>
              Bhasman Machineries has team of experienced professionals with a good network of dealers in the country and we always work towards the expansion of the dealer network to support our product users at every corner of the country.
              </p>
            </section>
          </div>
          <div className="col l5 s12">
            <section>
              <img src={AbtImg} alt="" className="responsive-img" />
            </section>
          </div>
        </div>
      </div>

      <div className="container-fluid white">
        <div className="container">
          <div className="row">
            {/* <div className="col l4 s12">
              <h3>Our Vision</h3>
              <p>
                To perform Consistently and deliver value-added Products to our
                customers with the highest level of Quality
              </p>
            </div> */}
            <div className="col l12 s12">
              <h3>Bhasman Machineries Mission: </h3>
              <ol>
                <li>To become one of the top-notch company with innovations and trust.</li>
                <li>To ensure best-in-class quality, highest standard of after sales support and above all, the customer satisfaction.</li>
                <li>To make company as a product driven company.</li>
                <li>To ensure a long-term mutual beneficiaryteam.</li>
              </ol>
            </div>
            {/* <div className="col l4 s12">
              <h3> Quality Service System .</h3>
              <p>
                Our Service Engineers are well trained & equipped to resolve any
                technical difficulties
              </p>
            </div> */}
          </div>
          <div className="lb_blockquate_wrap">
            <div className="lb_blockquate_container ">
              <blockquote>
                <div className="row">
                  <div className="col l12 s12">
                    <h5>
                    Bhasman Machineries believe that "There will always be Rocks in the Road ahead of us, We Break then to make our own path." By this we introduce our sophisticated machineries to make your path.
                    </h5>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
