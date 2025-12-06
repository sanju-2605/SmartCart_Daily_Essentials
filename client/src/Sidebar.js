// src/Sidebar.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import "./Sidebar.css";

export default function Sidebar() {
  const { cart } = useContext(CartContext);   // FIXED

  return (
    <div className="sidebar">
      <div className="logo-section">
        <img src="/smartcart-logo.png" alt="SmartCart" className="sidebar-logo" />
        <h2 className="sidebar-title">SmartCart</h2>
      </div>

      <ul className="nav-links">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/store">Store</Link></li>

        {/* FIXED cart badge + link */}
        <li>
          <Link to="/cart">
            Cart <span className="cart-badge">{cart.length}</span>
          </Link>
        </li>

        <li><Link to="/settings">Settings</Link></li>
      </ul>

      <div className="logout-btn">
        <Link to="/">Logout</Link>
      </div>
    </div>
  );
}
