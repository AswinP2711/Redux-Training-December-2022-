import { combineReducers } from "redux";
import CartReducer from "./features/cart/cartReducer";
import ProductReducer from "./features/products/productReducer";

export const appReducer = combineReducers({
    products : ProductReducer,
    cart : CartReducer
})

