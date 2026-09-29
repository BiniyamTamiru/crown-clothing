import React from "react";
import "./cart-icon.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/Car/cart.actions";
import ShoppingIcon from "../../assets/Shopping-bag.svg";
import { selectCartItemsCount } from "../../redux/Car/cart.selector";
import{createStructuredSelector} from 'reselect'
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

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);