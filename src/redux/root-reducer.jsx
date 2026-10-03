import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import UserReducer from "./user/user.reducer";
import CartReducer from "./Car/cart.reducer";
import directoryReducer from "./directory/directory.reducer";

import shopReducer from "./shop/shop.reducer";
const storage = {
  getItem: (key) => {
    return Promise.resolve(localStorage.getItem(key));
  },

  setItem: (key, value) => {
    localStorage.setItem(key, value);
    return Promise.resolve();
  },

  removeItem: (key) => {
    localStorage.removeItem(key);
    return Promise.resolve();
  },
};


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};


const rootReducer = combineReducers({
  user: UserReducer,
  cart: CartReducer,
  directory:directoryReducer,
  shop:shopReducer
});


export default persistReducer(persistConfig, rootReducer);