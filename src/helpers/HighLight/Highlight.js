import React from "react";
import "./highlight.css";

function Highlight({ style, title }) {
  return (
    <div className="lb_highlight_wrap">
      <h6 className={style}>{title}</h6>
    </div>
  );
}

export default Highlight;
