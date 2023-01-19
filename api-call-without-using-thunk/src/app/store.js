import { createStore } from "redux";
import { ProductReducer } from "./features/products/productsReducer";


export const store = createStore(ProductReducer)