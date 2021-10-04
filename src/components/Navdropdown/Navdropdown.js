import React, { useRef } from "react";
import "./navdropdown.css";
import { useDetectOutsideClick } from "../../customHooks/useDetectOutsideClick";
import { Link } from "react-router-dom";
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */
export default function Navdropdown() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="container">
      <div className="menu-container">
        <button
          onClick={onClick}
          onMouseEnter={onClick}
          className="menu-trigger z-depth-0 transparent"
        >
          <span className="white-text">Products</span>
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul
            className="z-depth-0 "
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: -50,
            }}
          >
            <li className="left">
              <Link onClick={onClick} to="/HydraulicBreaker" className="left">
                Hydraulic Breaker
              </Link>
            </li>

            <li className="left">
              <Link
                onClick={onClick}
                className="left"
                to="/VibratoryPlateCompactor"
              >
                Vibratory Plate Compactor
              </Link>
            </li>
            <li className="left">
              <Link onClick={onClick} className="left" to="/QuickCoupler">
                Quick Coupler
              </Link>
            </li>
            <li className="left">
              <Link
                onClick={onClick}
                to="/VibroRipper"
                className="left"
                href="#"
              >
                Vibro Ripper
              </Link>
            </li>
            <li className="left">
              <Link to="" onClick={onClick} className="left" href="#">
                Hydraulic Attachments
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
