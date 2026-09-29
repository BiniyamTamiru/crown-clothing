import React from "react";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cartItem.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import { toggleCartHidden } from "../../redux/Car/cart.actions";

import { selectCartItems } from "../../redux/Car/cart.selector";
import "./cart-dropdawn.scss";

const CartDropDawn = ({ cartItem, dispatch }) => {
  const navigate = useNavigate();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItem.length ? (
          cartItem.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">
            Your cart is empty
          </span>
        )}
      </div>

      <CustomButton
        onClick={() => {
          navigate("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItem: selectCartItems
});

export default connect(mapStateToProps)(CartDropDawn);