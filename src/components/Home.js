import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = ({ items, addToCart }) => {
  const [popupMessage, setPopupMessage] = useState(""); 

  const handleAddToCart = (id, name) => {
    addToCart(id); 
    setPopupMessage(`${name} has been added to the cart!`);

    setTimeout(() => {
      setPopupMessage("");
    }, 3000);
  };

  return (
    <div className="home">
      <h1>Our Products</h1>
      {popupMessage && <div className="popup-message">{popupMessage}</div>}

      <ul className="product-list">
        {items.map((item) => (
          <li key={item.id} className="product-item">
            <img src={item.image} alt={item.name} className="product-image" />
            <div className="product-info">
              <h3>{item.name}</h3>
              <p>₹{item.price.toFixed(2)}</p>
              <button onClick={() => handleAddToCart(item.id, item.name)}>
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/cart">
        <button className="cart-button">Go to Cart</button>
      </Link>
    </div>
  );
};

export default Home;
