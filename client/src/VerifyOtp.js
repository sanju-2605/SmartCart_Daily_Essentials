// src/VerifyOtp.js
import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "./Auth.css";

const API_URL = "http://localhost:5000/auth";

export default function VerifyOtp() {
  const location = useLocation();          // location defined FIRST
  const navigate = useNavigate();

  const phone = location.state?.phone || "";
  const receivedOtp = location.state?.otp || "";   // auto OTP from login

  const [otp, setOtp] = useState(receivedOtp);     // auto-filled safely

  const verifyOtp = async () => {
    if (!otp) {
      alert("Enter OTP");
      return;
    }

    try {
      const res = await axios.post(`${API_URL}/verify-otp`, { phone, otp });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("phone", phone);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.error || "Invalid OTP");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <img src="/smartcart-logo.png" className="auth-logo" alt="SmartCart" />

        <h2>Verify OTP</h2>
        <p className="muted">OTP sent to {phone}</p>

        <input
          type="text"
          className="auth-input"
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
          maxLength={4}
        />

        <button onClick={verifyOtp} className="auth-btn">
          Verify OTP
        </button>
      </div>
    </div>
  );
}
