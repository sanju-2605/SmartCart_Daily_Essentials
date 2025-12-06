import React, { useState } from "react";
import "./Store.css";

export default function Store() {
  const [category, setCategory] = useState("All");

  return (
    <div className="page-content">
      <div className="store-header">
        <h1>Welcome to SmartCart Store 🛒</h1>
        <p>Daily needs delivered at best prices</p>
      </div>

      <div className="store-filter">
        {["All", "Bakery", "Fruits & Veg", "Personal Care"].map((cat) => (
          <button
            key={cat}
            className={category === cat ? "active-filter" : ""}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="store-banner">
        <img src="/banner.png" alt="Offers" />
      </div>
    </div>
  );
}
