import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

import Logo from "../../assets/crown-image.png";
import './header.css';
import {auth} from'../../firebase/firebase.util';


const Header = ({currentUser}) => (
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
      {
        currentUser ?
        <div className="option" onClick={()=> auth.signOut()}> SIGN OUT </div>
        :
          <Link className="option">SIGN IN</Link>
      }
    </div>
  </div>
);

export default Header;