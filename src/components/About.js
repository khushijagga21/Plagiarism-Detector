// src/components/About.js
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <h1 className="about-title">👋 Who We Are</h1>
        <p className="about-intro">
          Welcome to <strong>Plagiarism Detector</strong> – your smart companion for
          writing, editing, and staying original. 🚀
        </p>

        <div className="about-section">
          <h2>🎯 Our Mission</h2>
          <p>
            We’re a team of passionate students and developers who believe in
            building tools that are simple, helpful, and powerful. Our goal is to make
            high-quality AI tools available to everyone — no distractions, no fluff.
          </p>
        </div>

        <div className="about-section">
          <h2>🧠 What We Offer</h2>
          <ul>
            <li>✅ Plagiarism Detection Tool</li>
            <li>✅ Grammar & Spell Checker</li>
            <li>✅ Humanize Text Converter (AI to Human)</li>
            <li>🔜 More tools launching soon!</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>💡 Why We Built This</h2>
          <p>
            During college, we often needed to check grammar, avoid plagiarism, and
            make AI text sound more natural — all without annoying popups or paywalls.
            That’s how this platform was born. Built by learners, for learners. 💻📚
          </p>
        </div>

        <div className="about-footer">
          <p>Thanks for visiting — we hope our tools make your life easier! 💙</p>
        </div>
      </div>
    </div>
  );
};

export default About;
