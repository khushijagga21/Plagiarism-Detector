// src/components/TextCheckerBox.js
import React, { useState } from "react";
import "./TextCheckerBox.css";

const TextCheckerBox = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;

  return (
    <div className="checker-box">
      <div className="box-header">
        <h3>Your Content</h3>
        <div className="rating">
          <span>4.8/5</span>
          <span className="stars">⭐⭐⭐⭐✬</span>
        </div>
      </div>

      <textarea
        className="text-area"
        placeholder="Check your content’s uniqueness — type or paste it here"
        value={text}
        onChange={handleChange}
      ></textarea>

      <div className="counter">
        <span>{wordCount} / 1000 Words</span> | <span>{charCount} Characters</span>
      </div>

      <div className="action-buttons">
        <button className="upload"><i>📎</i> Upload</button>
        <button className="url">🔗 Check By URL</button>
        <button className="exclude">🔗 Exclude URL</button>
        <button className="grammar">Check Grammar</button>
        <button className="plagiarism">Check Plagiarism</button>
      </div>
    </div>
  );
};

export default TextCheckerBox;
