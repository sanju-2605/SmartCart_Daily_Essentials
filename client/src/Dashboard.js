// src/Dashboard.js
import React from "react";
import Sidebar from "./Sidebar";
import "./Dashboard.css";

export default function Dashboard() {
  const phone = localStorage.getItem("phone") || "User";

  return (
    <div className="layout">
      <Sidebar />

      <div className="dashboard-main">
        {/* HERO */}
        <section className="dashboard-hero">
          <img
            src="/smartcart-logo.png"
            alt="SmartCart"
            className="hero-logo"
          />
          <h1>Welcome back, {phone}! 👋</h1>
          <p>Your daily essentials at the best prices.</p>
        </section>

        {/* STATS */}
        <section className="stats-row">
          <div className="stat-card">
            <span>Items in Cart</span>
            <p>5 Items</p>
          </div>

          <div className="stat-card">
            <span>🎁 Active Offers</span>
            <p>1 Offer</p>
          </div>

          <div className="stat-card">
            <span>🍎 Categories</span>
            <p>4 Sections</p>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="categories-section">
          <h2 className="section-title">Popular Categories</h2>
          <div className="category-row">
            <div className="category-pill">🥛 Dairy</div>
            <div className="category-pill">🍎 Fruits & Veg</div>
            <div className="category-pill">🍞 Bakery</div>
            <div className="category-pill">🧴 Personal Care</div>
          </div>
        </section>

        {/* OFFER */}
        <section className="offer-banner">
          <h3>🔥 Mega Deal of the Day</h3>
          <p>
            Get <b>50% OFF</b> on all Dairy Products! Limited time only.
          </p>
          <button className="shop-btn">Shop Now</button>
        </section>
      </div>
    </div>
  );
}


