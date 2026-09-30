import CartActionTypes from './cart.type';
import { addItemTocart, removeItem } from './cart.util';

const INITIAL_STATE = {
  hidden: true,
  cartItem: []
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItem: addItemTocart(
          state.cartItem,
          action.payload
        )
      };

    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItem: removeItem(
          state.cartItem,
          action.payload
        )
      };

    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItem: state.cartItem.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };

    default:
      return state;
  }
};

export default CartReducer;