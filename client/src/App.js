// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./Login";
import VerifyOtp from "./VerifyOtp";

import Store from "./Store";
import CartPage from "./CartPage";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Settings from "./Settings";
import PaymentPage from "./PaymentPage";

import ProtectedRoute from "./ProtectedRoute";

import ThemeProvider from "./ThemeContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider>
      <ToastContainer position="top-center" />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/verify" element={<VerifyOtp />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/store"
          element={
            <ProtectedRoute>
              <Store />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        {/* Payment Route (keep public or protected—your choice) */}
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

