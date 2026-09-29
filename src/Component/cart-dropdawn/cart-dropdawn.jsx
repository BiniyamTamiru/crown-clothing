import React from "react";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cartItem.component";
import { connect } from "react-redux";

import { selectCartItems } from "../../redux/Car/cart.selector";
import "./cart-dropdawn.scss";

const CartDropDawn = ({ cartItem }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItem.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>

    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItem:selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropDawn);