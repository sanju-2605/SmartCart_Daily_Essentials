import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function PaymentPage() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart?.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;

  const [phone, setPhone] = useState("");

  const handlePayment = async () => {
    if (!phone) return alert("Enter Phone Number!");

    try {
      const { data } = await axios.post("http://localhost:5000/orders", {
        userPhone: phone,
        items: cart,
        totalAmount: total,
      });

      if (data.success) {
        clearCart();
        alert("Payment Successful! Order Saved.");
        navigate("/store");
      }
    } catch (error) {
      alert("Order Failed!");
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Payment Page</h2>

      <h3>Total Amount: ₹{total}</h3>

      <input
        type="tel"
        placeholder="Enter Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ padding: "8px", marginTop: "15px", width: "250px" }}
      />

      <br /><br />

      <button
        style={{
          padding: "10px 20px",
          background: "green",
          color: "white",
          cursor: "pointer",
          border: "none",
          borderRadius: "4px",
        }}
        onClick={handlePayment}
      >
        Confirm Payment & Place Order
      </button>
    </div>
  );
}
