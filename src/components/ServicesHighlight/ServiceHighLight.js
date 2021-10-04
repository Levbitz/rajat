import React, { useState } from "react";
import Servicecategory from "../../assets/data/servicesdata";
import Heading from "../../helpers/Headings/Heading";
import Highlight from "../../helpers/HighLight/Highlight";
import "./serviceHighlight.css";
//import "./productHighligh.css";

function ServiceHighlight() {
  //const [category ,setCategory] = useState()
  return (
    <div className="lb_productlist_wrap">
      <Heading style="center" title="OUR SERVICES" />
      <Highlight
        style="center
"
        title='" WHERE EVER YOU ARE, WHERE EVER YOU GO,'
      />
      <Highlight
        style="center
"
        title='" BHASMAN EQUIPMENTS WILL ALWAYS BE A CALL AWAY FOR ALL YOUR CONSTRUCTION AND DEMOLITION NEEDS '
      />

      <div className="lb_service_highlight_wrap">
        <div className="row">
          {Servicecategory.map((catergory) => {
            return (
              <div className="col l6 s12">
                <p className="center"> {catergory.imgUrl}</p>
                <Highlight style="center" title={catergory.title} />
                <p className="lb_product_name">{catergory.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ServiceHighlight;
