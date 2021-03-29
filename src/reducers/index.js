import { combineReducers } from "redux";
import orderReducer from "./orderReducer";
import loadingReducer from "./loadingReducer";
import productsReducer from "./productsReducer";

export default combineReducers({
    orders: orderReducer,
    loadingReducer: loadingReducer,
    products: productsReducer,
});
