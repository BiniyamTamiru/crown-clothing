import React from "react";
import CustomButton from "../custom-button/custom-button";

import './cart-dropdawn.scss';

const CartDropDawn = ()=>(
   <div className="cart-dropdown">
     <div className="cart-items"/>
     <CustomButton>GO TO CHECKOUT</CustomButton>
   </div>
);

export default CartDropDawn;