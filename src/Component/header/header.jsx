import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

import Logo from "../../assets/crown-image.png";
import './header.css';


const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img src={Logo} className="logo" alt="Crown Logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
     
      <Link className="option" to="/shop">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;