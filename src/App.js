import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { fruits } from "./data";
import "./App.scss";

const App = () => {
  const [cart, setCart] = useState(fruits.map((fruit) => ({ ...fruit, quantity: 0 })));

  const addToCart = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementCart = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<Home items={cart} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart items={cart} addToCart={addToCart} decrementCart={decrementCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
