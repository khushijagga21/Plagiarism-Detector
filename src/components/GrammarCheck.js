// src/components/GrammarCheck.js
import React, { useState } from "react";
import "./GrammarCheck.css";

const GrammarCheck = () => {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const checkGrammar = (e) => {
    e.preventDefault();

    // 🔧 Mock grammar check: detect common errors
    let errors = [];

    if (text.includes("your welcome")) {
      errors.push("Did you mean 'you're welcome'?");
    }
    if (text.includes("there going")) {
      errors.push("Did you mean 'they're going'?");
    }
    if (text.includes("definately")) {
      errors.push("Did you mean 'definitely'?");
    }

    if (errors.length === 0) {
      errors.push("✅ No grammar issues found!");
    }

    setSuggestions(errors);
  };

  return (
    <div className="grammar-container">
      <h2>📝 Grammar Checker</h2>
      <p className="subtext">Paste your text below. We'll check for common grammar issues.</p>

      <form onSubmit={checkGrammar} className="grammar-form">
        <textarea
          placeholder="Enter your text here..."
          rows="8"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>

        <button type="submit">Check Grammar</button>
      </form>

      <div className="grammar-results">
        {suggestions.map((item, index) => (
          <p key={index} className={item.startsWith("✅") ? "success" : "error"}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default GrammarCheck;
