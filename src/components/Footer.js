// src/components/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-about">
          <h3>About us</h3>
          <p>
            PlagiaScan helps users detect plagiarism, improve grammar, and write better with AI-powered tools.
            <br />
            For more: <a href="#">Free Tools</a>
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <div className="link-columns">
            <ul>
              <li><a href="#">Plagiarism Checker</a></li>
              <li><a href="#">AI Detector</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Terms of Services</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-subscribe">
          <h3>Subscribe to Our Newsletter</h3>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 PlagiaScan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
