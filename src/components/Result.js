// src/components/Results.js
import React from "react";
import "./Results.css";

const Results = () => {
  const similarity = 78;
  const originalText = "Machine learning is a method of data analysis that automates analytical model building.";
  const submittedText = "Machine learning is a process of analyzing data and automating model creation.";

  return (
    <div className="results-container">
      <h1 className="results-title">Plagiarism Report</h1>

      <div className="similarity-box">
        <h2>Similarity Score</h2>
        <p className="score">{similarity}%</p>
      </div>

      <div className="text-section">
        <div className="text-box">
          <h3>Original Text</h3>
          <p>{originalText}</p>
        </div>
        <div className="text-box highlight">
          <h3>Your Submitted Text</h3>
          <p>{submittedText}</p>
        </div>
      </div>

      <div className="btn-group">
        <button className="btn retry" onClick={() => window.location.href = "/proFeature"}>
          Try Again
        </button>
        <button className="btn download">
          Download Report
        </button>
      </div>
    </div>
  );
};

export default Results;
