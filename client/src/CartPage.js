// src/CartPage.js
import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import { CartContext } from "./CartContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="page">
      <Sidebar />

      <div className="cart-container">
        <h2>Your Cart 🛒</h2>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <button className="continue-btn" onClick={() => navigate("/store")}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="cart-wrapper">
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item._id} className="cart-card">
                  <img src={item.image} alt={item.name} className="cart-img" />

                  <div className="cart-info">
                    <h3>{item.name}</h3>
                    <p>₹{item.price}</p>

                    <div className="qty-box">
                      <button
                        onClick={() =>
                          item.quantity > 1 &&
                          updateQuantity(item._id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item._id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="summary">
              <h3>Total: ₹{total}</h3>

              <button className="checkout-btn" onClick={() => navigate("/payment")}> Proceed to Checkout </button>
              <button className="outline-btn" onClick={() => navigate("/store")}>
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

