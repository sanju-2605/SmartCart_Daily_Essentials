import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simple dummy validation (you can replace later)
    if (email === "admin@gmail.com" && password === "1234") {
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleLogin}>
        
        <img src="/logo.png" alt="SmartCart Logo" />

        <h2>Welcome Back 👋</h2>
        <p style={{ marginBottom: "15px", color: "#777" }}>
          Login to continue using SmartCart
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="login-btn" type="submit">Login</button>

        <div className="login-extra">
          <a href="/">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
}
