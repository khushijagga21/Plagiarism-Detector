// src/components/HeroSection.js
import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">🚀 AI-Powered Plagiarism Checker</h1>
        <p className="hero-subtitle">
          Discover originality with confidence. Paste your text and let us handle the rest.
        </p>
        <button className="hero-button">Get Started</button>
      </div>
      <div className="hero-animation">
        <img src="https://cdn-icons-png.flaticon.com/512/3082/3082383.png" alt="Scan" />
      </div>
    </section>
  );
};

export default HeroSection;
