// src/components/Navbar.js
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo-circle">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3039/3039396.png"
            alt="logo"
          />
        </div>
        <h2 className="brand-name">Plagia<span>Scan</span></h2>
      </div>

      <ul className="nav-links">
        <li><a href="#">Checker</a></li>
        <li><a href="#">Paraphraser</a></li>
        <li><a href="#">AI Detector</a></li>
        <li><a href="#">Tools</a></li>
        <li><a href="#">Login</a></li>
      </ul>

      <div className="nav-right">
        <select className="language">
          <option>🌐 EN</option>
        </select>
        <button className="go-pro">
          <span>⚡</span> Go Pro
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
