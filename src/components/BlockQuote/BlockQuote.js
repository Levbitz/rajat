import React from "react";
import "./blockQuote.css";

function BlockQuote() {
  return (
    <div className="lb_blockquate_wrap">
      <div className="lb_blockquate_container ">
        <blockquote>
          <div className="row">
            <div className="col l9 s12">
              <h5>
                Where ever you are, where ever you go, Bhasman Equipments will
                always be a call away for all your construction and demolition
                needs.
              </h5>
            </div>

            <div className="col l3 s12">
              <button className="btn btn-large red waves-effect waves-light">
                contact Us
              </button>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  );
}

export default BlockQuote;
