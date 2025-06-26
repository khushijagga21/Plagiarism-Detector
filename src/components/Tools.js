// src/pages/Tools.js
import React from "react";
import "./Tools.css"; // optional, or use Tailwind CSS

const tools = [
  {
    name: "Plagiarism Detector",
    description: "Check content originality in seconds using AI-powered detection.",
    icon: "🧠",
    link: "/plagiarism-detector",
  },
  {
    name: "Grammar Check",
    description: "Polish your writing with advanced grammar and spell checking.",
    icon: "✍️",
    link: "/grammar-check",
  },
  {
    name: "Humanize Converter",
    description: "Turn robotic or AI-generated text into natural, human-sounding content.",
    icon: "🤖➡️👤",
    link: "/humanize-text",
  },
  {
    name: "More Tools Coming Soon!",
    description: "We're constantly adding more powerful tools for creators and students.",
    icon: "🚀",
    link: "#",
  },
];

const Tools = () => {
  return (
    <div className="tools-container">
      <h1 className="tools-title">🛠️ Explore Our Tools</h1>
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <a href={tool.link} key={index} className="tool-card">
            <div className="tool-icon">{tool.icon}</div>
            <h2 className="tool-name">{tool.name}</h2>
            <p className="tool-description">{tool.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Tools;
