import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./app/features/cart/cart";
import Product from "./app/features/products/products";
import Home from "./app/home";
import Navigation from "./app/navbar";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product-menu" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
