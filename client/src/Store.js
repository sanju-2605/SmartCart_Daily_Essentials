// src/Store.js
import React, { useEffect, useState, useContext } from "react";
import Sidebar from "./Sidebar";
import { CartContext } from "./CartContext";
import "./Store.css";
import axios from "axios";
import { toast } from "react-toastify";

export default function Store() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const { addToCart } = useContext(CartContext);

  const categories = [
    "All",
    "Dairy",
    "Bakery",
    "Snacks",
    "Beverages",
    "Fruits & Veg",
    "Household",
    "Personal Care",
    "Groceries",
  ];

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log("FETCH ERROR:", err));
  }, []);

  // FILTER LOGIC
  let filtered = [...products];

  if (activeCategory !== "All") {
    filtered = filtered.filter((p) => p.category === activeCategory);
  }

  if (search.trim() !== "") {
    filtered = filtered.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "high") filtered.sort((a, b) => b.price - a.price);

  return (
    <div className="page">
      <Sidebar />

      <div className="store-container">
        {/* HERO */}
        <div className="banner">
          <h1>SmartCart Store 🛒</h1>
          <p>Your daily essentials delivered fast</p>
        </div>

        {/* MOVING DISCOUNT RIBBON */}
        <div className="discount-ribbon move">
          <span>
            ✨ Mega Savings Carnival! Up To 50% OFF on Dairy — Limited Time Only!
            ✨
          </span>
        </div>

        {/* FILTERS */}
        <div className="filters-box">
          <input
            className="search-input"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="sort-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
          </select>
        </div>

        {/* CATEGORY TABS */}
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-btn ${
                cat === activeCategory ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PRODUCT GRID */}
        <div className="product-grid">
          {filtered.map((p) => (
            <div className="product-card" key={p._id}>
              <img src={p.image} alt={p.name} className="prod-img" />
              <h3>{p.name}</h3>
              <p className="price">₹{p.price}</p>

              <button
                className="green-btn"
                onClick={() => {
                  addToCart(p);
                  toast.success(`${p.name} added to cart 🛒`);
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
