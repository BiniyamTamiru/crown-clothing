import React from "react";
import './checkout.scss';
import{connect} from 'react-redux';
import { createStructuredSelector} from "reselect";
import CheckoutItem from "../../Component/checkout-item/checkout-item";
import { selectCartItems,selectCartTotal } from "../../redux/Car/cart.selector";
import CartItem from "../../Component/cart-item/cartItem.component";
const CheckoutPage =({cartItem,total})=>(
    <div className="checkout-page">
     <div className="checkout-header">
         <div className="header-block">
            <span>product</span>
            </div>
      <div className="header-block">
            <span>Description</span>
            </div>
              
      <div className="header-block">
            <span>Quantity</span>
              </div>
       <div className="header-block">
         <span>price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
              </div>
        </div>
{
       cartItem.map(cartItem=>
         <CheckoutItem key={cartItem.id} cartItem={cartItem} />
       )
}
       <div className="total">
            <span>TOTAL: ${total}</span>
       </div>
    </div>
);

 const mapStateToProps =createStructuredSelector({
      cartItem:selectCartItems,
      total:selectCartTotal
 });

export default connect(mapStateToProps) (CheckoutPage);
