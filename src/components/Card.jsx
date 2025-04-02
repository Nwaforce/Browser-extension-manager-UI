import React from "react";
import "../styles.css";
import "../data.json";

const Card = ({ extension }) => {
  return (
    <div className={`card ${extension.isActive ? "active" : "inactive"}`}>
      <img src={extension.logo} alt={extension.name} className="card-logo" />
      <div className="card-content">
        <h2>{extension.name}</h2>
        <p>{extension.description}</p>
        <button className="remove-btn">Remove</button>
        <label className="switch">
          <input type="checkbox" checked={extension.isActive} readOnly />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default Card;