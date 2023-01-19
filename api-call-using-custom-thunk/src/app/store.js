import { applyMiddleware, createStore } from "redux";
import { ProductReducer } from "./features/products/productsReducer";
import ProductThunk from "./middleware/productMiddleware";


export const store = createStore(ProductReducer,applyMiddleware(ProductThunk))