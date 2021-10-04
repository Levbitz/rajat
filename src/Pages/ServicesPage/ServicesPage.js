import React from "react";
import ServiceHighlight from "../../components/ServicesHighlight/ServiceHighLight";
import Topbanner from "../../components/Topbaner/Topbanner";
import Heading from "../../helpers/Headings/Heading";
import Highlight from "../../helpers/HighLight/Highlight";

function ServicesPage() {
  return (
    <>
      <Topbanner />
      <ServiceHighlight />
    </>
  );
}

export default ServicesPage;
