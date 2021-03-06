import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { orderReducer } from "./orderReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  orders: orderReducer,
});
