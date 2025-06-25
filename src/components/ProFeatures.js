// src/components/ProFeatures.js
import React from "react";
import "./ProFeatures.css";

const features = [
  { icon: "🛡️", title: "Data Protection" },
  { icon: "🔍", title: "Advanced Detection" },
  { icon: "📊", title: "Insightful Reports" },
  { icon: "📂", title: "Bulk Upload" },
  { icon: "⏱️", title: "24x7 Access" },
  { icon: "📈", title: "High Accuracy" },
  { icon: "🎯", title: "No Ads Ever" },
  { icon: "🚀", title: "AI Powered" },
];

const ProFeatures = () => {
  return (
    <section className="pro-section">
      <div className="pro-left">
        <h2>
          Upgrade to <span>PlagiaScan Pro</span> — the smarter detection tool
        </h2>
        <p>
          Experience faster, deeper and more accurate plagiarism checking with
          our AI-enhanced engine. Built for researchers, students, and
          professionals.
        </p>
        <button className="pro-button">👑 Go Pro</button>
      </div>

      <div className="pro-right">
        {features.map((feature, idx) => (
          <div className="feature-card" key={idx}>
            <div className="icon">{feature.icon}</div>
            <p>{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProFeatures;
