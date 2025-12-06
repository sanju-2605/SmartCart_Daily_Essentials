// src/ProductModal.js
import React from "react";
import "./index.css";

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-body">
          <img src={product.image} alt={product.name} />
          <div className="modal-info">
            <h3>{product.name}</h3>
            <p className="modal-price">₹{product.price}</p>
            <p className="modal-desc">{product.description || "No description available."}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
