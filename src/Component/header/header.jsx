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

import { HeaderContainer,LogoContainer,OptionContainer,OptionLink} from "./header.style";

const Header = ({ currentUser, hidden }) => (
 < HeaderContainer>
    <LogoContainer to="/">
      <img src={Logo} className="logo" alt="Crown Logo" />
    </LogoContainer>

    <OptionContainer className="options">
      <OptionLink to="/shop">
        SHOP
      </OptionLink>

      <OptionLink to="/shop">
        CONTACT
      </OptionLink>

      {currentUser ? (
        <OptionLink as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink  to="/sign">
          SIGN IN
        </OptionLink>
      )}

      <CartIcon />
    </OptionContainer>

    {hidden ? null : <CartDropDawn />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden:selectCartHidden
});

export default connect(mapStateToProps)(Header);