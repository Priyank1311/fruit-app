import React from "react";
import "./Cart.scss";

const Cart = ({ items, addToCart, decrementCart }) => {
  const cartItems = items.filter((item) => item.quantity > 0);
  const grandTotal = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="cart-container">
      <div className="cart-items">
        <h1>Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>No items in the cart.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-info">
                  <span>{item.name}</span>
                  <span>₹{item.price.toFixed(2)}</span>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => decrementCart(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart(item.id)}>+</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="cart-summary">
        <h2>Order Summary</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="summary-item">
              <span>{item.name}</span>
              <span>
                {item.quantity} x ₹{item.price.toFixed(2)} = ₹
                {(item.quantity * item.price).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
        <h3 className="total">
          Total: <span>₹{grandTotal.toFixed(2)}</span>
        </h3>
      </div>
    </div>
  );
};

export default Cart;
