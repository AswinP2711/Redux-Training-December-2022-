import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { ProductReducer } from "./features/products/productsReducer";


export const store = createStore(ProductReducer,applyMiddleware(thunk))