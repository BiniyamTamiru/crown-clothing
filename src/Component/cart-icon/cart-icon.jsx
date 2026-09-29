import React from "react";
import "./cart-icon.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/Car/cart.actions";
import ShoppingIcon from "../../assets/Shopping-bag.svg";
import { selectCartItemsCount } from "../../redux/Car/cart.selector";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <img
      src={ShoppingIcon}
      className="shopping-icon"
      alt="shopping bag"
    />

    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);