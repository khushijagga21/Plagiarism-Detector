// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Login from "./Login"


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">Plagia<span style={{ color: "#f9a825" }}>Scan</span></Link>
      </div>

      <ul className="nav-links">
           <li><Link to="/">Home</Link></li>
        <li><Link to="/proFeature">Checker</Link></li>
        <li><Link to="/GrammerCheck">Grammer Check</Link></li>
        <li><Link to="/TextCheckerBox">AI Detector</Link></li>
        <li><Link to="/Tools">Tools</Link></li>
        <li><Link to="/Login">Login</Link></li>

        <li>
          <select className="language-select">
            <option>EN</option>
            <option>HI</option>
          </select>
        </li>

        <li>
          <Link to="/pricing" className="go-pro-btn">⚡ Go Pro</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
