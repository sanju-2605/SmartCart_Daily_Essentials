// src/Login.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const API_URL = "http://localhost:5000/auth";

export default function Login() {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const requestOtp = async () => {
    if (!phone || phone.length !== 10) {
      alert("Enter a valid 10-digit phone number");
      return;
    }

    try {
      const res = await axios.post(`${API_URL}/send-otp`, { phone });

      // show OTP popup
      alert("Your OTP is: " + res.data.otp);

      // send OTP to verify page
      navigate("/verify", { state: { phone, otp: res.data.otp } });

    } catch (err) {
      alert("Failed to send OTP");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <img src="/smartcart-logo.png" className="auth-logo" alt="SmartCart" />
        
        <h2>Welcome to SmartCart</h2>
        <p className="muted">Enter your phone number to continue</p>

        <input
          type="text"
          placeholder="10-digit phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
          className="auth-input"
          maxLength={10}
        />

        <button onClick={requestOtp} className="auth-btn">
          Send OTP
        </button>
      </div>
    </div>
  );
}
