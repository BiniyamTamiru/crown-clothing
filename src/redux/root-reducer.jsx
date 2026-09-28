import {combineReducers} from'redux';

import UserReducer from './user/user.reducer';
import CartReducer from './Car/cart.reducer';
import cartIcon from '../Component/cart-icon/cart-icon';

export default combineReducers({
     user:UserReducer,
     cart: CartReducer
});