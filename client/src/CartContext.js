import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const API_URL = "http://localhost:5000/cart";

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // 🟡 Fetch cart from backend
  useEffect(() => {
    fetch(`${API_URL}/all`)
      .then(res => res.json())
      .then(data => setCart(data))
      .catch(() => setCart([])); // fail-safe
  }, []);

  // 🟢 Add to Cart (POST)
  const addToCart = (product) => {
  setCart((prev) => {
    const existing = prev.find((p) => p._id === product._id);
    if (existing) {
      return prev.map((p) =>
        p._id === product._id ? { ...p, quantity: p.quantity + 1 } : p
      );
    }
    return [...prev, { ...product, quantity: 1 }];
  });
};

  // 🟣 Update Quantity (PUT)
  const updateQuantity = async (id, quantity) => {
    try {
      const res = await fetch(`${API_URL}/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity })
      });
      const data = await res.json();
      setCart(prev => prev.map(item => (item._id === id ? data : item)));
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  // 🔴 Remove from Cart (DELETE)
  const removeFromCart = async (id) => {
    try {
      await fetch(`${API_URL}/remove/${id}`, { method: "DELETE" });
      setCart(prev => prev.filter(item => item._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  // 🧹 Clear All Items
  const clearCart = async () => {
    try {
      await fetch(`${API_URL}/clear`, { method: "DELETE" });
      setCart([]);
    } catch (err) {
      console.error("Clear failed", err);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
