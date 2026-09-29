import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../../assets/crown-image.png";
import { auth } from "../../firebase/firebase.util";
import CartIcon from "../cart-icon/cart-icon";
import CartDropDawn from "../cart-dropdawn/cart-dropdawn";
import {createStructuredSelector} from 'reselect';
import { selectCartHidden } from "../../redux/Car/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";


const Header = ({ currentUser, hidden }) => (
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

      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/sign">
          SIGN IN
        </Link>
      )}

      <CartIcon />
    </div>

    {hidden ? null : <CartDropDawn />}
  </div>
);

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden:selectCartHidden
});

export default connect(mapStateToProps)(Header);