import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import { ThemeContext } from "./ThemeContext";
import "./index.css";

export default function Settings() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="layout">
      <Sidebar />

      <div className="content settings-page">
        <h2>Settings ⚙️</h2>

        <div className="setting-row">
          <span>Theme</span>

          <label className="switch">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
            <span className="slider"></span>
          </label>
        </div>

        <p className="muted">Toggle between Light and Dark mode</p>
      </div>
    </div>
  );
}

