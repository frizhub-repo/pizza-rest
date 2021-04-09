import { combineReducers } from "redux";
import orderReducer from "./orderReducer";
import loadingReducer from "./loadingReducer";
import productsReducer from "./productsReducer";
import customersReducer from "./customersReducer";

export default combineReducers({
  orders: orderReducer,
  loadingReducer: loadingReducer,
  products: productsReducer,
  customers: customersReducer,
});
