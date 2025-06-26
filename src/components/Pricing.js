// src/components/Pricing.js
import React from "react";
import "./Pricing.css";

const pricingPlans = [
  {
    title: "Free",
    price: "₹0",
    features: ["Limited plagiarism checks", "Basic report", "No history", "No customer support"],
    available: [true, true, false, false],
    buttonText: "Get Started",
  },
  {
    title: "Pro",
    price: "₹299/month",
    features: ["Unlimited checks", "Detailed report", "Save history", "Email support"],
    available: [true, true, true, true],
    buttonText: "Upgrade Now",
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: ["Unlimited checks", "Detailed analytics", "Team dashboard", "Priority support"],
    available: [true, true, true, true],
    buttonText: "Contact Us",
  },
];

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h1 className="pricing-title">Our Plans</h1>
      <p className="pricing-subtitle">Choose a plan that fits your needs</p>

      <div className="pricing-cards">
        {pricingPlans.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <h2>{plan.title}</h2>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <span className={plan.available[i] ? "available" : "unavailable"}>
                    {plan.available[i] ? "✅" : "❌"} {feature}
                  </span>
                </li>
              ))}
            </ul>
            <button className="pricing-btn">{plan.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
