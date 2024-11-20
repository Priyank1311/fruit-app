import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { useDispatch, useSelector } from "react-redux";
import { fruits } from "./data";
import "./App.scss";
import {initialCart, addToCart, decrementCart} from './Carts/cartSlice'

const App = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  
  
  useEffect(() => {
    dispatch(initialCart(fruits.map((fruit) => ({ ...fruit, quantity: 0 }))));
  }, [dispatch]);

  // const addToCart = (id) => {
  //   setCart(
  //     cart.map((item) =>
  //       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  //     )
  //   );
  // };
  

  // const decrementCart = (id) => {
  //   setCart(
  //     cart.map((item) =>
  //       item.id === id && item.quantity > 0
  //         ? { ...item, quantity: item.quantity - 1 }
  //         : item
  //     )
  //   );
  // };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<Home items={cart} addToCart={(id) => dispatch(addToCart(id))} />}
          />
          <Route
            path="/cart"
            element={
            <Cart items={cart} 
                  addToCart={(id) => dispatch(addToCart(id))} 
                  decrementCart={(id) => dispatch(decrementCart(id))} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
