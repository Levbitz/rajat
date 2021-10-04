import React from "react";
import "./heading.css";

function Heading({ title, style }) {
  return (
    <div className="lb_heading_wrap ">
      <h2 className={style}>{title}</h2>
    </div>
  );
}

export default Heading;
