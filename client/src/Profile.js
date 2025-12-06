import React from "react";
import Sidebar from "./Sidebar";
import "./index.css";

function Profile() {
  const phone = localStorage.getItem("phone");

  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <h2>Profile</h2>
        <p><b>Phone:</b> {phone}</p>
      </div>
    </div>
  );
}

export default Profile;
