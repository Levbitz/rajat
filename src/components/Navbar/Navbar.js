import React, { useState } from "react";
import Navdropdown from "../Navdropdown/Navdropdown";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../../assets/images/Logo.jpg";

function Navbar() {
  const [click, setClick] = useState(false);
  // const history = useHistory();
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar z-depth-0">
      <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        <img className="myLogo" src={Logo} alt="" />
      </Link>
      &nbsp; <h5 style={{ fontWeight: "bold" }}>Bhasman Machinery Pvt Ltd </h5>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
            About Us
          </Link>
        </li>
        {/*<li className="nav-item">
          <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
            Products
          </Link>
  </li>*/}
        <li className="nav-item">
          <Navdropdown />
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/gallary" className="nav-links" onClick={closeMobileMenu}>
            Gallary
          </Link>
        </li>
        *
        {/* <li className="nav-item">
          <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
            Contact Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/donate" className="nav-links" onClick={closeMobileMenu}>
            Danate
          </Link>
  </li>*/}
      </ul>
    </nav>
  );
}

export default Navbar;
